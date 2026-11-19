---
layout: default
title: 6. Ejercicios interactivos de repaso
description: Autoevaluación interactiva sobre hardware, puertos, periféricos, sostenibilidad y Writer (Tema 3)
---

# 6. Ejercicios interactivos de repaso

Pon a prueba lo que has aprendido en el **Tema 3** con estos tres retos interactivos antes de enfrentarte a las actividades prácticas y al cuestionario final en Aules.

---

## 🧩 Reto 1: ¿Qué componente de la Placa Base o Puerto Trasero soy?

Lee la pista técnica y selecciona el componente o conector correcto en cada tarjeta:

<div id="reto1-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin: 20px 0;">
  <div style="border: 2px solid #cbd5e1; border-radius: 10px; padding: 14px; background: #f8fafc;">
    <p style="margin-top:0; font-weight:bold; color:#0f172a;">1. "Soy la memoria de trabajo temporal (tu mesa de estudio). Si se corta la luz sin guardar, todo lo que tengo dentro se borra."</p>
    <select onchange="checkReto1(this, 'ram')" style="width:100%; padding:8px; border-radius:6px; border:1px solid #94a3b8;">
      <option value="">-- Elige un componente --</option>
      <option value="ssd">Unidad SSD NVMe M.2</option>
      <option value="ram">Memoria RAM (DDR4 / DDR5)</option>
      <option value="cpu">Zócalo del procesador (CPU)</option>
      <option value="pila">Pila CMOS CR2032</option>
    </select>
    <p class="fb" style="margin:8px 0 0 0; font-size:0.9em; font-weight:bold;"></p>
  </div>

  <div style="border: 2px solid #cbd5e1; border-radius: 10px; padding: 14px; background: #f8fafc;">
    <p style="margin-top:0; font-weight:bold; color:#0f172a;">2. "Tengo el tamaño de un chicle, me atornillo directo a la ranura M.2 de la placa base y guardo tus archivos a más de 3.500 MB/s."</p>
    <select onchange="checkReto1(this, 'nvme')" style="width:100%; padding:8px; border-radius:6px; border:1px solid #94a3b8;">
      <option value="">-- Elige un componente --</option>
      <option value="hdd">Disco duro mecánico (HDD)</option>
      <option value="nvme">Unidad SSD NVMe M.2</option>
      <option value="ram">Módulo de Memoria RAM</option>
      <option value="psu">Fuente de alimentación (PSU)</option>
    </select>
    <p class="fb" style="margin:8px 0 0 0; font-size:0.9em; font-weight:bold;"></p>
  </div>

  <div style="border: 2px solid #cbd5e1; border-radius: 10px; padding: 14px; background: #f8fafc;">
    <p style="margin-top:0; font-weight:bold; color:#0f172a;">3. "Soy un conector ovalado, pequeño y reversible (entro igual del derecho que del revés). Sirvo para datos ultrarrápidos, carga y vídeo."</p>
    <select onchange="checkReto1(this, 'usbc')" style="width:100%; padding:8px; border-radius:6px; border:1px solid #94a3b8;">
      <option value="">-- Elige un puerto --</option>
      <option value="vga">Puerto VGA azul</option>
      <option value="rj45">Puerto RJ-45 Ethernet</option>
      <option value="usbc">Puerto USB-C</option>
      <option value="ps2">Puerto redondo PS/2</option>
    </select>
    <p class="fb" style="margin:8px 0 0 0; font-size:0.9em; font-weight:bold;"></p>
  </div>

  <div style="border: 2px solid #cbd5e1; border-radius: 10px; padding: 14px; background: #f8fafc;">
    <p style="margin-top:0; font-weight:bold; color:#0f172a;">4. "Tengo una pestaña que hace clic y dos lucecitas LED. Si me conectas un cable desde el router, tendrás Internet a máxima velocidad y sin cortes."</p>
    <select onchange="checkReto1(this, 'rj45')" style="width:100%; padding:8px; border-radius:6px; border:1px solid #94a3b8;">
      <option value="">-- Elige un puerto --</option>
      <option value="hdmi">Puerto HDMI</option>
      <option value="jack">Jack de audio verde 3,5 mm</option>
      <option value="rj45">Puerto RJ-45 (Ethernet / LAN)</option>
      <option value="usba">Puerto USB-A 2.0</option>
    </select>
    <p class="fb" style="margin:8px 0 0 0; font-size:0.9em; font-weight:bold;"></p>
  </div>
</div>

---

## 🔄 Reto 2: Clasificador de Periféricos (Entrada, Salida o Entrada/Salida)

Clasifica cada dispositivo según el sentido en que viaja la información:

<div id="reto2-container" style="background:#f1f5f9; border:2px solid #94a3b8; border-radius:12px; padding:16px; margin:20px 0;">
  <div style="display:grid; grid-template-columns: 1fr auto; gap:10px; align-items:center; margin-bottom:10px; border-bottom:1px solid #cbd5e1; padding-bottom:8px;">
    <span><strong>1. Micrófono de grabación</strong> (solo capta nuestra voz hacia el PC)</span>
    <select onchange="checkReto1(this, 'E')" style="padding:6px; border-radius:6px;">
      <option value="">Clasificar...</option><option value="E">📥 Entrada</option><option value="S">📤 Salida</option><option value="ES">🔄 Entrada/Salida (Mixto)</option>
    </select>
  </div>
  <div style="display:grid; grid-template-columns: 1fr auto; gap:10px; align-items:center; margin-bottom:10px; border-bottom:1px solid #cbd5e1; padding-bottom:8px;">
    <span><strong>2. Pantalla táctil de una tablet o pizarra interactiva</strong> (muestra imagen y detecta nuestros dedos)</span>
    <select onchange="checkReto1(this, 'ES')" style="padding:6px; border-radius:6px;">
      <option value="">Clasificar...</option><option value="E">📥 Entrada</option><option value="S">📤 Salida</option><option value="ES">🔄 Entrada/Salida (Mixto)</option>
    </select>
  </div>
  <div style="display:grid; grid-template-columns: 1fr auto; gap:10px; align-items:center; margin-bottom:10px; border-bottom:1px solid #cbd5e1; padding-bottom:8px;">
    <span><strong>3. Proyector del aula de informática</strong> (proyecta la imagen del ordenador en la pared)</span>
    <select onchange="checkReto1(this, 'S')" style="padding:6px; border-radius:6px;">
      <option value="">Clasificar...</option><option value="E">📥 Entrada</option><option value="S">📤 Salida</option><option value="ES">🔄 Entrada/Salida (Mixto)</option>
    </select>
  </div>
  <div style="display:grid; grid-template-columns: 1fr auto; gap:10px; align-items:center; margin-bottom:10px; border-bottom:1px solid #cbd5e1; padding-bottom:8px;">
    <span><strong>4. Impresora multifunción</strong> (imprime documentos en papel y también tiene escáner arriba)</span>
    <select onchange="checkReto1(this, 'ES')" style="padding:6px; border-radius:6px;">
      <option value="">Clasificar...</option><option value="E">📥 Entrada</option><option value="S">📤 Salida</option><option value="ES">🔄 Entrada/Salida (Mixto)</option>
    </select>
  </div>
  <div style="display:grid; grid-template-columns: 1fr auto; gap:10px; align-items:center;">
    <span><strong>5. Webcam (cámara web sin altavoz)</strong> (captura vídeo hacia el ordenador)</span>
    <select onchange="checkReto1(this, 'E')" style="padding:6px; border-radius:6px;">
      <option value="">Clasificar...</option><option value="E">📥 Entrada</option><option value="S">📤 Salida</option><option value="ES">🔄 Entrada/Salida (Mixto)</option>
    </select>
  </div>
</div>

---

## 🏆 Reto 3: Mini-Test de Entrenamiento para Aules (6 preguntas)

Comprueba si dominas tanto la parte de **Equipos, Redes y Sostenibilidad** como las herramientas de **LibreOffice Writer y Draw**:

<div id="quiz-repaso" style="background:#ffffff; border:2px solid #2563eb; border-radius:12px; padding:18px; margin:20px 0;">
  <div style="margin-bottom:16px;">
    <p style="font-weight:bold; margin-bottom:6px;">1. ¿Qué puertos del panel trasero transmiten a la vez vídeo digital de alta definición y sonido por un único cable?</p>
    <label style="display:block;"><input type="radio" name="q1" value="a"> El antiguo puerto VGA azul y el puerto PS/2 morado.</label>
    <label style="display:block;"><input type="radio" name="q1" value="b"> Los puertos HDMI y DisplayPort (además de USB-C con modo vídeo).</label>
    <label style="display:block;"><input type="radio" name="q1" value="c"> El puerto RJ-45 y el conector Jack rosa de 3,5 mm.</label>
  </div>

  <div style="margin-bottom:16px;">
    <p style="font-weight:bold; margin-bottom:6px;">2. Un ordenador de hace 6 años tarda 4 minutos en encenderse porque aún lleva un disco duro mecánico (HDD). ¿Cuál es la decisión más sostenible e inteligente?</p>
    <label style="display:block;"><input type="radio" name="q2" value="a"> Tirar el ordenador entero al contenedor gris de la calle y comprar uno nuevo de 1.200 €.</label>
    <label style="display:block;"><input type="radio" name="q2" value="b"> Sustituir el disco mecánico HDD por una unidad sólida SSD (y ampliar la RAM si hace falta), alargando su vida varios años.</label>
    <label style="display:block;"><input type="radio" name="q2" value="c"> Cambiar el cable del ratón por uno de color rojo.</label>
  </div>

  <div style="margin-bottom:16px;">
    <p style="font-weight:bold; margin-bottom:6px;">3. Si necesitas trabajar con un ordenador fijo en tu habitación o en el aula para hacer videollamadas o jugar online sin cortes ni interferencias, ¿qué conexión a Internet debes elegir?</p>
    <label style="display:block;"><input type="radio" name="q3" value="a"> Fibra óptica hasta el router conectada por cable Ethernet al puerto RJ-45 del PC.</label>
    <label style="display:block;"><input type="radio" name="q3" value="b"> Conexión Bluetooth emparejada con unos auriculares.</label>
    <label style="display:block;"><input type="radio" name="q3" value="c"> Red móvil 3G desde el sótano.</label>
  </div>

  <div style="margin-bottom:16px;">
    <p style="font-weight:bold; margin-bottom:6px;">4. ¿Qué significa la condición "BY" (icono de una persona) presente en las licencias Creative Commons (como CC BY o CC BY-SA)?</p>
    <label style="display:block;"><input type="radio" name="q4" value="a"> Que está prohibido usar la imagen en colegios e institutos.</label>
    <label style="display:block;"><input type="radio" name="q4" value="b"> Atribución / Reconocimiento: debemos citar siempre al autor/a original, la fuente y la licencia.</label>
    <label style="display:block;"><input type="radio" name="q4" value="c"> Que la imagen se borra sola a las 24 horas.</label>
  </div>

  <div style="margin-bottom:16px;">
    <p style="font-weight:bold; margin-bottom:6px;">5. En LibreOffice Writer (Actividad 2), ¿cómo conseguimos que en el pie de página aparezca "Página 2 de 4" y se actualice automáticamente sin numerar la portada?</p>
    <label style="display:block;"><input type="radio" name="q5" value="a"> Escribiendo a mano con el teclado el número "2" en el pie de página.</label>
    <label style="display:block;"><input type="radio" name="q5" value="b"> Aplicando el estilo "Primera página" en la portada e insertando los campos dinámicos "Número de página" y "Total de páginas".</label>
    <label style="display:block;"><input type="radio" name="q5" value="c"> Pulsando la tecla F2 en Dolphin.</label>
  </div>

  <div style="margin-bottom:16px;">
    <p style="font-weight:bold; margin-bottom:6px;">6. ¿Qué herramientas utilizamos en la nube de OneDrive (@edu.gva.es) para crear mapas mentales online y coeditar informes en grupo en tiempo real?</p>
    <label style="display:block;"><input type="radio" name="q6" value="a"> Microsoft Visio Online (.vsdx) para diagramas y Microsoft Word Online (.docx) para coedición en grupo con comentarios.</label>
    <label style="display:block;"><input type="radio" name="q6" value="b"> El reproductor VLC (.mp3) y el compresor Ark (.zip).</label>
    <label style="display:block;"><input type="radio" name="q6" value="c"> Únicamente el bloc de notas KWrite sin conexión a Internet.</label>
  </div>

  <button onclick="gradeQuizRepaso()" style="background:#2563eb; color:#ffffff; border:none; padding:10px 20px; border-radius:8px; font-weight:bold; cursor:pointer;">✅ Comprobar mis respuestas</button>
  <p id="quiz-repaso-result" style="margin-top:12px; font-weight:bold; font-size:1.05em;"></p>
</div>

<script>
function checkReto1(sel, correctVal) {
  var parent = sel.parentElement;
  var fb = parent.querySelector('.fb');
  if (!sel.value) {
    sel.style.borderColor = '#94a3b8';
    sel.style.backgroundColor = '#ffffff';
    if (fb) fb.textContent = '';
    return;
  }
  if (sel.value === correctVal) {
    sel.style.borderColor = '#059669';
    sel.style.backgroundColor = '#d1fae5';
    if (fb) {
      fb.style.color = '#065f46';
      fb.textContent = '✅ ¡Correcto!';
    }
  } else {
    sel.style.borderColor = '#dc2626';
    sel.style.backgroundColor = '#fee2e2';
    if (fb) {
      fb.style.color = '#991b1b';
      fb.textContent = '❌ Revisa los apuntes e inténtalo de nuevo.';
    }
  }
}

function gradeQuizRepaso() {
  var answers = { q1: 'b', q2: 'b', q3: 'a', q4: 'b', q5: 'b', q6: 'a' };
  var score = 0;
  var total = 6;
  for (var k in answers) {
    var chosen = document.querySelector('input[name="' + k + '"]:checked');
    if (chosen && chosen.value === answers[k]) {
      score++;
    }
  }
  var res = document.getElementById('quiz-repaso-result');
  if (score === total) {
    res.style.color = '#059669';
    res.textContent = '🎉 ¡Excelente! Has acertado ' + score + ' de ' + total + '. ¡Estás 100% preparado/a para las actividades y el test de Aules!';
  } else if (score >= 4) {
    res.style.color = '#d97706';
    res.textContent = '👍 Buen trabajo: ' + score + ' de ' + total + ' aciertos. Revisa las preguntas que te han faltado para llegar al 6/6.';
  } else {
    res.style.color = '#dc2626';
    res.textContent = '📚 Has obtenido ' + score + ' de ' + total + '. Repasa las páginas de apuntes antes de volver a intentarlo.';
  }
}
</script>

---

[👈 Anterior: 5. Guía práctica de Writer y Draw](./guia_practica_writer) | [🏠 Volver al inicio del Tema 3](./index) | [🛠️ Ir a la Actividad 1](./actividad1/)
