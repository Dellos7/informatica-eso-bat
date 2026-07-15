---
layout: default
title: Actividad 6
description: Tema 1
---

## 🍽️ Tarea 3 – Crear carpetas desde un fichero

Lee ahora también el apartado *Scripts que son capaces de leer un fichero* de los apuntes.

1. Crea la carpeta **Tarea-3** dentro de **Actividad-5**.  
2. Realiza un script llamado **`tarea3.sh`** que:
   - Lea las rutas de carpetas del archivo **`recetas.txt`** (adjunto a la tarea).  
   - Cree todas las carpetas usando `while / done`.  
   - **Añadas 2 carpetas inventadas por ti** al final del archivo `recetas.txt`.  
3. Después de crear las carpetas, el script debe:
   - Descargar el archivo:  
     ```
     davidlopezcastellote.com/terminal/fotos_comida.zip
     ```
   - Descomprimirlo.  
   - Copiar las imágenes `macarrons.jpg`, `paella.jpg` y `arros al forn.jpg` en la carpeta `Recetas/Platos`.  
   - Mostrar un mensaje `echo` (personalizado con tu nombre de usuario) después de cada comando.  
     Ejemplo:  
     ```bash
     echo "($USUARIO) Copiando imágenes a Recetas/Platos..."
     ```
4. Copia también el archivo `recetas.txt` al servidor, junto con tu script, y ejecútalo allí.

📸 **Captura obligatoria:** ejecución en el servidor (debe verse tu usuario y los mensajes personalizados).

---

## 🍎 Tarea 4 – Leer varios ficheros y copiar imágenes

1. Crea la carpeta **Tarea-4** dentro de **Actividad-5**.  
2. Crea un script llamado **`tarea4.sh`** que:
   - Descargue el archivo:  
     ```
     davidlopezcastellote.com/terminal/frutas_y_verduras.zip
     ```
   - Lo descomprima.  
   - Lea el archivo **`carpetas_frutas_verduras.txt`** y cree las carpetas correspondientes con `while / done`.  
   - Lea el archivo **`fotos_frutas_y_verduras.txt`** y copie cada imagen en la carpeta indicada.  
   - Muestre mensajes `echo` indicando cada acción, incluyendo tu nombre de usuario.  
3. **Personaliza** tu script añadiendo una línea final que cree una carpeta con tu nombre (por ejemplo, `mkdir "$USUARIO"`).  
   Esto servirá como comprobación de que el script fue realmente tuyo.

📸 **Captura obligatoria:** debe verse el árbol de carpetas creado (por ejemplo, con `tree`) y tu nombre de usuario.

---

## 📦 Entrega

Debes entregar:

- Los scripts **tarea1.sh**, **tarea2.sh**, **tarea3.sh** y **tarea4.sh**.  
- Las **capturas de pantalla** con las ejecuciones (deben verse los mensajes personalizados y tu nombre de usuario).  
- Un archivo de texto **`reflexion.txt`** con las respuestas a estas 3 preguntas:
  1. ¿Qué parte del trabajo te resultó más útil o interesante?  
  2. ¿Qué comando de bash no entendías al principio y ahora sí?  
  3. ¿Qué crees que podrías automatizar con scripts en el futuro?

---

<!--

## ✨ Estrategias anti-IA incluidas
- Cada script incluye **personalización real** (`whoami`, `date`, nombre propio, mensajes personalizados).  
- Requiere **añadir líneas propias o carpetas inventadas** (no predecibles por una IA).  
- Las **capturas** deben mostrar datos personales del entorno (nombre de usuario, fecha, estructura generada).  
- Se añade un **archivo de reflexión** breve que exige comprensión.  

-->