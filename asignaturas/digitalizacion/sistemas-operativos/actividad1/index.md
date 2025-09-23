---
layout: default
title: Actividad 1. Máquinas virtuales en VirtualBox
description: Tema 1
---

# Actividad 1 – Máquinas virtuales en VirtualBox

## Contexto
Un sistema operativo no tiene por qué estar instalado directamente en un ordenador físico.  
Podemos crear **máquinas virtuales** dentro de un programa llamado **VirtualBox** y allí instalar cualquier sistema operativo que queramos.  

![Esquema virtualización](./virtualizacion_ejemplo_clase.png)
{: .img .img-300}

Esto nos permite probar y utilizar distintos sistemas operativos **sin necesidad de tener varios ordenadores**.  

En los equipos del aula ya está instalado **VirtualBox**, pero si lo quieres en casa puedes descargarlo desde la página oficial:  
👉 [VirtualBox – Descarga](https://www.virtualbox.org/wiki/Downloads)

Para instalar un sistema operativo en VirtualBox se utiliza un archivo en formato **.iso**.  
Aquí tienes una recopilación de distribuciones Linux que también puedes investigar:  
👉 [Mejores distros Linux](https://www.adslzone.net/reportajes/software/mejores-distros-linux/)

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

2. **Inicia la máquina virtual** e **instala Windows XP** siguiendo los pasos que se van indicando.
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

> **¿Qué hacer entonces?** Queremos que durante la instalación Windows 11 nos deje crear un usuario local sin necesidad de tener que iniciar sesión con una cuenta de correo, pero (_sin utilizar ningún truco_) no podemos hacerlo. **Utiliza ChatGPT** para que te ayude a crear un usuario local durante la instalación de Windows 11. **Pista**: tiene algo que ver con desactivar internet en la máquina virtual y hacer otro _hackeo_ adicional.
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
- **Captura/s de pantalla de Windows XP** (usuario, foto y archivo Actividad 1.txt).  
- **Captura/s de pantalla de Linux Lite** (usuario y archivo Actividad 1.txt).  
- **Captura/s de pantalla de Windows 11** (usuario y archivo Actividad 1.txt).
- **Crear un documento** con LibreOffice Writer en Lliurex y **responde a las siguientes preguntas**:
   1. ¿Qué diferencias aprecias entre los 3 sistemas operativos?
   2. A nivel de hardware y recursos, ¿cuál de todos consume menos recursos? ¿Y cuál más?
   3. Explica por qué crees que un sistema operativo consume más recursos y otro sistema consume menos recursos del ordenador.


# Rúbrica – Actividad 1: Máquinas virtuales en VirtualBox

| Criterio | Excelente | Bien | Suficiente | Insuficiente |
|----------|-----------|------|------------|--------------|
| **Configuración de las máquinas virtuales** (2 pts) | Configura correctamente las 3 máquinas virtuales con las características indicadas. | Configura correctamente 2 máquinas. | Configura solo 1 máquina de forma correcta. | No configura ninguna correctamente. |
| **Instalación de sistemas operativos** (2 pts) | Instala y arranca sin problemas los 3 sistemas operativos (XP, Linux Lite y Windows 11). | Instala y arranca 2 sistemas de forma correcta. | Instala y arranca 1 sistema de forma correcta. | No consigue instalar ninguno correctamente. |
| **Personalización de usuario e idioma** (2 pts) | Cambia idioma, crea usuario, cambia imagen de perfil y realiza las configuraciones solicitadas en los 3 sistemas. | Realiza estos cambios en 2 sistemas. | Realiza estos cambios en 1 sistema. | No realiza cambios. |
| **Archivo Actividad 1.txt** (2 pts) | Crea correctamente el archivo en los 3 sistemas, con todos los datos completos. | Crea el archivo en 2 sistemas con la información pedida. | Crea el archivo en 1 sistema o con datos incompletos. | No crea el archivo en ningún sistema. |
| **Entrega** (2 pts) | Entrega la actividad dentro del plazo establecido. | Entrega con un ligero retraso (máx. 2 días). | Entrega con retraso moderado (hasta 1 semana). | Entrega muy tarde (más de 1 semana) o no entrega. |