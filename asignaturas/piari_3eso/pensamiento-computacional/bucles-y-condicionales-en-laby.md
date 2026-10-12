---
layout: default
title: Bucles y condicionales en Laby
description: Tema 1
---

# Bucles y condicionales en Laby
{: .no_toc }

* TOC
{:toc}

---

## Introducción

En la actividad inicial de Laby aprendiste a controlar la hormiga mediante **secuencias de instrucciones directas** (`avanzar()`, `derecha()`, `izquierda()`, `tomar()`, `dejar()`, `escapar()`).

Sin embargo, en retos más avanzados nos encontramos con dos situaciones muy habituales:
1. **Caminos largos o repetitivos**: no resulta eficiente escribir `avanzar()` decenas de veces cuando podemos ordenar que la hormiga avance de forma automática.
2. **Entornos dinámicos o desconocidos**: hay laberintos donde los obstáculos cambian de posición aleatoriamente o no sabemos cuántos pasos faltan para la salida.

Para resolver estos problemas con algoritmos inteligentes y limpios, en programación empleamos dos estructuras esenciales:
- **Bucles (`while`)**: repiten una o más instrucciones mientras se cumpla una condición.
- **Condicionales (`if` / `else`)**: toman decisiones y ejecutan instrucciones solo si ocurre una circunstancia concreta.

> 💡 **Recuerda:** el funcionamiento básico de la interfaz y las instrucciones de movimiento se explican en la guía de [Funcionamiento de Laby](../funcionamiento-de-laby).
{: .alert-info}

---

## La función para detectar el entorno: `mirar()` {#laby-mirar}

Para que un bucle o un condicional funcione, la hormiga necesita **saber qué tiene delante**. En Laby disponemos de la función `mirar()` (o `look()` en inglés).

> ⚠️ **IMPORTANTE:** la función `mirar()` **solo comprueba la casilla situada inmediatamente delante** de la hormiga (en la dirección hacia donde apunta su cabeza). No detecta lo que hay a los lados ni detrás.
{: .alert-warning}

### Constantes devueltas por `mirar()`

Cuando ejecutamos `mirar()`, la función nos devuelve el tipo de elemento presente en la casilla frontal. Las constantes disponibles según el idioma configurado en el juego son:

| Elemento del laberinto | Castellano | Valenciano | Inglés | Descripción |
|:---|:---|:---|:---|:---|
| **Casilla vacía / suelo libre** | `Void` | `Buit` | `Void` | Espacio despejado por el que la hormiga puede caminar. |
| **Muro** | `Pared` | `Paret` | `Wall` | Muro fijo que la hormiga no puede atravesar. |
| **Piedra / roca** | `Piedra` | `Pedra` | `Rock` | Bloquea el paso. Se puede recoger con `tomar()`. |
| **Telaraña mortal** | `Telarana` | `Web` | `Web` | Telaraña grande que atrapa y mata a la hormiga si la pisa. |
| **Puerta de salida** | `Salir` | `Sortir` | `Exit` | Meta del laberinto. Al estar frente a ella se usa `escapar()`. |
| **Desconocido** | `Desconocido` | `Desconegut` | `Unknown` | Casilla fuera del mapa o no reconocida. |

> 📌 **Detalles clave de escritura en Laby:**
> - Las constantes **empiezan siempre con mayúscula inicial**: `Void`, `Pared`, `Piedra`, `Telarana`, `Salir`.
> - **En castellano:** la casilla vacía se nombra en inglés (`Void`) y la telaraña se escribe sin virgulilla (`Telarana`), para garantizar la compatibilidad con el intérprete de Python.
> - **En valenciano:** la telaraña mantiene el término `Web`.
{: .alert-tip}

---

## Reglas de sintaxis en Python {#laby-sintaxis-python}

Antes de escribir bucles y condicionales, debes tener en cuenta tres normas fundamentales del lenguaje Python:

### 1. Operadores de comparación

Para comparar lo que devuelve `mirar()` utilizamos los siguientes operadores:

- `==` (**igual a**): comprueba si lo que hay delante coincide exactamente con el elemento indicado.
  ```python
  mirar() == Void       # ¿La casilla de enfrente está vacía?
  ```
- `!=` (**distinto de**): comprueba si lo que hay delante es diferente del elemento indicado.
  ```python
  mirar() != Salir      # ¿La casilla de enfrente todavía no es la salida?
  ```

> ⚠️ **¡No confundas `=` con `==`!**  
> Un solo igual (`=`) se usa para asignar valores a variables. Para hacer comprobaciones y comparaciones lógicas en un `while` o `if`, **siempre se utiliza el doble igual (`==`)**.
{: .alert-error}

### 2. Los dos puntos (`:`)

Toda línea que comience con `while`, `if` o `else` debe terminar obligatoriamente con el carácter de **dos puntos (`:`)**.

### 3. La sangría o indentación (Regla de oro de Python)

A diferencia de otros lenguajes o bloques donde se usa `inicio` / `fin`, en Python **la pertenencia de las instrucciones se define mediante la sangría (espacios a la derecha)**:

- Todo el código que deba ejecutarse **dentro** del bucle o condicional tiene que estar desplazado hacia la derecha (normalmente **4 espacios** o **1 pulsación de la tecla Tabulador**).
- Si olvidas sangrar las instrucciones o mezclas espacios de forma irregular, el juego mostrará un error: `IndentationError`.

---

## Bucles con `while` {#laby-bucles-while}

Un bucle `while` ejecuta de forma repetitiva un bloque de código **mientras su condición sea verdadera**.

```python
while condicion:
    instruccion_1
    instruccion_2
```

El flujo funciona de la siguiente manera:
1. Comprueba la condición.
2. Si se cumple (`True`), ejecuta las instrucciones con sangría.
3. Vuelve a comprobar la condición.
4. En cuanto la condición deja de cumplirse (`False`), el bucle finaliza y continúa con la siguiente línea sin sangría.

### Ejemplo 1: Avanzar hasta la salida (Nivel 2a)

En lugar de contar casillas y escribir `avanzar()` muchas veces, le indicamos a la hormiga que avance mientras la casilla de enfrente esté libre:

```python
# Avanza automáticamente mientras el camino esté despejado
while mirar() == Void:
    avanzar()

# Cuando ya no hay casilla vacía delante (ha llegado a la puerta), salimos
escapar()
```

También podemos expresar la condición con el operador distinto de (`!=`):

```python
# Avanza mientras no tengamos la puerta de salida delante
while mirar() != Salir:
    avanzar()

escapar()
```

*(En Valenciano: `while mirar() == Buit: endavant()` y `escapar()`)*

---

### Ejemplo 2: Despejar obstáculos en bucle (Nivel 2b - El pasillo de rocas)

En el nivel 2b encontramos un pasillo bloqueado por una hilera continua de piedras. La hormiga debe retirar cada piedra para poder seguir avanzando:

```plaintext
o o o o o o o o o o o o o o
o → . r r r r r r r r r . x
o o o o o o o o o o o o o o
```

**Algoritmo a seguir en cada repetición:**
1. Coger la piedra situada delante con `tomar()`.
2. Girar 180º (dos giros a la derecha o a la izquierda) para mirar hacia atrás.
3. Soltar la piedra en el espacio vacío que dejamos atrás con `dejar()`.
4. Volver a girar 180º para mirar nuevamente hacia el frente del pasillo.
5. Avanzar un paso a la casilla recién liberada con `avanzar()`.

**Código de la solución:**

```python
# Mientras haya una piedra delante, la retiramos hacia atrás y avanzamos
while mirar() == Piedra:
    tomar()
    derecha()
    derecha()
    dejar()
    derecha()
    derecha()
    avanzar()

# Al terminar el bucle de piedras, avanzamos hasta la puerta y escapamos
while mirar() == Void:
    avanzar()

escapar()
```

---

## Condicionales con `if` y `else` {#laby-condicionales-if}

Un condicional permite que el robot **tome decisiones**: analiza el estado de su entorno y ejecuta un conjunto de instrucciones u otro según el resultado.

```python
if condicion:
    # Se ejecuta solo si la condición es VERDADERA
else:
    # Se ejecuta si la condición es FALSA (opcional)
```

### Ejemplo: El dilema de las telarañas (Nivel 3a)

En el nivel 3a hay dos pasillos paralelos que conducen a la meta. Sin embargo, en cada partida **una telaraña grande y mortal (`Telarana` / `Web`) aparece de forma aleatoria en uno de los dos caminos**, mientras que el otro camino queda libre.

Si la hormiga avanza a ciegas hacia la telaraña mortal, quedará atrapada y la partida terminará. Por ello, debemos inspeccionar primero:

```python
# Colocamos a la hormiga mirando hacia el pasillo izquierdo
izquierda()

# Comprobamos si ese pasillo tiene la telaraña mortal
if mirar() == Telarana:
    # Si hay telaraña peligrosa a la izquierda, nos damos la vuelta hacia el pasillo derecho
    derecha()
    derecha()
    avanzar()
else:
    # Si no hay telaraña (camino seguro), avanzamos por la izquierda
    avanzar()
```

De esta forma, independientemente de en qué lado aparezca la trampa mortal, el programa siempre tomará la decisión correcta.

---

## Combinar bucles y condicionales {#laby-combinar}

En problemas complejos es muy común **anidar una estructura condicional (`if`) dentro de un bucle (`while`)**.

Por ejemplo, si la hormiga debe recorrer un laberinto hasta encontrar la salida, pero a lo largo del trayecto pueden aparecer piedras aisladas en algunas casillas:

```python
while mirar() != Salir:
    if mirar() == Piedra:
        tomar()
    else:
        avanzar()

escapar()
```

En cada iteración del bucle, la hormiga comprueba si tiene una piedra delante:
- Si hay una piedra, la recoge.
- Si no hay piedra, avanza hacia la meta.

---

## Procedimientos y funciones con `def` (Nivel 2c - Zig Zag) {#laby-funciones}

En niveles extensos con pasillos repetitivos (como el nivel 2c), repetir el mismo bucle `while` varias veces hace que el código sea largo y difícil de leer.

Para simplificarlo podemos **definir una función propia** con la palabra reservada `def`:

```python
# Definimos una función que hace que la hormiga avance todo lo que pueda en línea recta
def avanzar_hasta_pared():
    while mirar() == Void:
        avanzar()
```

Una vez definida, podemos **llamar a nuestra función** siempre que la necesitemos como si fuera una instrucción más del juego:

```python
def avanzar_hasta_pared():
    while mirar() == Void:
        avanzar()

# Recorremos el zig-zag llamando a la función y girando en cada esquina
avanzar_hasta_pared()
izquierda()
avanzar_hasta_pared()
derecha()
avanzar_hasta_pared()
izquierda()
avanzar_hasta_pared()
escapar()
```

---

## Errores comunes y cómo evitarlos {#laby-errores-comunes}

| Error / Síntoma | Causa habitual | Solución |
|:---|:---|:---|
| **`IndentationError`** | Las líneas dentro del `while` o `if` no tienen sangría o tienen espacios desiguales. | Asegúrate de tabular con 4 espacios (o un tabulador) todas las líneas dentro del bloque. |
| **Bucle infinito** (el juego no termina) | La condición del bucle siempre es verdadera porque no se realiza ninguna acción que modifique el entorno dentro del bucle. | Comprueba que dentro del `while` la hormiga avanza, gira o interactúa para cambiar su posición. |
| **`NameError: name 'void' is not defined`** | Escribir las constantes en minúsculas (por ejemplo `void` o `pared`). | Recuerda escribir la primera letra en mayúscula: `Void`, `Pared`, `Piedra`, `Telarana`, `Salir`. |
| **`SyntaxError` en la línea del `while` o `if`** | Olvidar los dos puntos `:` al final de la línea o usar un solo igual (`=`). | Termina siempre la línea con `:` y utiliza `==` para comparar. |
| **Error al ejecutar `escapar()`** | La hormiga no está inmediatamente frente a la puerta, o está cargando una piedra. | Asegúrate de que `mirar() == Salir` antes de escapar y de haber soltado cualquier piedra con `dejar()`. |

---

## Resumen rápido de instrucciones

| Acción | Instrucción (Castellano) | Instrucción (Valenciano) | Instrucción (Inglés) |
|:---|:---|:---|:---|
| Avanzar 1 casilla | `avanzar()` | `endavant()` | `forward()` |
| Girar 90º a la derecha | `derecha()` | `dreta()` | `right()` |
| Girar 90º a la izquierda | `izquierda()` | `esquerra()` | `left()` |
| Coger piedra frontal | `tomar()` | `agafar()` | `take()` |
| Soltar piedra frontal | `dejar()` | `deixar()` | `drop()` |
| Salir por la puerta frontal | `escapar()` | `escapar()` | `escape()` |
| Inspeccionar casilla frontal | `mirar()` | `mirar()` | `look()` |
| Bucle condicional | `while condicion:` | `while condicion:` | `while condicion:` |
| Condicional | `if condicion:` / `else:` | `if condicion:` / `else:` | `if condicion:` / `else:` |
| Definir función propia | `def nombre():` | `def nombre():` | `def nombre():` |
