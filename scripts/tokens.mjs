/* Token pipeline: <docs>/tokens.json → <docs>/generated/{tokens.css, tokens.dark.css, tokens.js, Colors.swift, BrandColors.kt}.
   Usage: npm run tokens [brand…]   (default: every brand with docs) */
import StyleDictionary from "style-dictionary";
import { join } from "node:path";
import { brandsFromArgs, tokensPath, log } from "./lib.mjs";

const MODES = ["light", "dark"];
const isMode = (mode) => (t) => t.path[0] === "semantic" && t.path[1] === mode;
const notDark = (t) => !isMode("dark")(t);
const isColor = (t) => (t.$type ?? t.type) === "color";

// Web names drop "semantic" and the mode so light and dark share one variable name: --bg-page, --text-primary…
const webName = {
  name: "name/rectio-web",
  type: "name",
  transform: (t) => t.path.filter((p, i) => !(i === 0 && p === "semantic") && !(i === 1 && MODES.includes(p))).join("-"),
};
// JS/native names keep the mode (lightBgPage / darkBgPage) because there is no CSS cascade to switch them.
const camel = (parts) => parts.map((p, i) => (i ? p[0].toUpperCase() + p.slice(1) : p)).join("").replace(/-(\w)/g, (_, c) => c.toUpperCase());
const nativeName = {
  name: "name/rectio-native",
  type: "name",
  transform: (t) => camel(t.path.filter((p, i) => !(i === 0 && p === "semantic"))),
};

for (const b of brandsFromArgs(process.argv.slice(2))) {
  log.step(`${b.slug}: building tokens`);
  const out = join(b.docsDir, "generated") + "/";
  const sd = new StyleDictionary({
    source: [tokensPath(b)],
    log: { verbosity: "silent", warnings: "disabled" },
    hooks: { transforms: { [webName.name]: webName, [nativeName.name]: nativeName } },
    platforms: {},
  });
  const cssTransforms = sd.hooks.transformGroups.css.filter((t) => t !== "name/kebab" && t !== "size/rem").concat(webName.name);
  const header = { fileHeader: () => [`Generated from ${b.docs}/tokens.json by \`npm run tokens\`. Do not edit.`] };
  const ext = await sd.extend({
    platforms: {
      css: {
        transforms: cssTransforms,
        buildPath: out,
        files: [
          { destination: "tokens.css", format: "css/variables", filter: notDark, options: { selector: ":root", outputReferences: true, ...header } },
          { destination: "tokens.dark.css", format: "css/variables", filter: isMode("dark"), options: { selector: '[data-theme="dark"]', ...header } },
        ],
      },
      js: {
        transforms: cssTransforms.filter((t) => t !== webName.name).concat(nativeName.name),
        buildPath: out,
        files: [{ destination: "tokens.js", format: "javascript/es6", options: header }],
      },
      swift: {
        transforms: ["attribute/cti", nativeName.name, "color/UIColorSwift"],
        buildPath: out,
        files: [{ destination: "Colors.swift", format: "ios-swift/class.swift", filter: isColor, options: { className: "BrandColors", ...header } }],
      },
      compose: {
        transforms: ["attribute/cti", nativeName.name, "color/composeColor"],
        buildPath: out,
        files: [{ destination: "BrandColors.kt", format: "compose/object", filter: isColor, options: { className: "BrandColors", packageName: `brand.${b.slug}`, ...header } }],
      },
    },
  });
  await ext.buildAllPlatforms();
  log.ok(`${b.docs}/generated/ (css, dark css, js, swift, kotlin)`);
}
