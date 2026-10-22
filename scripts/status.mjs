/* Overview of every brand: status, token version, contrast waivers, and which parts exist.
   Usage: npm run status */
import { existsSync } from "node:fs";
import { config, brand, tokensPath, readJson } from "./lib.mjs";

const rows = Object.keys(config().brands).map((slug) => {
  const b = brand(slug);
  const hasTokens = b.docsDir && existsSync(tokensPath(b));
  const version = hasTokens ? readJson(tokensPath(b)).version : "—";
  return {
    brand: slug,
    status: b.status,
    version: /\{\{/.test(version) ? "unfilled" : version,
    docs: b.docs ?? "—",
    assets: b.assets ?? "—",
    site: b.site ?? "—",
    waivers: Object.keys(b.contrastWaivers ?? {}).length,
  };
});
console.table(rows);
