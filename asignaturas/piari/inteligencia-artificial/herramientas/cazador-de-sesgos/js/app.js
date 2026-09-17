// ==========================================================================
// CAZADOR DE SESGOS — Actividad 6 del Tema 2
// ==========================================================================

(function () {
  'use strict';

  const estado = { nombre: '', fichas: [], indice: 0 };

  /** Construye la lista plana de imágenes a evaluar (prompt × 4). */
  function construirFichas() {
    const fichas = [];
    PROMPTS_SESGOS.forEach(function (prompt) {
      rutasDelPrompt(prompt.id).forEach(function (ruta) {
        fichas.push({ prompt: prompt, ruta: ruta, respuestas: {} });
      });
    });
    return fichas;
  }

  // ======================================================================
  // ARRANQUE
  // ======================================================================

  T2.$('#inicio-total').textContent =
    (PROMPTS_SESGOS.length * CONFIG_SESGOS.imagenesPorPrompt) + '';

  T2.iniciarConNombre(function (nombre) {
    estado.nombre = nombre;
    empezar();
  });

  function empezar() {
    estado.fichas = construirFichas();
    estado.indice = 0;
    T2.$('#pantalla-resultados').classList.add('hidden');
    T2.$('#pantalla-recuento').classList.remove('hidden');
    pintarFicha();
  }

  // ======================================================================
  // RECUENTO
  // ======================================================================

  function pintarFicha() {
    const ficha = estado.fichas[estado.indice];
    const total = estado.fichas.length;

    T2.$('#contador').textContent = (estado.indice + 1) + ' / ' + total;
    T2.$('#progreso').style.width = (estado.indice / total * 100) + '%';
    T2.$('#prompt-texto').textContent = '«' + ficha.prompt.texto + '»';

    // Imagen (con aviso claro si el archivo no está puesto todavía)
    const caja = T2.$('#imagen-box');
    caja.innerHTML = '';
    const img = T2.el('img', { attrs: { src: ficha.ruta, alt: ficha.prompt.texto } });
    img.addEventListener('error', function () {
      caja.innerHTML = '';
      caja.appendChild(T2.el('div', {
        class: 'imagen-falta',
        html: '⚠️ <strong>Falta la imagen</strong><br>' + ficha.ruta +
              '<br><span class="dim">Aviso para el profesor: genera y coloca las imágenes en esa carpeta.</span>'
      }));
    });
    caja.appendChild(img);

    pintarFormulario(ficha);
    T2.$('#btn-atras').disabled = estado.indice === 0;
    actualizarBotonSiguiente();
  }

  function pintarFormulario(ficha) {
    const contenedor = T2.$('#formulario-recuento');
    contenedor.innerHTML = '';

    PREGUNTAS_RECUENTO.forEach(function (pregunta) {
      const grupo = T2.el('div', { class: 'grupo-pregunta' });
      grupo.appendChild(T2.el('span', { text: pregunta.etiqueta }));

      const opciones = T2.el('div', { class: 'opciones-recuento' });
      pregunta.opciones.forEach(function (opcion) {
        const elegida = ficha.respuestas[pregunta.clave] === opcion;
        const etiqueta = T2.el('label', {
          class: 'opcion-radio' + (elegida ? ' activa' : ''),
          text: opcion
        });
        etiqueta.addEventListener('click', function () {
          ficha.respuestas[pregunta.clave] = opcion;
          pintarFormulario(ficha);
          actualizarBotonSiguiente();
        });
        opciones.appendChild(etiqueta);
      });

      grupo.appendChild(opciones);
      contenedor.appendChild(grupo);
    });
  }

  function fichaCompleta(ficha) {
    return PREGUNTAS_RECUENTO.every(function (p) { return !!ficha.respuestas[p.clave]; });
  }

  function actualizarBotonSiguiente() {
    const ficha = estado.fichas[estado.indice];
    const ultima = estado.indice === estado.fichas.length - 1;
    const boton = T2.$('#btn-siguiente');
    boton.disabled = !fichaCompleta(ficha);
    boton.textContent = ultima ? 'Ver resultados 📊' : 'Siguiente →';
  }

  T2.$('#btn-siguiente').addEventListener('click', function () {
    if (estado.indice === estado.fichas.length - 1) { mostrarResultados(); return; }
    estado.indice++;
    pintarFicha();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  T2.$('#btn-atras').addEventListener('click', function () {
    if (estado.indice === 0) return;
    estado.indice--;
    pintarFicha();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ======================================================================
  // GRÁFICOS
  // ======================================================================

  /** Cuenta respuestas de una pregunta sobre un conjunto de fichas. */
  function contar(fichas, clave, opciones) {
    return opciones.map(function (opcion) {
      return fichas.filter(function (f) { return f.respuestas[clave] === opcion; }).length;
    });
  }

  function pintarBarras(contenedor, titulo, opciones, valores) {
    const total = valores.reduce(function (a, b) { return a + b; }, 0) || 1;
    const grupo = T2.el('div', { class: 'grafico-grupo' });
    grupo.appendChild(T2.el('h4', { text: titulo }));

    opciones.forEach(function (opcion, i) {
      const porcentaje = valores[i] / total * 100;
      const fila = T2.el('div', { class: 'barra-fila' });
      fila.appendChild(T2.el('span', { class: 'barra-etiqueta', text: opcion }));

      const pista = T2.el('div', { class: 'barra-pista' });
      const relleno = T2.el('div', { class: 'barra-relleno c' + (i % 4) });
      relleno.style.width = porcentaje.toFixed(1) + '%';
      pista.appendChild(relleno);
      fila.appendChild(pista);

      fila.appendChild(T2.el('span', {
        class: 'barra-valor', text: valores[i] + ' · ' + Math.round(porcentaje) + '%'
      }));
      grupo.appendChild(fila);
    });

    contenedor.appendChild(grupo);
  }

  /** Devuelve el porcentaje de la opción más repetida (0-100). */
  function desequilibrio(valores) {
    const total = valores.reduce(function (a, b) { return a + b; }, 0) || 1;
    return Math.max.apply(null, valores) / total * 100;
  }

  function mostrarResultados() {
    T2.$('#pantalla-recuento').classList.add('hidden');
    T2.$('#pantalla-resultados').classList.remove('hidden');
    T2.$('#res-n-imagenes').textContent = estado.fichas.length;

    // --- Global ---
    const global = T2.$('#grafico-global');
    global.innerHTML = '';
    PREGUNTAS_RECUENTO.forEach(function (pregunta) {
      pintarBarras(global, pregunta.etiqueta, pregunta.opciones,
        contar(estado.fichas, pregunta.clave, pregunta.opciones));
    });

    // --- Por prompt ---
    const porPrompt = T2.$('#grafico-prompts');
    porPrompt.innerHTML = '';

    PROMPTS_SESGOS.forEach(function (prompt) {
      const fichas = estado.fichas.filter(function (f) { return f.prompt.id === prompt.id; });
      const tarjeta = T2.el('div', { class: 'tarjeta-prompt' + (prompt.control ? ' control' : '') });
      tarjeta.appendChild(T2.el('h4', { text: '«' + prompt.texto + '»' }));

      const genero = contar(fichas, 'genero', PREGUNTAS_RECUENTO[0].opciones);
      const maximo = desequilibrio(genero);

      if (prompt.control) {
        tarjeta.appendChild(T2.el('div', {
          class: 'aviso-control',
          text: '🎯 Prompt de control: aquí NO debería aparecer un reparto desigual.'
        }));
      } else if (maximo >= 75) {
        tarjeta.appendChild(T2.el('div', {
          class: 'aviso-desigual',
          text: '⚠️ Reparto muy desigual: ' + Math.round(maximo) + '% en una sola categoría.'
        }));
      }

      PREGUNTAS_RECUENTO.forEach(function (pregunta) {
        pintarBarras(tarjeta, pregunta.etiqueta, pregunta.opciones,
          contar(fichas, pregunta.clave, pregunta.opciones));
      });

      porPrompt.appendChild(tarjeta);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ======================================================================
  // DESCARGA
  // ======================================================================

  T2.$('#btn-descargar').addEventListener('click', function () {
    const lineas = [T2.cabeceraResumen('Cazador de sesgos', estado.nombre)];
    lineas.push('Generador de imágenes: ' + CONFIG_SESGOS.generador);
    lineas.push('Fecha de generación: ' + CONFIG_SESGOS.fecha);
    lineas.push('Imágenes evaluadas: ' + estado.fichas.length);
    lineas.push('', 'TOTALES DE TODA LA SERIE');
    lineas.push('-'.repeat(60));

    PREGUNTAS_RECUENTO.forEach(function (pregunta) {
      const valores = contar(estado.fichas, pregunta.clave, pregunta.opciones);
      const total = valores.reduce(function (a, b) { return a + b; }, 0) || 1;
      lineas.push(pregunta.etiqueta + ':');
      pregunta.opciones.forEach(function (opcion, i) {
        lineas.push('   ' + opcion.padEnd(18) + valores[i] + ' (' + Math.round(valores[i] / total * 100) + '%)');
      });
    });

    lineas.push('', 'PROMPT A PROMPT');
    lineas.push('-'.repeat(60));

    PROMPTS_SESGOS.forEach(function (prompt) {
      const fichas = estado.fichas.filter(function (f) { return f.prompt.id === prompt.id; });
      lineas.push('');
      lineas.push('«' + prompt.texto + '»' + (prompt.control ? '   [CONTROL]' : ''));
      PREGUNTAS_RECUENTO.forEach(function (pregunta) {
        const valores = contar(fichas, pregunta.clave, pregunta.opciones);
        const detalle = pregunta.opciones.map(function (opcion, i) {
          return opcion + '=' + valores[i];
        }).join('  ');
        lineas.push('   ' + pregunta.etiqueta + ': ' + detalle);
      });
    });

    lineas.push('', '='.repeat(60));
    lineas.push('PARA RESPONDER EN TU DOCUMENTO:');
    lineas.push('  1. ¿Qué prompt da el reparto MÁS desequilibrado? ¿Cuánto?');
    lineas.push('  2. ¿Hay alguno equilibrado? ¿Cuál y por qué crees que ese sí?');
    lineas.push('  3. En ninguna petición se decía el género ni la edad.');
    lineas.push('     Entonces, ¿de dónde sale ese reparto?');
    lineas.push('='.repeat(60));

    T2.descargarTexto(
      T2.aNombreFichero(estado.nombre) + '_cazador_sesgos.txt',
      lineas.join('\n')
    );
  });

  T2.$('#btn-repetir').addEventListener('click', empezar);

})();
