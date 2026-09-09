/**
 * Control Dinámico de Visibilidad de Asignaturas, Temas y Actividades
 * Para: informatica-eso-bat (David López Castellote)
 */

(function () {
  'use strict';

  const CONFIG = {
    // URL de la Aplicación Web de Google Apps Script (generada tras publicar el script de Google Sheets)
    // Puedes pegar tu URL aquí directamente, o definirla en window.VISIBILITY_APPS_SCRIPT_URL
    APPS_SCRIPT_URL: window.VISIBILITY_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbzTeOVH_XfidipMrpSBxZp2mIBe9MCObXfzrApTeOQDMAv7FSifdFmW6yLcX7kF4roZ/exec',

    // Clave de almacenamiento en sessionStorage para evitar parpadeos visuales al navegar
    CACHE_KEY_DATA: 'inf_visibilidad_data'
  };

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
   * Restablece completamente el DOM a su estado original visible
   */
  function clearVisibilityStyles() {
    // 1. Quitar la clase de ocultación de todos los elementos
    document.querySelectorAll('.visibility-hidden').forEach(el => {
      el.classList.remove('visibility-hidden');
    });

    // 2. Eliminar el aviso de contenido restringido si existía
    const notice = document.querySelector('.visibility-restricted-notice');
    if (notice) {
      notice.remove();
    }

    // 3. Restaurar todos los elementos hijos del contenido principal
    const mainContent = document.querySelector('.page-content-main');
    if (mainContent) {
      Array.from(mainContent.children).forEach(child => {
        if (child.style.display === 'none') {
          child.style.display = '';
        }
      });
    }

    // 4. Restaurar el índice de contenidos lateral
    const tocAside = document.getElementById('page-toc');
    if (tocAside && tocAside.style.display === 'none') {
      tocAside.style.display = '';
    }
  }

  /**
   * Consulta las reglas de visibilidad desde Google Apps Script
   */
  async function fetchVisibilityRules() {
    const url = CONFIG.APPS_SCRIPT_URL;
    if (!url || url.indexOf('REEMPLAZAR_') !== -1) {
      console.info('[Visibilidad] APPS_SCRIPT_URL aún no configurada. Contenidos mostrados por defecto.');
      return null;
    }

    try {
      // Consulta en vivo a Google Apps Script con timestamp anticaché
      const bustCache = (url.indexOf('?') === -1 ? '?' : '&') + `_t=${Date.now()}`;
      const resp = await fetch(url + bustCache, { redirect: 'follow' });
      if (resp.ok) {
        const json = await resp.json();
        if (json && json.status === 'success') {
          // Soporte para interruptor maestro gestionado directamente desde Google Sheets
          if (json.enabled === false) {
            return { _master_enabled: false };
          }
          if (json.visibility) {
            sessionStorage.setItem(CONFIG.CACHE_KEY_DATA, JSON.stringify(json.visibility));
            return json.visibility;
          }
        }
      }
    } catch (e) {
      console.warn('[Visibilidad] No se pudieron descargar las reglas de Apps Script:', e);
    }

    return null;
  }

  /**
   * Aplica las reglas de visibilidad en el DOM
   */
  function applyRules(rules) {
    // 0. Siempre restablecer el DOM primero a su estado limpio.
    // Esto permite que elementos que antes estaban ocultos y ahora se han activado en Sheets vuelvan a mostrarse de inmediato.
    clearVisibilityStyles();

    if (!rules || typeof rules !== 'object') return;

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
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('http://') || href.startsWith('https://')) {
        // Enlaces externos o anclas no son rutas del sitio
        if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
          // A menos que sea enlace absoluto a nuestro propio dominio
          if (href.indexOf(window.location.host) === -1) return;
        } else {
          return;
        }
      }

      const linkPath = normalizePath(link.href);

      for (const hidden of hiddenEntries) {
        // Comprobar si el enlace apunta al elemento oculto respetando límites de palabras
        if (isPathMatch(linkPath, hidden)) {
          // Si está en el menú de navegación superior Cayman (etiqueta .btn en el header)
          if (link.classList.contains('btn') && link.closest('.page-header')) {
            link.classList.add('visibility-hidden');
            break;
          }

          // Si está en una lista de temas o actividades
          const li = link.closest('li');
          if (li) {
            li.classList.add('visibility-hidden');
            break;
          } else {
            link.classList.add('visibility-hidden');
            break;
          }
        }
      }
    });

    // 2. Soporte para temas tipo TRDR con encabezados de actividades en la misma página
    hiddenEntries.forEach(hidden => {
      const parts = hidden.split('/');
      const lastPart = parts[parts.length - 1]; // Ej: actividad1, actividad2...
      const actMatch = lastPart.match(/actividad(\d+)/i);
      if (actMatch) {
        const actNum = actMatch[1];
        // Buscar encabezados h3 o h4 que contengan "Actividad X"
        const headings = document.querySelectorAll('.page-content-main h3, .page-content-main h4');
        headings.forEach(heading => {
          const text = heading.textContent.toLowerCase();
          const regex = new RegExp(`actividad\\s*${actNum}(\\D|$)`, 'i');
          if (regex.test(text)) {
            // Ocultar este encabezado y los elementos hermanos hasta el siguiente encabezado
            heading.classList.add('visibility-hidden');
            let next = heading.nextElementSibling;
            while (next && !/^H[1-4]$/i.test(next.tagName)) {
              next.classList.add('visibility-hidden');
              next = next.nextElementSibling;
            }
          }
        });
      }
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
      tocAside.style.display = 'none';
    }

    // Si ya hay un aviso previo, no duplicarlo
    if (mainContent.querySelector('.visibility-restricted-notice')) return;

    // Crear bloque de aviso
    const notice = document.createElement('div');
    notice.className = 'visibility-restricted-notice';
    notice.innerHTML = `
      <span class="visibility-restricted-icon">🔒</span>
      <h2 class="visibility-restricted-title">Contenido no disponible</h2>
      <p class="visibility-restricted-message">
        Esta actividad o tema no se encuentra visible actualmente. Estará disponible cuando el profesor la active.
      </p>
      <a href="../" class="visibility-btn-back">⬅️ Volver atrás</a>
    `;

    // Reemplazar o superponer el contenido
    const children = Array.from(mainContent.children);
    children.forEach(child => {
      // Conservar las migas de pan y el pie si existen
      if (child.classList.contains('breadcrumbs') || child.classList.contains('site-footer')) {
        return;
      }
      child.style.display = 'none';
    });

    const breadcrumbs = mainContent.querySelector('.breadcrumbs');
    if (breadcrumbs && breadcrumbs.nextSibling) {
      mainContent.insertBefore(notice, breadcrumbs.nextSibling);
    } else {
      mainContent.insertBefore(notice, mainContent.firstChild);
    }
  }

  /**
   * Inicialización principal
   */
  async function init() {
    // 0. Si ya tenemos reglas en la pestaña actual, aplicarlas al instante (0 retraso visual al navegar)
    try {
      const cached = sessionStorage.getItem(CONFIG.CACHE_KEY_DATA);
      if (cached) {
        applyRules(JSON.parse(cached));
      }
    } catch (e) { }

    // Descargar reglas actualizadas de Google Apps Script (en vivo)
    const rules = await fetchVisibilityRules();

    if (rules) {
      // Si el interruptor maestro de Google Sheets está apagado (mostrar todo)
      if (rules._master_enabled === false) {
        clearVisibilityStyles();
        sessionStorage.removeItem(CONFIG.CACHE_KEY_DATA);
        return;
      }
      applyRules(rules);
    }
  }

  // Ejecución cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exponer CONFIG en window para pruebas o configuración dinámica desde consola
  window.INF_VISIBILITY_CONFIG = CONFIG;

})();
