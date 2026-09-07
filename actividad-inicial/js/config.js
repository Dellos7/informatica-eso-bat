// ==========================================================================
// CONFIGURACIÓN DE LA ACTIVIDAD INICIAL - TECH PASSPORT
// ==========================================================================
// El docente puede configurar aquí la URL del Webhook de Power Automate
// conectado a la hoja de Microsoft Excel Online.
// Consulta TUTORIAL_EXCEL.md para ver cómo obtener esta URL en 5 minutos.
// ==========================================================================

const APP_CONFIG = {
  // Pega aquí la URL HTTP POST que te proporcione el flujo de Power Automate.
  // Si se deja vacía (''), la web simulará el guardado correctamente y permitirá
  // descargar el carnet para subirlo a Aules.
  EXCEL_WEBHOOK_URL: 'https://script.google.com/macros/s/AKfycby-u9Wkf4lFWSKYwqvNtVVVclz0sunGuXeRrfsxwTZkBxme0f-OXo0NLC3GAt-t6Wo2/exec',

  // Nombre de la institución o centro (opcional)
  CENTRO_EDUCATIVO: 'Dpto. de Informática',

  // Curso escolar
  CURSO_ACADEMICO: '2026-2027',

  // Tiempo límite orientativo por fase o reto (en minutos)
  DURACION_RECOMENDADA_MIN: 45
};
