/**
 * Control Dinámico de Visibilidad de Asignaturas, Temas y Actividades
 * Para: informatica-eso-bat (David López Castellote)
 */

(function () {
  'use strict';

  // ===========================================================================
  //  INTERRUPTOR GENERAL DEL SISTEMA
  //
  //  Ponlo a false para desactivar por completo el control de visibilidad:
  //  la web deja de consultar a Google Apps Script y muestra el 100% del
  //  contenido, como si este archivo no existiera.
  //
  //  Es la salida de emergencia si Apps Script da problemas de forma
  //  persistente. Al desactivarlo se borra además lo que el navegador tuviera
  //  guardado, para que no quede ningún resto ocultando contenido.
  // ===========================================================================
  const VISIBILIDAD_ACTIVADA = true;

  const CONFIG = {
    // URL de la Aplicación Web de Google Apps Script (generada tras publicar el script de Google Sheets)
    // Puedes pegar tu URL aquí directamente, o definirla en window.VISIBILITY_APPS_SCRIPT_URL
    APPS_SCRIPT_URL: window.VISIBILITY_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbwZ537mvmL3EqXSXzz_REwMccI_WtReSCzo_X7sWBZzukpeNap8fWLcOAL6hIuLa9y6/exec',

    // Clave de almacenamiento local para evitar parpadeos visuales al navegar
    CACHE_KEY_DATA: 'inf_visibilidad_data',

    // Marca de cuándo empezó la racha de fallos actual (se borra al primer acierto)
    CACHE_KEY_FAIL: 'inf_visibilidad_fallo_desde',

    // Cuánto tiempo sigue sirviendo la copia local para pintar la página al instante.
    // Es generoso a propósito: solo evita el parpadeo del primer segundo de carga, y
    // siempre queda sustituida por la respuesta en vivo un momento después.
    CACHE_MAX_AGE_MS: 6 * 60 * 60 * 1000,

    // FALLO HACIA MOSTRAR: tiempo SEGUIDO sin una sola respuesta correcta de Apps
    // Script tras el cual se deja de ocultar y se enseña el 100% de la web. El
    // contador arranca en el primer fallo de la racha y se pone a cero en cuanto
    // una consulta funciona, así que un error suelto no destapa nada.
    FAIL_OPEN_AFTER_MS: 5 * 60 * 1000,

    // Tiempo máximo de espera de la petición a Apps Script antes de abortarla.
    // Apps Script es lento e irregular: medido sobre este endpoint, lo habitual son
    // 1,5-3 s, pero se va a 9, 15 o 26 s sin previo aviso. Abortar antes de tiempo
    // era la causa principal de que un cambio de la hoja no llegara a aplicarse.
    FETCH_TIMEOUT_MS: 25000,

    // Reintentos adicionales, SOLO para errores HTTP (el 404 intermitente que
    // googleusercontent devuelve al entregar la respuesta). Ese fallo es de entrega y
    // el segundo intento suele funcionar. Un agotamiento del tiempo de espera NO se
    // reintenta nunca: significa que Apps Script está saturado y reintentar en ráfaga
    // multiplica la carga justo cuando peor está.
    FETCH_RETRIES_HTTP: 1,

    // Tiempo mínimo entre reconsultas al volver a la pestaña
    REVALIDATE_MIN_MS: 5000
  };

  // Clave antigua en sessionStorage (versiones previas de este script)
  const LEGACY_SESSION_KEY = 'inf_visibilidad_data';

  // Estado interno
  let lastAppliedSignature = null;  // Evita repintar el DOM si las reglas no han cambiado
  let lastFetchAt = 0;              // Marca temporal de la última consulta correcta
  let inFlight = null;              // Petición en curso (evita consultas simultáneas)

  /**
   * Normaliza una ruta eliminando dominio, barras iniciales/finales e index.html
   */
  function normalizePath(rawUrl) {
    if (!rawUrl) return '';
    try {
      // Si es URL relativa, crear objeto URL con base ficticia para extraer pathname
      const url = new URL(rawUrl, window.location.origin);
      let p = url.pathname.toLowerCase();
      // Eliminar prefijos habituales si existen
      p = p.replace(/\/index(\.html)?$/i, '');
      p = p.replace(/\.html$/i, '');
      p = p.replace(/^\/+|\/+$/g, ''); // Trim slashes
      return p;
    } catch (e) {
      return (rawUrl || '').toLowerCase().replace(/^\/+|\/+$/g, '');
    }
  }

  /**
   * Comprueba si targetPath coincide exactamente o es descendiente de hiddenPath
   * respetando los límites de los segmentos de ruta (evita falsos positivos como psiri vs psirii o piari vs piari_3eso).
   */
  function isPathMatch(targetPath, hiddenPath) {
    if (!targetPath || !hiddenPath) return false;
    const targetSegments = targetPath.toLowerCase().split('/').filter(Boolean);
    const hiddenSegments = hiddenPath.toLowerCase().split('/').filter(Boolean);
    if (hiddenSegments.length > targetSegments.length) return false;
    for (let i = 0; i <= targetSegments.length - hiddenSegments.length; i++) {
      let match = true;
      for (let j = 0; j < hiddenSegments.length; j++) {
        if (targetSegments[i + j] !== hiddenSegments[j]) {
          match = false;
          break;
        }
      }
      if (match) return true;
    }
    return false;
  }

  /**
   * Marca un elemento como oculto por este script.
   * El atributo data-* permite restaurar después SOLO lo que hemos tocado nosotros.
   */
  function hideElement(el) {
    el.classList.add('visibility-hidden');
    el.setAttribute('data-visibility-hidden', '');
  }

  /**
   * Oculta con estilo en línea (usado por el aviso de contenido restringido),
   * dejando constancia del valor anterior para poder revertirlo con exactitud.
   */
  function hideElementInline(el) {
    if (el.hasAttribute('data-visibility-inline-hidden')) return;
    el.setAttribute('data-visibility-inline-hidden', el.style.display || '');
    el.style.display = 'none';
  }

  /**
   * Restablece completamente el DOM a su estado original visible
   */
  function clearVisibilityStyles() {
    // 1. Quitar la clase de ocultación de todos los elementos
    document.querySelectorAll('.visibility-hidden').forEach(el => {
      el.classList.remove('visibility-hidden');
      el.removeAttribute('data-visibility-hidden');
    });

    // 2. Eliminar el aviso de contenido restringido si existía
    const notice = document.querySelector('.visibility-restricted-notice');
    if (notice) {
      notice.remove();
    }

    // 3. Restaurar únicamente los elementos que ocultamos con estilo en línea,
    //    devolviéndoles el valor de display que tenían originalmente.
    document.querySelectorAll('[data-visibility-inline-hidden]').forEach(el => {
      el.style.display = el.getAttribute('data-visibility-inline-hidden') || '';
      el.removeAttribute('data-visibility-inline-hidden');
    });
  }

  /**
   * Lee la copia local de las reglas, descartándola si es demasiado antigua.
   */
  function readCachedRules() {
    try {
      // Limpiar el formato antiguo (sessionStorage sin marca de tiempo)
      sessionStorage.removeItem(LEGACY_SESSION_KEY);

      const raw = localStorage.getItem(CONFIG.CACHE_KEY_DATA);
      if (!raw) return null;

      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== 'object' || !parsed.v) return null;
      if (Date.now() - (parsed.t || 0) > CONFIG.CACHE_MAX_AGE_MS) {
        localStorage.removeItem(CONFIG.CACHE_KEY_DATA);
        return null;
      }
      return parsed.v;
    } catch (e) {
      return null;
    }
  }

  function writeCachedRules(rules) {
    try {
      localStorage.setItem(CONFIG.CACHE_KEY_DATA, JSON.stringify({ t: Date.now(), v: rules }));
    } catch (e) { }
  }

  /**
   * Registra el comienzo de una racha de fallos y devuelve cuándo empezó.
   * Se guarda en localStorage porque cada carga de página es un contexto nuevo:
   * sin persistirlo, la racha se reiniciaría al navegar y nunca se cumpliría el plazo.
   */
  function markFailure() {
    const ahora = Date.now();
    try {
      const previo = parseInt(localStorage.getItem(CONFIG.CACHE_KEY_FAIL), 10);
      if (previo) return previo;
      localStorage.setItem(CONFIG.CACHE_KEY_FAIL, String(ahora));
    } catch (e) { }
    return ahora;
  }

  /** Una consulta correcta cierra la racha de fallos. */
  function clearFailureStreak() {
    try {
      localStorage.removeItem(CONFIG.CACHE_KEY_FAIL);
    } catch (e) { }
  }

  function clearCachedRules() {
    try {
      localStorage.removeItem(CONFIG.CACHE_KEY_DATA);
      sessionStorage.removeItem(LEGACY_SESSION_KEY);
    } catch (e) { }
  }

  /**
   * fetch con tiempo máximo de espera: si Apps Script tarda demasiado, abortamos
   * en lugar de dejar la página esperando indefinidamente.
   */
  async function fetchWithTimeout(url) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), CONFIG.FETCH_TIMEOUT_MS);
    try {
      return await fetch(url, {
        redirect: 'follow',
        cache: 'no-store',
        signal: controller.signal
      });
    } finally {
      clearTimeout(timer);
    }
  }

  /**
   * Consulta las reglas de visibilidad desde Google Apps Script.
   * Devuelve el objeto de reglas, o null si la consulta ha fallado.
   */
  async function fetchVisibilityRules() {
    const url = CONFIG.APPS_SCRIPT_URL;
    if (!url || url.indexOf('REEMPLAZAR_') !== -1) {
      console.info('[Visibilidad] APPS_SCRIPT_URL aún no configurada. Contenidos mostrados por defecto.');
      return null;
    }

    for (let intento = 0; intento <= CONFIG.FETCH_RETRIES_HTTP; intento++) {
      try {
        // Consulta en vivo a Google Apps Script con timestamp anticaché
        const bustCache = (url.indexOf('?') === -1 ? '?' : '&') + '_t=' + Date.now();
        const resp = await fetchWithTimeout(url + bustCache);

        if (resp.ok) {
          const json = await resp.json();
          if (json && json.status === 'success') {
            lastFetchAt = Date.now();

            // Soporte para interruptor maestro gestionado directamente desde Google Sheets
            if (json.enabled === false) {
              return { _master_enabled: false };
            }
            if (json.visibility) {
              writeCachedRules(json.visibility);
              return json.visibility;
            }
          }
          console.warn('[Visibilidad] Respuesta inesperada de Apps Script:', json && json.status);
        } else {
          console.warn('[Visibilidad] Apps Script respondió con HTTP', resp.status);
        }
      } catch (e) {
        if (e && e.name === 'AbortError') {
          // Saturación: reintentar aquí solo echaría más leña al fuego.
          console.warn('[Visibilidad] Tiempo de espera agotado (' + (CONFIG.FETCH_TIMEOUT_MS / 1000) + ' s). No se reintenta para no saturar Apps Script.');
          break;
        }
        console.warn('[Visibilidad] Intento ' + (intento + 1) + ' fallido:', e);
      }
    }

    console.warn('[Visibilidad] No se pudieron descargar las reglas de Apps Script.');
    return null;
  }

  /**
   * Aplica las reglas de visibilidad en el DOM
   */
  function applyRules(rules) {
    if (!rules || typeof rules !== 'object') return;

    // Si las reglas son idénticas a las ya aplicadas, no tocar el DOM.
    // Evita el parpadeo de aplicar primero la copia local y justo después la respuesta en vivo.
    const signature = JSON.stringify(rules);
    if (signature === lastAppliedSignature) return;
    lastAppliedSignature = signature;

    // 0. Siempre restablecer el DOM primero a su estado limpio.
    // Esto permite que elementos que antes estaban ocultos y ahora se han activado en Sheets vuelvan a mostrarse de inmediato.
    clearVisibilityStyles();

    // Si el interruptor global de visibilidad está apagado, no ocultar nada
    if (rules._master_enabled === false) return;

    // Obtener todas las claves con valor explícito false
    const hiddenEntries = [];
    Object.keys(rules).forEach(key => {
      if (key.startsWith('_')) return;
      if (rules[key] === false) {
        hiddenEntries.push(key.toLowerCase().replace(/^\/+|\/+$/g, ''));
      }
    });

    if (hiddenEntries.length === 0) return;

    const currentPath = normalizePath(window.location.pathname);

    // 1. Ocultar enlaces en el DOM (menú superior y listados de la página)
    const allLinks = document.querySelectorAll('a[href]');
    allLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#')) return;

      // Descartar esquemas que no son rutas del sitio
      const scheme = (href.split(':')[0] || '').toLowerCase();
      if (/^(mailto|tel|javascript|data|blob)$/.test(scheme)) return;

      // Descartar enlaces externos comparando el host ya resuelto, no el texto del href
      if (link.host && link.host !== window.location.host) return;

      const linkPath = normalizePath(link.href);

      for (const hidden of hiddenEntries) {
        // Comprobar si el enlace apunta al elemento oculto respetando límites de palabras
        if (isPathMatch(linkPath, hidden)) {
          // Si está en el menú de navegación superior Cayman (etiqueta .btn en el header)
          if (link.classList.contains('btn') && link.closest('.page-header')) {
            hideElement(link);
            break;
          }

          // Si está en una lista de temas o actividades
          const li = link.closest('li');
          hideElement(li || link);
          break;
        }
      }
    });

    // 2. Soporte para temas tipo TRDR con encabezados de actividades en la misma página.
    //    Solo se aplica si la página actual ES la del tema al que pertenece la actividad oculta;
    //    en otro caso ocultaríamos "Actividad 3" en asignaturas ajenas que comparten numeración.
    hiddenEntries.forEach(hidden => {
      const parts = hidden.split('/');
      const lastPart = parts[parts.length - 1]; // Ej: actividad1, actividad2...
      const actMatch = lastPart.match(/actividad(\d+)/i);
      if (!actMatch) return;

      const parentPath = parts.slice(0, -1).join('/');
      if (!parentPath || !isPathMatch(currentPath, parentPath)) return;

      const actNum = actMatch[1];
      // Buscar encabezados h3 o h4 que contengan "Actividad X"
      const headings = document.querySelectorAll('.page-content-main h3, .page-content-main h4');
      headings.forEach(heading => {
        const text = heading.textContent.toLowerCase();
        const regex = new RegExp('actividad\\s*' + actNum + '(\\D|$)', 'i');
        if (regex.test(text)) {
          // Ocultar este encabezado y los elementos hermanos hasta el siguiente encabezado
          hideElement(heading);
          let next = heading.nextElementSibling;
          while (next && !/^H[1-4]$/i.test(next.tagName)) {
            hideElement(next);
            next = next.nextElementSibling;
          }
        }
      });
    });

    // 3. Comprobar si el usuario se encuentra actualmente en una página que está oculta
    for (const hidden of hiddenEntries) {
      if (isPathMatch(currentPath, hidden)) {
        showRestrictedNotice();
        break;
      }
    }
  }

  /**
   * Muestra aviso de restricción si el alumno accede directamente a una URL oculta
   */
  function showRestrictedNotice() {
    const mainContent = document.querySelector('.page-content-main');
    if (!mainContent) return;

    // Ocultar TOC lateral
    const tocAside = document.getElementById('page-toc');
    if (tocAside) {
      hideElementInline(tocAside);
    }

    // Si ya hay un aviso previo, no duplicarlo
    if (mainContent.querySelector('.visibility-restricted-notice')) return;

    // Crear bloque de aviso
    const notice = document.createElement('div');
    notice.className = 'visibility-restricted-notice';
    notice.innerHTML = [
      '<span class="visibility-restricted-icon">🔒</span>',
      '<h2 class="visibility-restricted-title">Contenido no disponible</h2>',
      '<p class="visibility-restricted-message">',
      '  Esta actividad o tema no se encuentra visible actualmente. Estará disponible cuando el profesor la active.',
      '</p>',
      '<a href="../" class="visibility-btn-back">⬅️ Volver atrás</a>'
    ].join('\n');

    // Reemplazar o superponer el contenido
    const children = Array.from(mainContent.children);
    children.forEach(child => {
      // Conservar las migas de pan y el pie si existen
      if (child.classList.contains('breadcrumbs') || child.classList.contains('site-footer')) {
        return;
      }
      hideElementInline(child);
    });

    const breadcrumbs = mainContent.querySelector('.breadcrumbs');
    if (breadcrumbs && breadcrumbs.nextSibling) {
      mainContent.insertBefore(notice, breadcrumbs.nextSibling);
    } else {
      mainContent.insertBefore(notice, mainContent.firstChild);
    }
  }

  /**
   * Consulta Apps Script y aplica el resultado.
   * force = true ignora el intervalo mínimo entre reconsultas.
   */
  function refresh(force) {
    if (!VISIBILIDAD_ACTIVADA) return Promise.resolve();
    if (!force && Date.now() - lastFetchAt < CONFIG.REVALIDATE_MIN_MS) return Promise.resolve();

    // Si ya hay una consulta en curso, reutilizarla en lugar de lanzar otra
    if (inFlight) return inFlight;

    inFlight = (async () => {
      try {
        const rules = await fetchVisibilityRules();

        if (!rules) {
          // La consulta ha fallado. Un fallo suelto no cambia nada: se conserva lo
          // que hubiera aplicado para no destapar contenido por un error puntual.
          // Pero si la racha de fallos se prolonga, se deja de ocultar y se muestra
          // TODO: que Google falle nunca debe impedir al alumnado ver la web.
          const fallandoDesde = markFailure();
          const segundos = Math.round((Date.now() - fallandoDesde) / 1000);

          if (Date.now() - fallandoDesde > CONFIG.FAIL_OPEN_AFTER_MS) {
            console.warn('[Visibilidad] ' + segundos + ' s seguidos sin respuesta correcta: se muestra todo el contenido.');
            clearCachedRules();
            clearVisibilityStyles();
            lastAppliedSignature = null;
          } else {
            console.warn('[Visibilidad] Fallo puntual (' + segundos + ' s de racha). Se conserva el último estado conocido.');
          }
          return;
        }

        clearFailureStreak();

        // Si el interruptor maestro de Google Sheets está apagado (mostrar todo)
        if (rules._master_enabled === false) {
          clearCachedRules();
        }
        applyRules(rules);
      } finally {
        inFlight = null;
      }
    })();

    return inFlight;
  }

  /**
   * Inicialización principal
   */
  async function init() {
    // 0. Si ya tenemos reglas guardadas, aplicarlas al instante (0 retraso visual al navegar)
    const cached = readCachedRules();
    if (cached) applyRules(cached);

    // 1. Descargar reglas actualizadas de Google Apps Script (en vivo)
    await refresh(true);
  }

  /**
   * Revalidación: vuelve a consultar Apps Script cuando la página "reaparece".
   * Sin esto, una pestaña que se queda abierta o una vuelta con el botón Atrás
   * conservarían indefinidamente las reglas del momento en que se cargó la página.
   */
  function setupRevalidation() {
    // Vuelta con el botón Atrás/Adelante: el navegador restaura la página desde
    // la bfcache SIN volver a ejecutar los scripts, así que hay que forzar la consulta.
    window.addEventListener('pageshow', event => {
      if (event.persisted) refresh(true);
    });

    // Al volver a la pestaña tras cambiar las casillas en Google Sheets
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') refresh(false);
    });

    // Al recuperar la conexión tras un fallo de red
    window.addEventListener('online', () => refresh(true));
  }

  // Exponer CONFIG y utilidades en window para pruebas o configuración dinámica desde consola
  window.INF_VISIBILITY_CONFIG = CONFIG;
  window.INF_VISIBILITY = {
    CONFIG: CONFIG,
    enabled: VISIBILIDAD_ACTIVADA,
    refresh: () => refresh(true),
    clearCache: clearCachedRules
  };

  if (!VISIBILIDAD_ACTIVADA) {
    // Desactivado a mano: ni se consulta a Apps Script ni se oculta nada.
    // Se limpia lo guardado por el navegador para no dejar rastros que oculten.
    clearCachedRules();
    clearFailureStreak();
    console.info('[Visibilidad] Sistema desactivado en visibility.js (VISIBILIDAD_ACTIVADA = false). Se muestra todo el contenido.');
  } else {
    // Ejecución cuando el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }

    setupRevalidation();
  }

})();
