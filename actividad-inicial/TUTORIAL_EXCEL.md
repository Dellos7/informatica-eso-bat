# 📊 Guía Paso a Paso: Recoger Respuestas con Google Sheets (Exportable a Excel)

Esta guía te explica cómo configurar la recogida automática de respuestas de la actividad inicial utilizando **Google Sheets y Apps Script**.

Es la opción **100% gratuita, sin límites de tiempo, sin licencias Premium y con 0 problemas de CORS**. Además, con un solo clic en *Archivo ➔ Descargar ➔ Microsoft Excel (.xlsx)* podrás tener tu archivo de Excel cuando quieras.

Se configura en **menos de 3 minutos**.

---

## 🛠️ PASO 1: Crear la Hoja de Cálculo

1. Entra en [sheets.google.com](https://sheets.google.com) o en tu Google Drive con tu cuenta.
2. Crea una **Hoja de cálculo en blanco** y nómbrala: `Evaluacion_Inicial_Respuestas`.
3. *(Opcional)* No hace falta que escribas los encabezados: **el script los creará y formateará automáticamente en la primera fila con la primera respuesta**.

---

## 💻 PASO 2: Pegar el Script Receptor

1. En el menú superior de tu hoja de cálculo, haz clic en:  
   **Extensiones ➔ Apps Script**.
2. Se abrirá una nueva pestaña con un editor de código. **Borra todo el contenido** que aparezca (`function myFunction() { ... }`).
3. **Pega exactamente el siguiente código**:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Si la hoja está vacía, crea automáticamente los encabezados
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp", "Curso", "Nombre", "Apellidos", "Email", "Alias", "Avatar",
        "Dispositivos_Casa", "SO_Casa", "Retos_Superados", "Pistas_Utilizadas",
        "Metas_Seleccionadas", "Estilo_Aprendizaje", "Aficiones_Dia_A_Dia",
        "Planes_Futuro", "Idea_Proyecto", "Detalle_Respuestas", "Captcha_Verificado"
      ]);
      // Formato negrita y fondo suave a la cabecera
      sheet.getRange(1, 1, 1, 18).setFontWeight("bold").setBackground("#e2e8f0");
    }

    // Parsear el JSON recibido desde la aplicación web
    var data = JSON.parse(e.postData.contents);

    // Añadir una nueva fila con la ficha del alumno
    sheet.appendRow([
      data.Timestamp || new Date().toLocaleString("es-ES"),
      data.Curso || "",
      data.Nombre || "",
      data.Apellidos || "",
      data.Email || "",
      data.Alias || "",
      data.Avatar || "",
      data.Dispositivos_Casa || "",
      data.SO_Casa || "",
      data.Retos_Superados || "",
      data.Pistas_Utilizadas !== undefined ? data.Pistas_Utilizadas : "",
      data.Metas_Seleccionadas || "",
      data.Estilo_Aprendizaje || "",
      data.Aficiones_Dia_A_Dia || "",
      data.Planes_Futuro || "",
      data.Idea_Proyecto || "",
      data.Detalle_Respuestas || "",
      data.Captcha_Verificado || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ "status": "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ENDPOINT GET: Devuelve estadísticas anónimas y agregadas del grupo para el Radar del Aula
function doGet(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var rows = sheet.getDataRange().getValues();

    if (rows.length <= 1) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        totalAlumnos: 0,
        retos: [0, 0, 0, 0, 0, 0, 0, 0],
        metas: {},
        estilos: {},
        dispositivos: {}
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var headers = rows[0];
    var cursoParam = (e && e.parameter && e.parameter.curso) ? e.parameter.curso.toLowerCase() : "";

    var colCurso = headers.indexOf("Curso");
    var colMetas = headers.indexOf("Metas_Seleccionadas");
    var colDisp = headers.indexOf("Dispositivos_Casa");
    var colEstilo = headers.indexOf("Estilo_Aprendizaje");
    var colDetalle = headers.indexOf("Detalle_Respuestas");

    var alumnosCurso = 0;
    var retosAciertos = [0, 0, 0, 0, 0, 0, 0, 0];
    var metasCount = {};
    var dispCount = {};
    var estiloCount = {};

    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      var cursoRow = (row[colCurso] || "").toString().toLowerCase();

      // Filtrar por la asignatura actual
      if (cursoParam && cursoRow.indexOf(cursoParam) === -1) {
        continue;
      }

      alumnosCurso++;

      // Retos acertados ([OK])
      var detalle = (colDetalle > -1 && row[colDetalle]) ? row[colDetalle].toString() : "";
      for (var r = 1; r <= 8; r++) {
        if (detalle.indexOf("R" + r + ": [OK]") > -1) {
          retosAciertos[r - 1]++;
        }
      }

      // Metas seleccionadas
      var metas = (row[colMetas] || "").toString().split(";");
      metas.forEach(function(m) {
        var clean = m.trim();
        if (clean) metasCount[clean] = (metasCount[clean] || 0) + 1;
      });

      // Dispositivos en casa
      var disps = (row[colDisp] || "").toString().split(";");
      disps.forEach(function(d) {
        var clean = d.trim();
        if (clean) dispCount[clean] = (dispCount[clean] || 0) + 1;
      });

      // Estilos de trabajo
      var estilos = (row[colEstilo] || "").toString().split(";");
      estilos.forEach(function(es) {
        var clean = es.trim();
        if (clean) estiloCount[clean] = (estiloCount[clean] || 0) + 1;
      });
    }

    var result = {
      status: "success",
      curso: cursoParam,
      totalAlumnos: alumnosCurso,
      retos: retosAciertos,
      metas: metasCount,
      estilos: estiloCount,
      dispositivos: dispCount
    };

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Pulsa en el icono de **Guardar** (disquete) o presiona `Ctrl + S`.

---

## 🚀 PASO 3: Publicar la Aplicación Web (Obtener la URL)

1. Arriba a la derecha del editor de Apps Script, haz clic en el botón azul **Implementar ➔ Nueva implementación**.
2. En la ventana que aparece, haz clic en el icono de engranaje (⚙️ junto a "Seleccionar tipo") y elige **Aplicación web**.
3. Rellena los campos tal cual:
   - **Descripción:** `Receptor Tech Passport`
   - **Ejecutar como:** `Yo (tu correo)`
   - **Quién tiene acceso:** **`Cualquier usuario`** *(¡Paso imprescindible para que la web pueda enviar datos sin pedir login a los alumnos!)*
4. Haz clic en el botón **Implementar**.
5. Google te pedirá permisos para acceder a la hoja:
   - Haz clic en **Autorizar acceso**.
   - Elige tu cuenta.
   - Si te sale el aviso *"Google no ha verificado esta aplicación"*, pulsa en **Configuración avanzada** (abajo en pequeño) y luego en **Ir a Proyecto sin título (no seguro)**.
   - Pulsa **Permitir**.
6. En la ventana final verás el campo **URL de la aplicación web** (una URL que termina en `/exec`).
7. **Copia esa URL**.

---

## 🔗 PASO 4: Pegar la URL en tu Código

Abre en tu proyecto el archivo:
[`actividad-inicial/js/config.js`](file:///c:/Users/dlopez/Github/informatica-eso-bat-docker/informatica-eso-bat/actividad-inicial/js/config.js)

Pega la URL dentro de las comillas:

```javascript
const APP_CONFIG = {
  // Pega aquí la URL de tu aplicación web de Google Apps Script:
  EXCEL_WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycbx.../exec',

  CENTRO_EDUCATIVO: 'Dpto. de Informática',
  CURSO_ACADEMICO: '2026-2027',
  DURACION_RECOMENDADA_MIN: 45
};
```

---

## 🧪 Comprobación Final

1. Abre tu actividad inicial en el navegador.
2. Haz una prueba completando la misión.
3. Al pulsar **"Completar Misión"**:
   - La web mostrará en verde: *"¡Acreditación y datos registrados correctamente!"*.
   - Si miras tu hoja de Google Sheets, **aparecerá al instante la fila con todos los datos**.
4. Cuando quieras tenerlo en Excel, solo tienes que ir a tu hoja de Google y pulsar:  
   **Archivo ➔ Descargar ➔ Microsoft Excel (.xlsx)**.
