"use client";

import Link from "next/link";
import { useRef } from "react";
import { brand } from "@/content/brand.config";
import { Mark, Wordmark } from "@/components/Logo";

/* "Explore our Assets" horizontal carousel — 362 × 500 cards, 24px gap, edge-aligned at 40px. */
const cards = [
  { label: brand.markShort, href: "/logo", body: <div className="flex h-full items-center justify-center bg-primary text-accent"><Mark className="h-24 w-24" /></div> },
  { label: "Wordmark", href: "/wordmark", body: <div className="flex h-full items-center justify-center bg-white text-primary"><Wordmark className="text-[3.5rem]" /></div> },
  { label: "Color", href: "/color", body: <div className="flex h-full flex-col"><div className="h-[55%] bg-primary" /><div className="flex-1 bg-white" /><div className="h-[14%] bg-accent" /></div> },
  { label: "Type", href: "/typography", body: <div className="flex h-full items-center bg-white pl-12 text-primary"><span className="t-h2 whitespace-nowrap">{brand.taglineLines[0]}<br />{brand.taglineLines[1]}</span></div> },
  { label: "Layout", href: "/layout", body: <div className="grid h-full grid-cols-6 gap-3 bg-primary px-6 py-8">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="bg-white/15" />)}</div> },
  { label: "Brand OS", href: "/brand-os", body: <div className="flex h-full items-center justify-center bg-white"><span className="inline-flex h-16 items-center gap-6 rounded-full bg-primary px-8 text-2xl text-white">Add to cart <span className="text-3xl">+</span></span></div> },
  { label: "Lockups", href: "/lockups", body: <div className="flex h-full flex-col items-center justify-center gap-4 bg-tint text-ink"><Mark className="h-14 w-14 text-primary" /><Wordmark className="text-4xl text-primary" /></div> },
];

export default function ExploreAssets() {
  const track = useRef<HTMLDivElement>(null);
  const go = (d: 1 | -1) => track.current?.scrollBy({ left: d * 386, behavior: "smooth" });
  return (
    <section className="pt-16 pb-6 lg:pt-24">
      <div className="edge-x mb-8 flex items-end justify-between">
        <h2 className="t-h2">Explore our Assets</h2>
        <div className="flex gap-3">
          {([-1, 1] as const).map((d) => (
            <button key={d} type="button" aria-label={d === 1 ? "Next" : "Previous"} onClick={() => go(d)} className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink hover:bg-tint">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5"><path d={d === 1 ? "M9 6l6 6-6 6" : "M15 6l-6 6 6 6"} strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          ))}
        </div>
      </div>
      <div ref={track} className="no-scrollbar edge-x flex snap-x gap-6 overflow-x-auto pb-10 scroll-pl-5 lg:scroll-pl-10">
        {cards.map((c) => (
          <Link key={c.label} href={c.href} className="relative h-[420px] w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl border border-line lg:h-[500px] lg:w-[362px]">
            {c.body}
            <span className={`absolute left-6 top-6 text-base font-bold ${["Color", brand.markShort, "Layout"].includes(c.label) ? "text-white" : "text-ink"}`}>{c.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
