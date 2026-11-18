import Image from "next/image";
import type { ReactNode } from "react";
import type { TypographyText } from "@/lib/i18n/dictionaries";

/* Static diagrams for the Typography page (Figma: Padding, Leading, Capitalization, Line Lengths).
   Outlined headings are the SVGs exported from Figma; rules are 1px CSS lines in the Figma stroke colours. */

const T = "/brand/typography";

/** Figma Check/X circles (28px). */
export function CheckNote({ ok, alt, children, className = "gap-2.5", text = "text-[10px] leading-[14px] font-normal" }: { ok: boolean; alt: string; children: ReactNode; className?: string; text?: string }) {
  return (
    <div className={`flex ${className}`}>
      <Image src={`${T}/${ok ? "icon-check-circle" : "icon-x-circle"}.svg`} alt={alt} width={ok ? 28 : 22.75} height={ok ? 28 : 22.75} className={`shrink-0 ${ok ? "size-7" : "m-[2.625px] size-[22.75px]"}`} />
      <p className={`min-w-0 flex-1 self-center text-grey-600 ${text}`}>{children}</p>
    </div>
  );
}

/* ---------------- Padding ---------------- */

const padRules: ("a" | "b" | "c")[] = ["a", "b", "b", "b", "a", "b", "b", "c", "b", "c", "b", "c", "c"];
const padBands = [
  { top: 0, h: 105, label: "4X", img: { src: "padding-headline.svg", w: 593.564, h: 105, alt: "Headline" } },
  { top: 106, h: 78, label: "3X" },
  { top: 184, h: 53, label: "2X", img: { src: "padding-subhead.svg", w: 290.932, h: 51.0007, alt: "Subhead" } },
  { top: 237, h: 53, label: "2X" },
  { top: 290, h: 26, label: "X", img: { src: "padding-body-copy.svg", w: 148.321, h: 25.9998, alt: "Body copy" } },
];

/** 501×316 spacing diagram: 13 evenly spaced guides, tinted bands holding the type samples, multipliers at left. */
export function PaddingDiagram() {
  return (
    <div dir="ltr" className="relative h-[316px] w-full overflow-hidden">
      {padRules.map((r, i) => (
        <span
          key={i}
          aria-hidden
          className={`absolute inset-x-0 h-px -translate-y-1/2 ${r === "a" ? "bg-pampas-300" : r === "c" ? "bg-grey-300" : "bg-[repeating-linear-gradient(90deg,var(--grey-300)_0_2px,transparent_2px_4px)]"}`}
          style={{ top: `${(i * 316) / 12}px` }}
        />
      ))}
      {padBands.map((b) => (
        <div key={b.top} className={`absolute inset-x-0 flex gap-[18px] overflow-hidden px-2 ${b.img ? "bg-primary/10" : ""}`} style={{ top: b.top, height: b.h }}>
          <p className="w-[11px] shrink-0 pt-1.5 font-[family-name:var(--font-secondary)] text-[8px] leading-[14px] text-pampas-950">{b.label}</p>
          {b.img && <Image src={`${T}/${b.img.src}`} alt={b.img.alt} width={b.img.w} height={b.img.h} className="max-w-none shrink-0" style={{ width: b.img.w, height: b.img.h }} />}
        </div>
      ))}
    </div>
  );
}

/* ---------------- Leading ---------------- */

function Marker({ n }: { n: number }) {
  return (
    <div className="flex w-full items-center gap-2" aria-hidden>
      <span className="h-[0.5px] flex-1 bg-grey-300" />
      <span className="flex size-4 items-center justify-center rounded-full border-[0.5px] border-grey-300 font-[family-name:var(--font-secondary)] text-[10px] font-medium leading-4 text-grey-950">{n}</span>
      <span className="h-[0.5px] flex-1 bg-grey-300" />
    </div>
  );
}

/** "Type Size × L = Leading" with numbered markers, then a note. */
export function LeadingFormula({ t }: { t: TypographyText["leading"]["formula"] }) {
  const big = "text-[3.5rem] leading-[64px] text-grey-950 sm:text-[4.5rem] sm:leading-[80px]";
  return (
    <div dir="ltr" className="flex w-full max-w-[323px] flex-col gap-6">
      <div className="flex flex-col gap-3" aria-label={t.aria} role="img">
        <div className="flex flex-col items-center gap-2.5">
          <p className={`whitespace-nowrap font-medium ${big}`}>{t.typeSize}</p>
          <Marker n={1} />
        </div>
        <div className="flex gap-3">
          <p className="flex w-[11px] items-center text-lg leading-6 text-grey-950">X</p>
          <div className="flex w-16 flex-col items-center gap-1">
            <p className={`h-[70px] ${big}`}>L</p>
            <Marker n={2} />
          </div>
        </div>
        <div className="flex gap-3">
          <p className="flex w-[11px] items-center text-lg leading-6 text-grey-950">=</p>
          <div className="flex flex-col items-center gap-1">
            <p className={`whitespace-nowrap ${big}`}>{t.leading}</p>
            <Marker n={3} />
          </div>
        </div>
      </div>
      <div className="space-y-1 text-grey-950 [unicode-bidi:plaintext]">
        <p className="font-[family-name:var(--font-secondary)] text-base font-medium leading-6">{t.note}</p>
        <p className="text-sm leading-5">{t.noteText}</p>
      </div>
    </div>
  );
}

/** Ratios of the five levels; the level names come from the language file in the same order. */
const ratios = ["1.0*", "1.2", "1.2", "1.2", "1.3"];

/** Figma "Typography Scale" table: white header row, Pampas-200 row rules, 10px type. */
export function LeadingTable({ t }: { t: TypographyText["leading"]["table"] }) {
  return (
    <table className="w-full max-w-[354px] border-collapse text-[10px] leading-4">
      <thead>
        <tr className="bg-white font-[family-name:var(--font-secondary)] font-medium text-pampas-950">
          <th className="w-[263px] px-3 py-2 text-start font-medium">{t.level}</th>
          <th className="whitespace-nowrap px-3 py-2 text-start font-medium">{t.ratio}</th>
        </tr>
      </thead>
      <tbody className="text-grey-700">
        {ratios.map((r, i) => (
          <tr key={i} className="border-b border-pampas-200">
            <td className="px-3 py-1.5 text-start">{t.rows[i]}</td>
            <td className="px-3 py-1.5 text-start">{r}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ---------------- Capitalization ---------------- */

type Line = { src: string; w: number; h: number };
const sentence: Line[] = [
  { src: "caps-sentence-case-1.svg", w: 462.004, h: 37.509 },
  { src: "caps-sentence-case-2.svg", w: 346.129, h: 34.5167 },
];
const title: Line[] = [
  { src: "caps-title-case-1.svg", w: 114.113, h: 23.7358 },
  { src: "caps-title-case-2.svg", w: 208.347, h: 23.7357 },
  { src: "caps-title-case-3.svg", w: 240.152, h: 23.736 },
];
const caps: Line[] = [
  { src: "caps-all-caps-1.svg", w: 161.815, h: 23 },
  { src: "caps-all-caps-2.svg", w: 229.849, h: 23 },
  { src: "caps-all-caps-3.svg", w: 185.815, h: 23 },
];

/** Outlined headline set on ruled lines (rule above and below each line). Widths are % of the Figma column (`base`) so lines keep their relative size. */
function Ruled({ lines, alt, base }: { lines: Line[]; alt: string; base: number }) {
  return (
    <div dir="ltr" className="flex flex-col gap-3" role="img" aria-label={alt}>
      {lines.map((l) => (
        <div key={l.src} className="relative w-full">
          <span aria-hidden className="absolute inset-x-0 top-0 h-px -translate-y-1/2 bg-grey-300" />
          <Image src={`${T}/${l.src}`} alt="" width={l.w} height={l.h} className="block h-auto" style={{ width: `${(l.w / base) * 100}%` }} />
          <span aria-hidden className="absolute inset-x-0 bottom-0 h-px translate-y-1/2 bg-grey-300" />
        </div>
      ))}
    </div>
  );
}

export function CapitalizationExamples({ t, doAlt, dontAlt }: { t: TypographyText["capitalization"]; doAlt: string; dontAlt: string }) {
  return (
    <div className="flex w-full flex-col gap-[60px] min-[1400px]:w-[546px] min-[1400px]:shrink-0">
      <div className="flex flex-col gap-[18px]">
        <Ruled lines={sentence} base={546} alt={t.altSentence} />
        <CheckNote ok alt={doAlt} className="max-w-[271px] gap-2.5">{t.sentenceNote}</CheckNote>
      </div>
      <div className="flex flex-col gap-10 sm:flex-row sm:gap-6">
        <div className="flex flex-1 flex-col gap-4">
          <Ruled lines={title} base={261} alt={t.altTitle} />
          <CheckNote ok alt={doAlt}>{t.titleNote}</CheckNote>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <Ruled lines={caps} base={261} alt={t.altCaps} />
          <CheckNote ok={false} alt={dontAlt}>{t.capsNote}</CheckNote>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Line Lengths ---------------- */

/** 325px Pampas-100 tile with a centred sample and a check/X caption under it. */
export function LengthTile({ ok, alt, caption, children }: { ok: boolean; alt: string; caption: string; children: ReactNode }) {
  return (
    <figure className="flex flex-col gap-4">
      <div className="@container flex h-[325px] items-center justify-center overflow-hidden rounded-[20px] bg-pampas-100 text-grey-950" dir="ltr" lang="en">{children}</div>
      <figcaption>
        <CheckNote ok={ok} alt={alt} className="gap-2" text="font-[family-name:var(--font-secondary)] text-xs font-medium leading-4">{caption}</CheckNote>
      </figcaption>
    </figure>
  );
}
