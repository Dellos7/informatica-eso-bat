---
layout: default
title: Actividad 2. Máquinas virtuales en VirtualBox
description: Tema 1
---

# Actividad 2 – Máquinas virtuales en VirtualBox

## Contexto
Un sistema operativo no tiene por qué estar instalado directamente en un ordenador físico.  
Podemos crear **máquinas virtuales** dentro de un programa llamado **VirtualBox** y allí instalar cualquier sistema operativo que queramos.  

![Esquema virtualización](./virtualizacion_ejemplo_clase.png)
{: .img .img-300}

Esto nos permite probar y utilizar distintos sistemas operativos **sin necesidad de tener varios ordenadores**.  

---

## Recursos necesarios
- VirtualBox instalado (ya lo tienes en clase).
- Archivos **.iso** de los sistemas operativos indicados. 👉 **Cópialos de la carpeta compartida** que tienes en el ordenador de clase (pregunta al profesor cómo acceder).
- Conexión a Internet para descargar software adicional.

> **IMPORTANTE**: Deberás copiar los archivos **.iso** de la carpeta compartida a tu carpeta de **Inici** del ordenador de clase (**NO** a la carpeta **Documents**)
{: .alert-error}

---

## Cómo crear una máquina virtual en Lliurex

> Una vez has copiado los archivos, lee atentamente la siguiente página y después vuelve a la página de la actividad para completar los pasos.
{: .alert-warning}

[👉 Crear una máquina virtual en Lliurex](/{{ site.github.repository_name }}/asignaturas/apuntes/crear-mv-vbox-lliurex)

## Parte 1 – Máquina virtual con Windows XP

1. Crea una nueva máquina virtual en VirtualBox con las siguientes características:
   - **Nombre:** Windows XP  
   - **Imagen ISO**: el archivo **.iso** descargado de Windows XP
   - **Tipo:** Microsoft Windows
   - **Versión:** Windows XP (64-bit)
   - **Skip Unattended Installation**: ✅ Marcar
   - *o bien* **Proceed with Unattended Installation**: ❌ No Marcar
   - **Memoria RAM (Hardware):** 2048 MB (2 GB)
   - **Disco duro virtual (Hard Disk):** 10 GB

   - ‼️**IMPORTANTE**‼️: Debes entrar en la **Configuración** y Deshabilitar paginación imbrincada, cambiar *Dispositiu del punter* de la Placa mare y deshabilitar controlador USB

**1. Deshabilitar paginació imbrincada**
{: .centrado}

![Deshabilitar paginación imbrincada](./winxp_conf_1.png)
{: .img .img-350}

**2. Cambiar Dispositiu del punter de la Placa Mare a Ratolí PS/2**
{: .centrado}

![Cambiar Dispositiu del punter de la Placa Mare a Ratolí PS/2](./winxp_conf_3.png)
{: .img .img-350}

**3. Deshabilitar controlador USB**
{: .centrado}

![Deshabilitar controlador USB](./winxp_conf_2.png)
{: .img .img-350}

2. **Inicia la máquina virtual** e **instala Windows XP** siguiendo los pasos que se van indicando (Idioma, Zona horaria, Usuario, etc.).
{:start="2"}

3. Dentro de Windows XP realiza las siguientes acciones. **Pista** muchas se pueden hacer desde el Panel de Control:
   - Cambia la **resolución de la pantalla** para que se vea más grande y con más espacio.
   - Cambia el idioma del sistema a **español**.  
   - Crea un **usuario** con tu nombre.  
   - Cambia la **imagen de perfil** de ese usuario.  
   - Dentro de la carpeta **Mis documentos**, crea un archivo llamado **Actividad 1.txt** con tu información personal (Nombre, Edad y Curso).  
{:start="3"}

4. Haz una **captura de pantalla** en la que se vea:
   - El menú Inicio con tu foto de perfil y tu nombre de usuario.  
   - El archivo **Actividad 1.txt** dentro de Mis documentos.
{:start="4"}

![Usuario en Windows XP](./captura_winxp.png)
{: .img .img-500}

👉 Prueba juegos clásicos como **Pinball**, **Solitario**, **Buscaminas** o programas como las primeras versiones de Paint.

![Juegos Windows XP](./captura_winxp_2.png)
{: .img .img-400}

![Aplicaciones Windows XP](./captura_winxp_3.png)
{: .img .img-400}

---

## Parte 2 – Máquina virtual con Linux Lite

1. Crea una nueva máquina virtual en VirtualBox con las siguientes características:
   - **Nombre:** Linux Lite
   - **Imagen ISO**: el archivo **.iso** descargado de Linux Lite
   - **Tipo:** Linux
   - **Versión:** Ubuntu (64-bit)
   - **Skip Unattended Installation**: ✅ Marcar
   - *o bien* **Proceed with Unattended Installation**: ❌ No Marcar
   - **Memoria RAM (Hardware):** 3072 MB (3 GB)
   - **Disco duro virtual (Hard Disk):** 25 GB

2. Instala Linux Lite en la máquina virtual.

3. Durante la instalación:
   - Selecciona **idioma español**.  
   - El **usuario** debe ser tu nombre + apellidos (ejemplo: juanperez).  

4. Dentro de Linux Lite realiza las siguientes acciones:
   - En la carpeta **Documentos**, crea un archivo llamado **Actividad 1.txt** con tu información personal (Nombre, Edad y Curso).  
   - Haz una **captura de pantalla** en la que se vea:
     - Tu nombre de usuario.  
     - El archivo **Actividad 1.txt** dentro de Documentos.  

![Linux Lite](./captura_linuxlite.png)
{: .img .img-500}


5. Instala el juego **Super Tux Kart**:
   - Abre la aplicación **Emulador de terminal**.  
   - Escribe y ejecuta los siguientes comandos (uno por uno):  
     ```bash
     sudo apt install snapd
     sudo snap install supertuxkart
     ```
   - Cierra la sesión y vuelve a entrar en el sistema.  
{:start="5"}

![SuperTux Kart](./captura_supertux.png)
{: .img .img-400}

   - Haz una **captura de pantalla** donde se vea el **juego instalado**.

---

## Parte 3 – Máquina virtual con Windows 11

1. Crea una nueva máquina virtual en VirtualBox con las siguientes características:
   - **Nombre:** Windows 11
   - **Imagen ISO**: el archivo **.iso** descargado de Windows 11
   - **Tipo:** Microsoft Windows
   - **Versión:** Windows 11 (64-bit)
   - **Skip Unattended Installation**: ✅ Marcar
   - **Memoria RAM (Hardware):** 8192 MB (8 GB)
   - **Disco duro virtual (Hard Disk):** 80 GB

2. **Instala Windows 11 en la máquina virtual**. Sigue los pasos de la instalación. Deberás tener en cuenta lo siguiente:

> Llegará un punto de la instalación donde **se te pedirá que inicies sesión** con una cuenta de Microsoft/Outlook o bien que crees una nueva cuenta (NOTA: la cuenta de Outlook del instituto no te servirá). **IMPORTANTE**: NO debes iniciar sesión con una cuenta de Microsoft/Outlook ni crear una nueva cuenta.
{: .alert-error}

> **¿Qué hacer entonces?** Queremos que durante la instalación Windows 11 nos deje crear un usuario local sin necesidad de tener que iniciar sesión con una cuenta de correo, pero (_sin utilizar ningún truco_) no podemos hacerlo. **Utiliza ChatGPT** para que te ayude a crear un usuario local durante la instalación de Windows 11. Deberás indicarle que quieres hacer esto mismo, y que no quieres que te pida de forma obligatoria iniciar sesión con una cuenta de correo. Si la ayuda que te da ChatGPT no te funciona, insístele en que no te funciona para que te de otras alternativas.
{: .alert-success}

3. Una vez instalado, realiza las siguientes acciones dentro de Windows 11:
   - Crea dentro de la carpeta **Documentos** un archivo llamado **Actividad 1.txt** con tu información personal (Nombre, Edad y Curso).
{:start="3"}

> **NOTA**: Debe verse la extensión del archivo. Por defecto no aparece, así que deberás buscar en las opciones del sistema de archivos cómo **mostrar las Extensiones de nombre de archivo**
{: .alert-warning}

   - Instala alguna aplicación desde **Microsoft Store**

4. Haz una **captura de pantalla** en la que se vea:
{:start="4"}
   - El menú Inicio con tu usuario.

![Usuario local Windows 11](./capt_win11_vbox_2.png)
{: .img .img-500}

   - El archivo **Actividad 1.txt** dentro de Documentos.  

![Archivo .txt en Windows 11](./capt_win11_vbox_1.png)
{: .img .img-500}

   - La aplicación instalada con Microsoft Store.

👉 Explora las nuevas aplicaciones que incluye Windows 11 (Bloc de notas, Fotos, Microsoft Store, etc.).

---

## Entrega
Deberás subir en Aules:
- **Captura/s de pantalla de Windows XP** (usuario, foto, archivo Actividad 1.txt y juegos Pinball, Buscaminas, Solitario...)
- **Captura/s de pantalla de Linux Lite** (usuario y archivo Actividad 1.txt y juego SuperTuxKart).  
- **Captura/s de pantalla de Windows 11** (usuario y archivo Actividad 1.txt y programa/aplicación instalada de Microsoft Store).
- **Crear un documento** con LibreOffice Writer en Lliurex y **responde a las siguientes preguntas**:
   1. ¿Qué diferencias aprecias entre los 3 sistemas operativos?
   2. A nivel de hardware y recursos, ¿cuál de todos consume menos recursos? ¿Y cuál más?
   3. Explica por qué crees que un sistema operativo consume más recursos y otro sistema consume menos recursos del ordenador.


## Rúbrica – Actividad 1: Máquinas virtuales en VirtualBox

| Criterio | 0 pts | 1 pt | 2 pts | 3 pts |
|----------|-------|-------|-------|-------|
| **Windows XP (2 pts)** | No consigue instalar ni configurar Windows XP correctamente, ni entregar las capturas solicitadas. | Instala el sistema y hace alguna configuración básica, pero faltan varios elementos solicitados. | Configura correctamente la máquina virtual, instala Windows XP, cambia idioma, crea usuario con foto de perfil, crea el archivo `Actividad 1.txt` completo y muestra las capturas de usuario, archivo y juegos clásicos (Pinball, Buscaminas, Solitario). | – |
| **Linux Lite (2 pts)** | No consigue instalar ni configurar Linux Lite correctamente, ni entregar las capturas solicitadas. | Instala el sistema y realiza solo una parte de lo solicitado (ej. usuario o archivo sin completar). | Configura correctamente la máquina virtual, instala Linux Lite en español, crea usuario, crea el archivo `Actividad 1.txt` completo y muestra capturas de usuario, archivo y juego **SuperTuxKart** funcionando. | – |
| **Windows 11 (3 pts)** | No consigue instalar ni configurar Windows 11 correctamente, ni entregar las capturas solicitadas. | Instala el sistema y realiza solo una parte de lo solicitado. | Realiza la instalación y configuraciones principales, pero falta algún elemento (ej. archivo incompleto o sin programa instalado de la Store). | Configura correctamente la máquina virtual, instala Windows 11, cambia idioma, crea usuario con foto de perfil, crea el archivo `Actividad 1.txt` completo y muestra capturas de usuario, archivo y un programa/aplicación instalada desde Microsoft Store. |
| **Documento en LibreOffice (1 pt)** | No entrega el documento, está en blanco, es copia o se genera con una IA (ChatGPT, etc). | Entrega el documento en LibreOffice con respuestas completas y bien razonadas a las 3 preguntas. | – | – |
| **Plazo de entrega (2 pts)** | Entrega muy tarde (más de 1 semana) o no entrega. | Entrega con retraso moderado (hasta 1 semana). | Entrega con un ligero retraso (máx. 2 días). | Entrega la actividad dentro del plazo establecido. |
