// ==========================================================================
// DATOS DE "LA RULETA DE PALABRAS"
// --------------------------------------------------------------------------
// El profesor puede editar libremente este fichero.
//
//  · frases[]  -> modo PROBABILIDAD. Cada frase tiene un inicio y una lista de
//                 continuaciones con su probabilidad. Las probabilidades de
//                 cada frase deberían sumar 100.
//  · cadena    -> modo CADENA. Imita el teclado predictivo: para cada palabra
//                 se define qué palabras pueden venir después, de más a menos
//                 probable. La primera de la lista es la "sugerencia" que la
//                 web ofrece al alumnado.
// ==========================================================================

const DATOS_RULETA = {

  frases: [
    {
      inicio: 'El perro salió corriendo por la',
      opciones: [
        { palabra: 'puerta',    prob: 50 },
        { palabra: 'calle',     prob: 17 },
        { palabra: 'ventana',   prob: 17 },
        { palabra: 'escalera',  prob: 8  },
        { palabra: 'chimenea',  prob: 8  }
      ]
    },
    {
      inicio: 'Ayer me dejé el móvil en',
      opciones: [
        { palabra: 'casa',        prob: 42 },
        { palabra: 'clase',       prob: 25 },
        { palabra: 'el autobús',  prob: 18 },
        { palabra: 'el vestuario', prob: 10 },
        { palabra: 'el congelador', prob: 5 }
      ]
    },
    {
      inicio: 'Para el examen de mañana tengo que',
      opciones: [
        { palabra: 'estudiar',   prob: 46 },
        { palabra: 'repasar',    prob: 24 },
        { palabra: 'dormir',     prob: 14 },
        { palabra: 'prepararme', prob: 11 },
        { palabra: 'rendirme',   prob: 5  }
      ]
    },
    {
      inicio: 'El profesor entró en clase y',
      opciones: [
        { palabra: 'dijo',       prob: 38 },
        { palabra: 'nos',        prob: 27 },
        { palabra: 'empezó',     prob: 19 },
        { palabra: 'se',         prob: 11 },
        { palabra: 'desapareció', prob: 5 }
      ]
    },
    {
      inicio: 'Lo mejor del verano es poder',
      opciones: [
        { palabra: 'dormir',   prob: 33 },
        { palabra: 'ir',       prob: 27 },
        { palabra: 'estar',    prob: 20 },
        { palabra: 'jugar',    prob: 15 },
        { palabra: 'hibernar', prob: 5  }
      ]
    },
    {
      inicio: 'Mi madre me llamó para decirme que',
      opciones: [
        { palabra: 'bajara',   prob: 30 },
        { palabra: 'no',       prob: 26 },
        { palabra: 'ya',       prob: 21 },
        { palabra: 'había',    prob: 17 },
        { palabra: 'volaba',   prob: 6  }
      ]
    },
    {
      inicio: 'El robot avanzó hasta que encontró una',
      opciones: [
        { palabra: 'pared',    prob: 44 },
        { palabra: 'puerta',   prob: 22 },
        { palabra: 'salida',   prob: 16 },
        { palabra: 'caja',     prob: 12 },
        { palabra: 'sardina',  prob: 6  }
      ]
    }
  ],

  // ------------------------------------------------------------------------
  // MODO CADENA
  // ------------------------------------------------------------------------
  cadena: {
    inicio: 'Hoy voy a',
    // La clave es la última palabra escrita. El primer elemento de cada lista
    // es la palabra que la web sugiere (la "más probable").
    siguientes: {
      'a':          ['intentar', 'hacer', 'ver', 'contarle', 'comer'],
      'intentar':   ['hacer', 'terminar', 'explicar', 'entender'],
      'hacer':      ['los', 'el', 'una', 'algo'],
      'los':        ['deberes', 'ejercicios', 'planes', 'apuntes'],
      'deberes':    ['de', 'antes', 'otra', 'y'],
      'ejercicios': ['de', 'que', 'y'],
      'planes':     ['para', 'con', 'y'],
      'apuntes':    ['de', 'que', 'y'],
      'de':         ['mates', 'lengua', 'historia', 'inglés'],
      'mates':      ['en', 'con', 'porque', 'y'],
      'lengua':     ['en', 'porque', 'y'],
      'historia':   ['en', 'porque', 'y'],
      'inglés':     ['en', 'porque', 'y'],
      'en':         ['el', 'la', 'casa', 'clase'],
      'el':         ['recreo', 'autobús', 'salón', 'móvil'],
      'la':         ['biblioteca', 'cocina', 'clase', 'tarde'],
      'casa':       ['de', 'porque', 'y', 'antes'],
      'clase':      ['de', 'porque', 'y'],
      'recreo':     ['con', 'porque', 'y'],
      'autobús':    ['con', 'porque', 'y'],
      'salón':      ['con', 'porque', 'y'],
      'móvil':      ['porque', 'y', 'que'],
      'biblioteca': ['con', 'porque', 'y'],
      'cocina':     ['con', 'porque', 'y'],
      'tarde':      ['con', 'porque', 'y'],
      'con':        ['mi', 'el', 'un', 'los'],
      'mi':         ['hermano', 'amiga', 'perro', 'madre'],
      'hermano':    ['que', 'porque', 'y'],
      'amiga':      ['que', 'porque', 'y'],
      'perro':      ['que', 'porque', 'y'],
      'madre':      ['que', 'porque', 'y'],
      'un':         ['rato', 'amigo', 'poco'],
      'rato':       ['y', 'antes', 'porque'],
      'amigo':      ['que', 'porque', 'y'],
      'poco':       ['de', 'antes', 'y'],
      'que':        ['siempre', 'nunca', 'dice', 'me'],
      'siempre':    ['dice', 'llega', 'quiere', 'se'],
      'nunca':      ['dice', 'llega', 'quiere', 'se'],
      'dice':       ['que', 'lo', 'cosas'],
      'llega':      ['tarde', 'antes', 'y'],
      'quiere':     ['que', 'ir', 'hacer'],
      'se':         ['puso', 'fue', 'quedó'],
      'puso':       ['a', 'muy', 'de'],
      'fue':        ['a', 'muy', 'un'],
      'quedó':      ['a', 'muy', 'en'],
      'lo':         ['mismo', 'que', 'de'],
      'mismo':      ['de', 'que', 'y'],
      'cosas':      ['que', 'de', 'y'],
      'porque':     ['siempre', 'no', 'me', 'ya'],
      'no':         ['me', 'quiero', 'sé', 'puedo'],
      'sé':         ['que', 'si', 'muy'],
      'puedo':      ['ir', 'hacer', 'ver'],
      'quiero':     ['ir', 'hacer', 'ver'],
      'ir':         ['a', 'al', 'con'],
      'ver':        ['si', 'la', 'un'],
      'al':         ['cine', 'parque', 'final'],
      'cine':       ['con', 'y', 'porque'],
      'parque':     ['con', 'y', 'porque'],
      'final':      ['de', 'y', 'porque'],
      'si':         ['puedo', 'no', 'me'],
      'me':         ['voy', 'dijo', 'parece', 'da'],
      'voy':        ['a', 'al', 'para'],
      'dijo':       ['que', 'lo', 'muy'],
      'parece':     ['que', 'muy', 'bien'],
      'da':         ['igual', 'muy', 'que'],
      'igual':      ['que', 'y', 'porque'],
      'muy':        ['bien', 'tarde', 'raro'],
      'bien':       ['pero', 'y', 'porque'],
      'tarde':      ['pero', 'y', 'porque'],
      'raro':       ['pero', 'y', 'porque'],
      'pero':       ['luego', 'al', 'no'],
      'y':          ['luego', 'después', 'entonces'],
      'luego':      ['me', 'ya', 'vamos'],
      'después':    ['me', 'ya', 'vamos'],
      'entonces':   ['me', 'ya', 'vamos'],
      'ya':         ['veremos', 'está', 'no'],
      'veremos':    ['qué', 'si', 'luego'],
      'está':       ['muy', 'bien', 'en'],
      'vamos':      ['a', 'al', 'con'],
      'qué':        ['pasa', 'tal', 'hago'],
      'pasa':       ['y', 'porque', 'pero'],
      'tal':        ['y', 'porque', 'pero'],
      'hago':       ['y', 'porque', 'pero'],
      'algo':       ['de', 'que', 'y'],
      'antes':      ['de', 'que', 'y'],
      'otra':       ['vez', 'cosa'],
      'vez':        ['que', 'y', 'porque'],
      'cosa':       ['que', 'y', 'porque'],
      'para':       ['ver', 'hacer', 'que'],
      'contarle':   ['a', 'lo', 'que'],
      'comer':      ['con', 'en', 'algo'],
      'terminar':   ['los', 'el', 'de'],
      'explicar':   ['lo', 'que', 'los'],
      'entender':   ['lo', 'que', 'los'],
      'empezó':     ['a', 'el', 'la']
    },
    // Si una palabra no está en el mapa, se usan estas continuaciones.
    fallback: ['y', 'porque', 'que', 'pero']
  }
};
