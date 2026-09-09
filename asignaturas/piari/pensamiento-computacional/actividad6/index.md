---
layout: default
title: Actividad 6. Laby avanzado y diseño de niveles
description: Actividad 6 de la SA1
---

# Actividad 6. Laby avanzado y diseño de niveles

> 🚀 **ANTES DE HACER LA ACTIVIDAD DEBES LEER**: 👉 [Funcionamiento de Laby](../funcionamiento-de-laby) 👈
{: .alert-warning}

En la actividad anterior de Laby aprendiste a controlar a la hormiga mediante secuencias básicas de instrucciones. Sin embargo, en problemas más complejos no siempre sabemos de antemano cuántos pasos exactos hay que dar o qué obstáculos aparecerán en el camino.

Para resolver estos retos necesitamos dos de las estructuras más importantes de la programación:
1. **Bucles (`while`)**: permiten repetir una serie de instrucciones de forma automática mientras se cumpla una condición determinada.
2. **Condicionales (`if`)**: permiten tomar decisiones y ejecutar ciertas instrucciones solo si ocurre una circunstancia concreta (por ejemplo, si encontramos un obstáculo o una telaraña).

---

## 📝 Tarea 1: Superar los niveles 2a, 2b, 2c y 3a de Laby

Abre el juego **Laby** en LliureX y supera los siguientes cuatro niveles seleccionándolos desde el menú **"Nivell"**:

1. **Nivel 2a**: Tu primer bucle. Utiliza la estructura `while` para hacer que la hormiga avance continuamente sin repetir la instrucción manualmente una y otra vez.
2. **Nivel 2b**: Bucles y giros. Aplica bucles para recorrer pasillos con esquinas y giros repetitivos.
3. **Nivel 2c**: Bucles y decisiones. Combina bucles con la manipulación de objetos para despejar el camino.
4. **Nivel 3a**: Reto combinado. Aplica bucles y condicionales (`if`) para resolver un laberinto con toma de decisiones dinámicas.

> 👉 **Para cada nivel superado debes hacer una captura de pantalla** donde se aprecie claramente el código de la solución y el estado final del nivel. En cada captura debe aparecer tu **nombre y apellidos** escrito con la herramienta de edición.
{: .alert-info}

> Guarda cada captura con el nombre del nivel correspondiente: `2a.png`, `2b.png`, `2c.png` y `3a.png`.
{: .alert-warning}

---

## 🛠️ Tarea 2: Diseña tu propio nivel con Laby Level Editor

Una vez que has aprendido a resolver problemas utilizando bucles y condicionales, ahora te convertirás en diseñador/a de niveles.

Para ello utilizaremos la aplicación **Laby Level Editor**, desarrollada por el profesor:  
👉 Repositorio oficial del proyecto: [https://github.com/Dellos7/laby-levels](https://github.com/Dellos7/laby-levels)

### ¿Cómo funciona el editor?

El editor te permite crear tableros personalizados para Laby de forma visual:

<!-- ESPACIO PARA CAPTURA DE PANTALLA DEL EDITOR LABY-LEVELS -->
> 🖼️ **Captura del programa Laby Level Editor:**  
> *(Aquí se añadirá la captura general de la interfaz de laby-levels)*
{: .alert-info}

- **Rejilla interactiva**: haz clic en las casillas para pintar los elementos del laberinto.
- **Herramientas de casillas**:
  - `.` Suelo libre por el que puede caminar la hormiga.
  - `o` Muro fijo intransitable.
  - `x` Puerta de salida del laberinto.
  - `r` Roca fija (bloquea el paso hasta que la hormiga la recoge con `tomar()`).
  - `w` Telaraña (letal si se pisa sin antes haber soltado una roca sobre ella).
  - `R` / `W` Rocas y telarañas aleatorias (para retos avanzados).
  - **Hormiga (`↑`, `→`, `↓`, `←`)**: define la posición y dirección en la que comenzará la hormiga.

<!-- ESPACIO PARA CAPTURA DE PANTALLA: HERRAMIENTAS Y PALETA DE ELEMENTOS -->
> 🖼️ **Captura de las herramientas y elementos del editor:**  
> *(Aquí se añadirá la captura del selector de herramientas y casillas del editor)*
{: .alert-info}

### ⚠️ Requisitos obligatorios de tu nivel:

1. **Obligatoriedad de `while` e `if`**: El nivel debe estar diseñado de forma que **sea estrictamente necesario utilizar al menos un bucle (`while`) y al menos un condicional (`if`)** para resolverlo. No se aceptarán niveles que puedan resolverse simplemente mediante una secuencia fija de instrucciones manuales.
2. **Solucionable**: El nivel debe tener una solución clara y sin errores.
3. **Guardado del archivo**: Guarda tu nivel desde la aplicación con el formato `.laby` y nómbralo con tus apellidos y nombre: `apellido_nombre_nivel.laby`.
4. **Código de solución**: Debes programar y comprobar en Laby la solución completa en Python que resuelve tu nivel.

---

## 📤 Entrega en Aules

Debes entregar en la tarea correspondiente de Aules los siguientes elementos:

1. Las **4 capturas de pantalla** de la Tarea 1 (`2a.png`, `2b.png`, `2c.png` y `3a.png`) con tu nombre rotulado.
2. El archivo del nivel creado: `apellido_nombre_nivel.laby`.
3. Una **captura de pantalla de tu nivel abierto en el editor** `laby-levels` (`captura_editor.png`).
4. Un archivo de texto o script Python `solucion_nivel.py` con el **código que resuelve con éxito tu propio nivel**, demostrando el uso obligatorio de `while` e `if`.

---

## 📊 Rúbrica – Actividad 6: Laby avanzado y diseño de niveles (máx. 10 puntos)

| Criterio | 0 puntos | 1 punto | 2 puntos | 3 puntos | 4 puntos |
|---|---|---|---|---|---|
| **Superación de niveles (Tarea 1)** | No supera los niveles o faltan capturas. | Supera 1 nivel correctamente. | Supera 2 niveles correctamente. | Supera 3 niveles correctamente. | Supera los 4 niveles (2a, 2b, 2c y 3a) con soluciones óptimas. |
| **Diseño del nivel en laby-levels (Tarea 2)** | No entrega nivel o el archivo `.laby` no es válido. | Nivel muy simple que no cumple las pautas de diseño. | Nivel funcional, original y bien estructurado en la rejilla. | – | – |
| **Requisito algorítmico (While + If)** | El nivel se resuelve sin bucle ni condicional. | Solo requiere bucle o solo condicional, pero no ambos. | El nivel exige obligatoriamente combinar `while` e `if` para llegar a la salida. | – | – |
| **Código de solución del nivel propio** | Sin código o no resuelve el reto. | Código en Python correcto, limpio, funcional y que resuelve el nivel. | – | – | – |
| **Presentación y formato de entrega** | Nombres incorrectos, capturas ilegibles o entrega tardía. | Entrega puntual, completa con archivos identificados (`.laby`, capturas y código). | – | – | – |

---

## 📌 Criterios de evaluación asociados

- **CE2.1**: Analizar problemas elementales significativos para el alumnado, mediante la abstracción y modelización de la realidad.
- **CE2.3**: Resolver de forma guiada problemas elementales utilizando los algoritmos y las estructuras de datos necesarias.
- **CE2.4**: Programar aplicaciones sencillas de forma guiada para resolver problemas elementales.
- **CE4.3**: Describir y valorar la adecuación de las tecnologías, entornos de desarrollo, dispositivos y componentes para resolver los retos planteados.
