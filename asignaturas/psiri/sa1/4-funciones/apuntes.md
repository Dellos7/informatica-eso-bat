---
layout: default
title: Tema 1
description: Funciones y módulos
---


# Funciones predefinidas y módulos

[👉 FUNCIONES PREDEFINIDAS "BUILT IN" (aprendepython.es)](https://aprendepython.es/core/datatypes/data/#built-in-functions)

[👉 MÓDULOS (aprendepython.es)](https://aprendepython.es/core/modularity/modules/)

**Ampliación:**

Una **función** es un fragmento de código que realiza una tarea específica. Algunas funciones, para que realicen la tarea, necesitan que se les pase una información determinada (parámetros/argumentos). Además, después de realizar la tarea pueden devolver un resultado.  

Una función nos permite implementar operaciones que son frecuentemente utilizadas en un programa y así reducir la cantidad de código.  

Las **funciones predefinidas** vienen dadas por Python para que puedan ser utilizadas por los programadores. Así, la función `print()` muestra en pantalla algo.  
Es una función predefinida que se utiliza para mostrar información en pantalla.

---

## Algunas funciones predefinidas sobre valores numéricos

- `abs()` → calcula el valor absoluto de un número.
- `float()` → convierte un número entero a real.  
  Ejemplo:
  ```python
  >>> float('3.256')
  3.256
  ```
- `int()` → convierte a entero tanto un número real (flotante) como una cadena de caracteres que contenga caracteres numéricos.
- `str()` → convierte a cadena.  
  Ejemplo:
  ```python
  a = str(12.5)   # a = '12.5'
  y = "Tengo " + str(43) + " años"
  ```
- `bin()` → convierte un número entero en una cadena con el número expresado en binario.
- `oct()` → convierte un número entero en una cadena con el número expresado en octal.
- `hex()` → convierte un número entero en una cadena con el número expresado en hexadecimal.
- `round()` → redondea un número.  
  Con un argumento:
  ```python
  >>> round(3.1415926535)
  3
  ```
  Con dos argumentos:
  ```python
  >>> round(3.1415926535, 3)
  3.142
  ```
- `max()` → devuelve el valor mayor.  
  ```python
  >>> max(5, 3, 8, 12, 6, 1)
  12
  ```
- `min()` → devuelve el valor menor.  
  ```python
  >>> min(5, 3, 8, 12, 6, 1)
  1
  ```
- `sum()` → devuelve la suma de una lista.  
  ```python
  >>> sum([5, 3, 8, 12, 6, 1])
  35
  ```

Ejemplo de composición de funciones:

```python
>>> print(abs(round(-34.235, 1) * int(12.56)))
```

---

## Funciones básicas para cadenas de caracteres

- `print()` → imprime en pantalla.  
  ```python
  print("Hola")   # Hola
  ```
- `len()` → determina la longitud de una cadena.  
  ```python
  len("Hola Python")   # 11
  ```
- `ord()` → devuelve el valor numérico que corresponde a un carácter.
- `chr()` → devuelve el carácter que corresponde a un valor numérico.

---

## Otras funciones interesantes

- `type()` → devuelve el tipo de un elemento (int, float, str, etc).
- `id()` → devuelve el identificador que Python crea para cada objeto.
- `input()` → permite introducir texto por teclado.  
  Ejemplo:
  ```python
  edad = int(input("Introduce tu edad: "))
  ```
  > Nota: nadie se responsabiliza de que el usuario introduzca la información correctamente.

Más información: [enlace](http://pyspanishdoc.sourceforge.net/lib/built-in-funcs.html)

---

# Módulos e importación de funciones y variables

Python proporciona muchas funciones que no están disponibles directamente. Para usarlas, hay que **importarlas** desde un módulo.  

El módulo [math](https://docs.python.org/3/library/math.html) contiene multitud de funciones matemáticas. Para importar una función:

```python
from nombre_módulo import nombre_función
```

Ejemplo:

```python
from math import sin
print(sin(1))   # 0.84147
```

Para importar todas las funciones de un módulo se usa `*`:

```python
from math import *
```

⚠️ Problema: puede haber conflictos si usamos el mismo nombre para variables y funciones.  

Ejemplo conflictivo:

```python
sin = 33
from math import *
print(sin)   # Error
```

Otra forma más segura es importar el módulo entero:

```python
import math
sin = 0.58
print(math.sin(sin))
```

De esta forma no hay confusión y podemos usar cualquier nombre de variable.

Existen muchos módulos especializados: aplicaciones web, interfaces, compresión, criptografía, multimedia, etc.  
Ejemplos de módulos:

- `sys` → acceso al sistema operativo.  
- [Módulos numéricos y matemáticos](https://docs.python.org/es/3/library/math.html)  
- [Módulos de acceso a ficheros y directorios](https://docs.python.org/3/library/filesys.html)  
- [Módulo de servicios en tiempo de ejecución](https://docs.python.org/3/library/python.html)
