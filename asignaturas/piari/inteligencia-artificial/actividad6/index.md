---
layout: default
title: Actividad 6. Cazadores de sesgos
description: Actividad 6 del Tema 2
---

# Actividad 6. Cazadores de sesgos

En la [Actividad 2](../actividad2) conseguiste algo curioso sin darte cuenta: hiciste que tu modelo fuera **injusto** con dos clases, y **no escribiste ni una sola regla injusta**. Solo le diste menos ejemplos.

Eso tiene nombre: **sesgo**. Y cuando ocurre en sistemas que se usan de verdad, deja de ser un experimento de clase.

> 📖 Ten abierta la teoría: [**Los riesgos de la IA — Aprende nuestros prejuicios**](../riesgos-de-la-ia#sesgos).
{: .alert-info}

---

## Tarea 1. El recuento

No vamos a opinar sobre si la IA tiene prejuicios. **Vamos a contarlos.**

Abre la herramienta del tema:

> 🎮 **[Cazador de sesgos](../herramientas/cazador-de-sesgos/)**
{: .alert-info}

Verás una galería de imágenes generadas por una IA a partir de peticiones **completamente neutras**. En ninguna se dice el género, la edad ni el aspecto de la persona. Por ejemplo:

> *«una persona dirigiendo una empresa»* · *«una persona limpiando»* · *«una persona programando»* · *«una familia»*

Para cada imagen, rellena la ficha de recuento: **género aparente, edad aparente, entorno**. Cuando termines, la web **dibuja el gráfico** con los totales de toda la serie.

📷 **Captura** del gráfico final.

Responde:

1. ¿Qué prompt da el reparto **más desequilibrado** de todos? ¿Cuánto?
2. ¿Hay algún prompt en el que el reparto sea **equilibrado**? ¿Cuál y por qué crees que ese sí?
3. Recuerda que **en ninguna petición se decía el género ni la edad**. Entonces, **¿de dónde sale ese reparto?**

> 🔑 **Nadie ha programado esto.** No hay una línea de código que diga «los jefes son hombres». El modelo aprendió de millones de imágenes de internet, y en esas imágenes **el mundo ya venía repartido así**. La IA no ha inventado el prejuicio: **lo ha copiado y lo repite como si fuera lo normal**.
{: .alert-warning}

---

## Tarea 2. Tú ya provocaste esto

Vuelve a tu documento de la [Actividad 2](../actividad2), al **Experimento A** (el de entrenar una clase con muchas imágenes y las otras con cinco).

4. ¿Qué le pasaba a aquel modelo?
5. **¿En qué se parece a lo que acabas de ver en el recuento?**
6. Completa la frase: *«Un modelo de IA no es justo ni injusto. Es un reflejo de ________.»*

---

## Tarea 3. Cuando el sesgo decide por ti

Hasta aquí hemos hablado de imágenes, que parecen inofensivas. Ahora juega a esto:

> 🎮 **[Survival of the Best Fit](https://www.survivalofthebestfit.com/)**
{: .alert-info}

Eres el responsable de contratación de una empresa que crece deprisa. Al principio contratas tú, a mano. Después no das abasto y **automatizas el proceso con un algoritmo entrenado con tus propias decisiones anteriores**.

Juega hasta el final y responde:

7. ¿Qué pasó cuando el algoritmo empezó a decidir solo?
8. **¿De dónde sacó el algoritmo su criterio?**
9. Lo más incómodo del juego: **el sesgo lo metiste tú**. ¿En qué momento exactamente?
10. En el juego, ¿quién habría sido **el responsable** de que se rechazara injustamente a una persona? ¿La máquina, la empresa, o quien la entrenó?

---

## Tarea 4. Y esto, ¿dónde pasa de verdad?

11. Busca y describe brevemente **una situación real** (no del juego) en la que un sistema automático tome decisiones sobre personas. Pistas: selección de personal, concesión de ayudas, control de fraude, admisión en centros, seguros, publicidad.
12. Si ese sistema tuviera un sesgo, **¿a quién perjudicaría?** ¿Y se enteraría esa persona de que ha sido un algoritmo?

---

## Tarea 5. Tu propuesta

Eres el equipo responsable de entrenar el modelo de imágenes que has analizado en la Tarea 1. Te encargan **corregirlo**.

13. Escribe una propuesta de **media página**: ¿qué cambiarías **en los datos** para que el modelo dejara de repetir estereotipos? Al menos **tres medidas concretas**.
14. Una pregunta difícil, y no tiene respuesta única: si la IA muestra el mundo **tal y como ha sido hasta ahora**, ¿está *equivocándose*? ¿O el problema es **usarla para decidir cómo debe ser el mundo a partir de ahora**? Argumenta tu postura.

---

## Entrega en Aules

Documento **`apellido_nombre_act6.odt`** y **`.pdf`** con la captura del gráfico, las respuestas 1 a 14 y la propuesta de mejora.

---

## 📊 Rúbrica – Actividad 6: Cazadores de sesgos (máx. 10 puntos)

| Criterio | Insuficiente | Básico | Adecuado | Excelente |
| :--- | :--- | :--- | :--- | :--- |
| **Recuento y lectura de los datos (Tarea 1)** (máx. 2 puntos) | **0 puntos:** No realiza el recuento. | **0.5 puntos:** Realiza el recuento pero no interpreta el gráfico. | **1 puntos:** Identifica correctamente los repartos más desequilibrados y aporta la captura. | **2 puntos:** Interpreta el reparto y razona posibles causas del sesgo, diferenciando lo observado de lo que requeriría investigar los datos y el sistema. |
| **Conexión con su propia experiencia (Tarea 2)** (máx. 1 puntos) | **0 puntos:** No responde. | **0.25 puntos:** Recuerda el experimento sin relacionarlo. | **0.5 puntos:** Relaciona ambos experimentos e identifica un desequilibrio, aunque la explicación es parcial. | **1 puntos:** Relaciona correctamente el desequilibrio de su modelo con el sesgo del generador de imágenes. |
| **Análisis de Survival of the Best Fit (Tarea 3)** (máx. 2 puntos) | **0 puntos:** No juega o no responde. | **0.5 puntos:** Describe el juego sin identificar el origen del sesgo. | **1 puntos:** Identifica que el algoritmo aprendió de sus propias decisiones y señala el momento en que se introdujo el sesgo. | **2 puntos:** Además razona con criterio sobre quién ostenta la responsabilidad. |
| **Aplicación a un caso real (Tarea 4)** (máx. 1 puntos) | **0 puntos:** No aporta ningún caso. | **0.25 puntos:** Aporta un caso vago o inventado. | **0.5 puntos:** Describe un caso pertinente y quién puede resultar perjudicado, con alguna falta de concreción. | **1 puntos:** Describe un caso real y plausible e identifica a quién perjudicaría. |
| **Propuesta de mejora y postura argumentada (Tarea 5)** (máx. 2 puntos) | **0 puntos:** No la elabora. | **0.5 puntos:** Propone medidas genéricas ("usar más datos"). | **1 puntos:** Propone mejoras concretas y una postura propia, aunque alguna medida o argumento queda poco desarrollado. | **2 puntos:** Propone tres medidas concretas sobre los datos y argumenta una postura propia en la pregunta 14. |
| **Entrega en plazo** (máx. 2 puntos) | **0 puntos:** No entrega la actividad. | **0.5 puntos:** Entrega con retraso importante respecto al plazo comunicado. | **1 puntos:** Entrega con pequeño retraso respecto al plazo comunicado. | **2 puntos:** Entrega dentro del plazo establecido. |

> ⚠️ **Nota importante sobre la puntuación de entrega:** Los puntos asignados al criterio de entrega en plazo solo se contabilizarán si el alumno/a ha realizado un esfuerzo real y significativo por completar la actividad. En ningún caso se otorgará esta puntuación por entregas simbólicas, archivos vacíos, o contenidos sin sentido o sin intencionalidad de resolver la tarea.
{: .alert-error}

---

## 📌 Criterios de evaluación asociados

- **CE1.2**: Investigar situaciones donde se aplican técnicas básicas de IA.
- **CE1.3**: Valorar las implicaciones éticas y sociales de las técnicas básicas de IA.
- **CE4.2**: Analizar críticamente las implicaciones que la programación y las tecnologías tienen en la transformación de la sociedad, valorando las repercusiones éticas y ecosociales.
