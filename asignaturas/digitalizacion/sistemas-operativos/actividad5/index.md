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

## 🧩 Tarea 1 – Crear estructura básica

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

## 🧹 Tarea 2 – Borrar la estructura anterior

> **Solo puedes utilizar** para esta tarea los métodos explicados en los apartados 1 y 2 de los apuntes.
{: .alert-error}

- Los scripts **tarea3.sh** y **tarea4.sh**.  
- Las **capturas de pantalla** con las ejecuciones (deben verse los mensajes personalizados y tu nombre de usuario), tanto en tu **ordenador local** como en **el servidor**.