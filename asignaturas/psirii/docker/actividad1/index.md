---
layout: default
title: Actividad 1. Orquestación multiservicio con Docker Compose
description: Verificación/instalación de Docker en Lliurex y despliegue de un stack multiservicio (Nextcloud + MariaDB) orquestado con Docker Compose.
---

# Actividad 1. Orquestación multiservicio con Docker Compose (Nextcloud + MariaDB)

En esta actividad darás tus primeros pasos prácticos con la contenerización. En lugar de instalar servicios uno a uno de forma tradicional, utilizarás **Docker Compose** para desplegar de forma automatizada e integrada una infraestructura completa de **nube privada (Nextcloud)** respaldada por una **base de datos (MariaDB)** sobre tu sistema Lliurex.

---

## 🎯 Objetivos de la actividad

1. **Entorno de Contenerización:** Verificar o instalar **Docker Engine** y **Docker Compose** en el sistema operativo **Lliurex** de la máquina de clase, configurando los permisos de usuario requeridos.
2. **Orquestación Multiservicio:** Crear y comprender la estructura de un archivo `docker-compose.yml` para desplegar varios contenedores interconectados en una red aislada.
3. **Persistencia de Datos:** Configurar volúmenes de Docker para garantizar que los datos de la base de datos y los archivos almacenados en la nube permanezcan a salvo tras reiniciar los contenedores.
4. **Gestión de Variables de Entorno:** Comunicar servicios entre sí (Nextcloud con MariaDB) utilizando variables de entorno de forma segura.
5. **Comprobación y Pruebas de Persistencia:** Acceder a la plataforma desde `http://localhost:8080`, completar la configuración inicial y verificar el correcto funcionamiento y persistencia del stack.
6. **Seguridad:** Almacenar todas las credenciales de administración y bases de datos generadas en **Bitwarden**.

---

## 📌 Paso a paso detallado

### Paso 1: Verificación de Docker en Lliurex y registro en Bitwarden
1. Abre una terminal en tu equipo de clase con Lliurex (`Ctrl + Alt + T`).
2. Comprueba si Docker está instalado ejecutando:
   ```bash
   docker --version
   docker compose version
   ```
3. Si no estuviera instalado, ejecuta los siguientes comandos de instalación:
   ```bash
   sudo apt update
   sudo apt install -y docker.io docker-compose-v2
   sudo systemctl enable --now docker
   sudo usermod -aG docker $USER
   newgrp docker
   ```
4. Realiza una prueba ejecutando `docker run hello-world` para confirmar que puedes ejecutar contenedores sin necesidad de usar `sudo`.

---

### Paso 2: Creación de la carpeta del proyecto
Crea una carpeta en tu directorio personal para guardar los archivos de configuración del proyecto y entra en ella:

```bash
mkdir -p ~/docker-nextcloud
cd ~/docker-nextcloud
```

---

### Paso 3: Creación del archivo `docker-compose.yml`
Crea el archivo de composición multiservicio utilizando un editor de texto (como Nano o VS Code):

```bash
nano docker-compose.yml
```

Copia e introduce el siguiente código en el archivo `docker-compose.yml`:

```yaml
version: '3.8'

services:
  # Servicio 1: Base de datos MariaDB
  db:
    image: mariadb:10.6
    container_name: nextcloud-db
    restart: always
    command: --transaction-isolation=READ-COMMITTED --binlog-format=ROW
    volumes:
      - db_data:/var/lib/mysql
    environment:
      - MYSQL_ROOT_PASSWORD=ClaveSeguraRoot_2026!
      - MYSQL_PASSWORD=ClaveUserNextcloud_2026!
      - MYSQL_DATABASE=nextcloud_db
      - MYSQL_USER=nextcloud_user

  # Servicio 2: Servidor de Nube Privada Nextcloud
  app:
    image: nextcloud:latest
    container_name: nextcloud-app
    restart: always
    ports:
      - "8080:80"
    links:
      - db
    volumes:
      - nextcloud_data:/var/www/html
    environment:
      - MYSQL_HOST=db
      - MYSQL_DATABASE=nextcloud_db
      - MYSQL_USER=nextcloud_user
      - MYSQL_PASSWORD=ClaveUserNextcloud_2026!

volumes:
  db_data:
  nextcloud_data:
```

> **Importante:** Guarda en tu bóveda de **Bitwarden** la contraseña del usuario `root` de MySQL (`MYSQL_ROOT_PASSWORD`), la contraseña del usuario de Nextcloud (`MYSQL_PASSWORD`) y el nombre de la base de datos.
{: .alert-info}

---

### Paso 4: Despliegue del stack con Docker Compose
1. En la terminal dentro de la carpeta `~/docker-nextcloud`, arranca todo el stack en segundo plano:
   ```bash
   docker compose up -d
   ```
2. Observa cómo Docker descarga automáticamente las imágenes oficiales de `mariadb` y `nextcloud` desde Docker Hub y las pone en marcha.
3. Comprueba el estado de los contenedores ejecutando:
   ```bash
   docker ps
   ```
   *Deberías ver dos contenedores activos (`nextcloud-db` y `nextcloud-app`).*
4. Si quieres ver los logs del proceso de arranque, puedes ejecutar:
   ```bash
   docker compose logs -f
   ```

---

### Paso 5: Configuración inicial de la nube Nextcloud
1. Abre el navegador web en Lliurex y accede a la dirección: `http://localhost:8080`.
2. Verás la pantalla de instalación inicial de **Nextcloud**:
   - **Crear un usuario administrador:** Define tu usuario (ejemplo: `admin_tunombre`) y una contraseña segura.
   - Guardar inmediatamente este usuario y contraseña en **Bitwarden**.
3. Haz clic en **Completar la instalación** y espera a que Nextcloud configure el entorno.
4. Una vez dentro de la interfaz de Nextcloud, sube un archivo de prueba (un documento o una imagen) para comprobar que la nube funciona.

---

### Paso 6: Prueba de persistencia de datos
Para verificar el poder de los volúmenes en Docker:

1. Detiene y elimina los contenedores en la terminal:
   ```bash
   docker compose down
   ```
   *(Comprueba en el navegador que `http://localhost:8080` ya no carga).*
2. Vuelve a arrancar el stack:
   ```bash
   docker compose up -d
   ```
3. Vuelve a acceder a `http://localhost:8080`.
4. Comprueba que la sesión sigue activa y que **el archivo que habías subido sigue intacto**. ¡Los datos han persistido gracias a los volúmenes!

---

## 📽️ Recursos y material de apoyo

👉 [Documentación oficial de Docker Compose](https://docs.docker.com/compose/)  
👉 [Imagen oficial de Nextcloud en Docker Hub](https://hub.docker.com/_/nextcloud)  
👉 [Guía rápida de comandos Docker CLI](https://docs.docker.com/get-started/)

---

## 📤 Entrega y Evaluación

Deberás entregar en **Aules** los siguientes elementos:
1. **Documento (PDF o Word)** con un informe de la actividad que contenga:
   - Captura de la terminal mostrando la ejecución correcta del comando `docker ps` con los contenedores activos.
   - Captura de la bóveda de **Bitwarden** registrando las credenciales de la base de datos y de la cuenta de administrador de Nextcloud.
   - Capturas de la interfaz de **Nextcloud** funcionando en `http://localhost:8080` con el archivo de prueba subido.
   - Breve reflexión contestando: ¿Por qué la información no se perdió tras ejecutar `docker compose down` y volver a arrancar?
2. **El archivo `docker-compose.yml`** utilizado para el despliegue.

Una vez realizada la entrega en Aules, **enseña el trabajo al profesor en clase** para su comprobación directa en el terminal.

---

## 📊 Rúbrica de Evaluación (máx. 10 puntos)

| Criterio | Insuficiente (0 pts) | Básico (0.5 pts) | Adecuado (1 pt) | Excelente (2 pts) |
| :--- | :--- | :--- | :--- | :--- |
| **Gestión de Seguridad (Bitwarden)** | No utiliza Bitwarden para registrar las credenciales del entorno Docker. | Registra credenciales de forma incompleta o poco organizada. | Utiliza Bitwarden registrando la mayoría de claves (BD y admin Nextcloud). | Registra y organiza adecuadamente en Bitwarden todas las claves generadas en el stack. |
| **Verificación e Instalación de Docker en Lliurex** | No consigue ejecutar Docker ni configurar permisos en la máquina de clase. | Ejecuta Docker únicamente utilizando `sudo` o con errores de permisos. | Verifica la instalación de Docker Engine y ejecuta contenedores básicos correctamente. | Configura el grupo `docker` sin necesidad de `sudo`, probando la instalación de forma autónoma. |
| **Orquestación con Docker Compose** | No crea el archivo `docker-compose.yml` o contiene errores sintácticos graves. | Crea el archivo `docker-compose.yml` con ayuda continua o problemas en la indentación YAML. | Estructura correctamente el archivo `docker-compose.yml` desplegando los dos servicios (db y app). | Configuración limpia e impecable del archivo YAML, personalizando variables y volúmenes con criterio. |
| **Funcionamiento y Prueba de Persistencia** | Los servicios no arrancan o la información se pierde al reiniciar los contenedores. | Arranca los contenedores pero presenta fallos de conexión entre Nextcloud y MariaDB. | Despliega Nextcloud en `localhost:8080`, completa el asistente y verifica el servicio. | Verifica con éxito la persistencia de datos comprobando la conservación de los archivos tras un `docker compose down`. |
| **Entrega en plazo y documentación** | No entrega la actividad o presenta un retraso injustificado. | Entrega con retraso importante o faltan entregables en Aules. | Entrega con un pequeño retraso o entrega incompleta (falta documento o YAML). | Entrega puntual en Aules del informe con capturas del proceso, el archivo YAML y comprobación en el aula. |
