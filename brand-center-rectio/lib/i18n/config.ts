/* Languages: English at the plain addresses (/color), Spanish at /es/color, Arabic at /ar/color.
   A page only gets a language prefix once it is listed in TRANSLATED. Until then the language switcher and every
   link keep visitors on the English page, and a direct /es/... or /ar/... address redirects to English,
   so a half-translated page is never shown. Add a page here in the same change that translates it. */
export const LOCALES = ["en", "es", "ar"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "en";

export const LANGUAGES: Record<Locale, { name: string; short: string; dir: "ltr" | "rtl" }> = {
  en: { name: "English", short: "EN", dir: "ltr" },
  es: { name: "Español", short: "ES", dir: "ltr" },
  ar: { name: "العربية", short: "AR", dir: "rtl" },
};

export const hasLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);

/** Pages (as plain English paths) that exist in each non-default language. */
export const TRANSLATED: Record<Exclude<Locale, "en">, readonly string[]> = {
  es: ["/", "/contact", "/brand-foundation", "/brand-voice", "/logo"],
  ar: ["/", "/contact", "/brand-foundation", "/brand-voice", "/logo"],
};

export const normalizePath = (path: string) => (path.length > 1 ? path.replace(/\/+$/, "") : path) || "/";

export function isTranslated(lang: Locale, path: string) {
  if (lang === "en") return true;
  return TRANSLATED[lang].includes(normalizePath(path));
}
