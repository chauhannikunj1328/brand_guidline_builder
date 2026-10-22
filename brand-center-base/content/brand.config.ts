/* ------------------------------------------------------------------
   BRAND CONFIG — names and copy. Colours live in app/globals.css,
   the logo in components/Logo.tsx.
   ------------------------------------------------------------------ */
export const brand = {
  name: "Brand",
  legalName: "Company Name Ltd.",
  /** What the symbol/mark is called, e.g. "The Spark" */
  markName: "The Mark",
  markShort: "Mark",
  tagline: "Your tagline here.",
  taglineLines: ["Your tagline", "here."],
  description: "Guidelines, assets and tools for applying the brand consistently everywhere it shows up.",
  fontName: "Brand Sans",
  fontHeadline: "Brand Sans Headline",
  fontMono: "Brand Sans Mono",
  fontUI: "Brand Sans UI",
  contactTeam: "Brand Creative Studio",
  contactEmail: "brand@example.com",
  siteLabel: "brand.com",

  palette: {
    primary: { name: "Primary", hex: "#262626", cmyk: "C0 M0 Y0 K85", rgb: "R38 G38 B38", pms: "PMS 447 C" },
    ink:     { name: "Ink",     hex: "#0F0F0F", cmyk: "C0 M0 Y0 K94", rgb: "R15 G15 B15", pms: "PMS Black 6 C" },
    accent:  { name: "Accent",  hex: "#8C8C8C", cmyk: "C0 M0 Y0 K45", rgb: "R140 G140 B140", pms: "PMS Cool Gray 7 C" },
    tint:    { name: "Light",   hex: "#E9E9E9", cmyk: "C0 M0 Y0 K9",  rgb: "R233 G233 B233", pms: "PMS Cool Gray 1 C" },
    mid:     { name: "Mid",     hex: "#BFBFBF", cmyk: "C0 M0 Y0 K25", rgb: "R191 G191 B191", pms: "PMS Cool Gray 4 C" },
    white:   { name: "White",   hex: "#FFFFFF", cmyk: "C0 M0 Y0 K0",  rgb: "R255 G255 B255", pms: "PMS White" },
  },

  hero: {
    headline: "Welcome to the brand center",
    intro: "A short statement about what this identity stands for and where it is going.",
    body: "It all starts here. This guide is your go-to resource for understanding and applying our assets, helping you be a good steward of the brand.",
    contactLabel: "Questions?",
  },
  statement: {
    body: "A sentence that connects the tagline to the brand purpose. Our look may change, but what we stand for stays the same, every single day.",
  },

  downloads: { all: "/downloads/brand-assets.zip", label: "Download the assets" },

  /** Menu structure (matches the overlay: 4 primary items, one with sub-pages) */
  menu: [
    { label: "Brand Foundation", href: "/brand-foundation" },
    { label: "Brand Voice", href: "/brand-voice" },
    {
      label: "Brand Identity",
      children: [
        { label: "The Mark", href: "/logo" },
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
      { label: "Brand Foundations", href: "/brand-foundation" },
      { label: "Brand Voice", href: "/brand-voice" },
    ],
    [
      { label: "Mark", href: "/logo" },
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
