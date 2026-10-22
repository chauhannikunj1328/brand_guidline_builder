"use client";

import Link from "next/link";
import { useState } from "react";
import { brand } from "@/content/brand.config";
import { Mark } from "@/components/Logo";
import { useMenu } from "./MenuContext";

/* Full-screen navigation: primary items left, sub-pages of the expanded item on the right. */
export default function MenuOverlay() {
  const { open, setOpen } = useMenu();
  const [expanded, setExpanded] = useState<string | null>(null);
  const close = () => { setOpen(false); setExpanded(null); };
  const active = brand.menu.find((m) => m.label === expanded && "children" in m);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-50 bg-ink text-white transition-opacity duration-300 ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <div className="absolute left-14 top-10 text-accent"><Mark className="h-10 w-10" /></div>
      <button type="button" aria-label="Close menu" onClick={close} className="absolute right-14 top-12 h-8 w-8">
        <span className="absolute left-1/2 top-1/2 h-px w-7 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
        <span className="absolute left-1/2 top-1/2 h-px w-7 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
      </button>

      <div className="flex h-full flex-col px-8 pt-40 pb-16 lg:pl-[133px] lg:pr-10 lg:pt-[190px]">
        <div className="flex flex-1 gap-16">
          <nav className="flex flex-col gap-8 lg:gap-14">
            {brand.menu.map((item) =>
              "children" in item ? (
                <div key={item.label}>
                  <button
                    type="button"
                    onClick={() => setExpanded(expanded === item.label ? null : item.label)}
                    className={`font-display text-[2.25rem] leading-none tracking-[-0.01em] lg:text-[5rem] ${expanded === item.label ? "text-mid" : ""}`}
                  >
                    {item.label}
                  </button>
                  {/* mobile: inline sub-list */}
                  <ul className={`mt-4 space-y-3 pl-2 lg:hidden ${expanded === item.label ? "" : "hidden"}`}>
                    {item.children.map((c) => (
                      <li key={c.href}><Link href={c.href} onClick={close} className="text-xl">{c.label}</Link></li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link key={item.href} href={item.href} onClick={close} className="font-display text-[2.25rem] leading-none tracking-[-0.01em] lg:text-[5rem]">
                  {item.label}
                </Link>
              )
            )}
          </nav>
          {active && "children" in active && (
            <div className="hidden border-l border-white/40 pl-20 lg:block">
              <ul className="space-y-4">
                {active.children.map((c) => (
                  <li key={c.href}><Link href={c.href} onClick={close} className="text-2xl hover:text-mid">{c.label}</Link></li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <Link href={brand.trademarks.href} onClick={close} className="mt-10 text-2xl lg:pl-3">{brand.trademarks.label}</Link>
      </div>
    </div>
  );
}
