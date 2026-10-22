import type { Metadata } from "next";
import Image from "next/image";
import { brand } from "@/content/brand.config";
import { Wordmark } from "@/components/Logo";
import PageShell from "@/components/site/PageShell";
import { HeroFrame } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import { DontsSection, wordmarkDonts } from "@/components/brand/Donts";
import ClearspaceDiagram from "@/components/brand/ClearspaceDiagram";
import { Button } from "@/components/ui";

export const metadata: Metadata = { title: "Wordmark" };

const rail = [
  { id: "introduction", label: "Introduction" },
  { id: "clearspace", label: "Clearspace" },
  { id: "primary-color-usage", label: "Primary Color Usage" },
  { id: "sizing", label: "Sizing" },
  { id: "donts", label: "Wordmark Don’ts" },
];

const label = "font-[family-name:var(--font-secondary)] text-sm font-bold leading-5 text-grey-950";
const Num = ({ n, className }: { n: number; className: string }) => (
  <span className={`absolute flex size-10 items-center justify-center rounded-full border border-black/50 ${label} ${className}`}>{n}</span>
);
const Rule = ({ className }: { className: string }) => (
  <Image src="/brand/wordmark/dashed-line-749.svg" alt="" width={749} height={1} className={`absolute left-0 h-px w-[749px] max-w-none ${className}`} />
);

/** Figma minimum-sizing diagram (824 × 599): both wordmarks on dashed baselines, rulers and numbered labels on the right. */
function SizingDiagram() {
  return (
    <>
      {/* Desktop: positions straight from the design. */}
      <div className="relative hidden h-[599px] lg:block">
        <Image src="/brand/wordmark/ruler-standard.svg" alt="" width={8} height={426} className="absolute left-[732px] top-0 h-[426px] w-2" />
        <Image src="/brand/wordmark/ruler-small-use.svg" alt="" width={8} height={110} className="absolute left-[732px] top-[454.5px] h-[110px] w-2" />
        <Wordmark className="absolute left-0 top-[114.5px] text-[13.11rem] text-grey-950" />
        <Wordmark className="absolute left-0 top-[494px] text-[2.69rem] text-grey-950" />
        <p className={`absolute left-[760px] top-[213px] whitespace-nowrap ${label}`}>Standard</p>
        <p className={`absolute left-[760px] top-[500px] whitespace-nowrap ${label}`}>Small Use</p>
        <Num n={1} className="left-[765px] top-[419px]" />
        <Num n={2} className="left-[765px] top-[559px]" />
        <Rule className="top-[440px]" />
        <Rule className="top-[579px]" />
      </div>
      {/* Small screens: the same two samples stacked. */}
      <div className="space-y-8 lg:hidden">
        {[{ n: 1, t: "Standard", size: "text-[5rem]" }, { n: 2, t: "Small Use", size: "text-[2.69rem]" }].map((r) => (
          <div key={r.n} className="flex items-end justify-between gap-4 border-b border-dashed border-black/40 pb-3">
            <Wordmark className={`text-grey-950 ${r.size}`} />
            <span className={`flex shrink-0 items-center gap-2 ${label}`}>{r.t}<span className="flex size-10 items-center justify-center rounded-full border border-black/50">{r.n}</span></span>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Page() {
  return (
    <PageShell
      title="Wordmark"
      rail={rail}
      footerLabel="Download the assets"
      hero={
        <HeroFrame className="justify-center pt-20">
          <div className="flex flex-col items-center gap-16 lg:gap-[90px]">
            <h1 className="sr-only">{brand.name} Wordmark</h1>
            <Wordmark className="text-[5rem] text-black lg:text-[7.7rem]" />
            <p className="t-h2 text-center text-grey-600">Wordmark</p>
          </div>
        </HeroFrame>
      }
      after={<ExploreAssets except="wordmark" />}
    >
      {/* Introduction */}
      <section id="introduction" className="scroll-mt-6 bg-white px-5 py-16 lg:p-[70px]">
        <div className="max-w-[780px] space-y-8 text-[2.5rem] leading-[48px] text-grey-950">
          <p>Our wordmark is {brand.name}’s secondary logo, a custom piece of lettering that carries our name with confidence.</p>
          <p>It’s a distinct and ownable piece of the {brand.name} identity, made modern for today’s world.</p>
        </div>
        <div className="mt-8"><Button href={brand.downloads.all} download>Download the assets</Button></div>
      </section>

      {/* Overview */}
      <section className="flex flex-col gap-[60px] bg-pampas-100 px-5 py-16 lg:flex-row lg:items-stretch lg:p-[70px]">
        <div className="flex flex-1 flex-col justify-center gap-14 text-grey-950">
          <div className="space-y-4">
            <h2 className="t-section-lg">Overview</h2>
            <div className="max-w-[300px] space-y-5 text-base leading-6">
              <p>While our Spark can be used as a standalone logo, our wordmark can’t be used without our Spark present in the same application. In layouts with limited space, like an extremely narrow banner ad, we don’t need to include the wordmark.</p>
              <p>Our wordmark is a custom piece of artwork, not just the word “{brand.name}” typed in a font. Use it as shown here; never alter or recreate it.</p>
            </div>
          </div>
          <div className="space-y-2 font-[family-name:var(--font-secondary)] text-xs leading-4">
            <p className="font-medium">Note</p>
            <p>PLACEHOLDER — note which weight of {brand.fontName} the wordmark is drawn to match.</p>
          </div>
        </div>
        {/* Figma: square logo frame as tall as the text column (480px), wordmark inset 9.4% each side. */}
        <div className="flex aspect-square items-center justify-center lg:w-[480px]">
          <Wordmark className="text-[4.5rem] text-black lg:text-[7.19rem]" />
        </div>
      </section>

      {/* Clearspace */}
      <section id="clearspace" className="scroll-mt-6 bg-pampas-100 px-4 pb-16 pt-4 lg:px-[30px] lg:pb-[70px] lg:pt-[30px]">
        <div className="flex flex-col gap-[60px] overflow-hidden rounded-3xl bg-pampas-600 p-8 text-white lg:p-[100px]">
          <div className="space-y-4 font-medium">
            <h2 className="text-[2.5rem] leading-[48px]">Clearspace</h2>
            <div className="max-w-[629px] space-y-5 text-xl leading-7">
              <p>The clearspace of our wordmark is equal to half the height of the letter “R”.</p>
              <p>This space helps maintain legibility and impact, and keeps it clear of any visual clutter.</p>
            </div>
          </div>
          <ClearspaceDiagram />
        </div>
      </section>

      {/* Primary Color Usage + Minimum Sizing */}
      <section className="flex flex-col gap-24 bg-white px-5 py-20 lg:gap-[170px] lg:px-[70px] lg:py-[160px]">
        <div id="primary-color-usage" className="scroll-mt-6 space-y-[60px]">
          <div className="space-y-[30px]">
            <h2 className="t-section text-black">Primary Color Usage</h2>
            <div className="max-w-[747px] space-y-6 text-xl leading-7 text-grey-600">
              <p>Our wordmark primarily appears in Pampas on White backgrounds, or in White on Pampas backgrounds.</p>
              <p>These are our most iconic colorways and should be used wherever possible.</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {[
              { bg: "border border-grey-400", wm: "text-primary", label: "Pampas on White", text: "text-black" },
              { bg: "bg-primary", wm: "text-white", label: "White on Pampas", text: "text-white" },
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
              <h2 className="t-section font-medium">Minimum Sizing</h2>
              <p className="text-xl leading-7">Our wordmark exists in two sizes at different scales. Our standard wordmark is the default version and should be used most.</p>
              <p className="max-w-[800px] text-xl leading-7">Our small-use wordmark is a unique piece of art that has been optimized for legibility and fidelity at small scales. They’re not interchangeable. Don’t substitute it for the main wordmark. It should always be used with great care. If in doubt, go the standard wordmark route!</p>
            </div>
            <ol className="space-y-2 font-[family-name:var(--font-secondary)] text-xs font-bold leading-4">
              <li>1. Standard Minimum Size 0.25 inch or 24px</li>
              <li>2. Small-Use Minimum Size 0.15 inch or 14px</li>
            </ol>
            <div className="max-w-[330px] space-y-2 text-xs leading-4">
              <p className="font-medium">Note</p>
              <p className="font-[family-name:var(--font-secondary)]">Wordmarks here are not shown to scale. Refer to pixel and inch measurements for proper sizing.</p>
            </div>
          </div>
          <SizingDiagram />
        </div>
      </section>

      <DontsSection id="donts" title="Wordmark Don’ts" tiles={wordmarkDonts} />
    </PageShell>
  );
}
