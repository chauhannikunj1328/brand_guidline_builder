"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { Mark } from "@/components/Logo";
import { AddIcon, EqualIcon } from "@/components/ui/icons";

/* Figma "Spark Notes" card: Pampas panel with Evolution / Construction / Clear Space tabs.
   All three Figma frames share the same artwork and formula row; only the copy changes. */
const TABS: { label: string; text: string }[] = [
  {
    label: "Evolution",
    text: "The original Spark has been refreshed and redrawn with organic curves that feel approachable and less rigid.",
  },
  {
    label: "Construction",
    text: "The Spark is built from two simple forms. A circle of sparklets brings a sense of infinity, and a diamond at its center brings precision. Together they make our Logo Mark.",
  },
  {
    label: "Clear Space",
    text: "Keep a minimum clear space equal to half the height of the Spark on all sides. Nothing else should enter this zone, so the Spark always stands out clearly.",
  },
];

function Part({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="flex h-24 flex-col items-center justify-between">
      <div className="flex size-16 items-center justify-center">{children}</div>
      <p className="whitespace-nowrap text-xs leading-4 text-grey-50">{label}</p>
    </div>
  );
}

export default function SparkNotes() {
  const [i, setI] = useState(0);
  const tab = TABS[i];
  return (
    <div className="flex flex-col gap-10 overflow-hidden rounded-[var(--radius-card)] bg-pampas-700 p-6 text-white lg:p-10">
      <div role="tablist" className="flex flex-wrap gap-2">
        {TABS.map((t, idx) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={i === idx}
            onClick={() => setI(idx)}
            className={`rounded-lg border p-3 text-base font-medium leading-6 transition-colors ${i === idx ? "border-grey-200 bg-pampas-50 text-grey-950" : "border-pampas-200 text-pampas-50 hover:bg-white/10"}`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex max-w-[338px] flex-col gap-4">
          <h3 className="t-section text-white">Spark Notes</h3>
          <div className="space-y-3">
            <p className="text-lg font-medium leading-[26px]">{tab.label}</p>
            <p className="text-base leading-6 text-grey-100">{tab.text}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-[30px]">
          <span className="flex size-[260px] items-center justify-center lg:size-[342px]"><Mark className="size-[86%] text-white" /></span>
          <div className="flex items-end gap-3 text-pampas-100">
            <Part label="Circle Infinity"><Image src="/brand/spark-circle-infinity.svg" alt="" width={64} height={64} /></Part>
            <AddIcon className="mb-8 size-8" />
            <Part label="Diamond Precision"><span className="block size-12 rotate-45 rounded-lg bg-white" /></Part>
            <EqualIcon className="mb-8" />
            <Part label="Logo Mark"><Mark className="size-16 text-white" /></Part>
          </div>
        </div>
      </div>
    </div>
  );
}
