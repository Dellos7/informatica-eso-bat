---
layout: default
title: Cómo funciona un LLM
description: Tema 2
---

# Cómo funciona un LLM
{: .no_toc }

* TOC
{:toc}

Esta es **la página más importante del tema**. Si entiendes lo que hay aquí, entiendes por qué la IA hace todo lo que hace: lo bueno y lo malo.

**LLM** son las siglas de *Large Language Model*: **modelo grande de lenguaje**. Es lo que hay por debajo de ChatGPT, Gemini, Claude y cualquier chat de IA que hayas usado.

---

## La idea central: predecir la siguiente palabra {#prediccion}

Un LLM hace **una sola cosa**, una y otra vez:

> **Dado todo lo que hay escrito hasta ahora, ¿cuál es la palabra que vendría después con más probabilidad?**

Escribe esa palabra. Y entonces vuelve a empezar: *«dado todo lo que hay escrito hasta ahora —incluida la palabra que acabo de escribir—, ¿cuál viene ahora?»*. Y otra vez. Y otra. Hasta que termina.

Eso es todo. **No hay nada más.** No hay una parte del programa que «piense», ni que «entienda la pregunta», ni que «busque la respuesta». Solo predicción, repetida miles de veces.

Ya conoces algo que funciona así: **el autocompletado del buscador**. Escribes «por qué mi gato» y te ofrece las continuaciones más frecuentes. Un LLM es eso mismo, pero habiendo leído una cantidad de texto imposible de imaginar, y prediciendo no una palabra sino frases enteras.

---

## ¿Y entonces por qué parece tan listo? {#por-que-funciona}

Aquí está lo sorprendente, y es honesto reconocer que **sorprendió también a los científicos que lo construyeron**.

Para acertar la siguiente palabra en *cualquier* texto del mundo, no basta con saber gramática. Fíjate:

> *«El asesino resultó ser el mayordomo, porque era el único que tenía la llave del…»*

Para acertar aquí hay que haber entendido la frase. Y si entrenas un sistema con **millones de textos** —novelas, manuales, foros, código, recetas, artículos científicos—, para acertar la siguiente palabra acaba teniendo que capturar **muchísimos patrones sobre cómo funciona el mundo**.

> 💡 **La clave:** nadie le enseñó historia, ni matemáticas, ni a programar. Todo eso apareció **como efecto secundario** de entrenarlo para acertar la siguiente palabra en millones de textos.
{: .alert-tip}

Por eso funciona tan bien. Y por eso, a la vez, falla de formas tan raras.

---

## Tokens: el modelo no ve letras {#tokens}

Un LLM no lee letras ni palabras. Lee **tokens**: trozos de texto, que a veces son una palabra entera y a veces un cachito.

```plaintext
"inteligencia artificial"   →   [intel] [igencia] [ artificial]
"ferrocarril"               →   [fer] [rocar] [ril]
```

Esto explica uno de los fallos más famosos de la IA: **contar letras**. Si le preguntas a un modelo cuántas erres tiene «ferrocarril», él no ve `f-e-r-r-o-c-a-r-r-i-l`. Ve tres bloques. Contar letras dentro de esos bloques es para él un trabajo raro y difícil, como te lo sería a ti contar cuántas curvas tiene una palabra escrita en un idioma que no sabes leer.

> 🔎 Puedes verlo tú mismo en **[tiktokenizer.vercel.app](https://tiktokenizer.vercel.app/)**. Escribe tu nombre, una palabra en valenciano, un emoji y un número largo, y mira cómo los trocea.
{: .alert-info}

---

## Temperatura: por qué no siempre responde lo mismo {#temperatura}

Cuando el modelo va a elegir la siguiente palabra, no tiene **una** candidata: tiene una lista con sus probabilidades.

> *«El perro salió corriendo por la…»*

| Palabra | Probabilidad |
| :--- | :---: |
| puerta | 50 % |
| calle | 17 % |
| ventana | 17 % |
| escalera | 8 % |
| chimenea | 8 % |

¿Cuál elige? Depende de un ajuste llamado **temperatura**:

- **Temperatura baja (cerca de 0):** elige casi siempre la más probable. Respuestas **correctas pero previsibles y aburridas**. Siempre te dirá «puerta».
- **Temperatura alta:** elige al azar respetando las probabilidades. Respuestas **más creativas, y también más arriesgadas**. A veces te dirá «chimenea».

De aquí salen dos consecuencias que vas a comprobar en clase:

1. **La misma pregunta puede dar respuestas distintas.** No es un fallo: es así por diseño.
2. **El modelo no elige lo verdadero, elige lo probable.** Y lo probable y lo verdadero **no siempre coinciden**.

---

## Alucinaciones: por qué se inventa cosas {#alucinaciones}

Cuando un modelo afirma con total seguridad algo que es falso, decimos que **alucina**.

Ahora ya puedes entender por qué pasa. El modelo **no tiene una lista de datos verdaderos** que consultar. Genera lo que *suena* a respuesta correcta. Si le preguntas por algo de lo que apenas vio ejemplos, generará igualmente algo con la **forma** de una respuesta correcta: con fechas, con nombres, con un tono seguro. Porque así son los textos que ha leído.

> ⚠️ **Lo peligroso no es que se equivoque. Es que se equivoca exactamente con el mismo tono seguro con el que acierta.** No hay ninguna señal en la respuesta que te avise.
{: .alert-error}

---

## Adulación: por qué te da la razón {#adulacion}

Hay un fallo menos conocido y mucho más traicionero.

Prueba esto: pregúntale algo, acierta. Ahora dile *«te has equivocado, eso no es así»* aunque tenga razón. **Muchas veces se retractará y te dará la razón a ti.**

¿Por qué? Porque después del entrenamiento inicial, a los modelos se les ajusta para que las personas queden **satisfechas** con sus respuestas. Y a las personas les gusta que les den la razón. El resultado es un sistema con **tendencia a complacerte**.

> 🚨 Piensa en lo que significa: si cede cuando tú presionas, **no está buscando la verdad, está buscando que quedes contento**. Nunca uses una IA como árbitro de una discusión, ni le pidas que valore una idea tuya esperando una opinión sincera.
{: .alert-error}

---

## La ventana de contexto: por qué «se olvida» {#contexto}

El modelo solo puede tener en cuenta una cantidad limitada de texto a la vez: es la **ventana de contexto**.

Todo lo que hay en la conversación —tu primera pregunta, sus respuestas, tus correcciones— ocupa sitio en esa ventana. Cuando la conversación se hace muy larga, **lo primero que dijiste se va quedando fuera**, y el modelo parece olvidarlo.

Además, entre una conversación y otra **no recuerda nada** (salvo que la aplicación guarde una memoria aparte). Cada chat nuevo empieza de cero.

---

## Fecha de corte: lo que no sabe {#fecha-de-corte}

Un modelo se entrena **una vez**, con los textos que existían hasta cierta fecha. Eso es su **fecha de corte de conocimiento**.

De lo que ha pasado después, **no sabe nada**, por reciente e importante que sea. Algunas aplicaciones lo disimulan buscando en internet antes de responderte, pero el modelo en sí mismo tiene siempre una fecha a partir de la cual se queda a oscuras.

---

## No todas las IA son iguales {#modelos}

Esto es esencial y casi nadie lo sabe. Cuando alguien dice «la IA», normalmente no sabe de qué está hablando, porque hay **muchos modelos distintos**:

| | **Modelos pequeños y rápidos** | **Modelos grandes o «de razonamiento»** |
| :--- | :--- | :--- |
| Velocidad | Responden al instante | Tardan más |
| Coste | Muy barato | Mucho más caro |
| Método | Predicen y sueltan la respuesta | Se toman tiempo para **comprobar** antes de responder |
| Fallos | Fallan en cuentas, lógica y detalles | Fallan bastante menos |

Y aquí está lo incómodo: **cuando usas una app cualquiera, casi nunca sabes cuál de los dos te está respondiendo**. Puede depender de si pagas, de la hora, o de cuánta gente haya conectada.

> 💡 **Conclusión del tema:** la pregunta correcta no es *«¿la IA acierta?»*. Es *«¿qué modelo me está respondiendo, y cómo compruebo yo lo que me dice?»*.
{: .alert-tip}

---

## Resumen

1. Un LLM **predice la siguiente palabra**, una y otra vez. Nada más.
2. Lo hace tan bien porque ha leído **cantidades enormes de texto**.
3. No ve letras: ve **tokens**.
4. Elige entre **probabilidades**, no entre verdades. Por eso no repite la misma respuesta.
5. **Alucina** porque genera lo que *suena* correcto, con el mismo tono seguro de siempre.
6. **Te adula**: cede si le presionas.
7. **Se olvida** (ventana de contexto) y **no sabe nada** posterior a su fecha de corte.
8. **No hay «una» IA**: hay modelos muy distintos, y no valen lo mismo.
