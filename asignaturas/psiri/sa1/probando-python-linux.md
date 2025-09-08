---
layout: default
title: Tema 1
description: Probando Python en Linux
---

# Probando Python en Linux

Python es **un lenguaje de programación fácil de aprender.** Cuenta con una enorme base de [documentación en nuestro idioma](https://wiki.python.org/moin/SpanishLanguage) (mucha de ella gratuita) y puede usarse tanto para la creación de pequeñas aplicaciones para la terminal o grandes proyectos con interfaz gráfica.

Dado que la mayor parte (si no todas) las distribuciones Linux **vienen preparadas para usar Python, lo primero es comprobar la versión** que tenemos instalada. En este momento conviven la rama 2 y la rama 3. Sin embargo, la rama 2 desaparecerá en el 2020.

Podemos comprobar la versión que estamos utilizando con el comando  
`python --version   `  

Si estás usando una distribución relativamente nueva, es posible que recibas un mensaje de error. Si es así prueba esto:  
`python3 --version   `  

Si usaste el primer comando y el número de versión empieza con 2, prueba el segundo comando a ver si tienes instalado Python 3.

Una forma de escribir código es directamente desde la terminal. Abre la terminal y escribe:

`python3`

    print("Hola Mundo") 

Hagamos algunas cuentas  

    print(20*5)

Nota que al no tener comillas lo que se imprime es el resultado. En cambio, si hacemos:  

    print("20*5")

Veremos lo que pusimos entre paréntesis.  
Podemos usar variables.  
Escribe en la terminal.

    a=20
    b=10
    print(a*b)

También es posible hacer esto con palabras. Simplemente debemos agregar comillas.  

    blog="a todo el mundo"
    print("Quiero saludar ", blog)

Ahora trabajemos con datos ingresados por nosotros.  
En la terminal escribimos:

    numero1=input("Introduce un número: ")

Al presionar Enter nos pedirá que ingresemos un número. Después de hacerlo y presionar Enter, escribimos:

    numero2=input("Introduce otro número: )

Pulsamos **Enter**, escribimos el otro número y volvemos a pulsar Enter.  
Ahora escribe;

    print(numero1 + numero2)