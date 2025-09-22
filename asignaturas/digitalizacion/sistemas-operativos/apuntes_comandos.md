---
layout: default
title: Apuntes Comandos Linux
description: Tema 1
---

# Comandos básicos

| **Comando** | **Descripción** | **Ejemplo de uso** |
|-------------|-----------------|--------------------|
| `pwd` | Indica el directorio actual en el que nos encontramos. | `pwd` |
| `ls` | Lista las carpetas y archivos existentes en el directorio actual. | `ls` |
| `ls -l` | Lista las carpetas y archivos en forma de tabla mostrando propiedades. | `ls -l` |
| `cd` | Cambia del directorio actual a otro. | `cd Documentos/UD1` |
| `mkdir` | Crea una carpeta dentro del directorio actual. | `mkdir UD2` |
| `touch` | Crea un archivo de texto dentro del directorio actual. | `touch datos.txt` |
| `nano` | Abre un archivo de texto en el editor Nano para modificarlo desde terminal. | `nano datos.txt` |
| `history` | Muestra el historial de los comandos ejecutados en la terminal. | `history` |
| `date` | Muestra la fecha y hora actual del sistema. | `date` |
| `cp` | Copia un archivo a otra localización. | `cp datos.txt Documentos/UD2` |
| `cp -r` | Copia un directorio y su contenido a otra localización. | `cp -r Documentos/UD2 Descargas` |
| `mv` | Mueve un archivo o directorio a otra localización. | `mv datos.txt Documentos/UD1` |
| `rm` | Elimina un archivo. | `rm datos.txt` |
| `rmdir` | Elimina un directorio vacío. | `rmdir Documentos/UD2` |
| `wget` | Descarga un archivo de internet a través de su URL. | `wget https://davidlopezcastellote.com/1eso/que-es-dns.png` |
| `unzip` | Descomprime un archivo `.zip`. | `unzip fotos.zip` |
| `zip` | Comprime varios archivos en un único `.zip`. | `zip fotos.zip foto1.png foto2.jpg foto3.webp` |
| `zip -r` | Comprime una carpeta con todas sus subcarpetas y archivos. | `zip -r fotos.zip Fotos` |
| `ssh` | Permite conectarse a un servidor remoto para gestionarlo. | `ssh usuario@ip` |
| `scp` | Copia archivos entre el ordenador local y un servidor. | `scp usuario@IP_servidor:/home/usuario/archivo /home/local/carpeta` |
