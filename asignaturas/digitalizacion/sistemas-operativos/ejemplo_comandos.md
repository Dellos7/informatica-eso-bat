---
layout: default
title: Guía para clase – Ejemplo de comandos (fotos_animales.zip)
description: Tema 1 - Sistemas Operativos
---

# Guía para el profesor – Demostración de comandos en clase

Guión rápido y directo para proyectar e ir explicando los comandos paso a paso con los alumnos antes de la Actividad 3.

---

### 1. ¿Quién soy y dónde estoy? (`whoami`, `pwd`, `ls`)

Explicar que la terminal siempre opera dentro de una carpeta concreta:

```bash
whoami    # Muestra tu nombre de usuario (debe verse en las capturas)
pwd       # Muestra la ruta actual (/home/usuario)
ls        # Lista archivos y carpetas
ls -l     # Lista detallada (permisos, tamaños y fechas)
```

---

### 2. Crear carpeta de trabajo y entrar (`mkdir`, `cd`)

```bash
mkdir Ejemplo-Clase
cd Ejemplo-Clase
pwd       # Comprobar que estamos dentro
ls        # Comprobar que está vacía
```

*Recordar:* con `cd ..` se retrocede un nivel.

---

### 3. Descargar el archivo con fotos (`wget`)

Descargar directamente de la web sin usar el navegador:

```bash
wget dlopezcastellote.dev/informatica-eso-bat/asignaturas/digitalizacion/sistemas-operativos/fotos_animales.zip
ls -lh    # Comprobar que se ha descargado el .zip
```

---

### 4. Descomprimir (`unzip`)

```bash
unzip fotos_animales.zip
ls        # Ver las fotos extraídas y bienvenida.txt
```

---

### 5. Ver contenido de un archivo de texto (`cat`, `nano`)

```bash
cat bienvenida.txt    # Muestra el texto directamente en pantalla
nano bienvenida.txt   # Editor Nano (Guardar: Ctrl+O, Enter | Salir: Ctrl+X)
```

---

### 6. Crear carpetas de clasificación (`mkdir`)

Crear las 3 carpetas a la vez:

```bash
mkdir Perros Gatos Conejos
ls -l     # Explicar que las carpetas se muestran en azul
```

---

### 7. Renombrar y explicar el uso de comillas (`mv`)

Explicar que `mv` sirve tanto para mover como para renombrar:

1. **Renombrar normal (sin espacios):**
   ```bash
   mv cachorro-pomsky_98.webp pomsky.webp
   ```

2. **Renombrar con espacios (¡Concepto clave para la Actividad 3!):**
   * Mostrar primero el error sin comillas:
     ```bash
     mv perro pastor aleman.jpg pastor_aleman.jpg    # ¡Dará error de argumentos!
     ```
   * Explicar que bash separa las palabras por espacios si no van entre comillas.
   * Mostrar la solución correcta:
     ```bash
     mv "perro pastor aleman.jpg" pastor_aleman.jpg
     ```
   * *Truco:* escribir `mv "per` y pulsar **Tabulador** para autocompletar.

---

### 8. Mover y clasificar archivos (`mv`)

1. **Mover varios archivos indicando sus nombres:**
   ```bash
   mv gato.png gato1.jpg gato2.jpg pisco-y-el-gato-con-botas.jpeg Gatos/
   ```

2. **Mover usando comodines (`*`):**
   ```bash
   mv conejo* Conejos/
   ```

3. **Mover los perros:**
   ```bash
   mv perros.jpg pomsky.webp pastor_aleman.jpg razas-de-perro-toy-t.jpg.webp los-10-sonidos-principales-del-perro.jpg Perros/
   ```

4. **Comprobar que no queda nada suelto fuera:**
   ```bash
   ls
   ls Perros
   ls Gatos
   ls Conejos
   ```

---

### 9. Crear y borrar carpeta vacía (`mkdir`, `rmdir`)

Explicar que `rmdir` solo permite borrar carpetas totalmente vacías por seguridad:

```bash
mkdir Bebidas
ls
rmdir Bebidas
ls
```

---

### 10. Copiar archivos a Favoritos (`cp`)

Explicar la diferencia entre `mv` (mueve y quita del origen) y `cp` (copia manteniendo el original):

```bash
mkdir Favoritos
cp Gatos/gato1.jpg Favoritos/
cp Perros/pomsky.webp Favoritos/

ls Favoritos    # Se ven las dos fotos copiadas
ls Gatos        # gato1.jpg continúa existiendo en su carpeta original
```

---

### 11. Crear archivo vacío de autoría (`touch`)

```bash
touch autor_profesor.txt
ls -l autor_profesor.txt    # Comprobar que ocupa 0 bytes
```

---

### 12. Limpieza y empaquetado final (`rm`, `zip -r`)

1. **Eliminar el zip descargado inicialmente:**
   ```bash
   rm fotos_animales.zip
   ```

2. **Comprimir toda la práctica:**
   ```bash
   zip -r animales.zip Perros Gatos Conejos Favoritos bienvenida.txt autor_profesor.txt
   ```
   *Explicar que `-r` (recursivo) es obligatorio para incluir subcarpetas y sus contenidos.*

3. **Verificar el zip sin descomprimir:**
   ```bash
   unzip -l animales.zip
   ```