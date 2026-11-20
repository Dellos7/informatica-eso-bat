#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
validar_entregas.py
Validador automático de entregas (.odt) para la Actividad 1 (Creación de documentos
con LibreOffice Writer) de Digitalización (Tema 2: Documentos digitales).

Funcionamiento:
- Recorre una carpeta de entregas donde cada subcarpeta corresponde a un alumno/a.
- Busca en cada subcarpeta los documentos .odt correspondientes a cada parte de la
  actividad (ej1..ej6). Si un ejercicio no se ha entregado, otorga 0 puntos en ese criterio.
- Opcionalmente (--modo flexible), si falta algún ejX.odt pero el alumno ha entregado
  un documento final (final.odt) o posterior, puede evaluarlo sobre dicho documento.
- También permite evaluar un único archivo .odt directamente pasando su ruta.
- Analiza el XML interno de OpenDocument (styles.xml, content.xml e imágenes PNG en Pictures/)
  resolviendo la herencia completa de estilos y formatos directos.
- Otorga la puntuación de la rúbrica en cada uno de los 6 criterios:
    * Criterios de 2 puntos (1, 2, 4, 5): niveles 0 | 0,5 | 1 | 1,5 | 2
    * Criterios de 1 punto  (3, 6):       niveles 0 | 0,25 | 0,5 | 0,75 | 1
- Genera un informe detallado en Markdown (resultado_validacion.md) y una hoja de
  calificaciones en CSV compatible con Excel/Calc (resultado_validacion.csv).
"""

import argparse
import csv
import os
import re
import struct
import sys
import zipfile
from dataclasses import dataclass, field
from pathlib import Path
from typing import Dict, List, Optional, Tuple
import xml.etree.ElementTree as ET

# Espacios de nombres estándar de OpenDocument (ODF)
NS = {
    "office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
    "style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
    "text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
    "table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
    "draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
    "fo": "urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
    "xlink": "http://www.w3.org/1999/xlink",
    "svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
    "loext": "urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
}


def qname(prefix: str, tag: str) -> str:
    return f"{{{NS[prefix]}}}{tag}"


# ==============================================================================
# Utilidades de conversión de unidades y colores
# ==============================================================================

def parse_length_cm(val: Optional[str]) -> Optional[float]:
    """Convierte una medida ODF ('2cm', '20mm', '0.7874in', '12pt') a centímetros."""
    if not val or not isinstance(val, str):
        return None
    val = val.strip().lower()
    m = re.match(r"^(-?\d+(?:\.\d+)?)\s*(cm|mm|in|pt|px)?$", val)
    if not m:
        return None
    num = float(m.group(1))
    unit = m.group(2) or "cm"
    if unit == "cm":
        return num
    if unit == "mm":
        return num / 10.0
    if unit == "in":
        return num * 2.54
    if unit == "pt":
        return num * 2.54 / 72.0
    if unit == "px":
        return num * 2.54 / 96.0
    return None


def parse_length_pt(val: Optional[str]) -> Optional[float]:
    """Convierte una medida ODF ('38pt', '0.053cm') a puntos tipográficos (pt)."""
    if not val or not isinstance(val, str):
        return None
    val = val.strip().lower()
    m = re.match(r"^(-?\d+(?:\.\d+)?)\s*(pt|cm|mm|in|px)?$", val)
    if not m:
        return None
    num = float(m.group(1))
    unit = m.group(2) or "pt"
    if unit == "pt":
        return num
    if unit == "cm":
        return num * 72.0 / 2.54
    if unit == "mm":
        return (num / 10.0) * 72.0 / 2.54
    if unit == "in":
        return num * 72.0
    if unit == "px":
        return num * 72.0 / 96.0
    return None


def parse_hex_color(color_str: Optional[str]) -> Optional[Tuple[int, int, int]]:
    """Convierte '#rrggbb' a tupla (R, G, B)."""
    if not color_str or not isinstance(color_str, str):
        return None
    c = color_str.strip().lower()
    m = re.match(r"^#([0-9a-f]{6})$", c)
    if not m:
        return None
    h = m.group(1)
    return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))


def is_blue_color(color_str: Optional[str]) -> bool:
    """Comprueba si un color hexadecimal pertenece a la gama del azul."""
    rgb = parse_hex_color(color_str)
    if not rgb:
        return False
    r, g, b = rgb
    # El componente azul debe ser dominante frente al rojo y mayor que el verde
    return b >= 80 and b > r + 25 and b >= g


def is_light_color(color_str: Optional[str]) -> bool:
    """Comprueba si es un color de fondo claro/pastel (no transparente ni blanco puro)."""
    if not color_str or color_str.strip().lower() in ("transparent", "none"):
        return False
    rgb = parse_hex_color(color_str)
    if not rgb:
        return False
    r, g, b = rgb
    if r == 255 and g == 255 and b == 255:
        return False
    luminance = (0.299 * r + 0.587 * g + 0.114 * b)
    return luminance >= 150


def is_gray_color(color_str: Optional[str]) -> bool:
    """Comprueba si un color es gris (oscuro o claro, con R≈G≈B)."""
    rgb = parse_hex_color(color_str)
    if not rgb:
        return False
    r, g, b = rgb
    if (r, g, b) in ((0, 0, 0), (255, 255, 255)):
        return False
    return max(r, g, b) - min(r, g, b) <= 35


def parse_border(border_str: Optional[str]) -> Optional[Dict]:
    """
    Analiza una cadena de borde ODF como '1.5pt solid #00008b' o '0.053cm solid #00008b'.
    Devuelve {'width_pt': float, 'style': str, 'color': str} o None si es 'none'.
    """
    if not border_str or not isinstance(border_str, str):
        return None
    b = border_str.strip().lower()
    if not b or b == "none":
        return None
    width_pt = None
    color = None
    style = "solid"
    for token in b.split():
        if token.startswith("#") and len(token) == 7:
            color = token
        elif token in ("solid", "double", "dotted", "dashed", "inset", "outset", "groove", "ridge"):
            style = token
        else:
            w = parse_length_pt(token)
            if w is not None:
                width_pt = w
    if width_pt is not None and width_pt <= 0.01:
        return None
    return {"width_pt": width_pt or 0.0, "style": style, "color": color}


# ==============================================================================
# Representación y análisis de un documento ODT
# ==============================================================================

@dataclass
class CheckItem:
    description: str
    passed: bool
    weight: float
    detail: str = ""
    partial: float = 0.0  # 0.0 a 1.0 (1.0 si passed=True)


@dataclass
class CriterionResult:
    criterion_num: int
    criterion_name: str
    max_score: float
    awarded_score: float
    level_description: str
    evaluated_file: str
    checks: List[CheckItem] = field(default_factory=list)


class OdtDocument:
    """Carga un archivo .odt y resuelve estilos, páginas maestras, párrafos, secciones y tablas."""

    def __init__(self, path: Path):
        self.path = path
        self.styles_root: Optional[ET.Element] = None
        self.content_root: Optional[ET.Element] = None
        self.image_transparency: Dict[str, bool] = {}

        # Diccionarios de estilos: (family, name) -> dict de propiedades y metadatos
        self.default_styles: Dict[str, Dict] = {}
        self.styles: Dict[Tuple[str, str], Dict] = {}
        self.page_layouts: Dict[str, Dict] = {}
        self.master_pages: Dict[str, Dict] = {}

        self._load()

    def _load(self):
        with zipfile.ZipFile(self.path, "r") as z:
            if "styles.xml" in z.namelist():
                self.styles_root = ET.fromstring(z.read("styles.xml"))
            if "content.xml" in z.namelist():
                self.content_root = ET.fromstring(z.read("content.xml"))
            # Inspeccionar transparencia de imágenes PNG
            for name in z.namelist():
                if name.startswith("Pictures/") and name.lower().endswith(".png"):
                    data = z.read(name)
                    self.image_transparency[name] = self._check_png_alpha(data)

        self._parse_all_styles()

    @staticmethod
    def _check_png_alpha(data: bytes) -> bool:
        """Verifica en binario si un PNG tiene canal alfa (color_type 4 o 6) o chunk tRNS."""
        if len(data) < 26 or data[:8] != b"\x89PNG\r\n\x1a\n":
            return False
        try:
            _, _, _, color_type = struct.unpack(">IIBB", data[16:26])
            return (color_type in (4, 6)) or (b"tRNS" in data)
        except Exception:
            return False

    def _extract_style_dict(self, style_elem: ET.Element, source: str) -> Dict:
        """Extrae propiedades de un nodo <style:style> o <style:default-style>."""
        info = {
            "name": style_elem.get(qname("style", "name"), ""),
            "display_name": style_elem.get(qname("style", "display-name"), ""),
            "family": style_elem.get(qname("style", "family"), ""),
            "parent": style_elem.get(qname("style", "parent-style-name")),
            "master_page_name": style_elem.get(qname("style", "master-page-name")),
            "source": source,  # 'named' (styles.xml) o 'auto'
            "paragraph_props": {},
            "text_props": {},
            "table_props": {},
            "table_cell_props": {},
            "table_col_props": {},
            "section_props": {},
            "graphic_props": {},
            "drop_cap": None,
            "columns": None,
            "column_sep": None,
            "column_list": [],
        }

        for child in style_elem:
            tag = child.tag
            if tag == qname("style", "paragraph-properties"):
                info["paragraph_props"].update(child.attrib)
                dc = child.find(qname("style", "drop-cap"))
                if dc is not None:
                    info["drop_cap"] = dict(dc.attrib)
            elif tag == qname("style", "text-properties"):
                info["text_props"].update(child.attrib)
            elif tag == qname("style", "table-properties"):
                info["table_props"].update(child.attrib)
            elif tag == qname("style", "table-cell-properties"):
                info["table_cell_props"].update(child.attrib)
            elif tag == qname("style", "table-column-properties"):
                info["table_col_props"].update(child.attrib)
            elif tag == qname("style", "section-properties"):
                info["section_props"].update(child.attrib)
                cols = child.find(qname("style", "columns"))
                if cols is not None:
                    info["columns"] = dict(cols.attrib)
                    sep = cols.find(qname("style", "column-sep"))
                    if sep is not None:
                        info["column_sep"] = dict(sep.attrib)
                    info["column_list"] = [
                        dict(c.attrib) for c in cols.findall(qname("style", "column"))
                    ]
            elif tag in (qname("style", "graphic-properties"), qname("loext", "graphic-properties")):
                info["graphic_props"].update(child.attrib)
            elif tag == qname("style", "drawing-page-properties"):
                info["graphic_props"].update(child.attrib)

        return info

    def _parse_all_styles(self):
        # 1. styles.xml: office:styles, office:automatic-styles, office:master-styles
        if self.styles_root is not None:
            office_styles = self.styles_root.find(qname("office", "styles"))
            if office_styles is not None:
                for ds in office_styles.findall(qname("style", "default-style")):
                    d = self._extract_style_dict(ds, "default")
                    self.default_styles[d["family"]] = d
                for st in office_styles.findall(qname("style", "style")):
                    d = self._extract_style_dict(st, "named")
                    self.styles[(d["family"], d["name"])] = d

            auto_styles = self.styles_root.find(qname("office", "automatic-styles"))
            if auto_styles is not None:
                for st in auto_styles.findall(qname("style", "style")):
                    d = self._extract_style_dict(st, "auto_styles")
                    self.styles[(d["family"], d["name"])] = d
                for pl in auto_styles.findall(qname("style", "page-layout")):
                    pl_name = pl.get(qname("style", "name"), "")
                    pl_props = {}
                    header_props = {}
                    footer_props = {}
                    p_elem = pl.find(qname("style", "page-layout-properties"))
                    if p_elem is not None:
                        pl_props.update(p_elem.attrib)
                    h_elem = pl.find(qname("style", "header-style"))
                    if h_elem is not None:
                        hf = h_elem.find(qname("style", "header-footer-properties"))
                        if hf is not None:
                            header_props.update(hf.attrib)
                    f_elem = pl.find(qname("style", "footer-style"))
                    if f_elem is not None:
                        hf = f_elem.find(qname("style", "header-footer-properties"))
                        if hf is not None:
                            footer_props.update(hf.attrib)
                    self.page_layouts[pl_name] = {
                        "props": pl_props,
                        "header_props": header_props,
                        "footer_props": footer_props,
                    }

            master_styles = self.styles_root.find(qname("office", "master-styles"))
            if master_styles is not None:
                for mp in master_styles.findall(qname("style", "master-page")):
                    mp_name = mp.get(qname("style", "name"), "")
                    self.master_pages[mp_name] = {
                        "name": mp_name,
                        "display_name": mp.get(qname("style", "display-name"), mp_name),
                        "page_layout_name": mp.get(qname("style", "page-layout-name"), ""),
                        "draw_style_name": mp.get(qname("draw", "style-name"), ""),
                        "next_style_name": mp.get(qname("style", "next-style-name"), ""),
                        "header_elem": mp.find(qname("style", "header")),
                        "footer_elem": mp.find(qname("style", "footer")),
                    }

        # 2. content.xml: office:automatic-styles
        if self.content_root is not None:
            auto_styles = self.content_root.find(qname("office", "automatic-styles"))
            if auto_styles is not None:
                for st in auto_styles.findall(qname("style", "style")):
                    d = self._extract_style_dict(st, "auto_content")
                    self.styles[(d["family"], d["name"])] = d

    def resolve_style(self, family: str, name: Optional[str]) -> Dict:
        """
        Resuelve un estilo fusionando la cadena de herencia desde default-style
        hasta el estilo solicitado.
        """
        chain = []
        curr = name
        visited = set()
        while curr and curr not in visited:
            visited.add(curr)
            st = self.styles.get((family, curr))
            if not st:
                break
            chain.append(st)
            curr = st.get("parent")

        merged = {
            "chain_names": [s["name"] for s in chain],
            "master_page_name": None,
            "paragraph_props": {},
            "text_props": {},
            "table_props": {},
            "table_cell_props": {},
            "table_col_props": {},
            "section_props": {},
            "graphic_props": {},
            "drop_cap": None,
            "columns": None,
            "column_sep": None,
            "column_list": [],
        }

        if family in self.default_styles:
            ds = self.default_styles[family]
            for k in ("paragraph_props", "text_props", "table_props", "table_cell_props", "graphic_props"):
                merged[k].update(ds.get(k, {}))

        for st in reversed(chain):
            if st.get("master_page_name"):
                merged["master_page_name"] = st["master_page_name"]
            for k in (
                "paragraph_props",
                "text_props",
                "table_props",
                "table_cell_props",
                "table_col_props",
                "section_props",
                "graphic_props",
            ):
                merged[k].update(st.get(k, {}))
            if st.get("drop_cap") is not None:
                merged["drop_cap"] = st["drop_cap"]
            if st.get("columns") is not None:
                merged["columns"] = st["columns"]
            if st.get("column_sep") is not None:
                merged["column_sep"] = st["column_sep"]
            if st.get("column_list"):
                merged["column_list"] = st["column_list"]

        return merged

    def get_paragraph_effective_style(self, p_elem: ET.Element) -> Dict:
        """
        Obtiene el estilo efectivo de un párrafo <text:p> o <text:h>,
        teniendo en cuenta también si el alumno aplicó formato de carácter (<text:span>)
        a la totalidad del texto del párrafo.
        """
        style_name = p_elem.get(qname("text", "style-name"), "")
        resolved = self.resolve_style("paragraph", style_name)

        # Si el párrafo contiene un único span (o spans que cubren casi todo el texto),
        # fusionar sus text_props para detectar tamaño, fuente o color aplicados como carácter.
        total_text = self.get_element_text(p_elem).strip()
        if total_text:
            for child in p_elem:
                if child.tag == qname("text", "span"):
                    span_text = self.get_element_text(child).strip()
                    if len(span_text) >= len(total_text) * 0.8:
                        span_style = self.resolve_style("text", child.get(qname("text", "style-name")))
                        resolved["text_props"].update(span_style["text_props"])
        return resolved

    @staticmethod
    def get_element_text(elem: Optional[ET.Element]) -> str:
        """Obtiene todo el texto plano de un elemento XML excluyendo marcos flotantes anidados."""
        if elem is None:
            return ""
        parts = []

        def _walk(e: ET.Element):
            if e.tag == qname("draw", "frame"):
                return
            if e.text:
                parts.append(e.text)
            for c in e:
                _walk(c)
                if c.tail:
                    parts.append(c.tail)

        _walk(elem)
        return "".join(parts)

    def get_body_text_elem(self) -> Optional[ET.Element]:
        if self.content_root is None:
            return None
        body = self.content_root.find(qname("office", "body"))
        if body is None:
            return None
        return body.find(qname("office", "text"))


# ==============================================================================
# Validaciones específicas de los 6 criterios
# ==============================================================================

def map_score_to_rubric(ratio: float, max_score: float, rubric_levels: List[Dict]) -> Tuple[float, str]:
    """
    Convierte un porcentaje de cumplimiento (0.0 .. 1.0) al nivel de la rúbrica:
    - Para 2 puntos: 0 | 0.5 | 1.0 | 1.5 | 2.0
    - Para 1 punto:  0 | 0.25 | 0.5 | 0.75 | 1.0
    """
    if ratio >= 0.85:
        idx = 4
    elif ratio >= 0.65:
        idx = 3
    elif ratio >= 0.45:
        idx = 2
    elif ratio >= 0.15:
        idx = 1
    else:
        idx = 0

    if rubric_levels and len(rubric_levels) >= 5:
        lvl = rubric_levels[idx]
        return lvl["score"], lvl["definition"]

    # Fallback si la rúbrica tiene menos niveles
    scores_2 = [0.0, 0.5, 1.0, 1.5, 2.0]
    scores_1 = [0.0, 0.25, 0.5, 0.75, 1.0]
    score = scores_2[idx] if max_score == 2.0 else scores_1[idx]
    return score, ""


def evaluate_criterion_1(doc: OdtDocument, rubric_levels: List[Dict], filename: str) -> CriterionResult:
    """
    Criterio 1: Portada y Estilos de página (máx. 2 pts)
    - Estilo 'Primera página' (First_20_Page) sin encabezado ni pie.
    - Márgenes 2,0 cm, borde azul 1,5 pt en los 4 lados, separación 1,0 cm y fondo suave.
    - Título ('Informe Tecnológico...', 38 pt, Liberation Sans, negrita, centrado, azul)
      y Subtítulo ('Análisis de soportes...', 18 pt, Liberation Sans, cursiva, centrado, gris).
    - Datos del autor (Liberation Sans, 11 pt, alineado a la derecha) y salto de página a Predeterminado.
    """
    checks: List[CheckItem] = []
    text_body = doc.get_body_text_elem()

    # 1.1 Estilo Primera página sin cabecera ni pie (peso 0.25)
    first_mp = doc.master_pages.get("First_20_Page")
    first_p_uses_first_mp = False
    if text_body is not None:
        for child in text_body:
            if child.tag in (qname("text", "p"), qname("text", "h")):
                st = doc.get_paragraph_effective_style(child)
                if st.get("master_page_name") == "First_20_Page":
                    first_p_uses_first_mp = True
                break

    has_no_header_footer = False
    if first_mp is not None:
        h_text = doc.get_element_text(first_mp["header_elem"]).strip()
        f_text = doc.get_element_text(first_mp["footer_elem"]).strip()
        has_no_header_footer = (not h_text) and (not f_text)

    if first_mp and first_p_uses_first_mp and has_no_header_footer:
        checks.append(CheckItem(
            "Estilo 'Primera página' aplicado en portada sin encabezado ni pie de página",
            True, 0.25, "First_20_Page activo y limpio", 1.0
        ))
    elif first_mp and has_no_header_footer:
        checks.append(CheckItem(
            "Estilo 'Primera página' definido sin encabezado/pie, pero no vinculado explícitamente al primer párrafo",
            False, 0.25, "Falta asignación de First_20_Page al inicio", 0.5
        ))
    else:
        checks.append(CheckItem(
            "Estilo 'Primera página' aplicado en portada sin encabezado ni pie de página",
            False, 0.25, "No se detecta First_20_Page limpio en la portada", 0.0
        ))

    # 1.2 Configuración de página de la portada: márgenes 2cm, borde azul 1,5pt, separación 1cm, fondo suave (peso 0.25)
    pl_score = 0.0
    pl_details = []
    if first_mp:
        pl = doc.page_layouts.get(first_mp["page_layout_name"], {}).get("props", {})
        dp_style = doc.resolve_style("drawing-page", first_mp.get("draw_style_name")).get("graphic_props", {})

        # Márgenes 2,0 cm
        margins = [
            parse_length_cm(pl.get(qname("fo", "margin-top"))),
            parse_length_cm(pl.get(qname("fo", "margin-bottom"))),
            parse_length_cm(pl.get(qname("fo", "margin-left"))),
            parse_length_cm(pl.get(qname("fo", "margin-right"))),
        ]
        if all(m is not None and 1.8 <= m <= 2.2 for m in margins):
            pl_score += 0.25
            pl_details.append("márgenes 2 cm OK")
        else:
            pl_details.append("márgenes != 2 cm")

        # Borde 1,5 pt azul en 4 lados
        b_all = parse_border(pl.get(qname("fo", "border")))
        b_sides = [
            parse_border(pl.get(qname("fo", f"border-{s}")))
            for s in ("top", "bottom", "left", "right")
        ]
        border_info = b_all if b_all else (b_sides[0] if all(b_sides) else None)
        if border_info and 1.0 <= border_info["width_pt"] <= 2.2 and is_blue_color(border_info["color"]):
            pl_score += 0.25
            pl_details.append(f"borde azul {border_info['width_pt']:.1f} pt OK")
        elif border_info:
            pl_score += 0.12
            pl_details.append(f"borde con grosor/color distinto ({border_info})")
        else:
            pl_details.append("sin borde completo en portada")

        # Separación (padding) 1,0 cm
        p_all = parse_length_cm(pl.get(qname("fo", "padding")))
        p_sides = [
            parse_length_cm(pl.get(qname("fo", f"padding-{s}")))
            for s in ("top", "bottom", "left", "right")
        ]
        pad_cm = p_all if p_all is not None else (p_sides[0] if all(p is not None for p in p_sides) else None)
        if pad_cm is not None and 0.85 <= pad_cm <= 1.15:
            pl_score += 0.25
            pl_details.append(f"separación {pad_cm:.2f} cm OK")
        else:
            pl_details.append(f"separación de borde != 1,0 cm ({pad_cm})")

        # Fondo suave
        bg_color = (
            pl.get(qname("fo", "background-color"))
            or pl.get(qname("draw", "fill-color"))
            or dp_style.get(qname("draw", "fill-color"))
        )
        if is_light_color(bg_color):
            pl_score += 0.25
            pl_details.append(f"fondo suave ({bg_color}) OK")
        else:
            pl_details.append(f"sin color de área suave ({bg_color})")

    checks.append(CheckItem(
        "Márgenes (2 cm), borde azul (1,5 pt), separación (1 cm) y color de área suave en portada",
        pl_score >= 0.9, 0.25, ", ".join(pl_details), pl_score
    ))

    # 1.3 Título y Subtítulo en portada (peso 0.30)
    title_found = False
    subtitle_found = False
    author_found = False
    page_break_after_cover = False
    ts_score = 0.0
    ts_details = []

    if text_body is not None:
        for child in text_body:
            if child.tag not in (qname("text", "p"), qname("text", "h")):
                continue
            txt = doc.get_element_text(child).strip()
            eff = doc.get_paragraph_effective_style(child)
            p_props = eff["paragraph_props"]
            t_props = eff["text_props"]
            chain = eff["chain_names"]

            # Detectar salto de página al terminar la portada
            if (
                child.find(qname("text", "soft-page-break")) is not None
                or p_props.get(qname("fo", "break-before")) == "page"
                or p_props.get(qname("fo", "break-after")) == "page"
                or (eff.get("master_page_name") in ("Standard", "Default") and title_found)
            ):
                if title_found:
                    page_break_after_cover = True

            if not txt:
                continue

            # Título de portada
            if not title_found and ("informe tecnol" in txt.lower() or "almacenamiento digital" in txt.lower()):
                title_found = True
                f_name = t_props.get(qname("style", "font-name"), "")
                f_size = parse_length_pt(t_props.get(qname("fo", "font-size")))
                f_weight = t_props.get(qname("fo", "font-weight"), "")
                f_color = t_props.get(qname("fo", "color"), "")
                align = p_props.get(qname("fo", "text-align"), "")
                uses_title_style = any(s in ("Heading", "Title", "Heading_20_1") for s in chain)

                sub = 0.0
                if uses_title_style:
                    sub += 0.1
                if "liberation sans" in f_name.lower():
                    sub += 0.1
                if f_size and 36 <= f_size <= 40:
                    sub += 0.1
                elif f_size and 26 <= f_size < 36:
                    sub += 0.05
                if f_weight == "bold":
                    sub += 0.075
                if align == "center":
                    sub += 0.05
                if is_blue_color(f_color):
                    sub += 0.075
                ts_score += sub
                ts_details.append(f"Título ({f_name}, {f_size}pt, {f_weight}, {align}, {f_color})")
                continue

            # Subtítulo de portada
            if not subtitle_found and ("soportes f" in txt.lower() or "estado s" in txt.lower() or "Subtitle" in chain):
                subtitle_found = True
                f_name = t_props.get(qname("style", "font-name"), "")
                f_size = parse_length_pt(t_props.get(qname("fo", "font-size")))
                f_style = t_props.get(qname("fo", "font-style"), "")
                f_color = t_props.get(qname("fo", "color"), "")
                align = p_props.get(qname("fo", "text-align"), "")
                uses_sub_style = "Subtitle" in chain

                sub = 0.0
                if uses_sub_style:
                    sub += 0.1
                if "liberation sans" in f_name.lower():
                    sub += 0.1
                if f_size and 16 <= f_size <= 20:
                    sub += 0.1
                elif f_size and 12 <= f_size < 16:
                    sub += 0.05
                if f_style == "italic":
                    sub += 0.075
                if align == "center":
                    sub += 0.05
                if is_gray_color(f_color):
                    sub += 0.075
                ts_score += sub
                ts_details.append(f"Subtítulo ({f_name}, {f_size}pt, {f_style}, {align}, {f_color})")
                continue

            # Datos del autor en portada (antes del encabezado 1)
            if title_found and not page_break_after_cover:
                align = p_props.get(qname("fo", "text-align"), "")
                f_name = t_props.get(qname("style", "font-name"), "")
                f_size = parse_length_pt(t_props.get(qname("fo", "font-size")))
                if align in ("end", "right"):
                    author_found = True
                    author_ok = ("liberation sans" in f_name.lower()) and (f_size is not None and 10 <= f_size <= 12)

    checks.append(CheckItem(
        "Título (38 pt, negrita, azul, centrado) y Subtítulo (18 pt, cursiva, gris, centrado) con estilos",
        ts_score >= 0.85, 0.30, "; ".join(ts_details) if ts_details else "No se encontraron Título/Subtítulo", min(1.0, ts_score)
    ))

    # 1.4 Datos del autor a la derecha y transición a estilo de página predeterminado (peso 0.20)
    auth_break_score = 0.0
    ab_details = []
    if author_found:
        auth_break_score += 0.5
        ab_details.append("datos del autor alineados a la derecha OK")
    else:
        ab_details.append("faltan datos del autor alineados a la derecha")

    if page_break_after_cover or (first_mp and first_mp.get("next_style_name") == "Standard"):
        auth_break_score += 0.5
        ab_details.append("cambio a página predeterminada tras portada OK")
    else:
        ab_details.append("sin salto/cambio a página predeterminada")

    checks.append(CheckItem(
        "Datos del autor (11 pt, derecha) y salto de página a 'Estilo de página predeterminado'",
        auth_break_score >= 0.9, 0.20, ", ".join(ab_details), auth_break_score
    ))

    total_ratio = sum(c.weight * c.partial for c in checks)
    score, desc = map_score_to_rubric(total_ratio, 2.0, rubric_levels)
    return CriterionResult(1, "1. Portada y Estilos de página", 2.0, score, desc, filename, checks)


def evaluate_criterion_2(doc: OdtDocument, rubric_levels: List[Dict], filename: str) -> CriterionResult:
    """
    Criterio 2: Formato de carácter y párrafo avanzado (máx. 2 pts)
    - Título 1 ('1. Introducción al almacenamiento digital', 16 pt, Liberation Sans, negrita, azul, 0,50 cm debajo).
    - 2 párrafos de introducción sin líneas en blanco entre ellos (Liberation Serif, 12 pt, Justificado, 1,5 líneas, 0,35 cm debajo).
    - Letra capitular (3 líneas, 0,2 cm) en el 1er párrafo y sangría de 1ª línea (1,25 cm) en el 2º párrafo.
    - Efectos de carácter: palabras clave en negrita+azul y término en cursiva+resaltado amarillo/claro.
    - Párrafo destacado (callout): sangría izq/der 1,5 cm, 1ª línea 0 cm, borde izq azul 3 pt, separación 0,5/0,1 cm, sombra gris y fondo gris claro.
    """
    checks: List[CheckItem] = []
    text_body = doc.get_body_text_elem()

    h1_elem = None
    intro_paras: List[ET.Element] = []
    empty_between_intro = False

    if text_body is not None:
        collecting = False
        for child in text_body:
            if child.tag not in (qname("text", "p"), qname("text", "h")):
                continue
            txt = doc.get_element_text(child).strip()
            eff = doc.get_paragraph_effective_style(child)
            chain = eff["chain_names"]

            if not collecting:
                if "introducci" in txt.lower() and ("1" in txt or "Heading_20_1" in chain):
                    h1_elem = child
                    collecting = True
                continue
            else:
                # Detener al llegar al apartado 1.1 o 2
                if "1.1" in txt or "comparaci" in txt.lower() or "Heading_20_2" in chain or (
                    child.tag == qname("text", "h") and txt
                ):
                    break
                if not txt:
                    if len(intro_paras) == 1:
                        empty_between_intro = True
                    continue
                intro_paras.append(child)

    # 2.1 Título 1 actualizado (peso 0.15)
    h1_score = 0.0
    h1_details = []
    if h1_elem is not None:
        eff = doc.get_paragraph_effective_style(h1_elem)
        tp = eff["text_props"]
        pp = eff["paragraph_props"]
        f_name = tp.get(qname("style", "font-name"), "")
        f_size = parse_length_pt(tp.get(qname("fo", "font-size")))
        f_weight = tp.get(qname("fo", "font-weight"), "")
        f_color = tp.get(qname("fo", "color"), "")
        mb = parse_length_cm(pp.get(qname("fo", "margin-bottom")))

        if "Heading_20_1" in eff["chain_names"]:
            h1_score += 0.2
        if "liberation sans" in f_name.lower():
            h1_score += 0.2
        if f_size and 15 <= f_size <= 17:
            h1_score += 0.2
        if f_weight == "bold" and is_blue_color(f_color):
            h1_score += 0.2
        if mb is not None and 0.40 <= mb <= 0.60:
            h1_score += 0.2
        h1_details.append(f"Título 1 ({f_name}, {f_size}pt, {f_color}, bajo={mb}cm)")
    else:
        h1_details.append("No se encontró el encabezado '1. Introducción al almacenamiento digital'")

    checks.append(CheckItem(
        "Título 1 ('1. Introducción...', 16 pt, Liberation Sans, negrita, azul, 0,50 cm bajo párrafo)",
        h1_score >= 0.8, 0.15, ", ".join(h1_details), h1_score
    ))

    # 2.2 Dos párrafos de introducción con formato general (peso 0.25)
    p_gen_score = 0.0
    p_gen_details = []
    if len(intro_paras) >= 2:
        p1_eff = doc.get_paragraph_effective_style(intro_paras[0])
        p2_eff = doc.get_paragraph_effective_style(intro_paras[1])
        ok_count = 0
        for idx, eff in enumerate((p1_eff, p2_eff), start=1):
            tp = eff["text_props"]
            pp = eff["paragraph_props"]
            f_name = tp.get(qname("style", "font-name"), "")
            f_size = parse_length_pt(tp.get(qname("fo", "font-size")))
            align = pp.get(qname("fo", "text-align"), "")
            lh = pp.get(qname("fo", "line-height"), "")
            mb = parse_length_cm(pp.get(qname("fo", "margin-bottom")))
            if "liberation serif" in f_name.lower() and (f_size and 11.5 <= f_size <= 12.5):
                ok_count += 1
            if align == "justify":
                ok_count += 1
            if lh in ("150%", "1.5"):
                ok_count += 1
            if mb is not None and 0.30 <= mb <= 0.42:
                ok_count += 1
        p_gen_score = ok_count / 8.0
        if empty_between_intro:
            p_gen_score *= 0.85
            p_gen_details.append("hay línea en blanco entre párrafo 1 y 2")
        else:
            p_gen_details.append("2 párrafos continuos (Liberation Serif 12pt, justificado, 1,5 líneas, 0,35cm)")
    else:
        p_gen_details.append(f"Se encontraron {len(intro_paras)} párrafos en la introducción (se esperan al menos 3)")

    checks.append(CheckItem(
        "Dos párrafos introductorios (Liberation Serif 12 pt, justificado, interlineado 1,5 y 0,35 cm debajo)",
        p_gen_score >= 0.8, 0.25, ", ".join(p_gen_details), p_gen_score
    ))

    # 2.3 Letra capitular (1er párrafo) y sangría de primera línea 1,25 cm (2º párrafo) (peso 0.25)
    cap_ind_score = 0.0
    ci_details = []
    if len(intro_paras) >= 1:
        dc = doc.get_paragraph_effective_style(intro_paras[0]).get("drop_cap")
        if dc:
            lines = int(dc.get(qname("style", "lines"), "1"))
            dist = parse_length_cm(dc.get(qname("style", "distance"), "0cm")) or 0.0
            if lines >= 3 and 0.15 <= dist <= 0.25:
                cap_ind_score += 0.5
                ci_details.append(f"capitular ({lines} líneas, {dist:.2f} cm) OK")
            else:
                cap_ind_score += 0.25
                ci_details.append(f"capitular con parámetros distintos ({lines} líneas, {dist:.2f} cm)")
        else:
            ci_details.append("sin letra capitular en 1er párrafo")

    if len(intro_paras) >= 2:
        pp2 = doc.get_paragraph_effective_style(intro_paras[1])["paragraph_props"]
        t_ind = parse_length_cm(pp2.get(qname("fo", "text-indent")))
        if t_ind is not None and 1.15 <= t_ind <= 1.35:
            cap_ind_score += 0.5
            ci_details.append(f"sangría 1ª línea ({t_ind:.2f} cm) OK")
        elif t_ind and t_ind > 0.3:
            cap_ind_score += 0.25
            ci_details.append(f"sangría 1ª línea ({t_ind:.2f} cm != 1,25 cm)")
        else:
            ci_details.append("sin sangría de 1ª línea en 2º párrafo")

    checks.append(CheckItem(
        "Letra capitular (3 líneas, 0,2 cm) en 1er párrafo y sangría de 1ª línea (1,25 cm) en 2º párrafo",
        cap_ind_score >= 0.9, 0.25, ", ".join(ci_details), cap_ind_score
    ))

    # 2.4 Efectos de carácter: negrita+azul y cursiva+resaltado (peso 0.15)
    bold_blue_words = 0
    bold_blue_spans = 0
    italic_highlight_spans = 0
    for p in intro_paras[:2]:
        for sp in p.iter(qname("text", "span")):
            st = doc.resolve_style("text", sp.get(qname("text", "style-name")))["text_props"]
            sp_txt = doc.get_element_text(sp).strip()
            if not sp_txt:
                continue
            if st.get(qname("fo", "font-weight")) == "bold" and is_blue_color(st.get(qname("fo", "color"))):
                bold_blue_spans += 1
                bold_blue_words += len(sp_txt.split())
            if st.get(qname("fo", "font-style")) == "italic" and is_light_color(st.get(qname("fo", "background-color"))):
                italic_highlight_spans += 1

    ce_score = 0.0
    if bold_blue_spans >= 3 or bold_blue_words >= 3:
        ce_score += 0.5
    elif bold_blue_spans >= 1:
        ce_score += 0.25
    if italic_highlight_spans >= 1:
        ce_score += 0.5

    checks.append(CheckItem(
        "Efectos de carácter (palabras clave en negrita+azul y término en cursiva+resaltado claro)",
        ce_score >= 0.9, 0.15,
        f"negrita+azul: {bold_blue_spans} spans ({bold_blue_words} palabras), cursiva+resaltado: {italic_highlight_spans}",
        ce_score
    ))

    # 2.5 Párrafo destacado (callout) (peso 0.20)
    callout_score = 0.0
    co_details = []
    if len(intro_paras) >= 3:
        p3_eff = doc.get_paragraph_effective_style(intro_paras[2])
        pp = p3_eff["paragraph_props"]
        gp = p3_eff["graphic_props"]
        ml = parse_length_cm(pp.get(qname("fo", "margin-left")))
        mr = parse_length_cm(pp.get(qname("fo", "margin-right")))
        ti = parse_length_cm(pp.get(qname("fo", "text-indent")))
        bl = parse_border(pp.get(qname("fo", "border-left")))
        br = parse_border(pp.get(qname("fo", "border-right")))
        bt = parse_border(pp.get(qname("fo", "border-top")))
        bb = parse_border(pp.get(qname("fo", "border-bottom")))
        pl_cm = parse_length_cm(pp.get(qname("fo", "padding-left")) or pp.get(qname("fo", "padding")))
        pt_cm = parse_length_cm(pp.get(qname("fo", "padding-top")) or pp.get(qname("fo", "padding")))
        shadow = pp.get(qname("style", "shadow"), "none")
        bg = pp.get(qname("fo", "background-color")) or gp.get(qname("draw", "fill-color"))

        if ml and mr and 1.35 <= ml <= 1.65 and 1.35 <= mr <= 1.65 and (ti is None or abs(ti) <= 0.05):
            callout_score += 0.25
            co_details.append("sangrías 1,5 cm OK")
        if bl and 2.5 <= bl["width_pt"] <= 3.5 and is_blue_color(bl["color"]) and not any((br, bt, bb)):
            callout_score += 0.25
            co_details.append("borde izq azul 3 pt OK")
        if pl_cm is not None and 0.40 <= pl_cm <= 0.60 and pt_cm is not None and 0.05 <= pt_cm <= 0.20:
            callout_score += 0.20
            co_details.append("separación 0,5/0,1 cm OK")
        if shadow and shadow != "none":
            callout_score += 0.15
            co_details.append("sombra OK")
        if is_light_color(bg):
            callout_score += 0.15
            co_details.append(f"fondo ({bg}) OK")
    else:
        co_details.append("No se encontró el 3er párrafo destacado")

    checks.append(CheckItem(
        "Párrafo destacado (sangrías 1,5 cm, borde izq azul 3 pt, separación 0,5/0,1 cm, sombra y fondo gris)",
        callout_score >= 0.85, 0.20, ", ".join(co_details), callout_score
    ))

    total_ratio = sum(c.weight * c.partial for c in checks)
    score, desc = map_score_to_rubric(total_ratio, 2.0, rubric_levels)
    return CriterionResult(2, "2. Formato de carácter y párrafo avanzado", 2.0, score, desc, filename, checks)


def evaluate_criterion_3(doc: OdtDocument, rubric_levels: List[Dict], filename: str) -> CriterionResult:
    """
    Criterio 3: Secciones y columnas con personalización (máx. 1 pt)
    - Salto de página y Título 2 ('1.1. Comparación de soportes magnéticos y ópticos', 14 pt, Liberation Sans, negrita, azul, 0,50 cm debajo).
    - Sección de 2 columnas con espaciado de 0,5 cm y contenido sobre HDD y CD/DVD.
    - Fondo pastel suave y sangrías laterales de sección de 0,5 cm (antes y después).
    - Línea de separación sólida de 0,5 pt color negro entre columnas.
    """
    checks: List[CheckItem] = []
    text_body = doc.get_body_text_elem()

    h2_elem = None
    sect_elem = None
    if text_body is not None:
        for child in text_body:
            if child.tag in (qname("text", "p"), qname("text", "h")):
                txt = doc.get_element_text(child).strip()
                if "1.1" in txt or "soportes magn" in txt.lower():
                    h2_elem = child
            elif child.tag == qname("text", "section"):
                sect_elem = child
                break

    # 3.1 Salto de página y Título 2 (peso 0.20)
    h2_score = 0.0
    h2_details = []
    if h2_elem is not None:
        eff = doc.get_paragraph_effective_style(h2_elem)
        tp = eff["text_props"]
        pp = eff["paragraph_props"]
        f_name = tp.get(qname("style", "font-name"), "")
        f_size = parse_length_pt(tp.get(qname("fo", "font-size")))
        f_weight = tp.get(qname("fo", "font-weight"), "")
        f_color = tp.get(qname("fo", "color"), "")
        mb = parse_length_cm(pp.get(qname("fo", "margin-bottom")))
        has_break = (
            pp.get(qname("fo", "break-before")) == "page"
            or h2_elem.find(qname("text", "soft-page-break")) is not None
        )
        if "Heading_20_2" in eff["chain_names"]:
            h2_score += 0.2
        if "liberation sans" in f_name.lower() and (f_size and 13 <= f_size <= 15):
            h2_score += 0.3
        if f_weight == "bold" and is_blue_color(f_color):
            h2_score += 0.25
        if mb is not None and 0.40 <= mb <= 0.60:
            h2_score += 0.15
        if has_break:
            h2_score += 0.10
        h2_details.append(f"Título 2 ({f_name}, {f_size}pt, {f_color}, bajo={mb}cm)")
    else:
        h2_details.append("No se encontró el Título 2 '1.1. Comparación de soportes magnéticos y ópticos'")

    checks.append(CheckItem(
        "Salto de página y Título 2 ('1.1. Comparación...', 14 pt, Liberation Sans, negrita, azul, 0,50 cm debajo)",
        h2_score >= 0.85, 0.20, ", ".join(h2_details), h2_score
    ))

    # 3.2 Sección de 2 columnas con espaciado 0,5 cm y contenido HDD / CD-DVD (peso 0.35)
    col_score = 0.0
    col_details = []
    sect_style = None
    if sect_elem is not None:
        sect_style = doc.resolve_style("section", sect_elem.get(qname("text", "style-name")))
        cols = sect_style.get("columns") or {}
        col_list = sect_style.get("column_list") or []
        col_count = int(cols.get(qname("fo", "column-count"), "1"))
        if col_count == 2:
            col_score += 0.5
            col_details.append("2 columnas OK")
        if len(col_list) == 2:
            end1 = parse_length_cm(col_list[0].get(qname("fo", "end-indent"), "0cm")) or 0.0
            start2 = parse_length_cm(col_list[1].get(qname("fo", "start-indent"), "0cm")) or 0.0
            gap = end1 + start2
            if 0.40 <= gap <= 0.60:
                col_score += 0.25
                col_details.append(f"espaciado {gap:.2f} cm OK")
            else:
                col_details.append(f"espaciado entre columnas {gap:.2f} cm != 0,50 cm")
        sect_txt = doc.get_element_text(sect_elem).lower()
        if ("hdd" in sect_txt or "magn" in sect_txt) and ("cd" in sect_txt or "dvd" in sect_txt or "ptic" in sect_txt):
            col_score += 0.25
            col_details.append("contenido HDD y óptico OK")
    else:
        col_details.append("No se encontró ningún elemento <text:section>")

    checks.append(CheckItem(
        "Sección de 2 columnas con espaciado de 0,5 cm y explicación de HDD y CD/DVD",
        col_score >= 0.85, 0.35, ", ".join(col_details), col_score
    ))

    # 3.3 Fondo pastel y sangrías laterales de sección de 0,5 cm (peso 0.25)
    bg_ind_score = 0.0
    bi_details = []
    if sect_style is not None:
        sp = sect_style["section_props"]
        bg = sp.get(qname("fo", "background-color"))
        ml = parse_length_cm(sp.get(qname("fo", "margin-left")))
        mr = parse_length_cm(sp.get(qname("fo", "margin-right")))
        if is_light_color(bg):
            bg_ind_score += 0.5
            bi_details.append(f"fondo suave ({bg}) OK")
        else:
            bi_details.append(f"sin fondo pastel en sección ({bg})")
        if ml is not None and mr is not None and 0.40 <= ml <= 0.60 and 0.40 <= mr <= 0.60:
            bg_ind_score += 0.5
            bi_details.append(f"sangrías de sección ({ml:.2f}/{mr:.2f} cm) OK")
        else:
            bi_details.append(f"sangrías de sección != 0,5 cm ({ml}/{mr})")
    else:
        bi_details.append("Sin sección que evaluar")

    checks.append(CheckItem(
        "Color de área pastel suave y sangrías antes/después de la sección de 0,5 cm",
        bg_ind_score >= 0.9, 0.25, ", ".join(bi_details), bg_ind_score
    ))

    # 3.4 Línea de separación entre columnas (peso 0.20)
    sep_score = 0.0
    sep_details = []
    if sect_style is not None:
        sep = sect_style.get("column_sep")
        if sep:
            st_line = sep.get(qname("style", "style"), "none")
            height = sep.get(qname("style", "height"), "0%")
            if st_line != "none" and height != "0%":
                sep_score = 1.0
                sep_details.append(f"línea de separación ({st_line}) OK")
            else:
                sep_details.append(f"línea de separación desactivada (style='{st_line}', height='{height}')")
        else:
            sep_details.append("sin nodo <style:column-sep>")
    else:
        sep_details.append("Sin sección")

    checks.append(CheckItem(
        "Línea de separación sólida (0,5 pt, negra) entre las dos columnas",
        sep_score >= 0.9, 0.20, ", ".join(sep_details), sep_score
    ))

    total_ratio = sum(c.weight * c.partial for c in checks)
    score, desc = map_score_to_rubric(total_ratio, 1.0, rubric_levels)
    return CriterionResult(3, "3. Secciones y columnas con personalización", 1.0, score, desc, filename, checks)


def evaluate_criterion_4(doc: OdtDocument, rubric_levels: List[Dict], filename: str) -> CriterionResult:
    """
    Criterio 4: Imágenes con leyendas y tablas comparativas (máx. 2 pts)
    - Salto de página, Título 1 ('2. Comparativa de rendimiento...') y párrafo introductorio.
    - 2 imágenes (SSD SATA y SSD M.2) con fondo transparente, separación inferior 0,75 cm y leyendas 'Ilustración'.
    - Tabla comparativa de 4 columnas x 5 filas con cabecera azul oscuro y texto blanco/automático negrita centrado.
    - Celdas centradas verticalmente, bordes internos gris claro 0,5 pt y borde exterior azul 1,5 pt, y leyenda automática 'Tabla 1'.
    """
    checks: List[CheckItem] = []
    text_body = doc.get_body_text_elem()

    h1_sec2 = None
    sec2_elements: List[ET.Element] = []
    if text_body is not None:
        in_sec2 = False
        for child in text_body:
            txt = doc.get_element_text(child).strip()
            is_heading_like = child.tag == qname("text", "h") or len(txt) < 120
            if not in_sec2:
                if is_heading_like and (
                    txt.startswith("2.") or ("comparativa de rendimiento" in txt.lower())
                ):
                    h1_sec2 = child
                    in_sec2 = True
            else:
                if is_heading_like and (
                    txt.startswith("3.") or ("mapa de ruta" in txt.lower())
                ):
                    break
                sec2_elements.append(child)

    # 4.1 Título 1 y párrafo introductorio (peso 0.15)
    t1_intro_score = 0.0
    t1_details = []
    if h1_sec2 is not None:
        eff = doc.get_paragraph_effective_style(h1_sec2)
        if "Heading_20_1" in eff["chain_names"]:
            t1_intro_score += 0.5
            t1_details.append("Título 1 aplicado OK")
    has_intro_p = any(
        e.tag == qname("text", "p") and len(doc.get_element_text(e).strip()) >= 60
        for e in sec2_elements
    )
    if has_intro_p:
        t1_intro_score += 0.5
        t1_details.append("párrafo introductorio SSD OK")
    else:
        t1_details.append("falta párrafo introductorio en apartado 2")

    checks.append(CheckItem(
        "Título 1 ('2. Comparativa de rendimiento...') y párrafo introductorio con Cuerpo de texto",
        t1_intro_score >= 0.9, 0.15, ", ".join(t1_details), t1_intro_score
    ))

    # 4.2 Dos imágenes con fondo transparente, separación inferior 0,75 cm y leyendas (peso 0.35)
    frames_info = []
    for e in sec2_elements:
        for fr in e.findall(qname("draw", "frame")):
            tb = fr.find(qname("draw", "text-box"))
            if tb is not None:
                # Marco exterior de leyenda
                fr_style = doc.resolve_style("graphic", fr.get(qname("draw", "style-name")))["graphic_props"]
                mb = parse_length_cm(fr_style.get(qname("fo", "margin-bottom")))
                cap_txt = "".join(tb.itertext()).strip()
                img_el = tb.find(f".//{qname('draw', 'image')}")
                href = img_el.get(qname("xlink", "href"), "") if img_el is not None else ""
                frames_info.append({
                    "margin_bottom": mb,
                    "caption": cap_txt,
                    "href": href,
                    "transparent": doc.image_transparency.get(href, False),
                })

    img_score = 0.0
    img_details = []
    if len(frames_info) >= 2:
        img_score += 0.25
        trans_count = sum(1 for f in frames_info[:2] if f["transparent"])
        img_score += 0.25 * (trans_count / 2.0)
        img_details.append(f"{trans_count}/2 PNG transparentes")

        mb_count = sum(1 for f in frames_info[:2] if f["margin_bottom"] is not None and 0.65 <= f["margin_bottom"] <= 0.85)
        img_score += 0.25 * (mb_count / 2.0)
        img_details.append(f"{mb_count}/2 marcos con separación inferior 0,75 cm")

        caps = " | ".join(f["caption"].lower() for f in frames_info[:2])
        if ("ilustraci" in caps or "il·lustraci" in caps) and "sata" in caps and "m.2" in caps:
            img_score += 0.25
            img_details.append("leyendas 'Disco sólido SATA' y 'Disco sólido M.2' OK")
        else:
            img_details.append("leyendas de imagen incompletas")
    else:
        img_details.append(f"Se encontraron {len(frames_info)} imágenes con marco de leyenda (se esperan 2)")

    checks.append(CheckItem(
        "Dos imágenes con fondo transparente, leyendas ('Disco sólido SATA' y 'M.2') y separación inferior 0,75 cm",
        img_score >= 0.85, 0.35, ", ".join(img_details), img_score
    ))

    # 4.3 Tabla comparativa 4x5 y formato de fila de cabecera (peso 0.20)
    tbl_elem = next((e for e in sec2_elements if e.tag == qname("table", "table")), None)
    tbl_score = 0.0
    tbl_details = []
    all_rows: List[ET.Element] = []
    if tbl_elem is not None:
        cols = tbl_elem.findall(qname("table", "table-column"))
        col_count = sum(int(c.get(qname("table", "number-columns-repeated"), "1")) for c in cols)
        hr = tbl_elem.find(qname("table", "table-header-rows"))
        if hr is not None:
            all_rows.extend(hr.findall(qname("table", "table-row")))
        all_rows.extend(tbl_elem.findall(qname("table", "table-row")))
        row_count = len(all_rows)

        if col_count == 4 and row_count == 5:
            tbl_score += 0.5
            tbl_details.append("dimensiones 4x5 OK")
        else:
            tbl_score += 0.25
            tbl_details.append(f"dimensiones {col_count}x{row_count} (se esperaba 4x5)")

        if all_rows:
            first_row_cells = all_rows[0].findall(qname("table", "table-cell"))
            if first_row_cells:
                c_style = doc.resolve_style("table-cell", first_row_cells[0].get(qname("table", "style-name")))["table_cell_props"]
                bg = c_style.get(qname("fo", "background-color"))
                p_in_cell = first_row_cells[0].find(qname("text", "p"))
                p_eff = doc.get_paragraph_effective_style(p_in_cell) if p_in_cell is not None else {"paragraph_props": {}, "text_props": {}}
                is_bold = p_eff["text_props"].get(qname("fo", "font-weight")) == "bold"
                is_center = p_eff["paragraph_props"].get(qname("fo", "text-align")) == "center"
                if is_blue_color(bg) and is_bold and is_center:
                    tbl_score += 0.5
                    tbl_details.append("cabecera azul oscuro, negrita y centrada OK")
                else:
                    tbl_details.append(f"formato de cabecera incompleto (bg={bg}, bold={is_bold}, center={is_center})")
    else:
        tbl_details.append("No se encontró la tabla comparativa en el apartado 2")

    checks.append(CheckItem(
        "Tabla comparativa de 4 columnas y 5 filas con cabecera azul oscuro, texto en negrita y centrado",
        tbl_score >= 0.9, 0.20, ", ".join(tbl_details), tbl_score
    ))

    # 4.4 Centrado vertical de celdas, bordes personalizados y leyenda automática de tabla (peso 0.30)
    prop_score = 0.0
    prop_details = []
    if tbl_elem is not None and all_rows:
        cells = [c for r in all_rows for c in r.findall(qname("table", "table-cell"))]
        v_mid = 0
        has_blue_outer = False
        has_gray_inner = False
        for c in cells:
            cp = doc.resolve_style("table-cell", c.get(qname("table", "style-name")))["table_cell_props"]
            if cp.get(qname("style", "vertical-align")) == "middle":
                v_mid += 1
            for side in ("left", "right", "top", "bottom"):
                b = parse_border(cp.get(qname("fo", f"border-{side}")) or cp.get(qname("fo", "border")))
                if b:
                    if 1.2 <= b["width_pt"] <= 2.0 and is_blue_color(b["color"]):
                        has_blue_outer = True
                    elif 0.3 <= b["width_pt"] <= 0.8 and is_gray_color(b["color"]):
                        has_gray_inner = True

        if cells and (v_mid / len(cells)) >= 0.8:
            prop_score += 0.33
            prop_details.append("alineación vertical centrada OK")
        if has_blue_outer and has_gray_inner:
            prop_score += 0.33
            prop_details.append("borde exterior azul 1,5 pt e interior gris 0,5 pt OK")
        elif has_blue_outer or has_gray_inner:
            prop_score += 0.16
            prop_details.append("bordes personalizados parciales")

    # Buscar leyenda automática de tabla
    has_tbl_caption = False
    for e in sec2_elements:
        if e.tag == qname("text", "p"):
            txt = "".join(e.itertext()).lower()
            has_seq = e.find(f".//{qname('text', 'sequence')}") is not None
            if ("comparativa de tecnolog" in txt or "tabla 1" in txt or "taula 1" in txt) and has_seq:
                has_tbl_caption = True
                break
    if has_tbl_caption:
        prop_score += 0.34
        prop_details.append("leyenda automática de tabla OK")
    else:
        prop_details.append("falta leyenda automática en Tabla 1")

    checks.append(CheckItem(
        "Alineación vertical centrada, bordes (exterior azul 1,5 pt, interior gris 0,5 pt) y leyenda automática de tabla",
        prop_score >= 0.85, 0.30, ", ".join(prop_details), min(1.0, prop_score)
    ))

    total_ratio = sum(c.weight * c.partial for c in checks)
    score, desc = map_score_to_rubric(total_ratio, 2.0, rubric_levels)
    return CriterionResult(4, "4. Imágenes con leyendas y tablas comparativas", 2.0, score, desc, filename, checks)


def evaluate_criterion_5(doc: OdtDocument, rubric_levels: List[Dict], filename: str) -> CriterionResult:
    """
    Criterio 5: Secciones horizontales y tabla cronológica (máx. 2 pts)
    - Salto de página manual a estilo de página 'Horizontal' (Landscape) y Título 1 ('3. Mapa de ruta...').
    - Párrafo introductorio y tabla ancha (6 o 7 columnas) con la cronología desde 1980 hasta la actualidad.
    - Imágenes representativas en cada fila de la tabla y formato de tabla (cabecera azul, centrado vertical, bordes).
    - Leyenda automática debajo de la tabla ('Cronología del almacenamiento digital').
    """
    checks: List[CheckItem] = []
    text_body = doc.get_body_text_elem()

    h1_sec3 = None
    sec3_elements: List[ET.Element] = []
    if text_body is not None:
        in_sec3 = False
        for child in text_body:
            txt = doc.get_element_text(child).strip()
            is_heading_like = child.tag == qname("text", "h") or len(txt) < 120
            if not in_sec3:
                if is_heading_like and (
                    txt.startswith("3.") or "mapa de ruta" in txt.lower()
                ):
                    h1_sec3 = child
                    in_sec3 = True
            else:
                sec3_elements.append(child)

    # 5.1 Salto de página a estilo Horizontal y Título 1 (peso 0.25)
    land_score = 0.0
    land_details = []
    if h1_sec3 is not None:
        eff = doc.get_paragraph_effective_style(h1_sec3)
        mp_name = eff.get("master_page_name")
        mp = doc.master_pages.get(mp_name or "")
        if mp:
            pl = doc.page_layouts.get(mp["page_layout_name"], {}).get("props", {})
            orient = pl.get(qname("style", "print-orientation"), "")
            pw = parse_length_cm(pl.get(qname("fo", "page-width"))) or 0.0
            ph = parse_length_cm(pl.get(qname("fo", "page-height"))) or 0.0
            if orient == "landscape" or pw > ph:
                land_score += 0.65
                land_details.append(f"página horizontal ({mp_name}, {pw:.1f}x{ph:.1f} cm) OK")
            else:
                land_details.append(f"estilo de página '{mp_name}' no es horizontal")
        else:
            land_details.append("sin salto a estilo de página Horizontal en Título 3")
        if "Heading_20_1" in eff["chain_names"]:
            land_score += 0.35
            land_details.append("Título 1 OK")
    else:
        land_details.append("No se encontró el apartado '3. Mapa de ruta y velocidades de transferencia...'")

    checks.append(CheckItem(
        "Salto de página manual al estilo 'Horizontal' y Título 1 ('3. Mapa de ruta...')",
        land_score >= 0.85, 0.25, ", ".join(land_details), land_score
    ))

    # 5.2 Párrafo introductorio y estructura de la tabla cronológica (>=6 columnas, >=5 filas) (peso 0.25)
    tbl_elem = next((e for e in sec3_elements if e.tag == qname("table", "table")), None)
    struct_score = 0.0
    struct_details = []
    has_intro = any(
        e.tag == qname("text", "p") and len(doc.get_element_text(e).strip()) >= 40
        for e in sec3_elements[:3]
    )
    if has_intro:
        struct_score += 0.4
        struct_details.append("párrafo introductorio OK")
    else:
        struct_details.append("falta párrafo introductorio antes de la tabla")

    all_rows: List[ET.Element] = []
    if tbl_elem is not None:
        cols = tbl_elem.findall(qname("table", "table-column"))
        col_count = sum(int(c.get(qname("table", "number-columns-repeated"), "1")) for c in cols)
        hr = tbl_elem.find(qname("table", "table-header-rows"))
        if hr is not None:
            all_rows.extend(hr.findall(qname("table", "table-row")))
        all_rows.extend(tbl_elem.findall(qname("table", "table-row")))
        row_count = len(all_rows)
        if col_count >= 6 and row_count >= 5:
            struct_score += 0.6
            struct_details.append(f"tabla ancha ({col_count} columnas x {row_count} filas) OK")
        else:
            struct_score += 0.3
            struct_details.append(f"tabla de {col_count} columnas x {row_count} filas (se esperan >=6 cols y >=5 filas)")
    else:
        struct_details.append("No se encontró la tabla cronológica")

    checks.append(CheckItem(
        "Párrafo introductorio y tabla cronológica ancha (6-7 columnas, cronología desde 1980)",
        struct_score >= 0.85, 0.25, ", ".join(struct_details), struct_score
    ))

    # 5.3 Imágenes insertadas en las filas y formato de la tabla (peso 0.30)
    fmt_img_score = 0.0
    fi_details = []
    if tbl_elem is not None and all_rows:
        imgs_in_tbl = tbl_elem.findall(f".//{qname('draw', 'image')}")
        data_rows_count = max(1, len(all_rows) - 1)
        if len(imgs_in_tbl) >= data_rows_count:
            fmt_img_score += 0.5
            fi_details.append(f"{len(imgs_in_tbl)} imágenes en tabla OK")
        elif len(imgs_in_tbl) > 0:
            fmt_img_score += 0.25
            fi_details.append(f"solo {len(imgs_in_tbl)}/{data_rows_count} imágenes en tabla")
        else:
            fi_details.append("sin imágenes en la tabla cronológica")

        cells = [c for r in all_rows for c in r.findall(qname("table", "table-cell"))]
        first_cell_cp = doc.resolve_style("table-cell", cells[0].get(qname("table", "style-name")))["table_cell_props"] if cells else {}
        hdr_blue = is_blue_color(first_cell_cp.get(qname("fo", "background-color")))
        v_mid = sum(
            1 for c in cells
            if doc.resolve_style("table-cell", c.get(qname("table", "style-name")))["table_cell_props"].get(qname("style", "vertical-align")) == "middle"
        )
        if hdr_blue:
            fmt_img_score += 0.25
            fi_details.append("cabecera azul OK")
        if cells and (v_mid / len(cells)) >= 0.8:
            fmt_img_score += 0.25
            fi_details.append("centrado vertical OK")
    else:
        fi_details.append("Sin tabla que evaluar")

    checks.append(CheckItem(
        "Imágenes representativas en cada fila y estilo de tabla (cabecera azul y alineación vertical)",
        fmt_img_score >= 0.85, 0.30, ", ".join(fi_details), fmt_img_score
    ))

    # 5.4 Leyenda automática 'Cronología del almacenamiento digital' (peso 0.20)
    cap_score = 0.0
    cap_details = []
    for e in sec3_elements:
        if e.tag == qname("text", "p"):
            txt = "".join(e.itertext()).lower()
            has_seq = e.find(f".//{qname('text', 'sequence')}") is not None
            if ("cronolog" in txt or "tabla 2" in txt or "taula 2" in txt) and has_seq:
                cap_score = 1.0
                cap_details.append("leyenda automática 'Cronología del almacenamiento digital' OK")
                break
    if cap_score == 0.0:
        cap_details.append("falta leyenda automática en la tabla cronológica")

    checks.append(CheckItem(
        "Leyenda automática debajo de la tabla ('Cronología del almacenamiento digital')",
        cap_score >= 0.9, 0.20, ", ".join(cap_details), cap_score
    ))

    total_ratio = sum(c.weight * c.partial for c in checks)
    score, desc = map_score_to_rubric(total_ratio, 2.0, rubric_levels)
    return CriterionResult(5, "5. Secciones horizontales y tabla cronológica", 2.0, score, desc, filename, checks)


def evaluate_criterion_6(doc: OdtDocument, rubric_levels: List[Dict], filename: str) -> CriterionResult:
    """
    Criterio 6: Encabezados y pies de página dinámicos (máx. 1 pt)
    - Portada ('Primera página') limpia sin encabezado ni pie de página.
    - Encabezado en página predeterminada: 'Tema 2: Documentos Digitales', campo Fecha (<text:date>), 10 pt y borde inferior azul 0,5 pt.
    - Pie de página con nombre del autor y campos dinámicos 'Página X de Y' (<text:page-number> y <text:page-count>).
    - Aplicado también en páginas con estilo 'Horizontal' (Landscape).
    """
    checks: List[CheckItem] = []

    first_mp = doc.master_pages.get("First_20_Page")
    std_mp = doc.master_pages.get("Standard")
    land_mp = doc.master_pages.get("Landscape")

    # 6.1 Portada limpia sin cabecera ni pie (peso 0.15)
    cover_clean = False
    if first_mp is not None:
        h_txt = doc.get_element_text(first_mp["header_elem"]).strip()
        f_txt = doc.get_element_text(first_mp["footer_elem"]).strip()
        cover_clean = (not h_txt) and (not f_txt)
    checks.append(CheckItem(
        "Portada ('Primera página') sin encabezado ni pie de página",
        cover_clean, 0.15,
        "First_20_Page sin cabecera ni pie" if cover_clean else "La portada tiene cabecera/pie o no usa First_20_Page",
        1.0 if cover_clean else 0.0
    ))

    # 6.2 Encabezado en página vertical (Standard): texto, campo Fecha, 10 pt, borde inferior azul 0,5 pt (peso 0.35)
    hdr_score = 0.0
    hdr_details = []
    if std_mp and std_mp["header_elem"] is not None:
        h_el = std_mp["header_elem"]
        h_txt = "".join(h_el.itertext()).strip()
        has_date = h_el.find(f".//{qname('text', 'date')}") is not None
        if "tema 2" in h_txt.lower() or "documentos digitales" in h_txt.lower():
            hdr_score += 0.25
            hdr_details.append("texto 'Tema 2: Documentos Digitales' OK")
        if has_date:
            hdr_score += 0.30
            hdr_details.append("campo dinámico Fecha OK")
        else:
            hdr_details.append("falta campo dinámico Fecha (<text:date>)")

        # Comprobar tamaño 10 pt en párrafo o spans del encabezado
        is_10pt = False
        for p in h_el.findall(qname("text", "p")):
            eff = doc.get_paragraph_effective_style(p)
            sz = parse_length_pt(eff["text_props"].get(qname("fo", "font-size")))
            if sz and 9.5 <= sz <= 10.5:
                is_10pt = True
            for sp in p.findall(qname("text", "span")):
                sp_st = doc.resolve_style("text", sp.get(qname("text", "style-name")))["text_props"]
                sz_sp = parse_length_pt(sp_st.get(qname("fo", "font-size")))
                if sz_sp and 9.5 <= sz_sp <= 10.5:
                    is_10pt = True
        if is_10pt:
            hdr_score += 0.20
            hdr_details.append("tamaño 10 pt OK")

        # Comprobar borde inferior azul 0,5 pt en header-style o párrafo
        pl_hdr = doc.page_layouts.get(std_mp["page_layout_name"], {}).get("header_props", {})
        bb = parse_border(pl_hdr.get(qname("fo", "border-bottom")) or pl_hdr.get(qname("fo", "border")))
        if not bb:
            for p in h_el.findall(qname("text", "p")):
                pp = doc.get_paragraph_effective_style(p)["paragraph_props"]
                bb = parse_border(pp.get(qname("fo", "border-bottom")))
        if bb and 0.3 <= bb["width_pt"] <= 1.0 and is_blue_color(bb["color"]):
            hdr_score += 0.25
            hdr_details.append("borde inferior azul 0,5 pt OK")
        else:
            hdr_details.append("sin borde inferior azul 0,5 pt en cabecera")
    else:
        hdr_details.append("No se encontró encabezado en el estilo de página predeterminado")

    checks.append(CheckItem(
        "Encabezado con 'Tema 2: Documentos Digitales', campo Fecha, tamaño 10 pt y borde inferior azul 0,5 pt",
        hdr_score >= 0.85, 0.35, ", ".join(hdr_details), hdr_score
    ))

    # 6.3 Pie de página en página vertical (Standard): autor + Página <page-number> de <page-count> (peso 0.30)
    ftr_score = 0.0
    ftr_details = []
    if std_mp and std_mp["footer_elem"] is not None:
        f_el = std_mp["footer_elem"]
        f_txt = "".join(f_el.itertext()).strip()
        has_pnum = f_el.find(f".//{qname('text', 'page-number')}") is not None
        has_pcnt = f_el.find(f".//{qname('text', 'page-count')}") is not None
        if len(f_txt) >= 10:
            ftr_score += 0.30
            ftr_details.append("nombre del autor presente OK")
        if has_pnum and has_pcnt:
            ftr_score += 0.70
            ftr_details.append("campos dinámicos 'Página X de Y' OK")
        elif has_pnum or has_pcnt:
            ftr_score += 0.35
            ftr_details.append("solo uno de los campos dinámicos de página")
        else:
            ftr_details.append("numeración sin campos dinámicos (<text:page-number>/<text:page-count>)")
    else:
        ftr_details.append("No se encontró pie de página en el estilo predeterminado")

    checks.append(CheckItem(
        "Pie de página con nombre del autor y campos dinámicos ('Página X de Y')",
        ftr_score >= 0.85, 0.30, ", ".join(ftr_details), ftr_score
    ))

    # 6.4 Encabezado y pie dinámicos en páginas horizontales (Landscape) (peso 0.20)
    land_hf_score = 0.0
    lh_details = []
    if land_mp is not None:
        lh = land_mp["header_elem"]
        lf = land_mp["footer_elem"]
        if lh is not None and lh.find(f".//{qname('text', 'date')}") is not None:
            land_hf_score += 0.5
            lh_details.append("cabecera en Horizontal OK")
        else:
            lh_details.append("falta cabecera dinámica en página Horizontal")
        if lf is not None and lf.find(f".//{qname('text', 'page-number')}") is not None and lf.find(f".//{qname('text', 'page-count')}") is not None:
            land_hf_score += 0.5
            lh_details.append("pie en Horizontal OK")
        else:
            lh_details.append("falta pie dinámico en página Horizontal")
    else:
        lh_details.append("Estilo de página Horizontal no configurado")

    checks.append(CheckItem(
        "Encabezado y pie de página dinámicos aplicados también en las páginas horizontales",
        land_hf_score >= 0.9, 0.20, ", ".join(lh_details), land_hf_score
    ))

    total_ratio = sum(c.weight * c.partial for c in checks)
    score, desc = map_score_to_rubric(total_ratio, 1.0, rubric_levels)
    return CriterionResult(6, "6. Encabezados y pies de página dinámicos", 1.0, score, desc, filename, checks)


# ==============================================================================
# Carga de rúbrica y descubrimiento de entregas por alumno
# ==============================================================================

def load_rubric_csv(csv_path: Path) -> Dict[int, List[Dict]]:
    """Carga rubrica.csv y devuelve un diccionario {num_criterio: [{'score': float, 'definition': str}, ...]}."""
    rubric: Dict[int, List[Dict]] = {}
    if not csv_path.is_file():
        return rubric
    with open(csv_path, "r", encoding="utf-8-sig") as f:
        reader = csv.reader(f, delimiter=";")
        next(reader, None)
        for idx, row in enumerate(reader, start=1):
            if not row or not row[0].strip():
                continue
            levels = []
            col = 1
            while col + 1 < len(row):
                d_txt = row[col].strip()
                s_txt = row[col + 1].strip()
                col += 2
                if not d_txt and not s_txt:
                    continue
                try:
                    s_val = float(s_txt.replace(",", "."))
                except ValueError:
                    s_val = 0.0
                levels.append({"score": s_val, "definition": d_txt})
            levels.sort(key=lambda x: x["score"])
            rubric[idx] = levels
    return rubric


def find_exercise_files(student_dir: Path, modo: str = "estricto") -> Dict[int, Optional[Path]]:
    """
    Localiza dentro de la carpeta del alumno los archivos .odt de cada parte (1..6).
    Soporta nombres como:
      - actividad1_writer_apellido_nombre_ej1.odt
      - ej1.odt, ejercicio1.odt, parte1.odt, act1_ej1.odt
    En modo 'flexible', si falta ejX.odt pero existe final.odt (o un ej posterior),
    utiliza ese archivo como respaldo para evaluar la parte.
    """
    odt_files = sorted(
        [p for p in student_dir.rglob("*.odt") if not p.name.startswith(".~")],
        key=lambda p: p.name.lower(),
    )

    found: Dict[int, Optional[Path]] = {i: None for i in range(1, 7)}
    final_file: Optional[Path] = None

    for f in odt_files:
        stem = f.stem.lower()
        if "final" in stem:
            final_file = f
        for i in range(1, 7):
            pat = rf"(?:ej(?:ercicio)?|parte|p)[_\-\s]*0?{i}(?!\d)"
            if re.search(pat, stem):
                found[i] = f

    # Si no hay ej6 explícito pero el alumno subió *_final.odt (como indica la sección Entregables),
    # o en modo flexible para ejercicios anteriores:
    if modo == "flexible":
        # Si solo hay un único archivo .odt en la carpeta, usarlo para los 6 criterios
        if len(odt_files) == 1 and all(v is None for v in found.values()):
            for i in range(1, 7):
                found[i] = odt_files[0]
        else:
            # Si falta algún ejercicio, buscar el siguiente ejercicio disponible o final.odt
            for i in range(1, 7):
                if found[i] is None:
                    for j in range(i + 1, 7):
                        if found[j] is not None:
                            found[i] = found[j]
                            break
                    if found[i] is None and final_file is not None:
                        found[i] = final_file

    return found


def evaluate_student(
    student_name: str,
    exercise_files: Dict[int, Optional[Path]],
    rubric: Dict[int, List[Dict]],
) -> List[CriterionResult]:
    """Evalúa los 6 criterios de un alumno a partir de sus archivos .odt entregados."""
    evaluators = {
        1: (evaluate_criterion_1, "1. Portada y Estilos de página", 2.0),
        2: (evaluate_criterion_2, "2. Formato de carácter y párrafo avanzado", 2.0),
        3: (evaluate_criterion_3, "3. Secciones y columnas con personalización", 1.0),
        4: (evaluate_criterion_4, "4. Imágenes con leyendas y tablas comparativas", 2.0),
        5: (evaluate_criterion_5, "5. Secciones horizontales y tabla cronológica", 2.0),
        6: (evaluate_criterion_6, "6. Encabezados y pies de página dinámicos", 1.0),
    }

    doc_cache: Dict[Path, OdtDocument] = {}
    results: List[CriterionResult] = []

    for i in range(1, 7):
        fn, cname, max_s = evaluators[i]
        levels = rubric.get(i, [])
        f_path = exercise_files.get(i)

        if f_path is None or not f_path.is_file():
            lvl0_desc = levels[0]["definition"] if levels else "No entregado."
            results.append(
                CriterionResult(
                    criterion_num=i,
                    criterion_name=cname,
                    max_score=max_s,
                    awarded_score=0.0,
                    level_description=f"No entregado ({lvl0_desc})",
                    evaluated_file="No entregado",
                    checks=[CheckItem(f"Entrega del archivo .odt del Ejercicio {i}", False, 1.0, "Archivo no encontrado en la carpeta del alumno", 0.0)],
                )
            )
            continue

        try:
            if f_path not in doc_cache:
                doc_cache[f_path] = OdtDocument(f_path)
            doc = doc_cache[f_path]
            res = fn(doc, levels, f_path.name)
            results.append(res)
        except Exception as e:
            results.append(
                CriterionResult(
                    criterion_num=i,
                    criterion_name=cname,
                    max_score=max_s,
                    awarded_score=0.0,
                    level_description=f"Error al abrir el archivo .odt: {e}",
                    evaluated_file=f_path.name,
                    checks=[CheckItem("Archivo .odt válido", False, 1.0, str(e), 0.0)],
                )
            )

    return results


# ==============================================================================
# Generación de documentos de resultados (Markdown y CSV)
# ==============================================================================

def fmt_score(val: float) -> str:
    """Formatea puntuaciones con coma decimal española (ej. 1,5 | 0,75 | 2)."""
    if val == int(val):
        return str(int(val))
    return f"{val:.2f}".rstrip("0").rstrip(".").replace(".", ",")


def generate_reports(
    all_results: Dict[str, List[CriterionResult]],
    md_out: Path,
    csv_out: Path,
    modo: str,
):
    # 1. Generar informe Markdown
    lines = [
        "# 📊 Informe de Validación de Entregas – Actividad 1 (LibreOffice Writer)",
        "",
        f"- **Alumnos evaluados:** {len(all_results)}",
        f"- **Modo de búsqueda de archivos:** `{modo}`",
        "",
        "## Tabla Resumen de Calificaciones",
        "",
        "| Alumno/a | C1 Portada (2p) | C2 Párrafo (2p) | C3 Secciones (1p) | C4 Imágenes/Tabla (2p) | C5 Horizontal (2p) | C6 Cabecera/Pie (1p) | **TOTAL (10p)** |",
        "|----------|:---------------:|:---------------:|:-----------------:|:----------------------:|:------------------:|:--------------------:|:---------------:|",
    ]

    for student, results in all_results.items():
        scores = [fmt_score(r.awarded_score) for r in results]
        total = sum(r.awarded_score for r in results)
        lines.append(
            f"| **{student}** | {scores[0]} | {scores[1]} | {scores[2]} | {scores[3]} | {scores[4]} | {scores[5]} | **{fmt_score(total)}** |"
        )

    lines.extend(["", "---", "", "## Desglose Detallado por Alumno/a", ""])

    for student, results in all_results.items():
        total = sum(r.awarded_score for r in results)
        lines.append(f"### 👤 {student} — **Nota Total: {fmt_score(total)} / 10 pts**")
        lines.append("")
        for r in results:
            lines.append(
                f"#### {r.criterion_name} — **{fmt_score(r.awarded_score)} / {fmt_score(r.max_score)} pts** *(Archivo: `{r.evaluated_file}`)*"
            )
            lines.append(f"- **Nivel asignado en rúbrica:** {r.level_description}")
            for chk in r.checks:
                icon = "✅" if chk.passed else ("⚠️" if chk.partial > 0 else "❌")
                pct = int(round(chk.partial * 100))
                lines.append(f"  - {icon} **{chk.description}** ({pct}%): {chk.detail}")
            lines.append("")
        lines.append("---")
        lines.append("")

    md_out.write_text("\n".join(lines), encoding="utf-8")

    # 2. Generar archivo CSV compatible con Excel / LibreOffice Calc (UTF-8 con BOM y separador ';')
    with open(csv_out, "w", encoding="utf-8-sig", newline="") as f:
        writer = csv.writer(f, delimiter=";")
        writer.writerow([
            "Alumno",
            "Archivo_Ej1", "C1_Portada (2p)",
            "Archivo_Ej2", "C2_Parrafo (2p)",
            "Archivo_Ej3", "C3_Secciones (1p)",
            "Archivo_Ej4", "C4_Imagenes_Tabla (2p)",
            "Archivo_Ej5", "C5_Horizontal (2p)",
            "Archivo_Ej6", "C6_Encabezado_Pie (1p)",
            "Nota_Total (10p)",
            "Comentarios_Retroalimentacion",
        ])

        for student, results in all_results.items():
            total = sum(r.awarded_score for r in results)
            row = [student]
            feedback_parts = []
            for r in results:
                row.append(r.evaluated_file)
                row.append(fmt_score(r.awarded_score))
                failed = [c.description for c in r.checks if not c.passed]
                if r.evaluated_file == "No entregado":
                    feedback_parts.append(f"C{r.criterion_num} ({fmt_score(r.awarded_score)}p): No entregado")
                elif failed:
                    feedback_parts.append(f"C{r.criterion_num} ({fmt_score(r.awarded_score)}p): Revisar {', '.join(failed)}")
                else:
                    feedback_parts.append(f"C{r.criterion_num} ({fmt_score(r.awarded_score)}p): Perfecto")
            row.append(fmt_score(total))
            row.append(" | ".join(feedback_parts))
            writer.writerow(row)


def main():
    script_dir = Path(__file__).resolve().parent
    parser = argparse.ArgumentParser(
        description="Validador de entregas (.odt) para la Actividad 1 de LibreOffice Writer."
    )
    parser.add_argument(
        "ruta",
        nargs="?",
        default=str(script_dir / "entregas"),
        help="Ruta a la carpeta con las subcarpetas de entregas de los alumnos (o ruta directa a un archivo .odt para probarlo).",
    )
    parser.add_argument(
        "--rubrica",
        default=str(script_dir / "rubrica.csv"),
        help="Ruta al archivo rubrica.csv (por defecto: rubrica.csv en la carpeta de la actividad).",
    )
    parser.add_argument(
        "--salida-md",
        default=None,
        help="Ruta del informe Markdown de salida (por defecto: resultado_validacion.md).",
    )
    parser.add_argument(
        "--salida-csv",
        default=None,
        help="Ruta del archivo CSV de calificaciones (por defecto: resultado_validacion.csv).",
    )
    parser.add_argument(
        "--modo",
        choices=["estricto", "flexible"],
        default="estricto",
        help=(
            "'estricto' (por defecto): exige el archivo específico de cada ejercicio (*ej1*.odt .. *ej6*.odt) "
            "y puntúa 0 si no se entregó esa parte. "
            "'flexible': si falta un ejX.odt pero el alumno entregó un ejercicio posterior o final.odt, evalúa el criterio sobre ese archivo."
        ),
    )

    args = parser.parse_args()
    target_path = Path(args.ruta).resolve()
    rubric_path = Path(args.rubrica).resolve()
    rubric = load_rubric_csv(rubric_path)

    all_results: Dict[str, List[CriterionResult]] = {}

    if target_path.is_file() and target_path.suffix.lower() == ".odt":
        # Evaluación directa de un único archivo .odt en los 6 criterios
        ex_files = {i: target_path for i in range(1, 7)}
        all_results[target_path.stem] = evaluate_student(target_path.stem, ex_files, rubric)
        out_dir = target_path.parent
    elif target_path.is_dir():
        student_dirs = sorted([d for d in target_path.iterdir() if d.is_dir() and not d.name.startswith(".")])
        if not student_dirs:
            # Si la carpeta indicada contiene directamente archivos .odt de un solo alumno
            odt_in_root = list(target_path.glob("*.odt"))
            if odt_in_root:
                ex_files = find_exercise_files(target_path, args.modo)
                all_results[target_path.name] = evaluate_student(target_path.name, ex_files, rubric)
            else:
                print(f"[!] No se encontraron subcarpetas de alumnos ni archivos .odt en: {target_path}", file=sys.stderr)
                sys.exit(1)
        else:
            for s_dir in student_dirs:
                ex_files = find_exercise_files(s_dir, args.modo)
                all_results[s_dir.name] = evaluate_student(s_dir.name, ex_files, rubric)
        out_dir = target_path
    else:
        print(f"[!] La ruta especificada no existe: {target_path}", file=sys.stderr)
        sys.exit(1)

    md_out = Path(args.salida_md).resolve() if args.salida_md else (out_dir / "resultado_validacion.md")
    csv_out = Path(args.salida_csv).resolve() if args.salida_csv else (out_dir / "resultado_validacion.csv")

    generate_reports(all_results, md_out, csv_out, args.modo)

    print(f"[+] Validación completada ({len(all_results)} entrega(s) evaluada(s)).")
    print(f"    - Informe detallado (Markdown): {md_out}")
    print(f"    - Calificaciones (CSV):         {csv_out}")
    print()
    for student, results in all_results.items():
        total = sum(r.awarded_score for r in results)
        scores_str = " | ".join(f"C{r.criterion_num}: {fmt_score(r.awarded_score)}/{fmt_score(r.max_score)}" for r in results)
        print(f"  * {student}: {fmt_score(total)} / 10 pts  ({scores_str})")


if __name__ == "__main__":
    main()
