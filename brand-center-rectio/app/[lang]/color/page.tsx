import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { brand } from "@/content/brand.config";
import { currentLang } from "@/lib/i18n/server";
import { getColorText, type ColorText } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import { MarkSmall, Wordmark } from "@/components/Logo";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import { DontsSection, colorDonts } from "@/components/brand/Donts";
import SwatchCard from "@/components/ui/SwatchCard";
import { Button, Check } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await currentLang();
  return { title: (await getColorText(lang)).title, alternates: alternatesFor(lang, "/color") };
}

const heroSwatches = ["bg-white", "bg-black", "bg-grey-400", "bg-primary", "bg-green-500"];

const palette = [
  { s: { name: "", hex: "#A5846A", rgb: "165 132 106", hsl: "26 25 53", hsb: "26 36 65" }, className: "border border-grey-400 bg-primary text-black" },
  { s: { name: "", hex: "#FFFFFF", rgb: "255 255 255", hsl: "0 0 100", hsb: "0 0 100" }, className: "border border-pampas-400 bg-white text-grey-950" },
  { s: { name: "", hex: "#000000", rgb: "0 0 0", hsl: "0 0 0", hsb: "0 0 0" }, className: "border border-grey-400 bg-black text-white" },
];

/** Row colours of the waterfall; the colour names come from the language file in the same order. */
const waterfall = ["bg-white text-grey-950", "bg-pampas-200 text-grey-950", "bg-pampas-300 text-grey-950", "bg-primary text-black", "bg-pampas-700 text-white"];

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
function Half({ cls, hex, t }: { cls: string; hex: string; t: ColorText["accessibility"] }) {
  return (
    <div className={`flex flex-1 flex-col gap-2.5 p-4 ${cls}`}>
      <div className="flex-1 space-y-1">
        <p className="font-[family-name:var(--font-secondary)] text-xs leading-4">{hex}</p>
        <p className="text-base font-medium leading-6">{t.large[0]}<br />{t.large[1]}</p>
      </div>
      <p className="text-[10px] leading-4">{t.normal}</p>
    </div>
  );
}

/** Accessibility sample: two-colour box with "Large Text" / "Normal Text", checks on the left. */
function A11yRow({ left, right, t, ok = [true, true] }: { left: [string, string]; right: [string, string]; t: ColorText["accessibility"]; ok?: [boolean, boolean] }) {
  return (
    <div className="flex gap-2.5">
      <div className="flex w-7 shrink-0 flex-col gap-[29px] pt-[45px]"><Check ok={ok[0]} /><Check ok={ok[1]} /></div>
      <div className="flex h-[142px] flex-1 overflow-hidden rounded-xl border border-primary">
        <Half cls={left[0]} hex={left[1]} t={t} />
        <Half cls={right[0]} hex={right[1]} t={t} />
      </div>
    </div>
  );
}

export default async function Page() {
  const t = await getColorText(await currentLang());
  const rail = [
    { id: "introduction", label: t.rail.introduction },
    { id: "primary-palette", label: t.rail.palette },
    { id: "color-pairings", label: t.rail.pairings },
    { id: "waterfall", label: t.rail.waterfall },
    { id: "web-accessibility", label: t.rail.accessibility },
    { id: "donts", label: t.rail.donts },
  ];
  return (
    <PageShell
      title={t.title}
      rail={rail}
      hero={
        <PageHero title={t.title}>
          {/* Endless strip: six copies of the set, so the track fills ultra-wide screens and -50% lands on an identical frame. */}
          <div aria-hidden dir="ltr" className="-mx-5 overflow-hidden lg:-mx-[120px]">
            <div className="marquee-track flex w-max">
              {Array.from({ length: 6 }, (_, n) => heroSwatches.map((c) => <span key={`${n}-${c}`} className={`mr-4 size-[160px] shrink-0 rounded-3xl lg:size-[260px] ${c}`} />))}
            </div>
          </div>
        </PageHero>
      }
      after={<ExploreAssets current="color" />}
    >
      <section id="introduction" className="scroll-mt-6 bg-white px-5 py-16 lg:p-[70px]">
        <p className="max-w-[863px] text-[2.5rem] leading-[48px] text-grey-950">{t.intro.text}</p>
        <div className="mt-8"><Button href={brand.downloads.color} download>{t.intro.download}</Button></div>
      </section>

      {/* Primary Palette */}
      <section id="primary-palette" className="scroll-mt-6 space-y-[60px] bg-white px-5 py-20 lg:px-[70px] lg:py-[160px]">
        <div className="space-y-[30px]">
          <h2 className="t-section text-black">{t.palette.heading}</h2>
          <p className="max-w-[747px] text-xl leading-7 text-grey-600">{t.palette.text}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {palette.map((p, i) => <SwatchCard key={p.s.hex} s={{ ...p.s, name: t.palette.names[i] }} className={p.className} />)}
        </div>
      </section>

      {/* Color Pairings */}
      <section id="color-pairings" className="scroll-mt-6 flex flex-col gap-20 bg-pampas-100 px-5 py-16 text-pampas-950 lg:p-[70px]">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-[family-name:var(--font-secondary)] text-[2.5rem] font-medium leading-[48px]">{t.pairings.heading}</h2>
            <p className="max-w-[664px] text-xl leading-7">{t.pairings.text}</p>
          </div>
          <div className="max-w-[386px] space-y-2 font-[family-name:var(--font-secondary)] text-xs leading-4">
            <p className="font-medium">{t.pairings.note}</p>
            <p>{t.pairings.noteText}</p>
          </div>
        </div>

        <div className="space-y-[60px]">
          <div className="space-y-4">
            <h3 className="text-[2rem] font-medium leading-10">{t.pairings.solid.heading}</h3>
            <p className="max-w-[664px] text-xl leading-7">{t.pairings.solid.text}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Pairing className="bg-white" text="text-grey-950" wm="text-pampas-600" />
            <Pairing className="bg-primary" text="text-white" />
          </div>
        </div>

        <div className="space-y-[60px]">
          <div className="space-y-4">
            <h3 className="text-[2rem] font-medium leading-10">{t.pairings.photo.heading}</h3>
            <p className="max-w-[664px] text-xl leading-7">{t.pairings.photo.text}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Pairing className="" text="text-white" photo={<Image src="/brand/photo-crowd.png" alt="" fill sizes="(min-width: 1024px) 500px, 100vw" className="object-cover" />} />
            <Pairing className="" text="text-grey-950" photo={<div className="absolute left-[0.07%] top-[-24.66%] h-[149.32%] w-[108.8%]"><Image src="/brand/photo-figure.png" alt="" fill sizes="(min-width: 1024px) 550px, 110vw" /></div>} />
          </div>
        </div>

        <div id="waterfall" className="scroll-mt-6 flex flex-col gap-[60px] lg:flex-row lg:items-center">
          <div className="max-w-[486px] space-y-4">
            <h3 className="text-[2rem] font-medium leading-10">{t.pairings.waterfall.heading}</h3>
            <p className="text-xl leading-7">{t.pairings.waterfall.text}</p>
          </div>
          <div className="flex h-[480px] flex-1 flex-col overflow-hidden rounded-3xl border border-black/60 lg:h-[603px]">
            {waterfall.map((cls, i) => <p key={i} className={`flex flex-1 items-center p-7 text-xl font-medium leading-7 ${cls}`}>{i + 1} {t.pairings.waterfall.names[i]}</p>)}
          </div>
        </div>
      </section>

      {/* Web Accessibility */}
      <section id="web-accessibility" className="scroll-mt-6 flex flex-col gap-[60px] bg-white px-5 py-20 lg:flex-row lg:px-[70px] lg:py-[160px]">
        <div className="space-y-[30px] lg:max-w-[500px]">
          <h2 className="t-section text-black">{t.accessibility.heading}</h2>
          <div className="space-y-6 text-xl leading-7 text-grey-600">
            <p>{t.accessibility.p1}</p>
            <p>{t.accessibility.p2}</p>
            <p>{t.accessibility.p3}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-[70px] p-5">
          <div className="space-y-10">
            <p className="font-[family-name:var(--font-secondary)] text-lg font-medium leading-6 text-pampas-950">{t.accessibility.fully}</p>
            <div className="space-y-6">
              <A11yRow left={["bg-white text-pampas-900", "#FFFFFF"]} right={["bg-primary text-black", "#A5846A"]} t={t.accessibility} />
              <A11yRow left={["bg-black text-white", "#000000"]} right={["bg-pampas-900 text-white", "#554139"]} t={t.accessibility} />
            </div>
          </div>
          <div className="space-y-5">
            <p className="font-[family-name:var(--font-secondary)] text-lg font-medium leading-6 text-pampas-950">{t.accessibility.partially}</p>
            <A11yRow left={["bg-white text-primary", "#FFFFFF"]} right={["bg-primary text-white", "#A5846A"]} t={t.accessibility} ok={[true, false]} />
          </div>
        </div>
      </section>

      <DontsSection id="donts" title={t.donts.heading} tiles={colorDonts} captions={t.donts.captions} />
    </PageShell>
  );
}
