---
layout: default
title: Actividad 8. Creando nuestro primer videojuego en Scratch
description: Actividad 8 de la SA1
---

# Actividad 8. Creando nuestro primer videojuego en Scratch

¡Ha llegado el momento de poner en práctica todo lo aprendido a lo largo del tema! Durante las actividades anteriores has trabajado con secuencias de instrucciones, algoritmos, bucles (`while`) y condicionales (`if`). 

Ahora utilizaremos **Scratch**, una plataforma visual de programación por bloques creada por el MIT, para diseñar y programar tu propio videojuego interactivo.

> 👉 **Acceso a Scratch**: Puedes utilizar la versión online directamente desde tu navegador en [https://scratch.mit.edu/](https://scratch.mit.edu/) o buscar la aplicación de escritorio **Scratch** en el menú de aplicaciones de LliureX.
{: .alert-info}

---

## 🧭 ¿Cómo funciona Scratch?

En Scratch programamos encajando bloques de colores como si fueran piezas de puzzle:

1. **El Escenario**: Es el espacio donde ocurre la acción del juego. Funciona con un eje de coordenadas cartesiano ($X$ horizontal de $-240$ a $+240$, e $Y$ vertical de $-180$ a $+180$).
2. **Los Objetos (*Sprites*)**: Son los personajes y elementos interactivos del juego. Cada objeto puede tener sus propios programas, disfraces (*costumes*) y sonidos.
3. **La Paleta de Bloques**:
   - 🔵 **Movimiento**: mover, girar y posicionar objetos en la pantalla.
   - 🟣 **Apariencia**: cambiar disfraces, mostrar/ocultar y decir mensajes.
   - 🟡 **Eventos**: activadores como `al presionar bandera verde` o `al presionar tecla`.
   - 🟠 **Control**: bucles (`repetir`, `por siempre`) y condicionales (`si ... entonces`, `si ... si no`).
   - 🩵 **Sensores**: detectar colisiones (`¿tocando objeto?`), pulsación de teclas o coordenadas del ratón.
   - 🟧 **Variables**: almacenar datos que cambian, como los puntos, las vidas o el tiempo.

---

## 🛠️ Parte 1: Construcción guiada del juego base "Atrapa Objetos"

Sigue estos pasos ordenados para crear la mecánica principal de tu juego:

### Paso 1: Elegir escenario y personaje principal
1. Elimina el gato por defecto (o cámbiale el disfraz).
2. Elige un fondo temático desde la biblioteca de fondos (por ejemplo, espacio exterior, bajo el mar, ciudad o cancha).
3. Añade un personaje que será el protagonista controlado por el jugador (por ejemplo, una nave espacial, un buzo, una cesta o un animal).

### Paso 2: Programar el movimiento del jugador
Queremos que el personaje se mueva horizontalmente de izquierda a derecha con las flechas del teclado:

```plaintext
al presionar ⚑
fijar estilo de rotación a [izquierda-derecha]
ir a x: (0) y: (-130)
por siempre
    si <¿tecla [flecha derecha] presionada?> entonces
        cambiar x por (10)
    fin
    si <¿tecla [flecha izquierda] presionada?> entonces
        cambiar x por (-10)
    fin
fin
```

> **Explicación algorítmica**: El bucle `por siempre` comprueba constantemente si el jugador está pulsando alguna tecla. Las instrucciones condicionales `si ... entonces` modifican la coordenada $X$ únicamente cuando la condición se cumple.
{: .alert-info}

### Paso 3: Crear el objeto que cae
1. Añade un segundo objeto que será el elemento que el jugador debe recoger (por ejemplo, una estrella, manzana, moneda o gema).
2. Programa su comportamiento para que caiga desde la parte superior en una posición horizontal aleatoria:

```plaintext
al presionar ⚑
por siempre
    ir a x: (número aleatorio entre -200 y 200) y: (160)
    mostrar
    repetir hasta que <(posición y) < (-150)>
        cambiar y por (-6)
    fin
fin
```

### Paso 4: Detección de colisiones y sistema de puntuación
1. Ve a la sección **Variables** y crea una variable para todos los objetos llamada `Puntos`.
2. En el código del objeto que cae, añade la comprobación de si toca al jugador:

```plaintext
al presionar ⚑
fijar [Puntos v] a [0]
por siempre
    ir a x: (número aleatorio entre -200 y 200) y: (160)
    mostrar
    repetir hasta que <(posición y) < (-150)>
        cambiar y por (-6)
        si <¿tocando [Jugador v]?> entonces
            sumar a [Puntos v] (1)
            iniciar sonido [Collect v]
            ocultar
            ir a y: (-160)
        fin
    fin
fin
```

---

## 🚀 Parte 2: Reto Individual (Personaliza y amplía tu juego)

Una vez completado el juego base, debes aplicar tu creatividad y los conceptos aprendidos para **hacer tu juego único**. Debes implementar obligatoriamente **al menos 3 de las siguientes mejoras**:

1. ⚠️ **Añadir un obstáculo o enemigo**: Un objeto peligroso que cae o se mueve, y que al tocarlo te reste puntos o vidas.
2. ❤️ **Sistema de vidas o energía**: Crear una variable `Vidas` (empezar con 3 vidas). Cada vez que un objeto peligroso te toque o se te escape una estrella, pierdes una vida.
3. ⏱️ **Temporizador hacia atrás**: Una cuenta atrás de 30 segundos. Si el tiempo llega a 0, se acaba la partida.
4. 🏆 **Pantallas de Fin de Partida (Game Over / Victoria)**: Diseña dos fondos nuevos ("Victoria" y "Game Over") y utiliza el bloque `enviar mensaje` y `detener [todos]` cuando se cumpla la condición de ganar o perder.
5. ⚡ **Velocidad incremental o niveles**: Que los objetos caigan progresivamente más rápido a medida que la puntuación aumente.
6. 🎨 **Animaciones y efectos de sonido**: Sonidos para capturas, música de fondo en bucle y cambio de disfraces al moverse.

---

## 📤 Entrega en Aules

Debes enviar a través de Aules:

1. El archivo de tu proyecto de Scratch: en Scratch haz clic en **Archivo → Guardar en tu ordenador** para descargar el archivo `.sb3`. Nómbralo como `apellido_nombre_juego_scratch.sb3`.  
   *(Si utilizas la versión web con cuenta registrada, también puedes pegar el enlace público a tu proyecto).*
2. Una **captura de pantalla** de tu juego en plena acción donde se vea el escenario, tus variables (puntos, vidas, etc.) y tu nombre rotulado.
3. Un breve texto o documento explicando:
   - ¿En qué consiste tu juego?
   - ¿Qué 3 mejoras del reto individual has implementado y cómo las has programado?

---

## 📊 Rúbrica – Actividad 8: Videojuego en Scratch (máx. 10 puntos)

| Criterio | 0 puntos | 1 punto | 2 puntos | 3 puntos |
|---|---|---|---|---|
| **Movimiento y control del jugador** | El personaje no responde a los controles o no se mueve correctamente. | Movimiento tosco o con fallos de dirección. | Movimiento fluido, reactivo y con límites de pantalla controlados. | – |
| **Generación y caída de objetos** | No hay objetos cayendo o el bucle falla. | Objeto con trayectoria fija sin aleatoriedad ni reinicio adecuado. | Objetos que caen con coordenadas aleatorias y reinicio continuo correcto. | – |
| **Puntuación y colisiones (Variables + Condicionales)** | No detecta toques ni gestiona variables. | Detecta colisiones pero la puntuación no se actualiza o suma erróneamente. | Colisión precisa con sonido y variable de puntos inicializada y gestionada correctamente. | – |
| **Reto individual y mejoras personales** | No incluye mejoras respecto al juego base. | Implementa 1 mejora funcional. | Implementa 2 mejoras funcionales. | Implementa las 3 mejoras creativas y perfectamente integradas (vidas, enemigos, Game Over, etc.). |
| **Diseño visual, código limpio y entrega** | Entrega incompleta, sin identificar o código desordenado. | Excelente estética (fondos, disfraces, sonidos), código limpio y entrega puntual con explicación. | – | – |

---

## 📌 Criterios de evaluación asociados

- **CE2.1**: Analizar problemas elementales significativos para el alumnado, mediante la abstracción y modelización de la realidad.
- **CE2.3**: Resolver de forma guiada problemas elementales utilizando los algoritmos y las estructuras de datos necesarias.
- **CE2.4**: Programar aplicaciones sencillas de forma guiada para resolver problemas elementales.
- **CE4.1**: Participar activamente en el diseño y desarrollo de soluciones digitales colaborativas y creativas.
