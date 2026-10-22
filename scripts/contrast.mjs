/* WCAG 2.x contrast check on the semantic colour pairs every brand defines in tokens.json.
   Usage: npm run contrast [brand…]   Exits 1 if any pair fails its minimum, unless waived in rectio.config.json → brands.<slug>.contrastWaivers. */
import { brandsFromArgs, tokensPath, readJson, log } from "./lib.mjs";

// [foreground, background, minimum ratio]. 4.5 = AA body text, 3 = AA large text / UI parts (focus ring).
const PAIRS = [
  ["text.primary", "bg.page", 4.5],
  ["text.primary", "bg.surface", 4.5],
  ["text.primary", "bg.surface-tint", 4.5],
  ["text.secondary", "bg.page", 4.5],
  ["text.secondary", "bg.surface", 4.5],
  ["text.link", "bg.page", 4.5],
  ["text.link", "bg.surface", 4.5],
  ["text.on-brand", "bg.brand", 4.5],
  ["text.on-brand", "action.primary", 4.5],
  ["text.on-brand", "action.primary-hover", 4.5],
  ["focus.ring", "bg.page", 3],
  ["focus.ring", "bg.surface", 3],
];

const get = (obj, path) => path.split(".").reduce((o, k) => o?.[k], obj);

function resolve(tokens, value, seen = new Set()) {
  const m = typeof value === "string" && value.match(/^\{(.+)\}$/);
  if (!m) return value;
  if (seen.has(m[1])) throw new Error(`Circular alias ${m[1]}`);
  const t = get(tokens, m[1]);
  if (!t) throw new Error(`Alias {${m[1]}} does not resolve`);
  return resolve(tokens, t.$value, seen.add(m[1]));
}

function luminance(hex) {
  const h = hex.replace("#", "").slice(0, 6);
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(h.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function ratio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

let failed = 0;
let waived = 0;
for (const b of brandsFromArgs(process.argv.slice(2))) {
  const tokens = readJson(tokensPath(b));
  for (const mode of Object.keys(tokens.semantic ?? {})) {
    log.step(`${b.slug} · ${mode}`);
    for (const [fg, bg, min] of PAIRS) {
      const f = get(tokens.semantic[mode], fg);
      const k = get(tokens.semantic[mode], bg);
      if (!f || !k) { log.warn(`${fg} on ${bg}: token missing, skipped`); continue; }
      const fh = resolve(tokens, f.$value);
      const kh = resolve(tokens, k.$value);
      const r = ratio(fh, kh);
      const line = `${fg} ${fh} on ${bg} ${kh}: ${r.toFixed(2)}:1 (min ${min})`;
      const waiver = b.contrastWaivers?.[`${mode}: ${fg} on ${bg}`];
      if (r >= min) log.ok(line);
      else if (waiver) { log.warn(`${line} — WAIVED: ${waiver}`); waived++; }
      else { log.err(line); failed++; }
    }
  }
}
if (failed) { console.error(`\n✗ ${failed} contrast pair(s) below minimum`); process.exit(1); }
console.log(waived ? `\n✓ Contrast passes with ${waived} waiver(s) — see contrastWaivers in rectio.config.json` : "\n✓ All contrast pairs pass");
