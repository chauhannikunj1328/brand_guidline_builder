"use client";

import { useState, type CSSProperties } from "react";
import { Asset, Verdict } from "./Asset";

/* Figma "Optical Guide" (40007016:29652): Margins / Gutters pill tabs over three 150px tiles
   (Too Narrow / Just Right / Too Wide). Margin bands are 18 / 22 / 28px. The Gutters tab is not drawn
   in Figma; it applies the same tile language to the gaps between four columns (4 / 11 / 22px). */

const samples = [
  { label: "Too Narrow", ok: false, margin: 18, gutter: 4 },
  { label: "Just Right", ok: true, margin: 22, gutter: 11 },
  { label: "Too Wide", ok: false, margin: 28, gutter: 22 },
];
const tabs = ["Margins", "Gutters"] as const;
type Tab = (typeof tabs)[number];

/** One tile: a white frame with tinted margin bands (corners overlap darker) and pampas-300 guide rules.
    With `gutter`, the live area is split into four white columns separated by tinted gutters. */
function Tile({ m, gutter }: { m: number; gutter?: number }) {
  const e = m - 1; // band size inside the 1px border (Figma: band top -1, rule at m - 1)
  const rule = (pos: CSSProperties, v = false) => (
    <div className={`absolute ${v ? "inset-y-0 w-px" : "inset-x-0 h-px"}`} style={pos}>
      <Asset src={v ? "optical-line-v.svg" : "optical-line-h.svg"} className="absolute inset-0" sizes={v ? "1px" : "331px"} />
    </div>
  );
  return (
    <div className="relative h-[150px] w-full overflow-hidden border border-pampas-300 bg-white">
      <div className="absolute inset-x-0 top-0 bg-pampas-600/10" style={{ height: e }} />
      <div className="absolute inset-x-0 bottom-0 bg-pampas-600/10" style={{ height: e }} />
      <div className="absolute inset-y-0 left-0 bg-pampas-600/10" style={{ width: e }} />
      <div className="absolute inset-y-0 right-0 bg-pampas-600/10" style={{ width: e }} />
      {gutter !== undefined && (
        <div className="absolute flex bg-pampas-600/10" style={{ inset: e, gap: gutter }}>
          {Array.from({ length: 4 }).map((_, i) => <div key={i} className="flex-1 border-x border-pampas-300 bg-white first:border-l-0 last:border-r-0" />)}
        </div>
      )}
      {rule({ top: e })}
      {rule({ bottom: e })}
      {rule({ left: e }, true)}
      {rule({ right: e }, true)}
    </div>
  );
}

export default function OpticalGuide() {
  const [tab, setTab] = useState<Tab>("Margins");
  return (
    <div className="flex flex-col gap-[60px]">
      <div className="flex flex-col gap-8">
        <h2 className="t-h3 text-grey-950">Optical Guide</h2>
        <div role="tablist" aria-label="Optical guide" className="flex gap-3">
          {tabs.map((t) => (
            <button key={t} type="button" role="tab" aria-selected={tab === t} onClick={() => setTab(t)}
              className={`rounded-[80px] border px-5 py-1.5 text-base leading-6 transition-colors ${tab === t ? "border-pampas-700 text-pampas-700" : "border-grey-300 text-grey-400 hover:text-grey-600"}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" aria-label={tab} className="grid gap-4 sm:grid-cols-3">
        {samples.map((s) => (
          <figure key={s.label} className="flex flex-col gap-3">
            <Tile m={tab === "Margins" ? s.margin : 22} gutter={tab === "Gutters" ? s.gutter : undefined} />
            <Verdict ok={s.ok}>{s.label}</Verdict>
          </figure>
        ))}
      </div>
    </div>
  );
}
