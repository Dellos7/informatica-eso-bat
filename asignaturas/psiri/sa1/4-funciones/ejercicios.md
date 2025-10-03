---
layout: default
title: Ejercicios de Funciones e importación de módulos
description: Tema 1
---

# Ejercicios de Python – Funciones e importación de módulos

---

1. **nombre_completo.py**  
   Pide al usuario su **nombre** y **apellidos** y muestra su nombre completo junto con la longitud total.
   Ejemplo: `Me llamo David López Castellote y la longitud de mi nombre completo es de 22.`

2. **radio_circulo.py**  
   Importa el módulo [math](https://docs.python.org/3/library/math.html) y calcula la longitud de una circunferencia de radio 5 cm. Debes utilizar la constante `pi` del módulo `math`.
   Después, modifica el programa para que el radio lo introduzca el usuario.

3. **raiz.py**  
   Calcula la raíz cuadrada, el seno y el coseno del número 49 y muéstralos en pantalla utilizando el módulo [math](https://docs.python.org/3/library/math.html).  
   Después, modifica el programa para que el número lo introduzca el usuario.

4. **area_circunferencia.py**  
   Pide al usuario el radio de una circunferencia y muestra su área redondeada a 2 decimales.

5. **volumen_esfera.py**  
   Pide al usuario el radio de una esfera y muestra su volumen redondeado a 2 decimales.

6. **volumen_cilindro.py**  
   Pide al usuario el radio y la altura de un cilindro y muestra su volumen redondeado a 2 decimales.

7. **maximo.py**  
   Pide al usuario 3 números enteros y muestra cuál es el mayor de ellos.

8. **minimo.py**  
   Pide al usuario 3 números decimales y muestra cuál es el menor de ellos.

9. **comparaciones.py**  
   Muestra en pantalla la pregunta junto con el resultado (True/False) de las siguientes operaciones:  
   - ¿Es la raíz cuadrada de 20 mayor que 5?
   - ¿Es la raíz cuadrada de 20 menor que 5 pero mayor que 4?  
   - ¿Es la longitud de una circunferencia de radio 5 mayor que 30?  
   - ¿Es la longitud de una circunferencia de radio 0 igual a 0?  
   - Pide tu nombre y responde: ¿tiene más de 5 caracteres y menos de 10?  
   - Pide tu nombre completo (nombre y apellidos) y responde: ¿tiene más de 25 caracteres y menos de 35?  

10. **sistema.py**  
    Importa el módulo [sys](https://docs.python.org/3/library/sys.html) y muestra la versión de Python que estás utilizando y el sistema operativo en el que se ejecuta el programa. **Pista**: utiliza las constantes `version` y `platform`. Ejemplo: `La versión de Python es 3.10.11 (tags/v3.10.11:7d4cc5a, Apr  5 2023, 00:38:17) [MSC v.1929 64 bit (AMD64)] y el sistema operativo es: win32`

11. **tortuga.py - triángulo y figuras**  
    Utiliza el módulo [turtle](https://docs.python.org/3/library/turtle.html#turtle-tutorial) para dibujar un triángulo equilátero de color azul. Para ello, acaba el siguiente programa:

```python
from turtle import *
color("blue")
forward(100)
left(120)
forward(100)
exitonclick()
```

   Prueba ahora el siguiente código:

```python
from turtle import *
for steps in range(100):
   for c in ('blue', 'red', 'green'):
      color(c)
      forward(steps)
      right(30)
exitonclick()
```

   Después, modifica el código para dibujar figuras diferentes cambiando colores, ángulos y repeticiones.

12. **mayúscula.py**
    Pide al usuario una letra y muéstrala en mayúsculas utilizando de forma adecuada las funciones `ord()` y `chr()`. **Pista**: debes tener en cuenta cómo funciona el [código Unicode](https://www.tamasoft.co.jp/en/general-info/unicode-decimal.html)
{:start="12"}

13. **orden.py**  
    Pide al usuario su apellido y muestra:  
    - La longitud del mismo.  
    - Si estaría colocado en una lista alfabética entre la G y la M.  
{:start="13"}
   **Ejemplo 1:**
   Tu apellido López tiene 5 caracteres y estaría colocado entre la G y la M: True

   **Ejemplo 2:**
   Tu apellido Belmonte tiene 8 caracteres estaría colocado entre la G y la M: False

14. **factorial.py**  
    Pide al usuario un número entero y muestra su factorial utilizando el módulo `math`.
{:start="14"}

15. **aleatorios.py**  
    Importa el módulo [random](https://docs.python.org/3/library/random.html#module-random) y muestra:  
    - Un número entero aleatorio entre 1 y 10.  
    - Un número decimal aleatorio entre 0 y 1.  
    - Una elección aleatoria entre varios colores.
{:start="15"}

16. **hora_actual.py**  
    Muestra por pantalla la fecha y hora actuales utilizando el módulo [datetime](https://docs.python.org/3/library/datetime.html#module-datetime). **Pista**: función `now()` combinada con `str()`
{:start="16"}