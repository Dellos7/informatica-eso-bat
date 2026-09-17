# Propuesta: Tema 2 — Inteligencia Artificial (PIAR I, 2º ESO)

**Título propuesto:** *Ni piensa, ni sabe, ni te conoce: cómo funciona de verdad la IA*
**Carpeta web propuesta:** `asignaturas/piari/inteligencia-artificial/`
**Ubicación curricular:** SdA 2 (2º trimestre) — **23 sesiones de 55 minutos**
**Enfoque:** centrado en **IA generativa y LLM**, con una base mínima de aprendizaje automático (sin ella no se entiende lo demás).

> **Versión 2** — revisada tras tus comentarios: todo se hace en el ordenador, nada de material físico ni de móvil (salvo el proyecto de App Inventor), y la Actividad 3 se reformula porque los modelos actuales **ya no fallan** en las trampas clásicas.

---

## 0. Restricciones de partida (condicionan todo el diseño)

| Restricción | Consecuencia en el diseño |
| :--- | :--- |
| **Todo debe hacerse en el ordenador** | Nada de dados, tarjetas ni fichas en papel. Lo manipulativo se convierte en **mini-webs propias** (apartado 4). |
| **Sin móvil en clase** | Fuera el teclado predictivo del móvil y cualquier app. **Excepción única:** 2 sesiones autorizadas para el proyecto de App Inventor. |
| **Sin webcam en los equipos** | Teachable Machine se usa **subiendo imágenes desde disco**, no capturando en directo. |
| **Herramientas sin registro** | Prioridad absoluta. Solo dos excepciones controladas, ambas resueltas (apartado 3). |

---

## 1. Idea vertebradora del tema

Una sola frase que el alumnado debe poder explicar con sus palabras al acabar:

> **La IA no piensa: calcula qué es lo más probable que venga a continuación, a partir de lo que ha visto en sus datos de entrenamiento.**

**Principio metodológico:** el alumnado **no debe creerse** que la IA no piensa porque se lo diga el profesor. Debe **construir el mecanismo con sus manos** (Act. 2 y 3) y sacar la conclusión él mismo.

---

## 2. El problema de la Actividad 3 y cómo se resuelve

Esto es el cambio de fondo de la versión 2, y merece explicación.

**Lo que fallaba.** La versión 1 apostaba por «pilla a la IA mintiendo»: el futbolista inventado, las erres de «ferrocarril». Lo probaste y **no funciona**: el modelo te dijo que ese futbolista no existe, y el modelo de razonamiento contó bien las erres. Solo falló el modelo rápido.

**Por qué es grave.** Si la actividad depende de que la IA se equivoque y no se equivoca, el alumnado se lleva **la lección contraria**: *«pues parece que siempre acierta»*. Sería peor que no hacer la actividad. Y además el diseño envejecería cada año un poco más.

**Lo que has descubierto sin querer es una lección mejor.** Que el modelo rápido falle y el de razonamiento no es **exactamente el contenido que hay que enseñar en 2026**:

> **No existe «la IA». Existen muchos modelos, de distinto tamaño y coste, que no valen lo mismo — y tú normalmente no sabes cuál te está respondiendo.**

**La reformulación:** la Actividad 3 pasa de *«caza la mentira»* (resultado incierto) a **«El duelo de modelos»** (resultado garantizado). El alumnado lanza **la misma batería de preguntas a dos modelos distintos** y rellena una tabla comparativa. Pase lo que pase, **la actividad produce datos y produce lección**:

- Si uno falla y otro no → *¿por qué? Porque uno responde de golpe y el otro se toma tiempo para comprobar.*
- Si aciertan los dos → *bien, ¿y cómo lo habrías sabido tú si se hubieran equivocado?*
- Si responden distinto → *no es determinista: la misma pregunta, dos respuestas.*

Duck.ai permite elegir modelo **sin cuenta**, y hoy ofrece gratis modelos deliberadamente desiguales (`GPT‑5.4 nano` frente a `gpt-oss-120b`, por ejemplo). Es la herramienta perfecta para este duelo.

### Sondas que siguen funcionando (y las que no)

| Sonda | ¿Aguanta en 2026? | Comentario |
| :--- | :---: | :--- |
| Info posterior a la fecha de corte | **Sí, siempre** | Es estructural, no se puede arreglar. |
| **No determinismo** (misma pregunta ×2) | **Sí, siempre** | Comparar redacción de dos respuestas. |
| **Adulación**: insistirle que se equivoca cuando tiene razón | **Sí, muy robusta** | Se retracta para agradarte. **Lección enorme a los 14 años.** |
| Datos hiperlocales (tu pueblo, tu instituto, tu barrio) | **Bastante** | Poca cobertura en los datos de entrenamiento. |
| Pedir citas o referencias concretas con su fuente | **Bastante** | Los modelos pequeños todavía las fabrican. |
| Contar letras de una palabra | **Solo modelos pequeños** | **Ese contraste es ahora la actividad**, no el fallo. |
| Biografía de un personaje inventado | **Ya no** | Los modelos actuales lo detectan. **Descartada.** |

> ⚠️ **Nota permanente para el profesor:** las sondas hay que **volver a probarlas la semana anterior a dar la clase**. Es el punto más frágil del tema y no tiene solución estructural: los modelos mejoran más rápido que las programaciones didácticas. Por eso el diseño ya no depende de que fallen.

---

## 3. Herramientas: qué he verificado

| Herramienta | Registro | Verificado |
| :--- | :--- | :--- |
| **Duck.ai** (`duck.ai`) | **No** | Gratis y sin cuenta: Claude 4.5 Haiku, Mistral Small 4, GPT‑5.4 nano, GPT‑5.4 mini, gpt-oss-120b y Gemma 4 31B. **Permite elegir modelo**, que es lo que hace posible el duelo. Hay límites diarios de uso. |
| **Teachable Machine** | **No** | **Funciona sin webcam**: se suben las imágenes desde disco y también se *prueba* el modelo subiendo imágenes. ⚠️ Sin iniciar sesión, **se pierde todo al refrescar o cerrar la pestaña**. |
| **Perplexity** | No | Contraste de IA *con* fuentes citadas frente a IA *sin* fuentes. |
| **Tiktokenizer** | No | Ver cómo se trocea el texto en *tokens*. |
| **Survival of the Best Fit** | No | El algoritmo de contratación que aprende tus prejuicios. |
| **MIT App Inventor** | **No** ✅ | **Hallazgo importante:** existe un servidor alternativo, `code.appinventor.mit.edu`, que permite **entrar sin cuenta de Google**. Te da un **código de cuatro palabras** para recuperar tus proyectos. ⚠️ Si pierden el código, pierden el proyecto (igual que el aviso de Compute IT en el Tema 1). |
| **Machine Learning for Kids + Scratch** | Cuentas creadas por ti | **También hace clasificación de imágenes**, no solo de texto, y **subiendo ficheros** (sin webcam). Las cuentas de alumnado se crean en bloque **sin necesidad de correo del alumno**. |
| **Scratch** | No | Enlaza con el Tema 1. |

**Las dos únicas excepciones al «sin registro»** quedan así resueltas: App Inventor se usa en el servidor sin cuenta, y ML4K con cuentas que generas tú sin pedir correos. **Ningún alumno tiene que registrarse en nada.**

---

## 4. Mini-webs a desarrollar para el tema

Esta es la respuesta a tu punto 1. Siguiendo el patrón que ya tienes en `actividad-inicial/` (carpeta con `index.html`, `css/` y `js/` propios, enlazada desde el Markdown de Jekyll), propongo estas páginas. Las marco por prioridad porque son trabajo de desarrollo real.

### Imprescindibles

**1. `ruleta-de-palabras/` — Act. 3** *(sustituye al dado y al teclado del móvil)*
Muestra la frase a medias y la tabla de continuaciones con su probabilidad, en barras. Dos botones: **«Elige siempre la más probable»** y **«Elige según la probabilidad»**. Un **deslizador de temperatura** de 0 a 1 que deforma visiblemente las barras. La frase se va construyendo en pantalla palabra a palabra y se puede reiniciar. Un segundo modo **«cadena»** replica el teclado predictivo: el alumno pulsa 15 veces la palabra sugerida y obtiene su frase sin sentido, que copia al documento de entrega.

**2. `detector-ia/` — Act. 1** *(sustituye a whichfaceisreal y elimina una dependencia externa)*
Cuestionario de 15 rondas: cara, texto, imagen, audio — real o generado. Puntuación en vivo, y al terminar **revela las pistas** de cada ítem y genera un **resumen descargable** con sus aciertos para adjuntar a la entrega. Todo el contenido lo controlas tú en un fichero de datos, como hiciste en `courses-data.js`.

**3. `semaforo-de-datos/` — Act. 5** *(sustituye a las tarjetas recortables)*
Arrastrar y soltar 20 tarjetas de datos a tres zonas: **verde / ámbar / rojo**. Corrección inmediata con explicación de por qué, puntuación final y resumen descargable. Los casos dudosos se marcan como «para debatir» en lugar de dar una respuesta cerrada.

### Muy recomendables

**4. `cazador-de-sesgos/` — Act. 6**
Galería de imágenes **pregeneradas por ti** con prompts neutros, más un formulario de recuento (género, edad aparente, entorno) que dibuja el gráfico automáticamente. **Ventaja doble:** resuelve el problema de seguridad que señalé en la v1 —el alumnado ya no necesita generar imágenes en vivo con herramientas de filtro flojo— y hace la actividad reproducible año tras año.

**5. `taller-de-prompts/` — Act. 4**
Constructor guiado **R.O.C.F.**: cuatro campos (Rol, Objetivo, Contexto, Formato), vista previa del prompt montado y botón de copiar para pegarlo en Duck.ai. Incluye una galería de **«prompt pobre → prompt bueno»** con el mismo encargo, para que vean la diferencia antes de intentarlo.

### Opcionales

**6. `duelo-de-modelos/` — Act. 3** — formulario para registrar las respuestas de cada modelo y generar la tabla comparativa. Se puede resolver con una tabla en Writer; solo merece la pena si quieres recoger los resultados de toda la clase.

**7. `tokenizador/`** — tokenizador propio en JS, como seguro por si `tiktokenizer.vercel.app` desaparece. Baja prioridad.

> Empezaría por las tres imprescindibles. Con esas, el tema ya no necesita **ningún** material físico.

---

## 5. Páginas de teoría

Al estilo de `funcionamiento-basico-karel.md` del Tema 1: material de consulta, no clase magistral.

1. **`que-es-la-inteligencia-artificial.md`** — Datos → patrón → predicción. Programar una regla frente a entrenar con ejemplos. IA predictiva frente a generativa. Qué es un **modelo**. Historia muy breve: 1956, 2012, 2017, 2022.
2. **`como-funciona-un-llm.md`** — *la página central*. **Token**. Predicción de la siguiente palabra. Parámetros y entrenamiento. **Ventana de contexto** y por qué «se olvida». Por qué **no es determinista**. Por qué **alucina**. **Modelos grandes frente a pequeños, y qué es «razonar»** en un modelo (dedicar más cómputo antes de responder). Analogía: *el autocompletado, pero con millones de veces más textos leídos.*
3. **`prompts.md`** — Qué es un prompt. **R.O.C.F.** Técnicas: dar ejemplos, pedir pasos, pedir varias versiones, iterar, decir lo que **no** quieres. Errores frecuentes. **Checklist de verificación de 4 puntos.**
4. **`riesgos-de-la-ia.md`** — Alucinaciones. **Adulación**: por qué te da la razón. Sesgos. Privacidad. Deepfakes, desinformación y estafas por voz. Derechos de autor. Coste energético. Mención básica al **Reglamento Europeo de IA**.
5. **`hacia-donde-va-la-ia.md`** — De responder a **actuar**: los **agentes**. Multimodalidad. Modelos locales. **ANI / AGI / ASI** presentado como **debate abierto**, no como profecía. Empleo.

---

## 6. Secuencia revisada (23 sesiones)

```
Tema 2: Inteligencia Artificial (23 sesiones)
 ├── Act. 1: ¿Esto lo ha hecho una IA? (+ deepfakes)       (2 ses.)
 ├── Act. 2: Entrena tu propia IA                          (3 ses.)
 ├── Act. 3: La máquina que predice + Duelo de modelos     (3 ses.)
 ├── Act. 4: El reto del prompt perfecto                   (3 ses.)
 ├── Act. 5: Lo que nunca le cuentas a una IA              (2 ses.)
 ├── Act. 6: Cazadores de sesgos                           (2 ses.)
 ├── Act. 7: Agentes, AGI y mi futuro                      (2 ses.)
 └── Act. 8: PROYECTO FINAL                                (6 ses.)  ← +2 respecto a la v1
```

**Cambios respecto a la v1** (tu punto 6): el proyecto final pasa de 4 a **6 sesiones**. Sale de fusionar los deepfakes dentro de la Act. 1 (son la misma competencia: detectar contenido sintético y entender sus consecuencias) y de recortar una sesión a las actividades 4 y 6, que las mini-webs agilizan mucho.

---

### Actividad 1 — «¿Esto lo ha hecho una IA?» (2 sesiones)

**Objetivo:** enganchar. Que descubran que ya no saben distinguir, y que entiendan qué está en juego.

1. **`detector-ia/`**: 15 rondas individuales con puntuación. Casi todos rondarán el 50-60 %.
2. Puesta en común de **las pistas que revela la web**: manos, texto en carteles, reflejos, orejas; y en los textos: exceso de estructura, adjetivos vacíos, ausencia total de errores, cero anécdotas concretas.
3. **Deepfakes y consecuencias.** Caso real de suplantación entre menores. Tres preguntas guiadas: ¿qué daño causa?, ¿es delito? (sí: contra la integridad moral y la intimidad, agravado si hay contenido sexual o la víctima es menor), ¿qué harías si te pasara o si lo vieras en un grupo?
4. **Entrega:** resumen descargable de la web + documento con sus 3 mejores pistas y la respuesta a *¿en qué situación real te importaría de verdad no poder distinguirlo?*

**Criterios:** CE1.1, CE1.3, CE4.2.

---

### Actividad 2 — «Entrena tu propia IA» (3 sesiones)

**Objetivo:** que entiendan que la inteligencia de un modelo **sale de los datos**, no de un programador escribiendo reglas.

**Adaptación sin webcam:** se trabaja con **Teachable Machine subiendo imágenes desde disco**. Prepararías con antelación tres carpetas de imágenes descargadas (por ejemplo: perros / gatos / zorros, o tres tipos de residuo para reciclar) y las alojarías en el repositorio para que las descarguen. Pierde la magia de la cámara en directo, pero **gana en control y en tiempo de aula**, porque nadie se pelea con la iluminación.

1. Entrenar un modelo con **3 clases**.
2. Probarlo subiendo imágenes de prueba. Observar el **porcentaje de confianza**. Comprobar que **nunca dice «no lo sé»**: siempre reparte el 100 % entre las clases que conoce. Subirle algo que no ha visto jamás y ver qué contesta. **Momento didáctico clave del tema.**
3. **Rompe tu modelo** — tres experimentos documentados con captura:
   - Una clase con 10 imágenes y otra con 200. ¿Qué pasa?
   - Entrenar solo con fotos de un tipo (mismo fondo, misma luz) y probar con otras muy distintas.
   - Subir una imagen ambigua a propósito.
4. Conclusión escrita: *un modelo no sabe nada del mundo; solo sabe lo que hay en sus datos.* Es también la puerta de entrada al sesgo de la Act. 6.

> ⚠️ **Aviso de aula:** sin iniciar sesión, Teachable Machine **pierde todo al cerrar la pestaña**. Hay que exportar o terminar dentro de la misma sesión.

**Criterios:** CE1.1, CE1.2, CE1.4, CE4.3.

---

### Actividad 3 — «La máquina que predice» + «El duelo de modelos» (3 sesiones)

**Objetivo:** el mecanismo real de un LLM, y por qué **no piensa**. Reformulada según el apartado 2.

**Sesión 1 — El mecanismo**
1. **`ruleta-de-palabras/`, modo cadena:** pulsar 15 veces la palabra sugerida. Sale algo casi coherente y completamente vacío. *Eso es, en pequeñito, lo que hace un LLM.*
2. **`ruleta-de-palabras/`, modo probabilidad:** con la temperatura a 0, todos obtienen la misma frase, correcta y aburridísima. Subiendo la temperatura, cada uno obtiene una distinta, alguna genial y alguna absurda. Conclusión que sacan solos: **la IA no elige la verdad, elige entre probabilidades.**
3. **Tiktokenizer:** su nombre, una palabra en valenciano, un emoji, un número largo. **El modelo no ve letras, ve trozos.**

**Sesiones 2 y 3 — El duelo de modelos** (con Duck.ai, sin registro)
Se elige **un modelo pequeño y rápido** y **uno grande o con razonamiento**, y se les lanza la misma batería, rellenando la tabla comparativa:

| Pregunta | Modelo rápido | Modelo que razona | ¿Quién acierta? |
| :--- | :--- | :--- | :--- |
| ¿Cuántas erres tiene «ferrocarril»? | | | |
| Algo ocurrido la semana pasada | | | |
| La misma pregunta, repetida en otro chat | | | |
| Algo muy local de tu pueblo o tu instituto | | | |
| Tres fuentes concretas sobre un tema | | | |
| **Le insistes en que se equivoca cuando tiene razón** | | | |

La última fila es la más importante y la que nunca falla: **se retracta para agradarte**. De ahí sale la conclusión del tema: *si cede cuando tú presionas, no está buscando la verdad — está buscando que quedes contento.*

Se cierra comparando una respuesta con **Perplexity**, que **sí cita fuentes**, y discutiendo la diferencia.

**Entrega:** tabla comparativa completa + conclusión escrita: *¿de qué me puedo fiar y cómo lo compruebo?*
**Criterios:** CE1.1, CE1.3, CE4.2, CE4.3.

---

### Actividad 4 — «El reto del prompt perfecto» (3 sesiones)

1. **Antes / después** con `taller-de-prompts/`: un prompt pobre de una línea, captura; el mismo encargo con **R.O.C.F.** completo, captura. Comparación lado a lado y justificación.
2. **Torneo de prompts (parejas).** Encargo común, por ejemplo *«el mejor guion de 30 segundos para un vídeo sobre el instituto»*. Se proyectan los resultados **sin ver el prompt** y la clase vota. Después se descubren los prompts ganadores y se analiza **qué tenían**.
3. **Prompt a ciegas.** El grupo A escribe un prompt y genera una imagen; el grupo B ve **solo la imagen** e intenta reconstruir el prompt. Gana quien más se acerque. La actividad que más engancha del tema.
4. **Chuleta R.O.C.F.** personal y reutilizable.

**Criterios:** CE1.4, CE4.1, CE4.3.

---

### Actividad 5 — «Lo que nunca le cuentas a una IA» (2 sesiones)

1. **`semaforo-de-datos/`**: clasificar 20 datos en verde / ámbar / rojo, con corrección inmediata. Puesta en común **de los casos dudosos**, que es donde está el aprendizaje.
2. **Anonimizar de verdad.** Se da un texto con nombres, teléfonos y centro; hay que reescribirlo para poder pedirle ayuda a una IA **sin filtrar a nadie**. Se lanza el prompt anonimizado y se comprueba que funciona igual de bien.
3. **Estafas con IA.** La llamada con voz clonada de un familiar. Se acuerda una medida real: **una palabra clave familiar** que ninguna IA puede saber.
4. **Datos de terceros:** la conversación privada de un amigo **no es tuya** para subirla a ningún sitio.

**Criterios:** CE1.3, CE4.2.

---

### Actividad 6 — «Cazadores de sesgos» (2 sesiones)

1. **`cazador-de-sesgos/`**: galería de imágenes que has generado tú con prompts neutros (*«una persona dirigiendo una empresa»*, *«una persona limpiando»*, *«una persona programando»*, *«una familia»*). El alumnado rellena el recuento y **la web dibuja el gráfico**. El debate deja de ser opinión y pasa a ser dato.
2. **Enlace con la Act. 2:** *ya visteis esto cuando entrenasteis una clase con 10 imágenes y otra con 200.* El sesgo no es maldad del programador: **es el reflejo de los datos**.
3. **Survival of the Best Fit** (sin registro): contratan personal y su algoritmo aprende sus propios prejuicios. Impacta porque **el sesgo lo han metido ellos**.
4. **Producto:** *«si tú entrenaras ese modelo, ¿qué cambiarías en los datos?»*

**Criterios:** CE1.2, CE1.3, CE4.2.

---

### Actividad 7 — «Agentes, AGI y mi futuro» (2 sesiones)

1. **De responder a actuar.** Qué es un **agente**. Idea clave: *cuando la IA actúa sola, la pregunta ya no es si acierta, sino quién responde cuando se equivoca.*
2. **La escalera ANI → AGI → ASI.** Qué significan, dónde estamos, y por qué las previsiones van de «5 años» a «nunca». Se presenta **el desacuerdo como tal**: es más honesto y más formativo.
3. **Debate con roles sorteados** (optimista / cauto / intermedio). El sorteo obliga a defender una postura que quizá no compartan.
4. **Producto:** *«Carta a mí mismo en 2035»*, media página. Se guarda y se les devuelve en 4º de ESO.

**Criterios:** CE1.3, CE4.2.

---

### Actividad 8 — PROYECTO FINAL (6 sesiones)

Tres itinerarios a elegir. Los tres entregan la **ficha de transparencia**.

#### Itinerario A — «Mi app que ve»: App Inventor + clasificación de imágenes
**Es el itinerario que justifica pedir permiso para traer el móvil**, y solo para esto.

1. **Sesiones 1-2 (PC):** entrenar el clasificador en **Teachable Machine** con imágenes subidas (el flujo de la Act. 2, ya conocido). Exportar el modelo con **«Upload my model»**, que lo aloja y da una URL.
2. **Sesiones 3-5 (PC):** construir la app en **`code.appinventor.mit.edu`** — *sin cuenta*, anotando bien el **código de cuatro palabras**. Se importa la extensión **TMIC**, se pega la URL del modelo y se montan los bloques: botón → cámara → clasificar → mostrar resultado y confianza.
3. **Sesión 6 (móvil autorizado):** instalar y probar la app con la cámara real. Demostración por parejas.

> ⚠️ **Riesgo que debes conocer antes de comprometerte:** TMIC es una extensión de la comunidad publicada en **2022** y con mantenimiento limitado desde entonces. Además: **solo cámara trasera**, **solo dispositivos Android reales** (el emulador no tiene cámara), **requiere conexión** porque el modelo se ejecuta alojado, y no clasifica imágenes ya guardadas, solo capturas en vivo. **Recomendación: haz una prueba piloto completa tú mismo antes de ofrecer este itinerario.** Si no sale, el itinerario B cubre el mismo objetivo sin ningún riesgo.

#### Itinerario B — «Mi asistente inteligente»: Scratch + Machine Learning for Kids
Entrenan un clasificador propio en **ML4K** —de **texto** (mensaje respetuoso / ofensivo) o de **imágenes subidas desde disco**, que también lo permite— y lo integran en un proyecto de **Scratch**, enlazando directamente con los bucles y condicionales del Tema 1. Cuentas creadas por ti en bloque, sin correos del alumnado. **Cero dependencia del móvil y cero riesgo técnico.** Entrega: `.sb3`.

#### Itinerario C — «Producto con IA generativa»
Un anuncio, un cómic, un corto, un cartel, la ficha de un videojuego o una campaña de concienciación dirigida a 1º de ESO. **Requisito obligatorio:** el **cuaderno de prompts** con todas las versiones hasta el resultado final. Se evalúa la iteración, no la suerte.

#### Ficha de transparencia (obligatoria en los tres)

| Pregunta | Respuesta |
| :--- | :--- |
| ¿Qué herramientas de IA he usado y para qué? | |
| ¿Cuál fue mi mejor prompt? (copiar literal) | |
| ¿Qué me dio mal, se inventó o no me servía? | |
| ¿Qué he cambiado yo a mano sobre lo que me dio la IA? | |
| ¿Qué parte de este trabajo es mérito mío? | |

**Criterios:** CE1.4, CE2.4, CE4.1, CE4.3, CE4.4.

---

## 7. Evaluación

Cuando el alumnado usa IA, **evaluar solo el producto final no mide nada**: la IA lo hace mejor que ellos en 10 segundos.

| Qué se evalúa | Peso orientativo |
| :--- | :---: |
| **Proceso documentado** (prompts, iteraciones, ficha de transparencia) | 35 % |
| **Verificación y espíritu crítico** | 25 % |
| **Comprensión conceptual** (explicarlo con sus palabras) | 20 % |
| **Producto final** | 20 % |

**Instrumentos:** rúbrica analítica por actividad en el formato de tabla del Tema 1; ficha de transparencia; resúmenes descargables que generan las mini-webs (se adjuntan a la entrega en Aules); registro anecdótico de los debates; diario de una línea al final de cada sesión.

---

## 8. Cambios propuestos a la programación de aula

- Sustituir las **3 actividades de 7-8 sesiones** de la SdA 2 por estas **8 de 2-6**. Bloques de 8 sesiones son inmanejables a los 13-14 años y dejan muy pocos puntos de recogida para evaluar.
- **Descripción/Justificación:** añadir la alfabetización en IA generativa (prompting, verificación, privacidad) como objetivo explícito.
- **Saberes básicos:** añadir *«Sensors, tipologia i aplicacions»*, que hoy solo aparece en la SdA 3.
- **Criterios:** mantener CE1 (1.1–1.4) y CE4 (4.1, 4.2), y **añadir CE4.3**, que se trabaja de forma evidente al comparar modelos y elegir herramienta.
- **Instrumentos:** añadir la ficha de transparencia.

---

## 9. Lo que falta por decidir

1. **¿Desarrollo las tres mini-webs imprescindibles** (`ruleta-de-palabras`, `detector-ia`, `semaforo-de-datos`) antes de escribir las páginas de las actividades, o al revés?
2. **Itinerario A del proyecto:** ¿haces la prueba piloto de TMIC + App Inventor, o lo dejamos fuera y el proyecto final va solo con B y C?
3. **Imágenes de la Act. 2:** ¿qué tres clases prefieres para el dataset? (tipos de residuo para reciclar enlaza con los ODS de la programación).
4. **Imágenes del `cazador-de-sesgos`:** las tendrías que generar tú una vez. ¿Te preparo la lista exacta de prompts?
5. **Idioma:** ¿castellano en todo el tema, como el Tema 1?
6. **Comunicación a las familias** sobre el uso de IA: ¿te preparo un borrador?

---

## 10. Riesgos

- **Los modelos mejoran más rápido que las programaciones.** Ya te ha pasado con las trampas de la v1. La v2 lo mitiga midiendo *diferencias entre modelos* en vez de *fallos*, pero **hay que reprobar las sondas cada curso**.
- **Filtrado de red del centro.** Comprueba que `duck.ai`, `teachablemachine.withgoogle.com` y `code.appinventor.mit.edu` no estén bloqueados **antes de programar nada**. Puede tirar abajo media secuencia.
- **TMIC sin mantenimiento desde 2022.** Detallado en el itinerario A.
- **Las mini-webs son trabajo de desarrollo real** y luego hay que mantenerlas. A cambio, eliminan dependencias externas y material físico, y duran años.
- **Heterogeneidad del grupo.** Habrá quien use IA a diario y quien no la haya tocado. Las actividades 3 y 4 están pensadas para que los primeros también descubran algo nuevo (tokens, temperatura, adulación, diferencias entre modelos).
