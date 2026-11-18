"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { DEFAULT_LOCALE, LANGUAGES, LOCALES, isTranslated, normalizePath } from "@/lib/i18n/config";
import { stripLocale } from "@/lib/i18n/href";
import { useI18n } from "./I18nProvider";

/* Header language menu. A language is a link only if the current page exists in it; otherwise it is shown as "Soon". */
export default function LanguageSwitcher() {
  const { lang, t } = useI18n();
  const pathname = usePathname() ?? "/";
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);
  const path = normalizePath(stripLocale(pathname));

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDown); document.removeEventListener("keydown", onKey); };
  }, [open]);

  const hrefFor = (l: (typeof LOCALES)[number]) => (l === DEFAULT_LOCALE ? path : `/${l}${path === "/" ? "" : path}`);

  return (
    <div ref={box} className="relative">
      <button
        type="button"
        aria-label={t.aria.language}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 items-center gap-2 rounded-lg border border-grey-300 px-3 text-sm font-medium text-grey-950 transition-colors hover:border-pampas-700"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-4" aria-hidden="true">
          <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
        </svg>
        <span className="sm:hidden">{LANGUAGES[lang].short}</span>
        <span className="hidden sm:inline">{LANGUAGES[lang].name}</span>
      </button>
      {open && (
        <ul className="absolute end-0 top-12 z-30 w-48 overflow-hidden rounded-xl border border-grey-200 bg-white py-1 shadow-lg">
          {LOCALES.map((l) => {
            const available = isTranslated(l, path);
            const current = l === lang;
            const label = LANGUAGES[l].name;
            return (
              <li key={l}>
                {available ? (
                  <a
                    href={hrefFor(l)}
                    lang={l}
                    hrefLang={l}
                    aria-current={current ? "true" : undefined}
                    className={`flex items-center justify-between px-4 py-2.5 text-sm hover:bg-grey-50 ${current ? "font-semibold text-pampas-800" : "text-grey-950"}`}
                  >
                    {label}
                    {current && <span aria-hidden="true">✓</span>}
                  </a>
                ) : (
                  <span lang={l} aria-disabled="true" title={t.language.unavailable} className="flex cursor-not-allowed items-center justify-between px-4 py-2.5 text-sm text-grey-400">
                    {label}
                    <span className="text-xs">{t.language.soon}</span>
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
