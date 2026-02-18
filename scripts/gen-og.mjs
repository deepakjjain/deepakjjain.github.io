/**
 * Generates public/og-image.png (1200×630) using sharp + SVG.
 * Run once: node scripts/gen-og.mjs
 */
import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '..', 'public', 'og-image.png');

const W = 1200;
const H = 630;

// Colour tokens (dark theme matching the site)
const BG       = '#0d1117';
const SURFACE  = '#161b22';
const BORDER   = '#30363d';
const PRIMARY  = '#58a6ff';   // DaisyUI primary in dark theme
const WHITE    = '#f0f6fc';
const MUTED    = '#8b949e';

// Tech stack badges to display
const stack = ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Python', 'Docker'];

const badgeWidth  = 130;
const badgeHeight = 34;
const badgeGap    = 12;
const totalBadgeW = stack.length * badgeWidth + (stack.length - 1) * badgeGap;
const badgeStartX = (W - totalBadgeW) / 2;
const badgeY      = 430;

const badges = stack.map((tech, i) => {
  const x = badgeStartX + i * (badgeWidth + badgeGap);
  return `
    <rect x="${x}" y="${badgeY}" width="${badgeWidth}" height="${badgeHeight}"
      rx="6" fill="none" stroke="${BORDER}" stroke-width="1.5"/>
    <text x="${x + badgeWidth / 2}" y="${badgeY + 22}"
      text-anchor="middle" fill="${MUTED}"
      font-family="ui-monospace, SFMono-Regular, Menlo, monospace"
      font-size="13">${tech}</text>
  `;
}).join('');

// Decorative dots grid (top-right)
const dots = [];
for (let row = 0; row < 6; row++) {
  for (let col = 0; col < 8; col++) {
    dots.push(`<circle cx="${W - 80 - col * 22}" cy="${60 + row * 22}" r="1.5" fill="${BORDER}"/>`);
  }
}

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"
  xmlns="http://www.w3.org/2000/svg">

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="${BG}"/>

  <!-- Decorative dot grid -->
  ${dots.join('')}

  <!-- Card surface -->
  <rect x="60" y="60" width="${W - 120}" height="${H - 120}"
    rx="16" fill="${SURFACE}" stroke="${BORDER}" stroke-width="1.5"/>

  <!-- Top accent bar -->
  <rect x="60" y="60" width="${W - 120}" height="4" rx="2" fill="${PRIMARY}"/>

  <!-- Eyebrow label -->
  <text x="${W / 2}" y="180"
    text-anchor="middle" fill="${PRIMARY}"
    font-family="ui-sans-serif, system-ui, -apple-system, sans-serif"
    font-size="15" font-weight="600" letter-spacing="4">
    FULL-STACK DEVELOPER
  </text>

  <!-- Name -->
  <text x="${W / 2}" y="280"
    text-anchor="middle" fill="${WHITE}"
    font-family="ui-sans-serif, system-ui, -apple-system, sans-serif"
    font-size="80" font-weight="700" letter-spacing="-2">
    Deepak Jain
  </text>

  <!-- Tagline -->
  <text x="${W / 2}" y="360"
    text-anchor="middle" fill="${MUTED}"
    font-family="ui-sans-serif, system-ui, -apple-system, sans-serif"
    font-size="22">
    Building scalable web applications · deepakjjain.github.io
  </text>

  <!-- Divider -->
  <line x1="${W / 2 - 40}" y1="395" x2="${W / 2 + 40}" y2="395"
    stroke="${BORDER}" stroke-width="1.5"/>

  <!-- Tech stack badges -->
  ${badges}

  <!-- Bottom URL label -->
  <text x="${W / 2}" y="${H - 52}"
    text-anchor="middle" fill="${BORDER}"
    font-family="ui-monospace, SFMono-Regular, Menlo, monospace"
    font-size="13">
    github.com/deepakjjain
  </text>

</svg>
`.trim();

await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile(outPath);

console.log(`OG image written → ${outPath}`);
