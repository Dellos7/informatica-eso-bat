---
layout: default
title: Actividad 5 – Scripts que leen ficheros
description: Tema 1
---

# Actividad 5: Scripts que leen ficheros

## 🍽️ Tarea 3 – Crear carpetas desde un fichero

Lee ahora también el apartado [**Scripts que son capaces de leer un fichero**](../apuntes_scripts#-3-scripts-que-leen-un-fichero) de los apuntes.

1. Crea la carpeta **Tarea-3** dentro de **Actividad-5**.  
2. Realiza un script llamado **`tarea3.sh`** que:
  - Lea las rutas de carpetas del archivo <a href="recetas.txt" download>recetas.txt</a>
  - Cree todas las carpetas usando `while / done`.  
  - Descargue el archivo: **dlopezcastellote.dev/informatica-eso-bat/asignaturas/digitalizacion/sistemas-operativos/actividad2/fotos_comida.zip**{: .verde}
  - Lo descomprima.  
  - Copie las imágenes `macarrons.jpg`, `paella.jpg` y `arros al forn.jpg` en la carpeta `Recetas/Platos`.  
  - Muestre un mensaje `echo` (personalizado con tu nombre de usuario, NIA y nombre) después de cada comando. Ejemplo:  
```bash
echo "(usuario - nia - nombre) Copiando imágenes a Recetas/Platos..."
```
> **NOTA**: Añade al menos 2 carpetas inventadas por ti al final del archivo <a href="recetas.txt" download>recetas.txt</a>.
{: .alert-warning}

3. Ejecuta el script en tu ordenador y verifica que se ha creado la estructura de carpetas correspondiente. **Haz captura de pantalla de la ejecución y de la estructura de carpetas**{: .rojo}.
{:start="3"}
4. Copia el script de tu ordenador al servidor a través del comando `scp` (**revisa y pon bien los datos**). Deberás también **copiar el archivo `recetas.txt`**. **Haz captura de pantalla de la ejecución y de la estructura de carpetas**{: .rojo}:
{:start="4"}
---

## 🍎 Tarea 4 – Leer varios ficheros y copiar imágenes

1. Crea la carpeta **Tarea-4** dentro de **Actividad-5**.  
2. Crea un script llamado **`tarea4.sh`** que:
   - Descargue el archivo: **dlopezcastellote.dev/informatica-eso-bat/asignaturas/digitalizacion/sistemas-operativos/actividad3/frutas_y_verduras.zip**{: .verde}
   - Lo descomprima.
   - Lea el archivo <a href="carpetas_frutas_verduras.txt" download>carpetas_frutas_verduras.txt</a> y cree las carpetas correspondientes con `while / done`.
   - Lea el archivo <a href="fotos_frutas_y_verduras.txt" download>fotos_frutas_y_verduras.txt</a> y copie cada imagen en la carpeta indicada.
   - Muestre un mensaje `echo` (personalizado con tu nombre de usuario, NIA y nombre) después de cada comando. Ejemplo:  
```bash
echo "(usuario - nia - nombre) Copiando imágenes a Frutas/Frutos secos/Con cáscara..."
```
3. Ejecuta el script en tu ordenador y verifica que se ha creado la estructura de carpetas correspondiente. **Haz captura de pantalla de la ejecución y de la estructura de carpetas**{: .rojo}.
{:start="3"}
4. Copia el script de tu ordenador al servidor a través del comando `scp` (**revisa y pon bien los datos**). Deberás también **copiar los archivos .txt**. **Haz captura de pantalla de la ejecución y de la estructura de carpetas**{: .rojo}:
{:start="4"}

---

## 📦 Entrega

Debes entregar:

- Los scripts **tarea3.sh** y **tarea4.sh**.  
- Las **capturas de pantalla** con las ejecuciones (deben verse los mensajes personalizados y tu nombre de usuario), tanto en tu **ordenador local** como en **el servidor**.

## 📊 Rúbrica – Actividad 5: Scripts que leen ficheros

| Criterio                                                                          | 0 puntos                            | 1 punto                                                                                      | 2 puntos                                                                                                                                                | 3 puntos                                                                                                                     | 4 puntos                                                                                                                                                                                                                                                             |
| --------------------------------------------------------------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Tarea 3 – Script con lectura de fichero y creación de carpetas (4 pts)**        | No entrega el script o no funciona. | Entrega el script pero no lee correctamente el archivo `recetas.txt` o no crea las carpetas. | El script funciona parcialmente (por ejemplo, crea solo parte de las carpetas o no muestra mensajes con `echo`), o bien faltan capturas de pantalla.    | El script está correcto y personalizado, pero no se copia o ejecuta en el servidor; o bien falta alguna captura de pantalla. | Entrega el script completo, con comentarios y mensajes informativos, personalizado (nombre, NIA, usuario, fecha, equipo), lo ejecuta correctamente tanto en su ordenador como en el servidor, incluyendo las capturas solicitadas.                                   |
| **Tarea 4 – Script con lectura de varios ficheros y copiado de imágenes (4 pts)** | No entrega el script o no funciona. | Entrega el script pero no crea correctamente las carpetas o no copia los archivos.           | El script funciona parcialmente (por ejemplo, errores en la lectura de variables o en las rutas), o bien faltan mensajes `echo` o capturas de pantalla. | El script está correcto y personalizado, pero no se copia o ejecuta en el servidor; o bien falta alguna captura de pantalla. | Entrega el script completo y funcional, personalizado (nombre, NIA, usuario, fecha, equipo), que lee correctamente ambos archivos, crea las carpetas, copia las imágenes y muestra mensajes `echo`, ejecutándolo correctamente en ordenador y servidor con capturas. |
| **Entrega en plazo (2 pts)**                                                      | No entrega o lo hace muy tarde.     | Entrega con pequeño retraso.                                                                 | Entrega en plazo.                                                                                                                                       |                                                                                                                              |                                                                                                                                                                                                                                                                      |


<!--

## ✨ Estrategias anti-IA incluidas
- Cada script incluye **personalización real** (`whoami`, `date`, nombre propio, mensajes personalizados).  
- Requiere **añadir líneas propias o carpetas inventadas** (no predecibles por una IA).  
- Las **capturas** deben mostrar datos personales del entorno (nombre de usuario, fecha, estructura generada).  
- Se añade un **archivo de reflexión** breve que exige comprensión.  

-->