"use client";

import { useState } from "react";
import { CopyIcon } from "./icons";

export type Swatch = { name: string; hex: string; rgb: string; hsl: string; hsb: string };

/* Figma "Color Cards" card: 450px tall, name top-left, HEX/RGB/HSL/HSB bottom-left, copy button bottom-right.
   Clicking copies the HEX value. `className` sets background, border and text colour. */
export default function SwatchCard({ s, className }: { s: Swatch; className: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(s.hex); setCopied(true); setTimeout(() => setCopied(false), 1200); } catch {}
  };
  return (
    <div className={`flex h-[360px] flex-col justify-between rounded-[var(--radius-card)] p-5 lg:h-[450px] ${className}`}>
      <p className="text-xl font-medium uppercase leading-7">{s.name}</p>
      <div className="flex items-end justify-between gap-5">
        <dl className="space-y-1.5 font-[family-name:var(--font-secondary)] text-xs leading-4">
          <div><dt className="inline">HEX - </dt><dd className="inline">{s.hex}</dd></div>
          <div><dt className="inline">RGB - </dt><dd className="inline">{s.rgb}</dd></div>
          <div><dt className="inline">HSL - </dt><dd className="inline">{s.hsl}</dd></div>
          <div><dt className="inline">HSB - </dt><dd className="inline">{s.hsb}</dd></div>
        </dl>
        <button type="button" onClick={copy} aria-label={`Copy ${s.hex}`} className="shrink-0 text-xs">
          {copied ? "Copied" : <CopyIcon />}
        </button>
      </div>
    </div>
  );
}
