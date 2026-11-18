"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Locale } from "@/lib/i18n/config";
import { LANGUAGES } from "@/lib/i18n/config";
import type { Shell } from "@/lib/i18n/dictionaries";

type Ctx = { lang: Locale; dir: "ltr" | "rtl"; t: Shell };
const I18nCtx = createContext<Ctx | null>(null);

/** Gives client components the language and the shared (header, menu, footer) text. Page text stays on the server. */
export function I18nProvider({ lang, shell, children }: { lang: Locale; shell: Shell; children: ReactNode }) {
  return <I18nCtx.Provider value={{ lang, dir: LANGUAGES[lang].dir, t: shell }}>{children}</I18nCtx.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nCtx);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
