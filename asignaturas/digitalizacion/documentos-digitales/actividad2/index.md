---
layout: default
title: Actividad 2. Gestión de datos y presupuestos con LibreOffice Calc
description: Tema 2 - Documentos digitales
---

# 📊 Actividad 2 – Gestión de datos y presupuestos con LibreOffice Calc

## Objetivo
Dominar las herramientas esenciales de cálculo, análisis de datos y representación gráfica en **LibreOffice Calc**. A lo largo de esta actividad, aprenderás a estructurar una hoja de cálculo profesional aplicando **formatos de celda** (moneda, porcentajes, bordes), utilizarás **autorrelleno y series**, dominarás el uso de **referencias relativas y absolutas ($)**, aplicarás **funciones matemáticas, estadísticas y lógicas** (`SUMA`, `PROMEDIO`, `MAX`, `MIN`, `SI`, `CONTAR.SI`), destacarás información mediante **formato condicional** y crearás **gráficos dinámicos y personalizados** aptos para informes profesionales.

---

## Pasos de la actividad

> ⚠️ **¡Atención!** Trabaja de forma organizada. Guarda tu documento de Calc en tu carpeta personal del curso: `Digitalizacion_4ESO/Tema_2/Actividad_2/actividad2_calc_tuapellido_tunombre.ods`.
{: .alert-warning}

### 1. Configuración del Libro, Estructura y Formato de Celdas
Comenzaremos creando la estructura de la tabla de costes de componentes informáticos y personalizando su aspecto visual.

1. Abre **LibreOffice Calc**.
2. Cambia el nombre de la hoja actual (doble clic sobre la pestaña "Hoja1" abajo) a **«Presupuesto_Hardware»**.
3. **Bloque de Parámetros Generales (Cabecera fija):**
   * En las celdas `A2:B3`, crea un pequeño cuadro de parámetros de la empresa:
     * `A2`: `Tipo de IVA aplicable:` | `B2`: `21%` (Aplica formato de Porcentaje `%`).
     * `A3`: `Descuento Proveedor (VIP):` | `B3`: `5%` (Aplica formato de Porcentaje `%`).
   * Aplica a las celdas `A2:A3` negrita y fondo gris claro.
4. **Tabla Principal de Datos (comienza en la fila 5):**
   * Introduce las siguientes cabeceras en el rango `A5:H5`:
     * `A5`: `ID Producto`
     * `B5`: `Componente / Servicio`
     * `C5`: `Categoría`
     * `D5`: `Cantidad`
     * `E5`: `Precio Unitario (€)`
     * `F5`: `Subtotal (€)`
     * `G5`: `Precio con IVA (€)`
     * `H5`: `Estado Stock`
5. **Uso de Autorrelleno y Series:**
   * En `A6` escribe `COMP-001`. Usa el tirador de relleno (cuadradito negro en la esquina inferior derecha de la celda) y arrastra hacia abajo hasta `A15` para generar automáticamente la serie (`COMP-001` a `COMP-010`).
6. **Formato Visual de la Tabla:**
   * **Cabecera (`A5:H5`):** Fondo azul oscuro, texto en blanco, negrita, centrado vertical y horizontal.
   * **Rango de Datos (`A6:H15`):** Rellena los datos de 10 componentes (procesadores, memoria RAM, SSD, fuentes, servicio de montaje, etc.) con sus cantidades y precios unitarios.
   * Aplica formato de **Moneda (€)** con 2 decimales a las columnas de Precios (`E6:G15`).
   * Ajusta el ancho de las columnas (*Formato -> Formato de columnas -> Ancho óptimo*) para que ningún texto quede cortado.

---

### 2. Fórmulas básicas y Referencias Relativas y Absolutas ($)
Para realizar cálculos automáticos que se actualicen si cambian las condiciones (como el % de IVA), utilizaremos referencias fijas o absolutas.

1. **Cálculo del Subtotal (Referencia Relativa):**
   * En la celda `F6`, escribe la fórmula para calcular el subtotal de la primera fila: `=D6*E6` (Cantidad * Precio Unitario).
   * Copia la fórmula arrastrando el tirador de relleno hacia abajo hasta `F15`.
2. **Cálculo del Precio con IVA (Referencia Absoluta `$B$2`):**
   * En la celda `G6`, calcula el importe final aplicando la celda del IVA fija: `=F6*(1+$B$2)`.
   * > 💡 **¿Por qué usamos `$B$2`?** El signo `$` fija la fila y la columna para que al arrastrar la fórmula hacia abajo, la celda del IVA no cambie a B3, B4, etc.
   * Copia la fórmula desde `G6` hasta `G15`. Comprueba que todas las filas calculan el IVA correctamente sobre la celda `B2`.

---

### 3. Funciones Matemáticas, Estadísticas y Lógicas
Añadiremos un resumen de métricas en la parte inferior y utilizaremos condicionales para evaluar el inventario.

1. **Fila de Totales y Resumen Estadístico (Filas 17 a 21):**
   * En `E17` escribe `TOTAL PRESUPUESTO:` y en `G17` aplica la función sumatorio: `=SUMA(G6:G15)`. Pon esta celda en negrita y tamaño 12pt.
   * En `E18` escribe `Precio Medio Componente:` y en `G18` usa la función `=PROMEDIO(G6:G15)`.
   * En `E19` escribe `Componente Más Caro:` y en `G19` usa `=MAX(G6:G15)`.
   * En `E20` escribe `Componente Más Barato:` y en `G20` usa `=MIN(G6:G15)`.
   * En `E21` escribe `Nº Ítems en Stock Bajo:` y en `G21` usa `=CONTAR.SI(D6:D15;"<5")`.
2. **Uso de la Función Lógica `SI` (Estado de Stock):**
   * En la celda `H6` (Estado Stock), escribe una fórmula condicional que evalúe la cantidad disponible:
     `=SI(D6<5; "REPONER"; "OK")`
   * Arrastra la fórmula hasta `H15`. Verás que las celdas con cantidad inferior a 5 mostrarán el texto "REPONER" y el resto "OK".

---

### 4. Formato Condicional y Código de Colores
Utilizaremos el formato condicional para que la hoja destaque visualmente las alertas de forma automática.

1. Selecciona las celdas de la columna Estado Stock (`H6:H15`).
2. Ve al menú superior: *Formato -> Formato condicional -> Condición...*
3. **Regla 1 (Alerta Red):** Si el valor de la celda es *igual a* `"REPONER"`, aplica un estilo con fondo rojo claro y texto en rojo oscuro/negrita.
4. **Regla 2 (Correcto Green):** Añade una segunda condición: si el valor es *igual a* `"OK"`, aplica un estilo con fondo verde claro y texto en verde oscuro.
5. **Escala de Color / Barras de datos en Cantidades:** Selecciona el rango de Cantidades (`D6:D15`), ve a *Formato -> Formato condicional -> Barra de datos* para añadir una barra visual proporcional a la cantidad almacenada.

---

### 5. Creación y Personalización de Gráficos
Representaremos visualmente los datos para facilitar la toma de decisiones.

1. **Gráfico 1: Comparativa de Precios (Gráfico de Columnas)**
   * Selecciona las columnas `B5:B15` (Nombres) y, manteniendo pulsada la tecla `Ctrl`, selecciona `E5:G15` (Precios unitarios y Precios con IVA).
   * Ve a *Insertar -> Gráfico...*
   * Elige el tipo **Columna (Barra vertical)**.
   * Ponle como Título: `Comparativa de Costes por Componente`.
   * Personaliza los colores de las series: azul para el precio unitario y naranja para el precio con IVA. Ubica la leyenda en la parte inferior.
2. **Gráfico 2: Distribución por Categorías (Gráfico Circular / Tarta)**
   * Selecciona el rango de categorías y subtotales (`C5:C15` y `F5:F15`) o crea una tabla resumen de categorías.
   * Ve a *Insertar -> Gráfico...* y elige el tipo **Circular (Tarta)**.
   * Título: `Distribución del Subtotal por Categoría`.
   * Muestra las **etiquetas de datos** en porcentaje (`%`) sobre cada porción del gráfico.
3. Coloca ambos gráficos de forma ordenada debajo o al lado de las tablas de datos.

---

### 6. Maquetación, Encabezado/Pie y Exportación
1. Ve a *Formato -> Estilo de página...*
2. En la pestaña **Página**, pon la orientación en **Horizontal** (para que quepan bien la tabla y los gráficos).
3. En la pestaña **Cabecera**, activa el encabezado y añade a la izquierda: `Tema 2: LibreOffice Calc` y a la derecha el campo **Fecha**.
4. En la pestaña **Pie de página**, activa el pie y añade a la izquierda tu nombre completo y a la derecha el campo **Página X de Y**.
5. Revisa la *Vista previa de impresión* (*Archivo -> Vista previa de la impresión*) y ajusta en la pestaña **Hoja** la opción de escala a **"Ajustar alcance(s) de impresión al número de páginas: 1"** para que todo el contenido quede perfectamente encuadrado.

---

## Entregables en Aules

Sube a la tarea de Aules los siguientes **dos archivos**:
* **`actividad2_calc_tuapellido_tunombre.ods`** (Libro editable de LibreOffice Calc con fórmulas funcionales)
* **`actividad2_calc_tuapellido_tunombre.pdf`** (Documento exportado en formato PDF ajustado a página)

---

## Rúbrica de Evaluación

| Criterio | 0 pts | 0.5 pts | 1 pt | 1.5 pts | 2 pts |
|----------|-------|---------|------|---------|-------|
| **1. Estructura y formato de celda** (máx. 1 pt) | No aplica formatos de celda ni estructura adecuada. | Diseña la tabla pero no aplica formatos de moneda (€), porcentaje (%), series completas o alineaciones. | Aplica formatos de celda correctos y autorrelleno, pero comete errores en la cabecera fija de parámetros o en la estética general. | Estructura perfecta: parámetros fijos (IVA/Dto), serie `COMP-001` a `010`, formatos de moneda (€) y porcentaje (%), cabecera azul y anchos óptimos. | |
| **2. Referencias Relativas y Absolutas ($)** (máx. 1.5 pts) | Escribe valores numéricos a mano sin usar fórmulas. | Usa fórmulas pero no aplica referencias absolutas (`$`), provocando errores al arrastrar la fórmula del IVA. | Calcula subtotales e IVA con fórmulas, pero comete algún fallo menor en la sintaxis de fijación de celdas (`$B$2`). | Domina las referencias relativas y absolutas fijando correctamente la celda `$B$2` para el cálculo del IVA sin errores al copiar. | |
| **3. Funciones Matemáticas y Lógicas** (máx. 1.5 pts) | No utiliza funciones automáticas de Calc. | Usa solo la función SUMA pero omite las funciones estadísticas (`PROMEDIO`, `MAX`, `MIN`) o la función lógica `SI`. | Utiliza `SUMA`, `PROMEDIO`, `MAX`, `MIN` y `SI`, pero falla en la sintaxis de `CONTAR.SI` o en la condición del stock. | Aplica correctamente `SUMA`, `PROMEDIO`, `MAX`, `MIN`, `CONTAR.SI` y la función condicional `=SI(D6<5;"REPONER";"OK")` de forma impecable. | |
| **4. Formato Condicional y Alertas** (máx. 1 pt) | No aplica formato condicional. | Aplica color manual a las celdas en lugar de usar reglas de formato condicional automático. | Configura formato condicional pero solo con 1 regla o sin códigos de color bien contrastados. | Reglas de formato condicional automáticas perfectamente aplicadas (rojo para "REPONER", verde para "OK") y barras de datos en cantidades. | |
| **5. Representación Gráfica** (máx. 1 pt) | No genera gráficos o estos son ilegibles. | Genera 1 solo gráfico sin títulos ni leyendas personalizadas. | Crea los 2 gráficos (columnas y tarta) pero omite etiquetas de datos, porcentajes o colores personalizados. | Dos gráficos impecables (Columnas comparativas y Tarta porcentual) con títulos, leyendas, etiquetas de datos y colores diferenciados. | |
| **6. Encabezado, Pie e Impresión PDF** (máx. 2 pts) | No configura la página ni exporta a PDF. | Exporta a PDF pero la tabla queda cortada en varias páginas o carece de encabezado/pie dinámico. | Configura orientación horizontal, encabezado y pie (`Página X de Y`), pero no ajusta la escala de impresión a 1 página. | | Configuración de página horizontal impecable, encabezado/pie con campos dinámicos y exportación PDF ajustada exactamente a 1 página. |
| **7. Entrega en plazo** (máx. 2 pts) | No entrega o entrega con un retraso de más de una semana. | Entrega con un retraso importante de hasta una semana. | Entrega con un pequeño retraso de máximo 2 días. | | Entrega la actividad a tiempo dentro del plazo establecido. |


**Criterios de evaluación de la programación:**
* **CE2 – 2.1.** Buscar, seleccionar y organizar la información en el entorno personal de aprendizaje.
* **CE2 – 2.2.** Evaluar la fiabilidad y calidad de la información.
* **CE2 – 2.3.** Crear, integrar y editar contenidos digitales con sentido estético de manera individual o colectiva.
* **CE2 – 2.5.** Organizar y almacenar la información de forma estructurada.
* **CE2 – 2.6.** Publicar y difundir contenidos digitales respetando las normas de propiedad intelectual.
