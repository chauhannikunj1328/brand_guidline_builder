import { DEFAULT_LOCALE, LOCALES, isTranslated, type Locale } from "./config";

const prefixed = (lang: Locale, path: string) => (lang === DEFAULT_LOCALE ? path : `/${lang}${path === "/" ? "" : path}`);

/** Canonical address and hreflang alternates for a page, so search engines connect the language versions. */
export function alternatesFor(lang: Locale, path: string) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) if (isTranslated(l, path)) languages[l] = prefixed(l, path);
  languages["x-default"] = path;
  return { canonical: prefixed(lang, path), languages };
}
