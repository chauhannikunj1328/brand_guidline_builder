"use client";

import { useState, type ReactNode } from "react";

/* Figma pill tabs on the Brand OS cards (Frame Notes, Optical Guide, Button types). */
export default function PillTabs({ tabs }: { tabs: { label: string; content: ReactNode }[] }) {
  const [i, setI] = useState(0);
  return (
    <div className="flex flex-col gap-10">
      <div role="tablist" className="flex flex-wrap gap-3">
        {tabs.map((t, idx) => (
          <button
            key={t.label}
            type="button"
            role="tab"
            aria-selected={i === idx}
            onClick={() => setI(idx)}
            className={`rounded-full border px-5 py-2 text-sm leading-5 transition-colors ${i === idx ? "border-pampas-700 text-pampas-700" : "border-grey-300 text-grey-400 hover:text-grey-600"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel">{tabs[i].content}</div>
    </div>
  );
}
