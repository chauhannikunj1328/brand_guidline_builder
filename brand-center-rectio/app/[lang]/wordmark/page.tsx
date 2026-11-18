import type { Metadata } from "next";
import Image from "next/image";
import { brand } from "@/content/brand.config";
import { currentLang } from "@/lib/i18n/server";
import { getWordmarkText, type WordmarkText } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import { Wordmark } from "@/components/Logo";
import PageShell from "@/components/site/PageShell";
import { HeroFrame } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import { DontsSection, wordmarkDonts } from "@/components/brand/Donts";
import ClearspaceDiagram from "@/components/brand/ClearspaceDiagram";
import { Button } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await currentLang();
  return { title: (await getWordmarkText(lang)).title, alternates: alternatesFor(lang, "/wordmark") };
}

const label = "font-[family-name:var(--font-secondary)] text-sm font-bold leading-5 text-grey-950";
const Num = ({ n, className }: { n: number; className: string }) => (
  <span className={`absolute flex size-10 items-center justify-center rounded-full border border-black/50 ${label} ${className}`}>{n}</span>
);
const Rule = ({ className }: { className: string }) => (
  <Image src="/brand/wordmark/dashed-line-749.svg" alt="" width={749} height={1} className={`absolute left-0 h-px w-[749px] max-w-none ${className}`} />
);

/** Figma minimum-sizing diagram (824 × 599): both wordmarks on dashed baselines, rulers and numbered labels on the right. */
function SizingDiagram({ t }: { t: WordmarkText["sizing"] }) {
  return (
    <>
      {/* Desktop: positions straight from the design. Always left to right, as it is pixel-placed artwork. */}
      <div dir="ltr" className="relative hidden h-[599px] lg:block">
        <Image src="/brand/wordmark/ruler-standard.svg" alt="" width={8} height={426} className="absolute left-[732px] top-0 h-[426px] w-2" />
        <Image src="/brand/wordmark/ruler-small-use.svg" alt="" width={8} height={110} className="absolute left-[732px] top-[454.5px] h-[110px] w-2" />
        <Wordmark className="absolute left-0 top-[114.5px] text-[13.11rem] text-grey-950" />
        <Wordmark className="absolute left-0 top-[494px] text-[2.69rem] text-grey-950" />
        <p className={`absolute left-[760px] top-[213px] whitespace-nowrap ${label}`}>{t.standard}</p>
        <p className={`absolute left-[760px] top-[500px] whitespace-nowrap ${label}`}>{t.smallUse}</p>
        <Num n={1} className="left-[765px] top-[419px]" />
        <Num n={2} className="left-[765px] top-[559px]" />
        <Rule className="top-[440px]" />
        <Rule className="top-[579px]" />
      </div>
      {/* Small screens: the same two samples stacked. */}
      <div dir="ltr" className="space-y-8 lg:hidden">
        {[{ n: 1, t: t.standard, size: "text-[5rem]" }, { n: 2, t: t.smallUse, size: "text-[2.69rem]" }].map((r) => (
          <div key={r.n} className="flex items-end justify-between gap-4 border-b border-dashed border-black/40 pb-3">
            <Wordmark className={`text-grey-950 ${r.size}`} />
            <span className={`flex shrink-0 items-center gap-2 ${label}`}>{r.t}<span className="flex size-10 items-center justify-center rounded-full border border-black/50">{r.n}</span></span>
          </div>
        ))}
      </div>
    </>
  );
}

export default async function Page() {
  const t = await getWordmarkText(await currentLang());
  const rail = [
    { id: "introduction", label: t.rail.introduction },
    { id: "clearspace", label: t.rail.clearspace },
    { id: "primary-color-usage", label: t.rail.color },
    { id: "sizing", label: t.rail.sizing },
    { id: "donts", label: t.rail.donts },
  ];
  return (
    <PageShell
      title={t.title}
      rail={rail}
      hero={
        <HeroFrame className="justify-center pt-20">
          <div className="flex flex-col items-center gap-16 lg:gap-[90px]">
            <h1 className="sr-only">{t.srTitle}</h1>
            <Wordmark className="text-[5rem] text-black lg:text-[7.7rem]" />
            <p className="t-h2 text-center text-grey-600">{t.title}</p>
          </div>
        </HeroFrame>
      }
      after={<ExploreAssets current="wordmark" />}
    >
      {/* Introduction */}
      <section id="introduction" className="scroll-mt-6 bg-white px-5 py-16 lg:p-[70px]">
        <div className="max-w-[780px] space-y-8 text-[2.5rem] leading-[48px] text-grey-950">
          <p>{t.intro.p1}</p>
          <p>{t.intro.p2}</p>
        </div>
        <div className="mt-8"><Button href={brand.downloads.wordmark} download>{t.intro.download}</Button></div>
      </section>

      {/* Overview */}
      <section className="flex flex-col gap-[60px] bg-pampas-100 px-5 py-16 lg:flex-row lg:items-stretch lg:p-[70px]">
        <div className="flex flex-1 flex-col justify-center gap-14 text-grey-950">
          <div className="space-y-4">
            <h2 className="t-section-lg">{t.overview.heading}</h2>
            <div className="max-w-[300px] space-y-5 text-base leading-6">
              <p>{t.overview.p1}</p>
              <p>{t.overview.p2}</p>
            </div>
          </div>
          <div className="space-y-2 font-[family-name:var(--font-secondary)] text-xs leading-4">
            <p className="font-medium">{t.overview.note}</p>
            <p>{t.overview.noteText}</p>
          </div>
        </div>
        {/* Figma: square logo frame as tall as the text column (480px), wordmark inset 9.4% each side. */}
        <div className="flex aspect-square items-center justify-center lg:w-[480px]">
          <Wordmark className="text-[4.5rem] text-black lg:text-[7.19rem]" />
        </div>
      </section>

      {/* Clearspace */}
      <section id="clearspace" className="scroll-mt-6 bg-pampas-100 px-4 pb-16 pt-4 lg:px-[30px] lg:pb-[70px] lg:pt-[30px]">
        <div className="flex flex-col gap-[60px] overflow-hidden rounded-3xl bg-pampas-700 p-8 text-white lg:p-[100px]">
          <div className="space-y-4 font-medium">
            <h2 className="text-[2.5rem] leading-[48px]">{t.clearspace.heading}</h2>
            <div className="max-w-[629px] space-y-5 text-xl leading-7">
              <p>{t.clearspace.p1}</p>
              <p>{t.clearspace.p2}</p>
            </div>
          </div>
          <ClearspaceDiagram />
        </div>
      </section>

      {/* Primary Color Usage + Minimum Sizing */}
      <section className="flex flex-col gap-24 bg-white px-5 py-20 lg:gap-[170px] lg:px-[70px] lg:py-[160px]">
        <div id="primary-color-usage" className="scroll-mt-6 space-y-[60px]">
          <div className="space-y-[30px]">
            <h2 className="t-section text-black">{t.color.heading}</h2>
            <div className="max-w-[747px] space-y-6 text-xl leading-7 text-grey-600">
              <p>{t.color.p1}</p>
              <p>{t.color.p2}</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { bg: "border border-grey-400", wm: "text-primary", label: t.color.cards[0], text: "text-black" },
              { bg: "bg-primary", wm: "text-white", label: t.color.cards[1], text: "text-black" },
            ].map((c) => (
              <div key={c.label} className={`flex h-[306px] flex-col gap-5 rounded-xl p-5 ${c.bg}`}>
                <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden"><Wordmark className={`text-[5rem] lg:text-[6.75rem] ${c.wm}`} /></div>
                <p className={`text-xl leading-7 ${c.text}`}>{c.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="sizing" className="scroll-mt-6 flex flex-col gap-16 overflow-hidden rounded-[var(--radius-card)] bg-pampas-100 p-8 lg:gap-[100px] lg:p-[100px]">
          <div className="space-y-10 text-grey-950">
            <div className="space-y-4">
              <h2 className="t-section font-medium">{t.sizing.heading}</h2>
              <p className="text-xl leading-7">{t.sizing.p1}</p>
              <p className="max-w-[800px] text-xl leading-7">{t.sizing.p2}</p>
            </div>
            <ol className="space-y-2 font-[family-name:var(--font-secondary)] text-xs font-bold leading-4">
              <li>{t.sizing.items[0]}</li>
              <li>{t.sizing.items[1]}</li>
            </ol>
            <div className="max-w-[330px] space-y-2 text-xs leading-4">
              <p className="font-medium">{t.sizing.note}</p>
              <p className="font-[family-name:var(--font-secondary)]">{t.sizing.noteText}</p>
            </div>
          </div>
          <SizingDiagram t={t.sizing} />
        </div>
      </section>

      <DontsSection id="donts" title={t.donts.heading} tiles={wordmarkDonts} captions={t.donts.captions} />
    </PageShell>
  );
}
