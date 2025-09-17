---
layout: default
title: Tema 1
description: Ejercicios de Variables en Python
---

# Ejercicios de Variables en Python

## Parte 1. Valores de variables tras ejecución

1. ¿Cuál es el valor de la variable `a` después de ejecutar las siguientes instrucciones?
   ```python
   a = 1
   2 * a
   a + 2
   a = 2
   a * a
   ```

2. ¿Cuál es el valor de la variable `x` después de ejecutar las siguientes instrucciones?
   ```python
   x = 10
   x = x * 10
   ```

3. ¿Cuál es el valor de la variable `y` después de ejecutar las siguientes instrucciones?
   ```python
   a = 10
   b = 5
   c = 3
   y = a + b * c
   y = 2
   y = y * 2
   ```

4. ¿Cuál es el valor de la variable `a` después de ejecutar las siguientes instrucciones?
   ```python
   a = 3
   b = 2
   a += 4 * b
   ```

5. ¿Cuál es el valor de la variable `z` después de ejecutar las siguientes instrucciones?
   ```python
   z = 2
   z += 2
   z += 2 - 2
   z *= 2
   z *= 1 + 1
   ```

6. ¿Cuál es el valor de la variable `x` después de ejecutar las siguientes instrucciones?
   ```python
   x = 16
   a = 1
   b = 2
   c = 3
   x %= c
   x /= c - a
   x += b + a
   x += a/b
   x **= b
   ```

---

## Parte 2. Identificadores de variables

Indica si los siguientes nombres de variables son **válidos** en Python. Si no lo son, explica por qué:

- `Identificador`
- `Indice dos`
- `Dos palabras`
- `__`
- `12horas`
- `hora12`
- `desviación`
- `año`
- `from`
- `var!`
- `'var'`
- `import_from`
- `UnaVariable`
- `a b`
- `ñ`
- `12`
- `uno dos`
- `x`
- `π`
- `área`
- `area rect`
- `x_______1`
- `________1`
- `_x_`
- `x_x`

---

## Parte 3. Programas con variables

1. Escribe un programa que lea dos números enteros y muestre por pantalla la suma, resta, multiplicación y división. Ejemplo:
   ```text
   Dime un número: 7
   Dime otro número: 4
   Salida:
   7+4=11
   7-4=3
   7*4=28
   7/4=1.75
   ```

2. Diseña un programa que calcule el coste total de una factura a partir de la base imponible, aplicando un 21% de IVA.

3. Diseña un programa que calcule el perímetro y área de un cuadrado a partir del valor de su lado.

4. Diseña un programa que calcule el área de un triángulo a partir de su base y altura:

   $$
   A = \frac{b \cdot h}{2}
   $$

5. Haz un programa que calcule el valor del polinomio:

   $$
   x^4 + x^3 + 2x^2 - x
   $$

6. Haz un programa que calcule el valor del polinomio:

   $$
   x^4 + x^3 + \frac{1}{2}x^2 - x
   $$

7. Haz un programa que lea un número en grados Celsius y lo convierta a Fahrenheit.

8. Haz un programa que lea la edad de una persona en años y calcule cuántos días ha vivido (aproximando años a 365 días).

9. Haz un programa que pida el sueldo base y el número de horas extra trabajadas (pagadas a 12 €/hora) y muestre el salario total.

10. Haz un programa que calcule la velocidad media (en km/h) a partir de la distancia recorrida (km) y el tiempo empleado (horas y minutos).
