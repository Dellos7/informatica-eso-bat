# Ejercicios de Python – Funciones e importación de módulos (soluciones sugeridas)

## 1. nombre_completo.py
```python
nombre = input("Introduce tu nombre: ")
apellidos = input("Introduce tus apellidos: ")
completo = nombre + " " + apellidos
print("Me llamo", completo, "y la longitud de mi nombre completo es de", len(completo))
```

## 2. radio_circulo.py
```python
import math

# Versión con radio fijo
radio = 5
longitud = 2 * math.pi * radio
print("La longitud de la circunferencia es", round(longitud, 2), "cm")

# Versión con radio introducido por el usuario
radio = float(input("Introduce el radio de la circunferencia en cm: "))
longitud = 2 * math.pi * radio
print("La longitud de la circunferencia es", round(longitud, 2), "cm")
```

## 3. raiz.py
```python
import math

# Versión con número fijo
n = 49
print("Raíz cuadrada:", math.sqrt(n))
print("Seno:", math.sin(n))
print("Coseno:", math.cos(n))

# Versión con número introducido por el usuario
n = float(input("Introduce un número: "))
print("Raíz cuadrada:", math.sqrt(n))
print("Seno:", math.sin(n))
print("Coseno:", math.cos(n))
```

## 4. area_circunferencia.py
```python
import math

r = float(input("Introduce el radio: "))
area = math.pi * r**2
print("Área:", round(area, 2))
```

## 5. volumen_esfera.py
```python
import math

r = float(input("Introduce el radio de la esfera: "))
volumen = (4/3) * math.pi * r**3
print("Volumen:", round(volumen, 2))
```

## 6. volumen_cilindro.py
```python
import math

r = float(input("Introduce el radio: "))
h = float(input("Introduce la altura: "))
volumen = math.pi * r**2 * h
print("Volumen:", round(volumen, 2))
```

## 7. maximo.py
```python
a = int(input("Número 1: "))
b = int(input("Número 2: "))
c = int(input("Número 3: "))
print("El máximo es:", max(a, b, c))
```

## 8. minimo.py
```python
a = float(input("Número 1: "))
b = float(input("Número 2: "))
c = float(input("Número 3: "))
print("El mínimo es:", min(a, b, c))
```

## 9. comparaciones.py
```python
import math

print(math.sqrt(20) > 5)
print(math.sqrt(20) < 5 and math.sqrt(20) > 4)
print(2 * math.pi * 5 > 30)
print(2 * math.pi * 0 == 0)

nombre = input("Introduce tu nombre: ")
print(len(nombre) > 5 and len(nombre) < 10)

completo = input("Introduce tu nombre completo: ")
print(len(completo) > 25 and len(completo) < 35)
```

## 10. sistema.py
```python
import sys

print("La versión de Python es", sys.version)
print("El sistema operativo es", sys.platform)
```

## 11. turtle – triángulo y figuras
```python
from turtle import *

# Triángulo equilátero de color azul
color("blue")
for _ in range(3):
    forward(100)
    left(120)

# Figura artística (se puede experimentar con valores)
for steps in range(50):
    for c in ("blue", "red", "green"):
        color(c)
        forward(steps)
        right(30)
```

## 12. mayúscula.py
```python
letra = input("Introduce una letra: ")
codigo = ord(letra)        # obtiene el número Unicode
mayuscula = chr(codigo - 32)   # convierte a mayúscula (funciona con letras del alfabeto latino)
print("En mayúscula es:", mayuscula)
```

## 13. orden.py
```python
apellido = input("Introduce tu apellido: ")
longitud = len(apellido)
entre = "G" <= apellido[0].upper() <= "M"
print("Tu apellido", apellido, "tiene", longitud, "caracteres y estaría colocado entre la G y la M:", entre)
```

## 14. factorial.py
```python
import math

n = int(input("Introduce un número entero: "))
print("Factorial:", math.factorial(n))
```

## 15. aleatorios.py
```python
import random

print("Entero aleatorio entre 1 y 10:", random.randint(1, 10))
print("Decimal aleatorio entre 0 y 1:", random.random())
print("Color aleatorio:", random.choice(["azul", "rojo", "verde", "amarillo"]))
```

## 16. hora_actual.py
```python
from datetime import datetime

ahora = str(datetime.now())
print("Fecha y hora actuales:", ahora)
```
