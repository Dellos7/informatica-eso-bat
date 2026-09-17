---
layout: default
title: Los riesgos de la IA
description: Tema 2
---

# Los riesgos de la IA
{: .no_toc }

* TOC
{:toc}

Esta página no está para meterte miedo. Está para que sepas **exactamente** qué puede salir mal, por qué, y qué puedes hacer tú.

---

## 1. Se equivoca con seguridad {#alucinaciones}

Ya lo viste en [cómo funciona un LLM](./como-funciona-un-llm): el modelo **genera lo que suena a respuesta correcta**. Cuando no tiene la información, **no se calla**: rellena.

Lo llamamos **alucinación**, y aparece sobre todo en:

- Datos muy concretos: fechas, cifras, artículos de leyes.
- **Fuentes y referencias.** Es el caso más peligroso, porque una cita inventada parece más fiable, no menos.
- Cosas muy locales o poco conocidas: tu pueblo, tu instituto, un negocio pequeño.
- Cualquier cosa **posterior a su fecha de corte**.

> ⚠️ **No hay ninguna señal.** Se equivoca con el mismo tono seguro con el que acierta.
{: .alert-error}

---

## 2. Te da la razón {#adulacion}

La **adulación** es el riesgo del que menos se habla y el que más te afecta a ti.

Los modelos están ajustados para que las personas queden satisfechas. Y quedamos satisfechos cuando nos dan la razón. Resultado: si le discutes algo, **tiende a ceder**, tenga razón o no.

Esto es un problema serio cuando le pides opinión sobre algo tuyo (tu redacción, tu idea, tu decisión): te dirá que está muy bien. **Casi siempre.** No porque lo esté, sino porque es lo que el sistema tiende a responder.

> 🎯 **Qué hacer:** si quieres una opinión útil, pídesela al revés: *«dime los tres fallos más graves de este texto»* en vez de *«¿qué te parece?»*.
{: .alert-tip}

---

## 3. Aprende nuestros prejuicios {#sesgos}

Un **sesgo** es una inclinación injusta y sistemática hacia un lado.

Recuerda el esquema: **datos → patrón → predicción**. Si los datos reflejan cómo ha sido el mundo hasta ahora, el modelo aprenderá **el mundo tal como ha sido**, con sus desigualdades incluidas, y lo repetirá como si fuera lo normal.

Pídele a un generador de imágenes *«una persona dirigiendo una empresa»* y *«una persona limpiando»*, y mira quién sale en cada una. No hay nadie que haya programado eso. **Está en los datos.**

> ⚠️ **Lo grave no es la imagen.** Es que estos sistemas ya se usan para filtrar currículums, valorar solicitudes o decidir prioridades. Cuando un sesgo se automatiza, **deja de ser el prejuicio de una persona y pasa a aplicarse a miles a la vez**, con apariencia de objetividad.
{: .alert-error}

---

## 4. Lo que escribes no desaparece {#privacidad}

Cuando escribes algo en una IA, ese texto **sale de tu ordenador y llega a una empresa**. Según el servicio y la configuración, puede quedar guardado en tu historial, ser revisado por personas para mejorar el sistema, o usarse para entrenar futuros modelos.

### El semáforo de los datos

> 🟢 **VERDE — puede salir.** Información general y pública: dudas de clase, temas de estudio, ideas, textos que te has inventado.
>
> 🟡 **ÁMBAR — piénsatelo.** Textos tuyos que no son secretos pero tampoco quieres por ahí. Anonimízalos antes.
>
> 🔴 **ROJO — no sale nunca.** Tu nombre completo y apellidos, dirección, teléfono, correo, DNI, contraseñas, datos de salud, datos bancarios, fotos de personas, y **cualquier dato de otra persona**.
{: .alert-warning}

El punto más olvidado es el último. La conversación privada de un amigo, una foto de tu hermana, el parte médico de tu madre: **eso no es tuyo**. Tú no puedes decidir subirlo.

---

## 5. Suplantación: deepfakes y estafas {#deepfakes}

Un **deepfake** es un contenido falso —foto, vídeo o voz— que parece real. Hoy se hace en minutos y con muy poco material.

### Estafas con voz clonada

Con unos segundos de la voz de alguien se puede clonar. La estafa típica: una llamada con la voz de un familiar, nervioso, pidiendo dinero urgentemente.

> 🛡️ **La defensa es sencilla y funciona: acordad en casa una palabra clave.** Algo que solo sepáis vosotros y que no esté en ninguna red social. Si alguien llama pidiendo dinero con la voz de un familiar, le pides la palabra. Una IA no puede saberla.
{: .alert-tip}

### Deepfakes entre menores

Aquí hay que ser muy claro, porque está pasando en institutos como el tuyo.

Crear o difundir imágenes falsas de un compañero o compañera —especialmente de contenido sexual— **no es una broma y no es un juego. Es un delito.** Puede suponer delitos contra la intimidad y contra la integridad moral, y las penas son mayores cuando la víctima es menor de edad. Lo es para quien las crea **y también para quien las reenvía**.

Y por encima de lo legal: el daño a la persona que lo sufre es enorme y dura años.

> 🚨 **Si te pasa a ti, o lo ves en un grupo:** no lo reenvíes, haz capturas como prueba, y **díselo a un adulto** (familia, tutor, orientación). No estás solo y **no es culpa tuya**.
{: .alert-error}

---

## 6. Desinformación {#desinformacion}

Generar un bulo creíble —con su foto, su titular y su testimonio falso— cuesta hoy **segundos**. Antes costaba horas y se notaba.

Esto cambia algo importante: **ya no vale con que algo «parezca» real**. Las señales en las que confiábamos (que hubiera una foto, que estuviera bien escrito) han dejado de servir.

> 🎯 **Lo que sí sirve ahora:** ¿quién lo publica? ¿Lo cuenta alguien más? ¿Aparece en medios que responden de lo que dicen? ¿Puedo llegar a la fuente original?
{: .alert-tip}

---

## 7. Derechos de autor {#derechos}

Los modelos se han entrenado con cantidades enormes de texto, imágenes y música creados por personas que, en general, **ni lo autorizaron ni cobraron por ello**. Hay juicios abiertos en varios países y todavía no hay una respuesta cerrada.

Es un debate legítimo y sin resolver: ¿es como una persona que aprende mirando obras de otros, o es copiar? Conviene que sepas que existe y que **todavía no hay consenso**.

---

## 8. Consume recursos {#medioambiente}

Entrenar y usar estos modelos gasta **mucha** electricidad y **mucha** agua para refrigerar los centros de datos. Cada consulta, por sí sola, gasta poquísimo; el problema es que se hacen **miles de millones** al día.

No se trata de no usarla. Se trata de no usarla **para cualquier tontería**: preguntarle a una IA cuánto es 7 × 8 gasta muchísimo más que hacerlo con la calculadora, o con la cabeza.

---

## 9. Qué dice la ley europea {#ai-act}

Europa tiene un **Reglamento de Inteligencia Artificial** (el *AI Act*), el primero del mundo. No hace falta que te lo aprendas, pero sí la idea: **la ley no trata a todas las IA igual, sino según el riesgo que suponen**.

| Nivel | Qué significa | Ejemplo |
| :--- | :--- | :--- |
| **Riesgo inaceptable** | **Prohibido** en Europa | Puntuar a los ciudadanos según su comportamiento |
| **Alto riesgo** | Permitido con controles estrictos | Sistemas que filtran currículums o deciden sobre becas |
| **Riesgo de transparencia** | Hay que **avisar** de que es IA | Un chatbot, o una imagen generada |
| **Riesgo mínimo** | Sin obligaciones especiales | El filtro de spam, un videojuego |

> 💡 Fíjate en la tercera fila: **tienes derecho a saber cuándo estás hablando con una máquina y cuándo un contenido lo ha hecho una IA.**
{: .alert-info}

---

## Resumen: tus siete reglas

1. **Verifica** los datos, las fechas y sobre todo las fuentes.
2. **No le pidas opinión sobre lo tuyo** esperando sinceridad: pídele fallos.
3. **Nada en rojo.** Ni tuyo, ni de nadie.
4. **Palabra clave en casa** contra las estafas de voz.
5. **Un deepfake de un compañero es un delito**, también si solo lo reenvías.
6. **Duda de lo que parece real.** Busca quién lo publica.
7. **Lo que entregues es tuyo**, con sus errores. La IA no firma nada.
