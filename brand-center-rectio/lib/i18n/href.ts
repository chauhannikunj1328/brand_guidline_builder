import { DEFAULT_LOCALE, isTranslated, type Locale } from "./config";

/** `/color` → `/es/color` when that page is translated, otherwise the English path. Hash and query are kept. */
export function localizeHref(lang: Locale, href: string) {
  if (lang === DEFAULT_LOCALE || !href.startsWith("/") || href.startsWith("//")) return href;
  const cut = href.search(/[?#]/);
  const path = cut === -1 ? href : href.slice(0, cut);
  const rest = cut === -1 ? "" : href.slice(cut);
  if (!isTranslated(lang, path)) return href;
  return `/${lang}${path === "/" ? "" : path}${rest}`;
}

/** Removes a leading /es or /ar from a browser path. */
export const stripLocale = (pathname: string) => pathname.replace(/^\/(es|ar)(?=\/|$)/, "") || "/";
