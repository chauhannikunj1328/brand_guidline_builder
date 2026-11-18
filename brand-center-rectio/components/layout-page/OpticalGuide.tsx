"use client";

import { useState, type CSSProperties } from "react";
import { Asset, Verdict } from "./Asset";

/* Figma "Optical Guide" (40007016:29652): Margins / Gutters pill tabs over three 150px tiles
   (Too Narrow / Just Right / Too Wide). Margin bands are 18 / 22 / 28px. The Gutters tab is not drawn
   in Figma; it applies the same tile language to the gaps between four columns (4 / 11 / 22px). */

const samples = [
  { ok: false, margin: 18, gutter: 4 },
  { ok: true, margin: 22, gutter: 11 },
  { ok: false, margin: 28, gutter: 22 },
];

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
    <div dir="ltr" className="relative h-[150px] w-full overflow-hidden border border-pampas-300 bg-white">
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

export default function OpticalGuide({ heading, aria, tabs, labels }: { heading: string; aria: string; tabs: string[]; labels: string[] }) {
  const [tab, setTab] = useState(0);
  return (
    <div className="flex flex-col gap-[60px]">
      <div className="flex flex-col gap-8">
        <h2 className="t-h3 text-grey-950">{heading}</h2>
        <div role="tablist" aria-label={aria} className="flex gap-3">
          {tabs.map((t, i) => (
            <button key={i} type="button" role="tab" aria-selected={tab === i} onClick={() => setTab(i)}
              className={`rounded-[80px] border px-5 py-1.5 text-base leading-6 transition-colors ${tab === i ? "border-pampas-700 text-pampas-700" : "border-grey-300 text-grey-400 hover:text-grey-600"}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" aria-label={tabs[tab]} className="grid gap-4 sm:grid-cols-3">
        {samples.map((s, i) => (
          <figure key={i} className="flex flex-col gap-3">
            <Tile m={tab === 0 ? s.margin : 22} gutter={tab === 1 ? s.gutter : undefined} />
            <Verdict ok={s.ok}>{labels[i]}</Verdict>
          </figure>
        ))}
      </div>
    </div>
  );
}
