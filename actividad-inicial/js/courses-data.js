// ==========================================================================
// BANCO DE CONTENIDOS Y RETOS DIAGNÓSTICOS POR ASIGNATURA - TECH PASSPORT
// ==========================================================================

const COURSES_DATA = {
  trdr: {
    id: 'trdr',
    queryTerm: 'trdr',
    code: '1º ESO',
    name: 'Taller de Relaciones Digitales Responsables',
    shortName: 'TRDR (1º ESO)',
    badgeName: 'Guardián Digital',
    tagline: 'Misión: Descubrir el cerebro de la máquina y proteger tu identidad en la red',
    description: 'En esta materia aprenderás a entender cómo funcionan los ordenadores por dentro, a manejar el sistema operativo LliureX y organizar tus archivos sin pérdidas, a crear contenidos multimedia y a desenvolverte en internet con seguridad, privacidad y sentido crítico.',
    themeColor: '#06d6a0',
    skillsToUnlock: [
      { id: 'so_master', label: 'Dominar LliureX y Windows sin perder ningún archivo', icon: '💻' },
      { id: 'avatar_privacy', label: 'Crear mi identidad digital y avatares protegiendo mi privacidad', icon: '🛡️' },
      { id: 'safe_browsing', label: 'Navegar como un detective reconociendo bulos y trampas online', icon: '🕵️' },
      { id: 'multimedia_creator', label: 'Diseñar pósteres, vídeos y presentaciones que sorprendan', icon: '🎨' },
      { id: 'healthy_tech', label: 'Organizar mi tiempo digital y convivir en positivo en la red', icon: '🌱' }
    ],
    captcha: {
      title: 'Verificación de Seguridad: Componentes Físicos',
      instruction: 'Selecciona exactamente los 3 elementos que forman parte del HARDWARE físico:',
      items: [
        { id: 'cap1', text: 'Teclado y Ratón', icon: '⌨️', correct: true },
        { id: 'cap2', text: 'Sistema Operativo LliureX', icon: '🐧', correct: false },
        { id: 'cap3', text: 'Pantalla / Monitor', icon: '🖥️', correct: true },
        { id: 'cap4', text: 'Navegador Web Firefox', icon: '🌐', correct: false },
        { id: 'cap5', text: 'Disco Duro / SSD', icon: '💾', correct: true },
        { id: 'cap6', text: 'Videojuego Minecraft', icon: '🎮', correct: false }
      ]
    },
    challenges: [
      {
        id: 'c1',
        type: 'choice',
        title: 'Reto 1: La Frontera Digital (Hardware vs Software)',
        context: 'En el taller de informática hay elementos con masa física tangible y otros que existen como código lógico en la memoria.',
        instruction: '¿Cuál de los siguientes elementos pertenece exclusivamente al SOFTWARE (la parte lógica e intangible del ordenador)?',
        options: [
          { id: 'opt1', text: 'El ratón óptico y el teclado USB', correct: false },
          { id: 'opt2', text: 'El Sistema Operativo (LliureX o Windows) y las aplicaciones', correct: true },
          { id: 'opt3', text: 'El monitor donde vemos proyectada la imagen', correct: false },
          { id: 'opt4', text: 'La memoria RAM y el disco de almacenamiento', correct: false }
        ],
        hint: 'Pregúntate: ¿cuál de estos componentes desaparecería si borraras la información lógica del equipo sin abrir la carcasa con un destornillador?'
      },
      {
        id: 'c2',
        type: 'choice',
        title: 'Reto 2: Reconocimiento de Sistemas Operativos',
        context: 'Cada ordenador necesita un programa principal que administre la memoria, los discos y permita abrir las aplicaciones del aula.',
        instruction: 'En los ordenadores del instituto utilizamos un sistema operativo libre adaptado especialmente para la Comunidad Valenciana. ¿Cómo se llama?',
        options: [
          { id: 'opt1', text: 'LliureX (distribución basada en Linux)', correct: true },
          { id: 'opt2', text: 'Android TV OS', correct: false },
          { id: 'opt3', text: 'Apple macOS Ventura', correct: false },
          { id: 'opt4', text: 'PlayStation Operating System', correct: false }
        ],
        hint: 'Es un proyecto público de la Generalitat Valenciana cuyo nombre hace referencia a la libertad del software de código abierto.'
      },
      {
        id: 'c3',
        type: 'choice',
        image: 'img/trdr_folders.jpg',
        title: 'Reto 3: El Árbol de Carpetas (Estructura de Archivos)',
        context: 'Observa la captura del gestor de archivos de LliureX con el árbol jerárquico de carpetas de tu usuario.',
        instruction: 'Si estás dentro de tu Carpeta Personal (Home) y quieres localizar tu trabajo escrito "trabajo.odt", ¿en qué subcarpeta cuelga según el diagrama?',
        options: [
          { id: 'opt1', text: 'En la carpeta "Documentos"', correct: true },
          { id: 'opt2', text: 'En la carpeta "Imágenes"', correct: false },
          { id: 'opt3', text: 'En la carpeta "Música"', correct: false },
          { id: 'opt4', text: 'En la sección "Red"', correct: false }
        ],
        hint: 'Sigue visualmente la rama vertical que sale de Carpeta personal y busca qué carpeta contiene el archivo con icono de documento de texto.'
      },
      {
        id: 'c4',
        type: 'choice',
        title: 'Reto 4: Escudo de Privacidad y Permisos',
        context: 'Descargas una aplicación de linterna para el móvil y, antes de encender la luz, te pide acceso completo a tu lista de contactos telefónicos y a tu micrófono.',
        instruction: 'Como usuario digital prudente y responsable, ¿cuál es la decisión más sensata?',
        options: [
          { id: 'opt1', text: 'Aceptar todo rápidamente; cuantas más cosas acepte, mejor funcionará la luz', correct: false },
          { id: 'opt2', text: 'Denegar esos permisos o desinstalar la app, porque una linterna no necesita espiar contactos ni audio para iluminar', correct: true },
          { id: 'opt3', text: 'Poner el número de teléfono de un familiar para que no rastreen el mío', correct: false },
          { id: 'opt4', text: 'Poner el móvil en modo avión cada vez que quiera encender la linterna', correct: false }
        ],
        hint: 'Analiza si existe una relación lógica directa entre la función técnica que ofrece la app y los datos privados a los que exige acceder.'
      },
      {
        id: 'c5',
        type: 'text',
        title: 'Reto 5: Diseñando una Contraseña Robusta',
        context: 'Millones de cuentas son hackeadas cada año por usar contraseñas como "123456", "teclado" o el nombre de una mascota.',
        instruction: 'Escribe un ejemplo de contraseña robusta e inventada (al menos 8 caracteres) que combine mayúsculas, minúsculas, números y algún símbolo especial, sin incluir tu nombre real ni datos obvios.',
        placeholder: '',
        hint: 'Las contraseñas resistentes suelen ser frases memorables donde sustituyes letras por números o añades puntuación intercalada.'
      },
      {
        id: 'c6',
        type: 'choice',
        title: 'Reto 6: Detective de Formatos y Extensiones',
        context: 'Tienes 4 archivos en tu memoria USB: `resumen.odt`, `musica.mp3`, `presentacion.pdf` y `foto.png`. Necesitas enviar el documento final al profesor asegurando que se lea idéntico en cualquier dispositivo sin descolocarse.',
        instruction: '¿Qué formato de archivo estándar universal fue diseñado específicamente para conservar siempre el diseño original de lectura e impresión?',
        options: [
          { id: 'opt1', text: 'presentacion.pdf', correct: true },
          { id: 'opt2', text: 'resumen.odt', correct: false },
          { id: 'opt3', text: 'musica.mp3', correct: false },
          { id: 'opt4', text: 'foto.png', correct: false }
        ],
        hint: 'Sus siglas en inglés significan "Portable Document Format" (formato de documento portable).'
      },
      {
        id: 'c7',
        type: 'text',
        title: 'Reto 7: La Huella Digital Permanente',
        context: 'Un usuario sube un vídeo privado a una red social o grupo de mensajería y decide borrarlo a los 2 minutos.',
        instruction: '¿Ha desaparecido esa información de forma 100% definitiva de internet? Explica brevemente por qué sí o por qué no.',
        placeholder: 'Escribe tu razonamiento sobre si la información puede haber quedado guardada o copiada...',
        hint: 'Piensa en qué pueden hacer otros usuarios en esos 2 minutos (capturas, descargas) y en las copias de seguridad automáticas de los servidores.'
      },
      {
        id: 'c8',
        type: 'choice',
        title: 'Reto 8: Netiqueta y Convivencia en la Red',
        context: 'En un foro del aula virtual, alguien escribe un mensaje completamente en LETRAS MAYÚSCULAS para resolver una duda.',
        instruction: 'En las convenciones mundiales de comunicación digital (Netiqueta), ¿qué significa escribir en mayúsculas sostenidas?',
        options: [
          { id: 'opt1', text: 'Equivale a estar gritando o hablando con agresividad', correct: true },
          { id: 'opt2', text: 'Significa que el ordenador tiene un virus informático', correct: false },
          { id: 'opt3', text: 'Indica que el mensaje es una tarea oficial de clase', correct: false },
          { id: 'opt4', text: 'Es la forma obligatoria de escribir para personas adultas', correct: false }
        ],
        hint: 'En texto plano no podemos escuchar el tono de voz, por lo que ciertos formatos visuales se interpretan como elevación del volumen vocal.'
      }
    ]
  },

  piari: {
    id: 'piari',
    queryTerm: 'piari',
    code: '2º ESO',
    name: 'Programación, Inteligencia Artificial y Robótica I',
    shortName: 'PIARI (2º ESO)',
    badgeName: 'Arquitecto Algorítmico',
    tagline: 'Misión: Desatar el pensamiento computacional, desafiar a la IA y dar vida a las máquinas',
    description: 'Explorarás el pensamiento computacional a través de retos de lógica, laberintos y desarrollo de videojuegos por bloques. Descubrirás qué es la Inteligencia Artificial y cómo aprende, y darás vida a robots reales programando sensores y motores con la placa Micro:bit y el robot Maqueen.',
    themeColor: '#3a86ff',
    skillsToUnlock: [
      { id: 'code_logic', label: 'Pensar como un programador: resolver laberintos y algoritmos complejos', icon: '🧩' },
      { id: 'ai_training', label: 'Entrenar modelos de IA y entender cómo aprenden las redes neuronales', icon: '🤖' },
      { id: 'robot_hardware', label: 'Programar el robot Maqueen y la placa Micro:bit con sensores reales', icon: '🏎️' },
      { id: 'game_dev', label: 'Crear mis propios videojuegos interactivos por bloques y físicas', icon: '🎮' },
      { id: 'ai_ethics', label: 'Descubrir los sesgos y trampas de la IA para usarla de forma crítica', icon: '⚖️' }
    ],
    captcha: {
      title: 'Verificación de Seguridad: Sensores y Entradas',
      instruction: 'Selecciona exactamente los 3 componentes que son SENSORES o DISPOSITIVOS DE ENTRADA en un robot:',
      items: [
        { id: 'cap1', text: 'Sensor de Ultrasonidos (distancia)', icon: '📡', correct: true },
        { id: 'cap2', text: 'Motor de las ruedas', icon: '🏎️', correct: false },
        { id: 'cap3', text: 'Cámara de Visión Artificial', icon: '📷', correct: true },
        { id: 'cap4', text: 'Zumbador acústico (altavoz)', icon: '🔊', correct: false },
        { id: 'cap5', text: 'Pulsador táctil (botón)', icon: '🔘', correct: true },
        { id: 'cap6', text: 'Faro LED de iluminación', icon: '💡', correct: false }
      ]
    },
    challenges: [
      {
        id: 'c1',
        type: 'choice',
        image: 'img/piari_grid_rover.jpg',
        title: 'Reto 1: La Misión del Vehículo Autónomo (Secuencia)',
        context: 'Observa la cuadrícula de coordenadas del rover. El robot está en (0,0) mirando hacia el ESTE (derecha). Hay una roca obstáculo en (1,0) con una cruz roja, y la meta está en (1,1).',
        instruction: '¿Cuál de las siguientes secuencias de órdenes llevará al robot hasta la meta sin chocar con la roca?',
        options: [
          { id: 'opt1', text: 'Girar Izquierda (mira al Norte) ➔ Avanzar a (0,1) ➔ Girar Derecha (mira al Este) ➔ Avanzar a (1,1)', correct: true },
          { id: 'opt2', text: 'Avanzar a (1,0) ➔ Girar Derecha ➔ Avanzar a (1,1)', correct: false },
          { id: 'opt3', text: 'Avanzar a (1,0) ➔ Girar Izquierda ➔ Avanzar', correct: false },
          { id: 'opt4', text: 'Girar Derecha ➔ Girar Derecha ➔ Avanzar', correct: false }
        ],
        hint: 'Fíjate hacia dónde mira el rover inicialmente: si avanza recto hacia el Este colisionará en (1,0). Necesita subir primero a la fila Y=1.'
      },
      {
        id: 'c2',
        type: 'choice',
        title: 'Reto 2: IA y Sesgos en los Datos de Entrenamiento',
        context: 'Entrenamos un modelo de Inteligencia Artificial para clasificar frutas mostrándole 2.000 fotografías de manzanas rojas y ninguna de manzanas verdes ni amarillas. Al mostrarle una manzana verde fresca, el sistema responde: "No es una fruta reconocida".',
        instruction: '¿A qué se debe principalmente este fallo en la Inteligencia Artificial?',
        options: [
          { id: 'opt1', text: 'A un sesgo en los datos de entrenamiento: la IA solo predice a partir de los ejemplos que vio y no sabe generalizar lo que nunca le enseñaron', correct: true },
          { id: 'opt2', text: 'A que la IA se ha cansado de procesar fotos y necesita desconectarse para recargar energía', correct: false },
          { id: 'opt3', text: 'A que las manzanas verdes son químicamente incompatibles con los circuitos del ordenador', correct: false },
          { id: 'opt4', text: 'A que la cámara web necesita limpiarse con agua destilada para reconocer colores fríos', correct: false }
        ],
        hint: 'Una IA no posee sentido común humano ni conocimiento del mundo real; su precisión depende por completo de la variedad y representatividad de los datos con los que fue entrenada.'
      },
      {
        id: 'c3',
        type: 'choice',
        title: 'Reto 3: ¿Mente Biológica o Algoritmo Matemático?',
        context: 'En películas y noticias a menudo se humaniza a los modelos de Inteligencia Artificial (como ChatGPT o generadores de imágenes), diciendo que "piensan" o "tienen intenciones".',
        instruction: '¿Cuál de las siguientes afirmaciones describe de forma realista y científica cómo funciona un modelo de IA moderno?',
        options: [
          { id: 'opt1', text: 'Calcula probabilidades estadísticas y patrones matemáticos a partir de millones de datos previos para predecir la respuesta', correct: true },
          { id: 'opt2', text: 'Siente alegría cuando acierta una respuesta y tristeza o enfado si el usuario le corrige', correct: false },
          { id: 'opt3', text: 'Posee consciencia propia y decide libremente qué días le apetece colaborar en clase', correct: false },
          { id: 'opt4', text: 'Tiene recuerdos emocionales de su infancia guardados en la memoria RAM', correct: false }
        ],
        hint: 'Detrás de la IA no hay emociones ni conciencia biológica, sino matrices numéricas, cálculos estadísticos y algoritmos de optimización.'
      },
      {
        id: 'c4',
        type: 'choice',
        title: 'Reto 4: Ética de la IA y Responsabilidad Humana',
        context: 'Un vehículo con conducción autónoma controlada por IA circula por la vía. De pronto, un obstáculo imprevisto cae a la carretera y el coche debe elegir en milésimas de segundo si frenar bruscamente o esquivarlo hacia un lateral.',
        instruction: '¿Quién debe haber establecido de antemano los principios éticos, de seguridad y las prioridades que guían la toma de decisiones del vehículo en situaciones críticas?',
        options: [
          { id: 'opt1', text: 'El equipo humano de ingenieros, comités éticos y legisladores mediante normativas y programación responsable', correct: true },
          { id: 'opt2', text: 'El propio coche autónomo, porque con los kilómetros desarrolla su propio criterio moral y conciencia', correct: false },
          { id: 'opt3', text: 'El motor eléctrico, según la temperatura que alcancen las baterías en ese segundo', correct: false },
          { id: 'opt4', text: 'El sensor de las ruedas, lanzando una moneda al aire de forma aleatoria', correct: false }
        ],
        hint: 'Las máquinas y los algoritmos no tienen moral ni son sujetos legales; la responsabilidad del diseño ético y de la seguridad recae siempre en las personas y organizaciones humanas.'
      },
      {
        id: 'c5',
        type: 'choice',
        image: 'img/piari_flowchart.jpg',
        title: 'Reto 5: Análisis del Diagrama de Flujo',
        context: 'Observa el diagrama de flujo que rige la toma de decisiones del robot en cada ciclo de su procesador.',
        instruction: 'Si el robot avanza y su sensor detecta de pronto un obstáculo a 12 cm de distancia, ¿qué acción ejecutará según el flujo del diagrama?',
        options: [
          { id: 'opt1', text: 'Girar 90° (rama SÍ)', correct: true },
          { id: 'opt2', text: 'Avanzar 10cm (rama NO)', correct: false },
          { id: 'opt3', text: 'Apagar el robot inmediatamente', correct: false },
          { id: 'opt4', text: 'Volver al bloque INICIO sin ejecutar nada', correct: false }
        ],
        hint: 'Evalúa la condición dentro del rombo: ¿es 12 menor que 20? Sigue la bifurcación correspondiente a esa comparación.'
      },
      {
        id: 'c6',
        type: 'choice',
        title: 'Reto 6: IA Generativa, Deepfakes y Desinformación',
        context: 'Recibes por redes sociales un vídeo donde una persona famosa o una autoridad política parece anunciar el cierre urgente de todos los colegios del país, pero notas un ligero parpadeo extraño en su boca y un tono de voz algo metálico.',
        instruction: 'Con las herramientas actuales de Inteligencia Artificial generativa, ¿cómo se denomina este contenido y cómo debes actuar?',
        options: [
          { id: 'opt1', text: 'Es un "Deepfake" (vídeo/audio sintético manipulado con IA); debo verificarlo en medios oficiales fiables antes de creerlo o compartirlo', correct: true },
          { id: 'opt2', text: 'Es un fallo de la pantalla del móvil; para corregirlo debo reenviarlo a todos mis grupos de mensajería', correct: false },
          { id: 'opt3', text: 'Si aparece en formato de vídeo es 100% real e imposible de falsificar, por lo que no hace falta comprobar nada', correct: false },
          { id: 'opt4', text: 'Es una función automática del sistema para comprimir vídeos de alta definición', correct: false }
        ],
        hint: 'Las redes neuronales permiten clonar rostros y timbres de voz con gran realismo. Ante contenidos sensacionalistas o alarmantes, la regla de oro es contrastar en fuentes de noticias verificadas.'
      },
      {
        id: 'c7',
        type: 'choice',
        title: 'Reto 7: Sensores vs Actuadores en la Placa',
        context: 'En los proyectos de robótica con Micro:bit diferenciamos componentes que capturan información del exterior y componentes que producen efectos.',
        instruction: '¿Cuál de los siguientes pares está formado por un SENSOR (entrada) y un ACTUADOR (salida) en ese orden exacto?',
        options: [
          { id: 'opt1', text: 'Sensor de luz ambiental (Entrada) y Zumbador de sonido (Salida)', correct: true },
          { id: 'opt2', text: 'Pantalla de LEDs (Entrada) y Botón pulsador A (Salida)', correct: false },
          { id: 'opt3', text: 'Servomotor de giro (Entrada) y Sensor de temperatura (Salida)', correct: false },
          { id: 'opt4', text: 'Pila de alimentación (Entrada) y Cable USB (Salida)', correct: false }
        ],
        hint: 'Los sensores recogen variables físicas (luz, calor, distancia) hacia el código; los actuadores transforman electricidad en movimiento, luz o sonido.'
      },
      {
        id: 'c8',
        type: 'text',
        title: 'Reto 8: Dilema Ético: Uso Responsable de la IA en la Escuela',
        context: 'Un estudiante tiene que elaborar una redacción para clase. En lugar de investigar y redactar, le pide a una IA generativa que escriba el trabajo completo, lo copia y lo entrega con su nombre sin citar la IA ni comprobar si los datos son ciertos.',
        instruction: 'Explica con tus propias palabras qué problemas éticos o de aprendizaje tiene esta acción. (Piensa en la honestidad sobre la autoría, los posibles datos inventados o "alucinaciones" de la IA, y en si el estudiante desarrolla realmente sus propias destrezas de pensamiento).',
        placeholder: 'Explica qué consecuencias éticas y de aprendizaje ves en entregar un trabajo hecho al 100% por IA sin revisar...',
        hint: 'Reflexiona sobre el valor del esfuerzo y la autoría propia, la fiabilidad de las respuestas que genera la máquina y qué habilidades pierdes si dejas que la IA piense siempre por ti.'
      }
    ]
  },

  digitalizacion: {
    id: 'digitalizacion',
    queryTerm: 'digitaliz',
    code: '4º ESO',
    name: 'Digitalización',
    shortName: 'Digitalización (4º ESO)',
    badgeName: 'Especialista en Sistemas',
    tagline: 'Misión: Dominar la administración de sistemas, virtualización, datos y seguridad informática',
    description: 'Aprenderás a administrar sistemas operativos mediante entornos virtuales en VirtualBox y comandos en la terminal Linux (Bash). Estudiarás los componentes de hardware para optimizar equipos, auditarás la seguridad de tus datos frente al cibercrimen y crearás tus propios videojuegos con GDevelop.',
    themeColor: '#ffb703',
    skillsToUnlock: [
      { id: 'vm_admin', label: 'Instalar y administrar sistemas operativos en VirtualBox sin miedo', icon: '📦' },
      { id: 'terminal_bash', label: 'Controlar el ordenador desde la consola de comandos de Linux', icon: '⌨️' },
      { id: 'hardware_tuning', label: 'Diagnosticar componentes y montar ordenadores optimizados', icon: '⚙️' },
      { id: 'cybersecurity', label: 'Auditoría de seguridad, contraseñas robustas y defensa contra malware', icon: '🛡️' },
      { id: 'game_dev_advanced', label: 'Diseñar y programar videojuegos 2D con el motor GDevelop', icon: '🕹️' }
    ],
    captcha: {
      title: 'Verificación de Seguridad: Almacenamiento Persistente',
      instruction: 'Selecciona exactamente los 3 dispositivos de ALMACENAMIENTO SECUNDARIO PERMANENTE (no volátil):',
      items: [
        { id: 'cap1', text: 'Unidad de Estado Sólido SSD NVMe', icon: '⚡', correct: true },
        { id: 'cap2', text: 'Memoria RAM del sistema', icon: '🧠', correct: false },
        { id: 'cap3', text: 'Disco Duro Mecánico HDD', icon: '💾', correct: true },
        { id: 'cap4', text: 'Microprocesador CPU', icon: '🔲', correct: false },
        { id: 'cap5', text: 'Memoria USB Pendrive / Flash', icon: '🔌', correct: true },
        { id: 'cap6', text: 'Tarjeta Gráfica GPU', icon: '🖥️', correct: false }
      ]
    },
    challenges: [
      {
        id: 'c1',
        type: 'choice',
        image: 'img/digital_hardware.jpg',
        title: 'Reto 1: Diagnóstico de Placa Base y Ranuras de Expansión',
        context: 'Examina el plano esquemático de la placa base moderna con sus conexiones y zócalos de componentes.',
        instruction: 'Si necesitas pinchar una tarjeta gráfica dedicada de alta velocidad para renderizado 3D o videojuegos, ¿en qué ranura específica debes conectarla?',
        options: [
          { id: 'opt1', text: 'En la ranura PCIe 5.0 x16 Slot for GPU', correct: true },
          { id: 'opt2', text: 'En los zócalos RAM Slots (DDR4/DDR5)', correct: false },
          { id: 'opt3', text: 'En la ranura M.2 NVMe SSD Slot', correct: false },
          { id: 'opt4', text: 'En los puertos SATA III Ports', correct: false }
        ],
        hint: 'Localiza la ranura horizontal reforzada con pestillo de anclaje situada en la zona central-inferior, diseñada para soportar el mayor ancho de banda.'
      },
      {
        id: 'c2',
        type: 'choice',
        title: 'Reto 2: El Cuello de Botella del Almacenamiento',
        context: 'Un ordenador tiene un procesador Core i7 con 16 GB de RAM, pero tarda 5 minutos en arrancar el sistema operativo y las aplicaciones sufren constantes bloqueos con el disco al 100%.',
        instruction: '¿Cuál es la causa técnica más probable y su solución más rentable?',
        options: [
          { id: 'opt1', text: 'El sistema está en un disco mecánico tradicional (HDD); sustituirlo por un SSD multiplicará la tasa de lectura y eliminará la latencia', correct: true },
          { id: 'opt2', text: 'La tarjeta de sonido no tiene suficientes canales de audio estéreo', correct: false },
          { id: 'opt3', text: 'El cable HDMI del monitor está transmitiendo demasiados píxeles a la vez', correct: false },
          { id: 'opt4', text: 'La fuente de alimentación necesita ventiladores con luces RGB para enfriar los cables', correct: false }
        ],
        hint: 'Los discos mecánicos tienen cabezales físicos que deben desplazarse sobre platos giratorios; la memoria flash semiconductora accede a los datos en microsegundos.'
      },
      {
        id: 'c3',
        type: 'choice',
        title: 'Reto 3: El Escudo del Doble Factor (2FA / MFA)',
        context: 'Cada año se filtran en internet millones de contraseñas debido a brechas de seguridad en servicios web o ataques automáticos de fuerza bruta.',
        instruction: '¿Cómo protege a una cuenta activar la "Autenticación en Dos Pasos" (2FA / doble factor)?',
        options: [
          { id: 'opt1', text: 'Exige un segundo paso temporal que solo tú posees (como un código en tu móvil o app autenticadora), impidiendo el acceso aunque averigüen tu contraseña', correct: true },
          { id: 'opt2', text: 'Te obliga a escribir tu contraseña exactamente dos veces seguidas en la misma casilla', correct: false },
          { id: 'opt3', text: 'Cambia tu contraseña automáticamente por una palabra inventada al azar cada cinco minutos', correct: false },
          { id: 'opt4', text: 'Apaga la conexión Wi-Fi de tu casa automáticamente durante las noches', correct: false }
        ],
        hint: 'La seguridad multifactor combina algo que sabes (tu clave secreta) con algo que tienes físicamente (tu smartphone o llave de seguridad).'
      },
      {
        id: 'c4',
        type: 'choice',
        title: 'Reto 4: Salvaguarda de Datos (Copias de Seguridad)',
        context: 'Has dedicado dos semanas a redactar un informe digital decisivo para el curso. De pronto, tu equipo sufre una sobretensión eléctrica imprevista y el disco queda dañado sin arrancar.',
        instruction: '¿Cuál de las siguientes es la estrategia más sensata y eficaz para garantizar que nunca pierdas tu trabajo?',
        options: [
          { id: 'opt1', text: 'Mantener copias de seguridad periódicas en más de un soporte independiente (por ejemplo, en el disco local y sincronizado en la nube o en un dispositivo externo)', correct: true },
          { id: 'opt2', text: 'Dejar la ventana del documento minimizada en el escritorio para que la memoria no la olvide', correct: false },
          { id: 'opt3', text: 'Renombrar el archivo a "archivo_definitivo_imposible_de_perder.docx"', correct: false },
          { id: 'opt4', text: 'Guardarlo dentro de la Papelera de reciclaje porque ningún virus busca información allí', correct: false }
        ],
        hint: 'Cualquier dispositivo físico puede fallar en cualquier momento. La base de la seguridad de datos es la regla 3-2-1: contar siempre con duplicados en medios o ubicaciones distintas.'
      },
      {
        id: 'c5',
        type: 'choice',
        title: 'Reto 5: El Laboratorio Seguro (Máquinas Virtuales)',
        context: 'En la materia de Digitalización realizamos prácticas para instalar sistemas operativos como Linux y probar programas desconocidos sin poner en riesgo los ordenadores del instituto ni el de casa.',
        instruction: '¿Cuál es la gran ventaja técnica de utilizar un software de virtualización (como VirtualBox)?',
        options: [
          { id: 'opt1', text: 'Crea un entorno aislado (sandbox): cualquier fallo, virus de prueba o formateo ocurre dentro de un ordenador simulado por software y no daña tu sistema real', correct: true },
          { id: 'opt2', text: 'Reduce en un 95% el consumo de electricidad de la toma de corriente de la pared', correct: false },
          { id: 'opt3', text: 'Multiplica por diez los gigabytes de memoria RAM soldados físicamente en la placa', correct: false },
          { id: 'opt4', text: 'Permite que el monitor del ordenador proyecte imágenes holográficas en 3D en la habitación', correct: false }
        ],
        hint: 'Imagina una "caja de arena" donde puedes experimentar, borrar o romper cosas libremente sin que la arena salga jamás al resto del aula.'
      },
      {
        id: 'c6',
        type: 'choice',
        title: 'Reto 6: Radar de Phishing y Ciberdefensa',
        context: 'Recibes un SMS urgente: *"Tu paquete de Correos está retenido por 1,85€. Entra en http://correos-entrega-urgente.biz/pago antes de 2 horas o será devuelto"*.',
        instruction: '¿Qué señales inequívocas te alertan de que se trata de un ataque de phishing?',
        options: [
          { id: 'opt1', text: 'La urgencia impuesta ("2 horas"), el dominio ajeno (.biz en lugar de correos.es) y pedir tarjeta para un paquete imprevisto', correct: true },
          { id: 'opt2', text: 'El mensaje está muy bien redactado, por lo que es 100% seguro', correct: false },
          { id: 'opt3', text: 'Los SMS nunca pueden ser fraudulentos porque las compañías telefónicas los revisan uno a uno', correct: false },
          { id: 'opt4', text: 'Solo es un engaño si la cantidad solicitada supera los 100 euros', correct: false }
        ],
        hint: 'Los ciberdelincuentes juegan con las prisas psicológicas y usan dominios con terminaciones extrañas que imitan a organismos oficiales.'
      },
      {
        id: 'c7',
        type: 'choice',
        title: 'Reto 7: El Sistema de Archivos (Rutas y Carpetas)',
        context: 'En cualquier sistema operativo, los archivos no se guardan de forma desordenada en el disco, sino organizados en una estructura jerárquica de carpetas y subcarpetas. Para localizar un documento sin confusiones, el sistema utiliza una **ruta de acceso** (por ejemplo: `Documentos / Digitalizacion / Tareas / trabajo.pdf`).',
        instruction: '¿Qué indica la ruta de acceso de un archivo en el sistema de ficheros?',
        options: [
          { id: 'opt1', text: 'El camino o dirección exacta de carpetas que debes seguir para localizar ese archivo en el almacenamiento', correct: true },
          { id: 'opt2', text: 'La velocidad de la conexión Wi-Fi en el momento de crear el archivo', correct: false },
          { id: 'opt3', text: 'El número de palabras y páginas que tiene escritas el documento', correct: false },
          { id: 'opt4', text: 'Una clave secreta que bloquea el archivo para que nadie pueda abrirlo', correct: false }
        ],
        hint: 'Piensa en la ruta como la "dirección postal" de un archivo: especifica con precisión en qué disco, carpeta y subcarpeta vive el documento.'
      },
      {
        id: 'c8',
        type: 'text',
        title: 'Reto 8: Ética Digital: Imágenes, Derechos de Autor y Licencias',
        context: 'Para diseñar un cartel publicitario o una página web en clase, buscas ilustraciones en el buscador de imágenes de Google y encuentras fotografías profesionales con derechos de autor reservados (Copyright).',
        instruction: '¿Por qué no se debe copiar y utilizar libremente cualquier imagen de internet en un proyecto público sin permiso, y qué alternativas legales conoces (como licencias abiertas Creative Commons o bancos de imágenes de dominio público)?',
        placeholder: 'Explica por qué no se debe copiar cualquier imagen con copyright y qué alternativas libres conoces...',
        hint: 'Piensa en los derechos morales y económicos de los autores originales, y en plataformas que ofrecen contenido bajo licencias libres citando la autoría.'
      }
    ]
  },

  psirii: {
    id: 'psirii',
    queryTerm: 'psir',
    code: '2º Bachillerato',
    name: 'Programación, Sistemas Informáticos y Redes II',
    shortName: 'PSIR II (2º BAT)',
    badgeName: 'Ingeniero Cloud & DevOps',
    tagline: 'Misión: Arquitecturas cliente-servidor, contenerización con Docker, redes avanzadas y despliegue web',
    description: 'Aprenderás a desplegar y administrar servidores web locales y en la nube con CMS (WordPress), dominarás la contenerización y orquestación de microservicios con Docker Compose, diseñarás arquitecturas de red profesionales en Packet Tracer y desarrollarás soluciones web avanzadas.',
    themeColor: '#fb5607',
    skillsToUnlock: [
      { id: 'web_stack', label: 'Desplegar servidores web LAMP/LEMP y CMS WordPress en entornos locales y remotos', icon: '🌐' },
      { id: 'docker_compose', label: 'Orquestar microservicios multicontenedor con Docker Compose (Nginx, MariaDB, Nextcloud)', icon: '🐳' },
      { id: 'packet_tracer', label: 'Diseñar topologías de red profesionales con enrutamiento, VLANs y Packet Tracer', icon: '🖧' },
      { id: 'fullstack_ai', label: 'Desarrollo web Full-Stack con integración de APIs e Inteligencia Artificial', icon: '⚡' },
      { id: 'security_vault', label: 'Administrar credenciales profesionales con Bitwarden y asegurar infraestructuras', icon: '🔐' }
    ],
    captcha: {
      title: 'Verificación de Seguridad: Tipos de Datos en Python',
      instruction: 'Selecciona exactamente los 3 elementos que son TIPOS DE DATOS BÁSICOS estándar en Python:',
      items: [
        { id: 'cap1', text: 'int (Números enteros)', icon: '🔢', correct: true },
        { id: 'cap2', text: 'while (Bucle repetitivo)', icon: '🔄', correct: false },
        { id: 'cap3', text: 'str (Cadenas de texto)', icon: '🔤', correct: true },
        { id: 'cap4', text: 'def (Definir función)', icon: '⚙️', correct: false },
        { id: 'cap5', text: 'bool (Booleanos True / False)', icon: '⚖️', correct: true },
        { id: 'cap6', text: 'print (Función de salida)', icon: '🖨️', correct: false }
      ]
    },
    challenges: [
      {
        id: 'c1',
        type: 'choice',
        title: 'Reto 1: Variables y Conversión de Tipos (Python)',
        context: 'En un script de Python tenemos declaradas dos variables de distinto tipo (numérica y texto):',
        code: 'a = 20\nb = "10"\nprint(a + int(b))',
        instruction: '¿Qué resultado mostrará la consola tras ejecutar este código?',
        options: [
          { id: 'opt1', text: '30 (suma aritmética tras convertir el texto "10" a entero)', correct: true },
          { id: 'opt2', text: '"2010" (unión o concatenación de textos)', correct: false },
          { id: 'opt3', text: 'Error de sintaxis: no se pueden sumar números mayores de 10', correct: false },
          { id: 'opt4', text: '200 (multiplicación implícita)', correct: false }
        ],
        hint: 'La función int(b) transforma la cadena de caracteres "10" en el valor numérico 10, permitiendo que el operador + actúe como suma matemática.'
      },
      {
        id: 'c2',
        type: 'choice',
        title: 'Reto 2: Condicionales y Flujo de Control (if / elif / else)',
        context: 'Observa la siguiente estructura lógica en Python encargada de evaluar la latencia de red de un servidor:',
        code: 'latencia = 65\n\nif latencia < 50:\n    diagnostico = "Óptimo"\nelif latencia < 100:\n    diagnostico = "Aceptable"\nelse:\n    diagnostico = "Crítico"',
        instruction: 'Si la variable `latencia` vale 65, ¿qué valor exacto tendrá la variable `diagnostico` tras ejecutarse este bloque?',
        options: [
          { id: 'opt1', text: '"Aceptable" (la primera condición es falsa y la segunda es verdadera: 65 < 100)', correct: true },
          { id: 'opt2', text: '"Óptimo"', correct: false },
          { id: 'opt3', text: '"Crítico"', correct: false },
          { id: 'opt4', text: 'Dará un error porque 65 no se puede comparar con números', correct: false }
        ],
        hint: 'Python evalúa las bifurcaciones en orden de arriba a abajo y únicamente ejecuta el bloque de la primera condición que resulte verdadera (True).'
      },
      {
        id: 'c3',
        type: 'choice',
        title: 'Reto 3: Estructuras Iterativas (Bucles for y range)',
        context: 'Un bucle `for` permite recorrer secuencias numéricas generadas con la función `range(inicio, fin)`:',
        code: 'for i in range(1, 4):\n    print(i, end=" ")',
        instruction: '¿Qué imprimirá exactamente por consola este bucle al ejecutarse?',
        options: [
          { id: 'opt1', text: '1 2 3 (el límite superior 4 queda excluido)', correct: true },
          { id: 'opt2', text: '1 2 3 4', correct: false },
          { id: 'opt3', text: '0 1 2 3 4', correct: false },
          { id: 'opt4', text: '4 3 2 1', correct: false }
        ],
        hint: 'En Python, range(inicio, fin) genera números desde el valor de inicio hasta fin - 1 (el último número de parada nunca se incluye en la secuencia).'
      },
      {
        id: 'c4',
        type: 'choice',
        title: 'Reto 4: Modularidad con Funciones (def y return)',
        context: 'En programación modular se definen funciones reutilizables con parámetros y valores de retorno:',
        code: 'def duplicar_y_sumar(x, extra):\n    return (x * 2) + extra\n\nprint(duplicar_y_sumar(5, 3))',
        instruction: '¿Qué valor mostrará la consola tras ejecutar este programa?',
        options: [
          { id: 'opt1', text: '13 (duplica 5 obteniendo 10 y le suma 3)', correct: true },
          { id: 'opt2', text: '16', correct: false },
          { id: 'opt3', text: '10', correct: false },
          { id: 'opt4', text: 'None', correct: false }
        ],
        hint: 'Sigue el orden de operaciones: x toma el valor 5 (5 * 2 = 10), extra toma el valor 3 (10 + 3 = 13), y la sentencia return devuelve ese resultado final.'
      },
      {
        id: 'c5',
        type: 'choice',
        title: 'Reto 5: Colecciones de Datos (Listas en Python)',
        context: 'Trabajamos con una lista de nombres de servicios y consultamos sus elementos:',
        code: 'servidores = ["dns", "web", "db", "mail"]\n\nprimer_servicio = servidores[0]\ntotal = len(servidores)',
        instruction: '¿Qué valor contiene `primer_servicio` y qué número devuelve `len(servidores)`?',
        options: [
          { id: 'opt1', text: 'primer_servicio es "dns" y len(servidores) devuelve 4', correct: true },
          { id: 'opt2', text: 'primer_servicio es "web" y len(servidores) devuelve 3', correct: false },
          { id: 'opt3', text: 'primer_servicio es "mail" y len(servidores) devuelve 5', correct: false },
          { id: 'opt4', text: 'primer_servicio es "dns" y len(servidores) devuelve 0', correct: false }
        ],
        hint: 'En Python las posiciones de las listas se indexan empezando en cero (el primer elemento es [0]) y len() cuenta el total de elementos.'
      },
      {
        id: 'c6',
        type: 'choice',
        title: 'Reto 6: Gestión de Identidad y Riesgo Zero-Trust',
        context: 'En el curso desplegaremos servidores en producción y utilizaremos Bitwarden para la gestión de credenciales.',
        instruction: '¿Por qué la práctica de "usar una misma contraseña muy larga y difícil para todos los servicios" sigue siendo un riesgo de seguridad crítico?',
        options: [
          { id: 'opt1', text: 'Si un solo servicio secundario sufre una filtración de base de datos, los atacantes usarán esa credencial en el resto de cuentas (Credential Stuffing)', correct: true },
          { id: 'opt2', text: 'Porque las contraseñas largas caducan solas cada 24 horas por protocolo', correct: false },
          { id: 'opt3', text: 'Porque los gestores de contraseñas no admiten más de 8 caracteres', correct: false },
          { id: 'opt4', text: 'No supone ningún riesgo si no compartes la clave con personas conocidas', correct: false }
        ],
        hint: 'El problema no es la complejidad de la clave, sino qué ocurre cuando una empresa externa pierde la custodia de su base de datos de usuarios.'
      },
      {
        id: 'c7',
        type: 'text',
        title: 'Reto 7: Códigos de Estado HTTP en APIs REST',
        context: 'Desarrollas una API para consultar calificaciones. Un cliente realiza una petición a `/api/alumnos/999`, pero ese identificador de alumno no existe en la base de datos.',
        instruction: '¿Qué código numérico de estado HTTP estándar (3 dígitos) debe devolver el servidor web para indicar "Not Found"?',
        placeholder: 'Ej: 200, 404, 500...',
        hint: 'Es el código de error cliente más célebre de la historia de la navegación web.'
      },
      {
        id: 'c8',
        type: 'choice',
        title: 'Reto 8: Criptografía Asimétrica en TLS y SSH',
        context: 'Para las conexiones seguras a servidores remotos generamos un par de claves criptográficas asimétricas.',
        instruction: '¿Cuál de las dos claves debe permanecer estrictamente protegida en el equipo local y NUNCA compartirse ni enviarse por la red?',
        options: [
          { id: 'opt1', text: 'La clave privada (Private Key)', correct: true },
          { id: 'opt2', text: 'La clave pública (Public Key)', correct: false },
          { id: 'opt3', text: 'Cualquiera de las dos, son intercambiables', correct: false },
          { id: 'opt4', text: 'La clave pública, porque si alguien la ve puede descifrar nuestros mensajes', correct: false }
        ],
        hint: 'La clave pública se distribuye a los servidores para autorizar el acceso; la clave que descifra y autentica debe mantenerse en absoluto secreto.'
      }
    ]
  }
};
