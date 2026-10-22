import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { brand } from "@/content/brand.config";
import { MarkSmall, Wordmark } from "@/components/Logo";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import { DontsSection, colorDonts } from "@/components/brand/Donts";
import SwatchCard from "@/components/ui/SwatchCard";
import { Button, Check } from "@/components/ui";

export const metadata: Metadata = { title: "Color" };

const rail = [
  { id: "introduction", label: "Color" },
  { id: "primary-palette", label: "Primary Palette" },
  { id: "color-pairings", label: "Color Pairings" },
  { id: "waterfall", label: "Waterfall" },
  { id: "web-accessibility", label: "Web Accessibility" },
  { id: "donts", label: "Don’ts" },
];

const heroSwatches = ["bg-white", "bg-black", "bg-grey-400", "bg-primary", "bg-green-500"];

const palette = [
  { s: { name: "Pampas", hex: "#A5846A", rgb: "165 132 106", hsl: "26 25 53", hsb: "26 36 65" }, className: "border border-grey-400 bg-primary text-white" },
  { s: { name: "White", hex: "#FFFFFF", rgb: "255 255 255", hsl: "0 0 100", hsb: "0 0 100" }, className: "border border-pampas-400 bg-white text-grey-950" },
  { s: { name: "Black", hex: "#000000", rgb: "0 0 0", hsl: "0 0 0", hsb: "0 0 0" }, className: "border border-grey-400 bg-black text-white" },
];

const waterfall = [
  { n: 1, name: "White", cls: "bg-white text-grey-950" },
  { n: 2, name: "Pearl Bush", cls: "bg-pampas-200 text-grey-950" },
  { n: 3, name: "Vanilla", cls: "bg-pampas-300 text-grey-950" },
  { n: 4, name: "Pampas", cls: "bg-primary text-white" },
  { n: 5, name: "Roman Coffee", cls: "bg-pampas-700 text-white" },
];

/** Pairing card: "Aa" + small-use Spark top row, wordmark bottom-left (151 × 38), 333px tall, 24px radius. */
function Pairing({ className, text, wm = text, photo }: { className: string; text: string; wm?: string; photo?: ReactNode }) {
  return (
    <div className={`relative flex h-[333px] flex-col justify-between overflow-hidden rounded-3xl p-8 ${className}`}>
      {photo}
      <div className={`relative flex items-start justify-between ${text}`}>
        <span className="text-[4.5rem] font-extralight leading-[80px]">Aa</span>
        <MarkSmall className="h-12 w-[47.83px]" />
      </div>
      <Wordmark className={`relative self-start text-[2.79rem] ${wm}`} />
    </div>
  );
}

/** One half of an accessibility sample. */
function Half({ cls, hex }: { cls: string; hex: string }) {
  return (
    <div className={`flex flex-1 flex-col gap-2.5 p-4 ${cls}`}>
      <div className="flex-1 space-y-1">
        <p className="font-[family-name:var(--font-secondary)] text-xs leading-4">{hex}</p>
        <p className="text-base font-medium leading-6">Large<br />Text</p>
      </div>
      <p className="text-[10px] leading-4">Normal Text</p>
    </div>
  );
}

/** Accessibility sample: two-colour box with "Large Text" / "Normal Text", checks on the left. */
function A11yRow({ left, right, ok = [true, true] }: { left: string; right: string; ok?: [boolean, boolean] }) {
  return (
    <div className="flex gap-2.5">
      <div className="flex w-7 shrink-0 flex-col gap-[29px] pt-[45px]"><Check ok={ok[0]} /><Check ok={ok[1]} /></div>
      <div className="flex h-[142px] flex-1 overflow-hidden rounded-xl border border-primary">
        <Half cls={left} hex="#FFFFFF" />
        <Half cls={right} hex="#A5846A" />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <PageShell
      title="Color"
      rail={rail}
      footerLabel="Download the assets"
      hero={
        <PageHero title="Color">
          <div className="flex justify-center gap-4 lg:-mx-[120px]">
            {heroSwatches.map((c) => <span key={c} className={`size-[160px] shrink-0 rounded-3xl lg:size-[260px] ${c}`} />)}
          </div>
        </PageHero>
      }
      after={<ExploreAssets except="color" />}
    >
      <section id="introduction" className="scroll-mt-6 bg-white px-5 py-16 lg:p-[70px]">
        <p className="max-w-[863px] text-[2.5rem] leading-[48px] text-grey-950">Our color palette provides distinctiveness and differentiation through the consistent use of {brand.name}’s most iconic and recognizable colors: Pampas and White.</p>
        <div className="mt-8"><Button href={brand.downloads.all} download>Download the assets</Button></div>
      </section>

      {/* Primary Palette */}
      <section id="primary-palette" className="scroll-mt-6 space-y-[60px] bg-white px-5 py-20 lg:px-[70px] lg:py-[160px]">
        <div className="space-y-[30px]">
          <h2 className="t-section text-black">Primary Palette</h2>
          <p className="max-w-[747px] text-xl leading-7 text-grey-600">Our primary palette is made of the colors that are most instantly recognizable as {brand.name}: Pampas, White, and Black.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {palette.map((p) => <SwatchCard key={p.s.hex} s={p.s} className={p.className} />)}
        </div>
      </section>

      {/* Color Pairings */}
      <section id="color-pairings" className="scroll-mt-6 flex flex-col gap-20 bg-pampas-100 px-5 py-16 text-pampas-950 lg:p-[70px]">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-[family-name:var(--font-secondary)] text-[2.5rem] font-medium leading-[48px]">Color Pairings</h2>
            <p className="max-w-[664px] text-xl leading-7">When combining different pieces in a layout, we use the combos shown here for consistency and legibility.</p>
          </div>
          <div className="max-w-[386px] space-y-2 font-[family-name:var(--font-secondary)] text-xs leading-4">
            <p className="font-medium">Note</p>
            <p>Pampas type is reserved for high-impact, low-content applications such as video end cards, supers, or signage. We don’t use Pampas for applications with small, dense, or detailed copy.</p>
          </div>
        </div>

        <div className="space-y-[60px]">
          <div className="space-y-4">
            <h3 className="text-[2rem] font-medium leading-10">Solid Background</h3>
            <p className="max-w-[664px] text-xl leading-7">Over solid backgrounds, we prefer our iconic and recognizable colorways. These should be used for most communications.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Pairing className="bg-white" text="text-grey-950" wm="text-pampas-600" />
            <Pairing className="bg-primary" text="text-white" />
          </div>
        </div>

        <div className="space-y-[60px]">
          <div className="space-y-4">
            <h3 className="text-[2rem] font-medium leading-10">Photography</h3>
            <p className="max-w-[664px] text-xl leading-7">Over photography, we default to using White type and White logos. On photos with lighter backgrounds, our Black wordmark and Spark may provide better contrast — please use your best judgment for legibility.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Pairing className="" text="text-white" photo={<Image src="/brand/photo-crowd.png" alt="" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />} />
            <Pairing className="" text="text-grey-950" photo={<div className="absolute left-[0.07%] top-[-24.66%] h-[149.32%] w-[108.8%]"><Image src="/brand/photo-figure.png" alt="" fill sizes="(min-width: 1024px) 550px, 110vw" /></div>} />
          </div>
        </div>

        <div id="waterfall" className="scroll-mt-6 flex flex-col gap-[60px] lg:flex-row lg:items-center">
          <div className="max-w-[486px] space-y-4">
            <h3 className="text-[2rem] font-medium leading-10">Waterfall</h3>
            <p className="text-xl leading-7">In some instances, we apply a waterfall treatment that organizes our Pampas palette (plus White) into a gradient. This treatment can be applied to help establish hierarchy when organizing information into charts, tables, or graphs.</p>
          </div>
          <div className="flex h-[480px] flex-1 flex-col overflow-hidden rounded-3xl border border-black/60 lg:h-[603px]">
            {waterfall.map((w) => <p key={w.n} className={`flex flex-1 items-center p-7 text-xl font-medium leading-7 ${w.cls}`}>{w.n} {w.name}</p>)}
          </div>
        </div>
      </section>

      {/* Web Accessibility */}
      <section id="web-accessibility" className="scroll-mt-6 flex flex-col gap-[60px] bg-white px-5 py-20 lg:flex-row lg:px-[70px] lg:py-[160px]">
        <div className="space-y-[30px] lg:max-w-[500px]">
          <h2 className="t-section text-black">Web Accessibility</h2>
          <div className="space-y-6 text-xl leading-7 text-grey-600">
            <p>The Web Content Accessibility Guidelines (WCAG) are standards that help make the internet accessible to everyone, including people with disabilities. With color, they tell us the amount of visual contrast required between a piece of text and the background to maintain legibility for users with visual impairments.</p>
            <p>When picking colors for web, we aim to comply with WCAG 2.0 standards for both large and normal text sizes. Large text is 14pt (18.66px) when set in a bold weight, or 18pt (24px) when set in a lighter weight. Any text beneath these sizes is considered normal text.</p>
            <p>We always want to achieve a AAA rating, which is the highest possible compliance level (noted in green). Pampas text is not AA compliant at small sizes and should be avoided.</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[70px] p-5">
          <div className="space-y-10">
            <p className="font-[family-name:var(--font-secondary)] text-lg font-medium leading-6 text-pampas-950">Fully compliant</p>
            <div className="space-y-6">
              <A11yRow left="bg-white text-pampas-900" right="bg-primary text-white" />
              <A11yRow left="bg-black text-white" right="bg-primary text-white" />
            </div>
          </div>
          <div className="space-y-5">
            <p className="font-[family-name:var(--font-secondary)] text-lg font-medium leading-6 text-pampas-950">Partially compliant</p>
            <A11yRow left="bg-white text-primary" right="bg-primary text-white" ok={[true, false]} />
          </div>
        </div>
      </section>

      <DontsSection id="donts" title="Color Don’ts" tiles={colorDonts} />
    </PageShell>
  );
}
