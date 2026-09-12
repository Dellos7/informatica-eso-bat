/**
 * Plegado y desplegado de secciones
 * Para: informatica-eso-bat (David López Castellote)
 *
 * Añade una flecha delante de cada título h2..h6 del contenido principal.
 * Al pulsarla se oculta (o se vuelve a mostrar) todo lo que hay debajo de ese
 * título hasta el siguiente título del mismo nivel o superior. Los h1 quedan
 * fuera a propósito: son el título de la página, no una sección.
 *
 * Detalle importante de convivencia con visibility.js: aquí NUNCA se toca el
 * DOM (no se envuelve el contenido en contenedores) ni el atributo style de los
 * elementos. Solo se añade o se quita una clase propia. Así el recorrido por
 * hermanos que hace visibility.js para ocultar actividades sigue funcionando, y
 * un elemento oculto por el control de visibilidad no se destapa al desplegar.
 */

(function () {
  'use strict';

  // Clase que oculta el contenido plegado (definida en collapsible.css)
  const CLASE_OCULTO = 'seccion-plegada-oculta';

  // Elementos que jamás se pliegan porque no pertenecen a ninguna sección
  const SELECTOR_AJENOS = '.breadcrumbs, .site-footer, .visibility-restricted-notice, .seccion-acciones';

  let contenido = null;
  let botonTodo = null;

  /**
   * Nivel del título (1..6) o 0 si el elemento no es un encabezado.
   */
  function nivelDeTitulo(el) {
    const m = /^H([1-6])$/i.exec(el.tagName);
    return m ? parseInt(m[1], 10) : 0;
  }

  function esAjeno(el) {
    return el.matches(SELECTOR_AJENOS);
  }

  function estaPlegado(titulo) {
    return titulo.dataset.plegado === 'si';
  }

  /**
   * Inserta el botón-flecha al principio del título.
   *
   * El botón no lleva texto (el triángulo se dibuja con CSS) para que
   * `textContent` del título siga siendo exactamente el mismo de antes: de eso
   * dependen el índice lateral y las reglas de visibility.js.
   */
  function prepararTitulo(titulo) {
    if (titulo.querySelector(':scope > .seccion-toggle')) return;

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'seccion-toggle';
    boton.setAttribute('aria-expanded', 'true');
    boton.setAttribute('title', 'Plegar o desplegar esta sección');
    boton.setAttribute('aria-label', 'Plegar o desplegar la sección ' + titulo.textContent.trim());

    boton.addEventListener('click', function (ev) {
      ev.preventDefault();
      alternar(titulo);
    });

    titulo.classList.add('seccion-titulo');
    titulo.dataset.plegado = 'no';
    titulo.insertBefore(boton, titulo.firstChild);
  }

  /**
   * Recalcula desde cero qué se ve y qué no.
   *
   * Se recorren los hijos directos del contenido en orden, llevando la cuenta
   * del nivel del título plegado más cercano: mientras ese nivel esté activo se
   * oculta todo, y deja de estarlo en cuanto aparece un título de nivel igual o
   * superior (un h2 cierra la sección de un h2 anterior, y también la de sus h3).
   */
  function pintar() {
    let nivelOculto = null;

    Array.from(contenido.children).forEach(el => {
      if (esAjeno(el)) {
        nivelOculto = null; // Las migas de pan y el pie nunca se pliegan
        mostrar(el);
        return;
      }

      const nivel = nivelDeTitulo(el);

      if (nivel) {
        // Un título de nivel igual o superior cierra la sección plegada anterior
        if (nivelOculto !== null && nivel <= nivelOculto) nivelOculto = null;

        if (nivelOculto !== null) {
          ocultar(el); // Subtítulo dentro de una sección plegada
          return;
        }

        mostrar(el);
        if (nivel >= 2 && estaPlegado(el)) nivelOculto = nivel;
        return;
      }

      if (nivelOculto !== null) ocultar(el);
      else mostrar(el);
    });

    actualizarBotonTodo();
  }

  function ocultar(el) {
    el.classList.add(CLASE_OCULTO);
  }

  function mostrar(el) {
    el.classList.remove(CLASE_OCULTO);
  }

  function alternar(titulo) {
    const plegar = !estaPlegado(titulo);
    titulo.dataset.plegado = plegar ? 'si' : 'no';
    titulo.classList.toggle('seccion-plegada', plegar);

    const boton = titulo.querySelector(':scope > .seccion-toggle');
    if (boton) boton.setAttribute('aria-expanded', plegar ? 'false' : 'true');

    pintar();
  }

  function desplegar(titulo) {
    if (!estaPlegado(titulo)) return false;
    titulo.dataset.plegado = 'no';
    titulo.classList.remove('seccion-plegada');
    const boton = titulo.querySelector(':scope > .seccion-toggle');
    if (boton) boton.setAttribute('aria-expanded', 'true');
    return true;
  }

  function titulosDeLaPagina() {
    return Array.from(contenido.children).filter(
      el => !esAjeno(el) && nivelDeTitulo(el) >= 2
    );
  }

  /**
   * Crea el botón que pliega o despliega todas las secciones de la página.
   * Se coloca debajo de las migas de pan, alineado a la derecha.
   */
  function crearBotonTodo() {
    const barra = document.createElement('div');
    barra.className = 'seccion-acciones';

    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'seccion-todo';

    const flecha = document.createElement('span');
    flecha.className = 'seccion-todo-flecha';
    flecha.setAttribute('aria-hidden', 'true');

    const texto = document.createElement('span');
    texto.className = 'seccion-todo-texto';

    boton.appendChild(flecha);
    boton.appendChild(texto);
    boton.addEventListener('click', alternarTodo);
    barra.appendChild(boton);

    const migas = contenido.querySelector(':scope > .breadcrumbs');
    if (migas) migas.insertAdjacentElement('afterend', barra);
    else contenido.insertBefore(barra, contenido.firstChild);

    botonTodo = boton;
  }

  /**
   * Si queda alguna sección desplegada, las pliega todas; si ya estaban todas
   * plegadas, las abre. Así un solo botón sirve para las dos cosas.
   */
  function alternarTodo() {
    const titulos = titulosDeLaPagina();
    const plegar = !titulos.every(estaPlegado);

    titulos.forEach(titulo => {
      titulo.dataset.plegado = plegar ? 'si' : 'no';
      titulo.classList.toggle('seccion-plegada', plegar);
      const boton = titulo.querySelector(':scope > .seccion-toggle');
      if (boton) boton.setAttribute('aria-expanded', plegar ? 'false' : 'true');
    });

    pintar();

    // Al plegarlo todo, la página encoge de golpe: si el lector se quedaría por
    // encima del botón (mirando el pie), se le devuelve al principio del contenido.
    if (plegar && botonTodo.getBoundingClientRect().top < 0) saltarA(botonTodo);
  }

  /**
   * El rótulo siempre anuncia lo que va a pasar al pulsar.
   */
  function actualizarBotonTodo() {
    if (!botonTodo) return;

    const titulos = titulosDeLaPagina();
    const todoPlegado = titulos.length > 0 && titulos.every(estaPlegado);

    botonTodo.dataset.estado = todoPlegado ? 'plegado' : 'desplegado';
    botonTodo.querySelector('.seccion-todo-texto').textContent =
      todoPlegado ? 'Desplegar todo' : 'Plegar todo';
  }

  /**
   * Despliega las secciones que contienen a un elemento, para que los enlaces
   * del índice lateral o de otras páginas lleguen a su destino aunque el lector
   * hubiera plegado la sección de arriba.
   */
  function revelar(destino) {
    let nodo = destino;
    while (nodo && nodo.parentElement !== contenido) nodo = nodo.parentElement;
    if (!nodo) return false;

    // Las secciones que contienen al destino son los títulos anteriores cuyo
    // nivel va siendo cada vez más alto (h3 -> h2, por ejemplo).
    let nivelMinimo = nivelDeTitulo(nodo) || 7;
    let previo = nodo.previousElementSibling;
    let cambios = false;

    while (previo && nivelMinimo > 1) {
      const nivel = nivelDeTitulo(previo);
      if (nivel && nivel < nivelMinimo) {
        nivelMinimo = nivel;
        if (desplegar(previo)) cambios = true;
      }
      previo = previo.previousElementSibling;
    }

    if (cambios) pintar();
    return cambios;
  }

  function atenderAncla() {
    const hash = window.location.hash;
    if (!hash || hash.length < 2) return;

    let destino = null;
    try {
      destino = document.getElementById(decodeURIComponent(hash.slice(1)));
    } catch (e) {
      destino = document.getElementById(hash.slice(1));
    }
    if (!destino || !contenido.contains(destino)) return;

    // Si hubo que desplegar algo, el navegador ya no puede colocar la página
    // en su sitio (el destino estaba oculto cuando intentó saltar), así que
    // hacemos nosotros el desplazamiento.
    if (revelar(destino)) saltarA(destino);
  }

  /**
   * Lleva la página hasta el elemento indicado.
   *
   * Se hace a mano y sin animación en lugar de con scrollIntoView() porque la
   * hoja de estilos activa el desplazamiento suave para toda la página, y ese
   * desplazamiento animado no es fiable justo después de haber cambiado la
   * altura del documento al desplegar la sección.
   */
  function saltarA(destino) {
    const arriba = destino.getBoundingClientRect().top + window.scrollY - 12;
    try {
      window.scrollTo({ top: arriba, behavior: 'instant' });
    } catch (e) {
      window.scrollTo(0, arriba); // Navegadores antiguos sin la forma con objeto
    }
  }

  function init() {
    contenido = document.querySelector('.page-content-main');
    if (!contenido) return;

    const titulos = Array.from(contenido.children).filter(
      el => !esAjeno(el) && nivelDeTitulo(el) >= 2
    );
    if (!titulos.length) return;

    titulos.forEach(prepararTitulo);
    crearBotonTodo();
    pintar();

    window.addEventListener('hashchange', atenderAncla);
    atenderAncla();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
