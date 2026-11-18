import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { brand } from "@/content/brand.config";
import { currentLang } from "@/lib/i18n/server";
import { getShell, getSparkText } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import { Mark } from "@/components/Logo";
import PageShell, { IntroSection } from "@/components/site/PageShell";
import { SparkHero } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import SparkNotes from "@/components/brand/SparkNotes";
import { DontsSection, sparkDonts } from "@/components/brand/Donts";
import { Button } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await currentLang();
  return { title: (await getShell(lang)).nav.spark, alternates: alternatesFor(lang, "/logo") };
}

/** Colours of the three cards; their names come from the language file in the same order. */
const colorCards = [
  { bg: "bg-primary text-black", mark: "text-white", hex: "#FFFFFF", rgb: "255 255 255" },
  { bg: "border border-grey-300 bg-pampas-50 text-black", mark: "text-primary", hex: "#A5846A", rgb: "165 132 106" },
  { bg: "border border-grey-300 bg-pampas-200 text-black", mark: "text-pampas-950", hex: "#2D211D", rgb: "045 033 029" },
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
        <p className="text-left text-sm leading-5 text-white [unicode-bidi:plaintext]">{caption}</p>
      </div>
      <DashedRule />
    </>
  );
}

export default async function Page() {
  const lang = await currentLang();
  const [t, shell] = await Promise.all([getSparkText(lang), getShell(lang)]);
  const title = shell.nav.spark;
  const rail = [
    { id: "introduction", label: t.rail.introduction },
    { id: "notes", label: t.rail.notes },
    { id: "primary-color-usage", label: t.rail.color },
    { id: "sizing", label: t.rail.sizing },
    { id: "app-icon", label: t.rail.appIcon },
    { id: "donts", label: t.rail.donts },
  ];
  return (
    <PageShell
      title={title}
      rail={rail}
      hero={<SparkHero title={title} />}
      intro={
        <IntroSection>
          <div className="space-y-8 text-[2.5rem] leading-[48px] text-grey-950">
            <p className="font-medium">{t.intro.p1}</p>
            <p>{t.intro.p2}</p>
          </div>
          <div className="mt-8"><Button href={brand.downloads.spark} download>{t.intro.download}</Button></div>
        </IntroSection>
      }
      after={<ExploreAssets current="spark" />}
    >
      {/* Spark Overview */}
      <section id="introduction" className="scroll-mt-6 flex flex-col gap-[60px] bg-white px-5 py-16 lg:flex-row lg:p-[70px]">
        <div className="flex-1 space-y-4">
          <h2 className="t-section-lg text-black">{t.overview.heading}</h2>
          <div className="max-w-[465px] space-y-2 text-base leading-6 text-grey-600">
            <p>{t.overview.p1}</p>
            <p>{t.overview.p2}</p>
            <p>{t.overview.p3}</p>
          </div>
        </div>
        <span className="mx-auto flex size-[280px] shrink-0 items-center justify-center lg:size-[400px]"><Mark className="size-[86%] text-primary" /></span>
      </section>

      {/* Spark Notes */}
      <section id="notes" className="scroll-mt-6 bg-white p-4 lg:p-[30px]">
        <SparkNotes text={t.notes} />
      </section>

      {/* Primary Color Usage */}
      <section id="primary-color-usage" className="scroll-mt-6 bg-white px-5 py-16 lg:p-[70px]">
        <div className="space-y-4">
          <h2 className="t-section text-black">{t.color.heading}</h2>
          <p className="max-w-[560px] text-base leading-6 text-grey-600">{t.color.text}</p>
        </div>
        <div className="mt-6"><Button href={brand.downloads.spark} download>{t.color.download}</Button></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {colorCards.map((c, i) => (
            <div key={c.hex} className={`relative flex h-[306px] flex-col justify-end rounded-xl px-4 pb-4 pt-8 ${c.bg}`}>
              <span className="absolute left-1/2 top-[calc(50%-23px)] flex size-[176px] -translate-x-1/2 -translate-y-1/2 items-center justify-center"><Mark className={`size-[86%] ${c.mark}`} /></span>
              <div className="relative flex items-end gap-3 font-[family-name:var(--font-secondary)]">
                <p className="flex-1 text-sm leading-5">{t.color.cards[i][0]}<br />{t.color.cards[i][1]}</p>
                <p dir="ltr" className="text-end text-xs leading-4">{c.hex}<br />{c.rgb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sizing + App Icon */}
      <section className="flex flex-col gap-10 bg-grey-100 p-4 lg:p-[30px]">
        <div id="sizing" className="scroll-mt-6 flex flex-col justify-between gap-12 overflow-hidden rounded-[var(--radius-card)] bg-pampas-700 p-6 text-white lg:h-[506px] lg:flex-row lg:items-center lg:p-10">
          <div className="max-w-[363px] space-y-[18px]">
            <div className="space-y-4">
              <h2 className="t-section">{t.sizing.heading}</h2>
              <p className="text-base leading-6 text-grey-100">{t.sizing.text}</p>
            </div>
            <div className="space-y-2 font-[family-name:var(--font-secondary)] text-sm leading-5">
              <p>{t.sizing.print}</p>
              <p>{t.sizing.digital}</p>
            </div>
            <div className="space-y-2 font-[family-name:var(--font-secondary)] text-sm leading-5">
              <p className="font-medium">{t.sizing.note}</p>
              <p className="text-grey-100">{t.sizing.noteText}</p>
            </div>
          </div>
          {/* Samples with dashed rules; the rulers on the right measure each sample's height. */}
          <div dir="ltr" className="relative flex w-full max-w-[445px] flex-col gap-4 lg:h-[386px]">
            <SizeRow caption={t.sizing.capPrint}>
              <span className="flex size-[130px] items-center justify-center"><Mark className="size-[86%] text-white" /></span>
            </SizeRow>
            <SizeRow caption={t.sizing.capDigital} className="py-2">
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
            <h2 className="t-section">{t.appIcon.heading}</h2>
            <p className="text-base leading-6 text-grey-100">{t.appIcon.text}</p>
          </div>
          <div className="relative aspect-[454/426] w-full max-w-[454px] overflow-hidden rounded-[14px] bg-gradient-to-t from-pampas-100 to-pampas-200 lg:h-full lg:w-[454px]">
            <Image src="/brand/logo-icon-mockup.png" alt={t.appIcon.alt} fill sizes="454px" className="object-cover" />
          </div>
        </div>
      </section>

      <DontsSection id="donts" title={t.donts.heading} tiles={sparkDonts} captions={t.donts.captions} />
    </PageShell>
  );
}
