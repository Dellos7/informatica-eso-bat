# Funciones predefinidas y módulos

[👉 FUNCIONES PREDEFINIDAS "BUILT IN" (aprendepython.es)](https://aprendepython.es/core/datatypes/data/#funciones-built-in)

**Ampliación:**

Una **función** es un fragmento de código que realiza una tarea específica. Algunas funciones, para que realicen la tarea necesitan que se les pase una información determinada (parámetros/argumentos). Además, después de realizar la tarea pueden devolver un resultado. 

Una función nos permite implementar operaciones que son frecuentemente utilizadas en un programa y así reducir la cantidad de código.
       

Las <strong>funciones predefinidas</strong> vienen dadas por Python para que puedan se utilizadas por los programadores. Así, la función: `print()` muestra en pantalla algo.
    Es una función predefinida que se utiliza para mostrar información en pantalla.
    
Algunas funciones predefinidas sobre valores numéricos:
<ul>
    <li><span style="color: #000000;">abs</span>(&nbsp; )&nbsp; &lt;--&nbsp; calcula el valor absoluto de un número.</li>
    <li><span style="color: #000000;">float</span> (&nbsp; ) &lt;-- convierte un número entero a real. Si el número está dentro de una cadena de caracteres también lo convierte. Ejemplo:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &gt;&gt;&gt; float('3.256')&nbsp;&nbsp;
        devuelve 3.256&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
    <li><span style="color: #000000;">int</span> (&nbsp; ) &lt;-- convierte a entero tanto un número real (flotante) como una cadena de caracteres que contenga caracteres numéricos.</li>
    <li><span style="color: #000000;">str</span> (&nbsp; ) &lt;-- convierte a cadena. Recibe un número y devuelve una representación de este como cadena. Ejemplo: a = str(12.5)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;---- En este caso, a tomará el valor&nbsp;&nbsp;&nbsp;
        '12.5'
        <br>&gt;&gt;&gt; y = "Tengo " + str (43) + " años"
    </li>
    <li><span style="color: #000000;">bin</span>(&nbsp; ) &lt;-- representa en binario. Convierte un número entero en una cadena con el número expresado en binario.</li>
    <li><span style="color: #000000;">oct</span>(&nbsp; ) &lt;-- representa en octal. Convierte un número entero en una cadena con el número expresado en octal.</li>
    <li><span style="color: #000000;">hex</span>(&nbsp; ) &lt;-- representa en hexadecimal. Convierte un número entero en una cadena con el número expresado en hexadecimal.</li>
    <li><span style="color: #000000;">round</span>(&nbsp; ) &lt;--&nbsp; redondeo. Puede usarse con uno o dos argumentos. Si se usa con uno redondea el número al entero más próximo. Ejemplo: <br>&nbsp;&nbsp;&nbsp; &gt;&gt;&gt; round (3.1415926535)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &lt;---- devolverá&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3<br>Si se usa con dos argumentos, deben de ir separados por una coma, el segundo indica el número de decimales que deseamos conservar tras el redondeo. Ejemplo:<br>&nbsp;&nbsp;&nbsp; &gt;&gt;&gt;
        round(3.1415926535,&nbsp; 3)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;---- devolverá&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3.142</li>
    <li><span style="color: #000000;">max</span>(&nbsp; ) devuelve el valor mayor de un grupo de números. Ejemplo:<br>max(5, 3, 8, 12, 6, 1)&nbsp;&nbsp;&nbsp;&nbsp; &lt;----- devuelve&nbsp;&nbsp;&nbsp; 12</li>
    <li><span style="color: #000000;">min</span>(&nbsp; ) devuelve el valor más pequeño de un grupo de números. Ejemplo:<br>min(5, 3, 8, 12, 6, 1)&nbsp;&nbsp;&nbsp;&nbsp; &lt;----- devuelve&nbsp;&nbsp;&nbsp; 1</li>
    <li><span style="color: #000000;">sum</span>(&nbsp; ) devuelve la suma de una lista de números. Ejemplo:<br>sum( [5, 3, 8, 12, 6, 1] )&nbsp;&nbsp;&nbsp;&nbsp; &lt;----- devuelve&nbsp;&nbsp;&nbsp; 35</li>
</ul>
<p style="margin-left: 30px;">Una función puede formar parte de una expresión y sus argumentos, a su vez, pueden ser expresiones u otras funciones. Ejemplo:</p>
<p style="margin-left: 30px;">&gt;&gt;&gt; print(abs(round(-34.235, 1) * int(12.56))</p>
<p><span style="text-decoration: underline;">Funciones básicas para cadenas de caracteres</span></p>
<ul>
    <li><span style="color: #000000;">print</span>()&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;--- Imprime en pantalla el argumento.&nbsp;&nbsp; &nbsp;print (“Hola”)&nbsp; &nbsp; &nbsp; ---&gt; &nbsp; &nbsp;&nbsp; “Hola”</li>
    <li><span style="color: #000000;">len</span>()&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &lt;---&nbsp;&nbsp;&nbsp;&nbsp; Determina la longitud en caracteres de una cadena.&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; len(“Hola Python”)&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; ---&gt;&nbsp;&nbsp;&nbsp;&nbsp;
        11
    </li>
    <li><span style="color: #000000;">ord</span>(&nbsp; ) &lt;-- devuelve el valor numérico que corresponde a un carácter.</li>
    <li><span style="color: #000000;">chr</span>(&nbsp; ) &lt;-- devuelve el carácter que corresponde a un valor numérico.</li>
</ul>
<p><span style="text-decoration: underline;">Otras funciones interesantes</span></p>
<ul>
    <li><span style="color: #000000;">type</span>(&nbsp; ) &lt;-- devuelve el tipo de un elemento (int, float, string, etc).</li>
    <li><span style="color: #000000;">id</span>(&nbsp; ) &lt;-- devuelve el identificador que Python crea para cada objeto.</li>
    <li><span style="color: #000000;">input</span>(&nbsp; ) &lt;-- permite introducir una cadena de texto por el teclado. Ejemplo: <br>&nbsp;&nbsp;&nbsp; edad =&nbsp;&nbsp; int( input("Introduce tu edad:") )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &lt;--- almacenará en la variable edad el número introducido.<br>&nbsp;&nbsp;&nbsp;&nbsp; <strong>nota</strong>: <em>nadie se responsabiliza de que el usuario introduzca la información correctamente.</em></li>
    <li><span style="color: #000000;">id</span>( ) &lt;--- devuelvel el código de identidad de un objeto. <em></em></li>
</ul>
<p>más información: <a href="http://pyspanishdoc.sourceforge.net/lib/built-in-funcs.html" target="_blank">enlace</a></p>
<p></p>
<p><span style="text-decoration: underline;"><strong>MÓDULOS E IMPORTACIÓN DE FUNCIONES Y VARIABLES</strong></span></p>
<p style="margin-left: 30px;">Python proporciona otras muchas funciones. Estas funciones no están directamente disponibles cuando iniciamos la sesión o un programa. Antes de utilizarlas hemos de indicar a Python que las importe. Para facilitar la importación Python agrupa las funciones
    en módulos. Así, el módulo&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://docs.python.org/3/library/math.html" target="_blank">math</a>&nbsp;&nbsp; contiene multitud de funciones matemáticas. Para importar una función de un módulo utilizaremos la siguiente
    sentencia:
</p>
<p style="margin-left: 30px;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #000000;"> from</span></strong><span style="color: #000000;">&nbsp; nombre_módulo&nbsp;&nbsp;&nbsp; <strong>import</strong>&nbsp;&nbsp;&nbsp; nombre_función</span></p>
<p style="margin-left: 30px;">Así, para importar la función&nbsp; <span style="color: #000000;">sin</span>(&nbsp; )&nbsp; que devuelve el el seno de un ángulo en radianes:</p>
<p style="margin-left: 30px;"><strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #000000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; from math&nbsp; import&nbsp; sin</span></strong></p>
<p style="margin-left: 30px;">Ahora ya podemos utilizar la función&nbsp;&nbsp; sin:</p>
<p style="margin-left: 30px;">&nbsp;&nbsp;&nbsp; &gt;&gt;&gt; print ( sin( 1) )&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;--- mostrará&nbsp; 0.84147</p>
<p style="margin-left: 30px;">Para importar todas las funciones de un módulo puede utilizar el comodín "*".</p>
<p style="margin-left: 30px;"><span style="color: #000000;"><strong>from&nbsp; math&nbsp; import&nbsp; *&nbsp;&nbsp;&nbsp;</strong>&nbsp;</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;---
    importará todas las funciones y constantes del módulo math</p>
<p style="margin-left: 30px;">El problema de importar de esta manera está en que un usuario en sus programas puede utilizar una variable con el mismo nombre que una función dando lugar a posibles conflictos. Ejemplo:</p>
<div style="margin-left: 60px;" class="editor-indent">
    <p style="margin-left: 30px;"><span style="color: #000000;">sin&nbsp;&nbsp; =&nbsp;&nbsp; 33</span><br><span style="color: #000000;">from math import *</span><br><span style="color: #000000;">print( sin )</span></p>
</div>
<p style="margin-left: 30px;">El código anterior <span style="text-decoration: underline;"><strong>dará un error</strong></span>, pues dentro de math existe una función que se llama <strong>sin</strong> y como se ha importado después de declarar la variable para Python <strong>sin</strong> es una función. Si se escribe el el siguiente orden:</p>
<p></p>
<div style="margin-left: 30px;">
    <div style="margin-left: 60px;" class="editor-indent">
        <p style="margin-left: 30px;">from math import *<br>sin&nbsp;&nbsp; =&nbsp;&nbsp; 33<br>print( sin ( 1 ) )</p>
    </div>
    <p style="margin-left: 30px;"><span style="text-decoration: underline;"><strong>dará un error</strong></span>, pues al declararse la variable <strong>sin</strong> después de importar las funciones de math, a partir de ese momento sin pasa a ser una variable y no una función.</p>
    <p style="margin-left: 30px;">Para evitar este problema es mejor importar las funciones de otra forma:</p>
    <p style="margin-left: 30px;">import nombre_módulo</p>
    <p style="margin-left: 30px;">Utilizando este formato, para utilizar una función o constante que esté definida dentro de un módulo utilizaremos el formato:</p>
    <p style="margin-left: 30px;"><span style="color: #000000;">nombre_módulo</span><span style="color: #ff0000;">.</span><span style="color: #000000;">nombre_función</span>( ... )</p>
    <p style="margin-left: 30px;">Ejemplo:</p>
    <div style="margin-left: 60px;" class="editor-indent">
        <p style="margin-left: 30px;"><span style="color: #000000;">import math</span><br><span style="color: #000000;">sin = 0.58</span><br><span style="color: #000000;">print ( math.sin ( sin ) )</span></p>
    </div>
    <p style="margin-left: 30px;">De esta manera no crea confusión y podemos declarar las variables con el nombre que deseemos.</p>
    <p style="margin-left: 30px;">Existen multitud de módulos, cada uno de ellos especializado en un campo: diseño de aplicaciones web, diseño de interfaces de usuario, compresión de datos, criptografía, multimedia, etc. Y constantemente aparecen nuevos módulos. Cualquier programador
        de Python puede crearse sus propios módulos.</p>
    <p style="margin-left: 30px;">El módulo&nbsp;&nbsp;&nbsp;&nbsp; sys&nbsp;&nbsp; contine funciones para acceder al sistema operativo y constantes dependientes del ordenador.</p>
    <p style="margin-left: 30px;"><a href="https://docs.python.org/es/3/library/math.html" target="_blank">Módulos numéricos y matemáticos</a>.</p>
    <p style="margin-left: 30px;"><a href="https://docs.python.org/3/library/filesys.html" target="_blank">Módulos de acceso a ficheros y directorios</a></p>
    <p style="margin-left: 30px;"><a href="https://docs.python.org/3/library/python.html" target="_blank">Módulo de servicios en tiempo de ejecución</a></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
</div>