import { brand } from "@/content/brand.config";
import { Mark, Wordmark } from "@/components/Logo";
import type { PageLink } from "@/components/site/PrevNext";

/* Visual cards used by PrevNext, one per identity page (mirrors the reference). */
export const links: Record<string, PageLink> = {
  logo: {
    label: brand.markName, href: "/logo", tone: "primary",
    visual: <div className="absolute right-[18%] top-1/2 -translate-y-1/2 text-accent"><Mark className="h-40 w-40" /></div>,
  },
  wordmark: {
    label: "Wordmark", href: "/wordmark", tone: "white",
    visual: <div className="absolute inset-x-8 bottom-6 flex justify-center text-primary"><Wordmark className="text-[7rem] lg:text-[8.5rem]" /></div>,
  },
  color: {
    label: "Color", href: "/color", tone: "primary",
    visual: (
      <div className="absolute inset-y-0 right-0 flex w-[55%]">
        {["bg-white", "bg-accent", "bg-ink", "bg-mid", "bg-tint"].map((c, i) => (
          <div key={c} className={`${c} h-full rounded-l-[var(--radius-card)] -ml-8 first:ml-0`} style={{ width: `${[30, 25, 20, 15, 10][i]}%` }} />
        ))}
      </div>
    ),
  },
  typography: {
    label: "Typography", href: "/typography", tone: "tint",
    visual: <div className="absolute bottom-0 right-8 font-display text-[10rem] font-light leading-none text-ink lg:text-[15rem]">Aa</div>,
  },
  layout: {
    label: "Layout", href: "/layout", tone: "primary",
    visual: <div className="absolute inset-4 grid grid-cols-6 gap-6 border border-dashed border-white/50 px-2 py-2">{Array.from({ length: 6 }).map((_, i) => <div key={i} className="bg-white/15" />)}</div>,
  },
  "brand-os": {
    label: "Brand OS", href: "/brand-os", tone: "white",
    visual: <div className="absolute inset-0 flex items-center justify-center pt-16"><span className="inline-flex h-[72px] items-center gap-6 rounded-full bg-primary px-10 text-2xl text-white">Add to cart <span className="text-3xl leading-none">+</span></span></div>,
  },
};
