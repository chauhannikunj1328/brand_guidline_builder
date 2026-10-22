"use client";

import { useState, type ReactNode } from "react";

/* Pill tab bar (Evolution / Construction / Clearspace …). `dark` for white-on-dark cards. */
export default function Tabs({ tabs, dark = false, className = "" }: { tabs: { label: string; content: ReactNode }[]; dark?: boolean; className?: string }) {
  const [i, setI] = useState(0);
  return (
    <div className={className}>
      <div role="tablist" className="flex flex-wrap gap-2">
        {tabs.map((t, idx) => {
          const on = i === idx;
          const cls = dark
            ? on ? "border-white bg-white text-ink" : "border-white/40 text-white/60"
            : on ? "border-ink bg-white text-ink" : "border-line text-muted";
          return (
            <button key={t.label} role="tab" aria-selected={on} onClick={() => setI(idx)} className={`rounded-full border px-5 py-2 text-sm ${cls}`}>{t.label}</button>
          );
        })}
      </div>
      <div className="mt-10">{tabs[i].content}</div>
    </div>
  );
}
