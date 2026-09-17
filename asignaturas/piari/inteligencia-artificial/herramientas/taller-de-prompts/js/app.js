// ==========================================================================
// TALLER DE PROMPTS — Actividad 4 del Tema 2
// ==========================================================================

(function () {
  'use strict';

  const valores = {};
  let chuleta = [];

  const TODOS_LOS_CAMPOS = CAMPOS_ROCF.concat([{
    clave: CAMPO_NEGATIVO.clave,
    letra: '🚫',
    nombre: 'Lo que NO quieres',
    pregunta: CAMPO_NEGATIVO.pregunta,
    ayuda: CAMPO_NEGATIVO.ayuda,
    placeholder: CAMPO_NEGATIVO.placeholder,
    ejemplos: CAMPO_NEGATIVO.ejemplos,
    opcional: true
  }]);

  // ======================================================================
  // PESTAÑAS
  // ======================================================================

  T2.$$('.pestana').forEach(function (pestana) {
    pestana.addEventListener('click', function () {
      T2.$$('.pestana').forEach(function (p) { p.classList.remove('activa'); });
      pestana.classList.add('activa');
      T2.$('#panel-constructor').classList.toggle('hidden', pestana.dataset.panel !== 'constructor');
      T2.$('#panel-galeria').classList.toggle('hidden', pestana.dataset.panel !== 'galeria');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // ======================================================================
  // CONSTRUCTOR
  // ======================================================================

  function pintarCampos() {
    const contenedor = T2.$('#campos');
    contenedor.innerHTML = '';

    TODOS_LOS_CAMPOS.forEach(function (campo) {
      const fila = T2.el('div', { class: 'campo-rocf', attrs: { 'data-campo': campo.clave } });
      fila.appendChild(T2.el('div', { class: 'campo-letra', text: campo.letra }));

      const cuerpo = T2.el('div');
      cuerpo.appendChild(T2.el('div', {
        class: 'campo-nombre',
        text: campo.nombre + (campo.opcional ? ' (opcional)' : '')
      }));
      cuerpo.appendChild(T2.el('div', { class: 'campo-pregunta', text: campo.pregunta }));
      cuerpo.appendChild(T2.el('div', { class: 'campo-ayuda', text: campo.ayuda }));

      const area = T2.el('textarea', {
        attrs: { placeholder: campo.placeholder, rows: '2', 'data-entrada': campo.clave }
      });
      area.value = valores[campo.clave] || '';
      area.addEventListener('input', function () {
        valores[campo.clave] = area.value;
        actualizarSalida();
        fila.classList.toggle('relleno', area.value.trim().length > 0);
      });
      cuerpo.appendChild(area);

      const sugerencias = T2.el('div', { class: 'sugerencias' });
      campo.ejemplos.forEach(function (ejemplo) {
        const chip = T2.el('button', { class: 'sugerencia', text: ejemplo });
        chip.addEventListener('click', function () {
          area.value = ejemplo;
          valores[campo.clave] = ejemplo;
          fila.classList.add('relleno');
          actualizarSalida();
          area.focus();
        });
        sugerencias.appendChild(chip);
      });
      cuerpo.appendChild(sugerencias);

      fila.appendChild(cuerpo);
      fila.classList.toggle('relleno', (valores[campo.clave] || '').trim().length > 0);
      contenedor.appendChild(fila);
    });
  }

  function montarPrompt() {
    const trozos = [];
    CAMPOS_ROCF.forEach(function (campo) {
      const texto = (valores[campo.clave] || '').trim();
      if (texto) trozos.push(texto.replace(/\s*\.?\s*$/, '') + '.');
    });
    const evitar = (valores[CAMPO_NEGATIVO.clave] || '').trim();
    if (evitar) trozos.push(evitar.replace(/\s*\.?\s*$/, '') + '.');
    return trozos.join(' ');
  }

  function actualizarSalida() {
    const prompt = montarPrompt();
    const salida = T2.$('#salida');

    if (prompt) salida.textContent = prompt;
    else salida.innerHTML = '<span class="dim">Ve rellenando los campos y aparecerá aquí…</span>';

    const completo = CAMPOS_ROCF.every(function (c) { return (valores[c.clave] || '').trim(); });
    T2.$('#btn-copiar').disabled = !prompt;
    T2.$('#btn-guardar').disabled = !completo;

    pintarAvisos(completo);
  }

  function pintarAvisos(completo) {
    const contenedor = T2.$('#avisos');
    contenedor.innerHTML = '';

    const faltan = CAMPOS_ROCF.filter(function (c) { return !(valores[c.clave] || '').trim(); });

    if (faltan.length > 0 && montarPrompt()) {
      contenedor.appendChild(T2.el('div', {
        class: 'notice warn mt',
        html: '⚠️ Te falta <strong>' + faltan.map(function (c) { return c.nombre; }).join(', ') + '</strong>. ' +
              'Recuerda: <strong>todo lo que no le digas, se lo inventará la IA por su cuenta.</strong>'
      }));
    } else if (completo) {
      const palabras = montarPrompt().split(/\s+/).length;
      contenedor.appendChild(T2.el('div', {
        class: 'notice good mt',
        html: '✅ Prompt completo (' + palabras + ' palabras). Cópialo y pruébalo en duck.ai. ' +
              'Después <strong>no te conformes</strong>: corrígele la respuesta al menos dos veces.'
      }));
    }
  }

  T2.$('#btn-copiar').addEventListener('click', function (ev) {
    T2.copiar(montarPrompt(), ev.currentTarget);
  });

  T2.$('#btn-limpiar').addEventListener('click', function () {
    TODOS_LOS_CAMPOS.forEach(function (c) { valores[c.clave] = ''; });
    pintarCampos();
    actualizarSalida();
  });

  // ======================================================================
  // CHULETA
  // ======================================================================

  T2.$('#btn-guardar').addEventListener('click', function () {
    chuleta.push({ texto: montarPrompt(), fecha: T2.ahora() });
    pintarChuleta();
  });

  function pintarChuleta() {
    const contenedor = T2.$('#chuleta');
    contenedor.innerHTML = '';

    T2.$('#chuleta-contador').textContent =
      chuleta.length + (chuleta.length === 1 ? ' guardado' : ' guardados');
    T2.$('#btn-descargar').disabled = chuleta.length === 0;

    if (chuleta.length === 0) {
      contenedor.appendChild(T2.el('p', {
        class: 'dim',
        text: 'Todavía no has guardado ningún prompt. Monta uno completo y pulsa «Guardar en mi chuleta».'
      }));
      return;
    }

    chuleta.forEach(function (entrada, i) {
      const item = T2.el('div', { class: 'chuleta-item' });
      item.appendChild(T2.el('div', { class: 'dim mono', text: '#' + (i + 1) + ' · ' + entrada.fecha }));
      item.appendChild(T2.el('div', { class: 'texto', text: entrada.texto }));

      const acciones = T2.el('div', { class: 'acciones' });

      const copiar = T2.el('button', { class: 'btn-mini', text: '📋 Copiar' });
      copiar.addEventListener('click', function (ev) { T2.copiar(entrada.texto, ev.currentTarget); });
      acciones.appendChild(copiar);

      const borrar = T2.el('button', { class: 'btn-mini', text: '🗑️ Borrar' });
      borrar.addEventListener('click', function () {
        chuleta.splice(i, 1);
        pintarChuleta();
      });
      acciones.appendChild(borrar);

      item.appendChild(acciones);
      contenedor.appendChild(item);
    });
  }

  T2.$('#btn-descargar').addEventListener('click', function () {
    const nombre = T2.nombre.get() || 'Alumno/a';
    const lineas = [T2.cabeceraResumen('Mi chuleta de prompts', nombre)];

    lineas.push('ESQUEMA R.O.C.F.');
    lineas.push('-'.repeat(60));
    CAMPOS_ROCF.forEach(function (campo) {
      lineas.push(campo.letra + ' — ' + campo.nombre + ': ' + campo.pregunta);
    });
    lineas.push('🚫 — Y lo que NO quieres.');

    lineas.push('', 'MIS PROMPTS GUARDADOS');
    lineas.push('-'.repeat(60));
    chuleta.forEach(function (entrada, i) {
      lineas.push('');
      lineas.push('#' + (i + 1) + ' (' + entrada.fecha + ')');
      lineas.push(entrada.texto);
    });

    lineas.push('', '='.repeat(60));
    lineas.push('MI PLANTILLA REUTILIZABLE:');
    lineas.push('  Eres [ROL].');
    lineas.push('  Necesito que [OBJETIVO].');
    lineas.push('  Contexto: [lo que tú sabes y la IA no puede saber].');
    lineas.push('  Formato: [extensión, estructura, tono].');
    lineas.push('  No [lo que no quieres].');
    lineas.push('='.repeat(60));

    T2.descargarTexto(T2.aNombreFichero(nombre) + '_chuleta_prompts.txt', lineas.join('\n'));
  });

  // ======================================================================
  // GALERÍA
  // ======================================================================

  function pintarGaleria() {
    const contenedor = T2.$('#galeria');
    contenedor.innerHTML = '';

    EJEMPLOS_GALERIA.forEach(function (ejemplo) {
      const tarjeta = T2.el('div', { class: 'card ejemplo' });
      tarjeta.appendChild(T2.el('h3', { text: '🎯 ' + ejemplo.encargo }));

      const comparativa = T2.el('div', { class: 'comparativa' });

      const malo = T2.el('div', { class: 'lado malo' });
      malo.appendChild(T2.el('div', { class: 'cabecera', text: '❌ PROMPT POBRE' }));
      malo.appendChild(T2.el('div', { class: 'prompt', text: ejemplo.pobre }));
      malo.appendChild(T2.el('div', { class: 'explica', text: ejemplo.problema }));
      comparativa.appendChild(malo);

      const bueno = T2.el('div', { class: 'lado bueno' });
      bueno.appendChild(T2.el('div', { class: 'cabecera', text: '✅ PROMPT CON R.O.C.F.' }));
      bueno.appendChild(T2.el('div', { class: 'prompt', text: ejemplo.bueno }));

      const copiar = T2.el('button', { class: 'btn-mini', text: '📋 Copiar este' });
      copiar.style.marginTop = '.7rem';
      copiar.addEventListener('click', function (ev) { T2.copiar(ejemplo.bueno, ev.currentTarget); });
      bueno.appendChild(copiar);

      comparativa.appendChild(bueno);
      tarjeta.appendChild(comparativa);
      contenedor.appendChild(tarjeta);
    });
  }

  // ======================================================================
  // INICIO
  // ======================================================================

  pintarCampos();
  actualizarSalida();
  pintarChuleta();
  pintarGaleria();

})();
