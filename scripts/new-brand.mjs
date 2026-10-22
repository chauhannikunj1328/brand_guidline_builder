/* Start a new brand from the template.
   Usage: npm run new-brand -- <slug> "<Display Name>"
   Creates brand-docs-<slug>/ (from the template) and brand-assets/<slug>/, and registers it as "draft". */
import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, CONFIG_PATH, config, writeJson, fail, log } from "./lib.mjs";

const [slug, name] = process.argv.slice(2);
if (!slug || !name) fail('Usage: npm run new-brand -- <slug> "<Display Name>"');
if (!/^[a-z][a-z0-9-]*$/.test(slug)) fail("Slug must be lowercase letters, digits and hyphens, e.g. rectio or blue-river");

const cfg = config();
if (cfg.brands[slug]) fail(`Brand "${slug}" already exists`);

const docs = `brand-docs-${slug}`;
const assets = `brand-assets/${slug}`;
if (existsSync(join(ROOT, docs))) fail(`${docs}/ already exists`);

log.step(`Creating ${name} (${slug})`);
cpSync(join(ROOT, cfg.template), join(ROOT, docs), {
  recursive: true,
  filter: (src) => !src.includes("example-rectio") && !src.endsWith(".DS_Store"),
});
log.ok(`${docs}/ from ${cfg.template}/`);

for (const d of ["logo/svg", "logo/png", "logo/app-icons", "fonts", "icons/svg", "imagery/photo", "imagery/illustration", "templates"]) {
  mkdirSync(join(ROOT, assets, d), { recursive: true });
  writeFileSync(join(ROOT, assets, d, ".gitkeep"), "");
}
log.ok(`${assets}/`);

cfg.brands[slug] = { name, status: "draft", docs, assets, site: null, contrastWaivers: {} };
writeJson(CONFIG_PATH, cfg);
log.ok(`registered in rectio.config.json as "draft"`);

console.log(`
Next steps
  1. Fill ${docs}/BRAND-BRIEF.md
  2. Ask Claude to run ${docs}/GENERATE-PROMPT.md on that folder
  3. Set status to "in-review" in rectio.config.json, then run: npm run check:quick -- ${slug}
  4. Add logo files to ${assets}/ and run: npm run assets -- ${slug}
  5. When approved: set status "approved" and run: npm run release -- ${slug}
`);
