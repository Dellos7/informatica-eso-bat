// ==========================================================================
// BANCO DE CONTENIDOS Y MINIRRETOS POR ASIGNATURA - TECH PASSPORT
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
    challenges: [
      {
        id: 'c1',
        title: 'Reto 1: La Frontera Digital (Hardware vs Software)',
        context: 'En el taller de informática hay elementos que puedes tocar con las manos y otros que solo viven como código invisible.',
        instruction: '¿Cuál de los siguientes elementos pertenece al SOFTWARE (la parte lógica e intangible del ordenador)?',
        options: [
          { id: 'opt1', text: 'El ratón óptico y el teclado', correct: false },
          { id: 'opt2', text: 'El Sistema Operativo (como LliureX o Windows) y las aplicaciones', correct: true },
          { id: 'opt3', text: 'El monitor donde vemos la imagen', correct: false },
          { id: 'opt4', text: 'La memoria RAM y el disco duro', correct: false }
        ],
        hint: 'Recuerda la regla de oro: si puedes darle una patada o tocarlo con los dedos, es Hardware. Si solo puedes ejecutarlo o verlo en pantalla, es Software.',
        explanation: '¡Exacto! El sistema operativo y los programas son Software: instrucciones lógicas que le indican al Hardware físico qué debe hacer en cada momento.'
      },
      {
        id: 'c2',
        title: 'Reto 2: Reconocimiento de Sistemas Operativos',
        context: 'Cada dispositivo necesita un "jefe de estación" que gestione sus recursos y permita abrir aplicaciones.',
        instruction: 'En los ordenadores del instituto utilizamos un sistema operativo libre con la mascota del pingüino Tux, adaptado para la Comunidad Valenciana. ¿Cómo se llama?',
        options: [
          { id: 'opt1', text: 'LliureX (basado en Linux)', correct: true },
          { id: 'opt2', text: 'Android TV', correct: false },
          { id: 'opt3', text: 'Apple iOS', correct: false },
          { id: 'opt4', text: 'PlayStation OS', correct: false }
        ],
        hint: 'Es un proyecto de software libre impulsado en nuestra comunidad educativa cuyo nombre empieza por "Lliure...".',
        explanation: '¡Brillante! LliureX es una distribución de Linux libre, segura y gratuita creada especialmente para las aulas valencianas.'
      },
      {
        id: 'c3',
        title: 'Reto 3: El Detective de Archivos',
        context: 'Tu amigo te ha enviado cuatro archivos por correo para un trabajo en equipo: `resumen.pdf`, `musica_fondo.mp3`, `foto_portada.jpg` y `video_final.mp4`.',
        instruction: 'Necesitas escuchar la banda sonora para ver si dura lo suficiente. ¿Qué archivo debes reproducir?',
        options: [
          { id: 'opt1', text: 'resumen.pdf', correct: false },
          { id: 'opt2', text: 'foto_portada.jpg', correct: false },
          { id: 'opt3', text: 'musica_fondo.mp3', correct: true },
          { id: 'opt4', text: 'video_final.mp4', correct: false }
        ],
        hint: 'Fíjate en las letras tras el punto: las extensiones nos indican qué programa debe abrir cada contenido.',
        explanation: '¡Perfecto! La extensión .mp3 identifica archivos de audio. Los formatos .pdf son documentos, .jpg imágenes y .mp4 vídeos.'
      },
      {
        id: 'c4',
        title: 'Reto 4: Escudo de Privacidad',
        context: 'Descargas un juego gratuito y, antes de empezar la primera partida, te aparece una ventana emergente que te pide tu número de teléfono móvil personal y tu nombre real para darte 500 gemas gratis.',
        instruction: 'Como usuario digital inteligente y responsable, ¿qué decisión es la más prudente?',
        options: [
          { id: 'opt1', text: 'Dar mi número rápidamente; ¡son 500 gemas gratis y no quiero perdérmelas!', correct: false },
          { id: 'opt2', text: 'Rechazar la solicitud o no dar datos reales, porque un juego no necesita mi teléfono privado para funcionar', correct: true },
          { id: 'opt3', text: 'Poner el número de teléfono de un compañero de clase para que no me molesten a mí', correct: false },
          { id: 'opt4', text: 'Publicar la oferta en mi estado de WhatsApp para que mis amigos también ganen gemas', correct: false }
        ],
        hint: 'Cuando en internet un producto o juego es "gratis", a menudo el verdadero precio son tus datos personales.',
        explanation: '¡Excelente criterio de seguridad! Nunca debemos ceder datos personales sensibles como el número de teléfono a cambio de recompensas en apps.'
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
    challenges: [
      {
        id: 'c1',
        title: 'Reto 1: La Misión del Vehículo Autónomo (Secuencia)',
        context: 'Un pequeño rover robotizado está en la casilla (0,0) mirando hacia el ESTE (derecha). Hay una roca en (1,0) y la meta está en (1,1).',
        instruction: '¿Cuál de las siguientes secuencias de órdenes llevará al robot hasta la meta sin chocar con la roca?',
        options: [
          { id: 'opt1', text: 'Avanzar ➔ Girar Derecha ➔ Avanzar', correct: false },
          { id: 'opt2', text: 'Girar Derecha (mira al Sur) ➔ Avanzar ➔ Girar Izquierda (mira al Este) ➔ Avanzar', correct: true },
          { id: 'opt3', text: 'Avanzar ➔ Avanzar ➔ Girar Izquierda', correct: false },
          { id: 'opt4', text: 'Girar Izquierda ➔ Girar Izquierda ➔ Avanzar', correct: false }
        ],
        hint: 'Traza mentalmente el camino: si avanzas directamente hacia el Este, te estrellarás contra la roca en (1,0). Debes esquivarla girando primero al Sur.',
        explanation: '¡Genial! Los algoritmos son secuencias precisas y ordenadas de pasos. Cambiar el orden de una sola instrucción cambia por completo el resultado.'
      },
      {
        id: 'c2',
        title: 'Reto 2: Comprimiendo Código (Estructuras de Control)',
        context: 'Para dibujar un cuadrado perfecto, un robot ejecuta: `Avanzar 10cm, Girar 90°, Avanzar 10cm, Girar 90°, Avanzar 10cm, Girar 90°, Avanzar 10cm, Girar 90°`. Son 8 líneas de código.',
        instruction: '¿Qué estructura de programación nos permite expresar exactamente lo mismo de forma limpia y eficiente?',
        options: [
          { id: 'opt1', text: 'Una estructura condicional (Si... Entonces)', correct: false },
          { id: 'opt2', text: 'Un bucle de repetición: "Repetir 4 veces [Avanzar 10cm, Girar 90°]"', correct: true },
          { id: 'opt3', text: 'Crear un archivo comprimido .zip en el disco', correct: false },
          { id: 'opt4', text: 'Aumentar la memoria RAM del robot', correct: false }
        ],
        hint: 'Fíjate en que el patrón `[Avanzar 10cm, Girar 90°]` se repite de manera idéntica varias veces consecutivas.',
        explanation: '¡Exacto! Los bucles (como `for` o `while`) son fundamentales para evitar código repetitivo y hacer nuestros programas escalables y elegantes.'
      },
      {
        id: 'c3',
        title: 'Reto 3: ¿Mente Biológica o Algoritmo de IA?',
        context: 'A veces confundimos lo que una Inteligencia Artificial "sabe" con lo que un cerebro humano experimenta.',
        instruction: '¿Cuál de las siguientes acciones representa la forma real en la que aprende un modelo de Inteligencia Artificial actual (Machine Learning)?',
        options: [
          { id: 'opt1', text: 'Siente alegría cuando acierta y tristeza cuando se equivoca', correct: false },
          { id: 'opt2', text: 'Tiene conciencia propia y decide libremente qué le apetece aprender hoy', correct: false },
          { id: 'opt3', text: 'Analiza miles de ejemplos con datos matemáticos para detectar patrones estadísticos', correct: true },
          { id: 'opt4', text: 'Sueña por la noche para organizar sus recuerdos como los humanos', correct: false }
        ],
        hint: 'Una IA no siente ni comprende el mundo; procesa números, probabilidades y matrices a gran escala a partir de ejemplos previos.',
        explanation: '¡Brillante! La IA actual no tiene conciencia ni emociones: es un potentísimo motor matemático que encuentra patrones en grandes volúmenes de datos.'
      },
      {
        id: 'c4',
        title: 'Reto 4: Caza del Bug (Depuración de Código)',
        context: 'Un sensor de ultrasonidos en nuestro robot Maqueen tiene este código para frenar ante un obstáculo: `Si distancia < 15cm entonces [Acelerar a máxima velocidad] si no [Frenar]`.',
        instruction: '¿Qué ocurrirá cuando pongamos el robot en marcha hacia una pared?',
        options: [
          { id: 'opt1', text: 'El robot se detendrá suavemente a 15cm de la pared', correct: false },
          { id: 'opt2', text: 'El robot chocará fuertemente contra la pared al acelerar justo cuando detecta que está cerca', correct: true },
          { id: 'opt3', text: 'El robot apagará sus luces y se dará la vuelta solo', correct: false },
          { id: 'opt4', text: 'El sensor se romperá antes de llegar a la pared', correct: false }
        ],
        hint: 'Lee con atención la condición lógica: cuando la distancia sea MENOR de 15cm (es decir, muy cerca), ¿qué orden le hemos dado por error?',
        explanation: '¡Bien detectado! Hay un error lógico (bug): las acciones están invertidas. El proceso de buscar y corregir estos fallos se llama Depuración (Debugging).'
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
    challenges: [
      {
        id: 'c1',
        title: 'Reto 1: El Cuello de Botella del Hardware',
        context: 'Un equipo de sobremesa tiene un procesador Core i7 potente y 16 GB de RAM, pero tarda 6 minutos en iniciar el sistema operativo y las aplicaciones tardan una eternidad en abrirse.',
        instruction: '¿Cuál es la causa más probable del problema y su solución más efectiva y económica?',
        options: [
          { id: 'opt1', text: 'El monitor no tiene suficientes hercios (Hz); hay que cambiar de pantalla', correct: false },
          { id: 'opt2', text: 'El sistema está instalado en un disco mecánico tradicional (HDD); sustituirlo por un SSD multiplicará la velocidad por diez', correct: true },
          { id: 'opt3', text: 'Hace falta una tarjeta gráfica para videojuegos con iluminación RGB', correct: false },
          { id: 'opt4', text: 'La fuente de alimentación no envía suficiente electricidad al teclado', correct: false }
        ],
        hint: 'Los discos duros con platos magnéticos giratorios tienen tiempos de acceso muy lentos comparados con la memoria flash.',
        explanation: '¡Excelente diagnóstico técnico! El disco magnético (HDD) suele ser el cuello de botella en lectura/escritura de archivos; un SSD transforma por completo la fluidez del equipo.'
      },
      {
        id: 'c2',
        title: 'Reto 2: El Poder de la Terminal Linux (Bash)',
        context: 'En entornos de servidores y administración profesional, la interfaz gráfica a menudo no existe y todo se gestiona mediante comandos de texto.',
        instruction: 'Estás en tu carpeta personal y necesitas crear de golpe una nueva carpeta llamada `proyectos`. ¿Qué comando debes teclear?',
        options: [
          { id: 'opt1', text: 'mkdir proyectos', correct: true },
          { id: 'opt2', text: 'crear-carpeta proyectos', correct: false },
          { id: 'opt3', text: 'rm -rf proyectos', correct: false },
          { id: 'opt4', text: 'cat proyectos', correct: false }
        ],
        hint: 'El comando proviene del inglés "Make Directory" (fabricar directorio). Cuidado: `rm` es para borrar!',
        explanation: '¡Correcto! `mkdir` (make directory) crea nuevos directorios en Linux/Unix. `ls` lista el contenido, `cd` cambia de directorio y `rm` elimina.'
      },
      {
        id: 'c3',
        title: 'Reto 3: La Magia de la Virtualización',
        context: 'En la asignatura utilizaremos VirtualBox para probar Windows XP, Linux Lite y Windows 11 dentro de nuestro ordenador habitual con LliureX.',
        instruction: '¿Cuál es la principal ventaja técnica de trabajar con Máquinas Virtuales en un aula de informática?',
        options: [
          { id: 'opt1', text: 'Que el ordenador consume un 90% menos de electricidad', correct: false },
          { id: 'opt2', text: 'Aislamiento seguro: podemos experimentar, formatear o probar virus sin dañar el sistema operativo anfitrión real', correct: true },
          { id: 'opt3', text: 'Que la máquina virtual duplica mágicamente la memoria RAM física del ordenador', correct: false },
          { id: 'opt4', text: 'Que los videojuegos funcionan al doble de velocidad dentro de la máquina virtual', correct: false }
        ],
        hint: 'Una máquina virtual es una "caja de arena" (sandbox) de software encapsulada dentro de tu sistema operativo habitual.',
        explanation: '¡Exacto! El aislamiento permite realizar prácticas avanzadas de instalación, configuración y pruebas de software peligroso o desconocido con total tranquilidad y reversibilidad.'
      },
      {
        id: 'c4',
        title: 'Reto 4: Radar de Phishing y Ciberdefensa',
        context: 'Recibes un SMS urgente: *"Tu paquete de Correos está retenido por falta de 1,85€. Pulsa en `http://correos-entrega-urgente.xyz/pago` en menos de 2 horas para no perderlo"*.',
        instruction: '¿Qué señales inequívocas te alertan de que se trata de un ataque de ingeniería social / Phishing?',
        options: [
          { id: 'opt1', text: 'El mensaje está muy bien escrito y tiene el logo oficial, por lo que es 100% seguro', correct: false },
          { id: 'opt2', text: 'La urgencia forzada ("2 horas"), el dominio extraño (.xyz en lugar de correos.es) y pedir tarjeta para un paquete no solicitado', correct: true },
          { id: 'opt3', text: 'Los SMS nunca pueden ser fraudulentos porque los envía la operadora', correct: false },
          { id: 'opt4', text: 'Solo es peligroso si el importe solicitado supera los 50 euros', correct: false }
        ],
        hint: 'Observa la URL con lupa: el dominio principal es quien realmente controla la web, no el subdominio.',
        explanation: '¡Perfecto sentido crítico! Los ciberdelincuentes juegan con la prisa y usan dominios engañosos para robar credenciales o datos bancarios.'
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
    challenges: [
      {
        id: 'c1',
        title: 'Reto 1: La Odisea de una Petición Web (Arquitectura)',
        context: 'Un usuario escribe `https://miweb.com/perfil` en su navegador y pulsa Enter.',
        instruction: '¿Cuál es el orden cronológico real de los acontecimientos en la red?',
        options: [
          { id: 'opt1', text: 'El navegador descarga el HTML ➔ luego busca la IP ➔ y luego pregunta al DNS', correct: false },
          { id: 'opt2', text: 'Resolución DNS (IP) ➔ Conexión TCP/TLS (Handshake) ➔ Petición HTTP GET al servidor ➔ Servidor/BD procesa ➔ Respuesta 200 con assets', correct: true },
          { id: 'opt3', text: 'La base de datos envía directamente el código PHP al navegador del cliente para que lo compile', correct: false },
          { id: 'opt4', text: 'El router del cliente genera la página web localmente y la sincroniza con la nube', correct: false }
        ],
        hint: 'Antes de enviar cualquier dato, el navegador necesita convertir el nombre de dominio en una dirección IP numérica mediante el sistema DNS.',
        explanation: '¡Impecable! La resolución DNS precede al apretón de manos TLS/TCP; posteriormente el servidor web (Nginx/Apache) procesa el script backend (PHP/Node) contra la BD y sirve HTML/CSS/JS al cliente.'
      },
      {
        id: 'c2',
        title: 'Reto 2: Paradigmas de Virtualización (VM vs Docker)',
        context: 'En la SdA 1 utilizamos máquinas virtuales con VirtualBox (Linux Mint) y en la SdA 2 migramos a Docker Compose.',
        instruction: '¿Cuál es la diferencia arquitectónica fundamental que hace que un contenedor Docker sea mucho más ligero y rápido que una Máquina Virtual?',
        options: [
          { id: 'opt1', text: 'Docker no permite ejecutar Linux, solo aplicaciones de Windows', correct: false },
          { id: 'opt2', text: 'Los contenedores comparten el kernel del sistema operativo anfitrión, mientras que una VM emula hardware completo y levanta un SO invitado entero', correct: true },
          { id: 'opt3', text: 'Las máquinas virtuales no pueden conectarse a internet y Docker sí', correct: false },
          { id: 'opt4', text: 'Docker guarda los datos en la memoria caché del monitor', correct: false }
        ],
        hint: 'Piensa en las capas: una VM lleva su propio Kernel + Bin/Libs + SO Invitado (varios Gigabytes). Un contenedor solo empaqueta la aplicación y sus dependencias de usuario.',
        explanation: '¡Brillante! Al compartir el kernel del host mediante namespaces y cgroups, los contenedores arrancan en milisegundos y consumen una fracción ínfima de memoria en comparación con un hipervisor de tipo 2.'
      },
      {
        id: 'c3',
        title: 'Reto 3: Puertos Estándar y Servicios de Red',
        context: 'Estás configurando las reglas de firewall y el mapeo de puertos (`ports:`) en un archivo `docker-compose.yml`.',
        instruction: '¿A qué servicios corresponden por defecto los puertos bien conocidos (well-known ports) 22, 80, 443 y 3306?',
        options: [
          { id: 'opt1', text: '22: Minecraft | 80: Steam | 443: Discord | 3306: Spotify', correct: false },
          { id: 'opt2', text: '22: SSH | 80: HTTP | 443: HTTPS | 3306: MySQL/MariaDB', correct: true },
          { id: 'opt3', text: '22: Impresora | 80: DNS | 443: DHCP | 3306: FTP', correct: false },
          { id: 'opt4', text: 'Son números aleatorios que no tienen ninguna asignación estándar en redes', correct: false }
        ],
        hint: 'El puerto 22 es el canal seguro de terminal remota y 80/443 son los pilares del protocolo de transferencia de hipertexto en la World Wide Web.',
        explanation: '¡Correcto! Los puertos IANA estándar son vitales para enrutar el tráfico de red: 22 para administración remota por SSH, 80/443 para tráfico web sin/con cifrado TLS, y 3306 para bases de datos MySQL/MariaDB.'
      },
      {
        id: 'c4',
        title: 'Reto 4: Gestión de Identidad y Zero-Trust',
        context: 'En el curso desplegaremos servidores en hostings remotos (como InfinityFree) y utilizaremos Bitwarden para la gestión de credenciales.',
        instruction: '¿Por qué la estrategia de "usar una misma contraseña muy difícil para todos los servicios" sigue siendo un riesgo de seguridad crítico?',
        options: [
          { id: 'opt1', text: 'Porque las contraseñas largas caducan solas cada 24 horas', correct: false },
          { id: 'opt2', text: 'Si una sola plataforma secundaria sufre una filtración (data breach), los atacantes usarán esa credencial para acceder al resto de tus cuentas (Credential Stuffing)', correct: true },
          { id: 'opt3', text: 'Porque los gestores de contraseñas como Bitwarden solo admiten contraseñas cortas', correct: false },
          { id: 'opt4', text: 'No supone ningún riesgo si no compartes la contraseña con tus amigos', correct: false }
        ],
        hint: 'El problema no es la fortaleza de la clave, sino qué ocurre cuando una empresa externa pierde su base de datos de usuarios.',
        explanation: '¡Totalmente de acuerdo! El ataque de reutilización de credenciales (Credential Stuffing) es de los más comunes. La solución profesional es una contraseña única y aleatoria por servicio gestionada con una bóveda segura y 2FA.'
      }
    ]
  }
};
