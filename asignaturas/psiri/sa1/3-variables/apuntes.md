---
layout: default
title: Tema 1
description: Variables
---

# Variables

[**👉VARIABLES (aprendepython.es)**](https://aprendepython.es/core/datatypes/data/#variables)  
[**👉ASIGNACIÓN AUMENTADA (aprendepython.es)**](https://aprendepython.es/core/datatypes/numbers/#augmented-assignment)  
[**👉 LEER DATOS DESDE TECLADO con INPUT (aprendepython.es)**](https://aprendepython.es/core/datatypes/strings/#read-from-keyboard)

#### Función print()

La función **`print()`** permite mostrar un mensaje en la pantalla cuando estamos creando un programa con un editor (es decir, fuera del intérprete de Python).

Para indicar a **`print()`** qué debe mostrar, debemos indicarlo separándolo por comas, bien sea un texto que queremos mostrar de forma literal (es decir, una cadena de texto entre comillas " " ) o el valor de una variable.

Por ejemplo:

```python
nombre = "David"
apellidos = "López Castellote"
edad = 29
print( "Me llamo ", nombre, " ", apellidos, " y tengo ", edad, " años." )
```

También podemos utilizar la **concatenación de cadenas** para mostrar el valor de distintas variables en la función print. Sin embargo, en este caso, las variables que no sean cadenas de texto (es decir, aquellas que sean datos numéricos, booleanos, etc.) deberemos convertirlas a una cadena previamente utilizando la función **`str()`**.

Por ejemplo:

```python
nombre = "David"
apellidos = "López Castellote"
edad = 29
print( "Me llamo " + nombre + " " + apellidos + " y tengo " +  str(edad) +  " años." )
```

#### Función input() y conversiones

La función **`input()`** nos permite recibir datos con los que vamos a trabajar en el programa por parte del usuario. Por ejemplo, si queremos preguntarle a la persona que utiliza el programa su nombre, apellidos y edad.

Sin embargo, debemos tener en cuenta que, si estamos pidiendo datos que no son cadenas de texto (es decir, números enteros, decimales o booleanos), **deberemos realizar una conversión de dichos datos** para que el programa funcione correctamente.

Las funciones que permiten convertir una cadena de texto a otro tipo de dato son:

*   **`int()`** --> permite convertir una cadena de texto en un número entero
*   **`float()`** --> permite convertir una cadena de texto en un número decimal

Por ejemplo:

```python
# NO debemos convertirlo porque el nombre es un texto
nombre = input( "Dime tu nombre: ")

# SÍ debemos convertirlo ya que la edad es un número entero
edad = int( input( "Dime tu edad: ") )

# SÍ debemos convertirlo ya que la nota es un número decimal
nota = float( input( "Dime tu nota: ") )
```