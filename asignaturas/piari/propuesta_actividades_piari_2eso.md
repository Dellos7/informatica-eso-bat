# Propuesta Curricular y de Actividades Prácticas: PIAR I (2º ESO)
**Materia:** Programació, Intel·ligència Artificial i Robòtica I (2º ESO)  
**Curso académico:** 2026-2027  
**Marco normativo:** Decreto de ordenación y currículo de Educación Secundaria Obligatoria de la Comunitat Valenciana (*Programació, Intel·ligència Artificial i Robòtica I i II*).

---

## 1. Justificación y Criterios Pedagógicos

Para adolescentes de 13-14 años (2º de ESO), el aprendizaje de la informática, la inteligencia artificial y la robótica debe sustentarse en:
1. **Práctica directa en el aula de informática / taller:** Minimizar las sesiones puramente teóricas o de debate descontextualizado. Los conceptos abstractos (árboles de decisión, sesgos, bucles, sensores, algoritmos) se asimilan interactuando con herramientas visuales, plataformas gamificadas y hardware manipulable.
2. **Progresión cognitiva guiada:** Pasar de lo visual/desenchufado a lo textual simplificado y los bloques estructurados, cerrando con retos físicos tangibles (robots).
3. **Diseño Universal para el Aprendizaje (DUA):** Múltiples formas de representación (esquemas gráficos, interfaces traducibles, bloques de color, simuladores) y de expresión (capturas, código, documentos, productos interactivos).

---

## 2. Análisis y Propuesta de Mejora de la SdA 1 (Pensamiento Computacional)

### 2.1. Fortalezas de la secuenciación actual (Actividades 1 a 8)
- **Ruta didáctica muy acertada:** Comienza con tareas reflexivas y organización ofimática (Act. 1), avanza hacia algoritmia secuencial pura con laberintos y edición gráfica (Act. 2 y 3), introduce la sintaxis textual básica en Laby (Act. 4), entrena la ejecución mental en Compute IT (Act. 5), profundiza en bucles y condicionales con Karel.js (Act. 6 y 7), y culmina en bloques con Code.org Minecraft (Act. 8).
- **Gamificación efectiva:** El uso de Laby, Compute IT, Karel y Minecraft mantiene una alta motivación y refuerzo inmediato.

### 2.2. Propuestas de mejora específicas

1. **Incorporación explícita del saber de licencias y software libre (CE 2.5):**
   - *Situación actual:* La Actividad 1 se centra en carpetas y preguntas básicas. El currículo de 2º ESO exige evaluar el criterio **2.5: Describir y valorar los derechos de autoría y licencias de uso y explotación**.
   - *Mejora propuesta:* Añadir en la **Actividad 1** un pequeño apartado práctico de investigación donde el alumnado identifique que el sistema LliureX, LibreOffice y GIMP son **Software Libre (código abierto)**, frente a opciones privativas como Windows o MS Office, y comprendan el significado de licencias Creative Commons para imágenes descargadas de internet.

2. **Mini-reto de creación libre al final de la SdA (CE 2.4 y CE 4.1):**
   - *Situación actual:* La Actividad 8 (Minecraft en Code.org) es guiada y de resolución de puzzles fijos.
   - *Mejora propuesta:* Dedicar la última sesión o sesión y media de la Actividad 8 a que el alumnado personalice un minijuego en Code.org o Scratch aplicando un bucle y un condicional propio (por ejemplo, un personaje que esquiva un obstáculo o persigue un objeto), fomentando la iniciativa y creatividad propia (CE 2.4: *Programar aplicaciones sencillas de forma guiada para resolver problemas elementales*).

3. **Estandarización de entregables y rúbricas metacognitivas:**
   - Estandarizar la entrega en Aules mediante una nomenclatura común (`apellido_nombre_actX.ext`).
   - Incluir en cada actividad una pequeña diana o pregunta de autoevaluación (1 minuto al final de la sesión: *"¿Qué error he cometido hoy y cómo lo he solucionado?"*), dando cumplimiento al saber curricular: *Iniciativa, autoconfianza y metacognición en el desarrollo de software*.

---

## 3. Propuesta de Actividades Prácticas para la SdA 2: Inteligencia Artificial

> **Enfoque:** 23 sesiones de 55 minutos (2º Trimestre). Se sustituyen los debates teóricos prolongados por **prácticas activas de entrenamiento de modelos, visión por computador, reconocimiento acústico, detección interactiva de sesgos y programación por bloques con IA**.

### Saberes básicos del currículo cubiertos:
- *L'aprenentatge en sistemes biològics. Decisions i lliure albir.*
- *Fonaments de la IA. Àrbres de decisió. Big data, xarxes neuronals.*
- *Tècniques inicials de IA: sistemes experts, xarxes neuronals i aprenentatge automàtic.*
- *Processament automàtic de la informació.*
- *Equitat i inclusió en sistemes de IA. Biaixos en IA.*
- *Implicacions socials i ètiques de la intel·ligència artificial.*
- *Sensors, tipologia i aplicacions.*

### Secuencia de Actividades Prácticas

```
SdA 2: Inteligencia Artificial (23 sesiones)
 ├── Act. 1: Akinator y árboles de decisión (3 ses.)
 ├── Act. 2: Teachable Machine - Visión artificial (4 ses.)
 ├── Act. 3: Reconocimiento acústico y procesamiento de sonido (3 ses.)
 ├── Act. 4: Cazadores de sesgos (3 ses.)
 ├── Act. 5: IA para los océanos - Code.org (3 ses.)
 ├── Act. 6: Scratch + Machine Learning (4 ses.)
 └── Act. 7: "Humanos vs Máquinas": Creatividad y límites éticos (3 ses.)
```

#### Actividad 1: "Akinator y los árboles de decisión: ¿Cómo decide una máquina?" (3 sesiones)
- **Concepto:** Sistemas expertos y árboles de decisión. Diferencia entre algoritmo determinista tradicional y sistema experto basado en reglas y preguntas dicotómicas (Sí / No / No lo sé).
- **Práctica en ordenador:**
  1. Experimentar con *Akinator* y el clásico juego *20Q* (20 Questions). Observar cómo el sistema acota las posibilidades de un universo de miles de personajes en menos de 20 preguntas.
  2. En **LibreOffice Draw**, diseñar un árbol de decisión ramificado (mínimo 4 niveles) para que el ordenador adivine qué periférico informático o componente de ordenador está pensando un compañero de clase.
- **Criterios asociados:** CE 1.1, CE 1.2, CE 2.1.
- **Entrega en Aules:** Archivo exportado `.pdf` del árbol de decisión diseñado.

#### Actividad 2: "Teachable Machine: Entrenando a mi primer modelo visual" (4 sesiones)
- **Concepto:** Aprendizaje automático (*Machine Learning*), entrenamiento supervisado, conjunto de datos de entrenamiento (*dataset*) y porcentaje de confianza / fiabilidad.
- **Práctica en ordenador:**
  1. Usar la herramienta web **Google Teachable Machine** (sin código, con la cámara web del equipo).
  2. Crear y capturar imágenes para 3 clases distintas: por ejemplo, gestos de mano (Piedra, Papel, Tijera) o estados de ánimo/posturas.
  3. Entrenar el modelo en el navegador y probar su tasa de acierto en tiempo real modificando la iluminación, la distancia o usando a otro compañero como sujeto de prueba.
  4. Analizar qué ocurre cuando una clase tiene pocas imágenes frente a una que tiene muchas (desequilibrio de datos).
- **Criterios asociados:** CE 1.1, CE 1.4, CE 4.3.
- **Entrega en Aules:** Enlace al modelo exportado de Teachable Machine y documento con capturas demostrando un acierto y un fallo del modelo con su explicación.

#### Actividad 3: "Oídos artificiales: Reconocimiento de sonido y comandos de voz" (3 sesiones)
- **Concepto:** Procesamiento automático de señales de audio, espectrogramas y clasificación acústica por redes neuronales.
- **Práctica en ordenador:**
  1. Entrenar en Teachable Machine (Audio) un clasificador para 3 sonidos: aplauso, chasquido de dedos y silencio de fondo.
  2. Conectar la salida del clasificador para controlar una acción visual sencilla (por ejemplo, encender una bombilla virtual o mover un icono según el sonido).
  3. Probar el juego *Semantris* o experimentos de Google AI (*Quick, Draw!*) para entender cómo las redes neuronales procesan patrones inmediatos.
- **Criterios asociados:** CE 1.1, CE 1.4, CE 4.3.
- **Entrega en Aules:** Ficha breve en Writer explicando qué es un espectrograma y captura del modelo de sonido funcionando.

#### Actividad 4: "Cazadores de sesgos: Cuando la IA discrimina" (3 sesiones)
- **Concepto:** Equidad e inclusión en sistemas de IA. Sesgo algorítmico (*bias*), procedencia de los datos históricos y consecuencias sociales de confiar ciegamente en decisiones automatizadas.
- **Práctica en ordenador:**
  1. Jugar a **"Survival of the Best Fit"** (juego educativo web interactivo sobre cómo un algoritmo de contratación aprende sesgos a partir de contrataciones pasadas).
  2. Probar generadores de imágenes por IA bajo supervisión docente con peticiones genéricas (ejemplo: *"un médico y una enfermera"*, *"un director de empresa"* o *"una persona en su casa"*), analizando si la IA reproduce estereotipos de género, raza o estatus socioeconómico.
  3. Redactar una breve propuesta de mejora para corregir el conjunto de datos de entrenamiento del algoritmo.
- **Criterios asociados:** CE 1.2, CE 1.3, CE 4.2.
- **Entrega en Aules:** Informe reflexivo guiado en Writer (máximo 1 página) sobre cómo evitar sesgos en el software.

#### Actividad 5: "IA para los Océanos: Clasificación ética con Code.org" (3 sesiones)
- **Concepto:** Entrenamiento ético, libre albedrío, impacto medioambiental y corrección de falsos positivos/falsos negativos.
- **Práctica en ordenador:**
  1. Realizar el itinerario interactivo **"AI for Oceans" de Code.org**.
  2. Entrenar a A.I. para limpiar el fondo marino distinguiendo seres vivos (peces, pulpos, algas) de residuos plásticos.
  3. Comprobar cómo las decisiones del alumno al etiquetar influyen en si el robot marino atrapa por error a animales marinos inocentes.
  4. Obtener la certificación oficial del curso de IA de Code.org.
- **Criterios asociados:** CE 1.2, CE 1.3, CE 1.4, CE 4.2.
- **Entrega en Aules:** Captura del diploma acreditativo de Code.org y del porcentaje de precisión final obtenido.

#### Actividad 6: "Mi aplicación inteligente en Scratch + Machine Learning" (4 sesiones)
- **Concepto:** Integración de modelos de IA en proyectos de programación por bloques.
- **Práctica en ordenador:**
  1. Utilizar la plataforma **Machine Learning for Kids** vinculada a **Scratch 3**.
  2. Entrenar un modelo de texto para clasificar si una frase es un "Elogio" o un "Insulto" (reconocimiento de sentimientos), o importar el modelo de Teachable Machine de la Actividad 2.
  3. En Scratch, programar un personaje que cambie de disfraz y diga una frase amable si el usuario sonríe o escribe algo positivo, y pida respeto si detecta agresividad.
- **Criterios asociados:** CE 1.4, CE 2.4, CE 4.1, CE 4.3.
- **Entrega en Aules:** Archivo del proyecto `.sb3` de Scratch entregado en Aules.

#### Actividad 7: "Humanos vs Máquinas: Lo que nos hace únicos" (3 sesiones)
- **Concepto:** Diferencias entre aprendizaje biológico y aprendizaje artificial. Alucinaciones de la IA, creatividad genuina y pensamiento crítico.
- **Práctica en ordenador:**
  1. Someter a una IA a acertijos con trampas visuales y juegos de palabras donde el sentido común humano resuelve al instante y la IA comete errores ridículos.
  2. Crear en LibreOffice Writer/Draw una infografía o póster digital titulado: *"3 cosas que la IA hace mejor que yo vs 3 cosas que ninguna IA podrá sustituir"*.
- **Criterios asociados:** CE 1.1, CE 1.3, CE 4.2.
- **Entrega en Aules:** Infografía en formato `.pdf`.

---

## 4. Propuesta de Actividades Prácticas para la SdA 3: Robótica con BBC micro:bit y Maqueen

> **Enfoque:** 23 sesiones de 55 minutos (3º Trimestre). Se sustituye el esquema de 3 bloques gigantes por **7 retos progresivos de robótica física**: desde la programación de la placa controladora y sus sensores integrados hasta el montaje mecánico, control de motores, sensor de ultrasonidos, seguidor de líneas y un circuito final autónomo.

### Saberes básicos del currículo cubiertos:
- *Robots: tipus, graus de llibertat i característiques tècniques bàsiques.*
- *Muntatge de robots.*
- *Control de sistemes robotitzats.*
- *Sensors, actuadors i controladors.*
- *Càrrega i execució dels algorismes en robots.*
- *Sensors, tipologia i aplicacions.*

### Secuencia de Actividades Prácticas

```
SdA 3: Robótica con BBC micro:bit y Maqueen (23 sesiones)
 ├── Act. 1: Conociendo el cerebro - Matriz LED y botones (3 ses.)
 ├── Act. 2: Los sentidos de micro:bit - Temperatura, luz y movimiento (3 ses.)
 ├── Act. 3: Anatomía y ensamblaje guiado del robot Maqueen (3 ses.)
 ├── Act. 4: Motores en marcha - Velocidad, maniobras y trayectorias (3 ses.)
 ├── Act. 5: El murciélago - Sensor ultrasónico y evasión de colisiones (4 ses.)
 ├── Act. 6: El rastreador - Sensores infrarrojos y seguidor de línea (4 ses.)
 └── Act. 7: Reto final cooperativo - Vehículo autónomo de rescate (3 ses.)
```

#### Actividad 1: "Conociendo el cerebro: BBC micro:bit y MakeCode" (3 sesiones)
- **Concepto:** Placa controladora, pines, matriz de 5x5 LEDs, pulsadores A/B, entorno MakeCode y procedimiento de carga del archivo compilado `.hex`.
- **Práctica en taller/informática:**
  1. Explorar el simulador de **MakeCode**.
  2. Programar una *insignia digital* animada que muestre un icono y el nombre del alumno al pulsar el botón A.
  3. Crear un *dado electrónico*: al agitar la placa (evento del acelerómetro), genera un número aleatorio del 1 al 6 y lo muestra en los LEDs.
  4. Conectar la placa micro:bit física por USB, descargar el archivo `.hex` y verificar la ejecución directa en el hardware real.
- **Criterios asociados:** CE 3.2, CE 3.5, CE 4.3.
- **Entrega en Aules:** Archivo `.hex` del proyecto y breve vídeo o foto de la placa funcionando.

#### Actividad 2: "Los sentidos de micro:bit: Sensores integrados" (3 sesiones)
- **Concepto:** Sensores de entrada (luz, temperatura, aceleración) -> Procesamiento algorítmico -> Actuadores de salida (LED, sonido/pitido).
- **Práctica en taller/informática:**
  1. **Luz nocturna inteligente:** Si el nivel de luz ambiental baja de un umbral (por ejemplo, al tapar la placa con la mano), se enciende la matriz LED al 100%. Al haber luz, se apaga.
  2. **Termómetro de aula:** Mide la temperatura con el sensor del chip; si supera los 25 ºC muestra un icono de fuego y emite un pitido de alerta; si está entre 18 y 24 ºC, muestra una carita sonriente.
  3. **Nivel de burbuja:** Usar el sensor de inclinación para mover un punto LED central según la posición de la placa.
- **Criterios asociados:** CE 3.2, CE 3.4, CE 3.5.
- **Entrega en Aules:** Archivo `.hex` con los programas de sensores documentados.

#### Actividad 3: "Anatomía, ensamblaje y verificación del robot Maqueen" (3 sesiones)
- **Concepto:** Componentes de un robot móvil con ruedas: chasis, motores reductores de corriente continua (actuadores), sensor ultrasónico (ojos), sensores infrarrojos de suelo, zumbador (actuador acústico), LEDs frontales y portapilas.
- **Práctica en taller:**
  1. Trabajo en parejas técnicas (roles: *Ingeniero de Montaje* e *Ingeniero de Verificación y Control de Calidad*).
  2. Ensamblaje guiado del chasis, montaje de ruedas, atornillado del portapilas y conexión del sensor de ultrasonidos en los conectores adecuados.
  3. Instalación de la extensión oficial de **Maqueen** en MakeCode.
  4. Test de comprobación inicial (programa de diagnóstico): parpadeo de LEDs RGB inferiores y pitido de confirmación.
- **Criterios asociados:** CE 3.1, CE 4.1, CE 4.3.
- **Entrega en Aules:** Ficha de verificación técnica firmada por la pareja con el checklist de montaje completado.

#### Actividad 4: "Motores en marcha: Velocidad, maniobras y trayectorias" (3 sesiones)
- **Concepto:** Control diferencial de motores: para avanzar recto ambos motores giran a la misma velocidad; para girar a la derecha, el motor izquierdo avanza y el derecho se detiene o invierte.
- **Práctica en taller:**
  1. Programar al robot para que avance 2 segundos, se detenga, gire 90 grados a la derecha y retroceda.
  2. Reto de precisión geométrica: programar a Maqueen para que dibuje en el suelo un cuadrado perfecto y vuelva exactamente al punto de partida.
  3. Calibrar las diferencias mecánicas de giro ajustando las velocidades relativas (ej. motor izquierdo a 100, motor derecho a 105).
- **Criterios asociados:** CE 3.2, CE 3.4, CE 3.5, CE 4.4.
- **Entrega en Aules:** Archivo de código `.hex` y validación presencial del reto del cuadrado ante el profesor.

#### Actividad 5: "El murciélago: Sensor de ultrasonidos y evasión de obstáculos" (4 sesiones)
- **Concepto:** Medición de distancias mediante ondas ultrasónicas (tiempo de ida y vuelta del pulso de sonido), bucle de control continuo y toma de decisiones en tiempo real.
- **Práctica en taller:**
  1. Leer en MakeCode la distancia que mide el sensor ultrasónico (en centímetros).
  2. Programar un algoritmo de radar de marcha atrás: a medida que el robot se acerca a un obstáculo, el zumbador pita con mayor frecuencia.
  3. **Comportamiento autónomo de evasión:** Maqueen avanza hacia adelante libremente. Si detecta un obstáculo a menos de 15 cm, frena, enciende los LEDs rojos de advertencia, retrocede medio segundo, gira hacia un lado despejado y continúa avanzando sin chocar nunca.
- **Criterios asociados:** CE 3.3, CE 3.4, CE 3.5, CE 4.4.
- **Entrega en Aules:** Archivo `.hex` del algoritmo de evasión y superación de la prueba física del "laberinto cerrado sin salida".

#### Actividad 6: "El rastreador: Sensores infrarrojos y seguidor de línea" (4 sesiones)
- **Concepto:** Sensores de reflexión infrarroja (IR). Absorción de luz en superficies negras vs reflexión en superficies blancas. Lógica de 4 estados:
  - Sensor izquierdo blanco, derecho blanco -> Avanzar recto.
  - Sensor izquierdo negro, derecho blanco -> Corregir giro a la izquierda.
  - Sensor izquierdo blanco, derecho negro -> Corregir giro a la derecha.
  - Ambos en negro -> Detención / parada en meta.
- **Práctica en taller:**
  1. Calibrar los sensores de línea sobre la pista de pruebas suministrada con Maqueen.
  2. Programar la lógica de corrección mediante condicionales anidados (`si ... si no si ...`).
  3. Ajustar las velocidades para que el robot no se salga en curvas cerradas.
- **Criterios asociados:** CE 3.2, CE 3.3, CE 3.4, CE 3.5.
- **Entrega en Aules:** Archivo `.hex` del seguidor de línea y prueba de recorrido completo sin salirse del circuito.

#### Actividad 7: "Misión final cooperativa: Vehículo autónomo de rescate" (3 sesiones)
- **Concepto:** Integración completa de sensores, actuadores y lógica algorítmica compleja en un reto de ingeniería colaborativa.
- **Práctica en taller:**
  1. Diseñar en el suelo del aula un circuito con cinta aislante negra que contenga:
     - Un tramo de seguimiento de línea recta y curvas.
     - Una zona con obstáculos imprevistos (cajas o bloques que representan escombros).
     - Una zona de meta señalizada con una marca negra transversal.
  2. El robot debe seguir la línea de forma autónoma. Si se cruza con un obstáculo, debe esquivarlo bordeándolo sin perder la orientación, recuperar la línea y, al detectar la meta, detenerse y emitir una melodía de rescate con sus LEDs parpadeando en verde.
  3. Trabajo en equipos de 3-4 alumnos con roles rotativos: *Desarrollador MakeCode, Ingeniero de Hardware y Pruebas, Documentalista Técnico*.
- **Criterios asociados:** CE 3.1, CE 3.2, CE 3.3, CE 3.4, CE 3.5, CE 4.1, CE 4.3, CE 4.4.
- **Entrega en Aules:** Proyecto final `.hex`, diana de evaluación cooperativa y vídeo corto del robot superando la misión.

---

## 5. Cuadro Resumen de la Programación Completa (70 Sesiones)

| Situación de Aprendizaje | Temática Central | Metodología / Entornos | Sesiones | Trimestre |
| :--- | :--- | :--- | :---: | :---: |
| **SdA 1: Descubriendo el código: Nuestro primer entorno digital** | Pensamiento Computacional y Fundamentos de Programación | GIMP, LibreOffice Writer, Laby (LliureX), Compute IT, Karel.js, Code.org Minecraft | **24** | **1º** |
| **SdA 2: Inteligencia Artificial: Luces y sombras de la tecnología** | Fundamentos de IA, Machine Learning, Visión/Audio, Sesgos y Ética práctica | Teachable Machine, Machine Learning for Kids, AI for Oceans (Code.org), Scratch 3 | **23** | **2º** |
| **SdA 3: Robótica Física: Misión BBC micro:bit y Maqueen** | Montaje de robots, sensores/actuadores, control de motores, ultrasonidos y seguidor de línea | MakeCode, BBC micro:bit v2, chasis DFRobot Maqueen, circuitos físicos | **23** | **3º** |
| **TOTAL** | | | **70** | |
