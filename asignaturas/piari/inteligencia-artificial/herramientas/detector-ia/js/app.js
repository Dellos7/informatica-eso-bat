// ==========================================================================
// DETECTOR DE IA — Actividad 1 del Tema 2
// ==========================================================================

(function () {
  'use strict';

  const ICONOS = { imagen: '🖼️', texto: '📝', audio: '🔊' };
  const NOMBRES = { imagen: 'Imagen', texto: 'Texto', audio: 'Audio' };

  const estado = { nombre: '', items: [], indice: 0, respuestas: [] };

  // ======================================================================
  // ARRANQUE
  // ======================================================================

  T2.iniciarConNombre(function (nombre) {
    estado.nombre = nombre;
    empezarTest();
  });

  function empezarTest() {
    estado.items = T2.shuffle(DATOS_DETECTOR);
    estado.indice = 0;
    estado.respuestas = [];
    T2.$('#pantalla-resultados').classList.add('hidden');
    T2.$('#pantalla-test').classList.remove('hidden');
    pintarItem();
  }

  // ======================================================================
  // TEST
  // ======================================================================

  function pintarItem() {
    const item = estado.items[estado.indice];
    const total = estado.items.length;

    T2.$('#test-tipo-icono').textContent = ICONOS[item.tipo] || '❓';
    T2.$('#test-tipo-texto').textContent = NOMBRES[item.tipo] || '';
    T2.$('#test-contador').textContent = (estado.indice + 1) + ' / ' + total;
    T2.$('#test-progreso').style.width = (estado.indice / total * 100) + '%';

    const caja = T2.$('#test-contenido');
    caja.innerHTML = '';

    if (item.tipo === 'texto') {
      caja.appendChild(T2.el('p', { class: 'texto-item', text: item.contenido }));

    } else if (item.tipo === 'imagen') {
      const img = T2.el('img', { attrs: { src: item.contenido, alt: 'Ítem ' + (estado.indice + 1) } });
      img.addEventListener('error', function () {
        caja.innerHTML = '';
        caja.appendChild(T2.el('div', {
          class: 'item-falta',
          html: '⚠️ <strong>Falta el archivo</strong><br>' + item.contenido +
                '<br><span class="dim">Aviso para el profesor: coloca la imagen en esa ruta.</span>'
        }));
      });
      caja.appendChild(img);

    } else if (item.tipo === 'audio') {
      const audio = T2.el('audio', { attrs: { controls: 'controls', src: item.contenido } });
      audio.addEventListener('error', function () {
        caja.innerHTML = '';
        caja.appendChild(T2.el('div', {
          class: 'item-falta',
          html: '⚠️ <strong>Falta el archivo</strong><br>' + item.contenido +
                '<br><span class="dim">Aviso para el profesor: coloca el audio en esa ruta.</span>'
        }));
      });
      caja.appendChild(audio);
    }
  }

  T2.$$('.opcion').forEach(function (boton) {
    boton.addEventListener('click', function () {
      const dijoIA = boton.dataset.respuesta === 'ia';
      const item = estado.items[estado.indice];

      estado.respuestas.push({
        item: item,
        respuestaIA: dijoIA,
        acierto: dijoIA === item.esIA
      });

      estado.indice++;
      if (estado.indice >= estado.items.length) mostrarResultados();
      else pintarItem();
    });
  });

  // ======================================================================
  // RESULTADOS
  // ======================================================================

  function mostrarResultados() {
    const aciertos = estado.respuestas.filter(function (r) { return r.acierto; }).length;
    const total = estado.respuestas.length;
    const porcentaje = Math.round(aciertos / total * 100);

    T2.$('#pantalla-test').classList.add('hidden');
    T2.$('#pantalla-resultados').classList.remove('hidden');

    const marcador = T2.$('#res-puntuacion');
    marcador.textContent = aciertos + '/' + total;
    marcador.className = 'score-big ' + (porcentaje >= 75 ? 'good' : porcentaje >= 55 ? 'mid' : 'bad');

    T2.$('#res-porcentaje').textContent = porcentaje + '% de aciertos';
    T2.$('#res-mensaje').innerHTML = mensajeResultado(porcentaje);

    pintarRevision();
    pintarPistas();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function mensajeResultado(porcentaje) {
    if (porcentaje >= 80) {
      return 'Muy buen ojo. Aun así, fíjate: <strong>el material de este test está elegido para que se pueda ' +
             'distinguir</strong>. En internet no te avisan de que hay que mirar.';
    }
    if (porcentaje >= 55) {
      return 'Estás en la media. Y la media es <strong>poco más que responder al azar</strong>: con dos opciones, ' +
             'acertar el 50 % se consigue lanzando una moneda.';
    }
    return 'Has acertado menos que lanzando una moneda. No es un problema tuyo: ' +
           '<strong>es que ya no se distingue a simple vista</strong>. Por eso hacen falta pistas y verificación.';
  }

  function pintarRevision() {
    const contenedor = T2.$('#res-revision');
    contenedor.innerHTML = '';

    estado.respuestas.forEach(function (respuesta, i) {
      const item = respuesta.item;
      const bloque = T2.el('div', { class: 'revision-item ' + (respuesta.acierto ? 'acierto' : 'fallo') });

      const cabecera = T2.el('div', { class: 'revision-cabecera' });
      cabecera.appendChild(T2.el('span', { text: (i + 1) + '. ' + ICONOS[item.tipo] }));
      cabecera.appendChild(T2.el('span', {
        class: 'chip ' + (item.esIA ? 'ko' : 'ok'),
        text: item.esIA ? '🤖 Era IA' : '🧑 Era real'
      }));
      cabecera.appendChild(T2.el('span', {
        class: 'chip ' + (respuesta.acierto ? 'ok' : 'ko'),
        text: respuesta.acierto ? 'Acertaste' : 'Fallaste'
      }));
      bloque.appendChild(cabecera);

      if (item.tipo === 'texto') {
        const extracto = item.contenido.length > 110
          ? item.contenido.slice(0, 110) + '…'
          : item.contenido;
        bloque.appendChild(T2.el('div', { class: 'revision-extracto', text: '«' + extracto + '»' }));
      } else {
        bloque.appendChild(T2.el('div', { class: 'revision-extracto', text: item.contenido }));
      }

      bloque.appendChild(T2.el('div', {
        class: 'revision-pista',
        html: '<strong>La pista:</strong> ' + item.pista
      }));

      contenedor.appendChild(bloque);
    });
  }

  function pintarPistas() {
    const contenedor = T2.$('#res-pistas');
    contenedor.innerHTML = '';

    Object.keys(PISTAS_GENERALES).forEach(function (tipo) {
      const bloque = T2.el('div', { class: 'bloque-pistas' });
      bloque.appendChild(T2.el('h3', { text: ICONOS[tipo] + ' ' + NOMBRES[tipo] }));
      const lista = T2.el('ul');
      PISTAS_GENERALES[tipo].forEach(function (pista) {
        lista.appendChild(T2.el('li', { text: pista }));
      });
      bloque.appendChild(lista);
      contenedor.appendChild(bloque);
    });
  }

  // ======================================================================
  // DESCARGA Y REINICIO
  // ======================================================================

  T2.$('#btn-descargar').addEventListener('click', function () {
    const aciertos = estado.respuestas.filter(function (r) { return r.acierto; }).length;
    const total = estado.respuestas.length;

    const lineas = [T2.cabeceraResumen('Detector de IA', estado.nombre)];
    lineas.push('RESULTADO: ' + aciertos + ' aciertos de ' + total +
                ' (' + Math.round(aciertos / total * 100) + '%)');
    lineas.push('', 'DETALLE ÍTEM A ÍTEM');
    lineas.push('-'.repeat(60));

    estado.respuestas.forEach(function (respuesta, i) {
      const item = respuesta.item;
      lineas.push((i + 1) + '. [' + NOMBRES[item.tipo] + '] ' +
                  (item.esIA ? 'Era IA' : 'Era real') + ' — ' +
                  (respuesta.acierto ? 'ACERTASTE' : 'FALLASTE'));
      lineas.push('   Pista: ' + item.pista);
    });

    lineas.push('', '='.repeat(60));
    lineas.push('PARA RESPONDER EN TU DOCUMENTO:');
    lineas.push('  1. ¿Cuántos aciertos has tenido?');
    lineas.push('  2. Las 3 pistas que mejor te han funcionado, explicadas.');
    lineas.push('  3. ¿En qué ítem estabas seguro y fallaste? ¿Por qué te engañó?');
    lineas.push('  4. ¿En qué situación de tu vida real te importaría no poder distinguirlo?');
    lineas.push('='.repeat(60));

    T2.descargarTexto(
      T2.aNombreFichero(estado.nombre) + '_detector_ia.txt',
      lineas.join('\n')
    );
  });

  T2.$('#btn-repetir').addEventListener('click', empezarTest);

})();
