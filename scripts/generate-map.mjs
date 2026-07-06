/**
 * Pre-generates the dotted world map (via `dotted-map`) used by Countries.svelte.
 * Run: node scripts/generate-map.mjs
 *   → static/img/worldmap-dots.svg   (dots as a single <path>, used as <img>)
 *   → src/lib/data/mappins.json      (pin positions as % of the viewBox)
 *
 * Region is cropped to cover all study destinations (USA → Europe → Japan)
 * without the empty southern hemisphere, keeping the section compact.
 */
import DottedMap from 'dotted-map';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const countries = [
	{ id: 'austria', lat: 47.5, lng: 14.5 },
	{ id: 'italy', lat: 42.8, lng: 12.8 },
	{ id: 'england', lat: 52.5, lng: -1.5 },
	{ id: 'usa', lat: 39.5, lng: -98.0 },
	{ id: 'georgia', lat: 42.0, lng: 43.5 },
	{ id: 'germany', lat: 51.0, lng: 10.4 },
	{ id: 'netherlands', lat: 52.2, lng: 5.5 },
	{ id: 'hungary', lat: 47.2, lng: 19.5 },
	{ id: 'japan', lat: 36.5, lng: 138.8 },
	{ id: 'jordan', lat: 31.0, lng: 36.5 },
	{ id: 'latvia', lat: 57.0, lng: 24.9 },
	{ id: 'lithuania', lat: 55.2, lng: 23.9 },
	{ id: 'moldova', lat: 47.2, lng: 28.5 },
	{ id: 'china', lat: 34.0, lng: 108.0 },
	{ id: 'slovakia', lat: 48.7, lng: 19.5 },
	{ id: 'spain', lat: 40.2, lng: -3.7 },
	{ id: 'poland', lat: 52.0, lng: 19.3 },
	{ id: 'france', lat: 46.6, lng: 2.4 },
	{ id: 'czechia', lat: 49.8, lng: 15.4 },
	{ id: 'korea', lat: 36.5, lng: 127.9 },
	{ id: 'croatia', lat: 45.3, lng: 16.2 },
	{ id: 'romania', lat: 45.9, lng: 24.9 },
	{ id: 'switzerland', lat: 46.8, lng: 8.2 },
	{ id: 'israel', lat: 31.8, lng: 35.1 }
];

const map = new DottedMap({
	height: 56,
	grid: 'diagonal',
	region: { lat: { min: 8, max: 68 }, lng: { min: -132, max: 152 } }
});

const points = map.getPoints();
const { width, height } = map.image;

// All dots as a single zero-length-segment path with round linecap:
// each `M x y h.01` renders as a dot of stroke-width diameter. Tiny file, tiny DOM.
const d = points.map(({ x, y }) => `M${+x.toFixed(1)} ${+y.toFixed(1)}h.01`).join('');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}"><path d="${d}" fill="none" stroke="#5d9bcc" stroke-width="0.62" stroke-linecap="round"/></svg>`;
writeFileSync(join(root, 'static/img/worldmap-dots.svg'), svg);

const pins = {};
for (const c of countries) {
	const { x, y } = map.getPin({ lat: c.lat, lng: c.lng });
	pins[c.id] = { x: +((x / width) * 100).toFixed(2), y: +((y / height) * 100).toFixed(2) };
}

const dataDir = join(root, 'src/lib/data');
mkdirSync(dataDir, { recursive: true });
writeFileSync(join(dataDir, 'mappins.json'), JSON.stringify({ ratio: width / height, pins }));
console.log(`points: ${points.length}, size: ${width}x${height}`);
