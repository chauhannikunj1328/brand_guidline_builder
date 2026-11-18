"use client";

import { useState } from "react";
import { MENU, TRADEMARKS } from "@/lib/i18n/nav";
import { useI18n } from "@/components/i18n/I18nProvider";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { Mark } from "@/components/Logo";
import { useMenu } from "./MenuContext";

/* Full-screen navigation: primary items left, sub-pages of the expanded item on the right. */
export default function MenuOverlay() {
  const { open, setOpen } = useMenu();
  const { t } = useI18n();
  const [expanded, setExpanded] = useState<string | null>(null);
  const close = () => { setOpen(false); setExpanded(null); };
  const active = MENU.find((m) => m.key === expanded && "children" in m);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 bg-ink text-white transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="absolute start-14 top-10 text-pampas-300"><Mark className="h-10 w-10" /></div>
      <button type="button" aria-label={t.aria.closeMenu} onClick={close} className="absolute end-14 top-12 h-8 w-8">
        <span className="absolute left-1/2 top-1/2 h-px w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
        <span className="absolute left-1/2 top-1/2 h-px w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
      </button>

      <div className="flex h-full flex-col px-8 pt-40 pb-16 lg:ps-[133px] lg:pe-10 lg:pt-[190px]">
        <div className="flex flex-1 gap-16">
          <nav className="flex flex-col gap-8 lg:gap-14">
            {MENU.map((item) =>
              "children" in item ? (
                <div key={item.key}>
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === item.key ? null : item.key)}
                    className={`font-display text-[2.25rem] leading-none tracking-[-0.01em] lg:text-[5rem] ${expanded === item.key ? "text-pampas-300" : ""}`}
                  >
                    {t.nav[item.key]}
                  </button>
                  {/* mobile: inline sub-list */}
                  <ul className={`mt-4 space-y-3 ps-2 lg:hidden ${expanded === item.key ? "" : "hidden"}`}>
                    {item.children.map((c) => (
                      <li key={c.href}><LocalizedLink href={c.href} onClick={close} className="text-xl">{t.nav[c.key]}</LocalizedLink></li>
                    ))}
                  </ul>
                </div>
              ) : (
                <LocalizedLink key={item.href} href={item.href} onClick={close} className="font-display text-[2.25rem] leading-none tracking-[-0.01em] lg:text-[5rem]">
                  {t.nav[item.key]}
                </LocalizedLink>
              )
            )}
          </nav>
          {active && "children" in active && (
            <div className="hidden border-s border-white/40 ps-20 lg:block">
              <ul className="space-y-4">
                {active.children.map((c) => (
                  <li key={c.href}><LocalizedLink href={c.href} onClick={close} className="text-2xl hover:text-pampas-300">{t.nav[c.key]}</LocalizedLink></li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <LocalizedLink href={TRADEMARKS.href} onClick={close} className="mt-10 text-2xl lg:ps-3">{t.nav[TRADEMARKS.key]}</LocalizedLink>
      </div>
    </div>
  );
}
