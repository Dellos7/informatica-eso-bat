// ==========================================================================
// UTILIDADES COMPARTIDAS — Herramientas del Tema 2 (Inteligencia Artificial)
// ==========================================================================

const T2 = {

  /** Atajo de selección. */
  $(sel, root = document) { return root.querySelector(sel); },
  $$(sel, root = document) { return Array.from(root.querySelectorAll(sel)); },

  /** Crea un elemento con clases, texto y atributos. */
  el(tag, opts = {}) {
    const node = document.createElement(tag);
    if (opts.class) node.className = opts.class;
    if (opts.text !== undefined) node.textContent = opts.text;
    if (opts.html !== undefined) node.innerHTML = opts.html;
    if (opts.attrs) for (const [k, v] of Object.entries(opts.attrs)) node.setAttribute(k, v);
    return node;
  },

  /** Baraja un array (Fisher-Yates). No modifica el original. */
  shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  /** Nombre del alumnado: se pide una vez y se recuerda en el navegador. */
  nombre: {
    CLAVE: 't2_nombre_alumno',
    get() {
      try { return localStorage.getItem(this.CLAVE) || ''; } catch (e) { return ''; }
    },
    set(valor) {
      try { localStorage.setItem(this.CLAVE, valor); } catch (e) { /* modo privado */ }
    }
  },

  /**
   * Monta la pantalla de identificación. Llama a `alEmpezar(nombre)` al pulsar.
   * Espera un contenedor con #pantalla-inicio, #input-nombre y #btn-empezar.
   */
  iniciarConNombre(alEmpezar) {
    const input = this.$('#input-nombre');
    const boton = this.$('#btn-empezar');
    if (!input || !boton) return;

    input.value = this.nombre.get();
    const validar = () => { boton.disabled = input.value.trim().length < 3; };
    validar();

    input.addEventListener('input', validar);
    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter' && !boton.disabled) boton.click();
    });
    boton.addEventListener('click', () => {
      const nombre = input.value.trim();
      this.nombre.set(nombre);
      this.$('#pantalla-inicio').classList.add('hidden');
      alEmpezar(nombre);
    });
  },

  /** Fecha y hora legibles, para los resúmenes descargables. */
  ahora() {
    return new Date().toLocaleString('es-ES', {
      day: '2-digit', month: '2-digit', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  },

  /** Descarga un texto como fichero .txt. */
  descargarTexto(nombreFichero, contenido) {
    const blob = new Blob([contenido], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const enlace = this.el('a', { attrs: { href: url, download: nombreFichero } });
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  },

  /** Convierte un nombre en un trozo de fichero seguro: "Ana Pérez" -> "ana_perez". */
  aNombreFichero(texto) {
    return texto
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '_')
      .replace(/^_+|_+$/g, '') || 'alumno';
  },

  /** Cabecera común de los resúmenes descargables. */
  cabeceraResumen(titulo, nombre) {
    const linea = '='.repeat(60);
    return [
      linea,
      titulo.toUpperCase(),
      'Tema 2 — Inteligencia Artificial · PIAR I (2º ESO)',
      linea,
      `Alumno/a: ${nombre}`,
      `Fecha: ${this.ahora()}`,
      linea, ''
    ].join('\n');
  },

  /** Copia texto al portapapeles y da un aviso visual en el botón. */
  async copiar(texto, boton) {
    const original = boton.textContent;
    try {
      await navigator.clipboard.writeText(texto);
      boton.textContent = '✅ ¡Copiado!';
    } catch (e) {
      // Reserva para navegadores antiguos o contextos sin permisos.
      const area = this.el('textarea');
      area.value = texto;
      area.style.position = 'fixed';
      area.style.opacity = '0';
      document.body.appendChild(area);
      area.select();
      try { document.execCommand('copy'); boton.textContent = '✅ ¡Copiado!'; }
      catch (e2) { boton.textContent = '❌ Copia manualmente'; }
      document.body.removeChild(area);
    }
    setTimeout(() => { boton.textContent = original; }, 1800);
  },

  /**
   * Elige un índice de una lista de pesos aplicando una "temperatura".
   *   temp = 0  -> siempre el más probable (determinista)
   *   temp = 1  -> respeta las probabilidades originales
   * Valores intermedios agudizan la distribución hacia el máximo.
   */
  elegirConTemperatura(pesos, temp) {
    if (temp <= 0.001) return pesos.indexOf(Math.max(...pesos));

    // Exponente: con temp=1 deja los pesos como están; con temp baja los agudiza.
    const exponente = 1 / Math.max(temp, 0.02);
    const ajustados = pesos.map(p => Math.pow(Math.max(p, 0), exponente));
    const total = ajustados.reduce((a, b) => a + b, 0);
    if (total <= 0) return 0;

    let dado = Math.random() * total;
    for (let i = 0; i < ajustados.length; i++) {
      dado -= ajustados[i];
      if (dado <= 0) return i;
    }
    return ajustados.length - 1;
  },

  /** Los mismos pesos ajustados por temperatura, normalizados a porcentaje. */
  pesosConTemperatura(pesos, temp) {
    if (temp <= 0.001) {
      const max = Math.max(...pesos);
      return pesos.map(p => (p === max ? 100 : 0));
    }
    const exponente = 1 / Math.max(temp, 0.02);
    const ajustados = pesos.map(p => Math.pow(Math.max(p, 0), exponente));
    const total = ajustados.reduce((a, b) => a + b, 0) || 1;
    return ajustados.map(p => (p / total) * 100);
  }
};
