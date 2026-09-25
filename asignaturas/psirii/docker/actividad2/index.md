---
layout: default
title: Actividad 2. Servidor de correo de laboratorio
description: Despliegue de un servidor SMTP e IMAP con Docker, cuentas de prueba y diagnóstico básico.
---

# Actividad 2. Servidor de correo de laboratorio

Vas a desplegar un servidor de correo para un pequeño grupo de usuarios de prueba y comprobar el envío y la recepción desde un cliente. Utilizaremos **GreenMail**, un servidor de laboratorio que implementa SMTP e IMAP y no reenvía mensajes a Internet.

> **Trabajo y apoyos:** actividad individual con contraste de resultados por parejas. El profesor podrá facilitar apoyos visuales, modelado, acompañamiento y ajustes de tiempo. La IA está prohibida salvo autorización expresa del profesor o del enunciado, y solo para las partes indicadas.
{: .alert-info}

**Previsión:** seis sesiones: despliegue y cuentas (2), cliente y mensajes (2), diagnóstico y documentación (2).

## 1. Preparar y desplegar el servidor

1. Comprueba que Docker y Compose funcionan, como en la actividad anterior.
2. Crea una carpeta nueva para esta práctica y descarga dentro el archivo [compose.yaml](./compose.yaml).
3. Ábrelo y localiza la imagen, las dos cuentas, los servicios y los puertos. El archivo utiliza cuentas ficticias: `ana@aula.test` y `luis@aula.test`, con las contraseñas de laboratorio que aparecen en la configuración. No reutilices contraseñas personales.
4. Desde una terminal situada en esa carpeta ejecuta:

   ```bash
   docker compose config --quiet
   docker compose up -d
   docker compose ps
   docker compose logs correo
   ```

5. Comprueba que el servidor arranca. Explica para qué se utilizarán **SMTP (3025)** e **IMAP (3143)** y qué significa publicar los puertos en `127.0.0.1`.

> Este montaje solo es accesible desde el propio ordenador. Usaremos conexiones sin cifrado exclusivamente en este laboratorio local, con cuentas ficticias. No cambies la publicación a todas las interfaces ni lo utilices como correo real. Los buzones son temporales: conserva las evidencias antes de detener o reiniciar el servidor.
{: .alert-warning}

## 2. Configurar las cuentas en Thunderbird

Utiliza Thunderbird en el mismo ordenador que ejecuta Docker. Añade las dos cuentas mediante **configuración manual**, sin aceptar una configuración automática de un proveedor externo.

| Ajuste | Cuenta Ana | Cuenta Luis |
| :--- | :--- | :--- |
| Dirección de correo | ana@aula.test | luis@aula.test |
| Servidor entrante | 127.0.0.1 | 127.0.0.1 |
| Protocolo / puerto | IMAP / 3143 | IMAP / 3143 |
| Servidor saliente / puerto | 127.0.0.1 / 3025 | 127.0.0.1 / 3025 |
| Seguridad de conexión | Ninguna, solo en este laboratorio | Ninguna, solo en este laboratorio |
| Autenticación | Contraseña normal | Contraseña normal |
| Nombre de usuario | ana | luis |
| Contraseña de prueba | ClaveAna2026 | ClaveLuis2026 |

Asocia a cada cuenta su configuración SMTP con el usuario correspondiente. Si el asistente pide confirmar el uso local sin cifrado, revisa con el profesor que la dirección sea `127.0.0.1`.

## 3. Probar envío y recepción

1. Envía de Ana a Luis un mensaje con el asunto `Prueba 1` y una explicación breve de la diferencia entre SMTP e IMAP.
2. Comprueba su llegada en el buzón de Luis y responde desde Luis a Ana con `Prueba 2`.
3. Envía un segundo mensaje con un pequeño archivo de texto adjunto y comprueba que se recibe y se abre.
4. Captura ambos buzones y la configuración, manteniendo ocultas las contraseñas. No envíes mensajes a direcciones externas.

## 4. Diagnosticar una incidencia

1. Cambia temporalmente el puerto IMAP de una cuenta a `3144` e intenta consultar su correo.
2. Registra el síntoma observado. Comprueba el estado del contenedor y compara la configuración del cliente con los puertos publicados.
3. Restablece `3143`, vuelve a consultar el buzón y documenta el resultado.
4. Explica por qué un problema al leer el buzón no demuestra que SMTP también haya dejado de funcionar.
5. Tras guardar las evidencias, detén únicamente este proyecto desde su carpeta:

   ```bash
   docker compose down
   ```

## Entrega en Aules

Entrega un informe PDF con el despliegue, la configuración de las dos cuentas, los mensajes en ambos sentidos, el adjunto y el registro de diagnóstico. Incluye el archivo de configuración utilizado; contiene exclusivamente las credenciales ficticias de esta práctica.

Durante la comprobación en clase, explica el recorrido del mensaje y demuestra que sabes localizar y corregir un ajuste incorrecto. El profesor revisará los hitos durante las sesiones; hay una sola entrega de la actividad.

## Rúbrica (10 puntos)

| Aspecto | 0 puntos | 1 punto | 2 puntos |
| :--- | :--- | :--- | :--- |
| Despliegue | No funciona. | Arranca con ayuda y explicación parcial. | Despliega y explica servicios, cuentas y puertos. |
| Configuración del cliente | No permite usar las cuentas. | Una cuenta funciona o quedan errores. | Ambas cuentas envían y reciben con sus ajustes correctos. |
| Pruebas | No aporta pruebas. | Prueba un sentido o no comprueba el adjunto. | Comprueba ambos sentidos y el adjunto con evidencias claras. |
| Diagnóstico | No identifica el problema. | Corrige con ayuda y explicación parcial. | Relaciona síntoma, causa, corrección y comprobación. |
| Documentación y explicación individual | No documenta ni explica. | Informe o explicación incompletos. | Informe claro y explicación propia del funcionamiento y los límites del laboratorio. |

## Criterios de evaluación relacionados

- **4.5:** desplegar un servidor de correo electrónico para un grupo reducido, mediante un laboratorio con dos usuarios.
- **5.2.3:** instalar, configurar y administrar aplicaciones.
- **5.2.4:** identificar incidencias y valorar soluciones.
- **5.2 (CE 5):** elaborar documentación técnica del proceso. Se mantiene la numeración del currículo.

## Referencia técnica

[Documentación oficial de GreenMail: servidor independiente y despliegue Docker](https://greenmail-mail-test.github.io/greenmail/#deploy_docker_standalone).
