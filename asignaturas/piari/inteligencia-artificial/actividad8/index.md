---
layout: default
title: Actividad 8. Proyecto final
description: Actividad 8 del Tema 2
---

# Actividad 8. Proyecto final

Has entrenado un modelo, has destripado un LLM, has aprendido a escribir prompts, has visto sus riesgos y sus sesgos. **Ahora construye algo tú.**

Eliges **uno** de los tres itinerarios. Los tres valen lo mismo y los tres entregan la **ficha de transparencia**.

> ⏱️ **6 sesiones.** Trabajo por parejas (el itinerario C admite también individual).
{: .alert-info}

---

# 🅰️ Itinerario A — «Mi app que ve»

**App Inventor + clasificación de imágenes.** Vas a construir una **aplicación de móvil de verdad** que reconozca gestos con la cámara.

> 📱 **Este es el único itinerario para el que se pedirá permiso de traer el móvil**, y solo en la última sesión.
{: .alert-warning}

### Sesiones 1-2 · Entrenar el modelo (ordenador)

Es el flujo que ya conoces de la [Actividad 2](../actividad2).

1. Entrena en **[Teachable Machine](https://teachablemachine.withgoogle.com/)** un modelo de **3 clases** con imágenes subidas desde disco. Puedes reutilizar piedra/papel/tijera o elegir otras tres clases que te interesen.
2. Cuando funcione bien, ve a **Export Model → TensorFlow.js → Upload my model**.
3. **Copia la URL** que te da y guárdala en un documento. **Sin esa URL no hay app.**

> 🔀 **Ruta alternativa (solo si el profesor te lo indica):** en lugar de Teachable Machine puedes entrenar el modelo en **[classifier.appinventor.mit.edu](https://classifier.appinventor.mit.edu/)**, que también permite **subir imágenes desde el disco**. Es la herramienta oficial de MIT y se conecta con App Inventor mediante la extensión **PersonalImageClassifier**. Los pasos del diseño de la app son los mismos.
{: .alert-info}

### Sesiones 3-5 · Construir la app (ordenador)

4. Entra en **[code.appinventor.mit.edu](https://code.appinventor.mit.edu/)**. **No hace falta cuenta.**

> 🔑 **CRÍTICO:** al entrar te dará un **código de cuatro palabras**. **Apúntalo en tu documento y guárdalo.** Es la única forma de recuperar tu proyecto en la siguiente sesión. **Si lo pierdes, pierdes el proyecto entero.**
{: .alert-error}

5. Crea el proyecto e importa la extensión **TMIC** que te dará el profesor.
6. Configura la propiedad **UrlModel** con la URL de tu modelo.
7. Diseña la pantalla: un botón para hacer la foto, una imagen para verla, y dos etiquetas para el **resultado** y el **porcentaje de confianza**.
8. Monta los bloques: **botón pulsado → tomar foto → clasificar → mostrar resultado y confianza**.

> 💡 Los bloques son los mismos conceptos del Tema 1: un **evento** que dispara una **secuencia** de instrucciones. Ya sabes hacer esto.
{: .alert-tip}

### Sesión 6 · Probar en el móvil

9. Instala la app en un móvil Android y pruébala con la cámara real.
10. **Y aquí viene lo interesante:** prueba el modelo con manos reales, en el aula, con la luz del aula.

11. ¿Acierta igual que con las imágenes de prueba del ordenador? Si falla más, **¿por qué?** (Vuelve al Experimento B de la Actividad 2.)
12. ¿Qué tendrías que hacer para que funcionara mejor en el mundo real?

### Entrega del itinerario A
- La **URL** de tu modelo y el **código de cuatro palabras** del proyecto.
- El archivo **`.aia`** del proyecto exportado.
- **Vídeo corto o fotos** de la app funcionando.
- Documento con las respuestas 11 y 12 + la ficha de transparencia.

---

# 🅱️ Itinerario B — «Mi asistente inteligente»

**Scratch + Machine Learning for Kids.** Vas a entrenar tu propio clasificador y a meterlo dentro de un programa de Scratch.

### Sesiones 1-2 · Entrenar

1. Entra en **Machine Learning for Kids** con la cuenta que te dará el profesor.
2. Crea un proyecto y elige qué quieres que aprenda a distinguir. Ideas:
   - **Texto:** mensajes respetuosos / mensajes ofensivos (un detector de ciberacoso)
   - **Texto:** clasificar peticiones en categorías (deberes / dudas / quejas)
   - **Imágenes:** lo que se te ocurra, subiendo ficheros
3. Introduce **al menos 20 ejemplos por categoría**. Cuantos más y más variados, mejor: ya sabes por qué.
4. **Entrena** y prueba con ejemplos nuevos que no le hayas dado.

### Sesiones 3-5 · Programar en Scratch

5. Abre Scratch desde ML4K (aparecerán **bloques nuevos** con tu modelo).
6. Programa un proyecto que **use** el modelo. Debe incluir obligatoriamente:
   - Una **entrada** del usuario (escribir algo, elegir algo)
   - Una **decisión** con `si... entonces... si no` según lo que diga el modelo
   - Una **respuesta** distinta en cada caso (cambio de disfraz, mensaje, sonido)
   - Al menos **un bucle** y **una variable**

### Sesión 6 · Romperlo y arreglarlo

7. Busca **tres ejemplos** que tu modelo clasifique **mal**.
8. Añade esos ejemplos al entrenamiento, **vuelve a entrenar** y comprueba si mejora.
9. ¿Mejoró? ¿Empeoró en otra cosa?

### Entrega del itinerario B
- El archivo **`.sb3`** del proyecto.
- **Captura** de tu modelo entrenado con el número de ejemplos por categoría.
- Documento con los tres fallos que encontraste, qué hiciste y qué pasó + la ficha de transparencia.

---

# 🅲 Itinerario C — «Producto con IA generativa»

Crea un **producto real** usando IA generativa. Aquí lo que se evalúa **no es el resultado bonito**: es **cómo has llegado hasta él**.

### Elige tu producto

| Opción | Qué es |
| :--- | :--- |
| 🎬 **Anuncio o corto** | Vídeo de 30-60 s sobre un tema que te importe |
| 📰 **Campaña de concienciación** | Cartel o vídeo **dirigido a 1º de ESO** sobre uno de los riesgos del tema (alucinaciones, privacidad, deepfakes, sesgos) |
| 🎮 **Ficha de videojuego** | Presentación completa de un juego inventado: historia, personajes, imágenes, mecánicas |
| 📖 **Cómic o relato ilustrado** | Historia corta con sus imágenes |

### El requisito que de verdad importa: el cuaderno de prompts

Tienes que entregar **todas las versiones** por las que has pasado. Para cada elemento generado:

| Versión | Prompt usado | Qué falló | Qué cambié |
| :---: | :--- | :--- | :--- |
| 1 | | | |
| 2 | | | |
| 3 | | | |

> 🎯 **Esto es lo que se evalúa.** Un producto perfecto que salió al primer intento vale menos que uno normal con cinco iteraciones bien razonadas. Porque lo primero es suerte y lo segundo es **saber trabajar**.
{: .alert-warning}

### Requisitos obligatorios
- **Mínimo 3 iteraciones** documentadas en el elemento principal.
- **Algo tuyo que no haya hecho la IA**: el guion, el montaje, el texto final, la selección... Y tienes que señalar qué es.
- **Ningún dato personal** ni imágenes de personas reales.
- Si el producto se va a enseñar a otros, debe indicar que **se ha usado IA** (lo exige la ley europea, ¿recuerdas?).

### Entrega del itinerario C
- El producto final.
- El **cuaderno de prompts** completo.
- Documento explicando qué parte es tuya + la ficha de transparencia.

---

# 📋 Ficha de transparencia (obligatoria en los tres itinerarios)

Cópiala en tu documento y respóndela con sinceridad. **Se puntúa la honestidad, no la perfección.**

| Pregunta | Tu respuesta |
| :--- | :--- |
| ¿Qué herramientas de IA he usado y para qué exactamente? | |
| ¿Cuál fue mi mejor prompt? (cópialo literal) | |
| ¿Qué me dio mal, se inventó o no me servía? | |
| ¿Qué he cambiado yo a mano sobre lo que me dio la IA? | |
| ¿Qué parte de este trabajo es mérito mío? | |
| ¿Qué he aprendido haciéndolo que no sabía antes? | |

> ⚠️ Una ficha que diga «no me falló nada y lo hice todo yo» **no es creíble** y puntúa menos que una que reconozca dos fallos y explique cómo se resolvieron.
{: .alert-error}

---

## 📊 Rúbrica – Actividad 8: Proyecto final (máx. 10 puntos)

| Criterio | 0 puntos | 1 punto | 2 puntos | 3 puntos |
|---|---|---|---|---|
| **Producto final funcional** | No entrega producto o no funciona. | Producto incompleto o que solo funciona parcialmente. | Producto terminado y funcional, que cumple los requisitos mínimos del itinerario. | Producto terminado, funcional y con ambición: añade elementos propios más allá de lo pedido. |
| **Proceso documentado** (cuaderno de prompts / iteraciones / reentrenamiento) | Sin documentar. | Documenta el resultado final pero no el camino. | Documenta al menos 3 iteraciones reales con qué falló y qué cambió. | Documenta el proceso completo y justifica cada decisión tomada. |
| **Espíritu crítico: detectar y corregir fallos** | No identifica ningún fallo. | Menciona algún fallo sin corregirlo. | Identifica fallos concretos del sistema y actúa para corregirlos. | Además explica **por qué** fallaba, conectándolo con lo aprendido en el tema (datos, tokens, sesgo, probabilidad). |
| **Ficha de transparencia** | No la entrega. | La entrega incompleta o poco creíble. | Ficha completa, honesta y concreta, que distingue con claridad su aportación de la de la IA. | – |
| **Trabajo en equipo y autonomía** | No colabora o depende por completo del profesor. | Colabora de forma desigual o necesita apoyo constante. | Reparto de trabajo equilibrado, resuelve los bloqueos con autonomía y pide ayuda de forma pertinente. | – |
| **Presentación y entrega en plazo** | Entrega incompleta, sin identificar o tarde sin justificación. | Entrega con pequeño retraso o faltando algún archivo. | Todos los archivos, bien nombrados, en plazo. | – |

> ⚠️ **Nota importante sobre la puntuación de entrega:** Los puntos asignados al criterio de entrega en plazo solo se contabilizarán si el alumno/a ha realizado un esfuerzo real y significativo por completar la actividad. En ningún caso se otorgará esta puntuación por entregas simbólicas, archivos vacíos, o contenidos sin sentido o sin intencionalidad de resolver la tarea.
{: .alert-error}

---

## 📌 Criterios de evaluación asociados

- **CE1.4**: Emplear funciones de IA en aplicaciones sencillas de forma guiada para buscar soluciones a problemas básicos.
- **CE2.4**: Programar aplicaciones sencillas de forma guiada para resolver problemas elementales.
- **CE4.1**: Participar activamente en equipos de trabajo para desarrollar soluciones digitales y tecnológicas demostrando empatía y respetando los roles asignados.
- **CE4.3**: Describir y valorar la adecuación de las tecnologías, entornos de desarrollo, dispositivos y componentes para resolver los retos planteados.
- **CE4.4**: Resolver problemas técnicos sencillos surgidos en el análisis, desarrollo y uso de software y módulos de inteligencia artificial, reformulando el procedimiento utilizado en caso necesario.
