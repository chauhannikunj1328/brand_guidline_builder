import { lang as rootLang } from "next/root-params";
import { hasLocale, type Locale } from "./config";

/** The language of the current request (server components only). Falls back to English. */
export async function currentLang(): Promise<Locale> {
  const l = await rootLang();
  return hasLocale(l) ? l : "en";
}
