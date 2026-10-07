---
layout: default
title: Actividad 1. Monta un ordenador para un cliente
description: Hardware - Simulación de montaje, compatibilidad y resolución de problemas
---

# 🖥️ Actividad 1– Monta un ordenador para un cliente

## Objetivo

Elegir los componentes de un ordenador que responda a un encargo, comprobar su compatibilidad y explicar cómo resolver una avería. Aprenderás a relacionar la CPU, la placa base, la RAM, la caja, la fuente de alimentación y la pantalla.

> **Definición clave:** dos componentes son **compatibles** cuando pueden trabajar juntos y cumplen los requisitos de conexión, formato y funcionamiento. Además de ser compatible, el montaje debe cumplir lo que pide el cliente y respetar su presupuesto.

Trabajarás individualmente durante dos sesiones de clase. Todas las personas realizarán los mismos pasos, con un encargo asignado.

---

## Pasos de la actividad

### 1. Preparar la entrega

1. En **Documentos/Digitalizacion_4ESO**, crea la carpeta `Actividad_Montaje_PC`.
2. Crea un documento de LibreOffice Writer llamado `montaje_respuestas.odt`. Incluye el título de la actividad, tu nombre y grupo.
3. Utiliza los apartados de esta actividad como títulos del documento. La extensión orientativa es de **cuatro páginas**, incluidas las tablas y capturas.

> ⚠️ Guarda periódicamente. Al finalizar tendrás que exportar el montaje a un archivo JSON: guardarlo solamente en el navegador no permite entregarlo.
{: .alert-warning}

### 2. Obtener tu encargo

Abre el [selector de opciones](https://dlopezcastellote.dev/calcular-opciones-aleatorias/) y completa estos datos:

| Campo | Valor |
|---|---|
| NIA | Tu NIA |
| Identificador de la actividad | `4eso-montaje-pc-2026-v1` |
| Cantidad total de opciones | `32` |
| Número de opciones a realizar | `1` |

Anota el número de opción y pega una captura del resultado. Si el profesor te entrega directamente un encargo, utiliza ese código.

El número determina un **perfil**, una **variante** y una **incidencia**:

| Opciones | Perfil | Variante 1 | Variante 2 | Variante 3 | Variante 4 |
|---|---|---|---|---|---|
| 1–8 | A | 1–2 | 3–4 | 5–6 | 7–8 |
| 9–16 | B | 9–10 | 11–12 | 13–14 | 15–16 |
| 17–24 | C | 17–18 | 19–20 | 21–22 | 23–24 |
| 25–32 | D | 25–26 | 27–28 | 29–30 | 31–32 |

- Si tu opción es **impar**, tienes la incidencia **E1: memoria incorrecta**.
- Si tu opción es **par**, tienes la incidencia **E2: cable de pantalla incorrecto**.

Por ejemplo, la opción **14** corresponde al encargo **B3-E2**.

#### Requisitos comunes

Todos los montajes deben incluir:

- Caja, placa base, CPU, fuente de alimentación y refrigeración suficiente. Puedes utilizar el disipador incluido cuando la ficha de la CPU indique que lo lleva.
- **Dos módulos de RAM compatibles**, con una capacidad total mínima de **16 GB**. Puedes superar esa capacidad.
- Al menos **un SSD** de la capacidad que indique tu variante.
- Al menos **un ventilador de caja**.
- La pantalla indicada en tu perfil, con una salida y un cable compatibles. No se permiten adaptadores en esta simulación.

Utiliza los precios del catálogo del simulador. **El presupuesto incluye la pantalla**, también en el perfil B. No se incluyen sistema operativo, teclado, ratón ni el precio del cable.

#### Perfiles de cliente

| Perfil | Encargo | Condiciones obligatorias |
|---|---|---|
| **A. Equipo de aula** | Preparar un equipo para documentos, navegación y presentaciones. | CPU **Intel Core i5-12400**. Pantalla **Full HD 24″ — HDMI**. Sin tarjeta gráfica dedicada. |
| **B. Aula con pantalla VGA** | Preparar un equipo cuya pantalla utiliza la conexión D-SUB/VGA. | CPU **AMD Ryzen 5 7600X**. Pantalla **de aula 19″ — sólo VGA**. Sin tarjeta gráfica dedicada. |
| **C. CPU sin gráfica integrada** | Conseguir que un equipo con la CPU indicada pueda mostrar imagen. | CPU **Intel Core i5-13400F**. Pantalla **Full HD 24″ — HDMI**. Resuelve qué componente adicional necesita para dar imagen. |
| **D. Equipo compacto** | Preparar un equipo de aula que quepa en una caja pequeña. | Caja **Cooler Master NR200 (Mini-ITX)**. Pantalla **QHD 27″ — DisplayPort**. Sin tarjeta gráfica dedicada. |

#### Variantes y presupuesto

| Variante | SSD mínimo | Conexión Wi-Fi | Presupuesto A | Presupuesto B | Presupuesto C | Presupuesto D |
|---|---|---|---:|---:|---:|---:|
| **1** | 500 GB | No obligatoria | 600 € | 800 € | 800 € | 1100 € |
| **2** | 1 TB | No obligatoria | 650 € | 850 € | 850 € | 1150 € |
| **3** | 500 GB | Obligatoria | 650 € | 850 € | 850 € | 1100 € |
| **4** | 1 TB | Obligatoria | 700 € | 900 € | 900 € | 1150 € |

Si necesitas Wi-Fi, puedes utilizar una placa con Wi-Fi integrado o una tarjeta de expansión compatible. No tienes que gastar todo el presupuesto.

### 3. Planificar antes de comprobar

Abre el simulador de montaje desde el enlace que proporcione el profesor. Consulta las fichas de las piezas y prepara una primera propuesta.

**Antes de pulsar «Comprobar compatibilidad»**, responde brevemente:

1. **CPU y placa:** ¿qué socket necesita tu CPU? ¿Coincide con el de la placa elegida?
2. **RAM:** ¿qué tipo acepta la placa? ¿Cuántos módulos y cuánta memoria total vas a instalar?
3. **Imagen:** ¿qué componente genera la imagen? ¿Conectarás la pantalla a la placa o a la tarjeta gráfica? ¿Qué puerto comparten con la pantalla?
4. **Espacio y alimentación:** ¿admite la caja el formato de la placa y de la fuente? ¿Qué características de la fuente y de la refrigeración has revisado?

> ⚠️ Una placa con HDMI, VGA o DisplayPort no garantiza que esas salidas funcionen con cualquier CPU. Consulta también si el procesador tiene gráfica integrada.
{: .alert-warning}

### 4. Montar, comprobar y ajustar

1. Añade las piezas y selecciona la **salida de vídeo** y el **cable** de la pantalla.
2. Pulsa **«Comprobar compatibilidad»**. Lee las explicaciones y utiliza las pistas cuando las necesites.
3. Corrige los problemas. Si una predicción del apartado anterior era incorrecta, indica qué pensabas y qué has aprendido.
4. Completa esta tabla con el montaje definitivo. En la fila de RAM escribe la cantidad de módulos; incluye también el precio de la pantalla.

| Componente | Modelo | Cantidad | Precio unitario | Subtotal |
|---|---|---:|---:|---:|
| Caja | | | | |
| Placa base | | | | |
| CPU | | | | |
| Refrigeración adicional, si hace falta | | | | |
| RAM | | | | |
| SSD | | | | |
| Fuente de alimentación | | | | |
| Ventilador de caja | | | | |
| Tarjeta gráfica, si hace falta | | | | |
| Wi-Fi adicional, si hace falta | | | | |
| Pantalla | | | | |
| **TOTAL** | | | | |

Añade filas si instalas otras piezas y calcula cuánto presupuesto queda. **El simulador comprueba compatibilidad; debes revisar también el presupuesto y los requisitos del encargo.**

### 5. Diagnosticar una incidencia

Cuando tengas un montaje funcional, guárdalo con nombre en el navegador. Introduce **solamente la incidencia asignada**, sin modificar el resto del equipo:

| Incidencia | Cambio que debes introducir |
|---|---|
| **E1. Memoria incorrecta** | Retira temporalmente tus dos módulos de RAM e instala **dos módulos DDR3 de 8 GB** del catálogo. |
| **E2. Cable incorrecto** | Mantén la pantalla y la salida seleccionada. Cambia el cable a **VGA** en los perfiles A, C y D; en el perfil B, cámbialo a **HDMI**. |

Antes de comprobar, escribe qué crees que ocurrirá y por qué. Después:

1. Pulsa **«Comprobar compatibilidad»** y pega una captura del error.
2. Explica el problema con tus palabras. Relaciona las características de las piezas; no te limites a copiar el aviso.
3. Realiza la corrección mínima y vuelve a comprobar. Pega una captura del resultado corregido.
4. Completa esta ficha:

| Pregunta | Respuesta breve |
|---|---|
| ¿Qué esperaba que ocurriera? | |
| ¿Qué ha detectado el simulador? | |
| ¿Qué requisito de compatibilidad se incumple? | |
| ¿Qué he cambiado para solucionarlo? | |
| ¿Por qué puedo conservar las demás piezas? | |

Un error durante el aprendizaje no baja la nota por sí mismo. Se evalúa cómo lo explicas y lo resuelves.

### 6. Justificar y entregar

1. En **«Mis decisiones»**, escribe tu código de encargo y resume el uso del equipo, una decisión técnica y la corrección de la incidencia.
2. Exporta el montaje **corregido** y renombra el archivo a `montaje_final.json`.
3. Comprueba que puedes volver a importarlo y que conserva las piezas y la conexión de vídeo. Vuelve a pulsar **«Comprobar compatibilidad»** después de importarlo.
4. Añade al documento esta ficha de comprobación final:

| Dato | Resultado |
|---|---|
| Código de encargo | |
| Presupuesto máximo / coste total | |
| Dos módulos de RAM / capacidad total / tipo | |
| Modelo y capacidad del SSD | |
| Wi-Fi, cuando sea obligatorio: integrado o tarjeta | |
| Pantalla / salida elegida / cable | |
| Potencia estimada / potencia recomendada / fuente elegida | |
| Errores y avisos pendientes; explicación si los hay | |

5. Responde en **cuatro o cinco frases**: ¿por qué tu montaje cumple el encargo? ¿Qué alternativa descartaste y por qué?
6. Indica si has recibido ayuda de compañeros, webs o IA, para qué la usaste y qué comprobaste personalmente. Sigue las condiciones de uso de IA que establezca el profesor. Cualquier componente o explicación que entregues debes poder justificarlo.

El profesor te pedirá una **explicación individual breve en clase**. Puede preguntarte por la relación entre dos piezas de tu montaje o pedirte que predigas qué ocurriría al cambiar una de ellas.

### 7. Preparar el archivo para Aules

Comprime estos dos archivos en `montaje_tuapellido_tunombre.zip` y entrégalo en Aules:

- `montaje_respuestas.odt`, con las respuestas, tablas y **tres capturas**: asignación, incidencia y corrección.
- `montaje_final.json`, con el equipo corregido.

> 📦 **Revisa antes de entregar:** el ZIP contiene los dos archivos; el JSON se puede importar; el coste y los requisitos corresponden a tu encargo.
{: .alert-error}

---

## Rúbrica de evaluación

| Criterio | 0 pts | 0.5 pts | 1 pt | 1.5 pts | 2 pts |
|---|---|---|---|---|---|
| **Cumplimiento del encargo** | No presenta montaje evaluable. | Cumple pocos requisitos. | Cumple parte del encargo. | Presenta una omisión menor. | Cumple las condiciones, el presupuesto y la conexión de pantalla. |
| **Razonamiento técnico** | No explica decisiones. | Aporta afirmaciones sin relacionar características. | Explica correctamente algunas relaciones. | Justifica la mayoría y compara una alternativa. | Relaciona correctamente CPU/placa, RAM, formatos, alimentación y vídeo. |
| **Diagnóstico y corrección** | No realiza la incidencia. | Muestra el error sin explicarlo. | Identifica la causa o consigue corregirlo. | Explica la causa y lo corrige, con evidencia incompleta. | Predice, explica la causa, corrige y justifica conservar las demás piezas. |
| **Entrega y documentación** | No hay entrega utilizable. | Entrega muy incompleta. | Hay omisiones importantes. | JSON importable y documento con una omisión menor. | JSON importable, fichas y capturas claras; documenta las ayudas recibidas. |
| **Explicación individual** | No puede explicar su montaje. | Reconoce piezas sin explicar su relación. | Explica una relación con ayuda. | Explica la relación y predice un cambio con alguna imprecisión. | Justifica una relación y predice correctamente el efecto de un cambio. |

**Total: 10 puntos.** Se aceptan diferentes montajes que cumplan el encargo y estén correctamente justificados.

> El simulador representa un modelo educativo. Su resultado no sustituye comprobar la BIOS, las especificaciones del fabricante o el rendimiento de un ordenador real. No simula adaptadores ni los límites de resolución y frecuencia de cada conexión.
