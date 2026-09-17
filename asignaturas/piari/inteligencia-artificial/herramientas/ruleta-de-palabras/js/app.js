// ==========================================================================
// LA RULETA DE PALABRAS — Actividad 3 del Tema 2
// ==========================================================================

(function () {
  'use strict';

  const PULSACIONES_CADENA = 15;

  const estado = {
    nombre: '',
    cadena: { palabras: [], pulsaciones: 0, frasesCompletadas: [] },
    prob: { indiceFrase: 0, temperatura: 0, historial: [] }
  };

  // ======================================================================
  // ARRANQUE
  // ======================================================================

  T2.iniciarConNombre(function (nombre) {
    estado.nombre = nombre;
    T2.$('#selector-modo').classList.remove('hidden');
    prepararSelector();
    reiniciarCadena();
    prepararProbabilidad();
  });

  function prepararSelector() {
    T2.$$('#selector-modo [data-modo]').forEach(function (boton) {
      boton.addEventListener('click', function () {
        mostrarModo(boton.dataset.modo);
      });
    });
  }

  function mostrarModo(modo) {
    T2.$('#modo-cadena').classList.toggle('hidden', modo !== 'cadena');
    T2.$('#modo-probabilidad').classList.toggle('hidden', modo !== 'probabilidad');
    T2.$$('#selector-modo [data-modo]').forEach(function (boton) {
      const activo = boton.dataset.modo === modo;
      boton.className = 'btn ' + (activo ? 'btn-primary' : 'btn-ghost');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ======================================================================
  // MODO CADENA
  // ======================================================================

  function reiniciarCadena() {
    estado.cadena.palabras = DATOS_RULETA.cadena.inicio.split(' ');
    estado.cadena.pulsaciones = 0;
    T2.$('#cadena-final').classList.add('hidden');
    T2.$('#cadena-sugerencia').classList.remove('hidden');
    pintarCadena(null);
  }

  /** Devuelve la palabra sugerida a partir de la última escrita. */
  function sugerenciaCadena() {
    const ultima = estado.cadena.palabras[estado.cadena.palabras.length - 1]
      .toLowerCase().replace(/[.,;:!?]/g, '');
    const opciones = DATOS_RULETA.cadena.siguientes[ultima] || DATOS_RULETA.cadena.fallback;
    return opciones[0];
  }

  function pintarCadena(palabraNueva) {
    const frase = T2.$('#cadena-frase');
    frase.innerHTML = '';

    estado.cadena.palabras.forEach(function (palabra, i) {
      const esNueva = palabraNueva !== null && i === estado.cadena.palabras.length - 1;
      frase.appendChild(T2.el('span', { class: esNueva ? 'new-word' : '', text: palabra }));
      frase.appendChild(document.createTextNode(' '));
    });

    const terminado = estado.cadena.pulsaciones >= PULSACIONES_CADENA;
    if (!terminado) frase.appendChild(T2.el('span', { class: 'cursor', html: '&nbsp;' }));

    T2.$('#cadena-contador').textContent = estado.cadena.pulsaciones + ' / ' + PULSACIONES_CADENA;
    T2.$('#cadena-progreso').style.width = (estado.cadena.pulsaciones / PULSACIONES_CADENA * 100) + '%';

    if (terminado) {
      T2.$('#cadena-sugerencia').classList.add('hidden');
      T2.$('#cadena-final').classList.remove('hidden');
      const texto = estado.cadena.palabras.join(' ');
      if (estado.cadena.frasesCompletadas.indexOf(texto) === -1) {
        estado.cadena.frasesCompletadas.push(texto);
      }
    } else {
      T2.$('#cadena-sugerencia').textContent = sugerenciaCadena() + '  ⏎';
    }
  }

  T2.$('#cadena-sugerencia').addEventListener('click', function () {
    if (estado.cadena.pulsaciones >= PULSACIONES_CADENA) return;
    estado.cadena.palabras.push(sugerenciaCadena());
    estado.cadena.pulsaciones++;
    pintarCadena(true);
  });

  T2.$('#cadena-otra').addEventListener('click', reiniciarCadena);

  T2.$('#cadena-copiar').addEventListener('click', function (ev) {
    T2.copiar(estado.cadena.palabras.join(' '), ev.currentTarget);
  });

  T2.$('#cadena-siguiente').addEventListener('click', function () {
    mostrarModo('probabilidad');
  });

  // ======================================================================
  // MODO PROBABILIDAD
  // ======================================================================

  function prepararProbabilidad() {
    estado.prob.indiceFrase = Math.floor(Math.random() * DATOS_RULETA.frases.length);
    pintarProbabilidad();
  }

  function fraseActual() {
    return DATOS_RULETA.frases[estado.prob.indiceFrase];
  }

  function textoTemperatura(temp) {
    if (temp <= 0.05) return 'Temperatura 0: elige SIEMPRE la más probable. Predecible, correcta y aburrida.';
    if (temp <= 0.45) return 'Temperatura baja: casi siempre la más probable, con alguna sorpresa.';
    if (temp <= 0.8)  return 'Temperatura media: reparte más. Empiezan a salir opciones raras.';
    return 'Temperatura alta: respeta las probabilidades reales. Más creativa… y más arriesgada.';
  }

  function pintarProbabilidad(indiceElegido) {
    const frase = fraseActual();
    const temp = estado.prob.temperatura;

    T2.$('#prob-frase').innerHTML = '';
    T2.$('#prob-frase').appendChild(document.createTextNode(frase.inicio + ' '));
    T2.$('#prob-frase').appendChild(T2.el('span', {
      class: indiceElegido === undefined ? 'cursor' : 'new-word',
      html: indiceElegido === undefined ? '&nbsp;' : frase.opciones[indiceElegido].palabra
    }));

    T2.$('#prob-temp-valor').textContent = temp.toFixed(1).replace('.', ',');
    T2.$('#prob-temp-texto').textContent = textoTemperatura(temp);

    const pesos = frase.opciones.map(function (o) { return o.prob; });
    const ajustados = T2.pesosConTemperatura(pesos, temp);

    const contenedor = T2.$('#prob-barras');
    contenedor.innerHTML = '';

    frase.opciones.forEach(function (opcion, i) {
      const fila = T2.el('div', { class: 'prob-row' });
      fila.appendChild(T2.el('span', { class: 'prob-word', text: opcion.palabra }));

      const pista = T2.el('div', { class: 'prob-track' });
      const relleno = T2.el('div', {
        class: 'prob-fill' + (i === indiceElegido ? ' picked' : '')
      });
      relleno.style.width = ajustados[i].toFixed(1) + '%';
      pista.appendChild(relleno);
      fila.appendChild(pista);

      fila.appendChild(T2.el('span', {
        class: 'prob-val', text: Math.round(ajustados[i]) + '%'
      }));
      contenedor.appendChild(fila);
    });
  }

  T2.$('#prob-temp').addEventListener('input', function (ev) {
    estado.prob.temperatura = parseInt(ev.target.value, 10) / 100;
    pintarProbabilidad();
  });

  function generarUna() {
    const frase = fraseActual();
    const pesos = frase.opciones.map(function (o) { return o.prob; });
    const elegido = T2.elegirConTemperatura(pesos, estado.prob.temperatura);

    pintarProbabilidad(elegido);

    estado.prob.historial.push({
      temp: estado.prob.temperatura,
      texto: frase.inicio + ' ' + frase.opciones[elegido].palabra
    });
    pintarHistorial();
  }

  function pintarHistorial() {
    const cuerpo = T2.$('#prob-historial');
    cuerpo.innerHTML = '';

    if (estado.prob.historial.length === 0) {
      cuerpo.appendChild(T2.el('tr', {
        html: '<td colspan="3" class="dim">Todavía no has generado nada.</td>'
      }));
      return;
    }

    estado.prob.historial.slice().reverse().forEach(function (fila, i) {
      const numero = estado.prob.historial.length - i;
      const tr = T2.el('tr');
      tr.appendChild(T2.el('td', { class: 'mono dim', text: String(numero) }));
      tr.appendChild(T2.el('td', { class: 'mono', text: fila.temp.toFixed(1).replace('.', ',') }));
      tr.appendChild(T2.el('td', { text: fila.texto }));
      cuerpo.appendChild(tr);
    });
  }

  T2.$('#prob-generar').addEventListener('click', generarUna);

  T2.$('#prob-generar3').addEventListener('click', function () {
    generarUna();
    setTimeout(generarUna, 450);
    setTimeout(generarUna, 900);
  });

  T2.$('#prob-otra').addEventListener('click', function () {
    let nuevo = estado.prob.indiceFrase;
    if (DATOS_RULETA.frases.length > 1) {
      while (nuevo === estado.prob.indiceFrase) {
        nuevo = Math.floor(Math.random() * DATOS_RULETA.frases.length);
      }
    }
    estado.prob.indiceFrase = nuevo;
    pintarProbabilidad();
  });

  T2.$('#btn-volver').addEventListener('click', function () { mostrarModo('cadena'); });

  // ======================================================================
  // RESUMEN DESCARGABLE
  // ======================================================================

  T2.$('#btn-descargar').addEventListener('click', function () {
    const lineas = [T2.cabeceraResumen('La ruleta de palabras', estado.nombre)];

    lineas.push('MODO CADENA — frases construidas aceptando siempre la sugerencia');
    lineas.push('-'.repeat(60));
    if (estado.cadena.frasesCompletadas.length === 0) {
      lineas.push('(no completó ninguna cadena)');
    } else {
      estado.cadena.frasesCompletadas.forEach(function (frase, i) {
        lineas.push((i + 1) + '. ' + frase);
      });
    }

    lineas.push('', 'MODO PROBABILIDAD — frases generadas');
    lineas.push('-'.repeat(60));
    if (estado.prob.historial.length === 0) {
      lineas.push('(no generó ninguna frase)');
    } else {
      estado.prob.historial.forEach(function (fila, i) {
        lineas.push((i + 1) + '. [temperatura ' + fila.temp.toFixed(1).replace('.', ',') + '] ' + fila.texto);
      });
    }

    lineas.push('', '='.repeat(60));
    lineas.push('PARA PENSAR Y RESPONDER EN TU DOCUMENTO:');
    lineas.push('  1. Tu frase del modo cadena, ¿tiene sentido gramatical? ¿Dice algo?');
    lineas.push('  2. Con temperatura 0, ¿te salió lo mismo las tres veces?');
    lineas.push('  3. Con temperatura 1, ¿salió siempre igual? ¿Alguna frase absurda?');
    lineas.push('  4. Una IA con temperatura alta, ¿es MÁS CREATIVA o ARRIESGA MÁS?');
    lineas.push('='.repeat(60));

    T2.descargarTexto(
      T2.aNombreFichero(estado.nombre) + '_ruleta_de_palabras.txt',
      lineas.join('\n')
    );
  });

})();
