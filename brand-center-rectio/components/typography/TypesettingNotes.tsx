"use client";

import { useState } from "react";

/* Figma "Typesetting Notes" (Typography page): pill tabs, heading, notes left (388px), live samples right with
   cap-height / baseline guide rules. Sample sizes are in container units (Figma px at the 572px column) and guide offsets in em, so both scale together.
   Only Hierarchy is designed in Figma; Scale lists the type ramp from the Figma text styles and Tracking the
   tracking those styles use. */
const hierarchy = [
  { title: "Extra Large Headline", text: ["Extra large headlines don’t appear in all standard documents, appearing in places like presentation covers, divider slides or physical signage.", "Extra large headlines are set in Space Grotesk Light."] },
  { title: "Headline", text: ["Space Grotesk Medium is used for all external-facing headlines, set in title case for everyday documents or sentence case for comms."] },
  { title: "Subhead", text: ["Space Grotesk Medium is used for all standard subheads, set in title case for everyday documents or sentence case for comms."] },
  { title: "Body copy", text: ["Use Geist Regular for body text, captions, and other detailed info."] },
];

/* size: Figma px at 1440. lh/mb: Figma line-height and negative bottom margin, in em. rules: guide-line tops, in em. */
const samples = [
  { text: "XL Headline", cls: "font-[family-name:var(--font-secondary)] font-light", size: "min(17.83cqw,6.375rem)", lh: 110 / 102, mb: -6 / 102, rules: [18 / 102, 91 / 102], font: "Space Grotesk", weight: "Light", wcls: "font-light" },
  { text: "Headline", cls: "font-[family-name:var(--font-secondary)] font-medium", size: "min(19.93cqw,7.125rem)", lh: 139.466 / 114, mb: -12 / 114, rules: [29 / 114, 110 / 114], font: "Space Grotesk", weight: "Medium", wcls: "font-light" },
  { text: "Subhead", cls: "font-[family-name:var(--font-secondary)] font-medium", size: "min(11.04cqw,3.947rem)", lh: 69.474 / 63.158, mb: -2 / 63.158, rules: [11 / 63.158, 58 / 63.158], font: "Space Grotesk", weight: "Medium", wcls: "font-light" },
  { text: "Body copy", cls: "font-normal", size: "min(5.52cqw,1.974rem)", lh: 37.895 / 31.579, mb: 10 / 31.579, rules: [7 / 31.579, 37 / 31.579], font: "Geist", weight: "Regular", wcls: "font-normal" },
];

const scale = [
  ["Heading 1", "72px / 80px", "Medium"],
  ["Heading 4", "40px / 48px", "Medium"],
  ["Heading 5", "32px / 40px", "Medium"],
  ["Heading 6", "24px / 32px", "Regular, Medium, SemiBold"],
  ["Body 1", "20px / 28px", "Regular, Medium"],
  ["Body 2", "18px / 24px", "Regular"],
  ["Body 3", "16px / 24px", "Regular, Medium"],
  ["Body 4", "14px / 20px", "Regular, SemiBold"],
  ["Caption 1", "12px / 16px", "Regular, Medium"],
  ["Caption 2", "10px / 16px", "Regular, Medium"],
];

const TABS = ["Hierarchy", "Scale", "Tracking"] as const;
type Tab = (typeof TABS)[number];

function Note({ title, text }: { title: string; text: string[] }) {
  return (
    <div className="space-y-5">
      <p className="text-xl font-medium leading-7 text-grey-950">{title}</p>
      <div className="space-y-6 text-lg leading-6 text-grey-700">{text.map((t) => <p key={t}>{t}</p>)}</div>
    </div>
  );
}

function Hierarchy() {
  return (
    <div className="flex flex-col gap-16 xl:flex-row">
      <div className="space-y-10 xl:w-[388px] xl:shrink-0">
        <p className="text-xl leading-7 text-pampas-700">Hierarchy</p>
        {hierarchy.map((h) => <Note key={h.title} {...h} />)}
      </div>
      <div className="@container min-w-0 flex-1 space-y-[60px]">
        {samples.map((s) => (
          <div key={s.text} className="relative" style={{ fontSize: s.size }}>
            <p className={`relative z-[1] whitespace-nowrap text-pampas-950 ${s.cls}`} style={{ lineHeight: s.lh, marginBottom: `${s.mb}em` }}>{s.text}</p>
            {s.rules.map((t) => <span key={t} aria-hidden className="absolute inset-x-0 h-px bg-grey-300" style={{ top: `${t}em` }} />)}
            <p className="relative flex gap-2.5 text-2xl leading-8 text-grey-950"><span className="font-semibold">{s.font}</span><span className={s.wcls}>{s.weight}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Scale() {
  return (
    <div className="flex flex-col gap-16 xl:flex-row">
      <div className="xl:w-[388px] xl:shrink-0">
        <Note title="Type scale" text={["Every level of our hierarchy maps to a fixed size and line height. Pick the closest level rather than setting a custom size, so layouts stay consistent across documents and screens."]} />
      </div>
      <div className="min-w-0 flex-1 divide-y divide-pampas-200 border-y border-pampas-200">
        {scale.map(([level, size, weights]) => (
          <div key={level} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 py-3 sm:grid-cols-[140px_140px_1fr]">
            <p className="text-lg font-medium leading-6 text-grey-950">{level}</p>
            <p className="text-right font-[family-name:var(--font-secondary)] text-base leading-6 text-pampas-700 sm:text-left">{size}</p>
            <p className="col-span-2 text-base leading-6 text-grey-600 sm:col-span-1">{weights}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tracking() {
  return (
    <div className="flex flex-col gap-16 xl:flex-row">
      <div className="xl:w-[388px] xl:shrink-0">
        <Note title="Tracking" text={["All of our text styles are set with 0 tracking. Geist and Space Grotesk are spaced for both display and text sizes, so leave letter-spacing at its default."]} />
      </div>
      <div className="min-w-0 flex-1 space-y-6">
        <p className="font-[family-name:var(--font-secondary)] text-[clamp(2.5rem,4.4vw,3.947rem)] font-medium leading-[1.1] text-pampas-950">Tracking 0</p>
        <p className="text-2xl leading-8 text-grey-950"><span className="font-semibold">Letter-spacing</span> <span className="font-light">0 / default</span></p>
      </div>
    </div>
  );
}

export default function TypesettingNotes() {
  const [tab, setTab] = useState<Tab>("Hierarchy");
  return (
    <div className="flex flex-col gap-12 lg:gap-20">
      <div role="tablist" aria-label="Typesetting notes" className="flex flex-wrap gap-4">
        {TABS.map((t) => (
          <button
            key={t}
            type="button"
            role="tab"
            id={`ts-tab-${t}`}
            aria-selected={tab === t}
            aria-controls="ts-panel"
            onClick={() => setTab(t)}
            className={`rounded-[80px] border px-6 py-2.5 text-xl leading-7 transition-colors sm:text-2xl sm:leading-8 ${tab === t ? "border-pampas-700 text-pampas-700" : "border-grey-300 text-grey-400 hover:text-grey-600"}`}
          >
            {t}
          </button>
        ))}
      </div>
      <h2 className="text-[2rem] font-medium leading-10 text-pampas-950 lg:text-[2.5rem] lg:leading-[48px]">Typesetting Notes</h2>
      <div id="ts-panel" role="tabpanel" aria-labelledby={`ts-tab-${tab}`}>
        {tab === "Hierarchy" ? <Hierarchy /> : tab === "Scale" ? <Scale /> : <Tracking />}
      </div>
    </div>
  );
}
