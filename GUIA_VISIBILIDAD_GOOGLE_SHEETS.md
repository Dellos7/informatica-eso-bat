# 📊 Guía: Control de Visibilidad de Contenidos desde Google Sheets

Esta guía explica cómo controlar qué asignaturas, temas y actividades se muestran u ocultan en la web del departamento de informática a través de una **hoja de cálculo de Google Sheets**, con sincronización en tiempo real e interruptor general sin dependencias externas.

---

## ⚡ En resumen: ¿Cómo funciona?

1. **Control 100% desde Google Sheets:**  
   Todo el control de la web se gestiona desde una única hoja de cálculo con casillas de verificación (checkboxes ☑️).  
   - **Fila 2 (Control General):** Desmarcar esta casilla desactiva todo el sistema al instante y hace visible el 100% de la web.
   - **Casilla de tema/actividad marcada (TRUE):** El elemento está **visible**.  
   - **Casilla de tema/actividad desmarcada (FALSE):** El elemento se **oculta visualmente** en los menús y listas (y si un alumno entra por enlace directo, se muestra un aviso de *Contenido no disponible*).  
   - **Elementos nuevos que no estén en la hoja:** **Se muestran siempre por defecto**.

2. **Sin cachés ni esperas:**  
   Al consultar directamente Google Apps Script en vivo, los cambios que realices en las casillas toman efecto de inmediato en las siguientes visitas de los alumnos.

---

## 🛠️ PASO 1: Crear la Hoja de Cálculo

1. Entra en [sheets.google.com](https://sheets.google.com) y crea una **Hoja de cálculo en blanco**.
2. Ponle de título, por ejemplo: `Control_Visibilidad_Informatica`.
3. Cambia el nombre de la pestaña inferior a: `Visibilidad`.
4. *(Opcional)* No necesitas escribir todas las filas a mano: el script del **Paso 2** cuenta con una función llamada `inicializarHoja()` que rellenará automáticamente las 61 asignaturas, temas y actividades actuales con sus casillas correspondientes.

---

## 💻 PASO 2: Pegar el Script en Apps Script

1. En el menú superior de tu hoja de cálculo, ve a:  
   **Extensiones ➔ Apps Script**.
2. Borra el código que haya por defecto (`function myFunction() { ... }`).
3. **Pega exactamente el siguiente código**:

```javascript
/**
 * Apps Script para controlar la visibilidad de contenidos en la web
 * Web: https://dlopezcastellote.dev/informatica-eso-bat/
 */

// ENDPOINT GET: Devuelve el estado de visibilidad de cada ruta
function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Visibilidad") || ss.getActiveSheet();
    var data = sheet.getDataRange().getValues();

    if (data.length <= 1) {
      return createResponse({ status: "success", enabled: true, visibility: {} }, e);
    }

    var visibility = {};
    var masterEnabled = true;

    // Empezamos en la fila 1 (la 0 son los encabezados)
    for (var i = 1; i < data.length; i++) {
      var row = data[i];
      var asig = (row[1] || "").toString().trim().toLowerCase();
      var tema = (row[2] || "").toString().trim().toLowerCase();
      var act  = (row[3] || "").toString().trim().toLowerCase();
      var rawVal = row[5]; // Columna F: Visible

      if (!asig) continue;

      // Determinar si está visible (soporta checkbox booleano, VERDADERO, SI, 1, etc.)
      var isVisible = (
        rawVal === true ||
        String(rawVal).toUpperCase() === "TRUE" ||
        String(rawVal).toUpperCase() === "VERDADERO" ||
        String(rawVal).toUpperCase() === "SI" ||
        String(rawVal).toUpperCase() === "SÍ" ||
        String(rawVal) === "1"
      );

      // Interruptor maestro directamente desde Google Sheets (actualización instantánea en 0 seg)
      if (asig === "_general_" || asig === "_master_" || asig === "control_general") {
        masterEnabled = isVisible;
        continue;
      }

      // Generar clave única según el nivel
      var key = "";
      if (act) {
        key = asig + "/" + tema + "/" + act;
      } else if (tema) {
        key = asig + "/" + tema;
      } else {
        key = asig;
      }

      visibility[key] = isVisible;
    }

    return createResponse({
      status: "success",
      enabled: masterEnabled,
      updatedAt: new Date().toISOString(),
      visibility: masterEnabled ? visibility : {}
    }, e);

  } catch (err) {
    return createResponse({
      status: "error",
      message: err.toString()
    }, e);
  }
}

// Genera respuesta JSON con soporte JSONP opcional
function createResponse(payload, e) {
  var json = JSON.stringify(payload);
  if (e && e.parameter && e.parameter.callback) {
    return ContentService.createTextOutput(e.parameter.callback + "(" + json + ");")
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * FUNCIÓN DE AUTO-INICIALIZACIÓN:
 * Ejecuta esta función una sola vez desde el editor para rellenar
 * automáticamente toda la hoja con las 61 asignaturas, temas y actividades actuales.
 */
function inicializarHoja() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("Visibilidad");
  if (!sheet) {
    sheet = ss.getActiveSheet();
    sheet.setName("Visibilidad");
  }

  sheet.clear();

  // 1. Encabezados
  var headers = [["Tipo", "Asignatura", "Tema", "Actividad", "Título / Descripción", "Visible"]];
  sheet.getRange(1, 1, 1, 6).setValues(headers);
  sheet.getRange(1, 1, 1, 6)
    .setFontWeight("bold")
    .setBackground("#159957")
    .setFontColor("#ffffff");
  sheet.setFrozenRows(1);

  // 2. Catálogo completo actual de la web
  var items = [
    // Interruptor General (Opcional: puedes desmarcarlo para mostrar TODO al instante sin ir a GitHub)
    ["Sistema", "_general_", "", "", "🔘 CONTROL GENERAL (Desmarca esta casilla para mostrar TODO en la web)", true],

    // 1º ESO - TRDR
    ["Asignatura", "trdr", "", "", "1º ESO - Taller de Relaciones Digitales Responsables", true],
    ["Tema", "trdr", "sistemas-operativos-y-aplicaciones", "", "Tema 1. Sistemas operativos y aplicaciones", true],
    ["Actividad", "trdr", "sistemas-operativos-y-aplicaciones", "actividad1", "Actividad 1. Ejercicios del Tema 1", true],
    ["Actividad", "trdr", "sistemas-operativos-y-aplicaciones", "actividad2", "Actividad 2. Avatar para Aules", true],
    ["Actividad", "trdr", "sistemas-operativos-y-aplicaciones", "actividad3", "Actividad 3. Personalización del escritorio y barra de tareas", true],
    ["Actividad", "trdr", "sistemas-operativos-y-aplicaciones", "actividad4", "Actividad 4. Cuestionario en Aules", true],
    ["Tema", "trdr", "organizacion-de-la-informacion", "", "Tema 2. Organización de la información", true],
    ["Actividad", "trdr", "organizacion-de-la-informacion", "actividad1", "Actividad 1. Organización de la información", true],

    // 2º ESO - PIARI
    ["Asignatura", "piari", "", "", "2º ESO - Programación, Inteligencia Artificial y Robótica I", true],
    ["Tema", "piari", "pensamiento-computacional", "", "Tema 1. Pensamiento Computacional", true],
    ["Actividad", "piari", "pensamiento-computacional", "actividad1", "Actividad 1. Conceptos básicos", true],
    ["Actividad", "piari", "pensamiento-computacional", "actividad2", "Actividad 2. Entrenando Ratones", true],
    ["Actividad", "piari", "pensamiento-computacional", "actividad3", "Actividad 3. Camino a casa", true],
    ["Actividad", "piari", "pensamiento-computacional", "actividad4", "Actividad 4. Entrenando hormigas. 3 primeros niveles de Laby", true],
    ["Actividad", "piari", "pensamiento-computacional", "actividad5", "Actividad 5. Compute IT", true],
    ["Actividad", "piari", "pensamiento-computacional", "actividad6", "Actividad 6. Laby avanzado y diseño de niveles", true],
    ["Actividad", "piari", "pensamiento-computacional", "actividad7", "Actividad 7. Code.org - Aventurero de Minecraft", true],
    ["Actividad", "piari", "pensamiento-computacional", "actividad8", "Actividad 8. Creando nuestro primer videojuego en Scratch", true],

    // 3º ESO - PIARI
    ["Asignatura", "piari_3eso", "", "", "3º ESO - Programación, Inteligencia Artificial y Robótica I (3º ESO)", true],
    ["Tema", "piari_3eso", "pensamiento-computacional", "", "Tema 1. Pensamiento Computacional", true],
    ["Actividad", "piari_3eso", "pensamiento-computacional", "actividad1", "Actividad 1. Conceptos básicos", true],
    ["Actividad", "piari_3eso", "pensamiento-computacional", "actividad2", "Actividad 2. Entrenando Ratones", true],
    ["Actividad", "piari_3eso", "pensamiento-computacional", "actividad3", "Actividad 3. Camino a casa", true],
    ["Actividad", "piari_3eso", "pensamiento-computacional", "actividad4", "Actividad 4. Entrenando hormigas. 3 primeros niveles de Laby", true],
    ["Actividad", "piari_3eso", "pensamiento-computacional", "actividad5", "Actividad 5. Compute IT", true],
    ["Actividad", "piari_3eso", "pensamiento-computacional", "actividad6", "Actividad 6. El mundo de Karel. Retos básicos", true],
    ["Actividad", "piari_3eso", "pensamiento-computacional", "actividad7", "Actividad 7. El mundo de Karel. Bucles y condicionales", true],
    ["Actividad", "piari_3eso", "pensamiento-computacional", "actividad8", "Actividad 8. Code.org - Aventurero de Minecraft", true],

    // 4º ESO - Digitalización
    ["Asignatura", "digitalizacion", "", "", "4º ESO - Digitalización", true],
    ["Tema", "digitalizacion", "sistemas-operativos", "", "Tema 1. Sistemas Operativos", true],
    ["Actividad", "digitalizacion", "sistemas-operativos", "actividad1", "Actividad 1. Explorando LliureX y el Sistema de Archivos", true],
    ["Actividad", "digitalizacion", "sistemas-operativos", "actividad2", "Actividad 2. Máquinas virtuales en VirtualBox", true],
    ["Actividad", "digitalizacion", "sistemas-operativos", "actividad3", "Actividad 3. Uso básico de la terminal en Linux (bash)", true],
    ["Actividad", "digitalizacion", "sistemas-operativos", "actividad4", "Actividad 4. Servidor SSH y SCP en Linux", true],
    ["Actividad", "digitalizacion", "sistemas-operativos", "actividad5", "Actividad 5. Scripts de automatización", true],
    ["Actividad", "digitalizacion", "sistemas-operativos", "actividad6", "Actividad 6. Scripts avanzados", true],
    ["Tema", "digitalizacion", "documentos-digitales", "", "Tema 2. Documentos digitales", true],
    ["Actividad", "digitalizacion", "documentos-digitales", "actividad1", "Actividad 1. Creación de documentos con LibreOffice Writer", true],
    ["Actividad", "digitalizacion", "documentos-digitales", "actividad2", "Actividad 2. Gestión de datos y presupuestos con LibreOffice Calc", true],
    ["Actividad", "digitalizacion", "documentos-digitales", "actividad3", "Actividad 3. Automatización de documentos con Combinación de Correspondencia", true],
    ["Tema", "digitalizacion", "html", "", "Tema 3. Creando webs con HTML", true],
    ["Actividad", "digitalizacion", "html", "actividad0", "Actividad 0. Primer documento HTML", true],
    ["Actividad", "digitalizacion", "html", "actividad1", "Actividad 1. Etiquetas básicas de texto", true],
    ["Actividad", "digitalizacion", "html", "actividad2", "Actividad 2. Enlaces e imágenes", true],
    ["Actividad", "digitalizacion", "html", "actividad3", "Actividad 3. Listas y tablas", true],
    ["Actividad", "digitalizacion", "html", "actividad4", "Actividad 4. Formulario y multimedia", true],

    // 1º Bachillerato - PSIR I
    ["Asignatura", "psiri", "", "", "1º BACH - Programación, Sistemas Informáticos y Redes I", true],
    ["Tema", "psiri", "sa1", "", "Tema 1. Programación básica en Python", true],
    ["Actividad", "psiri", "sa1", "1-operadores-aritmeticos", "Operadores Aritméticos", true],
    ["Actividad", "psiri", "sa1", "2-tipos-de-datos-basicos", "Tipos de datos básicos", true],
    ["Actividad", "psiri", "sa1", "3-variables", "Variables", true],
    ["Actividad", "psiri", "sa1", "4-funciones", "Funciones", true],
    ["Tema", "psiri", "sa2", "", "Tema 2. Sentencias condicionales y repetitivas en Python", true],
    ["Actividad", "psiri", "sa2", "1-sentencias-condicionales", "Sentencias condicionales", true],
    ["Actividad", "psiri", "sa2", "2-sentencias-iterativas", "Sentencias iterativas", true],

    // 2º Bachillerato - PSIR II
    ["Asignatura", "psirii", "", "", "2º BACH - Programación, Sistemas Informáticos y Redes II", true],
    ["Tema", "psirii", "servicios-web", "", "Tema 1. Servicios web", true],
    ["Actividad", "psirii", "servicios-web", "actividad1", "Actividad 1. Instalación de Mint, XAMPP y WordPress", true],
    ["Actividad", "psirii", "servicios-web", "actividad2", "Actividad 2. Despliegue en hosting remoto con InfinityFree", true],
    ["Tema", "psirii", "docker", "", "Tema 2. Contenerización con Docker", true],
    ["Actividad", "psirii", "docker", "actividad1", "Actividad 1. Orquestación multiservicio con Docker Compose", true]
  ];

  sheet.getRange(2, 1, items.length, 6).setValues(items);

  // 3. Crear Casillas de Verificación (Checkboxes) en la columna F
  var rule = SpreadsheetApp.newDataValidation().requireCheckbox().build();
  sheet.getRange(2, 6, items.length, 1).setDataValidation(rule);

  // 4. Ajustar ancho de columnas automáticamente
  for (var col = 1; col <= 6; col++) {
    sheet.autoResizeColumn(col);
  }

  SpreadsheetApp.getUi().alert("¡Hoja inicializada con éxito con los 61 elementos catalogados!");
}
```

4. Pulsa en el icono de **Guardar** (`Ctrl + S`).
5. En el desplegable de funciones de Apps Script, selecciona **`inicializarHoja`** y pulsa **Ejecutar**.
   - Te pedirá permisos para acceder a la hoja: haz clic en *Revisar permisos*, selecciona tu cuenta y acepta.
   - En unos segundos, tu hoja de Google Sheets tendrá todos los encabezados verdes, estilos y las 61 filas con sus casillas de verificación listas.

---

## 🚀 PASO 3: Publicar como Aplicación Web (Obtener la URL)

1. En la parte superior derecha de Apps Script, pulsa el botón azul:  
   **Implementar ➔ Nueva implementación**.
2. Haz clic en el icono del engranaje ⚙️ (junto a "Seleccionar tipo") y elige **Aplicación web**.
3. Configura los campos:
   - **Descripción:** `API Visibilidad Web`
   - **Ejecutar como:** `Yo (tu correo)`
   - **Quién tiene acceso:** **`Cualquier usuario`** *(Imprescindible para que los navegadores puedan consultar las reglas sin pedir login a los alumnos)*.
4. Pulsa **Implementar**.
5. Copia la **URL de la aplicación web** (la que termina en `/exec`).

> 💡 **Nota al hacer cambios futuros en el script:**  
> Si alguna vez modificas el código de Apps Script, para que tome efecto debes ir a **Implementar ➔ Gestionar implementaciones**, pulsar el lápiz (Editar), seleccionar versión: **"Nueva versión"** y pulsar **Implementar**. Si solo marcas o desmarcas casillas en la hoja de cálculo, **NO necesitas reimplementar**: los cambios en las celdas se reflejan al instante.

---

## 🔗 PASO 4: Conectar la URL en el Proyecto

Abre el archivo:
[`assets/js/visibility.js`](file:///home/davcas01/Github/inf-eso-bat-docker/informatica-eso-bat/assets/js/visibility.js)

En la línea 17 encontrarás:
```javascript
APPS_SCRIPT_URL: window.VISIBILITY_APPS_SCRIPT_URL || 'REEMPLAZAR_CON_TU_APPS_SCRIPT_URL',
```

Sustituye `'REEMPLAZAR_CON_TU_APPS_SCRIPT_URL'` por tu URL generada:
```javascript
APPS_SCRIPT_URL: window.VISIBILITY_APPS_SCRIPT_URL || 'https://script.google.com/macros/s/AKfycbx.../exec',
```

¡Y listo!

## ➕ Cómo Añadir y Gestionar la Visibilidad de Nuevos Contenidos

Si con el tiempo creas nuevas asignaturas, nuevos temas o nuevas actividades, el procedimiento es muy rápido y no requiere modificar código de programación:

### 1. Regla de oro (Visibilidad por defecto)
> 💡 **Si quieres que el nuevo contenido esté visible:**  
> **No necesitas hacer nada en Google Sheets.**  
> El sistema está diseñado para que cualquier asignatura, tema o actividad que no esté registrada en la hoja de cálculo **se muestre siempre por defecto** en la web.

---

### 2. Si quieres poder ocultarlo o controlarlo desde Google Sheets
Simplemente añade una nueva fila al final de tu hoja `Visibilidad`:

| Columna | Significado | Ejemplo: Nueva actividad | Ejemplo: Nuevo tema | Ejemplo: Nueva asignatura |
| :--- | :--- | :--- | :--- | :--- |
| **A (Tipo)** | Nivel del elemento | `Actividad` | `Tema` | `Asignatura` |
| **B (Asignatura)** | Carpeta de la asignatura | `digitalizacion` | `digitalizacion` | `ia-robotica` |
| **C (Tema)** | Carpeta del tema | `documentos-digitales` | `redes-locales` | *(dejar en blanco)* |
| **D (Actividad)** | Carpeta de la actividad | `actividad4` | *(dejar en blanco)* | *(dejar en blanco)* |
| **E (Título)** | Nombre para reconocerlo tú | `Actividad 4. Presentaciones` | `Tema 4. Redes e Internet` | `Optativa de Robótica` |
| **F (Visible)** | Casilla de verificación | ☑️ | ☑️ | ☑️ |

> 📌 **Cómo poner la casilla:** Selecciona la celda de la columna F y ve al menú superior de Google Sheets: **Insertar ➔ Casilla de verificación**.

---

### 3. Estructura de carpetas requerida en la web
Para que el script reconozca automáticamente la ruta, mantén siempre la misma convención de nombres:
* **Asignaturas:** Dentro de `asignaturas/nombre-asignatura/`
* **Temas:** Dentro de `asignaturas/nombre-asignatura/nombre-tema/`
* **Actividades:** Dentro de `asignaturas/nombre-asignatura/nombre-tema/actividadN/` con su archivo `index.md` dentro, y enlazadas en la lista del tema como:
  ```markdown
  - [Actividad N: Título de la actividad](./actividadN/)
  ```

---

### 4. Preguntas Frecuentes al añadir contenidos
* **¿Tengo que volver a "Implementar" Apps Script?**  
  **No.** Apps Script utiliza `getDataRange()`, lo que significa que detecta y lee automáticamente cualquier fila nueva que agregues a la hoja al instante.
* **¿Tengo que modificar `visibility.js`?**  
  **No.** El script de la web procesa las rutas de forma completamente dinámica a partir de lo que devuelve Google Sheets.

---

## 📋 Catálogo de Elementos (para consulta o copia manual)

| Tipo | Asignatura | Tema | Actividad | Título / Descripción |
| :--- | :--- | :--- | :--- | :--- |
| **Asignatura** | `trdr` | | | 1º ESO - Taller de Relaciones Digitales Responsables |
| **Tema** | `trdr` | `sistemas-operativos-y-aplicaciones` | | Tema 1. Sistemas operativos y aplicaciones |
| **Actividad** | `trdr` | `sistemas-operativos-y-aplicaciones` | `actividad1` | Actividad 1. Ejercicios del Tema 1 |
| **Actividad** | `trdr` | `sistemas-operativos-y-aplicaciones` | `actividad2` | Actividad 2. Avatar para Aules |
| **Actividad** | `trdr` | `sistemas-operativos-y-aplicaciones` | `actividad3` | Actividad 3. Personalización del escritorio y barra de tareas |
| **Actividad** | `trdr` | `sistemas-operativos-y-aplicaciones` | `actividad4` | Actividad 4. Cuestionario en Aules |
| **Tema** | `trdr` | `organizacion-de-la-informacion` | | Tema 2. Organización de la información |
| **Actividad** | `trdr` | `organizacion-de-la-informacion` | `actividad1` | Actividad 1. Organización de la información |
| **Asignatura** | `piari` | | | 2º ESO - Programación, Inteligencia Artificial y Robótica I |
| **Tema** | `piari` | `pensamiento-computacional` | | Tema 1. Pensamiento Computacional |
| **Actividad** | `piari` | `pensamiento-computacional` | `actividad1` | Actividad 1. Conceptos básicos |
| **Actividad** | `piari` | `pensamiento-computacional` | `actividad2` | Actividad 2. Entrenando Ratones |
| **Actividad** | `piari` | `pensamiento-computacional` | `actividad3` | Actividad 3. Camino a casa |
| **Actividad** | `piari` | `pensamiento-computacional` | `actividad4` | Actividad 4. Entrenando hormigas. 3 primeros niveles de Laby |
| **Actividad** | `piari` | `pensamiento-computacional` | `actividad5` | Actividad 5. Compute IT |
| **Actividad** | `piari` | `pensamiento-computacional` | `actividad6` | Actividad 6. Laby avanzado y diseño de niveles |
| **Actividad** | `piari` | `pensamiento-computacional` | `actividad7` | Actividad 7. Code.org - Aventurero de Minecraft |
| **Actividad** | `piari` | `pensamiento-computacional` | `actividad8` | Actividad 8. Creando nuestro primer videojuego en Scratch |
| **Asignatura** | `piari_3eso` | | | 3º ESO - Programación, Inteligencia Artificial y Robótica I (3º ESO) |
| **Tema** | `piari_3eso` | `pensamiento-computacional` | | Tema 1. Pensamiento Computacional |
| **Actividad** | `piari_3eso` | `pensamiento-computacional` | `actividad1` | Actividad 1. Conceptos básicos |
| **Actividad** | `piari_3eso` | `pensamiento-computacional` | `actividad2` | Actividad 2. Entrenando Ratones |
| **Actividad** | `piari_3eso` | `pensamiento-computacional` | `actividad3` | Actividad 3. Camino a casa |
| **Actividad** | `piari_3eso` | `pensamiento-computacional` | `actividad4` | Actividad 4. Entrenando hormigas. 3 primeros niveles de Laby |
| **Actividad** | `piari_3eso` | `pensamiento-computacional` | `actividad5` | Actividad 5. Compute IT |
| **Actividad** | `piari_3eso` | `pensamiento-computacional` | `actividad6` | Actividad 6. El mundo de Karel. Retos básicos |
| **Actividad** | `piari_3eso` | `pensamiento-computacional` | `actividad7` | Actividad 7. El mundo de Karel. Bucles y condicionales |
| **Actividad** | `piari_3eso` | `pensamiento-computacional` | `actividad8` | Actividad 8. Code.org - Aventurero de Minecraft |
| **Asignatura** | `digitalizacion` | | | 4º ESO - Digitalización |
| **Tema** | `digitalizacion` | `sistemas-operativos` | | Tema 1. Sistemas Operativos |
| **Actividad** | `digitalizacion` | `sistemas-operativos` | `actividad1` | Actividad 1. Explorando LliureX y el Sistema de Archivos |
| **Actividad** | `digitalizacion` | `sistemas-operativos` | `actividad2` | Actividad 2. Máquinas virtuales en VirtualBox |
| **Actividad** | `digitalizacion` | `sistemas-operativos` | `actividad3` | Actividad 3. Uso básico de la terminal en Linux (bash) |
| **Actividad** | `digitalizacion` | `sistemas-operativos` | `actividad4` | Actividad 4. Servidor SSH y SCP en Linux |
| **Actividad** | `digitalizacion` | `sistemas-operativos` | `actividad5` | Actividad 5. Scripts de automatización |
| **Actividad** | `digitalizacion` | `sistemas-operativos` | `actividad6` | Actividad 6. Scripts avanzados |
| **Tema** | `digitalizacion` | `documentos-digitales` | | Tema 2. Documentos digitales |
| **Actividad** | `digitalizacion` | `documentos-digitales` | `actividad1` | Actividad 1. Creación de documentos con LibreOffice Writer |
| **Actividad** | `digitalizacion` | `documentos-digitales` | `actividad2` | Actividad 2. Gestión de datos y presupuestos con LibreOffice Calc |
| **Actividad** | `digitalizacion` | `documentos-digitales` | `actividad3` | Actividad 3. Automatización de documentos con Combinación de Correspondencia |
| **Tema** | `digitalizacion` | `html` | | Tema 3. Creando webs con HTML |
| **Actividad** | `digitalizacion` | `html` | `actividad0` | Actividad 0. Primer documento HTML |
| **Actividad** | `digitalizacion` | `html` | `actividad1` | Actividad 1. Etiquetas básicas de texto |
| **Actividad** | `digitalizacion` | `html` | `actividad2` | Actividad 2. Enlaces e imágenes |
| **Actividad** | `digitalizacion` | `html` | `actividad3` | Actividad 3. Listas y tablas |
| **Actividad** | `digitalizacion` | `html` | `actividad4` | Actividad 4. Formulario y multimedia |
| **Asignatura** | `psiri` | | | 1º BACH - Programación, Sistemas Informáticos y Redes I |
| **Tema** | `psiri` | `sa1` | | Tema 1. Programación básica en Python |
| **Actividad** | `psiri` | `sa1` | `1-operadores-aritmeticos` | Operadores Aritméticos |
| **Actividad** | `psiri` | `sa1` | `2-tipos-de-datos-basicos` | Tipos de datos básicos |
| **Actividad** | `psiri` | `sa1` | `3-variables` | Variables |
| **Actividad** | `psiri` | `sa1` | `4-funciones` | Funciones |
| **Tema** | `psiri` | `sa2` | | Tema 2. Sentencias condicionales y repetitivas en Python |
| **Actividad** | `psiri` | `sa2` | `1-sentencias-condicionales` | Sentencias condicionales |
| **Actividad** | `psiri` | `sa2` | `2-sentencias-iterativas` | Sentencias iterativas |
| **Asignatura** | `psirii` | | | 2º BACH - Programación, Sistemas Informáticos y Redes II |
| **Tema** | `psirii` | `servicios-web` | | Tema 1. Servicios web |
| **Actividad** | `psirii` | `servicios-web` | `actividad1` | Actividad 1. Instalación de Mint, XAMPP y WordPress |
| **Actividad** | `psirii` | `servicios-web` | `actividad2` | Actividad 2. Despliegue en hosting remoto con InfinityFree |
| **Tema** | `psirii` | `docker` | | Tema 2. Contenerización con Docker |
| **Actividad** | `psirii` | `docker` | `actividad1` | Actividad 1. Orquestación multiservicio con Docker Compose |
