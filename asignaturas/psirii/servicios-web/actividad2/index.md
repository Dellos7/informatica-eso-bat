---
layout: default
title: Actividad 2. Despliegue Cloud en WordPress.com Business, Entornos Staging y Creación Web con IA (Novamira MCP y Antigravity)
description: Configuración de hosting cloud profesional en WordPress.com Business, entornos de Staging, migración con All-in-One WP Migration y desarrollo web asistido por IA mediante el plugin Novamira MCP y Antigravity IDE.
---

# Actividad 2. Despliegue Cloud en WordPress.com Business, Entornos Staging y Creación Web con IA (Novamira MCP y Antigravity)

> **REVISAR**
{: .alert-error}

En esta actividad darás el salto del servidor local (montado en la Actividad 1 con XAMPP en Linux Mint) a una infraestructura **Cloud profesional** gracias a las licencias educativas del **Plan Business de WordPress.com**.

Aprenderás la metodología de trabajo empleada en empresas tecnológicas: nunca modificar una web directamente en producción, sino utilizar un **entorno de pruebas aislado (Staging)** para validar cambios, migraciones y actualizaciones antes de sincronizarlos al sitio público. Además, te adentrarás en la vanguardia del desarrollo web integrando un agente de Inteligencia Artificial mediante el protocolo **MCP (Model Context Protocol)** con el plugin **Novamira** y el entorno **Antigravity IDE**.

---

## 🎯 Objetivos de la actividad

1. **Gestión de Hosting Cloud Profesional:** Configurar la cuenta y el sitio web bajo el plan **WordPress.com Business**, adaptando el panel a la interfaz clásica de administración (`WP-Admin`) y desbloqueando las funciones avanzadas de alojamiento y desarrollador.
2. **Ciclo de Desarrollo Profesional con Staging:** Comprender el ciclo de vida de un servicio web (*Desarrollo local ➔ Entorno de pruebas / Staging ➔ Producción*) y gestionar el aprovisionamiento de copias aisladas en la nube.
3. **Migración de Servicios Web a la Nube:** Restaurar la copia de seguridad `.wpress` generada en la Actividad 1 en el entorno de pruebas utilizando **All-in-One WP Migration**.
4. **Despliegue y Sincronización a Producción:** Publicar de forma controlada la web validada en Staging hacia el sitio en vivo mediante operaciones de sincronización (**Push / Pull**).
5. **Desarrollo Web Asistido por Agentes IA (MCP):** Conectar WordPress con **Antigravity IDE** a través del plugin **Novamira** utilizando el protocolo estándar **MCP (Model Context Protocol)** y tu cuenta de Google.
6. **Creación y personalización automatizada:** Guiar al agente de IA para construir o ampliar la web sobre el tema **Blocksy**, generando páginas, contenidos y estilos directamente mediante prompts en lenguaje natural.
7. **Ciberseguridad y Buenas Prácticas:** Gestionar contraseñas seguras y contraseñas de aplicación (*Application Passwords*) en **Bitwarden**, auditando registros de actividad y copias de seguridad automáticas en la nube.

---

**Hitos de seguimiento:** ajustes de interfaz y hosting activados; entorno de staging operativo; copia de seguridad importada y verificada en staging; sincronización a producción completada; conexión MCP establecida en Antigravity IDE y cambios aplicados por IA comprobados. Los hitos se revisan en el aula con el profesor.

---

## 📌 Paso a paso detallado

### Paso 1: Configuración inicial de la cuenta y ajustes indispensables de WordPress.com

El plan **WordPress.com Business** ofrece un entorno gestionado de alto rendimiento con servidores optimizados, copias de seguridad automáticas y herramientas de desarrollo avanzadas. No obstante, por defecto la plataforma utiliza una interfaz simplificada pensada para usuarios sin perfil técnico. Como administradores de sistemas y servicios web, configuraremos el entorno en modo profesional:

1. **Acceso con licencia educativa y registro en Bitwarden:**
   - Accede a [WordPress.com](https://wordpress.com/) e inicia sesión con las credenciales facilitadas para tu licencia educativa del plan Business.
   - Registra de inmediato en tu bóveda de **Bitwarden** la URL del panel, el usuario/correo y la contraseña asignada.

2. **Cambiar la interfaz de administración a "Estilo clásico":**
   - En la esquina superior derecha del panel de WordPress.com, haz clic en tu avatar/perfil y entra en **Ajustes de la cuenta** (o dentro de tu sitio en **Ajustes > General**).
   - Localiza la opción **Estilo de la interfaz de administración** (*Admin interface style*).
   - Cambia la opción predeterminada a **Estilo clásico** (*Classic view* / WP-Admin nativo).
   - Guarda los cambios. A partir de este momento dispondrás de la barra superior negra y el menú lateral característico de WordPress, idéntico al que utilizaste en el entorno local con XAMPP.

3. **Activar funciones de desarrollador y alojamiento:**
   - En el menú lateral de tu sitio en WordPress.com, dirígete a **Ajustes > Configuración de alojamiento** (o *Funciones de desarrollador*).
   - Pulsa en el botón **Activar funciones de alojamiento** (*Activate hosting features*).
   - Esta acción convierte el sitio en una instancia con acceso completo al sistema: habilita la instalación de cualquier plugin o tema externo sin restricciones, el acceso a bases de datos mediante phpMyAdmin, credenciales SFTP/SSH y la capacidad de crear entornos de pruebas (*staging*).

> **¿Por qué activar las funciones de alojamiento?** Sin este paso, WordPress.com funciona como una plataforma cerrada (SaaS). Al activar las funciones de alojamiento, dispones de una máquina virtual/contenedor dedicado en la nube con acceso total a nivel de servidor web y base de datos.
{: .alert-info}

---

### Paso 2: Entornos de trabajo profesional: Creación del entorno de Staging (Pruebas)

En el ámbito laboral y empresarial, **nunca se realizan cambios, pruebas de plugins o migraciones directamente en el sitio de producción**, ya que cualquier error provocaría la caída de la web pública (tiempo de inactividad o *downtime*) o la pérdida de datos de clientes y usuarios.

El flujo de trabajo estándar en la industria consta de tres etapas:
1. **Entorno Local (Development):** Tu máquina virtual Linux con XAMPP, donde diseñas y desarrollas sin conexión obligatoria ni riesgo alguno.
2. **Entorno de Pruebas (Staging):** Un clon exacto del servidor de producción en la nube, protegido o en una URL temporal, donde se prueban migraciones, actualizaciones y nuevos desarrollos.
3. **Entorno de Producción (Production):** La web pública visible para los usuarios finales y clientes.

![Añadir sitio de pruebas en WordPress.com](./wordpress_com_anadir_staging.png)

1. En el panel de control de tu sitio de WordPress.com, localiza en la barra lateral izquierda el selector de entorno donde actualmente aparece marcado **Producción** con un indicador verde.
2. Haz clic sobre dicho selector y pulsa en la opción **+ Añadir sitio de pruebas**.
3. El sistema iniciará el aprovisionamiento de un clon aislado de tu sitio con una dirección web de pruebas (por ejemplo: `staging-xxxx-tunombre.blog`).
4. Espera a que finalice el proceso de creación. Observarás que ahora puedes alternar cómodamente entre el panel de **Producción** y el de **Pruebas (Staging)**.

---

### Paso 3: Importación de la copia de seguridad de la Actividad 1 en Staging

En la Actividad 1 exportaste un archivo `.wpress` con tu sitio web personal (currículum con tema Blocksy, plugins de seguridad y formulario de contacto). Ahora lo migraremos a la nube, pero siguiendo las buenas prácticas: **lo importaremos primero en el sitio de pruebas**.

![Panel de Staging y opciones de sincronización](./wordpress_com_sincronizar_staging.png)

1. En el selector de entornos del panel de WordPress.com, asegúrate de estar situado en **Pruebas** (indicador azul/verde).
2. Haz clic en el botón azul **WP Admin** situado en la parte superior derecha para acceder directamente al panel de administración del entorno de pruebas.
3. Ve a **Plugins > Añadir nuevo**, busca el plugin **All-in-One WP Migration** e instálalo y actívalo en el sitio de pruebas.
4. En el menú lateral, dirígete a **All-in-One WP Migration > Importar**.
5. Selecciona **Importar de > Archivo** y sube el archivo `.wpress` de la copia de seguridad que guardaste en la Actividad 1.
6. Confirma la advertencia de sobreescritura de base de datos y archivos. El plugin restaurará tus páginas, imágenes, menús, configuraciones y usuarios de la Actividad 1.
7. Al concluir la importación, ve a **Ajustes > Enlaces permanentes** y haz clic en **Guardar cambios** dos veces seguidas para regenerar las reglas de reescritura de URLs.
8. Abre la URL del sitio de pruebas en una pestaña nueva y comprueba minuciosamente que la web funciona al 100%: portada con Blocksy, secciones de currículum, imágenes y formulario.

> **Importante:** Tras la importación, las credenciales de acceso a WP Admin del sitio de pruebas pasan a ser las del usuario administrador que creaste en la Actividad 1 en local (las que tienes almacenadas en Bitwarden).
{: .alert-warning}

---

### Paso 4: Sincronización y Paso a Producción (Push de Staging a Producción)

Una vez que has validado en el entorno de pruebas que la web migrada no presenta errores, procederemos a desplegarla en el entorno público real de producción:

1. Regresa al panel principal de WordPress.com y sitúate en el entorno de **Pruebas (Staging)**.
2. En la cabecera superior, haz clic en el botón **Sincronizar** para desplegar las opciones disponibles:
   - **Hacer pull desde el sitio de producción:** Trae el contenido y la base de datos de producción hacia el sitio de pruebas (muy útil para actualizar staging antes de probar un cambio futuro).
   - **Hacer push al sitio de producción:** Envía todo el contenido, base de datos, temas y plugins de pruebas al sitio público de producción.
3. Selecciona **Hacer push al sitio de producción**.
4. Revisa la ventana de confirmación donde se detallan los elementos que se transferirán y confirma la operación.
5. Una vez completada la sincronización, accede a la **URL pública de Producción** (ejemplo: `https://tunombre.blog`).
6. Verifica que tu sitio web personal/CV ahora se encuentra publicado en Internet, con certificado SSL activo y alojado en la infraestructura cloud de WordPress.com.

---

### Paso 5: Creación y gestión web con Inteligencia Artificial: Novamira MCP y Antigravity IDE

En este paso exploraremos la frontera actual de la ingeniería web: conectar un entorno de desarrollo con IA directamente a WordPress mediante el protocolo **MCP (Model Context Protocol)**.

#### ¿Qué es el protocolo MCP?
El **Model Context Protocol (MCP)** es un estándar abierto que permite a los asistentes y agentes de Inteligencia Artificial conectarse con herramientas y fuentes de datos externas de forma segura. En lugar de limitarte a copiar y pegar código generado por un chat, un agente conectado por MCP puede inspeccionar tu WordPress, leer la lista de páginas instaladas, crear entradas, instalar temas, modificar estilos o crear contenido directamente mediante llamadas a funciones (*tools*).

#### 1. Instalación y activación del plugin Novamira en WordPress
1. En el panel de **WP Admin** de tu sitio (puedes trabajar en Staging o Producción según prefieras practicar), ve a **Plugins > Añadir nuevo**.
2. Busca el plugin **Novamira** (desarrollado por el equipo de Dynamic.ooo, especializado en servidores MCP para WordPress).
3. Instala y activa el plugin.
4. En el menú de administración aparecerá la sección **Novamira**. Accede a ella para consultar el estado del servidor MCP y los ajustes de conexión.

#### 2. Generación de Contraseñas de Aplicación (Application Passwords)
Por seguridad, nunca debemos proporcionar la contraseña maestra de nuestra cuenta a herramientas externas. WordPress incorpora **Contraseñas de aplicación**: claves exclusivas y revocables que permiten autenticar servicios y APIs.
1. Ve a **Usuarios > Perfil** en WP Admin.
2. Desplázate hacia abajo hasta la sección **Contraseñas de aplicación**.
3. En el campo "Nombre de la nueva contraseña de aplicación", escribe `Antigravity IDE MCP`.
4. Pulsa en **Añadir nueva contraseña de aplicación**.
5. Copia la contraseña generada (una cadena de 24 caracteres agrupados de 4 en 4) y **guárdala en Bitwarden**.

#### 3. Conexión de Antigravity IDE mediante el plan gratuito de Google
1. Inicia **Antigravity IDE** en tu equipo (disponible tanto en Windows como en LliureX/Linux).
2. Si aún no lo has hecho, inicia sesión con tu **cuenta de Google** para activar el plan gratuito, el cual proporciona acceso integrado a modelos avanzados de IA (como Gemini 3.8 Flash y Gemini Pro).
3. Configura el servidor MCP de Novamira en Antigravity IDE:
   - Abre la configuración de MCP en Antigravity (puedes añadirlo en el archivo de configuración `.agents/mcp_config.json` de tu espacio de trabajo o a través de **Settings > Model Context Protocol**).
   - Utiliza la configuración proporcionada en la pestaña de configuración del plugin Novamira en WordPress, indicando la URL de tu sitio web, tu usuario y la contraseña de aplicación recién creada.
   - Guarda los cambios y verifica que el servidor MCP se conecta correctamente y expone las herramientas de WordPress (como creación de posts, páginas, lectura de taxonomías y gestión de opciones).

```json
{
  "mcpServers": {
    "wordpress-novamira": {
      "command": "npx",
      "args": ["-y", "@novamira/mcp-server", "--url", "https://tudominio.blog", "--user", "tu_usuario", "--app-password", "xxxx xxxx xxxx xxxx"]
    }
  }
}
```
*(Nota: adapta los parámetros con la URL exacta y las credenciales generadas por tu panel de Novamira).*

#### 4. Creación y ampliación de contenidos con el Agente de IA
Partiendo de tu plantilla base con **Blocksy**, utilizarás el panel de chat con agente de Antigravity IDE para solicitar cambios reales sobre tu web en lenguaje natural:
1. Pide al agente de Antigravity que consulte el estado actual de tu WordPress:
   > *"Inspecciona mi sitio WordPress a través de las herramientas de Novamira y dime qué páginas y temas están activos."*
2. Solicita la creación de una nueva sección o conjunto de páginas temáticas. Por ejemplo:
   - Una página de **"Proyectos de Informática y Redes"** con un listado detallado de prácticas (Virtualización con VirtualBox, Servidores LAMP, despliegue cloud en WordPress).
   - O una sección de **"Blog Técnico"** con al menos 2 artículos redactados con formato profesional sobre *"Buenas prácticas en entornos de Staging"* y *"El protocolo MCP en la gestión de contenidos"*.
   - O la creación de una página de **"Servicios Web"** con descripción de servicios, tarjetas de precios y llamadas a la acción.
3. Observa en la consola de Antigravity cómo el agente invoca las herramientas de Novamira (`create_post`, `set_post_content`, `create_category`, etc.).
4. Abre tu navegador y refresca la web para comprobar que las nuevas páginas y contenidos se han creado directamente en tu WordPress, respetando los estilos de tu tema Blocksy.

---

### Paso 6: Monitorización, Copias Automáticas y Auditoría en la Nube

Para completar la gestión profesional de tu servidor cloud, explora las herramientas que el Plan Business ofrece de serie en el panel de WordPress.com:

1. **Copias de seguridad automáticas en tiempo real (Jetpack VaultPress Backup):**
   - Entra en la sección **Copias de seguridad** del panel de WordPress.com.
   - Observa la línea de tiempo (*Rewind*): cada cambio que realizas (instalación de un plugin, publicación de un post o sincronización de staging) crea un punto de restauración automático.
2. **Auditoría y Registro de Actividad:**
   - Ve a la sección **Registros / Actividad** para revisar el historial cronológico de todas las acciones efectuadas en el sitio web (inicios de sesión, actualizaciones, cambios de tema).
3. **Escaneo de Seguridad (Scan):**
   - Entra en **Scan** y verifica que el motor de seguridad no ha detectado amenazas, vulnerabilidades en plugins ni archivos sospechosos en tu instalación.

---

## 📽️ Recursos y material de apoyo

👉 [Documentación oficial de WordPress.com sobre entornos de Staging](https://wordpress.com/support/staging-sites/)  
👉 [Guía de Contraseñas de Aplicación en WordPress](https://make.wordpress.org/core/2020/11/05/application-passwords-integration-guide/)  
👉 [Repositorio y documentación del plugin Novamira MCP](https://github.com/dynamic-ooo/novamira)  
👉 [Especificación oficial del Model Context Protocol (MCP)](https://modelcontextprotocol.io/)  
👉 [Tema Blocksy - Guía de inicio y personalización](https://creativethemes.com/blocksy/docs/)  

---

## 📤 Entrega y Evaluación

Deberás entregar en **Aules** los siguientes elementos:

1. **Enlace URL público** de tu sitio web de producción en WordPress.com.
2. **Documento (PDF)** con el informe de la actividad que contenga:
   - **Ajustes iniciales:** Captura del panel con la interfaz clásica (`WP-Admin`) y las funciones de alojamiento/desarrollador activadas.
   - **Entorno de Staging:** Captura del panel de WordPress.com donde se aprecien los dos entornos configurados (**Producción** y **Pruebas/Staging**) con sus URLs correspondientes.
   - **Migración con All-in-One WP Migration:** Captura del proceso de importación del archivo `.wpress` completado con éxito en el sitio de pruebas.
   - **Sincronización a Producción:** Captura del momento de sincronización (*Push to production*) y de la web pública definitiva funcionando en el dominio de producción.
   - **Integración con IA (Novamira MCP + Antigravity IDE):**
     - Captura de la configuración de Novamira y la contraseña de aplicación generada en WordPress.
     - Captura de Antigravity IDE mostrando la interacción con el agente IA, las herramientas MCP ejecutadas y la respuesta del modelo.
     - Captura de las nuevas páginas o contenidos creados automáticamente por la IA en la web.
   - **Gestión de Seguridad:** Captura de las entradas de **Bitwarden** (credenciales de WordPress.com y contraseña de aplicación para MCP, manteniendo las contraseñas ocultas).

Una vez realizada la entrega en Aules, **enseña el funcionamiento de tu web y la interacción con Antigravity en clase** para la verificación del profesor.

---

## 📊 Rúbrica de Evaluación (máx. 10 puntos)

| Criterio | Insuficiente (0 pts) | Básico (0.5 pts) | Adecuado (1 pt) | Excelente (2 pts) |
| :--- | :--- | :--- | :--- | :--- |
| **Configuración inicial de WordPress.com y Hosting** | No accede a la cuenta educativa ni activa los ajustes requeridos. | Accede al sitio pero no configura la interfaz clásica ni activa las funciones de alojamiento. | Configura la interfaz clásica y activa las funciones de alojamiento con alguna duda o asistencia. | Configura con total autonomía la interfaz clásica (WP-Admin), activa las funciones de alojamiento y registra credenciales seguras en Bitwarden. |
| **Gestión de Entorno Staging y Buenas Prácticas** | No crea el sitio de pruebas ni comprende el flujo de trabajo profesional. | Crea el sitio de pruebas pero trabaja directamente sobre producción sin seguir el ciclo recomendado. | Crea el sitio de pruebas y comprende la diferencia entre los entornos de desarrollo, pruebas y producción. | Administra con soltura el entorno de Staging, justificando técnicamente el ciclo de vida y la necesidad de aislar cambios en producción. |
| **Migración y Sincronización a Producción (Push/Pull)** | No realiza la migración de la web o el sitio queda inaccesible. | Importa la copia con fallos en enlaces o recursos, o no sincroniza correctamente entre Staging y Producción. | Importa la copia .wpress en Staging y sincroniza a Producción con pequeñas incidencias resueltas. | Migración completa impecable con All-in-One WP Migration en Staging y sincronización controlada mediante Push a Producción, con URLs y SSL operativos. |
| **Desarrollo Web Asistido con IA (Novamira MCP y Antigravity)** | No instala Novamira ni conecta Antigravity IDE por MCP. | Instala el plugin pero no consigue la autenticación por contraseña de aplicación o no genera contenido con IA. | Conecta Antigravity IDE a WordPress mediante Novamira MCP y genera al menos una página o contenido asistido. | Conexión MCP plenamente operativa, orquestando con prompts precisos la creación de páginas estructuradas, artículos o personalizaciones sobre Blocksy mediante el agente IA. |
| **Entrega en plazo y documentación técnica** | No entrega la actividad o presenta un retraso injustificado. | Entrega con retraso importante o informe incompleto con ausencia de capturas clave o enlaces erróneos. | Entrega con pequeño retraso o documentación con pequeñas omisiones de formato o verificación. | Entrega puntual en Aules con informe técnico riguroso, capturas detalladas de todos los procesos, enlaces funcionales y comprobación práctica en clase. |

---

## 📌 Criterios de Evaluación vinculados (2º Bachillerato - PSIR II)

- **CE 4.2:** Instalar y configurar un servidor web de forma segura.
- **CE 4.3:** Añadir complementos y gestionar gestores de contenidos (CMS WordPress).
- **CE 4.4:** Instalar y utilizar servidores de bases de datos para dar soporte a servicios web.
- **CE 5.2.1:** Razonar el diseño de sistemas informáticos y evaluar la eficiencia de servicios en la nube.
- **CE 5.2.3:** Administrar aplicaciones y servicios web en entornos de trabajo y producción.
- **CE 5.1:** Integrar recursos digitales y herramientas de IA de manera autónoma y responsable.
- **CE 5.2:** Crear y difundir documentación técnica sobre el despliegue de sistemas.
