# Programación de Aula de Programación, Redes y Sistemas Informáticos II, 2º Bachillerato, 2026-27

## Distribución temporal

| Situación de Aprendizaje | Número de Sesiones Totales | Trimestre |
| :--- | :---: | :---: |
| 1. Despliegue de servicios web: De la máquina virtual a la nube | 30 | 1º |
| 2. Docker: nube privada y correo de laboratorio | 30 | 1º / 2º |
| 3. Redes básicas: conexión y diagnóstico | 10 | 2º |
| 4. Programación con Python y desarrollo web | 30 | 2º / 3º |
| 5. Ciberseguridad y ética: Los desafíos de la sociedad digital | 12 | 3º |
| **TOTAL** | **112** | |

---

Previsión aproximada de cuatro sesiones semanales: del 9 de septiembre de 2026 al 14 de mayo de 2027, descontando vacaciones y festivos autonómicos del calendario publicado, resultan 154 días potenciales de clase, equivalentes a unas 123 sesiones. El 14 de mayo es una hipótesis de planificación para terminar los contenidos de 2.º de Bachillerato, no una fecha oficial de fin de curso o evaluación. Se programan 112 sesiones y se deja un margen aproximado de 11 para festivos locales, evaluaciones, ajustes e incidencias. Distribución orientativa: 46 sesiones en el primer tramo (SdA 1 y 16 de SdA 2), 44 en el segundo (14 de SdA 2, SdA 3 y 20 de SdA 4) y 22 en el tercero (10 de SdA 4 y SdA 5). Se ajustará al horario y calendario del centro.

## SITUACIÓN DE APRENDIZAJE 1: Despliegue de servicios web: De la máquina virtual a la nube

**Contexto:**

| Personal | Educativo | Social | Profesional |
| :--- | :--- | :--- | :--- |
| Capacidad para autogestionar un entorno de publicación digital. | Integración de sistemas operativos, bases de datos y servidores web. | Comprensión de los mecanismos de publicación y presencia en la red. | Simulación de roles de administrador de sistemas y gestor de contenidos (CMS). |

**Descripción / Justificación:**
En esta unidad el alumnado aprenderá a montar un entorno de servidor completo partiendo de la virtualización. En una primera fase local, se instalará Linux Mint sobre una máquina virtual en VirtualBox, configurando el stack XAMPP para dar soporte a un CMS WordPress maquetado con Blocksy (Gutenberg o Elementor) para la creación de una web personal estilo CV, realizando copias de seguridad mediante All-in-One WP Migration y gestionando credenciales con Bitwarden. En una segunda fase en la nube, se realizará el despliegue en un hosting remoto gratuito (InfinityFree) mediante el gestor de archivos y los asistentes de instalación de las aplicaciones, publicando dos aplicaciones web independientes (WordPress básico y una segunda aplicación a elección del alumnado como Moodle, PrestaShop, DokuWiki, etc.) con su correspondiente configuración mínima funcional.

**Relación con los retos del s.XXI y los ODS:**
ODS 4 (Educación de calidad) y ODS 9 (Industria, innovación e infraestructura). Se fomenta la competencia digital y la autonomía técnica.

**Competencias Específicas y Criterios de Evaluación vinculados:**

- **Competencia Específica 2:** Diseñar, instalar, configurar y administrar sistemas informáticos en el entorno personal y de grupos de trabajo reducidos utilizándolos de manera segura y sostenible.
  - Criterios de evaluación: 5.2.1, 5.2.2, 5.2.3
- **Competencia Específica 4:** Aprovechar y utilizar de manera eficiente sistemas de información conectados en red para grupos de trabajo reducidos.
  - Criterios de evaluación: 4.2, 4.3, 4.4
- **Competencia Específica 5:** Ejercer una ciudadanía digital crítica, responsable y solidaria frente a los principales retos de una sociedad digitalizada.
  - Criterios de evaluación: 5.1, 5.2

**Saberes Básicos:**

- **Bloque 2:** Arquitectura y diseño de un ordenador. Instalación, configuración y administración de sistemas operativos (Linux). Sistemas operativos sobre máquinas virtuales. Instalación, configuración y administración de aplicaciones.
- **Bloque 4:** Uso adecuado de un servidor web. Instalación y configuración básica de un servidor web. Personalización servidor web. Configuración e instalación de complementos de gestores de contenidos (CMS, LMS, e-Commerce, Wikis). Servidores web y sistemas gestores de contenidos.

**Organización:**

| Secuenciación de actividades | Organización de espacios | Distribución del tiempo | Recursos y materiales | Medidas para la inclusión |
| :--- | :--- | :--- | :--- | :--- |
| **Actividad 1:** Servidor local: Mint en VirtualBox, XAMPP, base de datos y usuario específico, WordPress y plugins, web personal y copia .wpress. Hitos: VM y servicios (4 sesiones), CMS y permisos (4), personalización y plugins (5), copia y documentación (2). Justificar los recursos asignados a la VM. | Aula de informática. | 15 sesiones de 55 minutos | VirtualBox, ISO de Linux Mint, XAMPP for Linux, WordPress, Blocksy, Gutenberg / Elementor, All-in-One WP Migration, Bitwarden. | **DUA (representación):** Esquema de VM, servidor y base de datos. **TDAH / funciones ejecutivas:** Instalación por hitos con lista de comprobación. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a servidor local. **DUA (acción, expresión e implicación):** Comandos comentados y capturas de referencia, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |
| **Actividad 2:** Hosting remoto: InfinityFree, WordPress y una segunda aplicación compatible. Hitos: hosting y accesos (3 sesiones), instalación de las dos aplicaciones (5), escenario funcional de la segunda app (4), enlaces, documentación y comprobación (3). | Aula de informática. | 15 sesiones de 55 minutos | Navegador web, InfinityFree, Gestor de archivos del hosting y paquetes de instalación de WordPress y una segunda aplicación compatible, Bitwarden. | **DUA (representación):** Mapa de carpetas y pasos de instalación. **TDAH / funciones ejecutivas:** Una aplicación por fase. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a hosting. **DUA (acción, expresión e implicación):** Guion de configuración y tabla de verificación de enlaces, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |

**Instrumentos de recogida de información:**
Rúbricas de las actividades, aplicadas a los productos y explicaciones previstos en la secuencia; registro de observación y comprobación del desempeño durante las prácticas. Las entregas se realizan en Aules. La retroalimentación orientará la revisión y mejora del trabajo.

## SITUACIÓN DE APRENDIZAJE 2: Docker: nube privada y correo de laboratorio

**Contexto:**

| Personal | Educativo | Social | Profesional |
| :--- | :--- | :--- | :--- |
| Autonomía en la creación de entornos aislados. | Evolución del concepto de virtualización tradicional a contenedores. | Conciencia sobre la eficiencia de recursos informáticos. | Adquisición de competencias en tecnologías Cloud-Native y DevOps. |

**Descripción / Justificación:**
La actividad 1 desarrolla Nextcloud y MariaDB con Docker Compose sobre LliureX: verificación del entorno, archivo YAML, volúmenes, variables, despliegue y prueba de persistencia. Se completa con usuarios y permisos de colaboración y consulta guiada de la base de datos. Se añade una actividad 2 de correo electrónico de laboratorio: despliegue con Docker, dos cuentas y comprobación de envío SMTP y lectura IMAP. Se compara el consumo y la administración de máquinas virtuales y contenedores, justificando su uso.

**Relación con los retos del s.XXI y los ODS:**
ODS 9 (Innovación) y ODS 12 (Producción y consumo responsables) al optimizar el hardware mediante software.

**Competencias Específicas y Criterios de Evaluación vinculados:**

- **Competencia Específica 2:** Diseñar, instalar, configurar y administrar sistemas informáticos en el entorno personal y de grupos de trabajo reducidos utilizándolos de manera segura y sostenible.
  - Criterios de evaluación: 5.2.1, 5.2.3, 5.2.4
- **Competencia Específica 4:** Aprovechar y utilizar de manera eficiente sistemas de información conectados en red para grupos de trabajo reducidos.
  - Criterios de evaluación: 4.1, 4.4, 4.5
- **Competencia Específica 5:** Ejercer una ciudadanía digital crítica, responsable y solidaria frente a los principales retos de una sociedad digitalizada.
  - Criterios de evaluación: 5.2

**Saberes Básicos:**

- **Bloque 2:** Sistemas operativos para servidores. Instalación, configuración y administración de sistemas operativos sobre máquinas virtuales y contenedores. Herramientas de monitorización.
- **Bloque 4:** Espacio compartido de disco en una red. Instalación y configuración de un gestor de bases de datos en red. Uso y mantenimiento de bases de datos. Servidores web y sistemas gestores de contenidos. Servidor de correo, cuentas, SMTP e IMAP de laboratorio.

**Organización:**

| Secuenciación de actividades | Organización de espacios | Distribución del tiempo | Recursos y materiales | Medidas de respuesta educativa para la inclusión |
| :--- | :--- | :--- | :--- | :--- |
| **Actividad 1:** Nextcloud + MariaDB: verificar Docker y preparar el proyecto (4 sesiones), comprender y desplegar el YAML (6), configurar cuentas, compartición y consultar la base de datos (5), comprobar persistencia y resolver incidencias (5), documentar y demostrar (4). Se mantiene una entrega de la actividad. | Aula de informática | 24 sesiones de 55 minutos | LliureX, Docker Compose, Nextcloud, MariaDB y Bitwarden | **DUA (representación):** Esquema de servicios, puertos y volúmenes. **TDAH / funciones ejecutivas:** Separar despliegue, usuarios y persistencia. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a docker. **DUA (acción, expresión e implicación):** YAML comentado con indentación visible y ejemplos de diagnóstico, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |
| **Actividad 2:** Correo de laboratorio: desplegar el servidor y definir dos cuentas (2 sesiones), configurar cliente y comprobar envío y recepción en ambos sentidos (2), diagnosticar un fallo y documentar la demostración individual (2). | Aula de informática | 6 sesiones de 55 minutos | Docker Compose, GreenMail y Thunderbird | **DUA (representación):** Diagrama de envío SMTP y lectura IMAP. **TDAH / funciones ejecutivas:** Configurar y comprobar una cuenta cada vez. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a correo. **DUA (acción, expresión e implicación):** Tabla de puertos y credenciales ficticias con guía de diagnóstico, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |

**Instrumentos de recogida de información:**
Rúbricas de las actividades, aplicadas a los productos y explicaciones previstos en la secuencia; registro de observación y comprobación del desempeño durante las prácticas. Las entregas se realizan en Aules. La retroalimentación orientará la revisión y mejora del trabajo.

## SITUACIÓN DE APRENDIZAJE 3: Redes básicas: conexión y diagnóstico

**Contexto:**

| Personal | Educativo | Social | Profesional |
| :--- | :--- | :--- | :--- |
| Comprender la red doméstica. | Modelar una red pequeña y comprobar su funcionamiento. | Utilizar conexiones con seguridad. | Resolver incidencias básicas de conectividad. |

**Descripción / Justificación:**
Es la SdA más corta. Se diseña y configura una red pequeña en Packet Tracer, con pocos equipos, un switch y un router. Se trabajan direcciones IP, máscara, puerta de enlace y el papel de DHCP y DNS. Se comprueba la conectividad y se diagnostican errores sencillos de cableado o configuración. No se incluyen VLAN, enrutamiento dinámico ni ACL. El alumnado razona decisiones básicas de acceso y seguridad y contrasta el diagnóstico por parejas.

**Relación con los retos del s.XXI y los ODS:**
ODS 9 (Infraestructura resiliente) y ODS 10 (Reducción de desigualdades) mediante el acceso al conocimiento tecnológico avanzado.

**Competencias Específicas y Criterios de Evaluación vinculados:**

- **Competencia Específica 3:** Diseñar, configurar y administrar redes informáticas seguras para grupos de trabajo reducidos.
  - Criterios de evaluación: 3.1, 3.2, 3.3
- **Competencia Específica 5:** Ejercer una ciudadanía digital crítica, responsable y solidaria frente a los principales retos de una sociedad digitalizada.
  - Criterios de evaluación: 5.3

**Saberes Básicos:**

- **Bloque 3:** Modelos y protocolos de comunicación. Direccionamiento físico y lógico. Diseño, instalación y configuración de redes (Simuladores). Seguridad en redes cableadas e inalámbricas. Configuración y administración de enrutadores. Detección y solución de problemas en redes. Documentación técnica del diseño de una red.

**Organización:**

| Secuenciación de actividades | Organización de espacios | Distribución del tiempo | Recursos y materiales | Medidas de respuesta educativa para la inclusión |
| :--- | :--- | :--- | :--- | :--- |
| **Actividad 1:** Diseñar una red pequeña, elegir dispositivos y completar una tabla de direcciones. | Aula de informática | 3 sesiones de 55 minutos | Packet Tracer y esquema de ejemplo | **DUA (representación):** Dispositivos e IP mediante diagramas etiquetados. **TDAH / funciones ejecutivas:** Construcción por conexiones y comprobaciones. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a diseño de red. **DUA (acción, expresión e implicación):** Tabla de direccionamiento parcialmente cumplimentada, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |
| **Actividad 2:** Configurar conexiones, IP y puerta de enlace; comprobar el papel de DHCP y DNS y aplicar ajustes básicos de seguridad. | Aula de informática | 4 sesiones de 55 minutos | Packet Tracer | **DUA (representación):** Capturas de ajustes y rutas del tráfico. **TDAH / funciones ejecutivas:** Comprobar una configuración por paso. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a configuración de red. **DUA (acción, expresión e implicación):** Modelo de IP, máscara y puerta de enlace con glosario, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |
| **Actividad 3:** Diagnosticar y corregir un fallo de cable, IP o puerta de enlace; contrastar por parejas y entregar simulación e informe breve. | Aula de informática | 3 sesiones de 55 minutos | Packet Tracer y ficha de diagnóstico | **DUA (representación):** Mapa de posibles causas y síntomas. **TDAH / funciones ejecutivas:** Una hipótesis por intento. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a diagnóstico de red. **DUA (acción, expresión e implicación):** Lista de comprobación y contraste por parejas, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |

**Instrumentos de recogida de información:**
Rúbricas de las actividades, aplicadas a los productos y explicaciones previstos en la secuencia; registro de observación y comprobación del desempeño durante las prácticas. Las entregas se realizan en Aules. La retroalimentación orientará la revisión y mejora del trabajo.

## SITUACIÓN DE APRENDIZAJE 4: Programación con Python y desarrollo web

**Contexto:**

| Personal | Educativo | Social | Profesional |
| :--- | :--- | :--- | :--- |
| Creatividad en la resolución de problemas de software. | Integración de algoritmos avanzados con interfaces de usuario y bases de datos. | Crítica sobre el papel de la IA en la creación de software. | Preparación para el desarrollo de aplicaciones web complejas y robustas. |

**Descripción / Justificación:**
Repaso y ampliación de Python con funciones, listas y matrices, pruebas y persistencia de datos. Desarrollo de una aplicación web sencilla con Flask y conexión a MariaDB. Se conserva evidencia individual: explicar el código, modificar un requisito y corregir un error durante una comprobación en aula.

**Relación con los retos del s.XXI y los ODS:**
ODS 8 (Crecimiento económico y trabajo decente) y ODS 9 (Industria, innovación e infraestructura).

**Competencias Específicas y Criterios de Evaluación vinculados:**

- **Competencia Específica 1:** Analizar problemas de diferentes contextos y tipos y afrontar su resolución mediante el desarrollo de software, aplicando el pensamiento computacional.
  - Criterios de evaluación: 5.1.1, 5.1.2, 5.1.3
- **Competencia Específica 4:** Aprovechar y utilizar de manera eficiente sistemas de información conectados en red para grupos de trabajo reducidos.
  - Criterios de evaluación: 4.4
- **Competencia Específica 5:** Ejercer una ciudadanía digital crítica, responsable y solidaria frente a los principales retos de una sociedad digitalizada.
  - Criterios de evaluación: 5.1

**Saberes Básicos:**

- **Bloque 1:** Abstracción, secuenciación, algorítmica. Lenguajes compilados e interpretados. Estructuras de datos (matrices), funciones y procedimientos. Optimización y mantenimiento de software. Operaciones con bases de datos. Implicaciones éticas de la IA.

**Organización:**

| Secuenciación de actividades | Organización de espacios | Distribución del tiempo | Recursos y materiales | Medidas para la inclusión |
| :--- | :--- | :--- | :--- | :--- |
| **Actividad 1:** Repaso de Python, funciones y matrices; pequeñas soluciones con pruebas y operaciones SQL. Código y explicación de resultados. | Aula de informática. | 12 sesiones de 55 minutos | VS Code, Python, MySQL/MariaDB. | **DUA (representación):** Trazas de listas y matrices en tablas. **TDAH / funciones ejecutivas:** Problemas divididos en funciones pequeñas. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a python. **DUA (acción, expresión e implicación):** Ejemplos comentados y pruebas de entrada y salida, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |
| **Actividad 2:** Aplicación web sencilla con Flask y MariaDB: estructura inicial, consulta y modificación de datos, pruebas de funcionamiento y corrección de errores. | Aula de informática. | 12 sesiones de 55 minutos | Frameworks ligeros (Flask), HTML/CSS. | **DUA (representación):** Esquema navegador, aplicación y base de datos. **TDAH / funciones ejecutivas:** Hitos de consulta y modificación separados. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a flask. **DUA (acción, expresión e implicación):** Proyecto modular inicial y guía de pruebas, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |
| **Actividad 3:** Mejora y validación de la aplicación. Comprobación individual: explicar código, modificar un requisito y corregir un error; documentar las ayudas empleadas. | Aula de informática. | 6 sesiones de 55 minutos | IA generativas, repositorios de código. | **DUA (representación):** Comparación visual del código y sus resultados. **TDAH / funciones ejecutivas:** Un requisito o error por comprobación. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a depuración. **DUA (acción, expresión e implicación):** Tiempo de preparación y explicación oral con ejecución del código, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |

**Instrumentos de recogida de información:**
Rúbricas de las actividades, aplicadas a los productos y explicaciones previstos en la secuencia; registro de observación y comprobación del desempeño durante las prácticas. Las entregas se realizan en Aules. La retroalimentación orientará la revisión y mejora del trabajo. En programación, la comprobación individual incluye explicar, modificar y depurar el código.

## SITUACIÓN DE APRENDIZAJE 5: Ciberseguridad y ética: Los desafíos de la sociedad digital

**Contexto:**

| Personal | Educativo | Social | Profesional |
| :--- | :--- | :--- | :--- |
| Protección de la identidad y privacidad digital. | Visión holística de la informática como motor social. | Responsabilidad ciudadana en un entorno digitalizado. | Ética profesional y cumplimiento de normativas de seguridad (RGPD). |

**Descripción / Justificación:**
Unidad transversal que consolida los conocimientos de sistemas, redes y programación desde la óptica de la seguridad y la ética. Se analizan estrategias de defensa, auditoría de huella digital, el impacto de las comunidades de software libre y la sostenibilidad de los sistemas informáticos actuales.

**Competencias Específicas y Criterios de Evaluación vinculados:**

- **Competencia Específica 5:** Ejercer una ciudadanía digital crítica, responsable y solidaria frente a los principales retos de una sociedad digitalizada.
  - Criterios de evaluación: 5.1, 5.2, 5.3, 5.4

**Saberes Básicos:**

- **Bloque 1:** Propiedad intelectual. Comunidades de software libre.
- **Bloque 2:** Implicaciones del uso de dispositivos sobre el bienestar, salud y sostenibilidad.
- **Bloque 4:** Gestión de identidad digital. Ciberconvivencia y etiqueta digital. Privacidad y protección de datos.

**Organización:**

| Secuenciación de actividades | Organización de espacios | Distribución del tiempo | Recursos y materiales | Medidas para la inclusión |
| :--- | :--- | :--- | :--- | :--- |
| **Actividad 1:** Auditoría de seguridad: Criptografía y protección de servicios. | Aula de informática. | 4 sesiones de 55 minutos | Herramientas de análisis de seguridad, OpenSSL. | **DUA (representación):** Infografías de amenazas y medidas. **TDAH / funciones ejecutivas:** Análisis separado de cada servicio. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a seguridad. **DUA (acción, expresión e implicación):** Casos guiados y lista de comprobación accesible, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |
| **Actividad 2:** Debate: Ética en la IA, Big Data y brecha digital. | Aula polivalente. | 4 sesiones de 55 minutos | Artículos científicos, textos legales (RGPD). | **DUA (representación):** Textos breves y fuentes con lectura apoyada. **TDAH / funciones ejecutivas:** Turnos anticipados y preparación de argumentos. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a debate ético. **DUA (acción, expresión e implicación):** Guion de intervención oral o aportación escrita equivalente, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |
| **Actividad 3:** Proyecto de difusión: Estrategias de seguridad ciudadana digital. | Aula de informática / Taller. | 4 sesiones de 55 minutos | Herramientas de diseño multimedia. | **DUA (representación):** Ejemplos accesibles de carteles y presentaciones. **TDAH / funciones ejecutivas:** Hitos de guion, diseño y revisión. **Dislexia / DEA y acceso lingüístico:** lectura apoyada, vocabulario anticipado y consignas breves vinculadas a difusión. **DUA (acción, expresión e implicación):** Elección del formato y recursos accesibles con roles rotativos, retroalimentación por hitos y explicación mediante texto, esquema o demostración, manteniendo el aprendizaje evaluado. **Apoyo individualizado:** ajustar ayudas y tiempos a las necesidades detectadas y al plan de actuación, cuando corresponda. |

**Instrumentos de recogida de información:**
Rúbricas de las actividades, aplicadas a los productos y explicaciones previstos en la secuencia; registro de observación y comprobación del desempeño durante las prácticas. Las entregas se realizan en Aules. La retroalimentación orientará la revisión y mejora del trabajo.

## Matriz de Competencias y Criterios vs Situaciones de Aprendizaje

Se conserva la numeración impresa en el currículo de 2.º de Bachillerato: CE 1 usa 5.1.x; CE 2, 5.2.x; CE 3, 3.x; CE 4, 4.x; y CE 5, 5.x. El criterio 4.5 corresponde al despliegue de un servidor de correo electrónico.

| Criterio de evaluación | SdA 1 | SdA 2 | SdA 3 | SdA 4 | SdA 5 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| 3.1 |  |  | ✓ |  |  |
| 3.2 |  |  | ✓ |  |  |
| 3.3 |  |  | ✓ |  |  |
| 4.1 |  | ✓ |  |  |  |
| 4.2 | ✓ |  |  |  |  |
| 4.3 | ✓ |  |  |  |  |
| 4.4 | ✓ | ✓ |  | ✓ |  |
| 4.5 |  | ✓ |  |  |  |
| 5.1 | ✓ |  |  | ✓ | ✓ |
| 5.1.1 |  |  |  | ✓ |  |
| 5.1.2 |  |  |  | ✓ |  |
| 5.1.3 |  |  |  | ✓ |  |
| 5.2 | ✓ | ✓ |  |  | ✓ |
| 5.2.1 | ✓ | ✓ |  |  |  |
| 5.2.2 | ✓ |  |  |  |  |
| 5.2.3 | ✓ | ✓ |  |  |  |
| 5.2.4 |  | ✓ |  |  |  |
| 5.3 |  |  | ✓ |  | ✓ |
| 5.4 |  |  |  |  | ✓ |
