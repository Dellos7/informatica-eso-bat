// ==========================================================================
// DATOS DE "EL SEMÁFORO DE LOS DATOS" — Actividad 5
// --------------------------------------------------------------------------
//   color:   'verde' | 'ambar' | 'rojo'
//   debate:  true si NO tiene una respuesta única. Estas tarjetas no restan
//            puntos: se marcan como "para debatir" y son las que interesan.
//   porque:  la explicación que se muestra al corregir.
// ==========================================================================

const TARJETAS_SEMAFORO = [

  // ---------------------------------------------------------------- VERDES
  {
    id: 1,
    texto: 'Una duda sobre las células que no entiendes',
    color: 'verde',
    porque: 'Es información general y no identifica a nadie. Preguntar dudas de clase es justo uno de los mejores usos de una IA.'
  },
  {
    id: 2,
    texto: 'Un texto que te has inventado tú para clase',
    color: 'verde',
    porque: 'Es tuyo y no contiene datos personales. Pedirle que te lo revise es un uso perfectamente razonable.'
  },
  {
    id: 3,
    texto: '«¿Cómo se hace una raíz cuadrada?»',
    color: 'verde',
    porque: 'Conocimiento público que está en cualquier libro. No hay nada que proteger.'
  },
  {
    id: 4,
    texto: 'Una idea para el guion de un vídeo',
    color: 'verde',
    porque: 'No identifica a nadie. Eso sí: la idea deja de ser solo tuya en el momento en que la escribes ahí.'
  },
  {
    id: 5,
    texto: 'El argumento de la película que viste ayer',
    color: 'verde',
    porque: 'Información pública que ya está en internet mil veces.'
  },

  // ---------------------------------------------------------------- ÁMBARES
  {
    id: 6,
    texto: 'Tu redacción de Lengua, para que te la corrija',
    color: 'ambar',
    debate: true,
    porque: 'Es tuya, pero las redacciones suelen llevar dentro nombres, lugares y cosas de tu vida. Reléela y quita lo que sobre ANTES de pegarla.'
  },
  {
    id: 7,
    texto: 'El borrador de un correo para un profesor',
    color: 'ambar',
    porque: 'Se puede, pero anonimizado: fuera el nombre del profesor, el del centro y cualquier detalle que identifique a alguien.'
  },
  {
    id: 8,
    texto: 'Tu horario de clases',
    color: 'ambar',
    debate: true,
    porque: 'Por sí solo dice poco. Pero junto a otros datos permite saber dónde estás a cada hora del día. Los datos sueltos son inofensivos; combinados, no.'
  },
  {
    id: 9,
    texto: '«Me siento mal últimamente, ¿qué hago?»',
    color: 'ambar',
    debate: true,
    porque: 'Hablar de emociones en general no es peligroso. Pero para esto están las personas: familia, amigos, tutoría, orientación. Una IA no te conoce, no se preocupa por ti y te dirá lo que suene bien.'
  },
  {
    id: 10,
    texto: 'Una foto de un paisaje que hiciste tú',
    color: 'ambar',
    debate: true,
    porque: 'La foto parece inocente, pero el archivo puede llevar dentro la ubicación exacta y la fecha en que la hiciste.'
  },

  // ------------------------------------------------------------------ ROJOS
  {
    id: 11,
    texto: 'Tu nombre y apellidos completos',
    color: 'rojo',
    porque: 'Te identifica directamente. No hace falta para nada: la IA responde igual de bien sin saber quién eres.'
  },
  {
    id: 12,
    texto: 'La dirección de tu casa',
    color: 'rojo',
    porque: 'Te localiza físicamente. Nunca hay una razón para dársela a un chat.'
  },
  {
    id: 13,
    texto: 'Tu número de teléfono',
    color: 'rojo',
    porque: 'Es una vía de contacto directo contigo y una pieza clave para suplantarte.'
  },
  {
    id: 14,
    texto: 'El DNI de tu madre o de tu padre',
    color: 'rojo',
    porque: 'Doble problema: es un dato de los graves Y no es tuyo. No te corresponde a ti decidir sobre él.'
  },
  {
    id: 15,
    texto: 'La contraseña del wifi de casa',
    color: 'rojo',
    porque: 'Es una credencial de seguridad. Las contraseñas no se escriben en ningún sitio que no sea donde toca.'
  },
  {
    id: 16,
    texto: 'Una captura de una conversación privada con un amigo',
    color: 'rojo',
    porque: 'Esa conversación NO ES TUYA: es de los dos. Tú no puedes decidir por la otra persona. Es la tarjeta que más gente coloca mal.'
  },
  {
    id: 17,
    texto: 'Una foto de tu hermana pequeña',
    color: 'rojo',
    porque: 'Es la imagen de una menor, y no eres tú quien decide sobre ella. Imagina que alguien subiera una foto tuya sin preguntarte.'
  },
  {
    id: 18,
    texto: 'El informe médico de un familiar',
    color: 'rojo',
    porque: 'Los datos de salud tienen la máxima protección de todas. Y además son de otra persona.'
  },
  {
    id: 19,
    texto: 'Las notas de un compañero de clase',
    color: 'rojo',
    porque: 'Dato de un tercero, y de los que pueden hacer daño. Ni siquiera deberías tenerlo tú.'
  },
  {
    id: 20,
    texto: 'Tu usuario y contraseña de Aules',
    color: 'rojo',
    porque: 'Jamás. Con eso alguien puede entrar en tu cuenta y hacerse pasar por ti ante el centro.'
  }
];

const ZONAS = {
  verde: { emoji: '🟢', titulo: 'VERDE',  lema: 'Puede salir sin problema' },
  ambar: { emoji: '🟡', titulo: 'ÁMBAR',  lema: 'Piénsatelo. Quizá sí, pero anonimizado' },
  rojo:  { emoji: '🔴', titulo: 'ROJO',   lema: 'No sale nunca' }
};
