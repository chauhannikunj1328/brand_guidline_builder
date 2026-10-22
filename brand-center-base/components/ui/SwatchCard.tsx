"use client";

import { useState } from "react";

type Swatch = { name: string; hex: string; cmyk: string; rgb: string; pms: string };

/* Colour card 333 × 458, values bottom-left, copy icon bottom-right. Click-to-copy the HEX. */
export default function SwatchCard({ s, light, short = false }: { s: Swatch; light: boolean; short?: boolean }) {
  const [copied, setCopied] = useState(false);
  const white = s.hex.toUpperCase() === "#FFFFFF";
  return (
    <button
      type="button"
      onClick={async () => { try { await navigator.clipboard.writeText(s.hex); setCopied(true); setTimeout(() => setCopied(false), 1200); } catch {} }}
      className={`relative flex ${short ? "h-[197px]" : "h-[458px]"} w-full flex-col justify-between rounded-[var(--radius-card)] p-6 text-left ${light ? "text-white" : "text-ink"} ${white ? "border-2 border-ink" : ""}`}
      style={{ background: s.hex }}
      aria-label={`Copy ${s.hex}`}
    >
      <span className="text-base font-bold uppercase">{s.name}</span>
      <span className="t-xs space-y-0.5">
        <span className="block">{s.pms}</span><span className="block">{s.cmyk}</span><span className="block">{s.rgb}</span><span className="block">HEX {s.hex}</span>
      </span>
      <span className="absolute bottom-6 right-6 text-xs">
        {copied ? "Copied" : (
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="6" y="6" width="11" height="11" rx="1.5" /><path d="M14 6V4.5A1.5 1.5 0 0 0 12.5 3h-8A1.5 1.5 0 0 0 3 4.5v8A1.5 1.5 0 0 0 4.5 14H6" /></svg>
        )}
      </span>
    </button>
  );
}
