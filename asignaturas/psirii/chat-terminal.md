---
layout: default
title: Chat a través de terminal
description: Chat a través de terminal
---

# Chat a través de terminal

## Equipo servidor
Debe ejecutar el siguiente comando. El número 8181 es el puerto, aquí podemos poner (en principio) cualquier puerto en el rango 1024-49151.

```
nc -l 8181
```

Esto lo que hace es crear un punto de conexión a través de ese puerto para que otro equipo (el cliente) pueda enviar mensajes.

## Equipo cliente
En el equipo cliente debemos ejecutar el siguiente comando. Debemos especificar en primer lugar la IP del cliente servidor (por ejemplo, la 10.2.3.36) y el puerto en el que el servidor está escuchando (en este caso el 8181).

```
nc 10.2.3.36 8181
```

Ahora, enviando mensajes desde cualquiera de ambos equipos podemos simular un chat básico sin problema.