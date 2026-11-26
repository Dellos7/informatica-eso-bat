#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")"

echo "1. Levantando el túnel de Pinggy..."
docker compose up -d --force-recreate tunnel

echo "2. Esperando la URL pública de Pinggy..."
URL=""
for _ in $(seq 1 15); do
  URL=$(docker compose logs --no-color tunnel 2>/dev/null \
    | grep -oE 'https://[a-zA-Z0-9.-]+\.(free\.pinggy\.(net|link)|run\.pinggy-free\.link)' \
    | head -n 1 || true)
  if [ -n "$URL" ]; then
    break
  fi
  sleep 2
done

if [ -z "$URL" ]; then
  echo "Error: no se pudo obtener la URL de Pinggy. Revisa los logs con: docker compose logs tunnel"
  exit 1
fi

echo "   URL obtenida: $URL"

echo "3. Actualizando el archivo .env..."
touch .env
sed -i '1s/^\xef\xbb\xbf//' .env
sed -i 's/\r$//' .env
if [ -s .env ] && [ -n "$(tail -c 1 .env)" ]; then
  printf '\n' >> .env
fi
if grep -q '^N8N_WEBHOOK_URL=' .env; then
  sed -i "s|^N8N_WEBHOOK_URL=.*|N8N_WEBHOOK_URL=${URL}/|" .env
else
  printf 'N8N_WEBHOOK_URL=%s/\n' "${URL}" >> .env
fi

echo "4. Levantando los servicios n8n y qdrant..."
docker compose up -d n8n qdrant

echo ""
echo "Listo. Servicios disponibles en:"
echo "  - n8n (local):    http://localhost:5678"
echo "  - n8n (público):  ${URL}"
echo "  - Qdrant (local): http://localhost:6333/dashboard"
