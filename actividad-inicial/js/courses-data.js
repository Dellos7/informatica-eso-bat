// ==========================================================================
// BANCO DE CONTENIDOS Y RETOS DIAGNÓSTICOS POR ASIGNATURA - TECH PASSPORT
// ==========================================================================

const COURSES_DATA = {
  trdr: {
    id: 'trdr',
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
        title: 'Reto 2: Comprimiendo Código (Estructuras de Control)',
        context: 'Para dibujar un hexágono regular de 6 lados iguales, un robot ejecuta: `Avanzar 10cm, Girar 60°, Avanzar 10cm, Girar 60°, Avanzar 10cm, Girar 60°, Avanzar 10cm, Girar 60°, Avanzar 10cm, Girar 60°, Avanzar 10cm, Girar 60°`. Son 12 líneas idénticas.',
        instruction: '¿Qué estructura de programación permite condensar este comportamiento de forma limpia y eficiente?',
        options: [
          { id: 'opt1', text: 'Un bucle de repetición: "Repetir 6 veces [Avanzar 10cm, Girar 60°]"', correct: true },
          { id: 'opt2', text: 'Una estructura condicional: "Si es hexágono entonces Avanzar"', correct: false },
          { id: 'opt3', text: 'Guardar la palabra "hexágono" en una variable de texto', correct: false },
          { id: 'opt4', text: 'Aumentar la velocidad del procesador para que lea las 12 líneas más rápido', correct: false }
        ],
        hint: 'Identifica el bloque de acciones que se reproduce de manera periódica y cuántas veces debe repetirse.'
      },
      {
        id: 'c3',
        type: 'choice',
        title: 'Reto 3: ¿Mente Biológica o Algoritmo de IA?',
        context: 'Con frecuencia se humanizan los modelos de Inteligencia Artificial como si tuvieran sentimientos o consciencia.',
        instruction: '¿Cuál de las siguientes afirmaciones describe cómo funciona realmente un modelo de Inteligencia Artificial (Machine Learning)?',
        options: [
          { id: 'opt1', text: 'Calcula probabilidades estadísticas y patrones matemáticos a partir de miles de datos previos', correct: true },
          { id: 'opt2', text: 'Siente alegría cuando resuelve una tarea y tristeza cuando se equivoca', correct: false },
          { id: 'opt3', text: 'Posee consciencia propia y decide libremente si le apetece responder hoy', correct: false },
          { id: 'opt4', text: 'Tiene recuerdos de su infancia almacenados en la tarjeta gráfica', correct: false }
        ],
        hint: 'Detrás de los modelos de IA no hay biología ni emociones, sino operaciones con matrices numéricas y optimización de funciones de coste.'
      },
      {
        id: 'c4',
        type: 'choice',
        title: 'Reto 4: Caza del Bug (Depuración de Código)',
        context: 'Un sensor de ultrasonidos en un robot tiene este código para evitar colisiones: `Si distancia < 15cm entonces [Acelerar a máxima velocidad] si no [Frenar motores]`.',
        instruction: '¿Qué sucederá cuando pongamos el robot en marcha en línea recta hacia una pared?',
        options: [
          { id: 'opt1', text: 'El robot chocará con fuerza contra la pared, porque acelera justo cuando está cerca', correct: true },
          { id: 'opt2', text: 'El robot se detendrá suavemente a 15 cm de la pared', correct: false },
          { id: 'opt3', text: 'El robot dará la vuelta automáticamente y buscará otra sala', correct: false },
          { id: 'opt4', text: 'El sensor de ultrasonidos explotará por sobrecalentamiento', correct: false }
        ],
        hint: 'Lee con rigor la condición lógica: cuando la distancia al obstáculo sea pequeña (<15cm), ¿qué acción está programada por error?'
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
        type: 'text',
        title: 'Reto 6: Algoritmia en Pseudocódigo',
        context: 'Queremos diseñar el algoritmo para una puerta de garaje automática con un sensor de presencia y un motor.',
        instruction: 'Escribe en 2 o 3 líneas sencillas de pseudocódigo (ejemplo: "Si detecta coche entonces... si no...") cómo programarías la apertura y cierre de la puerta.',
        placeholder: 'Si sensor_presencia == activado entonces abrir_puerta sino...',
        hint: 'Establece claramente la condición que activa el motor de apertura y qué debe hacer el sistema cuando la condición no se cumple.'
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
        title: 'Reto 8: Sesgos en la Inteligencia Artificial',
        context: 'Si entrenamos una IA de reconocimiento de perros usando únicamente fotos de perros de color blanco en la nieve, es probable que no reconozca a un perro negro o marrón.',
        instruction: '¿Por qué ocurre este problema y qué deberíamos hacer con los datos de entrenamiento para solucionarlo?',
        placeholder: 'Explica por qué falla y cómo mejorar los datos de entrenamiento...',
        hint: 'Piensa en la representatividad y diversidad del conjunto de datos con el que se alimenta el algoritmo durante su fase de aprendizaje.'
      }
    ]
  },

  digitalizacion: {
    id: 'digitalizacion',
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
        title: 'Reto 3: La Consola de Comandos Linux (Bash)',
        context: 'En servidores y administración de sistemas a menudo no existe interfaz gráfica y todo se opera mediante la terminal.',
        instruction: 'Estás en tu carpeta de usuario y quieres crear una carpeta llamada "proyectos". ¿Qué comando debes escribir?',
        options: [
          { id: 'opt1', text: 'mkdir proyectos', correct: true },
          { id: 'opt2', text: 'rm -rf proyectos', correct: false },
          { id: 'opt3', text: 'cat proyectos', correct: false },
          { id: 'opt4', text: 'cd proyectos', correct: false }
        ],
        hint: 'El comando proviene del inglés "Make Directory" (crear directorio). Cuidado: `rm` es para eliminar y `cat` para leer.'
      },
      {
        id: 'c4',
        type: 'text',
        title: 'Reto 4: Auditoría de Archivos en la Terminal',
        context: 'Quieres examinar el contenido de un directorio en Linux viendo todos los archivos (incluso los ocultos que empiezan por `.`), sus permisos y su tamaño.',
        instruction: 'Escribe el comando de Bash con sus opciones (flags) para listar todos los archivos en formato largo y detallado.',
        placeholder: 'Ej: comando -opciones',
        hint: 'Combina el comando de listar `ls` con las opciones para formato largo (long) y mostrar todos (all).'
      },
      {
        id: 'c5',
        type: 'choice',
        title: 'Reto 5: Virtualización con VirtualBox',
        context: 'En las prácticas de sistemas montamos máquinas virtuales para probar Linux Lite y Windows XP dentro de LliureX.',
        instruction: '¿Cuál es la principal ventaja técnica de experimentar dentro de una Máquina Virtual?',
        options: [
          { id: 'opt1', text: 'Aislamiento seguro (sandbox): cualquier fallo o prueba de malware no afecta al sistema operativo real anfitrión', correct: true },
          { id: 'opt2', text: 'Que el equipo consume un 90% menos de energía eléctrica', correct: false },
          { id: 'opt3', text: 'Que duplica físicamente la memoria RAM soldada en la placa base', correct: false },
          { id: 'opt4', text: 'Que permite jugar a videojuegos sin necesidad de tarjeta gráfica', correct: false }
        ],
        hint: 'Piensa en el concepto de "caja de arena": un entorno encapsulado en software cuyos discos duros son simples archivos aislados.'
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
        image: 'img/digital_network.jpg',
        title: 'Reto 7: Direccionamiento IP en Redes Locales (LAN)',
        context: 'Observa el esquema de la red doméstica con el router actuando de puerta de enlace (Gateway).',
        instruction: '¿Qué dirección IP privada local tiene asignada el ordenador de sobremesa (PC Desktop)?',
        options: [
          { id: 'opt1', text: '192.168.1.10', correct: true },
          { id: 'opt2', text: '192.168.1.1', correct: false },
          { id: 'opt3', text: '82.14.90.1', correct: false },
          { id: 'opt4', text: '192.168.1.25', correct: false }
        ],
        hint: 'Busca el icono de la torre con monitor y lee la línea que especifica su dirección IP privada bajo el nombre PC Desktop.'
      },
      {
        id: 'c8',
        type: 'text',
        title: 'Reto 8: Variables en Motores de Videojuegos',
        context: 'En un motor 2D como GDevelop o Scratch estás programando un videojuego con varios niveles.',
        instruction: '¿Por qué la variable que guarda la puntuación (`Score`) del jugador debe configurarse como "Variable Global" en vez de como variable de escena o de objeto?',
        placeholder: 'Explica qué ocurriría con la puntuación al cambiar de nivel o escena...',
        hint: 'Piensa en qué ocurre con los elementos de una pantalla cuando el jugador pasa al nivel 2: ¿se destruyen o se mantienen en memoria?'
      }
    ]
  },

  psirii: {
    id: 'psirii',
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
      title: 'Verificación de Seguridad: Protocolos y Servicios',
      instruction: 'Selecciona exactamente los 3 elementos que son PROTOCOLOS o SERVICIOS DE RED a nivel lógico:',
      items: [
        { id: 'cap1', text: 'Protocolo Seguro HTTPS (Web)', icon: '🔒', correct: true },
        { id: 'cap2', text: 'Cable de par trenzado RJ-45', icon: '🖧', correct: false },
        { id: 'cap3', text: 'Servicio SSH (Terminal remota)', icon: '🔑', correct: true },
        { id: 'cap4', text: 'Carcasa de servidor Rack', icon: '📦', correct: false },
        { id: 'cap5', text: 'Resolución DNS (Nombres de dominio)', icon: '🌐', correct: true },
        { id: 'cap6', text: 'Tarjeta de interfaz de red física', icon: '🔌', correct: false }
      ]
    },
    challenges: [
      {
        id: 'c1',
        type: 'choice',
        title: 'Reto 1: La Odisea de una Petición Web (Arquitectura)',
        context: 'Un usuario escribe `https://miweb.com/perfil` en su navegador y pulsa Enter.',
        instruction: '¿Cuál es el orden cronológico real de los acontecimientos en la red antes de recibir el documento HTML?',
        options: [
          { id: 'opt1', text: 'Resolución DNS (IP) ➔ Handshake TCP/TLS ➔ Petición HTTP GET al servidor ➔ Servidor/BD procesa ➔ Respuesta 200 con payload', correct: true },
          { id: 'opt2', text: 'El navegador descarga el HTML ➔ luego busca la IP ➔ y luego pregunta al servidor DNS', correct: false },
          { id: 'opt3', text: 'La base de datos remota envía directamente el código PHP al navegador del cliente para que lo compile', correct: false },
          { id: 'opt4', text: 'El router del cliente genera la página web localmente mediante caché UDP', correct: false }
        ],
        hint: 'Antes de abrir un socket de transporte TCP hacia un destino se necesita conocer la dirección numérica IP del host mediante el sistema de nombres.'
      },
      {
        id: 'c2',
        type: 'choice',
        title: 'Reto 2: Paradigmas de Virtualización (VM vs Docker)',
        context: 'En la SdA 1 utilizamos máquinas virtuales con VirtualBox y en la SdA 2 migramos a Docker Compose.',
        instruction: '¿Cuál es la diferencia arquitectónica fundamental que hace que un contenedor Docker sea mucho más ligero y rápido que una Máquina Virtual?',
        options: [
          { id: 'opt1', text: 'Los contenedores comparten el kernel del SO anfitrión mediante namespaces y cgroups, mientras que una VM emula hardware y levanta un SO invitado completo', correct: true },
          { id: 'opt2', text: 'Docker solo puede ejecutar aplicaciones de Windows y no de Linux', correct: false },
          { id: 'opt3', text: 'Las máquinas virtuales no pueden conectarse a internet mientras que los contenedores sí', correct: false },
          { id: 'opt4', text: 'Docker guarda los archivos en la memoria caché del monitor para evitar lecturas de disco', correct: false }
        ],
        hint: 'Piensa en las capas: una VM emula BIOS, CPU virtual y un kernel propio (gigabytes de consumo); un contenedor solo empaqueta binarios y librerías de usuario.'
      },
      {
        id: 'c3',
        type: 'choice',
        title: 'Reto 3: Puertos Estándar y Servicios de Red',
        context: 'Estás configurando las reglas de firewall y el mapeo de puertos (`ports:`) en un archivo `docker-compose.yml`.',
        instruction: '¿A qué servicios corresponden por defecto los puertos bien conocidos (well-known ports) 22, 80, 443 y 3306?',
        options: [
          { id: 'opt1', text: '22: SSH | 80: HTTP | 443: HTTPS | 3306: MySQL/MariaDB', correct: true },
          { id: 'opt2', text: '22: Minecraft | 80: Steam | 443: Discord | 3306: Spotify', correct: false },
          { id: 'opt3', text: '22: Impresora | 80: DNS | 443: DHCP | 3306: FTP', correct: false },
          { id: 'opt4', text: 'Son números aleatorios sin asignación estándar en las especificaciones IANA', correct: false }
        ],
        hint: '22 es el canal cifrado de administración remota; 80 y 443 son los protocolos mundiales del hipertexto web.'
      },
      {
        id: 'c4',
        type: 'choice',
        image: 'img/psirii_docker.jpg',
        title: 'Reto 4: Análisis de Arquitectura Docker Multicontenedor',
        context: 'Observa la arquitectura de microservicios orquestada con Docker Engine en el servidor host (`192.168.1.100`).',
        instruction: 'Cuando un cliente de internet envía una petición HTTPS al puerto 443, ¿qué contenedor actúa como servidor perimetral recibiendo la conexión inicial?',
        options: [
          { id: 'opt1', text: 'web-nginx (puertos 80 y 443 mapeados)', correct: true },
          { id: 'opt2', text: 'app-backend (puerto interno 9000)', correct: false },
          { id: 'opt3', text: 'db-mariadb (puerto interno 3306)', correct: false },
          { id: 'opt4', text: 'Persistent Volume db_data', correct: false }
        ],
        hint: 'Sigue la flecha entrante desde el cliente web: el contenedor de Nginx realiza el port mapping y balancea hacia el backend.'
      },
      {
        id: 'c5',
        type: 'text',
        title: 'Reto 5: Persistencia de Datos en Docker Compose',
        context: 'Por diseño, los contenedores Docker son efímeros: si el contenedor de base de datos se reinicia o actualiza, los datos internos se borran.',
        instruction: '¿Qué sección o directiva de un archivo `docker-compose.yml` se utiliza para montar almacenamiento persistente que sobreviva a la destrucción del contenedor?',
        placeholder: 'Ej: directiva en inglés (plural)...',
        hint: 'Se trata de la directiva de volúmenes de almacenamiento (volumes) que vincula una carpeta del host o un volumen administrado.'
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
