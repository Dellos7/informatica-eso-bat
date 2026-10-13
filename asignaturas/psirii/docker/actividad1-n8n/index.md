---
layout: default
title: Actividad 1 (Alternativa). Orquestación con Docker Compose (n8n + Cloudflare Tunnel + Agente de IA)
description: Despliegue de n8n Community y Cloudflare Tunnel con Docker Compose, integración de Webhooks desde WordPress online y conexión de un Agente de IA con APIs gratuitas.
---

# Actividad 1 (Alternativa). Automatización e IA con Docker Compose (n8n + Cloudflare Tunnel + Agente de IA)

En esta actividad aprenderás a orquestar un entorno de automatización profesional basado en contenedores. En lugar de limitarte a un único servicio local, utilizarás **Docker Compose** para desplegar una instancia de **n8n Community** junto a un túnel seguro con **Cloudflare Tunnel (`cloudflared`)**. Esto permitirá exponer de forma segura tu n8n a Internet para recibir **Webhooks** desde un **WordPress online**, conectando el flujo a un **Agente de IA** con modelos avanzados de lenguaje mediante APIs gratuitas sin requerir tarjeta de crédito.

---

## 🎯 Objetivos de la actividad

1. **Entorno y Permisos de Docker:** Verificar el funcionamiento de Docker Engine y Docker Compose en **Lliurex** sin necesidad de privilegios de superusuario (`sudo`).
2. **Orquestación Multiservicio:** Crear y comprender un archivo `docker-compose.yml` que levante de forma coordinada el motor de flujos (`n8n`) y el agente de túnel (`cloudflared`).
3. **Exposición Segura y Conectividad (Túneles inversos):** Entender por qué un servicio detrás de una NAT/cortafuegos del instituto no puede recibir peticiones web directas desde Internet y cómo un túnel saliente resuelve este problema sin abrir puertos.
4. **Recepción de Webhooks:** Configurar un disparador de tipo *Webhook* en n8n capaz de recibir eventos POST desde un sitio WordPress alojado en Internet.
5. **Integración de Agentes de Inteligencia Artificial:** Conectar n8n con un modelo LLM utilizando una **API Key 100% gratuita** (Google Gemini, Groq u OpenRouter) para procesar el contenido recibido en el webhook.
6. **Persistencia y Volúmenes:** Asegurar que los flujos, credenciales y ejecuciones de n8n persistan tras destruir y recrear los contenedores.
7. **Ciberseguridad y Gestión de Secretos:** Gestionar contraseñas maestras y API keys mediante **Bitwarden**, evitando exponer credenciales en repositorios o archivos compartidos.

---

## 📌 Paso a paso detallado

### Paso 1: Verificación de Docker en Lliurex y preparación en Bitwarden

1. Abre un terminal en Lliurex (`Ctrl + Alt + T`).
2. Comprueba que el servicio de Docker está activo y operativo:
   ```bash
   docker --version
   docker compose version
   docker run --rm hello-world
   ```
3. Si `docker run` da un error de permisos con el socket, consulta al profesor para verificar que tu usuario pertenezca al grupo `docker`.
4. Crea la carpeta de trabajo para este proyecto y accede a ella:
   ```bash
   mkdir -p ~/docker-n8n
   cd ~/docker-n8n
   ```
5. Abre **Bitwarden** en tu navegador o aplicación de escritorio. Crea una carpeta o conjunto de elementos dedicados a este laboratorio donde almacenarás:
   * Contraseña de administración de n8n.
   * La clave de API (API Key) del proveedor de IA que elijas a continuación.

---

### Paso 2: Obtención de una API Key de IA gratuita (sin tarjeta de crédito)

Para que tu Agente de IA en n8n pueda procesar información y razonar, necesitarás una clave de API. **Ninguna de las tres opciones siguientes solicita número de tarjeta de crédito ni datos de facturación.** Escoge la **Opción A** (recomendada) y recurre a la **B** o **C** si tienes incidencias con tu cuenta:

#### 🟢 Opción A (Recomendada): Google AI Studio (Gemini)
* **Ventajas:** Integración nativa excelente en n8n con el nodo *Google Gemini Chat Model*, muy rápido y con soporte completo de ejecución de herramientas (*Tool Calling*).
* **Pasos:**
  1. Accede a [aistudio.google.com](https://aistudio.google.com/).
  2. Inicia sesión con una cuenta de Google (si tu cuenta corporativa del centro tiene restricciones de administrador, utiliza una cuenta personal `@gmail.com`).
  3. Acepta los términos de uso del entorno de desarrollo.
  4. Haz clic en el botón superior o lateral **"Get API key"** y luego en **"Create API key"**.
  5. Copia la clave generada y **guárdala inmediatamente en Bitwarden** con el nombre `API Key - Google AI Studio`.

#### 🔵 Opción B: Groq Cloud (Llama 3.3 / Llama 3.1)
* **Ventajas:** Inferencia ultra rápida y acceso a modelos abiertos punteros como `llama-3.3-70b-versatile`.
* **Pasos:**
  1. Accede a [console.groq.com](https://console.groq.com/).
  2. Pulsa en **Sign Up** e inicia sesión con correo, GitHub o Google.
  3. En el menú lateral izquierdo, haz clic en **API Keys**.
  4. Pulsa en **"Create API Key"**, ponle un nombre descriptivo (ej. `n8n-laboratorio`) y copia el token generado.
  5. **Guárdala de inmediato en Bitwarden** como `API Key - Groq Cloud`.

#### 🟣 Opción C: OpenRouter (Modelos gratuitos `:free`)
* **Ventajas:** Permite utilizar diversos modelos de IA gratuitos en una única API compatible con el estándar de OpenAI.
* **Pasos:**
  1. Accede a [openrouter.ai](https://openrouter.ai/).
  2. Regístrate o inicia sesión con tu cuenta de correo o GitHub.
  3. Ve a tu perfil y accede a la sección **Keys** ([openrouter.ai/keys](https://openrouter.ai/keys)).
  4. Crea una nueva clave llamada `n8n-practica` con límite de crédito en 0 (solo usará modelos gratuitos).
  5. Copia el token y **guárdalo en Bitwarden** como `API Key - OpenRouter`.

---

### Paso 3: Creación del archivo `docker-compose.yml`

En tu carpeta `~/docker-n8n`, crea el archivo de orquestación con tu editor de texto preferido:

```bash
nano docker-compose.yml
```

Introduce la siguiente configuración:

```yaml
version: '3.8'

services:
  # Servicio 1: Plataforma de Automatización de Flujos
  n8n:
    image: docker.n8n.io/n8nio/n8n:latest
    container_name: n8n-app
    restart: unless-stopped
    ports:
      - "5678:5678"
    environment:
      - N8N_HOST=0.0.0.0
      - N8N_PORT=5678
      - N8N_PROTOCOL=http
      - NODE_ENV=production
      - GENERIC_TIMEZONE=Europe/Madrid
      - TZ=Europe/Madrid
    volumes:
      - n8n_data:/home/node/.n8n

  # Servicio 2: Túnel seguro hacia Cloudflare (Quick Tunnel sin cuenta requerida)
  tunnel:
    image: cloudflare/cloudflared:latest
    container_name: n8n-tunnel
    restart: unless-stopped
    command: tunnel --url http://n8n:5678
    depends_on:
      - n8n

volumes:
  n8n_data:
```

> **¿Cómo funciona este túnel?**
> El contenedor `tunnel` no publica puertos en tu máquina física; en su lugar, abre una conexión saliente HTTPS directa con la red global de Cloudflare. Cloudflare le asigna una URL pública temporal acabada en `.trycloudflare.com` y redirige el tráfico web que llegue a esa dirección hacia el puerto `5678` del contenedor `n8n` a través de la red interna de Docker.
{: .alert-info}

---

### Paso 4: Despliegue del stack y obtención de la URL pública

1. Levanta los dos contenedores en segundo plano:
   ```bash
   docker compose up -d
   ```
2. Comprueba que ambos contenedores están en estado `Up`:
   ```bash
   docker compose ps
   ```
3. Para descubrir la dirección pública generada por el túnel de Cloudflare, consulta los registros del contenedor `tunnel`:
   ```bash
   docker compose logs tunnel
   ```
   *Busca entre las últimas líneas un mensaje similar a este:*
   ```text
   +--------------------------------------------------------------------------------------------+
   | Your quick Tunnel has been created! Visit it at (it may take some time to be reachable):  |
   | https://example-words-random.trycloudflare.com                                             |
   +--------------------------------------------------------------------------------------------+
   ```
4. Copia esa URL con prefijo `https://` y pruébala en tu navegador. Comprobarás que puedes acceder a tu n8n tanto desde `http://localhost:5678` como desde la dirección pública de Cloudflare.

---

### Paso 5: Configuración inicial de n8n

1. Entra desde tu navegador a `http://localhost:5678`.
2. Completa el asistente inicial creando tu **cuenta de propietario (Owner account)** con tu nombre, correo y una contraseña robusta.
3. Guarda el usuario y la contraseña en **Bitwarden**.
4. En las preguntas de bienvenida de n8n sobre telemetría y uso, puedes omitirlas o indicar que es para uso formativo/personal.

---

### Paso 6: Construcción del flujo con Webhook y Agente de IA

En la interfaz de n8n, pulsa en **"Create Workflow"** (Crear flujo) y añade los siguientes nodos:

```
[ Webhook (Trigger) ]  --->  [ AI Agent ]  --->  [ Respond to Webhook ]
                                  |
                      [ Chat Model (Gemini / Groq / OpenRouter) ]
```

#### 1. Nodo Disparador: Webhook
* Haz clic en **Add first step** y busca el nodo **Webhook**.
* Configuración:
  * **HTTP Method:** `POST`.
  * **Path:** `wordpress-evento` (o el nombre que prefieras).
  * **Respond:** Selecciona `Using 'Respond to Webhook' Node` (para que el webhook devuelva la respuesta generada por la IA a WordPress).
* Observa las dos pestañas de URL:
  * **Test URL:** Se utiliza mientras estás diseñando el flujo y pulsas "Listen for test event".
  * **Production URL:** Se utiliza cuando activas el flujo en modo activo.
  > **Nota de red:** Para llamar al webhook desde Internet, reemplaza la parte `http://localhost:5678` por tu dominio público del túnel de Cloudflare:  
  > `https://tu-subdominio.trycloudflare.com/webhook-test/wordpress-evento`
  {: .alert-warning}

#### 2. Nodo: AI Agent
* Añade un nodo **AI Agent** conectado a la salida del Webhook.
* En **Prompt Type**, selecciona **Define below** y escribe el texto que recibirá la IA, tomando el cuerpo del mensaje que viene de WordPress:
  ```text
  Analiza el siguiente contenido recibido desde WordPress: {{ $json.body.mensaje || $json.body.content || JSON.stringify($json.body) }}
  Genera un breve resumen en dos frases, clasifica el tono (positivo, neutro o queja) y redacta una propuesta de respuesta cordial.
  ```

#### 3. Nodo de Modelo de Lenguaje (Chat Model)
Conecta a la entrada de modelo (*Model*) del AI Agent el conector correspondiente a la opción que elegiste en el **Paso 2**:

* **Si elegiste Google Gemini (Opción A):**
  * Añade el nodo **Google Gemini Chat Model**.
  * En **Credential for Google Gemini**, crea una nueva credencial y pega tu **API Key** obtenida en Google AI Studio.
  * Selecciona el modelo `gemini-1.5-flash` o `gemini-2.0-flash`.
* **Si elegiste Groq (Opción B):**
  * Añade el nodo **Groq Chat Model** (o **OpenAI Chat Model** configurando la Base URL a `https://api.groq.com/openai/v1`).
  * Introduce tu API Key de Groq y selecciona el modelo `llama-3.3-70b-versatile`.
* **Si elegiste OpenRouter (Opción C):**
  * Añade el nodo **OpenAI Chat Model**.
  * En las credenciales, activa la opción de Base URL personalizada e introduce: `https://openrouter.ai/api/v1`.
  * Pega tu clave de OpenRouter y escribe en el nombre del modelo: `meta-llama/llama-3.3-70b-instruct:free`.

#### 4. Nodo: Respond to Webhook
* Conecta la salida del AI Agent al nodo **Respond to Webhook**.
* Configura la respuesta para devolver en el cuerpo JSON el resultado generado por el agente:
  * **Response Body:** `{{ $json.output }}`.

---

### Paso 7: Conexión y prueba con WordPress online

Ahora conectarás tu WordPress alojado en Internet con tu flujo local:

1. **Configuración en WordPress:**
   * Si utilizas un plugin de formularios (como *Forminator*, *Contact Form 7 con Webhooks*, o *WP Webhooks*):
     * Crea un Webhook saliente de tipo POST que apunte a tu URL de prueba del túnel:
       `https://tu-subdominio.trycloudflare.com/webhook-test/wordpress-evento`
   * Si no tienes acceso de administración a plugins de Webhook en el WordPress online, puedes simular la llamada que haría WordPress usando `curl` desde otra máquina o terminal:
     ```bash
     curl -X POST https://tu-subdominio.trycloudflare.com/webhook-test/wordpress-evento \
       -H "Content-Type: application/json" \
       -d '{"origen": "wordpress_online", "usuario": "alumno_prueba", "mensaje": "Hola, he leído la última entrada del blog sobre contenedores y me gustaría saber cómo puedo desplegar bases de datos con volúmenes."}'
     ```
2. **Prueba en n8n:**
   * En n8n, pulsa el botón **"Listen for test event"** en el nodo Webhook.
   * Envía el formulario desde WordPress (o ejecuta la llamada con `curl`).
   * Observa cómo los datos llegan a través del túnel de Cloudflare, el Agente de IA procesa el mensaje y devuelve la respuesta en pocos segundos.
3. Guarda el flujo en n8n con el nombre `WordPress-IA-Agent`.

---

### Paso 8: Prueba de persistencia de datos

Comprueba que la configuración de n8n no se pierde al detener o reiniciar los contenedores:

1. Detén y elimina los contenedores en la terminal:
   ```bash
   docker compose down
   ```
2. Vuelve a arrancarlos:
   ```bash
   docker compose up -d
   ```
3. Accede de nuevo a `http://localhost:5678`.
4. Comprueba que tu usuario sigue activo, tus credenciales de IA siguen guardadas y el flujo que diseñaste se mantiene en el panel. Esto demuestra el funcionamiento del volumen `n8n_data`.

---

## 📽️ Recursos y material de apoyo

👉 [Documentación oficial de n8n](https://docs.n8n.io/)  
👉 [Guía de Cloudflare Quick Tunnels](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/do-more-with-tunnels/trycloudflare/)  
👉 [Google AI Studio - Obtención de API Key gratuita](https://aistudio.google.com/)  
👉 [Consola de Groq Cloud](https://console.groq.com/)  
👉 [Documentación de Docker Compose](https://docs.docker.com/compose/)  

---

## 📤 Entrega y Evaluación

Deberás entregar en **Aules** los siguientes elementos:

1. **Documento (PDF)** con un informe de la actividad que contenga:
   - Captura de la terminal con `docker compose ps` mostrando los contenedores de `n8n` y `tunnel` en ejecución.
   - Captura de la terminal con `docker compose logs tunnel` donde se aprecie la URL pública temporal `.trycloudflare.com` asignada.
   - Captura de las entradas en **Bitwarden** con las credenciales de n8n y la API Key registrada (ocultando contraseñas).
   - Captura del flujo en n8n con la ejecución completada con éxito (*Execution successful*) mostrando el nodo Webhook y el nodo de IA con la respuesta generada.
   - Breve respuesta a las siguientes dos preguntas:
     1. *¿Por qué un servidor en Internet no puede enviar un webhook directo a `http://localhost:5678` de tu ordenador de clase sin un túnel como Cloudflare?*
     2. *¿Dónde se almacenan tus flujos y contraseñas de n8n para que no se borren al hacer `docker compose down`?*
2. **Copia del archivo `docker-compose.yml`** utilizado.

Al finalizar la entrega, muestra la ejecución en directo al profesor en el aula.

---

## 📊 Rúbrica de Evaluación (máx. 10 puntos)

| Criterio | Insuficiente | Básico | Adecuado | Excelente |
| :--- | :--- | :--- | :--- | :--- |
| **Gestión de Seguridad y Credenciales en Bitwarden** (máx. 2 puntos) | **0 puntos:** No utiliza Bitwarden ni almacena de forma segura las claves maestras o las API keys. | **0,5 puntos:** Registra credenciales de forma incompleta o expone claves en texto claro en archivos compartidos. | **1 punto:** Registra la cuenta de n8n o la API key en Bitwarden, aunque con organización mejorable. | **2 puntos:** Registra de forma impecable y segura tanto el acceso a n8n como la API Key de IA en Bitwarden. |
| **Orquestación con Docker Compose y Persistencia** (máx. 3 puntos) | **0 puntos:** No crea el archivo YAML o contiene errores sintácticos graves que impiden arrancar los servicios. | **0,75 puntos:** Consigue arrancar únicamente uno de los servicios o presenta fallos en la definición de volúmenes. | **1,5 puntos:** Configura y levanta ambos servicios (`n8n` y `tunnel`), pero no verifica la persistencia tras el reinicio. | **3 puntos:** Archivo YAML perfectamente estructurado, ambos servicios operativos y persistencia de datos comprobada con volúmenes. |
| **Túnel y Conectividad Externa (Webhooks)** (máx. 2 puntos) | **0 puntos:** No localiza la URL pública del túnel ni comprende el funcionamiento de la conexión externa. | **0,5 puntos:** Obtiene la URL de Cloudflare pero no logra recibir peticiones en el nodo Webhook de n8n. | **1 punto:** Configura el nodo Webhook y recibe eventos de prueba únicamente en red local (`localhost`). | **2 puntos:** Expone n8n mediante Cloudflare Tunnel y recibe con éxito eventos externos vía Webhook a través de la URL pública. |
| **Implementación del Agente de IA en n8n** (máx. 3 puntos) | **0 puntos:** No integra ningún nodo de modelo de lenguaje ni obtiene la API key gratuita requerida. | **0,75 puntos:** Conecta nodos de IA con errores de autenticación en la API key o sin interpretar los datos de entrada. | **1,5 puntos:** El agente de IA responde pero de forma estática o sin utilizar la información del cuerpo del webhook. | **3 puntos:** Conecta con éxito el modelo de IA (Gemini, Groq u OpenRouter), procesa dinámicamente el mensaje recibido y devuelve la respuesta. |
| **Entrega en plazo y documentación** (máx. 0 puntos) | **-2 puntos:** No entrega la actividad o realiza una entrega vacía o con retraso injustificado. | **-1,5 puntos:** Entrega con retraso importante o faltan evidencias clave en el informe. | **-1 punto:** Entrega con un pequeño retraso o documentación incompleta (falta informe o YAML). | **0 puntos:** Entrega puntual en Aules con todo el material requerido y demostración en el aula. |

> ⚠️ **Nota sobre la entrega en plazo:** La entrega dentro del plazo establecido no resta puntuación (0 pts). Las entregas con retraso supondrán una penalización de hasta 2 puntos sobre la calificación de la actividad.
{: .alert-error}
