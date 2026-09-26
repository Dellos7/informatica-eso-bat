---
layout: default
title: Actividad 3. Camino a casa
description: Actividad 3 de la SA1
---

# Actividad 3. Camino a casa

## Tarea 1

Heriberto necesita llegar a su casa y usa un automóvil autónomo (que está en un estado rudimentario de desarrollo, muy lejos de la inteligencia artificial deseada por sus realizadores). El automóvil está programado con sólo tres instrucciones:

> **I**: girar 90° a la izquierda. <br> **D**: girar 90° a la derecha. <br> **A**: avanzar hasta el próximo cruce.

![](act_02.png)

Utilizando las tres instrucciones anteriores, ¿puedes escribir un **algoritmo que guíe al coche a su casa** por el **camino más corto** (en cantidad de instrucciones)?

- Abre el programa **LibreOffice Writer** y ve escribiendo las respuestas a todas las preguntas y retos planteados.
- **Descarga la imagen**, ábrela con **GIMP**, dibuja el camino y luego pégala en el documento de LibreOffice Writer.

> **Pista**: Como ejemplo, compartimos un algoritmo que lleva al automóvil desde el origen hasta el pino solitario: A, A, A, I, A, A, A
{: .alert-info}

---

<!--
## Para saber más

Las computadoras sirven para realizar **tareas bien definidas**, y para ello es necesario **programarlas**. La programación se realiza mediante un **lenguaje computacional** que las máquinas son capaces de interpretar y ejecutar. Este lenguaje es diferente al que utilizan las personas puesto que está compuesto de instrucciones claras, concisas e inequívocas.

Un **algoritmo** se convierte en **programa** cuando un programador lo traduce en instrucciones que **el ordenador puede interpretar y ejecutar** (_en este caso, el automóvil autónomo_).

Los ordenadores siempre ejecutan las instrucciones de un programa al pie de la letra desconociendo las intenciones del programador y el problema por resolver.

En la tarea anterior, si el programa es correcto (_no contiene errores_), el automóvil hará lo que se le ha indicado y así resolverá el problema (_en este caso, conducir a Heriberto a su hogar_). Ahora bien, si el programa guía el automóvil a otro sitio, aunque sigue siendo un programa válido, no resuelve el problema. Por último, si el programa tiene instrucciones no reconocibles (recordar que sólo acepta I, D y A), el ordenador no sabrá qué hacer y entonces dará un mensaje de error.

Los ordenadores, independientemente de su forma y propósito (de escritorio, teléfonos inteligentes, robots de entretenimiento o industriales, etc.), siguen las instrucciones que les indican los programas que se les cargan. Los programas de ordenador son **deterministas**, es decir, si siempre se ingresan los mismos datos, el programa realizará los mismos cálculos y entregará los mismos resultados.

Uno de los trabajos de los científicos de las ciencias de la computación es encontrar los **algoritmos más eficientes**. Es decir, aquéllos que resuelven un problema en el menor tiempo, usando la menor cantidad de recursos (_por ejemplo: memoria, acceso a disco rígido, uso de red, etc_.).
-->

---

## Tarea 2

El siguiente laberinto contiene **dos tesoros** marcados como **X** e **Y**.
- Los **bloques negros** muestran dónde están situadas las **paredes**.
- Los **bloques blancos** indican los caminos por los que podría **caminar un robot**.

![](act_02b.png)

Las instrucciones que puedes dar al robot son las siguientes:

> **Ax**: avanzar x bloques (   A3 ➡️ avanzar 3 bloques;   A5 ➡️ avanzar 5 bloques). <br> **D**: girar a la derecha 90°. <br> **I**: girar a la izquierda 90°. <br> **T**: recoger tesoro.

> **Inicialmente**, el robot está en la posición **S** y está **mirando hacia la derecha** del mapa. El robot **sólo puede recoger el tesoro si está en la misma casilla** del mapa que el tesoro.
{: .alert-warning}

- ¿Cuál es el **algoritmo** necesario para programar al robot ( _saliendo de la casilla S_ ) con el objetivo de **recoger el tesoro marcado con X**? **Escribe las instrucciones** en el documento de LibreOffice Writer tal y cómo hiciste en la Tarea 1.

- ¿Cuál es el **algoritmo** necesario para programar al robot ( _saliendo de la casilla S_ ) con el objetivo de **recoger el tesoro marcado con Y**? **Escribe las instrucciones** en el documento de LibreOffice Writer tal y cómo hiciste en la Tarea 1.

## Tarea 3

- **Edita la imagen** del laberinto del robot (utilizando, por ejemplo, GIMP) y **borra las letras** S, X e Y.
- A continuación, **define una nueva posición de salida (S)** y **dos nuevas posiciones X e Y** para los tesoros, dibujando estas letras en la propia imagen.
- Finalmente, **indica los algoritmos** necesarios para que, saliendo de la nueva posición S, el robot sea capaz de llegar a las nuevas posiciones X e Y.

## 📊 Rúbrica – Actividad 3: Camino a casa (máx. 10 puntos)

| Criterio | Insuficiente | Básico | Adecuado | Excelente |
| :--- | :--- | :--- | :--- | :--- |
| **Precisión del algoritmo (Tarea 1)** (máx. 1 punto) | **0 puntos:** No presenta el algoritmo o es completamente incorrecto e incoherente. | **0,25 puntos:** Algoritmo incompleto o con errores que impiden que el coche llegue a la casa. | **0,5 puntos:** El algoritmo guía el coche hasta la casa, pero no emplea el camino más corto o contiene algún paso redundante. | **1 punto:** Algoritmo impecable y óptimo que guía al coche a su casa siguiendo el camino más corto con las instrucciones exactas. |
| **Precisión del algoritmo (Tarea 2)** (máx. 3 puntos) | **0 puntos:** No resuelve los algoritmos o ambos son incorrectos e incoherentes. | **1 punto:** Resuelve solo uno de los dos retos (X o Y) con errores, o ambos algoritmos presentan fallos importantes en giros o distancias. | **2 puntos:** Resuelve la recogida de ambos tesoros (X e Y), pero con algún error menor en la secuencia o sin incluir la orden de recogida (T). | **3 puntos:** Algoritmos correctos, precisos y completos para recoger ambos tesoros (X e Y) respetando la posición inicial y todas las reglas. |
| **Claridad y orden en la presentación** (máx. 2 puntos) | **0 puntos:** Documento desordenado, sin identificar las tareas o con instrucciones confusas e incomprensibles. | **0,5 puntos:** Documento con problemas de formato, instrucciones poco ordenadas o imágenes mal insertadas. | **1 punto:** Documento comprensible y estructurado, con las imágenes de apoyo insertadas, aunque con algún detalle de formato mejorable. | **2 puntos:** Presentación impecable en LibreOffice Writer, con instrucciones claras, perfectamente secuenciadas, estructuradas e imágenes nítidas. |
| **Creatividad y eficiencia (Tarea 3)** (máx. 2 puntos) | **0 puntos:** No realiza la tarea de edición del laberinto o las nuevas posiciones no tienen solución viable. | **0,5 puntos:** Edita el laberinto situando las nuevas letras, pero los algoritmos propuestos son erróneos o incompletos. | **1 punto:** Laberinto correctamente modificado y algoritmos funcionales, aunque sencillos o con margen de optimización en el recorrido. | **2 puntos:** Laberinto original con nueva salida y tesoros bien ubicados, acompañado de algoritmos eficientes, correctos y optimizados. |
| **Entrega en plazo** (máx. 2 puntos) | **0 puntos:** Entrega tarde sin justificación o no entrega. | **0,5 puntos:** Entrega con retraso importante (más de 2 días). | **1 punto:** Entrega con pequeño retraso (hasta 2 días). | **2 puntos:** Entrega puntual dentro del plazo establecido. |

> ⚠️ **Nota importante sobre la puntuación de entrega:** Los 2 puntos asignados al criterio de entrega en plazo solo se contabilizarán si el alumno/a ha realizado un esfuerzo real y significativo por completar la actividad. En ningún caso se otorgará esta puntuación por entregas simbólicas, archivos vacíos, o contenidos sin sentido o sin intencionalidad de resolver la tarea.
{: .alert-error}

## 📌 Criterios de evaluación asociados a la Actividad 3

- **CE2.1**: Analizar problemas elementales significativos para el alumnado, mediante la abstracción y modelización de la realidad.
- **CE2.3**: Resolver de forma guiada problemas elementales utilizando los algoritmos y las estructuras de datos necesarias.
- **CE4.1**: Participar activamente en equipos de trabajo para desarrollar soluciones digitales y tecnológicas, demostrando empatía y respetando los roles asignados y las aportaciones del resto de personas integrantes.
- **CE4.3**: Describir y valorar la adecuación de las tecnologías, entornos de desarrollo, dispositivos y componentes para resolver los retos planteados, analizando sus características y especificaciones.
