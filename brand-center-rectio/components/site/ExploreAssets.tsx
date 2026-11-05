import Link from "next/link";
import type { ReactNode } from "react";
import { brand } from "@/content/brand.config";
import { FullLogo, Mark, Wordmark } from "@/components/Logo";
import { AddIcon, ArrowRightIcon } from "@/components/ui/icons";

/* Figma "Explore Our Assets" cards: 3-column grid, 510px tall, 16px radius, 32px medium label top-left. */
type Key = "foundation" | "voice" | "spark" | "wordmark" | "color" | "type" | "layout" | "brand-os" | "lockups" | "internal";

const light = "border-[1.5px] border-grey-300 bg-pampas-50 text-black";
const cards: Record<Key, { label: string; href: string; tone: string; body: ReactNode }> = {
  // Foundation, Lockups and Internal Resources have no Figma card: these three follow the same card style.
  foundation: {
    label: "Foundation", href: "/brand-foundation", tone: "bg-pampas-200 text-black",
    body: <Mark className="absolute left-1/2 top-1/2 size-[151px] -translate-x-1/2 -translate-y-1/2 text-pampas-800" />,
  },
  lockups: {
    label: "Lockups", href: "/lockups", tone: light,
    body: <FullLogo size={72} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-pampas-600" />,
  },
  internal: {
    label: "Internal Resources", href: "/internal-resources", tone: "bg-pampas-800 text-white",
    body: (
      <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 whitespace-nowrap rounded-[14px] bg-white p-5 text-[1.625rem] font-medium leading-[34px] text-pampas-800">
        Download <ArrowRightIcon className="size-10" />
      </span>
    ),
  },
  spark: {
    label: brand.markShort, href: "/logo", tone: "bg-primary text-white",
    body: <Mark className="absolute left-1/2 top-1/2 size-[151px] -translate-x-1/2 -translate-y-1/2 text-white" />,
  },
  wordmark: {
    label: "Wordmark", href: "/wordmark", tone: light,
    body: <Wordmark className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[4.75rem] text-pampas-600" />,
  },
  color: {
    label: "Color", href: "/color", tone: "border-[1.5px] border-grey-400 bg-white text-white",
    body: (
      <div className="absolute inset-0 isolate flex flex-col">
        <div className="relative z-[4] -mb-4 h-[55%] shrink-0 rounded-b-[20px] bg-primary" />
        <div className="relative z-[3] -mb-4 flex-1 rounded-b-[20px] bg-white" />
        <div className="relative z-[2] -mb-4 flex-1 rounded-b-[20px] bg-grey-200" />
        <div className="relative z-[1] flex-1 bg-black" />
      </div>
    ),
  },
  type: {
    label: "Type", href: "/typography", tone: light,
    body: <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[2.5rem] leading-[48px] text-grey-950">{brand.taglineLines[0]}<br />{brand.taglineLines[1]}</p>,
  },
  layout: {
    label: "Layout", href: "/layout", tone: "bg-primary text-white",
    body: (
      <div className="absolute inset-0 overflow-hidden">
        {/* Stripes keep the Figma 74px rhythm, so the wide two-card version simply shows more of them. */}
        {[0, 78.6, 152.6, 226.6, 300.6, 375, 449.4, 523.9].map((x) => <div key={x} className="absolute inset-y-0 w-[18px] bg-white/10" style={{ left: x }} />)}
        <div className="absolute inset-y-0 right-0 w-[18px] bg-white/10" />
      </div>
    ),
  },
  "brand-os": {
    label: "Brand OS", href: "/brand-os", tone: light,
    body: (
      <span className="absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 whitespace-nowrap rounded-[14px] bg-primary p-5 text-[1.625rem] font-medium leading-[34px] text-white">
        Add to Cart <AddIcon className="size-10" />
      </span>
    ),
  },
  voice: {
    label: "Voice", href: "/brand-voice", tone: "bg-primary text-white",
    body: <span aria-hidden className="absolute left-[190px] top-[60px] -translate-x-1/2 text-[29.5rem] leading-[480px] text-pampas-200">&ldquo;Re</span>,
  },
};

const ALL: Key[] = ["spark", "wordmark", "color", "type", "layout", "brand-os", "voice"];
/* Reading order, as in the menu. Each inner page ends with the next two pages; the end wraps round to the start. */
const ORDER: Key[] = ["foundation", "voice", "spark", "wordmark", "color", "type", "layout", "brand-os", "lockups", "internal"];

/** Home shows every card under a heading. With `current`, shows the next two pages. Trademarks is outside the order, so it starts from the first page. */
export default function ExploreAssets({ current }: { current?: Key | "trademarks" }) {
  const at = ORDER.indexOf(current as Key);
  const keys = current ? [ORDER[(at + 1) % ORDER.length], ORDER[(at + 2) % ORDER.length]] : ALL;
  const title = current ? null : "Explore our Assets";
  return (
    <section className="bg-grey-50 px-5 py-16 lg:px-[100px] lg:py-20">
      {title && <h2 className="t-h2 mb-12 text-grey-950">{title}</h2>}
      <div className={`grid gap-6 sm:grid-cols-2 ${keys.length === 2 ? "" : "lg:grid-cols-3"}`}>
        {keys.map((k) => {
          const c = cards[k];
          return (
            <Link key={k} href={c.href} className={`relative h-[420px] overflow-hidden p-[30px] transition-transform hover:-translate-y-1 lg:h-[510px] rounded-[var(--radius-card)] ${c.tone}`}>
              {c.body}
              <span className="relative text-[2rem] font-medium leading-10">{c.label}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
