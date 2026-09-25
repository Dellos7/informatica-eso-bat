---
layout: default
title: Actividad 2. Entrena tu propia IA
description: Actividad 2 del Tema 2
---

# Actividad 2. Entrena tu propia IA

En la actividad anterior comprobaste que ya no distingues lo real de lo generado. Ahora vas a **construir tú una inteligencia artificial** para entender de dónde sale.

Vas a entrenar un modelo que reconozca los gestos de **piedra, papel o tijera**.

> 💡 Ojo a un detalle importante: **no vas a programar ninguna regla**. No le vas a decir «si tiene el puño cerrado es piedra». Le vas a dar **ejemplos** y él solo tendrá que descubrir el patrón. Esta es la idea del aprendizaje automático supervisado que vamos a practicar.
{: .alert-tip}

---

## Antes de empezar

1. Crea la carpeta **Documentos/PIARI/Tema 2/Actividad 2**.
2. Descarga de Aules el conjunto de imágenes que facilitará el profesor y descomprímelo ahí: `piedra`, `papel`, `tijera`, `pruebas` y `pruebas_dificiles`. No utilices las imágenes de prueba para entrenar. Si el paquete todavía no está disponible, solicítalo al profesor antes de comenzar.
3. Abre **[Teachable Machine](https://teachablemachine.withgoogle.com/)** → *Get Started* → **Proyecto de imágenes** → **Modelo de imagen estándar**.

> ⚠️ **MUY IMPORTANTE:** si no inicias sesión, **Teachable Machine pierde todo tu trabajo al cerrar o refrescar la pestaña**. Haz las capturas según vayas avanzando y no cierres el navegador hasta terminar.
{: .alert-error}

---

## Tarea 1. Entrenar el modelo

1. Crea **tres clases** y renómbralas: `Piedra`, `Papel` y `Tijera`.
2. En cada clase pulsa **Upload** (subir) y selecciona **todas las imágenes** de la carpeta correspondiente.
3. Pulsa **Train Model** (entrenar) y espera. **No cambies de pestaña** mientras entrena.
4. Cuando termine, en la ventana de vista previa cambia **Webcam** por **File** y sube las imágenes de la carpeta `pruebas`.

📷 **Captura 1:** el modelo entrenado acertando una imagen de prueba, donde se vea el porcentaje.

---

## Tarea 2. El experimento más importante del tema

Ahora sube al modelo una imagen que **no tenga nada que ver**: una mochila, un boli, tu carpeta, un paisaje. Lo que quieras.

📷 **Captura 2:** el modelo respondiendo ante esa imagen imposible.

Y ahora responde con mucha atención:

1. ¿Ha dicho «no lo sé»?
2. ¿Qué porcentajes ha dado? ¿Cuánto suman entre los tres?
3. **¿Por qué crees que hace eso?**

> 🔑 Esto es lo más importante que vas a aprender hoy. El modelo **solo conoce tres posibilidades** y está obligado a repartir el 100 % entre ellas. Este clasificador no incorpora una salida «no lo sé»: asigna puntuaciones a las tres clases incluso para entradas inadecuadas. Eso no demuestra que su respuesta sea correcta. Otros sistemas pueden incorporar mecanismos de rechazo o expresar incertidumbre.
{: .alert-warning}

---

## Tarea 3. Rompe tu modelo

Un modelo se entiende de verdad cuando consigues que falle. Haz los **tres experimentos** y documenta cada uno con su captura y su explicación.

### Experimento A — Datos desequilibrados

Crea un modelo nuevo. Entrena `Piedra` con **todas** las imágenes, pero `Papel` y `Tijera` con **solo 5 imágenes cada una**. Entrena y prueba.

- ¿Hacia qué clase se inclina ahora el modelo?
- ¿Qué ha pasado y por qué?

### Experimento B — Datos poco variados

Crea otro modelo entrenando cada clase **solo con imágenes muy parecidas entre sí** (mismo fondo, misma orientación, mismo tipo de mano). Después pruébalo con las imágenes de la carpeta `pruebas_dificiles`, que son distintas.

- ¿Sigue acertando igual?
- ¿Qué le falta a este modelo para funcionar bien en el mundo real?

### Experimento C — Lo ambiguo

Busca o crea una imagen **a medio camino** entre dos clases (una mano medio cerrada, por ejemplo) y pásasela al modelo bueno del principio.

- ¿Qué porcentajes salen?
- ¿Te parece que la respuesta del modelo es «correcta»? ¿Por qué?

---

## Tarea 4. La conclusión

En **LibreOffice Writer**, monta el documento con las capturas y responde:

1. Las preguntas de las Tareas 2 y 3.
2. **La pregunta final:** después de estos experimentos, ¿de qué depende que una IA funcione bien o mal? Explícalo con tus palabras en 4 o 5 líneas.
3. En el Experimento A conseguiste que el modelo fuera **injusto** con dos de las clases sin escribir ni una regla injusta. **¿Cómo lo conseguiste, entonces?** Guarda esta respuesta: la vas a necesitar en la [Actividad 6](../actividad6).

---

## Entrega en Aules

Documento **`apellido_nombre_act2.odt`** y su **`.pdf`**, con las capturas de los cuatro modelos (el bueno y los tres experimentos) y todas las respuestas.

---

## 📊 Rúbrica – Actividad 2: Entrena tu propia IA (máx. 10 puntos)

| Criterio | Insuficiente | Básico | Adecuado | Excelente |
| :--- | :--- | :--- | :--- | :--- |
| **Entrenamiento correcto del modelo (Tarea 1)** (máx. 2 puntos) | **0 puntos:** No consigue entrenar el modelo o no aporta capturas. | **0.5 puntos:** Entrena el modelo pero no documenta la prueba con el porcentaje de confianza. | **1 puntos:** Entrena las tres clases y prueba el modelo, pero falta alguna evidencia o explicación del resultado. | **2 puntos:** Modelo entrenado con las tres clases, probado correctamente y documentado con captura legible. |
| **Comprensión del reparto de probabilidad (Tarea 2)** (máx. 2 puntos) | **0 puntos:** No realiza el experimento. | **0.5 puntos:** Aporta la captura pero no explica por qué el modelo no puede decir "no lo sé". | **1 puntos:** Explica correctamente que el modelo reparte el 100 % entre las clases que conoce. | **2 puntos:** Explica el reparto entre clases y por qué una entrada ajena a ellas puede recibir una puntuación alta sin ser una clasificación válida. |
| **Experimentos de ruptura (Tarea 3)** (máx. 2.5 puntos) | **0 puntos:** No realiza ninguno. | **0.625 puntos:** Realiza uno de los tres con su explicación. | **1.25 puntos:** Realiza dos de los tres con sus capturas y explicaciones correctas. | **2.5 puntos:** Realiza los tres, documentados y correctamente interpretados. |
| **Conclusión sobre el papel de los datos (Tarea 4)** (máx. 1.5 puntos) | **0 puntos:** No responde o responde sin relación con lo experimentado. | **0.375 puntos:** Concluye que "hacen falta muchos datos", sin más. | **0.75 puntos:** Relaciona el resultado con dos aspectos de los datos y utiliza algún ejemplo de sus pruebas. | **1.5 puntos:** Concluye que la calidad del modelo depende de la cantidad, el equilibrio y la variedad de los datos, apoyándose en sus propios experimentos. |
| **Entrega en plazo** (máx. 2 puntos) | **0 puntos:** No entrega la actividad. | **0.5 puntos:** Entrega con retraso importante respecto al plazo comunicado. | **1 puntos:** Entrega con pequeño retraso respecto al plazo comunicado. | **2 puntos:** Entrega dentro del plazo establecido. |

> ⚠️ **Nota importante sobre la puntuación de entrega:** Los puntos asignados al criterio de entrega en plazo solo se contabilizarán si el alumno/a ha realizado un esfuerzo real y significativo por completar la actividad. En ningún caso se otorgará esta puntuación por entregas simbólicas, archivos vacíos, o contenidos sin sentido o sin intencionalidad de resolver la tarea.
{: .alert-error}

---

## 📌 Criterios de evaluación asociados

- **CE1.1**: Identificar los fundamentos y el funcionamiento de las técnicas básicas de IA.
- **CE1.2**: Investigar situaciones donde se aplican técnicas básicas de IA.
- **CE1.4**: Emplear funciones de IA en aplicaciones sencillas de forma guiada para buscar soluciones a problemas básicos.
- **CE4.3**: Describir y valorar la adecuación de las tecnologías, entornos de desarrollo, dispositivos y componentes para resolver los retos planteados.
