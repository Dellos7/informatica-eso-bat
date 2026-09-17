// ==========================================================================
// EL SEMÁFORO DE LOS DATOS — Actividad 5 del Tema 2
// ==========================================================================

(function () {
  'use strict';

  const estado = { nombre: '', tarjetas: [], indice: 0, respuestas: [] };

  // ======================================================================
  // ARRANQUE
  // ======================================================================

  T2.iniciarConNombre(function (nombre) {
    estado.nombre = nombre;
    pintarZonas();
    empezar();
  });

  function empezar() {
    estado.tarjetas = T2.shuffle(TARJETAS_SEMAFORO);
    estado.indice = 0;
    estado.respuestas = [];
    T2.$('#pantalla-resultados').classList.add('hidden');
    T2.$('#pantalla-juego').classList.remove('hidden');
    actualizarCuentas();
    pintarTarjeta();
  }

  // ======================================================================
  // ZONAS
  // ======================================================================

  function pintarZonas() {
    const contenedor = T2.$('#zonas');
    contenedor.innerHTML = '';

    Object.keys(ZONAS).forEach(function (clave) {
      const datos = ZONAS[clave];
      const zona = T2.el('div', { class: 'zona', attrs: { 'data-zona': clave } });
      zona.appendChild(T2.el('div', { class: 'emoji', text: datos.emoji }));
      zona.appendChild(T2.el('div', { class: 'titulo', text: datos.titulo }));
      zona.appendChild(T2.el('div', { class: 'lema', text: datos.lema }));
      zona.appendChild(T2.el('div', { class: 'cuenta', attrs: { 'data-cuenta': clave }, text: '0 tarjetas' }));

      zona.addEventListener('click', function () { responder(clave); });

      zona.addEventListener('dragover', function (ev) {
        ev.preventDefault();
        zona.classList.add('encima');
      });
      zona.addEventListener('dragleave', function () { zona.classList.remove('encima'); });
      zona.addEventListener('drop', function (ev) {
        ev.preventDefault();
        zona.classList.remove('encima');
        responder(clave);
      });

      contenedor.appendChild(zona);
    });
  }

  function actualizarCuentas() {
    Object.keys(ZONAS).forEach(function (clave) {
      const n = estado.respuestas.filter(function (r) { return r.elegido === clave; }).length;
      const nodo = T2.$('[data-cuenta="' + clave + '"]');
      if (nodo) nodo.textContent = n + (n === 1 ? ' tarjeta' : ' tarjetas');
    });
  }

  // ======================================================================
  // TARJETAS
  // ======================================================================

  function pintarTarjeta() {
    const tarjeta = estado.tarjetas[estado.indice];
    const total = estado.tarjetas.length;

    const caja = T2.$('#carta-actual');
    caja.textContent = tarjeta.texto;
    caja.setAttribute('draggable', 'true');
    caja.classList.remove('entrando');
    void caja.offsetWidth;          // fuerza el reinicio de la animación
    caja.classList.add('entrando');

    T2.$('#contador').textContent = (estado.indice + 1) + ' / ' + total;
    T2.$('#progreso').style.width = (estado.indice / total * 100) + '%';
    T2.$('#btn-deshacer').disabled = estado.respuestas.length === 0;
  }

  const caja = T2.$('#carta-actual');
  caja.addEventListener('dragstart', function (ev) {
    caja.classList.add('arrastrando');
    if (ev.dataTransfer) {
      ev.dataTransfer.effectAllowed = 'move';
      ev.dataTransfer.setData('text/plain', 'tarjeta');
    }
  });
  caja.addEventListener('dragend', function () { caja.classList.remove('arrastrando'); });

  function responder(colorElegido) {
    if (estado.indice >= estado.tarjetas.length) return;

    const tarjeta = estado.tarjetas[estado.indice];
    estado.respuestas.push({
      tarjeta: tarjeta,
      elegido: colorElegido,
      acierto: colorElegido === tarjeta.color
    });

    estado.indice++;
    actualizarCuentas();

    if (estado.indice >= estado.tarjetas.length) mostrarResultados();
    else pintarTarjeta();
  }

  T2.$('#btn-deshacer').addEventListener('click', function () {
    if (estado.respuestas.length === 0) return;
    estado.respuestas.pop();
    estado.indice--;
    actualizarCuentas();
    pintarTarjeta();
  });

  // ======================================================================
  // RESULTADOS
  // ======================================================================

  function mostrarResultados() {
    // Las tarjetas marcadas como "debate" no cuentan como fallo.
    const puntuables = estado.respuestas.filter(function (r) { return !r.tarjeta.debate; });
    const aciertos = puntuables.filter(function (r) { return r.acierto; }).length;
    const total = puntuables.length;
    const porcentaje = Math.round(aciertos / total * 100);

    T2.$('#pantalla-juego').classList.add('hidden');
    T2.$('#pantalla-resultados').classList.remove('hidden');

    const marcador = T2.$('#res-puntuacion');
    marcador.textContent = aciertos + '/' + total;
    marcador.className = 'score-big ' + (porcentaje >= 80 ? 'good' : porcentaje >= 60 ? 'mid' : 'bad');

    T2.$('#res-detalle').textContent =
      porcentaje + '% · (' + estado.respuestas.filter(function (r) { return r.tarjeta.debate; }).length +
      ' tarjetas de debate no puntúan)';

    T2.$('#res-mensaje').innerHTML = mensaje(porcentaje);

    pintarRevision();
    pintarDebate();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function mensaje(porcentaje) {
    const falloTerceros = estado.respuestas.some(function (r) {
      return !r.acierto && [14, 16, 17, 18, 19].indexOf(r.tarjeta.id) !== -1;
    });

    if (falloTerceros) {
      return 'Fíjate en una cosa: <strong>has fallado en alguna tarjeta que contenía datos de OTRA persona</strong>. ' +
             'Es el error más común. Que tengas algo en tu móvil no significa que sea tuyo para subirlo.';
    }
    if (porcentaje >= 85) return 'Muy bien. Tienes claro dónde está la línea.';
    if (porcentaje >= 60) return 'Vas bien, pero repasa los fallos: alguno importa de verdad.';
    return 'Repasa el listado con calma. Esto no es una nota: es algo que te va a pasar de verdad.';
  }

  function pintarRevision() {
    const contenedor = T2.$('#res-revision');
    contenedor.innerHTML = '';

    estado.respuestas.forEach(function (respuesta) {
      const tarjeta = respuesta.tarjeta;
      const fila = T2.el('div', { class: 'rev-fila' });

      const icono = respuesta.tarjeta.debate ? '💬' : (respuesta.acierto ? '✅' : '❌');
      fila.appendChild(T2.el('div', { class: 'rev-icono', text: icono }));

      const cuerpo = T2.el('div');
      cuerpo.appendChild(T2.el('div', { class: 'rev-texto', text: tarjeta.texto }));

      const resultado = T2.el('div', { class: 'rev-resultado' });
      resultado.appendChild(T2.el('span', {
        class: 'badge-color ' + respuesta.elegido,
        text: 'Dijiste: ' + ZONAS[respuesta.elegido].titulo
      }));
      resultado.appendChild(T2.el('span', {
        class: 'badge-color ' + tarjeta.color,
        text: 'Es: ' + ZONAS[tarjeta.color].titulo
      }));
      cuerpo.appendChild(resultado);

      cuerpo.appendChild(T2.el('div', {
        class: 'rev-porque',
        html: '<strong>Por qué:</strong> ' + tarjeta.porque
      }));

      fila.appendChild(cuerpo);
      contenedor.appendChild(fila);
    });
  }

  function pintarDebate() {
    const contenedor = T2.$('#res-debate');
    contenedor.innerHTML = '';

    const debatibles = estado.respuestas.filter(function (r) { return r.tarjeta.debate; });
    if (debatibles.length === 0) {
      contenedor.appendChild(T2.el('p', { class: 'dim', text: 'No hay tarjetas de debate en esta partida.' }));
      return;
    }

    debatibles.forEach(function (respuesta) {
      const bloque = T2.el('div', { class: 'notice warn' });
      bloque.innerHTML = '<strong>' + respuesta.tarjeta.texto + '</strong><br>' + respuesta.tarjeta.porque +
        '<br><span class="dim">Tú la pusiste en ' + ZONAS[respuesta.elegido].titulo +
        '. ¿Por qué? Prepárate para defenderlo.</span>';
      contenedor.appendChild(bloque);
    });
  }

  // ======================================================================
  // DESCARGA Y REINICIO
  // ======================================================================

  T2.$('#btn-descargar').addEventListener('click', function () {
    const puntuables = estado.respuestas.filter(function (r) { return !r.tarjeta.debate; });
    const aciertos = puntuables.filter(function (r) { return r.acierto; }).length;

    const lineas = [T2.cabeceraResumen('El semáforo de los datos', estado.nombre)];
    lineas.push('RESULTADO: ' + aciertos + ' aciertos de ' + puntuables.length + ' tarjetas puntuables');
    lineas.push('(las tarjetas de debate no cuentan como fallo)');
    lineas.push('', 'REPASO DE LAS 20');
    lineas.push('-'.repeat(60));

    estado.respuestas.forEach(function (respuesta, i) {
      const marca = respuesta.tarjeta.debate ? '[DEBATE]' : (respuesta.acierto ? '[OK]  ' : '[FALLO]');
      lineas.push(marca + ' ' + (i + 1) + '. ' + respuesta.tarjeta.texto);
      lineas.push('        Dijiste: ' + ZONAS[respuesta.elegido].titulo +
                  ' | Es: ' + ZONAS[respuesta.tarjeta.color].titulo);
      lineas.push('        ' + respuesta.tarjeta.porque);
    });

    lineas.push('', '='.repeat(60));
    lineas.push('PARA RESPONDER EN TU DOCUMENTO:');
    lineas.push('  1. ¿Cuántas acertaste a la primera?');
    lineas.push('  2. ¿En cuál te equivocaste más claramente? ¿Por qué creías otra cosa?');
    lineas.push('  3. Elige una tarjeta de DEBATE y explica los argumentos de los dos lados.');
    lineas.push('='.repeat(60));

    T2.descargarTexto(
      T2.aNombreFichero(estado.nombre) + '_semaforo_datos.txt',
      lineas.join('\n')
    );
  });

  T2.$('#btn-repetir').addEventListener('click', empezar);

})();
