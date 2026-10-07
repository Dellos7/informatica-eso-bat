# Guía docente — Monta un ordenador para un cliente

Propuesta para Digitalización de 4.º de ESO, tomando como referencia el formato de tu actividad de LliureX. Duración inicial: dos sesiones de unos 55 minutos. Ajusta el título, la ubicación en tu temario, la duración y el enlace público del simulador antes de publicar `index.md`.

## Qué se personaliza y qué se corrige

Los **32 encargos** combinan cuatro perfiles, cuatro variantes y dos incidencias. La evaluación utiliza una sola rúbrica y las mismas fichas. No hay 32 soluciones únicas: hay varias combinaciones válidas para cada encargo.

La personalización cambia restricciones comprobables: CPU o caja obligatoria, pantalla, presupuesto, capacidad del SSD y Wi-Fi. No se asignan al azar piezas independientes, porque podrían producir encargos imposibles. Los presupuestos se han calibrado con el catálogo actual.

Cada estudiante entrega un ODT breve y un JSON final. Se corrige el cumplimiento y el razonamiento, sin reconstruir manualmente el ordenador de cada alumno.

## Asignación con tu selector

Configura **32 opciones**, **1 opción a realizar** e identificador **`4eso-montaje-pc-2026-v1`**. La página calcula la opción a partir del NIA y del identificador; el resultado es reproducible y puede repetirse entre alumnos. Mantén el identificador y la tabla sin cambios durante la actividad.

Fuente revisada: [código de tu selector](https://github.com/Dellos7/calcular-opciones-aleatorias/blob/main/script.js).

Recomiendo aceptar las repeticiones para conservar tu flujo actual. Distintos códigos tampoco impiden copiar: algunos montajes podrían cumplir varios encargos.

Si necesitas que **ningún código se repita**, baraja una vez las 32 tarjetas y asígnalas sin reposición según la lista de clase, conservando el reparto. El selector actual no garantiza esa propiedad. Para más de 32 alumnos, utiliza lotes por grupo o amplía el banco después de validar los casos nuevos.

No utilices «número de opciones a realizar = 3» para obtener tres parámetros independientes: el código actual recorre opciones consecutivas, hacia delante o hacia atrás. En esta propuesta se obtiene **un solo número** y se consulta su encargo completo.

## Tabla común de corrección

| Perfil | Requisito fijo | Qué debe explicar sobre vídeo | Otras relaciones clave |
|---|---|---|---|
| A | i5-12400; pantalla sólo HDMI; sin GPU dedicada. | La CPU tiene gráfica integrada; salida HDMI de la placa y entrada HDMI de la pantalla. | Socket LGA1700; RAM del tipo que acepte la placa; formatos y potencia. |
| B | Ryzen 5 7600X; pantalla sólo VGA; sin GPU dedicada. | La CPU tiene gráfica integrada y la placa elegida debe disponer de VGA. En el catálogo actual, B650M-K satisface esta combinación. | AM5 y DDR5; necesita refrigeración adicional; comprobar altura del disipador. |
| C | i5-13400F; pantalla sólo HDMI. | La CPU no tiene gráfica integrada: necesita GPU dedicada y conectar la pantalla a ella. | LGA1700; espacio de GPU y alimentación; tipo de RAM de la placa. |
| D | NR200; pantalla sólo DisplayPort; sin GPU dedicada. | CPU con gráfica integrada y salida DisplayPort de la placa. | Placa Mini-ITX y fuente SFX; espacio del disipador. |

En todos los casos: dos módulos de RAM y al menos 16 GB, SSD de capacidad suficiente, ventilador de caja, piezas esenciales, presupuesto incluido el monitor y Wi-Fi en variantes 3–4. La tabla de variantes y presupuestos está en el enunciado.

No exigir exactamente 16 GB: el ejemplo B/D utiliza dos módulos DDR5 de 16 GB y suma 32 GB. No exigir GPU por potencia gráfica en A/B/D: esos perfiles la prohíben para trabajar las salidas de la placa.

## Ejemplos de solución, para uso docente

La carpeta `soluciones-docente` contiene **16 JSON importables**: uno por perfil y variante. E1/E2 comparten montaje final; la diferencia está en el diagnóstico. No publiques esta carpeta como parte del enunciado si quieres reservar los ejemplos.

Estos montajes son ejemplos de viabilidad dentro del simulador. No constituyen una lista de compra ni una solución única.

| Perfil | Composición del ejemplo de variante 1 | Coste del ejemplo |
|---|---|---:|
| A | Torre básica; H610M; i5-12400; 2 × LPX 8 GB DDR4-3200; Samsung 980 500 GB; System Power 10 450 W; Arctic P12; pantalla HDMI. Disipador incluido de CPU. | 546 € |
| B | Q300L; B650M-K; Ryzen 5 7600X; Hyper 212; 2 × Fury 16 GB DDR5-5600; Samsung 980 500 GB; System Power 10 450 W; Arctic P12; pantalla VGA. | 714 € |
| C | Q300L; H610M; i5-13400F; 2 × LPX 8 GB DDR4-3200; GTX 1650 Low Profile; Samsung 980 500 GB; CX550; Arctic P12; pantalla HDMI. Disipador incluido de CPU. | 738 € |
| D | NR200; B760-I; i5-12400; 2 × Fury 16 GB DDR5-5600; Samsung 980 500 GB; V850 SFX; Arctic P12; pantalla DisplayPort. Disipador incluido de CPU. | 1049 € |

Para la variante 2 se sustituye el SSD por un Kingston KC3000 de 1 TB. Para la 3 se incorpora Wi-Fi; para la 4, ambas condiciones. En D, la B760-I ya incorpora Wi-Fi y no hace falta tarjeta adicional.

| Ejemplo | V1: coste / máximo | V2: coste / máximo | V3: coste / máximo | V4: coste / máximo |
|---|---:|---:|---:|---:|
| A | 546 / 600 € | 586 / 650 € | 585 / 650 € | 625 / 700 € |
| B | 714 / 800 € | 754 / 850 € | 753 / 850 € | 793 / 900 € |
| C | 738 / 800 € | 778 / 850 € | 777 / 850 € | 817 / 900 € |
| D | 1049 / 1100 € | 1089 / 1150 € | 1049 / 1100 € | 1089 / 1150 € |

Los importes proceden del catálogo del simulador. Si cambias precios, piezas o reglas, vuelve a validar los ejemplos y presupuestos antes de reutilizar la actividad.

## Corrección de las dos incidencias

| Incidencia | Explicación suficiente | Corrección mínima esperada |
|---|---|---|
| E1 | La placa utiliza DDR4 o DDR5; los módulos DDR3 no pertenecen al tipo compatible. Tener igual capacidad no los hace intercambiables. | Restaurar los dos módulos compatibles; conservar el resto de piezas. |
| E2 | El cable seleccionado debe corresponder a un puerto disponible tanto en la salida utilizada como en la pantalla. VGA y HDMI/DisplayPort son conexiones distintas; en esta simulación no hay adaptadores. | Restaurar HDMI en A/C, VGA en B y DisplayPort en D; conservar las piezas y la salida correcta. |

Acepta otra solución razonada si respeta todo el encargo. No exijas copiar literalmente los avisos. Un cambio de cable puede generar varios mensajes relacionados: se evalúa la causa, no el número de mensajes.

## Cómo reducir la carga de corrección

1. Mira el código y la **ficha final**: presupuesto, piezas obligatorias, RAM, SSD, Wi-Fi y vídeo.
2. Revisa las cuatro respuestas de planificación y la alternativa descartada. Comprueba que relacionen características concretas.
3. Revisa la ficha de incidencia y las dos capturas de error/corrección. No hace falta revisar un historial completo de intentos.
4. Importa el JSON cuando haya dudas o para verificar el resultado. El comprobador no evalúa presupuesto, mínimos de la actividad ni explicaciones.
5. Registra durante la clase la explicación individual y completa la rúbrica común de 10 puntos.

La compatibilidad puede tener errores, advertencias o información. Los ejemplos están sin errores ni advertencias; la información sobre la alimentación independiente de la pantalla es normal. En las entregas, no penalices automáticamente un aviso: comprueba su significado y si afecta a los requisitos. Un montaje incompleto no cumple el encargo aunque tenga cero errores.

No puntúes como error doble el mismo problema técnico en varias filas de la rúbrica: distingue si incumple el encargo y si además falta la explicación correspondiente.

## Organización de las sesiones

- **Sesión 1:** introducción y asignación (10 min), planificación (15 min), montaje y primeras correcciones (25 min), guardar/exportar borrador (5 min).
- **Sesión 2:** incidencia y explicación (20 min), ficha final y entrega (25 min), revisión final (10 min).
- Recoge explicaciones individuales de unos **45–60 segundos** mientras el resto trabaja, repartidas entre las dos sesiones. Con grupos grandes, reserva tiempo adicional; no cabe escuchar a 30 alumnos en los últimos diez minutos.

Antes de aplicarlo a todo el grupo, prueba los cuatro perfiles con unos pocos alumnos. Los presupuestos son viables, pero el tiempo y la dificultad educativa requieren ajustar las ayudas al grupo.

## Preguntas breves para comprobar comprensión

Usa la misma estructura para todos: una relación entre dos piezas y una predicción de cambio. Puedes mostrar las fichas; no necesitas exigir que memoricen números de modelo.

- A: «¿Por qué da imagen sin tarjeta gráfica? ¿Qué cambiaría si la CPU no tuviera gráfica integrada?»
- B: «¿Qué dos características has comprobado para conectar esta pantalla? ¿Qué ocurriría con una placa AM5 que sólo tuviera HDMI y DisplayPort?»
- C: «La placa tiene HDMI. ¿Por qué has conectado el cable a la tarjeta gráfica? ¿Qué ocurriría si quitaras esa tarjeta?»
- D: «¿Qué formatos necesita esta caja? ¿Qué pasaría si sustituyeras la fuente SFX por una ATX?»

Evalúa comprensión, no soltura al hablar. Si lo necesitan, permite demostrar la respuesta señalando las fichas o realizando el cambio con apoyo.

## Copia y uso de IA

La aleatoriedad aporta variedad; no garantiza autoría. El JSON, las capturas y las explicaciones son editables. Mantén el JSON abierto para que puedan importar, exportar y recuperar su trabajo.

La evidencia principal de aprendizaje combina planificación, causa de un error, corrección y explicación individual. No deduzcas copia sólo porque dos montajes coinciden: hay pocas piezas válidas en algunos perfiles y varias personas pueden razonar hacia la misma solución.

Si permites IA, pide que declaren para qué la usaron y que contrasten la propuesta con las fichas. Si la restringes, establece la norma antes de empezar y realiza la parte de comprobación individual en clase. No utilices el aspecto del texto ni detectores de IA como prueba automática.

## Qué añadir después al simulador

La propuesta ya puede realizarse con la versión actual. Para reducir todavía más la corrección, la mejora con mayor utilidad sería **introducir un código de encargo y obtener una lista automática de cumplimiento**: piezas obligatorias/prohibidas, presupuesto, RAM, SSD, Wi-Fi y vídeo. La misma lista serviría para orientar al alumno y al docente. Aún no está implementada.

Una segunda mejora sería guardar la predicción y comparar la incidencia antes/después. Esto documentaría el razonamiento, pero un historial local seguiría siendo editable y no acreditaría autoría por sí solo.

No se han trasladado los criterios CE del ejemplo de sistemas operativos: conviene vincular esta nueva actividad con tu programación de hardware antes de publicarla.
