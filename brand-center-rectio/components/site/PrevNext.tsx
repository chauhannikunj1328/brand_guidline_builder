import Link from "next/link";
import type { ReactNode } from "react";

export type PageLink = { label: string; href: string; visual: ReactNode; tone?: "white" | "primary" | "tint" };

const tones = { white: "bg-white border border-line text-ink", primary: "bg-primary text-white", tint: "bg-tint text-ink" };

function Card({ dir, link }: { dir: "Previous" | "Next"; link: PageLink }) {
  const tone = link.tone ?? "white";
  return (
    <Link href={link.href} className={`relative flex min-h-[340px] flex-col overflow-hidden rounded-[var(--radius-card)] p-12 ${tones[tone]}`}>
      <span className={`text-sm font-bold uppercase ${tone === "white" ? "text-primary" : ""}`}>{dir}</span>
      <span className="mt-4 font-display text-[2rem] font-bold leading-none">{link.label}</span>
      <div className="pointer-events-none absolute inset-0">{link.visual}</div>
    </Link>
  );
}

export default function PrevNext({ prev, next }: { prev: PageLink; next: PageLink }) {
  return (
    <nav aria-label="Pagination" className="edge-x grid gap-8 py-8 md:grid-cols-2">
      <Card dir="Previous" link={prev} />
      <Card dir="Next" link={next} />
    </nav>
  );
}
