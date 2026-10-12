// Ejecutar con Node 24: node generar-ejemplos.mjs RUTA_DEL_SIMULADOR
// Genera ejemplos docentes y comprueba también las incidencias del enunciado.
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const repo = path.resolve(process.argv[2] || process.cwd());
const output = path.dirname(fileURLToPath(import.meta.url));
const { BY_ID } = await import(pathToFileURL(path.join(repo, 'js/data/catalog.js')));
const { checkBuild, totalPrice } = await import(pathToFileURL(path.join(repo, 'js/compat.js')));
const { exportBuildFile, parseBuildFile } = await import(pathToFileURL(path.join(repo, 'js/build-file.js')));

const profiles = [
  {
    id: 'A', cpu: 'cpu-12400', monitor: 'monitor-hdmi', gpu: false,
    base: ['case-basic', 'mb-h610m', 'cpu-12400', 'ram-lpx8-3200', 'ram-lpx8-3200', 'psu-sp10-450', 'fan-p12', 'monitor-hdmi'],
    video: { source: 'motherboard', port: 'HDMI' }, budgets: [600, 650, 650, 700]
  },
  {
    id: 'B', cpu: 'cpu-7600x', monitor: 'monitor-vga', gpu: false,
    base: ['case-q300l', 'mb-b650m-k', 'cpu-7600x', 'cool-212', 'ram-fury16-5600', 'ram-fury16-5600', 'psu-sp10-450', 'fan-p12', 'monitor-vga'],
    video: { source: 'motherboard', port: 'VGA' }, budgets: [800, 850, 850, 900]
  },
  {
    id: 'C', cpu: 'cpu-13400f', monitor: 'monitor-hdmi', gpu: true,
    base: ['case-q300l', 'mb-h610m', 'cpu-13400f', 'ram-lpx8-3200', 'ram-lpx8-3200', 'gpu-1650lp', 'psu-cx550', 'fan-p12', 'monitor-hdmi'],
    video: { source: 'gpu', port: 'HDMI' }, budgets: [800, 850, 850, 900]
  },
  {
    id: 'D', case: 'case-nr200', monitor: 'monitor-dp', gpu: false,
    base: ['case-nr200', 'mb-b760i', 'cpu-12400', 'ram-fury16-5600', 'ram-fury16-5600', 'psu-v850sfx', 'fan-p12', 'monitor-dp'],
    video: { source: 'motherboard', port: 'DisplayPort' }, budgets: [1100, 1150, 1100, 1150]
  }
];

await mkdir(path.join(output, 'soluciones-docente'), { recursive: true });
const rows = [];
let incidentChecks = 0;
for (const [profileIndex, profile] of profiles.entries()) {
  for (let variant = 1; variant <= 4; variant++) {
    const code = profile.id + variant;
    const ssdMinimum = variant % 2 === 0 ? 1000 : 500;
    const ids = [...profile.base, ssdMinimum === 1000 ? 'ssd-kc3000-1t' : 'ssd-980-500'];
    if (variant >= 3 && profile.id !== 'D') ids.push('exp-wifi6');
    const build = {
      items: ids.map(compId => ({ compId })),
      video: { ...profile.video },
      notes: {
        purpose: 'Ejemplo docente del encargo ' + code + '. No es una solución única.',
        reasoning: 'Comprueba las fichas y el enunciado antes de utilizarlo para corregir.',
        correction: 'E1: restaurar RAM compatible. E2: restaurar el cable correspondiente a la salida y a la pantalla.'
      }
    };
    const text = exportBuildFile(build);
    assert.deepEqual(parseBuildFile(text), build, code + ': importación');
    const result = checkBuild(build);
    assert.equal(result.errors, 0, code + ': compatibilidad');
    assert.equal(result.warnings, 0, code + ': avisos');
    assert.ok(totalPrice(build) <= profile.budgets[variant - 1], code + ': presupuesto');
    const components = ids.map(id => BY_ID[id]);
    const rams = components.filter(c => c.cat === 'ram');
    assert.equal(rams.length, 2, code + ': módulos de RAM');
    assert.ok(rams.reduce((sum, c) => sum + c.specs.moduleGb, 0) >= 16, code + ': capacidad RAM');
    assert.ok(components.some(c => c.cat === 'storage' && ['nvme', 'sata-ssd'].includes(c.specs.kind) && c.specs.capacityGb >= ssdMinimum), code + ': SSD');
    assert.ok(ids.includes(profile.monitor), code + ': pantalla');
    assert.equal(components.some(c => c.cat === 'gpu'), profile.gpu, code + ': GPU');
    if (profile.cpu) assert.ok(ids.includes(profile.cpu), code + ': CPU');
    if (profile.case) assert.ok(ids.includes(profile.case), code + ': caja');
    if (variant >= 3) assert.ok(components.some(c => c.cat === 'motherboard' && c.specs.wifi || c.id === 'exp-wifi6'), code + ': Wi-Fi');

    const wrongRam = {
      ...build,
      items: [...build.items.filter(item => BY_ID[item.compId].cat !== 'ram'), { compId: 'ram-ddr3-8' }, { compId: 'ram-ddr3-8' }]
    };
    parseBuildFile(exportBuildFile(wrongRam));
    assert.ok(checkBuild(wrongRam).errors > 0, code + ': detección E1');
    const wrongCable = { ...build, video: { ...build.video, port: profile.id === 'B' ? 'HDMI' : 'VGA' } };
    parseBuildFile(exportBuildFile(wrongCable));
    assert.ok(checkBuild(wrongCable).errors > 0, code + ': detección E2');
    incidentChecks += 2;
    await writeFile(path.join(output, 'soluciones-docente', code + '.json'), text + '\n', 'utf8');
    const firstOption = profileIndex * 8 + (variant - 1) * 2 + 1;
    rows.push(`| ${firstOption}–${firstOption + 1} | ${code} | ${totalPrice(build)} € | ${profile.budgets[variant - 1]} € | ${result.errors} | ${result.warnings} | ${result.power.recommended} W |`);
  }
}

await writeFile(path.join(output, 'resultado-validacion.md'), [
  '# Validación del banco de encargos',
  '',
  'Fecha: ' + new Date().toISOString().slice(0, 10) + '.',
  '',
  'Se han comprobado 16 montajes de referencia para los 32 encargos. Todos se exportan e importan con el formato del simulador, cumplen los requisitos del enunciado y están dentro de su presupuesto. El motor de compatibilidad devuelve cero errores y cero advertencias.',
  '',
  'Se han introducido y detectado las 32 incidencias (E1 y E2 en cada referencia). Restaurar el montaje de referencia resuelve la incidencia. No se evalúa aquí la dificultad educativa ni el tiempo que necesita el alumnado.',
  '',
  '| Opciones | Referencia | Coste | Presupuesto | Errores | Avisos | Fuente recomendada |',
  '|---|---|---:|---:|---:|---:|---:|',
  ...rows,
  '',
  'La información sobre alimentación independiente de la pantalla es un mensaje informativo, no una advertencia. Los resultados se refieren al catálogo y a las reglas del simulador utilizados al ejecutar este script.',
  '',
  'Para actualizar los ejemplos con Node.js 24: ejecuta `node generar-ejemplos.mjs RUTA_DEL_SIMULADOR`. Revisa también los importes escritos en el enunciado y en la guía si cambias el catálogo.',
  ''
].join('\n'), 'utf8');
console.log(JSON.stringify({ examples: rows.length, incidentChecks, output }));
