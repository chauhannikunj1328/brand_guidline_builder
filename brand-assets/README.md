# Brand assets (source files)

One folder per brand, laid out as described in that brand's `10-assets-and-naming.md`:

```
<brand>/
  logo/svg · logo/png · logo/app-icons
  fonts/ · icons/svg/ · imagery/photo · imagery/illustration · templates/
```

- Name files `{brand}-{element}-{variant}-{colour}[@scale].{ext}`: lowercase, hyphens, no spaces.
- `npm run assets <brand>` validates names, adds `tokens.json` + generated token files,
  and writes the download zip to `<brand>/dist/` and to the brand's site (`public/downloads/brand-assets.zip`).
- `dist/` is generated — never edit or commit it.

The Rectio mark SVGs are exported from the placeholder mark in `brand-center-rectio/components/Logo.tsx`.
