---
layout: default
title: Prompts
description: Tema 2
---

# Prompts: cómo pedirle las cosas a una IA
{: .no_toc }

* TOC
{:toc}

## Qué es un prompt {#que-es}

Un **prompt** es la instrucción que le escribes a una IA. Es tu única herramienta: **lo único que controlas** de todo el proceso.

Y aquí está la trampa en la que cae casi todo el mundo:

> ❌ *«La IA me ha dado una respuesta malísima.»*
> ✅ *«Le he hecho una petición malísima.»*
{: .alert-warning}

En el [tema anterior](../pensamiento-computacional/) ya viste algo parecido: Karel hacía **exactamente** lo que le decías, no lo que tú querías que hiciera. Con una IA pasa lo mismo, pero peor, porque **la IA no te pregunta si algo no está claro: se lo inventa**.

Si no le dices la extensión, se inventa una. Si no le dices el tono, se inventa uno. Si no le dices para quién es, supone que es para un adulto cualquiera. **Todo lo que no le digas, lo rellenará ella.**

---

## El esquema R.O.C.F. {#rocf}

Un buen prompt casi siempre tiene estas cuatro piezas:

| Letra | Pieza | Qué respondes | Ejemplo |
| :---: | :--- | :--- | :--- |
| **R** | **Rol** | ¿Desde dónde quieres que escriba? | «Eres un profesor de Biología de 2º de ESO» |
| **O** | **Objetivo** | ¿Qué quieres exactamente? | «Hazme 10 preguntas tipo test sobre la célula» |
| **C** | **Contexto** | ¿Qué información necesita saber? | «Hemos dado solo la célula animal, sin orgánulos avanzados» |
| **F** | **Formato** | ¿Con qué forma lo quieres? | «Cada pregunta con 4 opciones, y las soluciones al final» |

### El mismo encargo, dos prompts

> **Prompt pobre**
> `hazme preguntas de la célula`

Resultado: 30 preguntas, la mitad de nivel universitario, sobre cosas que no habéis dado, sin soluciones y en un formato imposible de usar.

> **Prompt con R.O.C.F.**
> `Eres un profesor de Biología de 2º de ESO. Hazme 10 preguntas tipo test para repasar la célula animal. Solo hemos dado la membrana, el citoplasma y el núcleo; no incluyas orgánulos que no estén en esa lista. Formato: cada pregunta con 4 opciones (a, b, c, d) y todas las soluciones juntas al final. Lenguaje sencillo, para 13 años.`

Resultado: exactamente lo que necesitabas.

---

## Cuatro técnicas que funcionan {#tecnicas}

### 1. Dale ejemplos

Es la técnica más potente y la que menos se usa. En lugar de describir lo que quieres, **enséñaselo**:

```plaintext
Convierte estos títulos en titulares llamativos. Ejemplos:
"Excursión al museo" → "Un día entre dinosaurios: así fue nuestra visita"
"Torneo de ajedrez"  → "Jaque mate en el recreo"
Ahora hazlo con: "Recogida de alimentos"
```

### 2. Pídele los pasos

Si es un problema con varios pasos, dile **«explícalo paso a paso»**. El modelo acierta más cuando va desarrollando, porque cada paso que escribe le sirve de apoyo para el siguiente.

### 3. Pídele varias versiones

En vez de una respuesta, pide **tres opciones distintas** y elige tú. Te sale mucho mejor que quedarte con la primera.

### 4. Itera: no aceptes la primera respuesta

Un prompt no es una pregunta de examen: es una **conversación**. Corrige sobre lo que te ha dado:

- «Demasiado largo, déjalo en la mitad.»
- «La opción 2 me gusta, desarróllala más.»
- «Quítale el tono de anuncio.»

> 💡 **Trucazo:** dile también **lo que NO quieres**. «Sin emojis», «sin introducción», «no te inventes datos que yo no te haya dado». Funciona muy bien.
{: .alert-tip}

---

## Errores frecuentes {#errores}

| Error | Qué pasa | Solución |
| :--- | :--- | :--- |
| Pedirlo todo de golpe | Hace todo regular | Divídelo en varias peticiones |
| No decir el formato | Te lo da como quiere | Extensión, estructura y tono, siempre |
| Quedarte con la primera respuesta | Te conformas con lo mediocre | Itera al menos dos veces |
| Creerte los datos | Te cuela información falsa | **Verifica siempre** |
| Darle datos personales | Sales tú, o sale otra persona | [Léete esto](./riesgos-de-la-ia) |
| Pedirle que haga tu trabajo entero | No aprendes nada y se nota | Úsala para **mejorar** lo tuyo |

---

## La comprobación de los 4 puntos {#checklist}

**Nunca** uses lo que te da una IA sin pasar esta lista. Son 30 segundos:

> **1. Los datos.** ¿Hay fechas, nombres, cifras o citas? → **Compruébalos en otro sitio.** Especialmente si son fuentes: puede haberlas inventado.
>
> **2. El encargo.** ¿Responde de verdad a lo que yo pedía, o ha respondido a otra cosa parecida?
>
> **3. El sentido.** Léelo entero. ¿Tiene sentido? ¿Dice algo, o suena bien y no dice nada?
>
> **4. La responsabilidad.** Si entrego esto y hay un error, **el error es mío**. ¿Lo firmo?
{: .alert-warning}

Ese punto 4 es el importante. **Una IA nunca asume la responsabilidad de lo que escribe. La asume quien lo entrega.**

---

## Usar la IA sin dejar de aprender {#honestidad}

Esta es la parte incómoda, y merece que seas sincero contigo mismo.

Una IA puede hacerte el trabajo. Puede. Y entonces **no habrás aprendido nada**, habrás perdido la clase y, cuando llegue un examen o una situación real, no sabrás hacerlo.

La diferencia está en **en qué momento** la usas:

| ✅ Te hace mejor | ❌ Te sustituye |
| :--- | :--- |
| «Explícame esto de otra forma, no lo entiendo» | «Hazme el trabajo» |
| «Revisa mi texto y dime qué falla» | «Escríbeme el texto» |
| «Hazme preguntas para repasar» | «Dame las respuestas del examen» |
| «Dame tres ideas para empezar» | «Dámelo terminado» |

> 🎯 **Regla práctica:** usa la IA para **empezar** y para **revisar**. La parte de en medio —pensar, decidir, escribir— hazla tú. Es justo la parte que te hace aprender.
{: .alert-tip}
