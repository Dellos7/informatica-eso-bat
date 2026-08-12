# Programación de Aula de Programación, Redes y Sistemas Informáticos II, 2º Bachillerato, 2026-27

## Distribución temporal

| Situación de Aprendizaje | Número de Sesiones Totales | Trimestre |
| :--- | :---: | :---: |
| 1. Despliegue de servicios web: De la máquina virtual a la nube | 30 | 1º |
| 2. Contenerización y orquestación: Eficiencia con Docker | 30 | 1º / 2º |
| 3. Arquitecturas de red simuladas: Diseño profesional con Packet Tracer | 30 | 2º |
| 4. Desarrollo Full-Stack: Programación avanzada asistida por IA | 35 | 3º |
| 5. Ciberseguridad y ética: Los desafíos de la sociedad digital | 15 | 3º |
| **TOTAL** | **140** | |

---

## SITUACIÓN DE APRENDIZAJE 1: Despliegue de servicios web: De la máquina virtual a la nube

**Contexto:**
| Personal | Educativo | Social | Profesional |
| :--- | :--- | :--- | :--- |
| Capacidad para autogestionar un entorno de publicación digital. | Integración de sistemas operativos, bases de datos y servidores web. | Comprensión de los mecanismos de publicación y presencia en la red. | Simulación de roles de administrador de sistemas y gestor de contenidos (CMS). |

**Descripción / Justificación:**
En esta unidad el alumnado aprenderá a montar un entorno de servidor completo partiendo de la virtualización. En una primera fase local, se instalará Linux Mint sobre una máquina virtual en VirtualBox, configurando el stack XAMPP para dar soporte a un CMS WordPress maquetado con Blocksy (Gutenberg o Elementor) para la creación de una web personal estilo CV, realizando copias de seguridad mediante All-in-One WP Migration y gestionando credenciales con Bitwarden. En una segunda fase en la nube, se realizará el despliegue en un hosting remoto gratuito (InfinityFree) mediante el autoinstalador Softaculous, publicando dos aplicaciones web autónomas (WordPress básico y una segunda aplicación a elección del alumnado como Moodle, PrestaShop, DokuWiki, etc.) con su correspondiente configuración mínima funcional.

**Relación con los retos del s.XXI y los ODS:**
ODS 4 (Educación de calidad) y ODS 9 (Industria, innovación e infraestructura). Se fomenta la competencia digital y la autonomía técnica.

**Competencias Específicas y Criterios de Evaluación vinculados:**
- **Competencia Específica 2:** Diseñar, instalar, configurar y administrar sistemas informáticos...
  - Criterios de evaluación: 5.2.1, 5.2.2, 5.2.3.
- **Competencia Específica 4:** Aprovechar y utilizar de manera eficiente sistemas de información conectados en red...
  - Criterios de evaluación: 4.2, 4.3, 4.4, 4.5.
- **Competencia Específica 5:** Ejercer una ciudadanía digital crítica...
  - Criterios de evaluación: 5.5.1, 5.5.2.

**Saberes Básicos:**
- **Bloque 2:** Arquitectura y diseño de un ordenador. Instalación, configuración y administración de sistemas operativos (Linux). Sistemas operativos sobre máquinas virtuales. Instalación, configuración y administración de aplicaciones.
- **Bloque 4:** Uso adecuado de un servidor web. Instalación y configuración básica de un servidor web. Personalización servidor web. Configuración e instalación de complementos de gestores de contenidos (CMS, LMS, e-Commerce, Wikis). Servidores web y sistemas gestores de contenidos.

**Organización:**
| Secuenciación de actividades | Organización de espacios | Distribución del tiempo | Recursos y materiales | Medidas para la inclusión |
| :--- | :--- | :--- | :--- | :--- |
| **Actividad 1:** Entorno de servidor local: Virtualización con Linux Mint, Stack XAMPP y WordPress. | Aula de informática. | 15 sesiones. | VirtualBox, ISO de Linux Mint, XAMPP for Linux, WordPress, Blocksy, Gutenberg / Elementor, All-in-One WP Migration, Bitwarden. | Guías visuales paso a paso, plantillas adaptadas y apoyo en parejas heterogéneas. |
| **Actividad 2:** Despliegue en hosting remoto (InfinityFree) e instalación de aplicaciones web con Softaculous. | Aula de informática. | 15 sesiones. | Navegador web, InfinityFree, Softaculous Apps Installer (WordPress + 2ª app libre: Moodle, PrestaShop, DokuWiki...), Bitwarden. | Documentación técnica guiada, catálogo simplificado de apps e instrucciones paso a paso para la configuración mínima funcional. |

**Instrumentos de recogida de información:**
Rúbrica de configuración del servidor local y despliegue remoto, entrega en Aules de documentos con capturas de pantalla, archivos de copia de seguridad (.wpress), verificación de enlaces públicos y comprobación directa en aula.

---

## SITUACIÓN DE APRENDIZAJE 2: Contenerización y orquestación: Eficiencia con Docker

**Contexto:**
| Personal | Educativo | Social | Profesional |
| :--- | :--- | :--- | :--- |
| Autonomía en la creación de entornos aislados. | Evolución del concepto de virtualización tradicional a contenedores. | Conciencia sobre la eficiencia de recursos informáticos. | Adquisición de competencias en tecnologías Cloud-Native y DevOps. |

**Descripción / Justificación:**
Tras dominar las máquinas virtuales (MV), el alumnado profundizará en las ventajas de la contenerización con Docker. Se analizarán las diferencias de rendimiento y arquitectura entre MV y contenedores. Se utilizará **Docker Compose** para orquestar un entorno multiservicio profesional que incluya un servidor web (Nginx), un gestor de bases de datos (MariaDB) y una plataforma de nube privada (Nextcloud), facilitando la comprensión de la interoperabilidad de servicios.

**Relación con los retos del s.XXI y los ODS:**
ODS 9 (Innovación) y ODS 12 (Producción y consumo responsables) al optimizar el hardware mediante software.

**Competencias Específicas y Criterios de Evaluación vinculados:**
- **Competencia Específica 2:** Diseñar, instalar, configurar y administrar sistemas informáticos...
  - Criterios de evaluación: 5.2.1, 5.2.2, 5.2.4 (Identificación de incidencias).
- **Competencia Específica 4:** Aprovechar y utilizar de manera eficiente sistemas de información conectados en red...
  - Criterios de evaluación: 4.1, 4.4, 4.5 (Despliegue de servicios).

**Saberes Básicos:**
- **Bloque 2:** Sistemas operativos para servidores. Instalación, configuración y administración de sistemas operativos sobre máquinas virtuales y contenedores. Herramientas de monitorización.
- **Bloque 4:** Espacio compartido de disco en una red. Instalación y configuración de un gestor de bases de datos en red. Uso y mantenimiento de bases de datos. Servidores web y sistemas gestores de contenidos.

**Organización:**
| Secuenciación de actividades | Organización de espacios | Distribución del tiempo | Recursos y materiales | Medidas para la inclusión |
| :--- | :--- | :--- | :--- | :--- |
| **Actividad 1:** Comparativa técnica: MV vs Contenedores. Instalación de Docker Engine. | Aula de informática. | 8 sesiones. | Docker Desktop / Linux Docker, Terminal. | Uso de organizadores gráficos comparativos para facilitar la asimilación conceptual. |
| **Actividad 2:** Orquestación con Docker Compose: El stack Nginx + MariaDB + Nextcloud. | Aula de informática. | 12 sesiones. | Archivos YAML, Docker Hub. | Suministro de fragmentos de código (snippets) base para su modificación. |
| **Actividad 3:** Gestión de volúmenes, redes internas y persistencia de datos en contenedores. | Aula de informática. | 10 sesiones. | Comandos Docker CLI, inspección de redes. | Metodología de "aprender del error" mediante la resolución dirigida de incidencias. |

**Instrumentos de recogida de información:**
Prueba de desempeño de orquestación, portafolio de configuraciones YAML, observación directa.

---

## SITUACIÓN DE APRENDIZAJE 3: Arquitecturas de red simuladas: Diseño profesional con Packet Tracer

**Contexto:**
| Personal | Educativo | Social | Profesional |
| :--- | :--- | :--- | :--- |
| Seguridad en la infraestructura de red doméstica. | Capacidad de abstracción y modelado de sistemas complejos. | Reflexión sobre la arquitectura de la red global (Internet). | Diseño y administración de redes empresariales en entornos virtuales. |

**Descripción / Justificación:**
Ante la ausencia de material físico, se utilizará el simulador **Cisco Packet Tracer** para diseñar infraestructuras de red complejas. El alumnado aprenderá a configurar servicios críticos en entornos simulados: enrutamiento estático y dinámico, creación de VLANs para segmentar departamentos, configuración de servidores DHCP/DNS y establecimiento de listas de control de acceso (ACL) para la seguridad perimetral.

**Relación con los retos del s.XXI y los ODS:**
ODS 9 (Infraestructura resiliente) y ODS 10 (Reducción de desigualdades) mediante el acceso al conocimiento tecnológico avanzado.

**Competencias Específicas y Criterios de Evaluación vinculados:**
- **Competencia Específica 3:** Diseñar, configurar y administrar redes informáticas seguras...
  - Criterios de evaluación: 5.3.1, 5.3.2, 5.3.3.
- **Competencia Específica 5:** Ejercer una ciudadanía digital crítica...
  - Criterios de evaluación: 5.5.3 (Gestión de situaciones de incertidumbre).

**Saberes Básicos:**
- **Bloque 3:** Modelos y protocolos de comunicación. Direccionamiento físico y lógico. Diseño, instalación y configuración de redes (Simuladores). Seguridad en redes cableadas e inalámbricas. Configuración y administración de enrutadores. Detección y solución de problemas en redes. Documentación técnica del diseño de una red.

**Organización:**
| Secuenciación de actividades | Organización de espacios | Distribución del tiempo | Recursos y materiales | Medidas para la inclusión |
| :--- | :--- | :--- | :--- | :--- |
| **Actividad 1:** Diseño de redes conmutadas y segmentación mediante VLANs. | Aula de informática. | 10 sesiones. | Cisco Packet Tracer. | Refuerzo visual mediante diagramas de colores para cada segmento de red. |
| **Actividad 2:** Enrutamiento IP y servicios de infraestructura (DHCP, DNS, HTTP). | Aula de informática. | 10 sesiones. | Cisco Packet Tracer, esquemas de direccionamiento. | Uso de tablas de direccionamiento pre-rellenadas para reducir carga cognitiva. |
| **Actividad 3:** Seguridad perimetral: Configuración de ACLs y simulación de ataques. | Aula de informática. | 10 sesiones. | Herramientas de simulación de tráfico. | Descomposición de la configuración de seguridad en tareas atómicas y guiadas. |

**Instrumentos de recogida de información:**
Archivos de simulación (.pkt) evaluados mediante rúbrica, informes de arquitectura de red, test de diagnóstico de red.

---

## SITUACIÓN DE APRENDIZAJE 4: Desarrollo Full-Stack: Programación avanzada asistida por IA

**Contexto:**
| Personal | Educativo | Social | Profesional |
| :--- | :--- | :--- | :--- |
| Creatividad en la resolución de problemas de software. | Integración de algoritmos avanzados con interfaces de usuario y bases de datos. | Crítica sobre el papel de la IA en la creación de software. | Preparación para el desarrollo de aplicaciones web complejas y robustas. |

**Descripción / Justificación:**
Se abordará la programación avanzada en Python, incluyendo el manejo de estructuras de datos complejas (matrices) y la conexión con bases de datos SQL de forma dinámica. El alumnado integrará el uso de herramientas de IA generativa (GitHub Copilot, ChatGPT) para optimizar el código, depurar errores y documentar aplicaciones, siempre bajo un prisma crítico y de validación humana.

**Relación con los retos del s.XXI y los ODS:**
ODS 8 (Crecimiento económico y trabajo decente) y ODS 9 (Industria, innovación e infraestructura).

**Competencias Específicas y Criterios de Evaluación vinculados:**
- **Competencia Específica 1:** Analizar problemas... mediante el desarrollo de software...
  - Criterios de evaluación: 5.1.1, 5.1.2, 5.1.3.
- **Competencia Específica 4:** Aprovechar y utilizar de manera eficiente sistemas de información...
  - Criterios de evaluación: 4.4 (Servidor de bases de datos).
- **Competencia Específica 5:** Ejercer una ciudadanía digital crítica...
  - Criterios de evaluación: 5.5.1 (Integrar recursos digitales).

**Saberes Básicos:**
- **Bloque 1:** Abstracción, secuenciación, algorítmica. Lenguajes compilados e interpretados. Estructuras de datos (matrices), funciones y procedimientos. Optimización y mantenimiento de software. Operaciones con bases de datos. Implicaciones éticas de la IA.

**Organización:**
| Secuenciación de actividades | Organización de espacios | Distribución del tiempo | Recursos y materiales | Medidas para la inclusión |
| :--- | :--- | :--- | :--- | :--- |
| **Actividad 1:** Algoritmia avanzada en Python: Matrices y persistencia SQL. | Aula de informática. | 15 sesiones. | VS Code, Python, MySQL/MariaDB. | Andamiaje mediante "Pair Programming" y tutoría entre iguales. |
| **Actividad 2:** Desarrollo Full-Stack: Integrando Python (Backend) con Web (Frontend). | Aula de informática. | 10 sesiones. | Frameworks ligeros (Flask), HTML/CSS. | Proporcionar ejemplos modulares y bibliotecas de código de referencia. |
| **Actividad 3:** Taller de IA aplicada al desarrollo: Prompt Engineering y validación de código. | Aula de informática. | 10 sesiones. | IA generativas, repositorios de código. | Debates sobre el uso ético y fomento de la autorregulación en el aprendizaje. |

**Instrumentos de recogida de información:**
Proyecto final de aplicación web, rúbrica de calidad de código, defensa oral del uso de herramientas de IA.

---

## SITUACIÓN DE APRENDIZAJE 5: Ciberseguridad y ética: Los desafíos de la sociedad digital

**Contexto:**
| Personal | Educativo | Social | Profesional |
| :--- | :--- | :--- | :--- |
| Protección de la identidad y privacidad digital. | Visión holística de la informática como motor social. | Responsabilidad ciudadana en un entorno digitalizado. | Ética profesional y cumplimiento de normativas de seguridad (RGPD). |

**Descripción / Justificación:**
Unidad transversal que consolida los conocimientos de sistemas, redes y programación desde la óptica de la seguridad y la ética. Se analizan estrategias de defensa, auditoría de huella digital, el impacto de las comunidades de software libre y la sostenibilidad de los sistemas informáticos actuales.

**Competencias Específicas y Criterios de Evaluación vinculados:**
- **Competencia Específica 5:** Ejercer una ciudadanía digital crítica, responsable y solidaria...
  - Criterios de evaluación: 5.5.1, 5.5.2, 5.5.3, 5.5.4.

**Saberes Básicos:**
- **Bloque 1:** Propiedad intelectual. Comunidades de software libre.
- **Bloque 2:** Implicaciones del uso de dispositivos sobre el bienestar, salud y sostenibilidad.
- **Bloque 4:** Gestión de identidad digital. Ciberconvivencia y etiqueta digital. Privacidad y protección de datos.

**Organización:**
| Secuenciación de actividades | Organización de espacios | Distribución del tiempo | Recursos y materiales | Medidas para la inclusión |
| :--- | :--- | :--- | :--- | :--- |
| **Actividad 1:** Auditoría de seguridad: Criptografía y protección de servicios. | Aula de informática. | 5 sesiones. | Herramientas de análisis de seguridad, OpenSSL. | Materiales en formatos accesibles y vídeos subtitulados sobre ciberhigiene. |
| **Actividad 2:** Debate: Ética en la IA, Big Data y brecha digital. | Aula polivalente. | 5 sesiones. | Artículos científicos, textos legales (RGPD). | Técnicas de debate cooperativo con roles adaptados a las capacidades del alumnado. |
| **Actividad 3:** Proyecto de difusión: Estrategias de seguridad ciudadana digital. | Aula de informática / Taller. | 5 sesiones. | Herramientas de diseño multimedia. | Flexibilidad en los modos de expresión y representación de la información (DUA). |

**Instrumentos de recogida de información:**
Ensayos críticos, proyecto de concienciación digital, rúbrica de participación en debates.

---

## Matriz de Competencias y Criterios vs Situaciones de Aprendizaje

| Criterio de Evaluación (2º Bach) | SdA 1 | SdA 2 | SdA 3 | SdA 4 | SdA 5 |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **5.1.1.** Resolver problemas complejos (Algoritmos/Estructuras) | | | | ✓ | |
| **5.1.2.** Programar aplicaciones autónomas | | | | ✓ | |
| **5.1.3.** Evaluar, optimizar y mantener aplicaciones | | | | ✓ | |
| **5.2.1.** Razonar diseño de sistemas y sostenibilidad | ✓ | ✓ | | | |
| **5.2.2.** Instalar y configurar sistemas operativos | ✓ | ✓ | | | |
| **5.2.3.** Administrar aplicaciones en grupos de trabajo | ✓ | ✓ | | | |
| **5.2.4.** Identificar incidencias y proponer soluciones | | ✓ | | | |
| **5.3.1.** Diseñar redes evaluando alternativas | | | ✓ | | |
| **5.3.2.** Administrar redes para grupos de trabajo | | | ✓ | | |
| **5.3.3.** Identificar incidencias en redes de forma crítica | | | ✓ | | |
| **4.1.** Configurar servicios compartidos y privilegios | | ✓ | | | |
| **4.2.** Instalar y configurar servidor web de forma segura | ✓ | | | | |
| **4.3.** Añadir complementos a gestores de contenidos | ✓ | | | | |
| **4.4.** Instalar y utilizar servidores de bases de datos | ✓ | ✓ | | ✓ | |
| **4.5.** Desplegar servidor de correo u otros servicios | ✓ | ✓ | | | |
| **5.5.1.** Integrar recursos digitales de manera autónoma | ✓ | | | ✓ | ✓ |
| **5.5.2.** Crear y difundir documentación técnica | ✓ | | | | ✓ |
| **5.5.3.** Gestionar incertidumbre y responsabilidad | | | ✓ | | ✓ |
| **5.5.4.** Diseñar estrategias de seguridad y bienestar | | | | | ✓ |