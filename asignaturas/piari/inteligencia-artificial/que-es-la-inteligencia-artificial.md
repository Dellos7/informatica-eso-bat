---
layout: default
title: ¿Qué es la Inteligencia Artificial?
description: Tema 2
---

# ¿Qué es la Inteligencia Artificial?
{: .no_toc }

* TOC
{:toc}

## Programar una regla frente a entrenar con ejemplos {#dos-formas}

En el **Tema 1** aprendiste a programar. Le dabas a Karel instrucciones exactas: *avanza, gira a la izquierda, coge el zumbador*. Karel hacía **exactamente** lo que le decías, ni más ni menos.

Imagina ahora que quieres un programa que distinga **una foto de un gato** de **una foto de un perro**. ¿Qué instrucciones le escribirías?

```plaintext
si tiene bigotes entonces es un gato;
si tiene orejas puntiagudas entonces es un gato;
```

No funciona. Hay perros con las orejas puntiagudas, gatos de perfil sin bigotes visibles, fotos oscuras, gatos disfrazados de perro... **Nadie es capaz de escribir todas las reglas.** Y ahí está el problema que la IA vino a resolver.

La idea de la Inteligencia Artificial es **darle la vuelta al asunto**:

> En lugar de escribir las reglas, le damos **miles de ejemplos ya resueltos** y dejamos que la máquina **encuentre ella sola** el patrón.

Eso se llama **aprendizaje automático** (en inglés, *machine learning*).

---

## Datos → patrón → predicción {#el-esquema}

Todo sistema de IA, por complicado que sea, sigue siempre estos tres pasos:

| Paso | Qué ocurre | En el ejemplo de los gatos |
| :--- | :--- | :--- |
| **1. Datos** | Le damos muchos ejemplos ya etiquetados | 5.000 fotos, cada una marcada como «gato» o «perro» |
| **2. Patrón** | La máquina busca qué tienen en común los ejemplos de cada grupo | Descubre sola qué formas, colores y texturas aparecen en los gatos |
| **3. Predicción** | Le damos algo **nuevo** y responde según el patrón | Le enseñamos una foto que nunca ha visto y dice «gato, 94 %» |

> 💡 Fíjate en una cosa importantísima: en el paso 3 la máquina **no sabe** si es un gato. **Calcula qué es lo más probable** según los ejemplos que vio. Por eso responde con un **porcentaje**, no con un sí o un no.
{: .alert-tip}

Al resultado del paso 2 —lo que la máquina ha aprendido— lo llamamos **modelo**.

> Un **modelo** es el resultado de entrenar un programa con muchos datos. No es una base de datos con las respuestas guardadas: es un patrón que permite responder también a cosas que nunca ha visto.
{: .alert-info}

---

## IA predictiva e IA generativa {#tipos}

Hay dos grandes familias de IA, y conviene no confundirlas:

| | **IA predictiva** | **IA generativa** |
| :--- | :--- | :--- |
| ¿Qué hace? | **Clasifica o predice** algo | **Crea** contenido nuevo |
| Respuesta | Una etiqueta o un número | Un texto, una imagen, una voz, un vídeo |
| Ejemplos | El filtro de spam de tu correo, el detector de matrículas de un parking, la recomendación de vídeos | ChatGPT, Gemini, los generadores de imágenes, las voces sintéticas |
| La trabajamos en... | **Actividad 2** | **Actividades 3 a 8** |

Aunque parezcan muy distintas, **por dentro funcionan igual**: las dos han visto muchísimos ejemplos y las dos calculan probabilidades. Lo verás claro en la [página sobre los LLM](./como-funciona-un-llm).

---

## Cuatro fechas para situarte {#historia}

No hace falta que te aprendas la historia, pero sí que entiendas que **esto no ha salido de la nada**:

| Año | Qué pasó | Por qué importa |
| :--- | :--- | :--- |
| **1956** | Nace la disciplina: un grupo de científicos se reúne y le pone nombre a la «inteligencia artificial» | Llevamos **70 años** en esto, no 3 |
| **2012** | El **aprendizaje profundo** gana por goleada un concurso de reconocimiento de imágenes | Se descubre que con **muchos datos** y **mucha potencia de cálculo**, la cosa funciona de verdad |
| **2017** | Se inventa una nueva forma de construir modelos de lenguaje (los *transformers*) | Es la arquitectura sobre la que están construidos **todos** los chats de IA que usas |
| **2022** | ChatGPT se abre al público | En dos meses lo usan 100 millones de personas. La IA deja de ser cosa de laboratorios |

¿Por qué justo en 2012 y no antes? Porque hicieron falta tres cosas a la vez, y hasta entonces no estaban las tres:

1. **Datos**: internet llenó el mundo de fotos y textos etiquetados.
2. **Potencia de cálculo**: las tarjetas gráficas de los videojuegos resultaron ser ideales para entrenar modelos.
3. **Buenas ideas**: técnicas nuevas para que el entrenamiento funcionara.

---

## Entonces, ¿es inteligente? {#es-inteligente}

Depende de lo que entiendas por inteligente.

Una IA puede reconocer un tumor en una radiografía mejor que muchos médicos, y a la vez **no tener ni idea de qué es un cuerpo humano, ni qué es estar enfermo, ni por qué eso le importa a alguien**. Ha visto un millón de radiografías y ha encontrado un patrón. Nada más.

> **Ojo con la palabra «inteligencia».** La elegimos los humanos, en 1956, para darle nombre a algo nuevo. Pero una IA no entiende, no quiere, no se aburre y no tiene intenciones. Cuando decimos que «sabe» o que «cree» algo, estamos hablando en sentido figurado, igual que cuando decimos que el coche «se ha quedado sin ganas» de arrancar.
{: .alert-warning}

Esta es la idea que vas a ir comprobando tú mismo durante todo el tema. No te la creas porque lo ponga aquí: **compruébalo**.
