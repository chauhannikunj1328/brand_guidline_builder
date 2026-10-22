/* Release a brand version: verify, rebuild tokens + assets, and tag <brand>@v<version>.
   Usage: npm run release -- <brand>
   Rules: status must be approved or live, tokens.json version must match the newest CHANGELOG entry,
   and the git tree must be clean. The tag is created locally; push it yourself with `git push --tags`. */
import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ROOT, brand, tokensPath, readJson, fail, log } from "./lib.mjs";

const slug = process.argv[2];
if (!slug) fail("Usage: npm run release -- <brand>");
const b = brand(slug);
if (!["approved", "live"].includes(b.status)) fail(`${slug} is "${b.status}" — set status to "approved" in rectio.config.json first`);
if (!b.docsDir) fail(`${slug} has no docs to release`);

const git = (...a) => execFileSync("git", a, { cwd: ROOT, encoding: "utf8" }).trim();

const { version } = readJson(tokensPath(b));
const changelog = readFileSync(join(b.docsDir, "CHANGELOG.md"), "utf8");
const top = changelog.match(/^## \[([^\]]+)\]/m)?.[1];
log.step("Version");
if (top !== version) fail(`tokens.json is ${version} but the newest CHANGELOG entry is ${top ?? "missing"}`);
log.ok(`${version} matches CHANGELOG`);

const tag = `${slug}@v${version}`;
if (git("tag", "--list", tag)) fail(`Tag ${tag} already exists — bump the version in tokens.json and CHANGELOG.md`);
if (git("status", "--porcelain")) fail("Working tree has uncommitted changes — commit them first");

for (const [label, script] of [["Checks", "check.mjs"], ["Tokens", "tokens.mjs"], ["Assets", "assets.mjs"]]) {
  log.step(label);
  const r = spawnSync("node", [join("scripts", script), slug], { cwd: ROOT, stdio: "inherit" });
  if (r.status !== 0) fail(`${label} failed — nothing was tagged`);
}
if (git("status", "--porcelain", "--", join(b.docs, "generated")))
  fail(`Generated tokens changed during release — commit ${b.docs}/generated/ and run release again`);

git("tag", "-a", tag, "-m", `${b.name} brand ${version}`);
log.step(`Tagged ${tag}`);
console.log(`  Zip: ${b.assets}/dist/${slug}-brand-assets-v${version}.zip\n  Push the tag when ready: git push origin ${tag}`);
