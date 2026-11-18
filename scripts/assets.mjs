/* Asset pipeline: validate names in brand-assets/<brand>/, bundle with tokens, write the download zip.
   Usage: npm run assets [brand…] [--check]   (--check validates only, writes nothing) */
import { cpSync, existsSync, mkdirSync, mkdtempSync, readdirSync, rmSync, statSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, relative } from "node:path";
import { execFileSync } from "node:child_process";
import { brandsFromArgs, tokensPath, readJson, log, fail } from "./lib.mjs";

const args = process.argv.slice(2);
const checkOnly = args.includes("--check");

/* Section packs served by the brand center next to the full zip, one per page (as on the reference brand center).
   Each pack is the asset files matching its patterns; `tokens: true` adds tokens.json and the generated files.
   `strip` removes a leading folder so the zip keeps the pack's own folder structure (e.g. the lockup releases). */
const PACKS = {
  spark: { files: [/^logo\/(svg|png)\/[^/]*-mark-/, /^logo\/app-icons\//] },
  wordmark: { files: [/^logo\/(svg|png)\/[^/]*-wordmark-/] },
  "brand-lockups": { files: [/^lockups\/Brand Lock Ups & Guidelines\//], strip: "lockups/" },
  "vendor-lockups": { files: [/^lockups\/VTA Logos & Guidelines\//], strip: "lockups/" },
  typography: { files: [/^fonts\/.+\.(ttf|otf|woff2?)$/, /^licenses\//] },
  color: { files: [], tokens: true },
};

/* Naming rules from 10-assets-and-naming.md. Each folder prefix maps to the pattern its files must match. */
const rules = (slug) => [
  ["logo/app-icons/", /^(ios-\d+\.png|android-(foreground|background)\.png|favicon\.ico|apple-touch-icon\.png)$/],
  ["logo/", new RegExp(`^${slug}-(mark|wordmark|lockup-h|lockup-v)(-(primary|reverse|mono))?-[a-z]+(@[23]x)?\\.(svg|png|pdf|eps)$`)],
  ["icons/", /^icon-[a-z0-9-]+\.svg$/],
  ["imagery/photo/", /^photo-[a-z0-9-]+\.(jpe?g|png|heic|webp)$/],
  ["imagery/illustration/", /^illus-[a-z0-9-]+(@2x)?\.(svg|png)$/],
  ["fonts/", /^[A-Za-z0-9]+-[A-Za-z0-9]+\.(ttf|otf|woff2?)$/],
  ["", /^[a-z0-9][a-z0-9@._-]*$/], // everything else: lowercase, no spaces
];

function walk(dir, base = dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (name === ".gitkeep" || name === ".DS_Store" || name === "dist") return [];
    return statSync(p).isDirectory() ? walk(p, base) : [relative(base, p)];
  });
}

let problems = 0;
for (const b of brandsFromArgs(args)) {
  log.step(`${b.slug}: assets`);
  if (!b.assetsDir || !existsSync(b.assetsDir)) { log.warn("no assets folder registered, skipped"); continue; }

  const files = walk(b.assetsDir);
  for (const f of files) {
    const name = f.split("/").pop();
    const [, re] = rules(b.slug).find(([prefix]) => f.startsWith(prefix));
    if (!re.test(name)) { log.err(`bad name: ${f} (expected ${re})`); problems++; }
  }
  log.ok(`${files.length} file(s) checked`);
  if (checkOnly || problems) continue;

  const { version } = readJson(tokensPath(b));
  const stage = mkdtempSync(join(tmpdir(), "rectio-assets-"));
  const root = join(stage, `${b.slug}-brand-assets`);
  cpSync(b.assetsDir, root, { recursive: true, filter: (s) => !/(\/dist|\.gitkeep|\.DS_Store)$/.test(s) });
  mkdirSync(join(root, "tokens"), { recursive: true });
  cpSync(tokensPath(b), join(root, "tokens", "tokens.json"));
  const generated = join(b.docsDir, "generated");
  if (existsSync(generated)) cpSync(generated, join(root, "tokens", "generated"), { recursive: true });
  writeFileSync(join(root, "README.txt"), `${b.name} brand assets v${version}\nNaming and usage: see 10-assets-and-naming.md in the brand docs.\n`);

  const dist = join(b.assetsDir, "dist");
  mkdirSync(dist, { recursive: true });
  const zipPath = join(dist, `${b.slug}-brand-assets-v${version}.zip`);
  rmSync(zipPath, { force: true });
  execFileSync("zip", ["-qrX", zipPath, `${b.slug}-brand-assets`], { cwd: stage });
  rmSync(stage, { recursive: true, force: true });
  log.ok(relative(join(b.assetsDir, "../.."), zipPath));

  if (b.siteDir) {
    const downloads = join(b.siteDir, "public", "downloads");
    mkdirSync(downloads, { recursive: true });
    cpSync(zipPath, join(downloads, "brand-assets.zip"));
    log.ok(`copied to ${b.site}/public/downloads/brand-assets.zip`);

    for (const [name, pack] of Object.entries(PACKS)) {
      const picked = files.filter((f) => pack.files.some((re) => re.test(f)));
      if (!picked.length && !pack.tokens) { log.warn(`${name} pack: no matching files, skipped`); continue; }
      const packStage = mkdtempSync(join(tmpdir(), `rectio-${name}-`));
      const packRoot = join(packStage, `${b.slug}-${name}`);
      for (const f of picked) {
        const to = join(packRoot, pack.strip && f.startsWith(pack.strip) ? f.slice(pack.strip.length) : f);
        mkdirSync(join(to, ".."), { recursive: true });
        cpSync(join(b.assetsDir, f), to);
      }
      if (pack.tokens) {
        mkdirSync(join(packRoot, "tokens"), { recursive: true });
        cpSync(tokensPath(b), join(packRoot, "tokens", "tokens.json"));
        if (existsSync(generated)) cpSync(generated, join(packRoot, "tokens", "generated"), { recursive: true });
      }
      writeFileSync(join(packRoot, "README.txt"), `${b.name} ${name} assets v${version}\nNaming and usage: see 10-assets-and-naming.md in the brand docs.\n`);
      const packZip = join(downloads, `${name}.zip`);
      rmSync(packZip, { force: true });
      execFileSync("zip", ["-qrX", packZip, `${b.slug}-${name}`], { cwd: packStage });
      rmSync(packStage, { recursive: true, force: true });
      log.ok(`${b.site}/public/downloads/${name}.zip (${picked.length} file(s)${pack.tokens ? " + tokens" : ""})`);
    }
  }
}
if (problems) fail(`${problems} asset naming problem(s)`);
