import type { Shell } from "./dictionaries";

/* Site navigation. Structure and addresses live here; the labels come from the language files (nav.<key>). */
type NavKey = keyof Shell["nav"];

export const MENU = [
  { key: "foundation", href: "/brand-foundation" },
  { key: "voice", href: "/brand-voice" },
  {
    key: "identity",
    children: [
      { key: "spark", href: "/logo" },
      { key: "wordmark", href: "/wordmark" },
      { key: "color", href: "/color" },
      { key: "typography", href: "/typography" },
      { key: "layout", href: "/layout" },
      { key: "brandOs", href: "/brand-os" },
      { key: "lockups", href: "/lockups" },
    ],
  },
  { key: "contact", href: "/contact" },
] as const satisfies readonly ({ key: NavKey; href: string } | { key: NavKey; children: readonly { key: NavKey; href: string }[] })[];

export const TRADEMARKS = { key: "trademarks", href: "/trademarks" } as const;

/** Footer columns: the first link of each column is its heading. */
export const FOOTER_COLUMNS = [
  [{ key: "foundation", href: "/brand-foundation" }, { key: "voice", href: "/brand-voice" }],
  [{ key: "sparkShort", href: "/logo" }, { key: "wordmark", href: "/wordmark" }, { key: "color", href: "/color" }],
  [{ key: "typography", href: "/typography" }, { key: "layout", href: "/layout" }, { key: "brandOs", href: "/brand-os" }, { key: "lockups", href: "/lockups" }],
] as const satisfies readonly (readonly { key: NavKey; href: string }[])[];
