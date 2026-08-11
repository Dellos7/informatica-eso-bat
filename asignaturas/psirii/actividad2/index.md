---
layout: default
title: Actividad 2. Despliegue en hosting remoto con InfinityFree
description: Registro en InfinityFree e instalación de 2 aplicaciones web autónomas (WordPress y otra app a elección mediante Softaculous)
---

# Actividad 2. Despliegue en hosting remoto (InfinityFree) e instalación de aplicaciones web

En esta actividad darás el salto del entorno local a la publicación real en la nube. Te darás de alta en el proveedor de hosting gratuito **InfinityFree** y utilizarás el autoinstalador **Softaculous** para desplegar y administrar 2 aplicaciones web con sus respectivos subdominios públicos.

---

## 🎯 Objetivos de la actividad

1. **Gestión de Hosting Web:** Registrarse y configurar una cuenta de alojamiento remoto en **InfinityFree**.
2. **Administración de Subdominios y DNS:** Crear subdominios gratuitos para publicar servicios web accesibles desde Internet.
3. **Despliegue de CMS (App 1):** Instalar y personalizar un **WordPress básico** accesible mediante URL pública.
4. **Exploración e Implementación de Servicios Web (App 2):** Seleccionar, instalar y configurar una **segunda aplicación web libre** (como Moodle, Joomla, phpBB, PrestaShop, DokuWiki...) utilizando el instalador **Softaculous**.
5. **Configuración funcional:** Demostrar la utilidad práctica de la segunda aplicación mediante un escenario básico de uso real (crear un curso, un foro, un producto, una entrada de wiki, etc.).
6. **Gestión de Seguridad:** Registrar en **Bitwarden** todos los usuarios y claves del panel de control de InfinityFree, FTP, bases de datos y paneles de administración web.

---

## 📌 Paso a paso detallado

### Paso 1: Registro en InfinityFree y almacenamiento de credenciales en Bitwarden
1. Accede al sitio oficial del hosting gratuito: [InfinityFree](https://www.infinityfree.com/).
2. Registra una nueva cuenta de usuario con tu correo electrónico.
3. Guarda en **Bitwarden** las credenciales de acceso creadas para tu cuenta de InfinityFree.

---

### Paso 2: Creación de la cuenta de hosting y subdominios
1. Dentro del panel (*Dashboard*) de InfinityFree, crea una nueva **Cuenta de Hosting** (*Hosting Account*).
2. Elige el nombre para tus subdominios gratuitos (por ejemplo: `tunombre-wp.infinityfreeapp.com` o `tunombre-app2.infinityfreeapp.com`).
3. Genera una contraseña segura para la cuenta de cPanel / control panel y guárdala inmediatamente en **Bitwarden**.
4. Accede al **Control Panel** (cPanel) de InfinityFree.

---

### Paso 3: Instalación de la Aplicación 1 (WordPress básico)
1. En el cPanel de InfinityFree, busca y abre la herramienta **Softaculous Apps Installer**.
2. Selecciona **WordPress** y pulsa en **Install Now**.
3. Configura los parámetros de instalación:
   - **URL de instalación:** Selecciona el subdominio gratuito creado (ejemplo: `http://tunombre-wp.infinityfreeapp.com`).
   - **Título y descripción del sitio:** Personalízalos con tu nombre.
   - **Cuenta de administrador:** Define un usuario y contraseña seguros (guárdalos en Bitwarden).
   - **Lenguaje:** Español.
4. Haz clic en **Install** y espera a que finalice el proceso.
5. Accede a la URL pública de tu WordPress y a su panel de administración (`/wp-admin`) para comprobar que funciona correctamente y que el sitio está visible desde Internet.

---

### Paso 4: Selección e instalación de la Aplicación 2 (Softaculous)
1. Vuelve al instalador **Softaculous** en el cPanel de InfinityFree.
2. Explora el catálogo de aplicaciones disponibles por categorías:
   - **Educación / LMS:** Moodle, Chamilo.
   - **Comercio Electrónico / Tiendas:** PrestaShop, OpenCart.
   - **Wikis y Conocimiento:** MediaWiki, DokuWiki.
3. Selecciona la aplicación que te resulte más interesante de instalar.
4. Asigna un subdominio o directorio de instalación independiente para esta segunda aplicación (ejemplo: `http://tunombre-app.infinityfreeapp.com` o dentro de un subdirectorio).
5. Completa la instalación definiendo el usuario administrador y contraseña (registra los datos en Bitwarden).

---

### Paso 5: Configuración mínima funcional de la Aplicación 2
Para demostrar que la segunda aplicación web está operativa y comprende su utilidad práctica, deberás realizar un escenario de configuración básica según la app elegida:

- **Si has elegido Moodle / Chamilo:** Crea una categoría de curso, un nuevo curso (ejemplo: "Informática 2º Bachillerato") y matricula un usuario de prueba o añade un recurso (archivo/tarea).
- **Si has elegido PrestaShop / OpenCart:** Modifica el nombre de la tienda, crea una categoría de productos y añade al menos un producto con precio e imagen.
- **Si has elegido MediaWiki / DokuWiki:** Crea una portada personalizada y al menos una página de contenido wiki con enlaces internos.
- **Si has elegido otra aplicación:** Realiza la personalización inicial básica que demuestre que el servicio está listo para ser usado.

---

## 📽️ Recursos y material de apoyo

👉 [Documentación oficial de InfinityFree](https://forum.infinityfree.com/)  
👉 [Guía de uso del instalador Softaculous](https://softaculous.com/docs/)

---

## 📤 Entrega y Evaluación

Deberás entregar en **Aules** los siguientes elementos:
1. **Documento (PDF o Word)** con un informe de la actividad que contenga:
   - Captura del panel de control (*Control Panel* / *Softaculous*) de InfinityFree donde se vean las 2 aplicaciones instaladas.
   - **Aplicación 1 (WordPress):** Enlace URL público del sitio y capturas de la portada y del panel de administración.
   - **Aplicación 2 (App elegida):** Enlace URL público, nombre de la aplicación elegida, explicación breve de su utilidad y capturas de pantalla que demuestren la configuración mínima funcional realizada.
   - Captura de la bóveda de **Bitwarden** registrando los accesos al hosting y a las aplicaciones.

Una vez realizada la entrega en Aules, **enseña el trabajo al profesor en clase** para su verificación y comprobación de los enlaces públicos.

---

## 📊 Rúbrica de Evaluación (máx. 10 puntos)

| Criterio | Insuficiente (0 pts) | Básico (0.5 pts) | Adecuado (1 pt) | Excelente (2 pts) |
| :--- | :--- | :--- | :--- | :--- |
| **Registro y Gestión de Hosting (InfinityFree)** | No crea la cuenta en InfinityFree ni configura subdominios. | Crea la cuenta con ayuda pero con errores en la gestión de subdominios o accesos. | Configura la cuenta de hosting y subdominios funcionales en InfinityFree. | Gestiona con soltura el panel de InfinityFree, subdominios y credenciales en Bitwarden. |
| **Despliegue de Aplicación 1 (WordPress)** | WordPress no instalado o inaccesible desde su URL pública. | WordPress instalado pero con fallos de acceso o datos por defecto sin personalizar. | WordPress instalado vía Softaculous y accesible públicamente con configuración básica. | WordPress desplegado correctamente en hosting remoto, plenamente accesible y administrado. |
| **Despliegue de Aplicación 2 (Softaculous)** | No instala la segunda aplicación web en el hosting. | Instala la segunda app pero esta resulta inaccesible o con errores de instalación. | Segunda aplicación instalada vía Softaculous y accesible desde su correspondiente URL pública. | Segunda aplicación seleccionada e instalada con éxito, integrada correctamente en el hosting. |
| **Configuración mínima y utilidad práctica (App 2)** | Sin configuración o aplicación vacía e inoperativa. | Configuración insuficiente donde no se aprecia la utilidad de la aplicación. | Configuración inicial realizada donde se observa el funcionamiento básico de la app. | Configuración completa y funcional que demuestra de forma clara la utilidad de la app (curso, foro, producto, wiki...). |
| **Entrega en plazo y verificación** | No entrega la actividad o presenta un retraso injustificado. | Entrega con retraso importante o informe incompleto sin enlaces/capturas. | Entrega con pequeño retraso o faltan capturas/verificación de enlaces públicos. | Entrega puntual en Aules con documento bien estructurado, enlaces públicos funcionales y comprobación en clase. |

---

## 📌 Criterios de Evaluación vinculados (2º Bachillerato - PSIR II)

- **CE 4.2:** Instalar y configurar un servidor web de forma segura en entornos remotos.
- **CE 4.3:** Añadir complementos y gestionar gestores de contenidos (CMS).
- **CE 4.5:** Desplegar servicios compartidos y aplicaciones web (LMS, CMS, foros, tiendas) en red.
- **CE 5.2.1:** Razonar el diseño de sistemas informáticos y evaluar la eficiencia de servicios en la nube.
- **CE 5.2.3:** Administrar aplicaciones y servicios web en entornos de trabajo.
- **CE 5.5.1:** Integrar recursos digitales de manera autónoma y responsable.
- **CE 5.5.2:** Crear y difundir documentación técnica sobre el despliegue de sistemas.
