import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { brand } from "@/content/brand.config";
import { Mark } from "@/components/Logo";
import PageShell, { IntroSection } from "@/components/site/PageShell";
import { SparkHero } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import SparkNotes from "@/components/brand/SparkNotes";
import { DontsSection, sparkDonts } from "@/components/brand/Donts";
import { Button } from "@/components/ui";

export const metadata: Metadata = { title: brand.markName };

const rail = [
  { id: "introduction", label: "Introduction" },
  { id: "notes", label: "Spark Notes" },
  { id: "primary-color-usage", label: "Primary Color Usage" },
  { id: "sizing", label: "Sizing" },
  { id: "app-icon", label: "App Icon" },
  { id: "donts", label: "Spark Don’ts" },
];

const colorCards = [
  { bg: "bg-primary text-white", mark: "text-white", label: ["Rectio White", "on Pampas"], hex: "#FFFFFF", rgb: "255 255 255", sub: "text-grey-100" },
  { bg: "border border-grey-300 bg-pampas-50 text-black", mark: "text-primary", label: ["Rectio Pampas", "on White"], hex: "#A5846A", rgb: "165 132 106", sub: "" },
  { bg: "border border-grey-300 bg-pampas-200 text-black", mark: "text-pampas-950", label: ["Rectio Dark Pampas", "on Light Pampas"], hex: "#2D211D", rgb: "045 033 029", sub: "" },
];

/** Figma "Line": 369px dashed rule (exported vertical, turned flat) under each size sample. */
function DashedRule() {
  return (
    <div className="flex h-0 w-full max-w-[369px] items-center justify-center overflow-visible">
      <Image src="/brand/spark/dashed-line-369.svg" alt="" width={1} height={369} className="h-[369px] w-px max-w-none shrink-0 rotate-90" />
    </div>
  );
}

/** Minimum-size sample: mark, caption, then the dashed rule. */
function SizeRow({ caption, className = "", children }: { caption: string; className?: string; children: ReactNode }) {
  return (
    <>
      <div className={`flex flex-col gap-3.5 ${className}`}>
        {children}
        <p className="text-sm leading-5 text-white">{caption}</p>
      </div>
      <DashedRule />
    </>
  );
}

export default function Page() {
  return (
    <PageShell
      title={brand.markName}
      rail={rail}
      footerLabel="Download the assets"
      hero={<SparkHero title={brand.markName} />}
      intro={
        <IntroSection>
          <div className="space-y-8 text-[2.5rem] leading-[48px] text-grey-950">
            <p className="font-medium">The Spark is our primary logo.</p>
            <p>It’s an iconic visual shorthand for {brand.name} that’s bold at any scale and represents our brand clearly anywhere it shows up.</p>
          </div>
          <div className="mt-8"><Button href={brand.downloads.all} download>Download the assets</Button></div>
        </IntroSection>
      }
      after={<ExploreAssets except="spark" />}
    >
      {/* Spark Overview */}
      <section id="introduction" className="scroll-mt-6 flex flex-col gap-[60px] bg-white px-5 py-16 lg:flex-row lg:p-[70px]">
        <div className="flex-1 space-y-4">
          <h2 className="t-section-lg text-black">Spark Overview</h2>
          <div className="max-w-[465px] space-y-2 text-base leading-6 text-grey-600">
            <p>The Spark is our most iconic symbol and the quickest shorthand for the {brand.name} brand, radiating energy and optimism wherever it appears.</p>
            <p>The Spark can appear alone as a representation of {brand.name} or with our wordmark in the same composition, but they should never be placed right next to each other.</p>
            <p>See Layout page ‘Applying Logos’ for placement guidance.</p>
          </div>
        </div>
        <span className="mx-auto flex size-[280px] shrink-0 items-center justify-center lg:size-[400px]"><Mark className="size-[86%] text-primary" /></span>
      </section>

      {/* Spark Notes */}
      <section id="notes" className="scroll-mt-6 bg-white p-4 lg:p-[30px]">
        <SparkNotes />
      </section>

      {/* Primary Color Usage */}
      <section id="primary-color-usage" className="scroll-mt-6 bg-white px-5 py-16 lg:p-[70px]">
        <div className="space-y-4">
          <h2 className="t-section text-black">Primary Color Usage</h2>
          <p className="max-w-[560px] text-base leading-6 text-grey-600">Our Spark should mainly appear in White on a Pampas background or in Pampas on White. In small-scale uses, Dark Pampas can be used on Light Pampas for max contrast and legibility.</p>
        </div>
        <div className="mt-6"><Button href={brand.downloads.all} download>Download assets</Button></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {colorCards.map((c) => (
            <div key={c.hex} className={`relative flex h-[306px] flex-col justify-end rounded-xl px-4 pb-4 pt-8 ${c.bg}`}>
              <span className="absolute left-1/2 top-[calc(50%-23px)] flex size-[176px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"><Mark className={`size-[86%] ${c.mark}`} /></span>
              <div className="relative flex items-end gap-3 font-[family-name:var(--font-secondary)]">
                <p className="flex-1 text-sm leading-5">{c.label[0]}<br />{c.label[1]}</p>
                <p className={`text-right text-xs leading-4 ${c.sub}`}>{c.hex}<br />{c.rgb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sizing + App Icon */}
      <section className="flex flex-col gap-10 bg-grey-100 p-4 lg:p-[30px]">
        <div id="sizing" className="scroll-mt-6 flex flex-col justify-between gap-12 overflow-hidden rounded-[var(--radius-card)] bg-primary p-6 text-white lg:h-[506px] lg:flex-row lg:items-center lg:p-10">
          <div className="max-w-[363px] space-y-[18px]">
            <div className="space-y-4">
              <h2 className="t-section">Minimum Sizing</h2>
              <p className="text-base leading-6 text-grey-100">To ensure legibility, we don’t use our Spark at sizes smaller than 16 pixels high in digital applications or 0.25 inches high in print.</p>
            </div>
            <div className="space-y-2 font-[family-name:var(--font-secondary)] text-sm leading-5">
              <p>Print Minimum Size - 0.25 Inch</p>
              <p>Digital Minimum Size - 16 px</p>
            </div>
            <div className="space-y-2 font-[family-name:var(--font-secondary)] text-sm leading-5">
              <p className="font-medium">Note</p>
              <p className="text-grey-100">Sparks here are not shown to scale. Refer to pixel and inch measurements for proper sizing.</p>
            </div>
          </div>
          {/* Samples with dashed rules; the rulers on the right measure each sample's height. */}
          <div className="relative flex w-full max-w-[445px] flex-col gap-4 lg:h-[386px]">
            <SizeRow caption="Print Minimum Size: 0.25 Inches">
              <span className="flex size-[130px] items-center justify-center"><Mark className="size-[86%] text-white" /></span>
            </SizeRow>
            <SizeRow caption="Digital Minimum Size - 16 px" className="py-2">
              <span className="flex size-10 items-center justify-center">
                <Image src="/brand/spark-mark-small-white.svg" alt="" width={64} height={64} className="size-[86%]" />
              </span>
            </SizeRow>
            <Image src="/brand/spark/ruler-print.svg" alt="" width={8} height={221} className="absolute left-[363px] top-[-61px] hidden h-[221px] w-2 lg:block" />
            <Image src="/brand/spark/ruler-digital.svg" alt="" width={8} height={95} className="absolute left-[363px] top-[195px] hidden h-[94.5px] w-2 lg:block" />
          </div>
        </div>

        <div id="app-icon" className="scroll-mt-6 flex flex-col justify-between gap-10 overflow-hidden rounded-[var(--radius-card)] bg-pampas-700 p-6 text-white lg:h-[506px] lg:flex-row lg:p-10">
          <div className="max-w-[299px] space-y-4">
            <h2 className="t-section">Logo Icon</h2>
            <p className="text-base leading-6 text-grey-100">In our app, the Spark always appears in White on a Pampas background with our usual clearspace.</p>
          </div>
          <div className="relative aspect-[454/426] w-full max-w-[454px] overflow-hidden rounded-[14px] bg-gradient-to-t from-pampas-100 to-pampas-200 lg:h-full lg:w-[454px]">
            <Image src="/brand/logo-icon-mockup.png" alt="The Spark as an app icon on a laptop screen" fill sizes="454px" className="object-cover" />
          </div>
        </div>
      </section>

      <DontsSection id="donts" title="Spark Don’ts" tiles={sparkDonts} />
    </PageShell>
  );
}
