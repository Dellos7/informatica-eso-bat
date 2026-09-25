# Resumen de la segunda revisión · 2026-2027

Fecha: 25 de septiembre de 2026. Esta revisión sustituye las decisiones sobre inclusión, rúbricas y calificación que figuraban en el [resumen anterior](./resumen-modificaciones-programaciones-2026-27.md).

## Programaciones de aula

Revisadas las cuatro programaciones y sincronizado únicamente su campo `content` en Eduplanner:

- [Digitalización](./digitalizacion/4eso_digitalizacion_prog-aula.md): 24 actividades.
- [TRDR](./trdr/1eso_trdr_prog-aula.md): 17 actividades.
- [PIARI](./piari/2eso_piari_prog-aula.md): 22 actividades.
- [PSIRII](./psirii/2bat_psirii_prog-aula.md): 13 actividades.

Se ha consultado el commit **05cc376**, anterior a las modificaciones de la primera revisión. Se recupera la diferenciación de apoyos para dislexia/DEA, atención y funciones ejecutivas, acceso lingüístico y autorregulación. Se adapta cada medida al contenido actual: no se reintroducen Karel, actividades sustituidas ni montajes antiguos. Las nuevas prácticas de IA, robótica, redes y correo tienen apoyos propios. Las **76 actividades** incluyen DUA y medidas específicas.

Las etiquetas automáticas de «Nivel III» se expresan como apoyo individualizado cuando no está determinado ese nivel, y no se presupone disponibilidad de PT/AL o material individual. Se mantienen apoyos concretos y significativos, con participación activa en los grupos.

Se retiran de las programaciones las referencias a la página de la asignatura, a actividades publicadas, a la equivalencia entre tema y SdA y a la política de autorización/prohibición de IA. Se mantienen los contenidos curriculares de inteligencia artificial y las herramientas necesarias para enseñarlos. Se traducen al castellano los títulos y los nombres de bloques que seguían en valenciano.

No cambian las sesiones ni las asociaciones de criterios: Digitalización 105; TRDR 70; PIARI 70; PSIRII 112.

## TRDR: propuesta 4.4 aplicada

- SdA 4: perfiles ficticios preparados, sin búsquedas de datos de compañeros o profesores; contraseñas inventadas y verificación en dos pasos simulada.
- SdA 5: registros ficticios de pantallas, descanso y actividad, sin exigir móvil propio ni exposición de hábitos.
- Se crea un [material docente con casos ficticios](./trdr/recursos-ficticios-identidad-y-bienestar.md) para concretar la propuesta.

## PIARI: ocho rúbricas de IA y ocho CSV

Se ha leído y aplicado el workflow `../.agents/workflows/convertir-rubrica-csv.md`, localizado en la carpeta superior del repositorio. No se ha modificado el workflow.

Cada rúbrica suma **10 puntos reales**, sin fórmulas posteriores de normalización. Todas tienen cuatro niveles completos y un criterio independiente de **entrega en plazo, máximo 2 puntos**. Los otros 8 puntos se distribuyen entre los aprendizajes de la actividad. En las actividades 4 y 5 se conservan como criterios propios la chuleta y la regla personal, separadas del plazo.

Se han ajustado descriptores que exigían conclusiones absolutas o la aparición de errores: se valora interpretar las pruebas y justificar resultados, no inventar fallos. Se conserva la coherencia con los tres itinerarios del proyecto final.

| Actividad | Rúbrica Markdown | CSV |
| :--- | :--- | :--- |
| 1. Detector | [Actividad 1](./piari/inteligencia-artificial/actividad1/index.md) | [rubrica.csv](./piari/inteligencia-artificial/actividad1/rubrica.csv) |
| 2. Entrenamiento | [Actividad 2](./piari/inteligencia-artificial/actividad2/index.md) | [rubrica.csv](./piari/inteligencia-artificial/actividad2/rubrica.csv) |
| 3. Predicción | [Actividad 3](./piari/inteligencia-artificial/actividad3/index.md) | [rubrica.csv](./piari/inteligencia-artificial/actividad3/rubrica.csv) |
| 4. Prompts | [Actividad 4](./piari/inteligencia-artificial/actividad4/index.md) | [rubrica.csv](./piari/inteligencia-artificial/actividad4/rubrica.csv) |
| 5. Privacidad | [Actividad 5](./piari/inteligencia-artificial/actividad5/index.md) | [rubrica.csv](./piari/inteligencia-artificial/actividad5/rubrica.csv) |
| 6. Sesgos | [Actividad 6](./piari/inteligencia-artificial/actividad6/index.md) | [rubrica.csv](./piari/inteligencia-artificial/actividad6/rubrica.csv) |
| 7. Agentes y futuro | [Actividad 7](./piari/inteligencia-artificial/actividad7/index.md) | [rubrica.csv](./piari/inteligencia-artificial/actividad7/rubrica.csv) |
| 8. Proyecto | [Actividad 8](./piari/inteligencia-artificial/actividad8/index.md) | [rubrica.csv](./piari/inteligencia-artificial/actividad8/rubrica.csv) |

## Propuestas pedagógicas de departamento

Se crean cuatro documentos de materia para integrarlos en la propuesta del departamento:

- [Digitalización](./digitalizacion/4eso_digitalizacion_propuesta-pedagogica-departamento.md).
- [TRDR](./trdr/1eso_trdr_propuesta-pedagogica-departamento.md).
- [PIARI](./piari/2eso_piari_propuesta-pedagogica-departamento.md).
- [PSIRII](./psirii/2bat_psirii_propuesta-pedagogica-departamento.md).

La estructura se basa en las instrucciones 2026-2027, **4.2.2.1.b, páginas 41-42**: concreción curricular por materia, instrumentos de información, calificación cualitativa y cuantitativa e inclusión, con coordinación y revisión departamental. Se desarrollan además contextualización, secuencia, metodología, recursos, evaluación, recuperación, información y revisión docente. Los títulos elegidos organizan la propuesta; no se presentan como una lista literal de apartados oficiales.

Fuente consultada: [Resolución de 15 de julio de 2026, copia del DOGV](https://www.mclibre.org/consultar/legislacion/files/dogv/DOGV-2026-07-15-R-inicio-curso-secundaria-2627-es.pdf). Se ha leído el PDF completo en sus apartados relevantes pese a que el acceso mediante el navegador de búsqueda falló.

### Calificación y recuperación

Se toma como referencia el [PDF de criterios de calificación ESO](../archivos/Criterios-de-calificación-ESO.pdf) indicado en la última aclaración. **Esto sustituye la formulación anterior de doble ponderación por temas:** el PDF establece actividades ponderadas dentro del trimestre y media de los tres trimestres, con posible ponderación distinta según trabajo realizado. Los temas siguen organizando la recuperación, sin añadir una segunda ponderación no recogida en ese documento.

- Se incorporan fórmula, ejemplo, papel de las pruebas, expresión de resultados, redondeo y consecuencias de copia del PDF.
- La recuperación comprende **actividades no superadas**, también si estaban entregadas, o **prueba en ordenador**, según determine el profesor para cada tema y en las fechas comunicadas.
- La excepción de IA expresamente autorizada actualiza la prohibición absoluta del PDF, conforme a la instrucción del profesor.
- En PSIRII, la calificación oficial se adapta a Bachillerato: de 0 a 10 sin decimales, conforme al [artículo 30.2 del Real Decreto 243/2022](https://www.boe.es/buscar/act.php?id=BOE-A-2022-5521#a3-2).
- El PDF no fija pesos universales ni cómo se incorpora la recuperación a notas anteriores. Las propuestas identifican esos acuerdos y la concreción del redondeo para su adopción y comunicación; no inventan topes de recuperación, porcentajes ni reglas de sustitución.

Los documentos se presentan como **propuestas para revisión departamental**, sin atribuirles una aprobación realizada ni inventar datos del centro. El PDF original no se ha modificado.

## Validación y alcance

Se comprueban las cuatro programaciones, sus tablas de actividades, las copias Eduplanner y los ocho pares Markdown/CSV: suma 10, entrega 2, cuatro niveles, orden creciente y nueve columnas separadas por punto y coma. No se ha realizado una importación real en Aules.

Los cambios previos ajenos a esta revisión se conservan, incluido el archivo de respuestas del profesor. Las propuestas de `geminiService.ts` continúan en standby.
