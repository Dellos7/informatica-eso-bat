---
layout: default
title: Ejercicios de Sentencias Iterativas For
description: Tema 2
---

> POR REVISAR
{: .alert-error}

# Ejercicios de sentencias iterativas for

A continuación tienes una serie de ejercicios para practicar el uso de bucles `for` en Python. En los enunciados se incluyen ejemplos cuando procede.

> **Importante:** todos los programas deben pedirse y mostrarse por consola. Nombra cada archivo exactamente como se indica.

---

## Ejercicio 1 — `tabla_multiplicar_for.py`

Solicita al usuario un **número entero** y muestra su **tabla de multiplicar** (del 1 al 10) usando un **bucle `for`**.

**Ejemplo**  
```
Dime un número: 7
7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70
```

---

## Ejercicio 2 — `secuencias_for.py`

Usando **`for`** y **`range`**, escribe un programa que:
- Muestre todos los números enteros del **0 al 100**.
- Muestre todos los números enteros del **100 al 0** (al revés).
- Muestre todos los **números pares** del 0 al 100.
- Muestre todos los **números impares** del 1 al 99.

---

## Ejercicio 3 — `for_monedas.py`

Realiza un programa que proporcione el **desglose en billetes y monedas** de una **cantidad entera de euros**.  
Hay billetes de **500, 200, 100, 50, 20, 10, 5** y monedas de **2** y **1**.  
Muestra cuántos de cada uno son necesarios usando un enfoque **greedy** de mayor a menor.

**Ejemplo (salida orientativa)**  
```
Cantidad: 888
500€: 1
200€: 1
100€: 1
50€: 1
20€: 1
10€: 1
5€: 1
2€: 1
1€: 1
```

---

## Ejercicio 4 — `divisores_for.py`

Muestra **todos los divisores** de un número introducido por el usuario usando un `for`.  
Un **divisor** de *n* es todo número que divide a *n* dejando **resto 0**.

**Ejemplo**  
```
Dime un número: 50
50
25
10
5
2
1
```

---

## Ejercicio 5 — `mcd_dos_numeros.py`

Calcula el **máximo común divisor (MCD)** de **dos enteros positivos**.  
El MCD de dos números es el **divisor más alto** que es común a ambos.

**Ejemplos**  
```
Dime a: 20
Dime b: 6
MCD de 20 y 6: 2
```
```
Dime a: 17
Dime b: 13
MCD de 17 y 13: 1
```
```
Dime a: 300
Dime b: 33880
MCD de 300 y 33880: 20
```
```
Dime a: 150
Dime b: 120
MCD de 150 y 120: 30
```

> Pista: puedes iterar por los posibles divisores comunes desde 1 hasta el menor de los dos números (o ir de mayor a menor y parar al encontrar el primero).

---

## Ejercicio 6 — `mcd_tres_numeros.py`

Modifica el programa anterior para calcular el **MCD de 3 números**.

**Ejemplos**  
```
Dime a: 150
Dime b: 120
Dime c: 90
MCD de 150 y 120 y 90: 30
```
```
Dime a: 150
Dime b: 120
Dime c: 80
MCD de 150 y 120 y 80: 10
```
```
Dime a: 100
Dime b: 200
Dime c: 300
MCD de 100 y 200 y 300: 100
```

---

## Ejercicio 7 — `mcd_lista.py`

Calcula el **MCD de una lista** (de tamaño indeterminado) de números enteros positivos **predefinida en el código**.  
Muestra la lista y su MCD.

**Ejemplos**  
```python
lista = [150, 120, 90, 60]
--------------------------------------
MCD de [150, 120, 90, 60]: 30
```
```python
lista = [500, 250, 180]
--------------------------------------
MCD de [500, 250, 180]: 10
```
```python
lista = [66, 99, 132, 165]
--------------------------------------
MCD de [66, 99, 132, 165]: 33
```

> Sugerencia: reutiliza la lógica del MCD de dos números para ir acumulándolo sobre la lista (por ejemplo, en un bucle `for`).

---

## Ejercicio 8 — `turtle_poligonos_rellenos.py`

Usa **`turtle`** para **dibujar polígonos regulares** (cuadrado, triángulo, pentágono, hexágono, …) y **rellenarlos** por dentro.  
El usuario introducirá el **nº de lados** de la figura. El **ángulo de giro** de cada vértice es `360 / lados`.

Como técnica de “relleno”, dibuja el mismo polígono repetidamente, **reduciendo 1 unidad** el tamaño de cada lado en cada iteración, hasta llegar a 1.

**Ejemplo de código base para un cuadrado (guía):**
```python
from turtle import *

speed(10)         # Velocidad del dibujo (1 a 10)
color('blue')     # Color del dibujo

for i in range(4):
    forward(100)  # Dibuja un lado
    right(90)     # Gira 90 grados

exitonclick()     # Evita que se cierre al terminar
```

**Resultado esperado (ilustrativo):**  
![cuadrado](https://aules.edu.gva.es/batxillerat/draftfile.php/1418330/user/draft/758161278/image%20%283%29.png)

**Relleno por repetición (idea):** si el lado inicial es 100, dibuja luego 99, después 98, 97, 96, … hasta 1.

**Ejemplos de uso**  
```
Dime el nº de lados de la figura que quieres dibujar: 4
```
![cuadrado relleno](https://aules.edu.gva.es/batxillerat/draftfile.php/1418330/user/draft/758161278/cuadrado.gif)

```
Dime el nº de lados de la figura que quieres dibujar: 3
```
![triángulo relleno](https://aules.edu.gva.es/batxillerat/draftfile.php/1418330/user/draft/758161278/triangulo.gif)

---

**¡Listo!** Guarda cada archivo con el nombre indicado y prueba tus programas desde la terminal.
