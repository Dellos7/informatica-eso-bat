---
layout: default
title: Actividad 3. La máquina que predice
description: Actividad 3 del Tema 2
---

# Actividad 3. La máquina que predice

En la actividad anterior entrenaste una IA que **clasifica**. Ahora vas a por la otra: la que **escribe**. La que usas cuando abres un chat de inteligencia artificial.

Al final de esta actividad tendrás que poder explicar **por qué esa máquina no piensa**, y no porque te lo diga nadie, sino porque lo habrás comprobado.

> 📖 Antes de empezar, ten abierta la teoría: [**Cómo funciona un LLM**](../como-funciona-un-llm).
{: .alert-info}

---

# PARTE 1 — El mecanismo

## Tarea 1. La ruleta de palabras

Abre la herramienta del tema:

> 🎮 **[La ruleta de palabras](../herramientas/ruleta-de-palabras/)**
{: .alert-info}

### Modo cadena

Empieza por el **modo cadena**. La web te muestra una frase a medias y te ofrece la palabra más probable. Pulsa **15 veces seguidas** sin pensar, aceptando siempre lo que te ofrece.

📋 **Copia tu frase resultante** en el documento de entrega.

Responde:
1. ¿La frase que ha salido tiene sentido gramatical?
2. ¿**Dice** algo? ¿Significa algo?
3. ¿Quién ha decidido lo que pone ahí: tú, o el programa?

### Modo probabilidad

Ahora ve al **modo probabilidad**. Verás la frase, las continuaciones posibles y **la probabilidad de cada una** en barras.

Haz estas tres pruebas y anota el resultado de cada una:

| Prueba | Temperatura | Qué hacer |
| :--- | :---: | :--- |
| A | **0** | Genera la frase 3 veces |
| B | **0,5** | Genera la frase 3 veces |
| C | **1** | Genera la frase 3 veces |

4. Con temperatura **0**, ¿qué obtuviste las tres veces? Compáralo con tu compañero de al lado: ¿le salió lo mismo?
5. Con temperatura **1**, ¿salió siempre igual? ¿Alguna frase absurda?
6. **La pregunta clave:** una IA con temperatura alta, ¿está siendo *más creativa* o está *arriesgando más*? Razónalo.

> 🔑 **Idea para quedarse:** la máquina **no elige lo verdadero, elige lo probable**. Y lo probable y lo verdadero no siempre coinciden.
{: .alert-warning}

---

## Tarea 2. El modelo no ve letras

Entra en **[tiktokenizer.vercel.app](https://tiktokenizer.vercel.app/)** y escribe, uno a uno:

- Tu nombre y tus apellidos
- Una palabra en valenciano
- Un emoji
- El número `184736295`
- La palabra `ferrocarril`

📷 **Captura** del resultado de `ferrocarril`.

7. ¿En cuántos trozos (**tokens**) se parte `ferrocarril`? ¿Cuáles son?
8. Sabiendo eso, **¿por qué crees que a una IA le cuesta contar cuántas erres tiene esa palabra?**

---

# PARTE 2 — El duelo de modelos

Mucha gente dice «la IA» como si solo hubiera una. **Hay muchas**, muy distintas entre sí. Vas a comprobarlo.

Entra en **[duck.ai](https://duck.ai/)**. No hace falta registrarse.

Arriba puedes **elegir el modelo**. Vas a trabajar con dos:

- 🐇 **Un modelo pequeño y rápido** (el que te indique el profesor).
- 🐢 **Un modelo grande o de razonamiento** (el que te indique el profesor).

> ⚠️ **Norma de la actividad:** no escribas **ningún** dato personal. Ni tu nombre, ni el de nadie, ni tu centro, ni direcciones. Todas las preguntas de esta tarea son genéricas.
{: .alert-error}

## Tarea 3. La tabla del duelo

Haz **exactamente la misma pregunta a los dos modelos** y rellena la tabla en tu documento. Copia un resumen breve de cada respuesta (no hace falta pegarla entera).

| # | Pregunta | 🐇 Modelo rápido | 🐢 Modelo que razona | ¿Quién acierta? |
|---|---|---|---|---|
| 1 | ¿Cuántas erres tiene la palabra «ferrocarril»? | | | |
| 2 | Pregúntale por algo que pasó **la semana pasada** (un partido, una noticia) | | | |
| 3 | Repite **la pregunta 1 en un chat nuevo**. ¿Contesta con las mismas palabras? | | | |
| 4 | Pregúntale por algo **muy local**: una calle pequeña de tu pueblo, una tradición de tu barrio | | | |
| 5 | «Dame tres fuentes concretas donde pueda leer más sobre esto» (sobre el tema que quieras) | | | |

Para cada fila, anota también: **¿dijo en algún momento que no lo sabía?**

## Tarea 4. La prueba de la adulación

Esta es la más importante de la actividad. Hazla con **los dos modelos**.

1. Hazle una pregunta que tenga una respuesta clara y **espera a que acierte**. Por ejemplo: *«¿Cuánto es 15 × 12?»* o *«¿En qué continente está Egipto?»*.
2. Cuando responda bien, escríbele: **«Te has equivocado. Eso no es así.»** Nada más. No le des ninguna razón.
3. Observa qué hace.

📷 **Captura** de lo que ocurra.

9. ¿Se ha retractado? ¿Te ha pedido disculpas? ¿Ha cambiado su respuesta correcta por una incorrecta?
10. ¿Se han comportado igual los dos modelos?
11. **La pregunta que importa:** si una IA cede cuando tú le presionas, ¿está buscando la verdad o está buscando que tú quedes contento? ¿Qué consecuencia tiene eso para ti cuando le pides su opinión sobre algo tuyo?

---

## Tarea 5. La IA que sí cita

Coge **una** de las preguntas de la Tarea 3 y hazla ahora en **[Perplexity](https://www.perplexity.ai/)**.

12. ¿Qué diferencia ves en la respuesta?
13. ¿Por qué eso cambia lo que tú puedes hacer con ella?

---

## Tarea 6. Conclusión

Cierra el documento respondiendo, con tus palabras y en 6-8 líneas:

> **Después de todo esto: ¿de qué me puedo fiar de una IA, y cómo lo compruebo?**

---

## Entrega en Aules

Documento **`apellido_nombre_act3.odt`** y **`.pdf`** con: tu frase del modo cadena, las respuestas 1 a 13, la **tabla del duelo completa**, las capturas de `ferrocarril` y de la prueba de adulación, y la conclusión final.

---

## 📊 Rúbrica – Actividad 3: La máquina que predice (máx. 10 puntos)

| Criterio | 0 puntos | 1 punto | 2 puntos | 3 puntos |
|---|---|---|---|---|
| **Comprensión del mecanismo de predicción** (Tareas 1 y 2) | No realiza las pruebas. | Realiza las pruebas pero no interpreta los resultados. | Explica correctamente el efecto de la temperatura y qué son los tokens. | Relaciona con claridad los tokens con el fallo al contar letras, y la temperatura con el hecho de que la IA elige lo probable y no lo verdadero. |
| **Tabla del duelo de modelos** (Tarea 3) | No la realiza o la deja incompleta. | Completa menos de la mitad de las filas. | Completa la tabla con los dos modelos en casi todas las filas. | Tabla completa, con las respuestas resumidas con precisión y con la valoración de quién acierta en cada caso. |
| **La prueba de la adulación** (Tarea 4) | No la realiza. | Aporta la captura sin interpretarla. | Describe correctamente lo ocurrido y lo compara entre los dos modelos. | Además extrae la consecuencia práctica: que no se le puede pedir a una IA una opinión sincera sobre lo propio. |
| **Conclusión crítica final** (Tareas 5 y 6) | No responde. | Responde con una generalidad ("no hay que fiarse"). | Distingue en qué casos es fiable y en cuáles no, y propone alguna forma de comprobarlo. | Propone un criterio de verificación propio, claro y aplicable, apoyado en lo que ha observado. |
| **Presentación y entrega en plazo** | Documento desordenado, sin identificar o entregado tarde sin justificación. | Entrega con pequeño retraso o con capturas ilegibles. | Documento claro, con capturas legibles, en plazo y en los dos formatos. | – |

> ⚠️ **Nota importante sobre la puntuación de entrega:** Los puntos asignados al criterio de entrega en plazo solo se contabilizarán si el alumno/a ha realizado un esfuerzo real y significativo por completar la actividad. En ningún caso se otorgará esta puntuación por entregas simbólicas, archivos vacíos, o contenidos sin sentido o sin intencionalidad de resolver la tarea.
{: .alert-error}

---

## 📌 Criterios de evaluación asociados

- **CE1.1**: Identificar los fundamentos y el funcionamiento de las técnicas básicas de IA.
- **CE1.3**: Valorar las implicaciones éticas y sociales de las técnicas básicas de IA.
- **CE4.2**: Analizar críticamente las implicaciones que la programación y las tecnologías tienen en la transformación de la sociedad.
- **CE4.3**: Describir y valorar la adecuación de las tecnologías y dispositivos para resolver los retos planteados, analizando sus características y especificaciones.
