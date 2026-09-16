# Propuesta: Tema 2 — Inteligencia Artificial (PIAR I, 2º ESO)

**Título propuesto:** *Ni piensa, ni sabe, ni te conoce: cómo funciona de verdad la IA*
**Carpeta web propuesta:** `asignaturas/piari/inteligencia-artificial/`
**Ubicación curricular:** SdA 2 (2º trimestre) — **23 sesiones de 55 minutos**
**Enfoque acordado:** centrado en **IA generativa y LLM**, con una base mínima e imprescindible de aprendizaje automático (sin ella no se entiende nada de lo demás).
**Restricción de herramientas:** preferentemente **sin registro**; como mucho, registro con correo `@alu.edu.gva.es`. **No se cuenta con Copilot** vinculado a la cuenta educativa.

---

## 1. Idea vertebradora del tema

Todo el tema gira alrededor de **una sola frase** que el alumnado debe poder explicar con sus palabras al acabar:

> **La IA no piensa: calcula qué es lo más probable que venga a continuación, a partir de lo que ha visto en sus datos de entrenamiento.**

De esa frase se derivan, de forma natural, todos los demás contenidos que pides:

| Pregunta del alumnado | Se responde en |
| :--- | :--- |
| ¿Qué es la IA y por qué funciona tan bien? | Act. 2 y 3 |
| ¿Por qué se inventa cosas (alucina)? | Act. 3 |
| ¿Por qué depende tanto de cómo le pregunte? | Act. 4 |
| ¿Por qué no debo contarle mi vida? | Act. 5 |
| ¿Por qué discrimina o estereotipa? | Act. 6 |
| ¿Me va a quitar el trabajo? ¿Y la AGI? | Act. 7 |
| ¿Y yo qué puedo hacer con esto? | Act. 1 y 8 |

**Principio metodológico:** el alumnado **no debe creerse** que la IA no piensa porque se lo diga el profesor. Debe **romperla con sus propias manos** (Act. 2 y 3) y sacar la conclusión él mismo. Ese es el giro respecto a la propuesta anterior, que era más expositiva.

---

## 2. Cambios propuestos a la programación de aula (SdA 2)

La SdA 2 actual tiene **3 actividades de 7-8 sesiones cada una**. Propongo sustituirla por **8 actividades de 2-4 sesiones**, por tres motivos:

1. **Bloques de 8 sesiones son inmanejables a los 13-14 años.** La actividad 2 actual ("Detective de sesgos") son 8 sesiones de debate en aula ordinaria con proyector: es mucho tiempo sin ordenador delante y la atención se desploma.
2. **La SdA 2 actual no menciona los LLM ni los prompts**, que es justo lo que el alumnado usa a diario y lo que has pedido.
3. **La evaluación necesita más puntos de recogida.** Con 3 actividades, un alumno que falle una está prácticamente suspenso.

También propongo estos retoques al texto de la SdA 2 en la programación de aula:

- **Descripción / Justificación:** añadir la alfabetización en IA generativa (prompting, verificación, privacidad) como objetivo explícito, y no solo la ética y los sesgos.
- **Saberes básicos:** los que ya tienes se cubren todos, pero conviene añadir explícitamente *«Sensors, tipologia i aplicacions»* (Bloque 1), que hoy solo aparece en la SdA 3 y que aquí encaja en la Act. 2 (la webcam como sensor de entrada de un modelo).
- **Criterios de evaluación:** mantener CE1 (1.1–1.4) y CE4 (4.1, 4.2), y **añadir CE4.3** (valorar la adecuación de las tecnologías al reto), que se trabaja de forma evidente al elegir qué herramienta de IA usar en cada tarea.
- **Instrumentos:** añadir la **ficha de transparencia de uso de IA** (apartado 6), que es el instrumento clave para poder evaluar con honestidad cuando el alumnado usa IA.

---

## 3. Marco de uso seguro (hay que decidirlo antes de empezar)

Esto no es una actividad, es la condición para que el tema sea viable. Lo planteo como **advertencia, no como obstáculo**:

- **Edad y términos de uso.** Prácticamente todos los servicios de IA generativa exigen **13 o 14 años como mínimo**, y varios exigen consentimiento de padre/madre/tutor hasta los 18. Con alumnado de 2º ESO estás justo en la frontera.
- **Recomendación:** enviar a las familias una **comunicación informativa** al inicio del trimestre (qué herramientas se usarán, que no se introducirán datos personales, que el uso es supervisado en el aula) y priorizar herramientas **sin cuenta**, que es exactamente lo que ya has decidido. Con eso el riesgo baja mucho.
- **Regla de oro del aula**, escrita en un cartel y repetida en cada sesión: **«A una IA no le cuentas nada que no le contarías a un desconocido en el autobús.»**
- **Generación de imágenes:** los generadores sin registro tienen **filtros de contenido más flojos**. Mi recomendación es que la generación de imágenes de la Act. 6 (sesgos) la hagas **tú, proyectada**, y que el alumnado genere imágenes por su cuenta solo en las Act. 4 y 8, con herramientas concretas y contigo circulando por el aula.

### Herramientas propuestas y su requisito de registro

| Herramienta | Registro | Uso en el tema |
| :--- | :--- | :--- |
| **Teachable Machine** (Google) | **No** | Act. 2 — entrenar un modelo propio con la webcam |
| **Tiktokenizer** (`tiktokenizer.vercel.app`) | **No** | Act. 3 — ver cómo se trocea el texto en *tokens* |
| **Transformer Explainer** (Georgia Tech, `poloclub.github.io/transformer-explainer`) | **No** | Act. 3 — ver en directo las probabilidades de la siguiente palabra |
| **Duck.ai** (`duck.ai`, de DuckDuckGo) | **No** | Act. 3, 4, 5 — chat con varios modelos, anónimo y sin historial. **La pieza clave de la propuesta.** |
| **Perplexity** (versión libre) | **No** | Act. 3 — contraste de IA *con* fuentes citadas frente a IA *sin* fuentes |
| **Craiyon** o un Space de Hugging Face | **No** | Act. 4 y 6 — generación de imágenes |
| **Which Face Is Real** (`whichfaceisreal.com`) | **No** | Act. 1 — caras generadas frente a caras reales |
| **This Person Does Not Exist** | **No** | Act. 1 |
| **AI for Oceans** (Code.org) | **No** | Act. 2 (opcional, refuerzo) |
| **Survival of the Best Fit** | **No** | Act. 6 — cómo un algoritmo de contratación aprende a discriminar |
| **Quick, Draw!** / **Semantris** (Google) | **No** | Act. 2 (opcional, enganche) |
| **Machine Learning for Kids + Scratch** | **Sí** (el profesor crea las cuentas del grupo) | Act. 8, itinerario A |
| **Scratch** | No (cuenta opcional) | Act. 8, itinerario A |

> **Aviso de mantenimiento:** estas herramientas web cambian de condiciones con frecuencia. Conviene **reprobarlas cada septiembre** antes de dar el tema por bueno. Es el punto más frágil de toda la propuesta.

---

## 4. Páginas de teoría del tema

Al estilo de `funcionamiento-basico-karel.md` y `bucles-y-condicionales-en-karel.md` del Tema 1: páginas cortas, con ejemplos y capturas, que el alumnado consulta mientras hace la actividad. **No son sesiones de clase magistral**; son material de apoyo.

1. **`que-es-la-inteligencia-artificial.md`**
   Datos → patrón → predicción. Diferencia entre programar una regla y entrenar con ejemplos. IA predictiva frente a IA generativa. Qué es un **modelo**. Muy breve: historia (1956 nace la disciplina, 2012 aprendizaje profundo, 2017 *transformers*, 2022 el salto al público general).

2. **`como-funciona-un-llm.md`** — *la página central del tema*
   Qué es un **token**. Predicción de la siguiente palabra. Qué son los **parámetros** y el entrenamiento. Qué es la **ventana de contexto** y por qué la IA «se olvida». Por qué **no es determinista** (dos respuestas distintas a la misma pregunta). Por qué **alucina**. Por qué falla contando letras. Analogía recomendada: *el autocompletado del móvil, pero con millones de veces más textos leídos.*

3. **`prompts.md`**
   Qué es un prompt. El esquema **R.O.C.F.**: **R**ol, **O**bjetivo, **C**ontexto, **F**ormato. Técnicas básicas: dar ejemplos, pedir pasos, pedir varias versiones, iterar sobre la respuesta, decir también lo que **no** quieres. Errores frecuentes: pedirlo todo de golpe, no decir el formato, aceptar la primera respuesta, creerse los datos. **Checklist de verificación de 4 puntos** antes de usar nada de lo que te dé.

4. **`riesgos-de-la-ia.md`**
   Alucinaciones. Sesgos y de dónde salen. Privacidad: qué pasa con lo que escribes. Deepfakes, desinformación y estafas por voz. Derechos de autor y obras usadas en el entrenamiento. Coste energético y de agua. Mención **muy** básica al **Reglamento Europeo de IA**: hay usos prohibidos, usos de alto riesgo y obligación de avisar cuando algo lo ha hecho una IA.

5. **`hacia-donde-va-la-ia.md`**
   De responder a **actuar**: qué es un **agente**. Multimodalidad. Modelos que caben en tu propio ordenador. **ANI / AGI / ASI**: qué significan y por qué nadie se pone de acuerdo con las fechas — presentado como **debate abierto y honesto**, no como profecía. Empleo: qué tareas cambian y qué capacidades humanas siguen valiendo.

---

## 5. Secuencia de actividades (23 sesiones)

```
Tema 2: Inteligencia Artificial (23 sesiones)
 ├── Act. 1: ¿Esto lo ha hecho una IA?                          (2 ses.)  — enganche
 ├── Act. 2: Entrena tu propia IA (Teachable Machine)            (3 ses.)  — por qué funciona
 ├── Act. 3: La máquina que adivina la siguiente palabra         (3 ses.)  — por qué NO piensa
 ├── Act. 4: El reto del prompt perfecto                         (4 ses.)  — prompting
 ├── Act. 5: Lo que nunca le cuentas a una IA                    (2 ses.)  — privacidad y seguridad
 ├── Act. 6: Cazadores de sesgos y deepfakes                     (3 ses.)  — ética
 ├── Act. 7: ¿Hacia dónde va esto? Agentes, AGI y mi futuro      (2 ses.)  — futuro
 └── Act. 8: Proyecto final — "Mi producto con IA"               (4 ses.)  — producto propio
```

---

### Actividad 1 — «¿Esto lo ha hecho una IA?» (2 sesiones)

**Objetivo:** enganchar y desestabilizar. Que descubran que ya no saben distinguir.

**Conceptos:** IA generativa, contenido sintético, indicios de generación automática.

**Desarrollo:**
1. **Ronda de caras** con `whichfaceisreal.com`: 10 rondas individuales apuntando aciertos. Casi todos rondarán el 50-60 %.
2. **Ronda de textos:** proyectas 6 textos cortos sobre un mismo tema (3 escritos por alumnado de otro grupo, 3 generados por IA) y votan a mano alzada. Se comentan las pistas: exceso de estructura, adjetivos vacíos, ausencia total de errores, listas de tres elementos, cero anécdotas concretas.
3. **Ronda de imágenes y vídeo:** manos, texto en carteles, reflejos, orejas y pendientes, física imposible.
4. **Documento en LibreOffice Writer** con su tabla de aciertos, las 3 pistas que mejor les han funcionado y la respuesta a: *¿en qué situación de tu vida real te importaría de verdad no poder distinguirlo?*

**Entrega:** documento `.odt` + `.pdf` en Aules.
**Criterios:** CE1.1, CE1.3, CE4.2.

---

### Actividad 2 — «Entrena tu propia IA» (3 sesiones)

**Objetivo:** que entiendan **de dónde sale la inteligencia** de un modelo: de los datos, no de un programador escribiendo reglas. Es la base sin la cual la Act. 3 no se sostiene.

**Conceptos:** aprendizaje automático supervisado, conjunto de entrenamiento (*dataset*), clase, porcentaje de confianza, sensor de entrada (la webcam), sesgo por datos desequilibrados.

**Desarrollo:**
1. Con **Teachable Machine** (sin registro), entrenar un modelo de imagen con **3 clases**: piedra / papel / tijera, o tres gestos inventados por ellos.
2. Probar el modelo en directo y observar el **porcentaje de confianza**. Comprobar que nunca dice «no lo sé»: **siempre** reparte el 100 % entre las clases que conoce. Enseñarle algo que no ha visto nunca (un boli, una mochila) y ver qué contesta. **Este es el momento didáctico clave del tema.**
3. **Rompe tu modelo** — tres experimentos obligatorios, documentados con captura:
   - Entrenar una clase con 10 imágenes y otra con 200. ¿Qué pasa?
   - Entrenar solo con la mano de una persona y probarlo con la de un compañero de otro tono de piel o con manga larga. ¿Qué pasa?
   - Cambiar la iluminación o el fondo. ¿Qué pasa?
4. Conclusión escrita: *un modelo no sabe nada del mundo; solo sabe lo que hay en sus datos.*

**Entrega:** enlace al modelo exportado + documento con las 3 capturas de fallo y su explicación.
**Criterios:** CE1.1, CE1.2, CE1.4, CE4.3.

---

### Actividad 3 — «La máquina que adivina la siguiente palabra» (3 sesiones)

**Objetivo:** la actividad más importante del tema. Que comprendan el mecanismo real de un LLM y **por qué no piensa**.

**Conceptos:** token, predicción del siguiente token, probabilidad, temperatura, no determinismo, ventana de contexto, alucinación, fecha de corte de conocimiento.

**Desarrollo:**
1. **Sin ordenador (10 min):** cada alumno coge su móvil, escribe «Hoy voy a» y pulsa **solo** la palabra sugerida del centro del teclado, 15 veces seguidas. Se leen los resultados en voz alta. Sale algo casi coherente y completamente vacío. *Eso es, en pequeñito, lo que hace un LLM.*
2. **Tokenizador** (`tiktokenizer.vercel.app`): escribir su nombre, una palabra en valenciano, un emoji y un número largo. Ver cómo se trocean. Entender que **el modelo no ve letras, ve trozos**.
3. **Transformer Explainer:** escribir una frase a medias y ver las probabilidades de la siguiente palabra. Subir y bajar la **temperatura** y observar cómo pasa de «aburrido y correcto» a «creativo y disparatado».
4. **Rompe el LLM** con **Duck.ai** (sin registro). Retos guiados:
   - Pedirle cuántas erres tiene «ferrocarril» y explicar por qué se equivoca (enlazar con los tokens).
   - Hacerle la misma pregunta dos veces en chats distintos y comparar: **no es determinista**.
   - Pedirle la biografía de un personaje inventado por ellos (*«¿quién fue Mariano Estruch, futbolista valenciano de los años 40?»*) y comprobar que **se la inventa con total seguridad**.
   - Preguntarle por algo de la semana pasada y descubrir su **fecha de corte de conocimiento**.
   - Comparar esa respuesta con la de **Perplexity**, que **sí cita fuentes**, y discutir la diferencia.
5. **Producto:** documento *«3 mentiras que me ha contado una IA»*, con captura, la mentira concreta y cómo la ha verificado.

**Entrega:** documento `.odt` + `.pdf` con las capturas y la explicación escrita de por qué falló.
**Criterios:** CE1.1, CE1.3, CE4.2.

> **Nota didáctica:** esta actividad es el mejor antídoto contra el uso acrítico de la IA para hacer los deberes, y funciona mucho mejor que prohibirla. Un alumno que ha pillado a la IA mintiéndole tres veces ya no vuelve a copiar y pegar igual.

---

### Actividad 4 — «El reto del prompt perfecto» (4 sesiones)

**Objetivo:** que sepan pedir bien. Es la competencia más transferible de todo el tema.

**Conceptos:** prompt, R.O.C.F. (Rol, Objetivo, Contexto, Formato), iteración, dar ejemplos, especificar lo que **no** quieres.

**Desarrollo:**
1. **Antes / después.** Cada alumno elige una tarea real (preparar un examen de Biología, escribir el texto de una invitación, planificar un entrenamiento). Lanza primero un **prompt pobre** de una línea y guarda captura. Después reescribe el prompt con **R.O.C.F.** completo y vuelve a lanzarlo. Compara los dos resultados **lado a lado** en el documento y justifica la mejora.
2. **Torneo de prompts (por parejas).** Reto común para toda la clase, por ejemplo: *«la mejor descripción para la ficha de un videojuego inventado»* o *«el mejor guion de 30 segundos para un vídeo sobre el instituto»*. Se proyectan los resultados **sin ver el prompt** y la clase vota. Después se descubren los prompts ganadores y se analiza **qué tenían**.
3. **Prompt a ciegas (juego).** El grupo A escribe un prompt y genera una imagen; el grupo B ve **solo la imagen** e intenta reconstruir el prompt original. Gana quien más se acerque. Es la actividad que más engancha de todo el tema y enseña con mucha claridad la relación entre lo que pides y lo que sale.
4. **Chuleta de prompts** personal: cada alumno redacta su propia plantilla R.O.C.F. reutilizable.

**Entrega:** documento con la comparación antes/después, la chuleta personal y la captura del reto.
**Criterios:** CE1.4, CE4.1, CE4.3.

---

### Actividad 5 — «Lo que nunca le cuentas a una IA» (2 sesiones)

**Objetivo:** privacidad y seguridad desde su vida real, no desde la abstracción legal.

**Conceptos:** dato personal, dato sensible, anonimización, entrenamiento con tus conversaciones, ingeniería social, suplantación de voz.

**Desarrollo:**
1. **El semáforo de datos.** Se reparten 20 tarjetas con datos (tu nombre, el mote del grupo, la dirección del instituto, una foto tuya, el DNI de tu madre, un problema de salud, la contraseña del wifi, una conversación privada de un amigo, tu nota de mates…) y hay que colocarlas en **verde / ámbar / rojo**. Puesta en común y discusión de los casos dudosos, que es donde está el aprendizaje.
2. **Anonimizar de verdad.** Se da un texto real (una reclamación, un mensaje a un profesor) con nombres, teléfonos y centro, y hay que reescribirlo para poder pedirle ayuda a una IA **sin filtrar a nadie**. Luego se lanza el prompt anonimizado y se comprueba que funciona igual de bien.
3. **Estafas con IA.** Caso de la llamada con voz clonada de un familiar pidiendo dinero. Se acuerda en clase una medida práctica y real: **una palabra clave familiar** que ninguna IA puede saber. Tarea para casa: proponerla en su casa.
4. **Datos de terceros:** la regla de que la conversación privada de un amigo **no es tuya** para subirla a ningún sitio.

**Entrega:** semáforo completado + texto anonimizado + la regla personal que se compromete a cumplir.
**Criterios:** CE1.3, CE4.2.

---

### Actividad 6 — «Cazadores de sesgos y deepfakes» (3 sesiones)

**Objetivo:** equidad, inclusión y consecuencias reales. Cubre el saber básico de *Equitat i inclusió en sistemes de IA. Biaixos en IA*.

**Conceptos:** sesgo algorítmico, origen histórico de los datos, discriminación automatizada, deepfake, consecuencias legales.

**Desarrollo:**
1. **Experimento de sesgo (generación proyectada por el profesor).** Prompts genéricos y neutros: *«una persona dirigiendo una empresa»*, *«una persona limpiando»*, *«una persona programando»*, *«una familia»*. Se genera 4 veces cada uno y **el alumnado rellena una tabla de recuento** (género, edad aparente, tono de piel, entorno). Los números salen solos y el debate deja de ser opinión para pasar a ser dato.
2. **Survival of the Best Fit** (sin registro): juego en el que ellos mismos contratan personal y su algoritmo aprende sus propios prejuicios. Impacta mucho porque **el sesgo lo han metido ellos**.
3. **Deepfakes.** Caso real de suplantación entre menores. Tres preguntas guiadas: ¿qué daño causa?, ¿es delito? (sí: contra la integridad moral y contra la intimidad, y agravado si hay contenido sexual o la víctima es menor), ¿qué harías tú si te pasara o si lo vieras en un grupo?
4. **Producto:** propuesta escrita de mejora — *«si tú fueras quien entrena ese modelo, ¿qué cambiarías en los datos?»*

**Entrega:** tabla de recuento + informe reflexivo de una página.
**Criterios:** CE1.2, CE1.3, CE4.2.

---

### Actividad 7 — «¿Hacia dónde va esto? Agentes, AGI y mi futuro» (2 sesiones)

**Objetivo:** situarles ante el futuro sin catastrofismo ni entusiasmo ingenuo.

**Conceptos:** agente de IA, multimodalidad, modelos locales, ANI / AGI / ASI, impacto en el empleo.

**Desarrollo:**
1. **De responder a actuar.** Se explica y demuestra (proyectado) la diferencia entre una IA que te contesta y un **agente** que ejecuta tareas. Idea clave: *cuando la IA actúa sola, la pregunta ya no es si acierta, sino quién responde cuando se equivoca.*
2. **La escalera ANI → AGI → ASI.** Qué significa cada una, en qué escalón estamos hoy, y por qué las previsiones de los expertos van desde «5 años» hasta «nunca». Se presenta **el desacuerdo como tal**, que es más honesto y más formativo que dar una respuesta cerrada.
3. **Debate con roles asignados** (30 min, reglas claras de turno): equipo optimista / equipo cauto / equipo intermedio. Los roles se **asignan por sorteo**, no por convicción: obliga a argumentar una postura que quizá no compartan.
4. **Producto individual:** *«Carta a mí mismo en 2035»* — media página: qué creo que hará una IA por mí, qué quiero seguir sabiendo hacer yo, y por qué. Se guarda y, si se puede, se les devuelve en 4º de ESO.

**Entrega:** la carta en `.pdf`.
**Criterios:** CE1.3, CE4.2.

---

### Actividad 8 — Proyecto final: «Mi producto con IA» (4 sesiones)

**Objetivo:** cierre motivador y producto propio. El alumnado **elige itinerario**, lo que atiende de golpe a la diversidad del grupo.

**Itinerario A — Técnico: «Mi asistente inteligente en Scratch»**
Con **Machine Learning for Kids** (cuentas creadas por el profesor) entrenan un clasificador de texto propio (por ejemplo: mensaje respetuoso / mensaje ofensivo, o clasificar peticiones en tres categorías) y lo integran en un proyecto de **Scratch**, enlazando directamente con los bucles y condicionales del Tema 1. Entrega: `.sb3`.

**Itinerario B — Creativo: «Producto multimedia con IA»**
Un anuncio, un cómic, un corto, un cartel o la ficha de un videojuego, usando IA generativa. **Requisito obligatorio:** entregar el **cuaderno de prompts** con todas las versiones hasta llegar al resultado. Se evalúa la iteración, no la suerte.

**Itinerario C — Divulgativo: «Campaña de concienciación»**
Infografía o vídeo corto dirigido a alumnado de 1º de ESO sobre uno de los riesgos trabajados (alucinaciones, privacidad, deepfakes, sesgos). Producto real, con destinatario real.

**Común a los tres itinerarios — la ficha de transparencia (obligatoria):**

| Pregunta | Respuesta |
| :--- | :--- |
| ¿Qué herramientas de IA he usado y para qué? | |
| ¿Cuál fue mi mejor prompt? (copiar literal) | |
| ¿Qué me dio mal, se inventó o no me servía? | |
| ¿Qué he cambiado yo a mano sobre lo que me dio la IA? | |
| ¿Qué parte de este trabajo es mérito mío? | |

**Criterios:** CE1.4, CE2.4, CE4.1, CE4.3, CE4.4.

---

## 6. Evaluación: el cambio de fondo

Cuando el alumnado usa IA, **evaluar solo el producto final deja de tener sentido**: la IA lo hace mejor que ellos en 10 segundos. La propuesta desplaza el peso de la evaluación:

| Qué se evalúa | Peso orientativo |
| :--- | :---: |
| **Proceso documentado** (prompts, iteraciones, ficha de transparencia) | 35 % |
| **Verificación y espíritu crítico** (detectar y corregir lo que la IA falla) | 25 % |
| **Comprensión conceptual** (explicar con sus palabras cómo funciona) | 20 % |
| **Producto final** | 20 % |

**Instrumentos:**
- Rúbrica analítica por actividad, en el mismo formato de tabla que el Tema 1 (incluido el mismo aviso sobre los puntos de entrega en plazo).
- **Ficha de transparencia** en toda entrega que haya usado IA (Act. 4 y 8 como mínimo).
- Registro anecdótico del debate (Act. 7) y de la puesta en común del semáforo (Act. 5).
- Diario de aprendizaje de una línea al final de cada sesión: *«hoy he descubierto que la IA…»*.

---

## 7. Lo que hay que decidir antes de generar las páginas

1. **Comunicación a las familias:** ¿la haces tú, la lleva jefatura de estudios, o preparo un borrador?
2. **Machine Learning for Kids (Act. 8, itinerario A):** requiere que crees las cuentas del grupo. ¿Lo asumes, o dejo el itinerario A fuera y monto el proyecto final solo con B y C?
3. **Generación de imágenes:** ¿confirmas que en la Act. 6 la generación la haces tú proyectada, y que en las Act. 4 y 8 la hace el alumnado con supervisión?
4. **Idioma:** el Tema 1 está en castellano. ¿Mantengo castellano en todo el Tema 2?
5. **Reparto de sesiones:** ¿te cuadran las 23 sesiones tal como las he distribuido, o quieres recortar alguna actividad para dar más aire al proyecto final?
6. **Nombre de la carpeta:** propongo `inteligencia-artificial/`. ¿Te vale o prefieres otro?

---

## 8. Riesgos de esta propuesta (para decidir con los ojos abiertos)

- **Dependencia de servicios de terceros gratuitos.** Duck.ai, Craiyon o los Spaces de Hugging Face pueden cambiar sus condiciones, pedir cuenta o desaparecer. Conviene tener una alternativa apuntada para cada una y revisarlas cada curso.
- **Filtrado de red del centro.** Es muy posible que algunos de estos dominios estén bloqueados en la red del instituto. **Merece la pena comprobarlo antes de programar nada**, porque puede tirar abajo media secuencia.
- **Heterogeneidad del grupo.** Habrá alumnado que ya use IA a diario y alumnado que no la haya tocado nunca. Las actividades 3 y 4 están pensadas para que los primeros también descubran algo nuevo (tokens, temperatura, alucinaciones verificadas), no solo para nivelar hacia abajo.
- **El tema envejece rápido.** Las páginas de teoría 2 y 5 (`como-funciona-un-llm.md` y `hacia-donde-va-la-ia.md`) habrá que revisarlas cada curso. Las actividades, en cambio, aguantan bien porque atacan mecanismos, no productos concretos.
