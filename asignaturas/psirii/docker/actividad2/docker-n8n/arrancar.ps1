$ErrorActionPreference = 'Continue'

Set-Location -Path $PSScriptRoot

Write-Host "1. Levantando el túnel de Pinggy..."
docker compose up -d --force-recreate tunnel
if ($LASTEXITCODE -ne 0) {
    Write-Error "Error al levantar el contenedor tunnel."
    exit $LASTEXITCODE
}

Write-Host "2. Esperando la URL pública de Pinggy..."
$url = ""
$pattern = 'https://[a-zA-Z0-9.-]+\.(free\.pinggy\.(net|link)|run\.pinggy-free\.link)'

for ($attempt = 1; $attempt -le 15; $attempt++) {
    $logs = (docker compose logs --no-color tunnel 2>&1) -join "`n"
    $match = [regex]::Match($logs, $pattern)
    if ($match.Success) {
        $url = $match.Value
        break
    }
    Start-Sleep -Seconds 2
}

if ([string]::IsNullOrEmpty($url)) {
    Write-Error "Error: no se pudo obtener la URL de Pinggy. Revisa los logs con: docker compose logs tunnel"
    exit 1
}

Write-Host "   URL obtenida: $url"

Write-Host "3. Actualizando el archivo .env..."
$envPath = Join-Path $PSScriptRoot '.env'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$lines = @()

if (Test-Path -LiteralPath $envPath) {
    $content = [System.IO.File]::ReadAllText($envPath)
    if ($content.Length -gt 0) {
        $lines = @($content -replace "`r`n", "`n" -split "`n")
        if ($lines.Count -gt 0 -and $lines[$lines.Count - 1] -eq '') {
            $lines = if ($lines.Count -gt 1) { $lines[0..($lines.Count - 2)] } else { @() }
        }
    }
}

$updated = $false
for ($i = 0; $i -lt $lines.Count; $i++) {
    if ($lines[$i] -match '^N8N_WEBHOOK_URL=') {
        $lines[$i] = "N8N_WEBHOOK_URL=$url/"
        $updated = $true
    }
}
if (-not $updated) {
    $lines += "N8N_WEBHOOK_URL=$url/"
}

[System.IO.File]::WriteAllText($envPath, ($lines -join "`n") + "`n", $utf8NoBom)

Write-Host "4. Levantando los servicios n8n y qdrant..."
docker compose up -d n8n qdrant
if ($LASTEXITCODE -ne 0) {
    Write-Error "Error al levantar n8n y qdrant."
    exit $LASTEXITCODE
}

Write-Host ""
Write-Host "Listo. Servicios disponibles en:"
Write-Host "  - n8n (local):    http://localhost:5678"
Write-Host "  - n8n (público):  $url"
Write-Host "  - Qdrant (local): http://localhost:6333/dashboard"
