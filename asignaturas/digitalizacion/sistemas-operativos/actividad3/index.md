---
layout: default
title: Actividad 3 – Uso básico de la terminal en Linux (bash)
description: Tema 1
---

# Actividad 3 – Uso de SSH y SCP en Linux

![Estructura de carpetas de la actividad](./esquema_act3.jpg)

---

## Tareas

> [**APUNTES DE COMANDOS LINUX**](../apuntes_comandos)

Realiza las siguientes tareas **HACIENDO USO EXCLUSIVO DE LA TERMINAL**{: .rojo}:

1. **Conéctate por SSH** al servidor de la clase (revisa los apuntes de SSH y SCP):  
   - **IP del servidor**: `10.2.5.31`
   - **Usuario**: tu usuario de inicio de sesión en la clase  
   - **Contraseña**: tu contraseña de inicio de sesión en la clase  

2. Dentro del servidor, realiza lo siguiente:  
   - En tu carpeta personal, crea una carpeta llamada **Actividad-3**.  
   - Descarga el archivo comprimido:  
     **dlopezcastellote.dev/informatica-eso-bat/asignaturas/digitalizacion/sistemas-operativos/actividad3/frutas_y_verduras.zip**{: .verde}
   - Descomprime el archivo para extraer todas las fotos que contiene.  
   - Partiendo desde **Actividad-3**, crea toda la estructura de carpetas que aparece en la imagen de arriba.  
   - Organiza las fotos en las carpetas correspondientes, siguiendo esta clasificación:  
     - **Aguacate** → Fruta – Carnosas – Alto contenido en grasas  
     - **Almendra** → Fruta – Frutos secos – Con cáscara  
     - **Calabacín** → Verduras – Crecen encima de la tierra  
     - **Cebolla** → Verduras – Crecen debajo de la tierra  
     - **Ciruela** → Fruta – Carnosas – Bajo contenido en grasas  
     - **Coco** → Fruta – Carnosas – Alto contenido en grasas  
     - **Col** → Verduras – Crecen encima de la tierra  
     - **Dátiles** → Fruta – Frutos secos – Sin cáscara  
     - **Melón** → Fruta – Carnosas – Bajo contenido en grasas  
     - **Nuez** → Fruta – Frutos secos – Con cáscara  
     - **Olivas** → Fruta – Carnosas – Alto contenido en grasas  
     - **Pasas** → Fruta – Frutos secos – Sin cáscara  
     - **Patata** → Verduras – Crecen debajo de la tierra  
     - **Piña** → Fruta – Carnosas – Bajo contenido en grasas  
     - **Pipa** → Fruta – Frutos secos – Con cáscara  
     - **Pistacho** → Fruta – Frutos secos – Con cáscara  
     - **Zanahoria** → Verduras – Crecen debajo de la tierra  

3. **Modifica la estructura de Frutos secos**:  
   - Elimina los archivos dentro de **Frutas → Frutos secos → Sin cáscara**, pero no borres aún la carpeta.  
   - Elimina la carpeta **Sin cáscara**.  
   - Copia las imágenes de **Con cáscara** a la carpeta **Frutos secos**.  
   - Elimina las carpetas **Con cáscara** y **Sin cáscara**.  
   - 👉 Si lo haces bien, todas las imágenes de frutos secos quedarán en una sola carpeta (**Frutos secos**).

4. **Crea archivos de texto en cada carpeta final**:  
   - Para cada carpeta final (`alto_contenido_en_grasa`, `bajo_contenido_en_grasa`, `frutos_secos`, `crecen_debajo_de_la_tierra`, `crecen_encima_de_la_tierra`), crea un archivo de texto con el mismo nombre (usando guiones bajos).  
   - Dentro escribe los nombres de las frutas o verduras que contiene.  
   - Ejemplo: en `alto_contenido_en_grasa.txt` deben aparecer *Aguacate*, *Coco* y *Olivas*.

5. **Comprime** la carpeta **Actividad-3** en un archivo llamado **actividad-3.zip**.

6. **Borra** el archivo descargado de Internet (`frutas_y_verduras.zip`).

7. Ejecuta el comando `history` y **haz una captura de pantalla** con todos los comandos utilizados (debe verse tu usuario).

8. **Sal de la sesión SSH** con el comando `exit`.

9. **Descarga el archivo al ordenador local con SCP**:  
   - Copia `actividad-3.zip` desde el servidor a tu ordenador.  
   - **Recuerda**: en el comando `scp` deberás modificar tu **usuario real**, la **IP** del servidor y la **ruta local**.  
   - Ejemplo orientativo de sintaxis: `scp usuario@10.2.5.31:/home/usuario/Actividad-3/actividad-3.zip /ruta/local/que/elijas/`

---

## Entrega

En esta tarea de **Aules** debes subir:  
- **Captura de pantalla** del comando `history` mostrando todos los comandos y tu usuario.  
- El archivo **actividad-3.zip** que hayas descargado con SCP desde el servidor. *(El profesor comprobará que dicho archivo existe y está creado en el servidor).*

# Rúbrica – Actividad 0: Explorando el sistema de archivos en LliureX

| Criterio | Excelente (3-4 pts) | Bien (2-3 pts) | Suficiente (1-2 pts) | Insuficiente (0-1 pts) |
|----------|---------------------|----------------|-----------------------|------------------------|
| **Organización de carpetas** (4 pts) | Crea toda la estructura solicitada con total corrección y lógica. | Crea casi toda la estructura, con algún error menor. | Crea parte de la estructura, faltan algunas carpetas o nombres incorrectos. | No crea la estructura o la hace de forma incorrecta. |
| **Tipos de archivos** (2 pts) | Descarga y organiza 5 o más archivos de diferentes tipos. | Descarga al menos 4 archivos de distintos tipos. | Descarga al menos 3 archivos. | Descarga menos de 3 archivos o no los organiza. |
| **Documento extensiones.txt** (2 pts) | Archivo completo, con todos los programas identificados correctamente. | Archivo con la mayoría de programas identificados (1 error máximo). | Archivo incompleto o con varios errores. | No entrega el archivo o está muy incompleto. |
| **Árbol de carpetas** (2 pts) | Esquema claro, ordenado, bien representado y guardado en formato correcto. | Esquema correcto aunque con algunos detalles mejorables. | Esquema básico, incompleto o poco claro. | No entrega esquema o es incorrecto. |

**Puntuación total: /10**
