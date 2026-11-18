---
layout: default
title: Actividad 6 – Scripts que leen ficheros
description: Tema 1 - Sistemas Operativos
---

# Actividad 6 – Scripts que leen ficheros

Antes de realizar las tareas, **lee atentamente**:

> [**APUNTES DE COMANDOS LINUX**](../apuntes_comandos) <br> [**APUNTES DE SSH Y SCP**](../apuntes_ssh_scp) <br> [**APUNTES DE SCRIPTS EN LINUX**](../apuntes_scripts) (especialmente el apartado [**3. Scripts que leen un fichero**](../apuntes_scripts#-3-scripts-que-leen-un-fichero))

---

## Instrucciones generales

* Cada tarea que realices debe estar organizada dentro de la carpeta **Actividad-6**.
* **LECTURA DE FICHEROS CON `while / done`**{: .verde}: En esta actividad automatizarás la creación de carpetas y clasificación de archivos leyendo listas desde ficheros `.txt` mediante bucles `while read ... / done`.
* **ATENCIÓN A LOS ESPACIOS EN VARIABLES**{: .rojo}: Al usar variables dentro de tus scripts (por ejemplo, `mkdir "$carpeta"` o `cp "$foto" "$destino"`), pon siempre las variables **entre comillas dobles** para que Bash gestione sin errores los nombres con espacios.
* **PERSONALIZACIÓN DE LOS SCRIPTS**{: .verde}: Después de cada acción o comando importante, el script debe mostrar por pantalla un mensaje `echo` personalizado con tu **usuario**, **NIA** y **nombre completo**.
* **EJECUCIÓN EN LOCAL Y EN EL SERVIDOR**{: .verde}: Primero prueba cada script en **tu ordenador local** y después cópialo junto con los archivos `.txt` necesarios al **servidor de clase (`10.2.5.166`)** con **`scp`** para ejecutarlo allí por **SSH**.
* **HAZ CAPTURAS DE PANTALLA DE LAS EJECUCIONES**{: .rojo}: En todas las capturas deben verse claramente los mensajes personalizados, la estructura generada (con `tree`) y **tu nombre de usuario** (tanto en local como en el servidor).

---

## 🍽️ Tarea 3 – Crear carpetas desde un fichero

Lee el apartado [**3. Scripts que leen un fichero**](../apuntes_scripts#-3-scripts-que-leen-un-fichero) de los apuntes de scripts.

### Paso 1 – Preparación del archivo y creación de `tarea3.sh`

1. En tu ordenador, crea la carpeta **Actividad-6** y, dentro de ella, la carpeta **Tarea-3**.
2. Descarga y guarda dentro de **Tarea-3** el archivo <a href="recetas.txt" download>recetas.txt</a>.

> 💡 **NOTA OBLIGATORIA:** Abre el archivo <a href="recetas.txt" download>recetas.txt</a> con un editor de texto y **añade al menos 2 carpetas nuevas inventadas por ti** al final del archivo antes de ejecutar el script.
{: .alert-warning}

3. Crea dentro de **Tarea-3** un script llamado **`tarea3.sh`** que realice automáticamente las siguientes acciones:
   - Lea las rutas de carpetas del archivo <a href="recetas.txt" download>recetas.txt</a> y cree todas las carpetas utilizando una estructura `while / done`.
   - Descargue mediante `wget` el archivo comprimido:  
     **dlopezcastellote.dev/informatica-eso-bat/asignaturas/digitalizacion/sistemas-operativos/actividad3/fotos_comida.zip**{: .verde}
   - Descomprima el archivo descargado con `unzip`.
   - Copie las imágenes `macarrons.jpg`, `paella.jpg` y `arros al forn.jpg` en la carpeta `Recetas/Platos`.
   - Muestre un mensaje `echo` (personalizado con tu nombre de usuario, NIA y nombre) después de cada comando. Ejemplo:
     ```bash
     echo "($USER - 12345678 - Tu Nombre) Copiando imágenes a Recetas/Platos..."
     ```

### Paso 2 – Ejecución en tu ordenador local

1. Dale permisos de ejecución al script (`chmod +x tarea3.sh`) y ejecútalo en tu ordenador (`./tarea3.sh`).
2. Comprueba con el comando **`tree`** que se ha creado toda la estructura de carpetas (incluyendo las 2 carpetas inventadas por ti) y que las tres imágenes están dentro de `Recetas/Platos`.

> 📸 **Captura obligatoria 1 (Tarea 3 en local):** Haz una captura de pantalla de la ejecución de `./tarea3.sh` en tu ordenador (mostrando los mensajes `echo` personalizados) y de la estructura resultante con `tree`, donde sea visible tu **nombre de usuario local**.
{: .alert-error}

### Paso 3 – Copia con SCP y ejecución en el servidor

1. Desde la terminal de tu ordenador local, copia tanto el script **`tarea3.sh`** como el archivo **`recetas.txt`** al servidor (`10.2.5.166`) mediante el comando **`scp`** (**revisa y pon bien tu usuario y rutas**):
   ```bash
   scp tarea3.sh recetas.txt usuario@10.2.5.166:~/
   ```
2. Conéctate al servidor por **SSH** (`ssh usuario@10.2.5.166`), coloca ambos archivos en su carpeta de trabajo, ejecuta `./tarea3.sh` y verifica con **`tree`** la estructura creada.

> 📸 **Captura obligatoria 2 (Tarea 3 en el servidor):** Haz una captura de pantalla donde se vea el comando `scp`, la ejecución de `./tarea3.sh` en el servidor y la comprobación de la estructura de carpetas con `tree`, mostrando claramente tu **nombre de usuario en el servidor**.
{: .alert-error}

---

## 🍎 Tarea 4 – Leer varios ficheros y copiar imágenes

### Paso 1 – Preparación de archivos y creación de `tarea4.sh`

1. Crea la carpeta **Tarea-4** dentro de **Actividad-6**.
2. Descarga y guarda dentro de **Tarea-4** los dos archivos de texto siguientes:
   - <a href="carpetas_frutas_verduras.txt" download>carpetas_frutas_verduras.txt</a> (contiene la lista de carpetas a crear).
   - <a href="fotos_frutas_y_verduras.txt" download>fotos_frutas_y_verduras.txt</a> (contiene en cada línea el nombre de una imagen y la carpeta de destino donde debe copiarse).
3. Crea dentro de **Tarea-4** un script llamado **`tarea4.sh`** que realice automáticamente las siguientes acciones:
   - Descargue mediante `wget` el archivo comprimido:  
     **dlopezcastellote.dev/informatica-eso-bat/asignaturas/digitalizacion/sistemas-operativos/actividad4/frutas_y_verduras.zip**{: .verde}
   - Descomprima el archivo descargado con `unzip`.
   - Lea el archivo <a href="carpetas_frutas_verduras.txt" download>carpetas_frutas_verduras.txt</a> y cree las carpetas correspondientes con un bucle `while / done`.
   - Lea el archivo <a href="fotos_frutas_y_verduras.txt" download>fotos_frutas_y_verduras.txt</a> y copie cada imagen en la carpeta indicada con un bucle `while / done`.
   - Muestre un mensaje `echo` (personalizado con tu nombre de usuario, NIA y nombre) después de cada comando. Ejemplo:
     ```bash
     echo "($USER - 12345678 - Tu Nombre) Copiando imágenes a Frutas/Frutos secos/Con cáscara..."
     ```

### Paso 2 – Ejecución en tu ordenador local

1. Dale permisos de ejecución al script (`chmod +x tarea4.sh`) y ejecútalo en tu ordenador (`./tarea4.sh`).
2. Verifica con el comando **`tree`** que se han creado todas las carpetas de frutas y verduras y que cada foto se ha copiado dentro de su categoría correspondiente.

> 📸 **Captura obligatoria 3 (Tarea 4 en local):** Haz una captura de pantalla de la ejecución de `./tarea4.sh` en tu ordenador local y de la comprobación de la estructura completa con `tree`, mostrando claramente tus mensajes personalizados y tu **nombre de usuario local**.
{: .alert-error}

### Paso 3 – Copia con SCP y ejecución en el servidor

1. Copia el script **`tarea4.sh`** y los dos archivos **`.txt`** (`carpetas_frutas_verduras.txt` y `fotos_frutas_y_verduras.txt`) de tu ordenador al servidor (`10.2.5.166`) mediante **`scp`**:
   ```bash
   scp tarea4.sh carpetas_frutas_verduras.txt fotos_frutas_y_verduras.txt usuario@10.2.5.166:~/
   ```
2. Conéctate al servidor por **SSH** (`ssh usuario@10.2.5.166`), ejecuta `./tarea4.sh` y comprueba con **`tree`** que se ha creado toda la estructura con las imágenes clasificadas.

> 📸 **Captura obligatoria 4 (Tarea 4 en el servidor):** Haz una captura de pantalla donde se aprecie el comando `scp`, la ejecución de `./tarea4.sh` en el servidor y la estructura de carpetas verificada con `tree`, con tu **nombre de usuario en el servidor** visible.
{: .alert-error}

---

## Entrega

Sube en esta tarea de **Aules**:

* Los dos scripts creados: **`tarea3.sh`** y **`tarea4.sh`** (junto con tu archivo **`recetas.txt`** modificado).
* **Las capturas de pantalla solicitadas** con las ejecuciones y estructuras de carpetas de las Tareas 3 y 4, tanto en tu **ordenador local** como en el **servidor remoto** (deben verse claramente los mensajes personalizados y tu nombre de usuario).
