import type { Locale } from "./config";
import en from "@/content/i18n/en/shell.json";
import enHome from "@/content/i18n/en/home.json";
import enContact from "@/content/i18n/en/contact.json";
import enFoundation from "@/content/i18n/en/foundation.json";
import enSpark from "@/content/i18n/en/spark.json";
import enVoice from "@/content/i18n/en/voice.json";
import enWordmark from "@/content/i18n/en/wordmark.json";
import enColor from "@/content/i18n/en/color.json";
import enLockups from "@/content/i18n/en/lockups.json";
import enTypography from "@/content/i18n/en/typography.json";
import enTrademarks from "@/content/i18n/en/trademarks.json";
import enLayout from "@/content/i18n/en/layout.json";
import enBrandOs from "@/content/i18n/en/brandOs.json";

/* English is the source: every other language must have exactly the same keys (checked by the type annotations below). */
export type Shell = typeof en;
export type HomeText = typeof enHome;
export type ContactText = typeof enContact;
export type FoundationText = typeof enFoundation;
export type SparkText = typeof enSpark;
export type VoiceText = typeof enVoice;
export type WordmarkText = typeof enWordmark;
export type ColorText = typeof enColor;
export type LockupsText = typeof enLockups;
export type TypographyText = typeof enTypography;
export type TrademarksText = typeof enTrademarks;
export type LayoutText = typeof enLayout;
export type BrandOsText = typeof enBrandOs;

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

const wordmark: Record<Locale, () => Promise<WordmarkText>> = {
  en: async () => enWordmark,
  es: () => import("@/content/i18n/es/wordmark.json").then((m) => m.default satisfies WordmarkText),
  ar: () => import("@/content/i18n/ar/wordmark.json").then((m) => m.default satisfies WordmarkText),
};
const color: Record<Locale, () => Promise<ColorText>> = {
  en: async () => enColor,
  es: () => import("@/content/i18n/es/color.json").then((m) => m.default satisfies ColorText),
  ar: () => import("@/content/i18n/ar/color.json").then((m) => m.default satisfies ColorText),
};
const lockups: Record<Locale, () => Promise<LockupsText>> = {
  en: async () => enLockups,
  es: () => import("@/content/i18n/es/lockups.json").then((m) => m.default satisfies LockupsText),
  ar: () => import("@/content/i18n/ar/lockups.json").then((m) => m.default satisfies LockupsText),
};
const typography: Record<Locale, () => Promise<TypographyText>> = {
  en: async () => enTypography,
  es: () => import("@/content/i18n/es/typography.json").then((m) => m.default satisfies TypographyText),
  ar: () => import("@/content/i18n/ar/typography.json").then((m) => m.default satisfies TypographyText),
};

export const getShell = (lang: Locale) => shell[lang]();
export const getHomeText = (lang: Locale) => home[lang]();
export const getContactText = (lang: Locale) => contact[lang]();
export const getFoundationText = (lang: Locale) => foundation[lang]();
export const getSparkText = (lang: Locale) => spark[lang]();
export const getVoiceText = (lang: Locale) => voice[lang]();
export const getWordmarkText = (lang: Locale) => wordmark[lang]();
export const getColorText = (lang: Locale) => color[lang]();
export const getLockupsText = (lang: Locale) => lockups[lang]();

const trademarks: Record<Locale, () => Promise<TrademarksText>> = {
  en: async () => enTrademarks,
  es: () => import("@/content/i18n/es/trademarks.json").then((m) => m.default satisfies TrademarksText),
  ar: () => import("@/content/i18n/ar/trademarks.json").then((m) => m.default satisfies TrademarksText),
};
const layout: Record<Locale, () => Promise<LayoutText>> = {
  en: async () => enLayout,
  es: () => import("@/content/i18n/es/layout.json").then((m) => m.default satisfies LayoutText),
  ar: () => import("@/content/i18n/ar/layout.json").then((m) => m.default satisfies LayoutText),
};
const brandOs: Record<Locale, () => Promise<BrandOsText>> = {
  en: async () => enBrandOs,
  es: () => import("@/content/i18n/es/brandOs.json").then((m) => m.default satisfies BrandOsText),
  ar: () => import("@/content/i18n/ar/brandOs.json").then((m) => m.default satisfies BrandOsText),
};
export const getBrandOsText = (lang: Locale) => brandOs[lang]();
export const getTrademarksText = (lang: Locale) => trademarks[lang]();
export const getLayoutText = (lang: Locale) => layout[lang]();
export const getTypographyText = (lang: Locale) => typography[lang]();

/** Fills {placeholders} in a translated string. Values can be React nodes; each is isolated for mixed-direction text. */
export type TemplatePart = { key: string } | { text: string };
export function splitTemplate(template: string, keys: string[]): TemplatePart[] {
  const re = new RegExp(`(\\{(?:${keys.join("|")})\\})`);
  return template.split(re).map((part) => {
    const name = part.match(/^\{(.+)\}$/)?.[1];
    return name && keys.includes(name) ? { key: name } : { text: part };
  });
}
