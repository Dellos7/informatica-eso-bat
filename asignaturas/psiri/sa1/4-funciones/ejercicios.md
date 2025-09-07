# Ejercicios de Funciones y módulos

<ol>
    <li>Haz un programa llamado <strong>nombre_completo.py</strong> que muestre tu nombre y apellidos (introducidos al programa por el usuario) y la longitud de tu nombre completo, utilizando la función correspondiente. Ejemplo:<br><u>Me llamo David López Castellote y la longitud de mi nombre completo es de 22.</u><br><br></li>
    <li>Escribe un programa llamado <strong>radio_circulo.py</strong> que importe el módulo <span style="color: #0000ff;"><a href="https://docs.python.org/3/library/math.html" target="_blank"><strong>math</strong></a></span> y utilice la constante <strong>pi</strong>&nbsp;
        para obtener la <strong>longitud de una circunferencia</strong> de radio&nbsp; 5 cm. Después, modifica el programa para que el radio lo introduzca el usuario utilizando la función <strong>input</strong>.<br><br></li>
    <li>Escribe un programa llamado <strong>raiz.py</strong> que <strong>calcule la raíz cuadrada, el seno y el coseno</strong> del número 49 y los muestre en pantalla. Debes utilizar las funciones correspondientes del módulo&nbsp;<strong>math</strong>. Después, modifica el programa para que el número lo introduzca el usuario utilizando la función <strong>input</strong>.<br><br></li>
    <li>Haz un programa llamado <strong>area_circunferencia.py</strong> que pida al usuario el radio de una circunferencia, <strong>calcule su área</strong> y la muestre en pantalla. El resultado debe estar redondeado a 2 decimales.<br><br></li>
    <li>Haz un programa llamado <strong>volumen_esfera.py</strong> que pida al usuario el radio de una esfera, <strong>calcule su volumen</strong> y lo muestre en pantalla.&nbsp;El resultado debe star redondeado a 3 decimales.<br><br></li>
    <li>Haz un programa llamado <strong>volumen_cilindro.py</strong>&nbsp;que pida al usuario el radio y la altura de un cilindro, <strong>calcule su volumen</strong> y lo muestre en pantalla.&nbsp;El resultado debe star redondeado a 2 decimales.<br><br></li>
    <li>Haz un programa llamado <strong>maximo.py</strong>&nbsp;que pida al usuario 3 números enteros y muestre cuál es el máximo de todos ellos.<br><br></li>
    <li>Haz un programa llamado <strong>minimo.py</strong>&nbsp;que pida al usuario 3 números decimales y muestre cuál es el mínimo de todos ellos.<br><br></li>
    <li>Haz un programa llamado <strong>comparaciones.py</strong> que muestre los siguientes resultados haciendo las operaciones y comparaciones correspondientes:</li>
    <ol>
        <li>¿Es la raíz cuadrada de 20 mayor que 5?</li>
        <li>¿Es la raíz cuadrada de 20 menor que 5 pero mayor que 4?</li>
        <li>¿Es la longitud de la circunferencia de una esfera de radio 5 mayor que 30?</li>
        <li>¿Es la longitud de la circunferencia de una esfera de radio 0 igual a 0?</li>
        <li>¿Tiene mi nombre más de 5 caracteres y menos de 10?</li>
        <li>¿Tiene mi nombre completo más de 25 caracteres y menos de 35?<br><br></li>
    </ol>
    <li>Escribe un programa llamado <strong>sistema.py</strong>&nbsp;que importe el módulo&nbsp;&nbsp; <a href="https://docs.python.org/3/library/sys.html" target="_blank">sys</a>&nbsp;&nbsp; y mediante las constante&nbsp;&nbsp;&nbsp; <strong>version</strong>&nbsp;&nbsp;&nbsp;
        (
        <em>informa de la versión de Python</em>) y&nbsp;&nbsp;&nbsp;&nbsp; <strong>platform</strong>&nbsp;&nbsp;&nbsp;&nbsp; (<em>informa del S.O. que se está utilizando</em>) obtén información de la versión de python que estás utilizando y el sistema
        operativo donde se está ejecutando el código. Por ejemplo: <em>La versión de Python es&nbsp;3.9.1 (default, Dec 29 2020, 08:52:17) \n[Clang 12.0.0 (clang-1200.0.32.28)] y el sistema operativo es&nbsp;darwin.</em><br><br>
    </li>
    <li>
        Vamos a utilizar otro módulo distinto: el módulo <strong><a href="https://docs.python.org/3/library/turtle.html#turtle-tutorial" target="_blank">turtle</a>.</strong>&nbsp;¡Escribe el siguiente programa!
        <pre>from turtle import *
color("blue")
forward(100)
left(120)
forward(100)<br></pre>
        <strong>¿Cómo acabarías de dibujar un triángulo?</strong><br>
        Prueba ahora el siguiente código:<br><br>
        <pre>from turtle import *
for steps in range(100):
    for c in ('blue', 'red', 'green'):
        color(c)
        forward(steps)
        right(30)
        </pre>
        <strong>Trata de modificar algunos parámetros para dibujar diferentes figuras.</strong>
        <br><br>
    </li>
    <li>Escribe un programa llamado <strong>mayúscula.py</strong> que solicite al usuario introducir una letra. Una vez introducida la mostrará en pantalla pero en mayúsculas. <u>Pista</u>: debes fijarte en el <a href="https://www.tamasoft.co.jp/en/general-info/unicode-decimal.html" target="_blank"><strong><u>código Unicode</u></strong></a> de cada letra y utilizar adecuadamente las funciones <strong><em>ord</em></strong>&nbsp;(convierte un carácter en su correspondiente número Unicode) y <strong><em>chr</em></strong>&nbsp;(convierte un número Unicode
        en su correspondiente carácter).<br><br></li>
    <li>Haz un programa llamado <strong>orden.py</strong> que pida al usuario su apellido y le indique la longitud del mismo y, además, si estaría colocado en una lista de orden alfabético entre la G y la M. <br>

        <strong>Ejemplo 1:</strong><br>

        Tu apellido López tiene 5 caracteres y estaría colocado entre la G y la M: True<br>

        <strong>Ejemplo 2:</strong><br>

        Tu apellido Belmonte tiene 8 caracteres estaría colocado entre la G y la M: False <br><br>
    </li>
</ol>