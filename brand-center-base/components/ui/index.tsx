import type { ReactNode } from "react";
import { Mark, Wordmark } from "@/components/Logo";

/* ------------------------------------------------------------------
   Layout primitives that mirror the reference site's building blocks.
   ------------------------------------------------------------------ */

export type Tone = "primary" | "ink" | "tint" | "mid" | "white";
export const toneBg: Record<Tone, string> = {
  primary: "bg-primary text-white",
  ink: "bg-ink text-white",
  tint: "bg-tint text-ink",
  mid: "bg-mid text-ink",
  white: "bg-white text-ink",
};

/** Full-bleed band starting at the rail edge (x=248) and running to the right edge. */
export function Band({ tone = "primary", id, className = "", children }: { tone?: Tone; id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`band scroll-mt-24 ${toneBg[tone]} ${className}`}>
      <div className="band-inner py-16 lg:py-24">{children}</div>
    </section>
  );
}

/** Rounded 32px card. `wide` = 271→1415, `content` = 323→1365, `inner` = inside a band/card (no outer margin). */
export function Card({ tone = "white", width = "wide", id, className = "", pad = true, children }: { tone?: Tone; width?: "wide" | "content" | "inner"; id?: string; className?: string; pad?: boolean; children: ReactNode }) {
  const w = width === "wide" ? "card-wide" : width === "content" ? "card-content" : "";
  const border = tone === "white" ? "border border-line" : "";
  return (
    <section id={id} className={`scroll-mt-24 rounded-[var(--radius-card)] ${w} ${toneBg[tone]} ${border} ${pad ? "card-pad" : ""} ${className}`}>
      {children}
    </section>
  );
}

/** Content column (x=323 → 1365). */
export function Col({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`content-col scroll-mt-24 ${className}`}>{children}</section>
  );
}

/** Bold 32px section heading + optional paragraphs (16px) + optional note. */
export function H3({ children, light = false, className = "" }: { children: ReactNode; light?: boolean; className?: string }) {
  return <h3 className={`${light ? "t-h3-light" : "t-h3"} ${className}`}>{children}</h3>;
}
export function H4({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h4 className={`t-h4 ${className}`}>{children}</h4>;
}
export function P({ children, size = "body", className = "" }: { children: ReactNode; size?: "body" | "small" | "xs"; className?: string }) {
  const s = size === "body" ? "t-body" : size === "small" ? "t-small" : "t-xs";
  return <p className={`${s} ${className}`}>{children}</p>;
}
export function Lead({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`t-lead max-w-[830px] space-y-8 ${className}`}>{children}</div>;
}
export function Note({ title = "Note", children, className = "" }: { title?: string; children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-sm ${className}`}>
      <p className="t-xs font-bold">{title}</p>
      <p className="t-xs mt-1 opacity-90">{children}</p>
    </div>
  );
}
/** Standard section head: heading, paragraphs, optional note — constrained to ~550px like the reference. */
export function SectionHead({ title, light, children, note, className = "" }: { title: ReactNode; light?: boolean; children?: ReactNode; note?: ReactNode; className?: string }) {
  return (
    <div className={`max-w-[560px] ${className}`}>
      <H3 light={light}>{title}</H3>
      {children && <div className="mt-6 space-y-4">{children}</div>}
      {note && <Note className="mt-8">{note}</Note>}
    </div>
  );
}

/** Two-column split used everywhere: text left (≈400px), visual right. */
export function Split({ left, right, align = "center", className = "" }: { left: ReactNode; right: ReactNode; align?: "center" | "start"; className?: string }) {
  return (
    <div className={`grid gap-10 lg:grid-cols-[minmax(0,400px)_1fr] lg:gap-20 ${align === "center" ? "lg:items-center" : "lg:items-start"} ${className}`}>
      <div>{left}</div>
      <div className="min-w-0">{right}</div>
    </div>
  );
}

/* ---- Buttons ---- */
export function Button({ href, children, variant = "primary", size = "md", download = false }: { href: string; children: ReactNode; variant?: "primary" | "outline" | "mid" | "white-outline"; size?: "sm" | "md"; download?: boolean }) {
  const v = {
    primary: "bg-primary text-white",
    mid: "bg-mid text-ink",
    outline: "border border-current text-ink",
    "white-outline": "border border-white text-white",
  }[variant];
  const s = size === "sm" ? "h-10 px-5 text-sm" : "h-11 px-6 text-sm";
  return (
    <a href={href} download={download || undefined} className={`inline-flex items-center justify-center rounded-full font-medium ${v} ${s}`}>
      {children}
    </a>
  );
}

/* ---- Pills / badges ---- */
export function NumBadge({ n, tone = "ink" }: { n: number | string; tone?: "ink" | "white" }) {
  return (
    <span className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[10px] ${tone === "ink" ? "border-primary text-primary" : "border-white text-white"}`}>{n}</span>
  );
}
export function NumList({ items, tone = "ink" }: { items: ReactNode[]; tone?: "ink" | "white" }) {
  return (
    <ul className="space-y-4">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-4 t-xs"><NumBadge n={i + 1} tone={tone} /><span className="pt-1">{it}</span></li>
      ))}
    </ul>
  );
}
export function Check({ ok = true, className = "" }: { ok?: boolean; className?: string }) {
  return (
    <span className={`inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${ok ? "bg-green-500" : "bg-red-600"} ${className}`}>
      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {ok ? <path d="M5 10l3.5 3.5L15 6.5" /> : <path d="M6 6l8 8M14 6l-8 8" />}
      </svg>
    </span>
  );
}
export function Verdict({ ok, children, className = "" }: { ok: boolean; children: ReactNode; className?: string }) {
  return <p className={`flex items-center gap-3 t-xs ${className}`}><Check ok={ok} /><span>{children}</span></p>;
}
export function DoDont({ doText, dontText }: { doText: ReactNode; dontText: ReactNode }) {
  return (
    <div className="space-y-8">
      <div><p className="flex items-center gap-3 t-xs font-bold"><Check /> DO</p><p className="t-xs mt-4 max-w-[260px]">{doText}</p></div>
      <div><p className="flex items-center gap-3 t-xs font-bold"><Check ok={false} /> DON&apos;T</p><p className="t-xs mt-4 max-w-[260px]">{dontText}</p></div>
    </div>
  );
}

/* ---- Tiles (image/colour tiles with a caption inside, bottom-left) ---- */
export function Tile({ tone = "primary", caption, children, className = "", aspect = "aspect-[340/300]" }: { tone?: Tone | "photo"; caption?: ReactNode; children?: ReactNode; className?: string; aspect?: string }) {
  const bg = tone === "photo" ? "bg-[linear-gradient(135deg,#7a7a7a,#3a3a3a)] text-white" : toneBg[tone] + (tone === "white" ? " border border-line" : "");
  return (
    <div className={`relative flex ${aspect} items-center justify-center overflow-hidden rounded-2xl ${bg} ${className}`}>
      {children}
      {caption && <span className="absolute bottom-4 left-4 t-xs leading-tight">{caption}</span>}
    </div>
  );
}

/* ---- Don'ts grid: bordered/colored cards with red X, caption below ---- */
export function DontCard({ tone = "white", children, caption, aspect = "aspect-[360/240]" }: { tone?: Tone | "photo"; children: ReactNode; caption: ReactNode; aspect?: string }) {
  return (
    <div>
      <Tile tone={tone} aspect={aspect} className="rounded-2xl">
        {children}
        <Check ok={false} className="absolute right-3 top-3 h-6 w-6" />
      </Tile>
      <p className="t-small mt-3 pl-3">{caption}</p>
    </div>
  );
}
export function Grid({ cols = 3, gap = "gap-6", className = "", children }: { cols?: 2 | 3 | 4; gap?: string; className?: string; children: ReactNode }) {
  const c = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[cols];
  return <div className={`grid ${c} ${gap} ${className}`}>{children}</div>;
}

/* ---- Tables (blue header row) ---- */
export function Table({ head, rows, className = "" }: { head: string[]; rows: (string | number)[][]; className?: string }) {
  return (
    <table className={`w-full border-collapse t-xs ${className}`}>
      <thead><tr className="bg-mid text-ink">{head.map((h) => <th key={h} className="px-2 py-1.5 text-left font-bold">{h}</th>)}</tr></thead>
      <tbody>{rows.map((r, i) => <tr key={i} className="border-b border-primary/40">{r.map((c, j) => <td key={j} className="px-2 py-1.5">{c}</td>)}</tr>)}</tbody>
    </table>
  );
}

/* ---- Placeholder photo/illustration block ---- */
export function Ph({ label = "Image", className = "", children }: { label?: string; className?: string; children?: ReactNode }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#8a8a8a,#4a4a4a)] text-white ${className}`}>
      {children}
      <span className="absolute bottom-2 right-3 text-[10px] uppercase tracking-wider opacity-60">{label}</span>
    </div>
  );
}

/* ---- Logo helpers ---- */
export function MarkOn({ tone, className = "aspect-[340/300]", caption, markClass = "h-24 w-24", markColor = "text-accent" }: { tone: Tone | "photo"; className?: string; caption?: ReactNode; markClass?: string; markColor?: string }) {
  return <Tile tone={tone} aspect={className} caption={caption}><Mark className={`${markClass} ${markColor}`} /></Tile>;
}
export function WordmarkOn({ tone, className = "aspect-[500/290]", caption, wmClass = "text-[4rem]", wmColor = "text-white" }: { tone: Tone | "photo"; className?: string; caption?: ReactNode; wmClass?: string; wmColor?: string }) {
  return <Tile tone={tone} aspect={className} caption={caption}><Wordmark className={`${wmClass} ${wmColor}`} /></Tile>;
}
