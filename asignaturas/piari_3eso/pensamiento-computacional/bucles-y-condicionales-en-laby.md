---
layout: default
title: Bucles y condicionales en Laby
description: Tema 1
---

# Bucles y condicionales en Laby

<!--
{: .no_toc }

* TOC
{:toc}

-->

---

## Introducción

En retos más avanzados de **Laby**, no resulta eficiente escribir decenas de instrucciones manuales o no sabemos de antemano cuántos pasos dar. Para resolver estos problemas empleamos dos estructuras fundamentales de programación:

- **Bucles (`while`)**: repiten una o más instrucciones mientras se cumpla una condición.
- **Condicionales (`if` / `else`)**: toman decisiones y ejecutan instrucciones solo si ocurre una circunstancia concreta.

> 💡 **Recuerda:** las instrucciones básicas de movimiento se explican en la guía de [Funcionamiento de Laby](../funcionamiento-de-laby).
{: .alert-info}

---

## Detectar el entorno: `mirar()` / `look()` {#laby-mirar}

Para tomar decisiones o repetir acciones de forma inteligente, la hormiga necesita inspeccionar su entorno mediante la función **`mirar()` (o `look()` en inglés)**.

> ⚠️ **IMPORTANTE:** `mirar()` / `look()` **solo comprueba la casilla inmediatamente delante** de la hormiga (hacia donde apunta su cabeza). No detecta lo que hay a los lados ni detrás.
{: .alert-warning}

### Constantes devueltas por `mirar()` / `look()`

Al llamar a `mirar()` / `look()`, la función devuelve el elemento situado en la casilla frontal. Es obligatorio escribirlas con **mayúscula inicial**:

| Elemento | Castellano | Valenciano | Inglés | Descripción |
| :--- | :--- | :--- | :--- | :--- |
| **Casilla vacía / suelo libre** | `Void` | `Buit` | `Void` | Espacio despejado para caminar. |
| **Muro** | `Pared` | `Paret` | `Wall` | Muro que la hormiga no puede atravesar. |
| **Piedra / roca** | `Piedra` | `Pedra` | `Rock` | Bloquea el paso. Se recoge con `tomar()` / `take()`. |
| **Telaraña** | `Telarana` | `Web` | `Web` | Trampa que atrapa y elimina a la hormiga. |
| **Puerta de salida** | `Salir` | `Sortir` | `Exit` | Meta. Frente a ella se usa `escapar()` / `escape()`. |

> 📌 **Detalles de escritura:**
> - Si el juego está en **inglés**, debes usar tanto la función `look()` como las constantes en inglés (`Wall`, `Rock`, `Web`, `Exit`, `Void`).
> - En **castellano**, casilla vacía se escribe en inglés (`Void`) y telaraña se escribe sin virgulilla (`Telarana`).
{: .alert-tip}

---

## Reglas de sintaxis en Python {#laby-sintaxis-python}

1. **Operadores de comparación:**
   - `==` (**igual a**): comprueba si lo que hay delante coincide (`mirar() == Void` o `look() == Void`).
   - `!=` (**distinto de**): comprueba si es diferente (`mirar() != Salir` o `look() != Exit`).
   - *Nunca uses un solo igual (`=`), ya que se reserva para asignar variables.*
2. **Los dos puntos (`:`):** toda línea que inicie una estructura (`while`, `if`, `else`, `def`) debe finalizar con `:`.
3. **Sangría o indentación:** las instrucciones pertenecientes al bloque deben estar desplazadas a la derecha (**4 espacios** o **1 tabulador**). Si no se sangran, Python dará `IndentationError`.

---

## Bucles con `while` {#laby-bucles-while}

Un bucle `while` ejecuta de forma repetida el código sangrado **mientras la condición sea verdadera**:

```python
while condicion:
    instruccion_1
    instruccion_2
```

### Ejemplo conceptual: avanzar mientras haya camino despejado

En lugar de contar casillas y escribir muchas veces `avanzar()` / `forward()`, indicamos a la hormiga que avance continuamente mientras el suelo esté libre:

```python
# En castellano:
while mirar() == Void:
    avanzar()

# En inglés:
while look() == Void:
    forward()
```

Cuando la hormiga encuentra un obstáculo o la salida delante, la condición deja de cumplirse y el bucle finaliza.

---

## Condicionales con `if` y `else` {#laby-condicionales-if}

Permiten que la hormiga evalúe una condición antes de actuar y tome un camino u otro según el resultado:

```python
if condicion:
    # Se ejecuta si la condición es VERDADERA
else:
    # Se ejecuta si la condición es FALSA (opcional)
```

### Ejemplo conceptual: comprobar el camino ante una telaraña

La telaraña (`Telarana` / `Web`) es una trampa peligrosa que atrapa a la hormiga si la pisa. Antes de dar un paso, podemos comprobar con `mirar()` / `look()` si la casilla frontal tiene peligro:

```python
# En castellano:
if mirar() == Telarana:
    derecha()       # Si hay telaraña delante, cambiamos de dirección
else:
    avanzar()       # Si el camino está limpio, avanzamos seguros

# En inglés:
if look() == Web:
    right()         # Si hay telaraña (Web) delante, cambiamos de dirección
else:
    forward()       # Si el camino está limpio, avanzamos seguros
```

---

## Combinar bucles y condicionales {#laby-combinar}

En retos donde el laberinto presenta diferentes elementos a lo largo del trayecto, podemos **anidar un `if` dentro de un `while`** para tomar decisiones en cada paso del recorrido.

### Ejemplo conceptual: avanzar esquivando telarañas en bucle

Si la hormiga avanza por un camino hacia la salida y pueden aparecer telarañas (`Telarana` / `Web`), podemos inspeccionar con `mirar()` / `look()` en cada paso antes de movernos:

```python
# En castellano:
while mirar() != Salir:
    if mirar() == Telarana:
        derecha()   # Si detecta telaraña enfrente, gira para evitarla
    else:
        avanzar()   # Si el camino está despejado, continúa hacia la meta

# En inglés:
while look() != Exit:
    if look() == Web:
        right()     # Si detecta telaraña (Web) enfrente, gira para evitarla
    else:
        forward()   # Si el camino está despejado, continúa hacia la meta
```

---

## Funciones propias con `def` {#laby-funciones}

Si necesitas repetir un conjunto de pasos en varios puntos de tu programa, puedes **crear tu propia función** con `def` para no duplicar código y mantenerlo limpio y ordenado.

### Ejemplo conceptual: crear una acción personalizada

Por ejemplo, si necesitas dar media vuelta (girar 180º) varias veces en tu programa, puedes empaquetar los dos giros en una función:

```python
# Definición de la función (en castellano):
def media_vuelta():
    derecha()
    derecha()

# Uso posterior de la función:
avanzar()
media_vuelta()   # Llama a la función y gira 180º
avanzar()
```

```python
# Definición equivalente en inglés:
def turn_around():
    right()
    right()

forward()
turn_around()
forward()
```

---

## Errores habituales {#laby-errores-comunes}

| Error / Síntoma | Causa habitual | Solución |
| :--- | :--- | :--- |
| **`IndentationError`** | Líneas dentro del bloque sin sangría o con espacios desiguales. | Sangra con 4 espacios (o 1 tabulador) todas las instrucciones interiores. |
| **`SyntaxError`** | Falta `:` al final de la línea o se ha usado `=` en lugar de `==`. | Termina las cabeceras con `:` y compara con `==`. |
| **`NameError`** | Constantes escritas en minúsculas (ej. `void`, `wall`). | Escribe la primera letra en mayúscula (`Void`, `Pared`, `Wall`, etc.). |
| **Bucle infinito** | La condición nunca cambia a falso porque no se avanza ni se interactúa. | Asegúrate de incluir dentro del `while` instrucciones que modifiquen la posición. |
| **Error de idioma** | Usar `mirar()` en el juego en inglés o `look()` en castellano. | Utiliza `look()` si la interfaz está en inglés y `mirar()` si está en castellano. |

---

## Resumen de instrucciones

| Acción | Castellano | Valenciano | Inglés |
| :--- | :--- | :--- | :--- |
| Avanzar 1 casilla | `avanzar()` | `endavant()` | `forward()` |
| Girar 90º a la derecha | `derecha()` | `dreta()` | `right()` |
| Girar 90º a la izquierda | `izquierda()` | `esquerra()` | `left()` |
| Recoger objeto frontal | `tomar()` | `agafar()` | `take()` |
| Soltar objeto frontal | `dejar()` | `deixar()` | `drop()` |
| Salir por la puerta | `escapar()` | `escapar()` | `escape()` |
| **Inspeccionar casilla frontal** | **`mirar()`** | **`mirar()`** | **`look()`** |
| Bucle condicional | `while condicion:` | `while condicion:` | `while condicion:` |
| Condicional | `if condicion:` / `else:` | `if condicion:` / `else:` | `if condicion:` / `else:` |
| Definir función propia | `def nombre():` | `def nombre():` | `def nombre():` |
