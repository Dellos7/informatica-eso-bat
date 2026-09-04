# EJERCICIOS TEMA 2
## Organización de la información: Archivos y Carpetas en LliureX

**Asignatura:** TRDR (Taller de Relacions Digitals Responsables)  
**Curso / Nivel:** 1.º ESO  
**Entorno de trabajo:** LliureX (Escritorio / Dolphin)  
**Archivo de recursos base:** [`LLiurexBasico.zip`](file:///c:/Users/David/Documents/informatica-eso-bat/informatica-eso-bat/archivos/trdr/LLiurexBasico.zip)  

---

> [!NOTE]
> **NOTA PARA EL ALUMNADO:**  
> Escribe tus respuestas en un **color diferente** al de las preguntas (por ejemplo, en azul oscuro o verde) o rellenando los espacios señalados. Guarda este documento periódicamente en tu carpeta personal dentro de `Documentos`.

---

# BLOQUE 1: Conceptos Básicos y el Explorador Dolphin (Sesión 1)

---

### 1.º) Archivos, carpetas y soportes de almacenamiento

1. **Concepto de archivo (o fichero):** Explica con tus propias palabras qué es un archivo en informática y pon tres ejemplos con extensiones diferentes (por ejemplo, una foto, un documento de texto o una canción).
   - *Respuesta:* __________________________________________________________________________________
   - *Ejemplo 1 (Documento):* _______________________
   - *Ejemplo 2 (Imagen):* _______________________
   - *Ejemplo 3 (Audio):* _______________________

2. **Concepto de carpeta (o directorio):** ¿Para qué sirve una carpeta en el ordenador? ¿Puede una carpeta contener a la vez archivos y otras carpetas? Pon un ejemplo de la vida real que funcione igual que una carpeta.
   - *Respuesta:* __________________________________________________________________________________
   - *Ejemplo de la vida real:* ____________________________________________________________________

3. **Dispositivos y soportes de almacenamiento:** Completa la siguiente tabla indicando qué ventajas e inconvenientes tiene cada tipo de soporte y para qué lo utilizarías tú:

| Dispositivo de almacenamiento | ¿Es portátil? | Ventaja principal | Inconveniente o riesgo | ¿Qué guardarías aquí? |
| :--- | :---: | :--- | :--- | :--- |
| **Disco Duro interno / SSD** (Dentro del ordenador) | No | Gran velocidad y capacidad | Si el equipo se avería no se puede transportar fácilmente | Sistema operativo, programas y juegos principales |
| **Memoria USB (Pendrive)** | Sí | Fácil de transportar a clase | _________________________________ | _________________________________ |
| **Almacenamiento en la Nube** (Aules / Google Drive / OneDrive) | Sí (vía Internet) | Accesible desde cualquier dispositivo | _________________________________ | _________________________________ |

4. **Pregunta de reflexión:** Imagina que tienes las fotos de tus últimas vacaciones familiares. ¿En qué soporte guardarías la copia de seguridad para asegurarte de que nunca se van a perder aunque se rompa el ordenador de casa? Justifica tu elección.
   - *Respuesta:* __________________________________________________________________________________

---

### 2.º) Anatomía del Explorador de ficheros Dolphin

En LliureX, el programa principal para explorar nuestros archivos y carpetas se llama **Dolphin**. Observa la siguiente imagen numerada e identifica cada una de sus partes principales:

```
+-----------------------------------------------------------------------------------+
|  [ 1. Barra de Herramientas: Atrás, Adelante, Vistas ]                            |
+----------------------+------------------------------------------------------------+
|  [ 2. Panel de       |  [ 3. Barra de ruta / Migas de pan: /home/usuario/... ]    |
|       Lugares ]      +------------------------------------------------------------+
|  - Carpeta personal  |  [ 4. Vista Principal / Área de contenido ]                |
|  - Documentos        |                                                            |
|  - Descargas         |   [Carpeta A]    [Carpeta B]    [Archivo.txt]              |
|  - Imágenes          |                                                            |
|  - Papelera          |                                                            |
|  - Memoria USB       |                                                            |
+----------------------+------------------------------------------------------------+
|  [ 5. Panel de Información (F11) / Terminal (F4) ]                                |
+-----------------------------------------------------------------------------------+
|  [ 6. Barra de Estado: Elementos libres, Tamaño, Control de Zoom ]                |
+-----------------------------------------------------------------------------------+
```

Escribe a continuación el nombre correcto de cada una de las 6 zonas numeradas:

1. _____________________________________________________________ *(Permite retroceder, avanzar y cambiar la forma en que se muestran los iconos).*
2. _____________________________________________________________ *(Muestra accesos directos rápidos a las carpetas más usadas y a los dispositivos conectados).*
3. _____________________________________________________________ *(Muestra el camino exacto o ruta donde nos encontramos dentro del disco).*
4. _____________________________________________________________ *(Muestra los archivos y subcarpetas que están dentro de la carpeta activa).*
5. _____________________________________________________________ *(Muestra una previsualización y los detalles técnicos del archivo seleccionado al pulsar F11).*
6. _____________________________________________________________ *(Informa sobre el número de elementos contenidos y el espacio libre restante).*

* **Atajo de teclado especial:** En Dolphin, si pulsamos la tecla **`F3`**, la pantalla se divide en dos paneles independientes. ¿Para qué crees que puede ser muy útil tener dos carpetas abiertas una al lado de la otra?
  - *Respuesta:* __________________________________________________________________________________

---

### 3.º) Descarga, descompresión y puesta a punto de `LLiurexBasico.zip`

Para realizar las actividades prácticas de esta unidad, vamos a descargar y colocar en su sitio los materiales de trabajo. Sigue con atención los siguientes pasos:

1. Descarga desde la plataforma educativa (Aules o web de la asignatura) el archivo comprimido llamado **`LLiurexBasico.zip`**.
2. Al descargarse, el archivo irá por defecto a la carpeta **`Descargas`** (o *Baixades*).
3. Abre Dolphin, localiza el archivo en `Descargas`, haz clic derecho sobre él y selecciona **Cortar** (o pulsa `Ctrl + X`).
4. Ve en el panel izquierdo a tu carpeta **`Documentos`** y pega el archivo allí (con Clic derecho -> **Pegar** o pulsando `Ctrl + V`).
5. Haz clic derecho sobre `LLiurexBasico.zip` dentro de `Documentos` y elige la opción **Extraer -> Extraer archivo comprimido aquí**. Se creará la carpeta **`LliurexBasico`**.

Una vez completada la descompresión, responde a las siguientes preguntas de comprobación:

1. Abre tu **Carpeta Personal** (tu usuario de LliureX). Escribe los nombres de al menos 4 carpetas predeterminadas que crea el sistema operativo:
   - ______________________, ______________________, ______________________, ______________________
2. Entra en `Documentos/LliurexBasico`. ¿Cuántas carpetas principales hay dentro de ella? Anota sus nombres:
   - *Número de carpetas:* ________
   - *Nombres:* __________________________________________________________________________________
3. Entra en la carpeta `LliurexBasico/01_Exploracion/Instituto/1ESO/Informatica`.
   - ¿Cuántos ficheros hay dentro? ________
   - ¿Cuáles son sus nombres completos con extensión? _____________________________________________
4. Entra en la carpeta `LliurexBasico/01_Exploracion/Instituto/Biblioteca`.
   - ¿Cuántos ficheros hay? ________
   - ¿Cuáles son sus nombres? ___________________________________________________________________

---

# BLOQUE 2: Operaciones Esenciales con Archivos y Carpetas (Sesiones 2 y 3)

---

### 4.º) Lectura e interpretación de rutas y relaciones Padre/Hijo

Cuando navegamos por el ordenador, las carpetas forman un árbol jerárquico donde unas carpetas contienen a otras. Entra en Dolphin en la siguiente carpeta:
`Documentos/LliurexBasico/01_Exploracion/Instituto/1ESO`

Responde a las siguientes preguntas técnicas fijándote en la ventana de Dolphin:

1. **Carpeta activa:** ¿Cuál es la carpeta en la que te encuentras en este momento?
   - *Respuesta:* _____________________________________________
2. **Ruta absoluta:** Escribe la ruta completa que aparece en la barra superior (debe empezar por `/home/...`):
   - *Respuesta:* `/home/___________________________________________________________________________`
3. **Carpeta Padre:** ¿Cuál es la carpeta que está justo un nivel por encima (su carpeta contenedora)?
   - *Respuesta:* _____________________________________________
4. **Carpetas Hijas (subcarpetas):** ¿Qué subcarpetas están contenidas directamente dentro de la carpeta activa?
   - *Respuesta:* __________________________________________________________________________________
5. **Ficheros Hijos:** ¿Hay algún fichero suelto directamente dentro de `1ESO` o solo hay carpetas?
   - *Respuesta:* _____________________________________________

---

### 5.º) Práctica de creación: Tu propio espacio de trabajo escolar

En lugar de tener todos los trabajos desordenados en el escritorio o en `Descargas`, vamos a crear una estructura limpia, ordenada y profesional para tus asignaturas de 1.º ESO.

Crea dentro de tu carpeta **`Documentos`** (o en la raíz de tu memoria USB) la siguiente estructura de directorios:

```
Mi_Instituto_1ESO/
├── TRDR/
│   ├── Apuntes/
│   └── Practicas/
├── Matematicas/
│   └── Ejercicios/
├── Castellano/
│   └── Lecturas/
└── Ingles/
    └── Vocabulario/
```

**Instrucciones paso a paso:**
1. Ve a `Documentos`. Pulsa la tecla **`F10`** (o clic derecho en un espacio vacío -> *Crear nuevo -> Carpeta*).
2. Nómbrala exactamente: `Mi_Instituto_1ESO`.
3. Entra en ella y crea las cuatro carpetas principales de asignaturas (`TRDR`, `Matematicas`, `Castellano`, `Ingles`).
4. Entra en cada una de ellas y crea las subcarpetas indicadas en el esquema.

**Preguntas de control:**
- ¿Qué atajo de teclado te permite crear una carpeta nueva en Dolphin de forma inmediata sin usar el ratón?
  - *Respuesta:* _______________________
- ¿Por qué es una mala costumbre guardar todos los documentos directamente en el Escritorio del ordenador?
  - *Respuesta:* __________________________________________________________________________________

---

### 6.º) Mover vs. Copiar: La gran diferencia

Muchos usuarios confunden estas dos operaciones básicas, lo que provoca duplicados innecesarios o pérdidas de documentos.

> [!IMPORTANT]
> - **Copiar (`Ctrl + C` y luego `Ctrl + V`):** Crea un clon exacto. El archivo original **permanece intacto** en el origen y aparece un duplicado idéntico en el destino.
> - **Mover (`Ctrl + X` y luego `Ctrl + V` o arrastrar):** Traslada el archivo. El archivo **desaparece del origen** y se reubica en la nueva carpeta.

Abre la carpeta `LliurexBasico/02_Mover_y_Copiar`. Verás dos carpetas: `Bandeja_Entrada` y `Mi_Carpeta`. Realiza los siguientes experimentos guiados:

1. **Operación COPIAR:**
   - Entra en `Bandeja_Entrada`. Selecciona el archivo `Proyecto_Tecnologia.txt`.
   - Cópialo (`Ctrl + C`).
   - Ve a `02_Mover_y_Copiar/Mi_Carpeta/Documentos_Clase` y pégalo (`Ctrl + V`).
   - Vuelve a la carpeta `Bandeja_Entrada`. ¿Sigue allí el archivo `Proyecto_Tecnologia.txt`?
     - *Respuesta:* ________
   - ¿Cuántos archivos con ese nombre existen ahora en tu disco? ________

2. **Operación MOVER:**
   - En `Bandeja_Entrada`, selecciona la imagen `Foto_Excursion.jpg`.
   - Córtala (`Ctrl + X`).
   - Ve a `02_Mover_y_Copiar/Mi_Carpeta/Fotos` y pégala (`Ctrl + V`).
   - Regresa a `Bandeja_Entrada`. ¿Sigue estando allí `Foto_Excursion.jpg`?
     - *Respuesta:* ________
   - Explica por qué ya no está en la carpeta de origen: _____________________________________________

3. **Mover con arrastre de ratón:**
   - Selecciona `Autorizacion_Excursion.txt` en `Bandeja_Entrada` y arrástralo con el botón izquierdo del ratón sobre la carpeta `Documentos_Clase`. Cuando sueltes el botón, LliureX te preguntará si quieres *Mover aquí* o *Copiar aquí*. Elige **Mover aquí**.

---

### 7.º) Detección de errores y renombrado rápido (Tecla F2)

En informática es fundamental nombrar los archivos de forma limpia, sin faltas ortográficas y comprensible para cualquier persona.

Entra en la carpeta `LliurexBasico/03_Correccion_Nombres`. Encontrarás varios archivos y una carpeta con faltas de ortografía muy graves:

- `Grasias_por_venir.txt`
- `Vruto_y_Neto.txt`
- `Hojala_haga_sol.txt`
- Carpeta: `Viajes_Inbolvidables`

**Instrucciones:**
1. Haz un solo clic sobre el archivo `Grasias_por_venir.txt` y pulsa la tecla **`F2`** del teclado.
2. Escribe el nombre correcto (`Gracias_por_venir.txt`) y pulsa **Enter**.
3. Haz lo mismo con los otros archivos y con la carpeta para corregir todas las faltas:
   - `Vruto_y_Neto.txt` ➔ __________________________________________________
   - `Hojala_haga_sol.txt` ➔ __________________________________________________
   - Carpeta `Viajes_Inbolvidables` ➔ __________________________________________________

**Pregunta técnica clave:**
Cuando pulsas **`F2`** sobre un archivo (por ejemplo, `Gracias_por_venir.txt`), fíjate bien en qué parte del texto selecciona Dolphin automáticamente en color azul:
- ¿Selecciona también el punto y las tres letras de la extensión (`.txt`) o selecciona únicamente el nombre?
  - *Respuesta:* __________________________________________________________________________________
- ¿Por qué crees que Dolphin hace esto para protegernos?
  - *Respuesta:* __________________________________________________________________________________

---

### 8.º) Selección múltiple avanzada (Ratón + Teclado: Ctrl vs. Shift)

Seleccionar archivos uno a uno es muy lento. Los usuarios expertos utilizan atajos combinados con el teclado para seleccionar decenas de ficheros en un segundo.

> [!TIP]
> - **`Ctrl + Clic` (Selección discontinua):** Permite ir haciendo clic en elementos salteados (no seguidos) para sumarlos o restarlos a la selección.
> - **`Shift + Clic` (Mayús + Clic, Selección en bloque continuo):** Haces clic en el primer archivo de la lista, mantienes pulsada la tecla **Mayús (Shift)** y haces clic en el último archivo: se seleccionan de golpe todos los archivos intermedios.

Entra en la carpeta `LliurexBasico/04_Seleccion_Multiple/Zoologico`. Verás imágenes de diferentes tipos de animales mezcladas.

1. **Misión 1 - Peces al Acuario (Uso de `Ctrl + Clic`):**
   - Mantén pulsada la tecla **`Ctrl`** y haz clic sobre cada uno de los 4 peces: `Pez_Anguila.png`, `Pez_Calandino.png`, `Pez_Carpa.png` y `Pez_Trucha.png`.
   - Una vez los cuatro estén resaltados, pulsa `Ctrl + X` (Cortar).
   - Ve a la carpeta `LliurexBasico/04_Seleccion_Multiple/Acuario` y pégalos (`Ctrl + V`).
   - ¿Se han trasladado los 4 a la vez de un solo viaje? ________

2. **Misión 2 - Invertebrados a su carpeta (Uso de `Shift + Clic`):**
   - Vuelve a `Zoologico`. Haz clic en el primer molusco (`Molusco_Almeja.png`).
   - Mantén pulsada la tecla **`Shift` (Mayús)** y haz clic en el último (`Molusco_Pulpo.png`).
   - Comprueba que todos los moluscos intermedios se han seleccionado a la vez.
   - Muévelos a la carpeta `04_Seleccion_Multiple/Invertebrados`.

3. **Misión 3 - El resto al Terrario:**
   - Selecciona los animales vertebrados restantes y muévelos a `04_Seleccion_Multiple/Terrario`.
   - ¿Qué atajo de teclado te permite seleccionar **TODOS** los elementos de una carpeta de una sola vez? (Pista: empieza por Ctrl):
     - *Respuesta:* `Ctrl + ____`

---

# BLOQUE 3: Extensiones, Papelera y Reto Gamificado (Sesión 4)

---

### 9.º) Detectives de extensiones de archivo

La extensión de un archivo son las letras que van después del punto al final de su nombre (por ejemplo, `.odt`, `.pdf`, `.png`). Es como el "apellido" del archivo: le indica al sistema operativo qué tipo de contenido alberga y con qué programa debe abrirse.

Entra en `LliurexBasico/05_Detectives_Extensiones`. Analiza los archivos y completa la tabla de detectives:

| Nombre del archivo | Extensión | Programa predeterminado en LliureX | ¿Qué tipo de información contiene? |
| :--- | :---: | :--- | :--- |
| `Trabajo_Historia.odt` | `.odt` | LibreOffice Writer | Documento de texto con formato |
| `Guia_Parque.pdf` | `______` | ______________________________ *(Visor Okular)* | Documento para leer o imprimir |
| `Mascota_Lliurex.png` | `______` | ______________________________ *(Visor Gwenview)* | ______________________________ |
| `Podcast_Tecnologia.mp3` | `______` | ______________________________ *(Reproductor VLC)* | ______________________________ |
| `Paquete_Materiales.zip` | `______` | ______________________________ *(Ark)* | ______________________________ |
| `Nota_Urgente.txt` | `______` | ______________________________ *(KWrite / Kate)* | ______________________________ |
| `Archivo_Misterioso_Sin_Extension`| *(Ninguna)*| ______________________________ | Archivo sin formato reconocido |

**Experimento de laboratorio:**
1. Haz una copia del archivo `Mascota_Lliurex.png` y nómbrala `Prueba.txt` (cambiando `.png` por `.txt`).
2. Observa el icono del archivo: ¿Ha cambiado de apariencia? ________
3. Haz doble clic para abrirlo: ¿Se abre ahora la imagen en Gwenview o se abre un visor de texto con símbolos extraños?
   - *Respuesta:* __________________________________________________________________________________
4. ¿Se ha destruido la foto o simplemente el ordenador está confundido porque le hemos cambiado el "apellido"?
   - *Respuesta:* __________________________________________________________________________________

---

### 10.º) La Papelera de reciclaje a prueba (Seguridad y Rescate)

La Papelera de reciclaje es una red de seguridad que evita que perdamos trabajos importantes por un descuido o error.

Entra en la carpeta `LliurexBasico/06_Papelera` y realiza las siguientes comprobaciones:

1. **Eliminar a la papelera:**
   - Selecciona el archivo `Borrame_A_La_Papelera.txt` y pulsa la tecla **`Supr`** (Delete).
   - El archivo desaparece de la carpeta. Abre la **Papelera** desde el panel lateral izquierdo de Dolphin.
   - ¿Aparece el archivo allí dentro? ________
2. **Restaurar:**
   - Haz clic derecho sobre `Borrame_A_La_Papelera.txt` dentro de la Papelera y selecciona la opción **Restaurar**.
   - Vuelve a la carpeta `LliurexBasico/06_Papelera`. ¿Ha regresado el archivo a su ubicación exacta original? ________
3. **Eliminación definitiva (Shift + Supr):**
   - Selecciona el archivo `Borrame_Definitivo_ShiftSupr.txt`.
   - Mantén pulsada la tecla **Mayús (Shift)** y pulsa la tecla **`Supr`** (`Shift + Supr`).
   - Lee con atención la ventana de alerta que muestra el sistema. ¿Qué pregunta o advertencia hace Dolphin?
     - *Respuesta:* __________________________________________________________________________________
   - Haz clic en eliminar y ve a revisar la Papelera. ¿Está el archivo en la papelera? ________
   - ¿Se puede recuperar este archivo con el botón Restaurar? ________
   - ¿Por qué debemos tener mucho cuidado antes de usar el atajo `Shift + Supr`?
     - *Respuesta:* __________________________________________________________________________________

---

### 11.º) Reto Lúdico Final: Sopa de Letras de Operaciones y Chuleta de Atajos

Demuestra lo que has aprendido completando el reto de operaciones con archivos y carpetas.

**Palabras clave a buscar:**  
`ARCHIVO` • `CARPETA` • `DOLPHIN` • `EXTENSION` • `COPIAR` • `MOVER` • `BORRAR` • `RENOMBRAR` • `CREAR` • `RECUPERAR`

```
Y  X  R  E  N  O  M  B  R  A  R  P  N
X  A  T  S  D  Y  R  U  H  H  M  M  B
P  E  C  J  F  U  A  Q  E  R  B  T  C
W  L  Y  D  P  R  I  R  B  A  X  R  W
Q  I  T  K  P  W  P  X  O  N  X  A  H
M  M  Q  J  T  E  O  H  K  O  T  J  R
O  I  L  Q  L  T  C  V  Y  I  V  V  U
V  N  C  R  E  A  R  Q  H  C  V  X  Y
E  A  C  R  A  R  E  P  U  C  E  R  N
R  R  O  D  K  U  H  D  K  E  K  N  R
A  C  H  E  X  K  O  F  X  L  R  I  Y
L  J  Q  N  I  P  M  O  W  E  L  Y  J
Q  P  X  B  P  K  O  A  V  S  A  F  I
```

> [!TIP]
> **Versión interactiva en línea:** También puedes jugar a la versión digital interactiva de esta actividad en [Educaplay - Operaciones con ficheros](https://es.educaplay.com/juego/13605672-operaciones_con_ficheros.html).

---

### 🚀 Tu "Chuleta Digital" de Atajos Imprescindibles

Guarda esta tabla para usarla durante todo el curso en la sala de informática:

| Atajo de teclado | Acción que realiza en Dolphin / LliureX |
| :--- | :--- |
| **`F2`** | Renombrar rápidamente el archivo o carpeta seleccionado. |
| **`F3`** | Dividir la ventana en dos paneles para copiar o mover cómodamente. |
| **`F10`** | Crear una nueva carpeta inmediatamente. |
| **`F11`** | Mostrar / ocultar el panel de información lateral. |
| **`Ctrl + C`** | Copiar el elemento seleccionado al portapapeles (duplicar). |
| **`Ctrl + X`** | Cortar el elemento seleccionado (preparar para mover). |
| **`Ctrl + V`** | Pegar el elemento copiado o cortado en la carpeta actual. |
| **`Ctrl + A`** | Seleccionar **todos** los archivos y carpetas del directorio activo. |
| **`Ctrl + Clic`** | Seleccionar o deseleccionar archivos salteados (selección discontinua). |
| **`Shift + Clic`** | Seleccionar todos los archivos seguidos entre el primero y el último (en bloque). |
| **`Supr`** | Enviar el archivo o carpeta a la Papelera de reciclaje (se puede recuperar). |
| **`Shift + Supr`** | **Eliminar definitivamente** sin pasar por la papelera (¡Irrecuperable!). |

---
