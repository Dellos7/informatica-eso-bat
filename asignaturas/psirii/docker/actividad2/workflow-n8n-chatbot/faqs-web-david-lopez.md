# Base de conocimiento y FAQs para Qdrant — Web y tienda de David López Castellote

> **Fuente:** `https://staging-0669-cervezasbrancaltest1.wpcomstaging.com/`
> **Uso:** Estos textos ya están cargados directamente dentro del nodo **`Datos de mi web y tienda`** del archivo `workflow-chat-wordpress-definitivo.json` (en los 5 campos String: `sobre_mi`, `catalogo_productos`, `envio_y_pagos`, `contacto_y_soporte` y `faqs_web_y_tienda`), listos para vectorizarse en la colección `mi_web_tienda` de Qdrant con un solo clic. También puedes utilizar este documento como referencia o para ampliar la colección en el futuro.

---

## 1. Sobre David López Castellote (Perfil, formación y experiencia)

**¿Quién es David López Castellote?**
Es Profesor de Informática e Ingeniero Informático ubicado en Castellón de la Plana (Comunitat Valenciana), adscrito al Departamento de Informática y Comunicaciones. Combina su trayectoria previa como programador e ingeniero de software en la empresa privada con la docencia y la innovación educativa.

**¿Qué formación académica y certificaciones tiene?**
- **2013–2017:** Grado en Ingeniería Informática por la Universitat Jaume I (UJI), con base en ingeniería de software, arquitectura de sistemas, algoritmia y bases de datos.
- **2018:** Certificado C2 (Nivel Superior) de Valenciano por la Junta Qualificadora.
- **2019:** Certificaciones de idiomas: Inglés B2 (*First Certificate*) y Francés B1 (además de español materno).

**¿Cuál es su experiencia profesional y docente?**
Cuenta con más de 6 años de experiencia y más de 30 proyectos TI:
- **2017–2019:** Programador de Software en el sector privado (software empresarial, integración de bases de datos y aplicaciones web).
- **2019–2021:** Ingeniero de Software Senior en el sector privado (arquitecturas modulares, automatización de procesos y despliegues en producción).
- **2021–2022:** Especialización en Redes y Docker (infraestructuras contenerizadas, redes y protocolos).
- **2022–2024:** Profesor de Informática y Tecnología (Linux Mint, terminal, Python y diseño web con WordPress).
- **2024–presente:** Docencia y aprendizaje continuo con metodologías activas orientadas al mercado laboral.

**¿Cuáles son sus principales competencias técnicas y materias?**
- Desarrollo Web, WordPress, WooCommerce y APIs REST (98%) · HTML5 y CSS3 (96%).
- Linux Mint, terminal y scripting en Bash (95%).
- Programación y automatización en Python (92%).
- Redes de computadores, protocolos TCP/IP y diagnóstico (90%).
- Docker, Docker Compose y DevOps (88%).

**¿Qué aficiones o facetas personales comparte en su web?**
Idiomas y comunicación intercultural (habla 4 idiomas), deporte y fútbol (trabajo en equipo, estrategia y constancia), rutas de montaña y senderismo en la naturaleza, y cariño por los animales.

---

## 2. Catálogo de productos de la tienda online

**¿Qué productos hay disponibles en la tienda y cuánto cuestan?**
La tienda online (`/tienda/`) ofrece 4 infoproductos educativos y recursos técnicos digitales:

1. **Chuletario de Puertos de Red y Comandos de Diagnóstico — 0,00 € (GRATIS)**
   - *Categoría:* Plantillas y Recursos TIC.
   - *Qué incluye:* Hoja de referencia rápida (*Cheat Sheet*) en PDF con los puertos estándar más usados (**21 TCP** FTP, **22 TCP** SSH/SFTP, **53 UDP/TCP** DNS, **80 TCP** HTTP, **443 TCP** HTTPS, **3389 TCP** RDP) y comandos de diagnóstico de red (`ping -c 4`, `traceroute`, `ip a` / `ifconfig`, `ss -tulpn` / `netstat`, `dig +short`, `curl -I`).
   - *Ideal para:* Prácticas de laboratorio, exámenes o intervenciones técnicas rápidas.

2. **Plantilla de Arquitectura Docker & Microservicios — 3,99 €**
   - *Categoría:* Plantillas y Recursos TIC.
   - *Qué incluye:* Plantilla modular y comentada para entornos de desarrollo y producción con un archivo `docker-compose.yml` optimizado (Nginx, PHP-FPM y MariaDB), un `Dockerfile` multi-etapa ligero sobre Alpine Linux, y configuración de volúmenes persistentes y redes aisladas.

3. **Guía Práctica de Comandos Linux Mint y Bash — 4,99 €**
   - *Categoría:* Ebooks y Manuales Técnicos.
   - *Dirigido a:* Estudiantes de Informática (PSIR, Redes, Sistemas), desarrolladores y administradores junior que usan Debian/Ubuntu o Linux Mint.
   - *Temario en 4 módulos:*
     - **Módulo 1 (Fundamentos y navegación):** Jerarquía FHS, `cd`, `ls`, `pwd`, `man` y atajos de terminal.
     - **Módulo 2 (Archivos, filtros y tuberías):** `cp`, `mv`, `rm`, `find`, `grep` y pipes (`|`).
     - **Módulo 3 (Permisos y seguridad):** `chmod`, `chown`, `sudo` y `umask`.
     - **Módulo 4 (Procesos y automatización):** `ps`, `top`, `htop`, `kill`, `nice`, `systemctl` y `cron`.
   - *Requisitos previos:* Un equipo con Linux Mint (físico o en máquina virtual con VirtualBox/KVM).

4. **Pack de Scripts en Python para Automatización de Servidores — 7,99 €**
   - *Categoría:* Scripts y Automatización.
   - *Qué incluye (archivo `.zip`):*
     - `backup_auto.py`: copias de seguridad incrementales con rotación automática, compresión `tar.gz` y envío opcional de alertas por correo.
     - `disk_monitor.py`: monitorización de discos con umbrales configurables y alertas cuando el espacio libre baja del 15%.
     - `apache_log_parser.py`: analizador de logs de Apache/Nginx para detectar IPs sospechosas, errores 4xx/5xx y endpoints más consultados.
     - `README.md`: guía paso a paso de instalación de dependencias, permisos y programación en `crontab`.
   - *Requisitos técnicos:* Python 3.8 o superior y permisos de superusuario en Linux.

**¿Por qué aparece un producto llamado «Cerveza Artesanal Brancal Hazy IPA (Test)» a 3,50 €?**
Es únicamente un artículo de prueba técnica generado durante el desarrollo del entorno de staging y no forma parte del catálogo formativo real de la tienda.

---

## 3. Descuentos, entrega y compras

**¿Hay algún cupón de descuento para estudiantes?**
Sí. Existe un cupón exclusivo del **20% de descuento para estudiantes** válido en todos los recursos formativos, manuales y scripts de la tienda usando el código **`ESTUDIANTE20`** al finalizar la compra.

**¿Cómo se entregan los productos? ¿Hay gastos de envío?**
Todos los recursos formativos del catálogo son infoproductos digitales (PDF, manuales, plantillas Docker y archivos `.zip` con scripts), por lo que no requieren envío físico.

**¿Qué hago si tengo un problema con una compra, factura, método de pago o devolución?**
En la web no hay publicadas condiciones detalladas sobre facturación o devoluciones; ante cualquier duda o incidencia con un pedido debes escribir a **`david.lopez@edu.gva.es`** o enviar tu consulta mediante el formulario de contacto de la web.

---

## 4. Contacto, GitHub y tutorías

**¿Cómo puedo contactar con David López Castellote?**
- **Correo institucional GVA:** `david.lopez@edu.gva.es` (para alumnos, familias y dudas sobre asignaturas, infoproductos o proyectos).
- **Formulario directo en la web:** En la sección *Contacto* (`#contacto`) indicando nombre y apellidos, correo electrónico, asunto y mensaje.

**¿Cuál es el horario de tutorías?**
De **lunes a viernes por las mañanas**, siempre con **cita previa concertada telemáticamente** (por correo electrónico o formulario).

**¿Dónde puedo ver sus proyectos de código abierto y repositorios?**
En su perfil oficial de GitHub: `https://github.com/dlopezcastellote`.

**¿Qué cosas NO se atienden directamente desde el chat?**
La reserva formal de tutorías, soporte técnico privado en servidores propios, presupuestos a medida o incidencias concretas de pedidos/facturas deben tramitarse escribiendo a `david.lopez@edu.gva.es` o a través del formulario de contacto de la web.
