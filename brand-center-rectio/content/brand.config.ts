/* ------------------------------------------------------------------
   BRAND CONFIG — names and copy. Colours live in app/globals.css,
   the logo in components/Logo.tsx.
   ------------------------------------------------------------------ */
export const brand = {
  name: "Rectio",
  legalName: "Rectio Inc.",
  /** What the symbol/mark is called */
  markName: "The Spark",
  markShort: "Spark",
  /** PLACEHOLDER — the Figma uses Walmart's slogan here; replace with Rectio's own tagline. */
  tagline: "Make it simple. Make it yours.",
  taglineLines: ["Make it simple.", "Make it yours."],
  description: "Guidelines, assets and tools for applying the Rectio brand consistently everywhere it shows up.",
  fontName: "Geist",
  fontHeadline: "Space Grotesk",
  fontMono: "Geist Mono",
  fontUI: "Geist",
  contactTeam: "Rectio Brand Studio",
  contactEmail: "brand@rectio.com",
  siteLabel: "rectio.com",

  /* Figma variables: Primary Color/Pampas, BlackColors, Grey Colors, SuccessColors. */
  palette: {
    primary: { name: "Pampas", hex: "#A5846A", cmyk: "C0 M20 Y36 K35", rgb: "R165 G132 B106", pms: "HSL 26 25 53" },
    ink:     { name: "Black", hex: "#09090B", cmyk: "C18 M18 Y0 K96", rgb: "R9 G9 B11", pms: "HSL 240 10 4" },
    accent:  { name: "Dark Pampas", hex: "#684E44", cmyk: "C0 M25 Y35 K59", rgb: "R104 G78 B68", pms: "HSL 17 21 34" },
    tint:    { name: "Pearl Bush", hex: "#DFD5C9", cmyk: "C0 M4 Y10 K13", rgb: "R223 G213 B201", pms: "HSL 33 25 83" },
    mid:     { name: "Vanilla", hex: "#CBBAA6", cmyk: "C0 M8 Y18 K20", rgb: "R203 G186 B166", pms: "HSL 32 24 72" },
    white:   { name: "White",   hex: "#FFFFFF", cmyk: "C0 M0 Y0 K0",  rgb: "R255 G255 B255", pms: "HSL 0 0 100" },
  },

  hero: {
    headline: "Welcome to your new Rectio",
    intro: "Our new identity is inspired by our history and built for our future.",
    body: "It all starts here. This guide is your go-to resource for understanding and applying our assets, helping you be a good steward of the Rectio brand.",
    contactLabel: "Questions?",
  },
  statement: {
    body: "Our look may have changed, but our purpose hasn't. We're still driven to help people do more with less, every single day.",
  },

  downloads: { all: "/downloads/brand-assets.zip", label: "Download the assets" },

  /** Menu structure (matches the overlay: 4 primary items, one with sub-pages) */
  menu: [
    { label: "Brand Foundation", href: "/brand-foundation" },
    { label: "Brand Voice", href: "/brand-voice" },
    {
      label: "Brand Identity",
      children: [
        { label: "The Spark", href: "/logo" },
        { label: "Wordmark", href: "/wordmark" },
        { label: "Color", href: "/color" },
        { label: "Typography", href: "/typography" },
        { label: "Layout", href: "/layout" },
        { label: "Brand OS", href: "/brand-os" },
        { label: "Lockups", href: "/lockups" },
        { label: "Internal Resources", href: "/internal-resources" },
      ],
    },
    { label: "Contact", href: "/contact" },
  ],
  trademarks: { label: "Trademarks", href: "/trademarks" },

  /** Footer columns (3 columns as on the reference) */
  footerNav: [
    [
      { label: "Brand Foundation", href: "/brand-foundation" },
      { label: "Brand Voice", href: "/brand-voice" },
    ],
    [
      { label: "Spark", href: "/logo" },
      { label: "Wordmark", href: "/wordmark" },
      { label: "Color", href: "/color" },
      { label: "Internal Resources", href: "/internal-resources" },
    ],
    [
      { label: "Typography", href: "/typography" },
      { label: "Layout", href: "/layout" },
      { label: "Brand OS", href: "/brand-os" },
      { label: "Lockups", href: "/lockups" },
    ],
  ],
} as const;
