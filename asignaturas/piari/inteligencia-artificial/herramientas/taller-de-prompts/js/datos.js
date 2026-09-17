// ==========================================================================
// DATOS DEL "TALLER DE PROMPTS" — Actividad 4
// --------------------------------------------------------------------------
// El profesor puede añadir o cambiar ejemplos libremente.
// ==========================================================================

const CAMPOS_ROCF = [
  {
    clave: 'rol',
    letra: 'R',
    nombre: 'Rol',
    pregunta: '¿Desde dónde quieres que escriba?',
    ayuda: 'Dile qué experiencia quieres que tenga quien te responde.',
    placeholder: 'Eres un profesor de Biología de 2º de ESO',
    ejemplos: [
      'Eres un profesor de Biología de 2º de ESO',
      'Eres un entrenador de atletismo para principiantes',
      'Eres un guionista de vídeos cortos para redes',
      'Eres un corrector de textos exigente pero claro'
    ]
  },
  {
    clave: 'objetivo',
    letra: 'O',
    nombre: 'Objetivo',
    pregunta: '¿Qué quieres exactamente?',
    ayuda: 'Empieza con un verbo claro. Di el producto concreto que esperas.',
    placeholder: 'Hazme 10 preguntas tipo test para repasar la célula animal',
    ejemplos: [
      'Hazme 10 preguntas tipo test para repasar',
      'Escríbeme tres versiones distintas del mismo texto',
      'Explícame esto otra vez, más sencillo',
      'Revisa mi texto y dime sus tres fallos más graves'
    ]
  },
  {
    clave: 'contexto',
    letra: 'C',
    nombre: 'Contexto',
    pregunta: '¿Qué necesita saber para acertar?',
    ayuda: 'Lo que tú sabes y la IA no puede saber. Aquí NO van datos personales.',
    placeholder: 'Solo hemos dado la membrana, el citoplasma y el núcleo',
    ejemplos: [
      'Solo hemos dado hasta el tema 4',
      'Es para gente que no sabe nada del tema',
      'Ya he probado esto y no me funcionó',
      'Tiene que durar menos de un minuto'
    ]
  },
  {
    clave: 'formato',
    letra: 'F',
    nombre: 'Formato',
    pregunta: '¿Con qué forma lo quieres?',
    ayuda: 'Extensión, estructura y tono. Todo lo que no digas, se lo inventará.',
    placeholder: 'Cada pregunta con 4 opciones y las soluciones al final. Lenguaje sencillo.',
    ejemplos: [
      'En una lista de puntos, máximo 150 palabras',
      'Con 4 opciones por pregunta y soluciones al final',
      'Lenguaje sencillo, para 13 años, sin tecnicismos',
      'En una tabla de dos columnas'
    ]
  }
];

const CAMPO_NEGATIVO = {
  clave: 'evitar',
  pregunta: '¿Y qué NO quieres? (opcional, pero funciona muy bien)',
  ayuda: 'Decirle lo que debe evitar mejora muchísimo el resultado.',
  placeholder: 'Sin emojis, sin introducción, y no te inventes datos que yo no te haya dado',
  ejemplos: [
    'Sin emojis',
    'Sin introducción ni conclusión, ve al grano',
    'No te inventes datos que yo no te haya dado',
    'No uses palabras que un chaval de 14 años no entienda'
  ]
};

// --------------------------------------------------------------------------
// Galería: el mismo encargo, mal pedido y bien pedido.
// --------------------------------------------------------------------------
const EJEMPLOS_GALERIA = [
  {
    encargo: 'Repasar para un examen',
    pobre: 'hazme preguntas de la célula',
    bueno: 'Eres un profesor de Biología de 2º de ESO. Hazme 10 preguntas tipo test para repasar la célula ' +
           'animal. Solo hemos dado la membrana, el citoplasma y el núcleo: no incluyas orgánulos que no estén ' +
           'en esa lista. Formato: cada pregunta con 4 opciones (a, b, c, d) y todas las soluciones juntas al ' +
           'final. Lenguaje sencillo, para 13 años.',
    problema: 'Sin rol, sin contexto y sin formato. Te dará 30 preguntas de nivel universitario, sobre cosas ' +
              'que no habéis dado y sin soluciones.'
  },
  {
    encargo: 'Escribir el texto de un cartel',
    pobre: 'escribe un cartel para la recogida de alimentos',
    bueno: 'Eres un diseñador de carteles para institutos. Escribe el texto de un cartel que anime al alumnado ' +
           'a traer comida para una recogida de alimentos. Es para chavales de 12 a 16 años y se colgará en los ' +
           'pasillos, así que tiene que leerse de lejos y en dos segundos. Formato: un titular de menos de 6 ' +
           'palabras, dos líneas de apoyo y una frase final. Dame tres versiones distintas. Sin emojis.',
    problema: 'No dice para quién es, ni dónde se cuelga, ni cuánto debe ocupar. Saldrá un texto largo y ' +
              'genérico que nadie va a leer.'
  },
  {
    encargo: 'Entender algo que no te ha quedado claro',
    pobre: 'explícame los bucles',
    bueno: 'Eres un profesor de programación paciente. Explícame qué es un bucle "mientras" como si nunca ' +
           'hubiera programado. Vengo de usar Karel, donde ya he hecho secuencias de instrucciones, pero no ' +
           'entiendo cuándo se para el bucle. Formato: primero una comparación con algo de la vida diaria, ' +
           'después un ejemplo de 4 líneas, y al final una pregunta para comprobar si lo he entendido.',
    problema: 'La IA no sabe qué sabes ya ni qué parte no entiendes. Te soltará una definición de manual que ' +
              'no te va a servir de nada.'
  },
  {
    encargo: 'Que te revise algo tuyo',
    pobre: '¿qué te parece mi redacción? [pega la redacción]',
    bueno: 'Eres un corrector exigente. Te paso una redacción de 2º de ESO sobre el reciclaje. Dime sus TRES ' +
           'fallos más graves, ordenados de peor a menos malo, y para cada uno una forma concreta de ' +
           'arreglarlo. No me digas nada bueno: solo quiero los fallos. No reescribas el texto, quiero ' +
           'hacerlo yo. [texto]',
    problema: 'Preguntar "¿qué te parece?" es pedirle que te adule, y lo hará: te dirá que está muy bien. ' +
              'Pídele fallos, no opinión.'
  },
  {
    encargo: 'Preparar una presentación',
    pobre: 'hazme una presentación sobre la IA',
    bueno: 'Eres un divulgador tecnológico. Hazme el guion de una presentación de 5 minutos sobre los riesgos ' +
           'de la inteligencia artificial, para alumnado de 1º de ESO que no ha dado el tema. Formato: 6 ' +
           'diapositivas; de cada una dime el título, tres ideas clave en forma de lista y una frase para ' +
           'decir en voz alta. Sin tecnicismos y sin introducción larga.',
    problema: 'Sin duración, sin público y sin estructura. Y ojo: la presentación la tendrás que entender ' +
              'y defender tú, así que pídela como guion, no como texto para leer.'
  }
];
