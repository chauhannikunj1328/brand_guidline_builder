/* Quality gate — the same checks run locally and in CI.
   Usage: npm run check [brand…]          docs, tokens, contrast, assets, then lint + typecheck + build for each site
          npm run check:quick [brand…]    same, without the slow production builds */
import { spawnSync } from "node:child_process";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { ROOT, config, brand, log } from "./lib.mjs";

const args = process.argv.slice(2);
const quick = args.includes("--quick");
const named = args.filter((a) => !a.startsWith("-"));
const brands = (named.length ? named : Object.keys(config().brands)).map(brand).filter((b) => named.length || b.status !== "draft");

const failures = [];
function run(label, cmd, cmdArgs, cwd = ROOT) {
  log.step(label);
  const r = spawnSync(cmd, cmdArgs, { cwd, stdio: "inherit" });
  if (r.status !== 0) failures.push(label);
}

const mdFiles = (dir) => readdirSync(dir).flatMap((n) => {
  const p = join(dir, n);
  if (n === "generated" || n === "node_modules") return [];
  return statSync(p).isDirectory() ? mdFiles(p) : /\.(md|json)$/.test(n) ? [p] : [];
});

for (const b of brands) {
  if (b.docsDir) {
    log.step(`${b.slug}: docs have no unfilled {{PLACEHOLDERS}}`);
    const left = mdFiles(b.docsDir).filter((f) => /\{\{[A-Z0-9_]+\}\}/.test(readFileSync(f, "utf8")));
    if (left.length) { left.forEach((f) => log.err(relative(ROOT, f))); failures.push(`${b.slug}: placeholders`); }
    else log.ok("none left");
    run(`${b.slug}: build tokens`, "node", ["scripts/tokens.mjs", b.slug]);
    run(`${b.slug}: contrast`, "node", ["scripts/contrast.mjs", b.slug]);
    run(`${b.slug}: asset names`, "node", ["scripts/assets.mjs", b.slug, "--check"]);
  }
  if (b.siteDir) {
    run(`${b.slug}: lint`, "npm", ["run", "lint"], b.siteDir);
    run(`${b.slug}: typecheck`, "npx", ["tsc", "--noEmit"], b.siteDir);
    if (!quick) run(`${b.slug}: production build`, "npm", ["run", "build"], b.siteDir);
  }
}

if (failures.length) {
  console.error(`\n✗ ${failures.length} check(s) failed:\n  - ${failures.join("\n  - ")}`);
  process.exit(1);
}
console.log(`\n✓ All checks passed${quick ? " (quick: production builds skipped)" : ""}`);
