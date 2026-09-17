// ==========================================================================
// DATOS DE "DETECTOR DE IA" — Actividad 1
// --------------------------------------------------------------------------
// CÓMO AÑADIR O CAMBIAR ÍTEMS (tarea del profesor):
//
//   tipo:     'texto' | 'imagen' | 'audio'
//   esIA:     true si lo ha generado una IA, false si es real
//   contenido: el texto, o la ruta del archivo dentro de 'media/'
//   pista:    QUÉ lo delata. Se muestra al final, al revisar las respuestas.
//   fuente:   opcional, para tu control (de dónde salió, con qué se generó)
//
// ⚠️ IMPORTANTE:
//   · Las imágenes de personas REALES deben proceder de bancos de imágenes
//     con licencia libre. NUNCA fotos de alumnado ni de personas del entorno.
//   · Los textos marcados como "humano" deberían ser de alumnado real de otro
//     grupo o de cursos anteriores, anonimizados. Los de ejemplo que hay aquí
//     son un relleno provisional: SUSTITÚYELOS.
//   · Los archivos van en la carpeta 'media/' junto a este index.html.
// ==========================================================================

const DATOS_DETECTOR = [

  // ------------------------------------------------------------------ TEXTOS
  {
    tipo: 'texto',
    esIA: true,
    contenido: 'La excursión al museo resultó ser una experiencia verdaderamente enriquecedora. ' +
      'Pudimos contemplar obras fascinantes, aprender sobre diferentes épocas históricas y compartir ' +
      'momentos inolvidables con nuestros compañeros. Sin duda, este tipo de actividades fomentan el ' +
      'aprendizaje significativo y fortalecen los lazos entre el alumnado.',
    pista: 'Tres adjetivos vacíos seguidos ("enriquecedora", "fascinantes", "inolvidables"), estructura de tres ' +
      'elementos, cero detalles concretos y vocabulario de informe ("aprendizaje significativo", "el alumnado"). ' +
      'Nadie de 14 años escribe así sobre una excursión.'
  },
  {
    tipo: 'texto',
    esIA: false,
    contenido: 'La excursión estuvo bien pero el autobús tardó un montón y llegamos con el museo medio cerrado. ' +
      'Vimos como tres salas corriendo. Lo mejor fue el bocadillo en el parque de al lado, aunque a Nacho se le ' +
      'cayó el suyo al suelo y se lo comió igual.',
    pista: 'Anécdota concreta e inútil (el bocadillo de Nacho), imperfecciones, y cuenta lo que salió MAL. ' +
      'Una IA tiende a redactar la versión oficial y positiva.'
  },
  {
    tipo: 'texto',
    esIA: true,
    contenido: 'El reciclaje es fundamental para preservar nuestro planeta. En primer lugar, reduce la cantidad ' +
      'de residuos en los vertederos. En segundo lugar, permite ahorrar recursos naturales valiosos. Por último, ' +
      'contribuye a disminuir la contaminación. Por todo ello, resulta esencial que cada uno de nosotros asuma ' +
      'su responsabilidad.',
    pista: 'Estructura perfecta de manual ("En primer lugar / En segundo lugar / Por último / Por todo ello"), ' +
      'ni un solo dato concreto y una conclusión moralizante. Es un molde, no un texto.'
  },
  {
    tipo: 'texto',
    esIA: false,
    contenido: 'Yo creo que lo del reciclaje está bien pero en mi casa tenemos un lío con los cubos porque el ' +
      'del plástico siempre se llena antes y acabamos metiendo cosas donde no van. En el instituto igual, el ' +
      'del papel tiene de todo menos papel.',
    pista: 'Opinión personal con contradicciones, un ejemplo doméstico específico y reconoce que lo hace mal. ' +
      'La IA rara vez se contradice o queda mal.'
  },

  // ----------------------------------------------------------------- IMÁGENES
  // ⚠️ Estos ítems necesitan que coloques los archivos en 'media/'.
  {
    tipo: 'imagen',
    esIA: true,
    contenido: 'media/cara_ia_01.jpg',
    pista: 'Mira el fondo justo detrás de la oreja: se deforma. Y los pendientes no son iguales entre sí.',
    fuente: 'PENDIENTE: generar y colocar en media/'
  },
  {
    tipo: 'imagen',
    esIA: false,
    contenido: 'media/cara_real_01.jpg',
    pista: 'Iluminación irregular, poros y asimetrías naturales. El fondo tiene objetos coherentes.',
    fuente: 'PENDIENTE: banco de imágenes con licencia libre'
  },
  {
    tipo: 'imagen',
    esIA: true,
    contenido: 'media/cara_ia_02.jpg',
    pista: 'La montura de las gafas se funde con la sien por un lado. Los dientes son demasiado regulares.',
    fuente: 'PENDIENTE: generar y colocar en media/'
  },
  {
    tipo: 'imagen',
    esIA: false,
    contenido: 'media/cara_real_02.jpg',
    pista: 'Detalles inconsistentes pero coherentes: un mechón fuera de sitio, la ropa con arrugas lógicas.',
    fuente: 'PENDIENTE: banco de imágenes con licencia libre'
  },
  {
    tipo: 'imagen',
    esIA: true,
    contenido: 'media/cara_ia_03.jpg',
    pista: 'El cuello y el hombro no encajan del todo. Fíjate también en el lóbulo de la oreja derecha.',
    fuente: 'PENDIENTE: generar y colocar en media/'
  },
  {
    tipo: 'imagen',
    esIA: true,
    contenido: 'media/escena_ia_01.jpg',
    pista: 'Cuenta los dedos. Y lee el cartel del fondo: las letras parecen letras pero no dicen nada.',
    fuente: 'PENDIENTE: generar y colocar en media/'
  },
  {
    tipo: 'imagen',
    esIA: false,
    contenido: 'media/escena_real_01.jpg',
    pista: 'El texto de los carteles se lee perfectamente y las sombras van todas en la misma dirección.',
    fuente: 'PENDIENTE: banco de imágenes con licencia libre'
  },
  {
    tipo: 'imagen',
    esIA: true,
    contenido: 'media/escena_ia_02.jpg',
    pista: 'Las sombras de los objetos caen hacia lados distintos: hay dos soles imposibles.',
    fuente: 'PENDIENTE: generar y colocar en media/'
  },
  {
    tipo: 'imagen',
    esIA: false,
    contenido: 'media/escena_real_02.jpg',
    pista: 'Imperfecciones aburridas: un reflejo molesto, un encuadre mejorable. La IA tiende a componer bien.',
    fuente: 'PENDIENTE: banco de imágenes con licencia libre'
  },

  // ------------------------------------------------------------------- AUDIOS
  {
    tipo: 'audio',
    esIA: true,
    contenido: 'media/voz_ia_01.mp3',
    pista: 'La respiración no está donde tocaría y la entonación de las preguntas es siempre idéntica.',
    fuente: 'PENDIENTE: generar y colocar en media/'
  },
  {
    tipo: 'audio',
    esIA: false,
    contenido: 'media/voz_real_01.mp3',
    pista: 'Hay titubeos, un "eh" y ruido de fondo. La voz cambia de ritmo sin motivo.',
    fuente: 'PENDIENTE: grabación propia con permiso, o banco de audio libre'
  }
];

// Pistas generales que se muestran en la pantalla de resultados.
const PISTAS_GENERALES = {
  imagen: [
    'Cuenta los dedos y mira las manos: siguen siendo el punto débil.',
    'Lee el texto de carteles, camisetas o pantallas: suele parecer letras sin serlo.',
    'Comprueba que las sombras vayan todas en la misma dirección.',
    'Mira orejas, pendientes y gafas: los pares suelen no coincidir.',
    'Busca el fondo justo detrás de la cabeza: se deforma con frecuencia.'
  ],
  texto: [
    'Demasiada estructura: "en primer lugar… en segundo lugar… por último".',
    'Adjetivos que no dicen nada: enriquecedor, fascinante, inolvidable.',
    'Listas de tres elementos, una y otra vez.',
    'Cero anécdotas concretas: nadie tropieza, nada sale mal.',
    'Ni una falta, ni una repetición, ni una frase torcida.'
  ],
  audio: [
    'Respiraciones que no están donde deberían, o que no están.',
    'Entonación demasiado regular, sin cambios de ritmo.',
    'Ausencia total de ruido de fondo, o un ruido demasiado limpio.'
  ]
};
