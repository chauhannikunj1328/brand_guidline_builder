import type { Locale } from "./config";
import en from "@/content/i18n/en/shell.json";
import enHome from "@/content/i18n/en/home.json";
import enContact from "@/content/i18n/en/contact.json";

/* English is the source: every other language must have exactly the same keys (checked by the type annotations below). */
export type Shell = typeof en;
export type HomeText = typeof enHome;
export type ContactText = typeof enContact;

const shell: Record<Locale, () => Promise<Shell>> = {
  en: async () => en,
  es: () => import("@/content/i18n/es/shell.json").then((m) => m.default satisfies Shell),
  ar: () => import("@/content/i18n/ar/shell.json").then((m) => m.default satisfies Shell),
};
const home: Record<Locale, () => Promise<HomeText>> = {
  en: async () => enHome,
  es: () => import("@/content/i18n/es/home.json").then((m) => m.default satisfies HomeText),
  ar: () => import("@/content/i18n/ar/home.json").then((m) => m.default satisfies HomeText),
};
const contact: Record<Locale, () => Promise<ContactText>> = {
  en: async () => enContact,
  es: () => import("@/content/i18n/es/contact.json").then((m) => m.default satisfies ContactText),
  ar: () => import("@/content/i18n/ar/contact.json").then((m) => m.default satisfies ContactText),
};

export const getShell = (lang: Locale) => shell[lang]();
export const getHomeText = (lang: Locale) => home[lang]();
export const getContactText = (lang: Locale) => contact[lang]();

/** Fills {placeholders} in a translated string. Values can be React nodes; each is isolated for mixed-direction text. */
export type TemplatePart = { key: string } | { text: string };
export function splitTemplate(template: string, keys: string[]): TemplatePart[] {
  const re = new RegExp(`(\\{(?:${keys.join("|")})\\})`);
  return template.split(re).map((part) => {
    const name = part.match(/^\{(.+)\}$/)?.[1];
    return name && keys.includes(name) ? { key: name } : { text: part };
  });
}
