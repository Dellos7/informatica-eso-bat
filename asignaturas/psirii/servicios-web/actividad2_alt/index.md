---
layout: default
title: Actividad 2 (Alternativa Local). Despliegue de un segundo servicio web en XAMPP
description: Instalación y configuración en el entorno local Linux Mint/XAMPP de una segunda aplicación web autónoma (Moodle, PrestaShop o MediaWiki) como alternativa en local al hosting remoto.
---

# Actividad 2 (Alternativa Local). Despliegue de un segundo servicio web en XAMPP (Moodle / PrestaShop / MediaWiki)

En esta actividad profundizarás en la administración de servidores web locales desplegando una segunda aplicación web autónoma sobre tu stack XAMPP en Linux Mint. Esta actividad sirve como alternativa 100% local al uso de hosting remoto (InfinityFree), permitiendo experimentar el proceso real de despliegue manual de software web (gestión de código, bases de datos MariaDB/MySQL y permisos de archivos en Linux).

---

## 🎯 Objetivos de la actividad

1. **Gestión de Bases de Datos en XAMPP:** Crear y administrar bases de datos independientes y usuarios con privilegios mediante **phpMyAdmin**.
2. **Despliegue Manual de Servicios Web:** Descargar, descomprimir y ubicar paquetes de aplicaciones web PHP en el directorio del servidor (`/opt/lampp/htdocs/`).
3. **Administración de Permisos en Linux:** Configurar permisos de lectura y escritura (`chmod`, `chown`) en carpetas de datos del servidor.
4. **Instalación y Asistente Web:** Completar el asistente web de instalación configurando parámetros de conexión a la base de datos y usuario administrador.
5. **Configuración de Escenario Práctico:** Implementar un caso de uso real según la aplicación elegida (crear un curso en Moodle, un producto en PrestaShop o artículos en una Wiki).
6. **Gestión de Seguridad:** Registrar en **Bitwarden** todas las credenciales generadas para la base de datos y la administración de la aplicación.

---

## 📌 Selección de la Aplicación Web

Deberás elegir **una** de las siguientes aplicaciones para su despliegue local:

- 🎓 **Opción A: Moodle** *(Plataforma de aprendizaje / LMS)* — Ideal para simular el funcionamiento interno de plataformas como Aules.
- 🛒 **Opción B: PrestaShop** *(Tienda online / Comercio electrónico)* — Ideal para simular un portal de venta y gestión de productos.
- 📚 **Opción C: MediaWiki o DokuWiki** *(Gestión del conocimiento / Wiki)* — Ideal para crear enciclopedias o documentación técnica colaborativa.

---

## 📌 Paso a paso detallado

### Paso 1: Descarga del paquete oficial de la aplicación
1. Abre el navegador web dentro de tu máquina virtual Linux Mint.
2. Accede a la web oficial de la aplicación elegida y descarga el paquete comprimido más reciente (`.zip` o `.tar.gz`):
   - **Moodle:** [Descargar Moodle](https://download.moodle.org/)
   - **PrestaShop:** [Descargar PrestaShop](https://prestashop.com/prestashop-offers/classic/)
   - **MediaWiki:** [Descargar MediaWiki](https://www.mediawiki.org/wiki/Download/es) / **DokuWiki:** [Descargar DokuWiki](https://download.dokuwiki.org/)
3. Guarda el archivo descargado en la carpeta `Descargas` de Linux Mint.

---

### Paso 2: Preparación del servidor XAMPP y Base de Datos en phpMyAdmin
1. Asegúrate de que los servicios de XAMPP están arrancados desde la terminal:
   ```bash
   sudo /opt/lampp/lampp start
   ```
2. Abre el navegador y accede a **phpMyAdmin**: `http://localhost/phpmyadmin`.
3. Crea una nueva base de datos dedicada para la aplicación (por ejemplo: `moodle_db`, `prestashop_db` o `wiki_db`).
   - Selecciona el cotejo recomendado: `utf8mb4_unicode_ci`.
4. Guarda en **Bitwarden** el nombre de la base de datos y las credenciales de acceso a MySQL (usuario `root`).

---

### Paso 3: Despliegue en `htdocs` y configuración de permisos en Linux Mint
1. Abre la terminal y descomprime el archivo descargado en el directorio web de XAMPP:
   ```bash
   # Ejemplo para descomprimir en /opt/lampp/htdocs/
   sudo unzip ~/Descargas/nombre_del_archivo.zip -d /opt/lampp/htdocs/
   ```
2. Renombra la carpeta descomprimida para que tenga un nombre sencillo (ejemplo: `moodle`, `tienda` o `wiki`):
   ```bash
   sudo mv /opt/lampp/htdocs/nombre_extraido /opt/lampp/htdocs/miapp
   ```
3. Otorga permisos de escritura a la carpeta de la aplicación para permitir que el instalador genere archivos de configuración e imágenes:
   ```bash
   sudo chmod -R 777 /opt/lampp/htdocs/miapp
   ```
4. *(Solo para Moodle)* Moodle requiere un directorio de datos independiente fuera de `htdocs`. Créalo y dale permisos:
   ```bash
   sudo mkdir /opt/lampp/moodledata
   sudo chmod -R 777 /opt/lampp/moodledata
   ```

---

### Paso 4: Ejecución del asistente de instalación web
1. Entra en el navegador a la dirección correspondiente: `http://localhost/miapp`.
2. Sigue los pasos del asistente de instalación en pantalla:
   - **Comprobación de requisitos:** Verifica que los módulos de PHP están activos.
   - **Conexión a la Base de Datos:**
     - **Servidor BD:** `localhost`
     - **Nombre de BD:** el nombre de la base de datos creada en el Paso 2 (`moodle_db`, `prestashop_db`, etc.).
     - **Usuario MySQL:** `root`
     - **Contraseña MySQL:** *(la configurada en XAMPP o en blanco por defecto)*.
   - **Datos del sitio y Administrador:** Configura el nombre del sitio web y crea la cuenta de usuario Administrador.
3. Guarda inmediatamente en **Bitwarden** el usuario y la contraseña del Administrador del nuevo sitio.

---

### Paso 5: Configuración del escenario práctico funcional
Para demostrar que la aplicación está operativa, realiza la configuración inicial según la opción elegida:

- 🎓 **Si has elegido Moodle:**
  - Accede como Administrador.
  - Crea una **Categoría de cursos** (ejemplo: *Informática 2º Bachillerato*).
  - Crea un **Nuevo Curso** (ejemplo: *Sistemas Operativos y Redes*) y añade una descripción y un recurso (archivo o tarea de prueba).
- 🛒 **Si has elegido PrestaShop:**
  - Accede al panel de administración (*Back-Office*).
  - Personaliza el nombre y datos de la tienda.
  - Crea una **Categoría de producto** y añade al menos **un producto** con nombre, precio e imagen promocional.
- 📚 **Si has elegido MediaWiki / DokuWiki:**
  - Personaliza la página de bienvenida (*Main Page*).
  - Crea al menos **dos páginas de contenido** (ejemplo: una guía técnica sobre Linux Mint y otra sobre XAMPP) enlazadas entre sí.

---

## 📽️ Recursos y material de apoyo

👉 [Documentación oficial de Moodle (Instalación)](https://docs.moodle.org/all/es/Instalación_de_Moodle)  
👉 [Guía de instalación de PrestaShop](https://devdocs.prestashop-project.org/9/basics/installation/)  
👉 [Documentación oficial de MediaWiki](https://www.mediawiki.org/wiki/Manual:Installation_guide/es)

---

## 📤 Entrega y Evaluación

Deberás entregar en **Aules** los siguientes elementos:
1. **Documento (PDF o Word)** con un informe de la actividad que contenga:
   - **Paso a paso de la instalación:** Capturas del proceso en phpMyAdmin, la descompresión/permisos en terminal y el asistente web completado.
   - **Bóveda de Bitwarden:** Captura donde se aprecie el registro de las credenciales de la nueva aplicación.
   - **Demostración funcional:** Capturas del panel de administración y del resultado final del escenario práctico configurado (el curso en Moodle, el producto en PrestaShop o las páginas en la Wiki).
2. **Copia de seguridad de la Base de Datos:** Exportación en formato `.sql` de la base de datos generada desde phpMyAdmin.

Una vez realizada la entrega en Aules, **enseña el trabajo al profesor en clase** para su verificación y evaluación directa en la máquina virtual.

---

## 📊 Rúbrica de Evaluación (máx. 10 puntos)

| Criterio | Insuficiente (0 pts) | Básico (0.5 pts) | Adecuado (1 pt) | Excelente (2 pts) |
| :--- | :--- | :--- | :--- | :--- |
| **Gestión de Seguridad (Bitwarden)** | No utiliza Bitwarden para registrar las credenciales del nuevo servicio. | Registra credenciales de forma incompleta o poco organizada. | Utiliza Bitwarden registrando la mayoría de claves de la nueva aplicación. | Registra y organiza adecuadamente en Bitwarden todas las claves creadas (BD y usuario admin). |
| **Preparación de la BD y Permisos en Linux** | No consigue crear la base de datos ni configurar permisos en el servidor local. | Crea la BD o ajusta permisos en la terminal con ayuda continua y algunos errores. | Base de datos creada en phpMyAdmin y permisos asignados correctamente a la carpeta en htdocs. | Base de datos configurada adecuadamente (utf8mb4) y gestión de permisos/directorios en Linux impecable. |
| **Despliegue e Instalación de la Aplicación** | No consigue descomprimir la app ni completar el asistente de instalación. | Completa la instalación con ayuda constante o faltan pasos del asistente. | Instalación completada mediante el asistente web y acceso correcto al panel de administración. | Despliegue manual autónomo en XAMPP, superando la comprobación de requisitos del instalador. |
| **Configuración del Escenario Práctico** | Aplicación instalada pero por defecto, sin contenido ni personalización. | Crea elementos básicos de forma incompleta o sin seguir las indicaciones. | Realiza la configuración práctica indicada (curso, producto o páginas wiki) de forma funcional. | Escenario práctico completo, bien estructurado y personalizado con contenidos reales y coherentes. |
| **Entrega en plazo y documentación** | No entrega la actividad o presenta un retraso injustificado. | Entrega con retraso importante o faltan entregables en Aules. | Entrega con un pequeño retraso o entrega incompleta (falta documento o archivo .sql). | Entrega puntual en Aules del informe con capturas del proceso, el archivo .sql y comprobación en el aula. |
