/* Shared helpers for Rectio scripts: registry lookup, logging, tokens I/O. */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const CONFIG_PATH = join(ROOT, "rectio.config.json");

export const readJson = (p) => JSON.parse(readFileSync(p, "utf8"));
export const writeJson = (p, data) => writeFileSync(p, JSON.stringify(data, null, 2) + "\n");

export const config = () => readJson(CONFIG_PATH);

/** Resolve a brand from the registry with absolute paths. Exits with a helpful error if unknown. */
export function brand(slug) {
  const cfg = config();
  const b = cfg.brands[slug];
  if (!b) fail(`Unknown brand "${slug}". Known: ${Object.keys(cfg.brands).join(", ")}`);
  const abs = (p) => (p ? join(ROOT, p) : null);
  return { slug, ...b, docsDir: abs(b.docs), assetsDir: abs(b.assets), siteDir: abs(b.site) };
}

/** Lifecycle every brand moves through. Drafts still contain {{PLACEHOLDERS}}, so default runs skip them. */
export const STATUSES = ["draft", "in-review", "approved", "live", "template"];

/** Brands named on the command line, or every non-draft brand that has docs (tokens). */
export function brandsFromArgs(args, { needDocs = true } = {}) {
  const slugs = args.filter((a) => !a.startsWith("-"));
  const all = Object.keys(config().brands).map(brand).filter((b) => b.status !== "draft");
  const picked = slugs.length ? slugs.map(brand) : all;
  return needDocs ? picked.filter((b) => b.docsDir && existsSync(join(b.docsDir, "tokens.json"))) : picked;
}

export const tokensPath = (b) => join(b.docsDir, "tokens.json");

export const log = {
  step: (m) => console.log(`\n▸ ${m}`),
  ok: (m) => console.log(`  ✓ ${m}`),
  warn: (m) => console.log(`  ! ${m}`),
  err: (m) => console.log(`  ✗ ${m}`),
};

export function fail(msg) {
  console.error(`\n✗ ${msg}`);
  process.exit(1);
}
