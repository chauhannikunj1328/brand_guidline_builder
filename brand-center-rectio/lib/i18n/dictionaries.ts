import type { Locale } from "./config";
import en from "@/content/i18n/en/shell.json";
import enHome from "@/content/i18n/en/home.json";
import enContact from "@/content/i18n/en/contact.json";
import enFoundation from "@/content/i18n/en/foundation.json";
import enSpark from "@/content/i18n/en/spark.json";
import enVoice from "@/content/i18n/en/voice.json";

/* English is the source: every other language must have exactly the same keys (checked by the type annotations below). */
export type Shell = typeof en;
export type HomeText = typeof enHome;
export type ContactText = typeof enContact;
export type FoundationText = typeof enFoundation;
export type SparkText = typeof enSpark;
export type VoiceText = typeof enVoice;

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

const foundation: Record<Locale, () => Promise<FoundationText>> = {
  en: async () => enFoundation,
  es: () => import("@/content/i18n/es/foundation.json").then((m) => m.default satisfies FoundationText),
  ar: () => import("@/content/i18n/ar/foundation.json").then((m) => m.default satisfies FoundationText),
};
const spark: Record<Locale, () => Promise<SparkText>> = {
  en: async () => enSpark,
  es: () => import("@/content/i18n/es/spark.json").then((m) => m.default satisfies SparkText),
  ar: () => import("@/content/i18n/ar/spark.json").then((m) => m.default satisfies SparkText),
};
const voice: Record<Locale, () => Promise<VoiceText>> = {
  en: async () => enVoice,
  es: () => import("@/content/i18n/es/voice.json").then((m) => m.default satisfies VoiceText),
  ar: () => import("@/content/i18n/ar/voice.json").then((m) => m.default satisfies VoiceText),
};

export const getShell = (lang: Locale) => shell[lang]();
export const getHomeText = (lang: Locale) => home[lang]();
export const getContactText = (lang: Locale) => contact[lang]();
export const getFoundationText = (lang: Locale) => foundation[lang]();
export const getSparkText = (lang: Locale) => spark[lang]();
export const getVoiceText = (lang: Locale) => voice[lang]();

/** Fills {placeholders} in a translated string. Values can be React nodes; each is isolated for mixed-direction text. */
export type TemplatePart = { key: string } | { text: string };
export function splitTemplate(template: string, keys: string[]): TemplatePart[] {
  const re = new RegExp(`(\\{(?:${keys.join("|")})\\})`);
  return template.split(re).map((part) => {
    const name = part.match(/^\{(.+)\}$/)?.[1];
    return name && keys.includes(name) ? { key: name } : { text: part };
  });
}
