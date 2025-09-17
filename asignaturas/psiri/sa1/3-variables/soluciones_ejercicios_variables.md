---
layout: default
title: Tema 1
description: Soluciones Ejercicios de Variables en Python
---

# Soluciones — Ejercicios de Variables en Python

## Parte 1 · Valores de variables tras ejecución

1) **a = 2**  
   ```python
   a = 1      # a = 1
   2 * a      # no asigna: a sigue valiendo 1
   a + 2      # no asigna: a sigue valiendo 1
   a = 2      # ahora a = 2
   a * a      # no asigna: a sigue valiendo 2
   ```

2) **x = 100**  
   ```python
   x = 10
   x = x * 10  # x = 100
   ```

3) **y = 4**  
   ```python
   a = 10
   b = 5
   c = 3
   y = a + b * c  # y = 10 + 5*3 = 25
   y = 2          # y = 2
   y = y * 2      # y = 4
   ```

4) **a = 11**  
   ```python
   a = 3
   b = 2
   a += 4 * b   # a = 3 + 8 = 11
   ```

5) **z = 16**  
   ```python
   z = 2
   z += 2       # 4
   z += 2 - 2   # +0 → 4
   z *= 2       # 8
   z *= 1 + 1   # ×2 → 16
   ```

6) **x = 16.0**  
   ```python
   x = 16
   a = 1
   b = 2
   c = 3
   x %= c        # 16 % 3 = 1       → x = 1
   x /= c - a    # 1 / (3 - 1) = 0.5
   x += b + a    # 0.5 + 2 + 1 = 3.5
   x += a/b      # 3.5 + (1/2) = 4.0
   x **= b       # 4.0 ** 2 = 16.0
   ```


---

## Parte 2 · Identificadores de variables (válidos/ no válidos)

> Regla rápida: un identificador **empieza** por letra (Unicode) o `_`, puede contener **letras**, **dígitos** o `_`, **sin espacios ni signos**. No puede ser **palabra reservada**.

| Nombre | ¿Válido? | Motivo |
|---|---|---|
| `Identificador` | ✅ | Solo letras. |
| `Indice dos` | ❌ | Contiene espacio. |
| `Dos palabras` | ❌ | Contiene espacio. |
| `__` | ✅ | Válido (aunque los “dunder” tienen usos especiales). |
| `12horas` | ❌ | Empieza por dígito. |
| `hora12` | ✅ | Letra + dígitos. |
| `desviación` | ✅ | Letras Unicode válidas. |
| `año` | ✅ | Letras Unicode válidas. |
| `from` | ❌ | Palabra reservada de Python. |
| `var!` | ❌ | Contiene `!`. |
| `'var'` | ❌ | Comillas → literal de cadena, no identificador. |
| `import_from` | ✅ | Letras y `_`. |
| `UnaVariable` | ✅ | Válido (CamelCase). |
| `a b` | ❌ | Contiene espacio. |
| `ñ` | ✅ | Letra Unicode válida. |
| `12` | ❌ | Literal numérico, no identificador. |
| `uno dos` | ❌ | Contiene espacio. |
| `x` | ✅ | Válido. |
| `π` | ✅ | Letra Unicode válida. |
| `área` | ✅ | Letras Unicode válidas. |
| `area rect` | ❌ | Contiene espacio. |
| `x_______1` | ✅ | Letra/`_` + dígitos. |
| `________1` | ✅ | Empieza por `_`; incluye dígitos. |
| `_x_` | ✅ | Válido. |
| `x_x` | ✅ | Válido. |

---

## Parte 3 · Programas con variables (soluciones ejemplo)

> Las siguientes soluciones usan **Python 3** y **f-strings**. Puedes pegarlas tal cual en un archivo `.py` o en un cuaderno.

### 1) Operaciones básicas con dos enteros
```python
a = int(input("Introduce el primer entero: "))
b = int(input("Introduce el segundo entero: "))

print(str(a) + "+" + str(b) + "=" + str(a+b))
print(str(a) + "-" + str(b) + "=" + str(a-b))
print(str(a) + "*" + str(b) + "=" + str(a*b))
print(str(a) + "/" + str(b) + "=" + str(a/b))
```

### 2) Precio con IVA (21%)
```python
base = float(input("Base imponible (€): "))
iva = 0.21
total = base * (1 + iva)
print("Total con IVA (21%) = " + str(total))
```

### 3) Perímetro y área de un cuadrado
```python
lado = float(input("Lado del cuadrado (m): "))
perimetro = 4 * lado
area = lado ** 2
print("Perímetro = " + str(perimetro) + " m")
print("Área = " + str(area) + " m²")
```

### 4) Área de un triángulo
```python
base = float(input("Base (m): "))
altura = float(input("Altura (m): "))
area = (base * altura) / 2
print("Área = " + str(area) + " m²")
```

### 5) Polinomio x^4 + x^3 + 2x^2 - x
```python
x = float(input("Valor de x: "))
resultado = x**4 + x**3 + 2*(x**2) - x
print("Resultado = " + str(resultado))
```

### 6) Polinomio x^4 + x^3 + (1/2)x^2 - x
```python
x = float(input("Valor de x: "))
resultado = x**4 + x**3 + 0.5*(x**2) - x
print("Resultado = " + str(resultado))
```

### 7) Conversión Celsius → Fahrenheit
```python
c = float(input("Temperatura (°C): "))
f = c * 9/5 + 32
print(str(c) + " °C son " + str(f) + " °F")
```

### 8) Edad en días (aprox. 365 días/año)
```python
anios = int(input("Edad (años): "))
dias = anios * 365
print("Has vivido aproximadamente " + str(dias) + " días")
```

### 9) Salario mensual con horas extra (12 €/h)
```python
sueldo_base = float(input("Sueldo base (€): "))
horas_extra = float(input("Horas extra: "))
total = sueldo_base + horas_extra * 12
print("Salario total = " + str(total) + " €")
```

### 10) Velocidad media (km/h)
```python
distancia = float(input("Distancia (km): "))
horas = float(input("Horas: "))
minutos = float(input("Minutos: "))
tiempo_horas = horas + minutos/60
velocidad = distancia / tiempo_horas
print("Velocidad media = " + str(velocidad) + " km/h")
```
