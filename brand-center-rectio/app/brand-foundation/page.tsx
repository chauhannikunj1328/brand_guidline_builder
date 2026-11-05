import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import { RowHero } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import Photo from "@/components/ui/Photo";

export const metadata: Metadata = { title: "Brand Foundation" };

const rail = [
  { group: "Brand Foundation", id: "brand-foundation", items: [{ id: "brand-purpose", label: "Brand Purpose" }, { id: "company-positioning", label: "Company Positioning" }] },
  { id: "brand-principles", label: "Brand Principles" },
  { id: "cheat-sheet", label: "Cheat Sheet" },
];

const heroImages: { src: string; crop?: CSSProperties }[] = [
  { src: "hero-1.png" },
  { src: "hero-2.png", crop: { height: "230.55%", left: "-2.17%", top: "-47.65%", width: "103.35%" } },
  { src: "hero-3.png" },
  { src: "hero-4.png" },
];

const principles: { title: string; text: string; short: string; src: string; crop?: CSSProperties }[] = [
  { title: "Grassroots", src: "principle-grassroots.png", text: "We never forget our humble beginnings; we’re relatable, down-to-earth, and part of the community.", short: "We never forget our humble beginnings; we’re relatable, down-to-earth and part of the community." },
  { title: "Agile", src: "principle-agile.png", text: "Agility is our x-factor. We are constantly improving, endlessly testing, always adapting.", short: "Agility is our x-factor. We are constantly improving, endlessly testing, always adapting." },
  { title: "Pioneering", src: "principle-pioneering.png", crop: { height: "188.39%", left: "-12.95%", top: "-44.2%", width: "125.91%" }, text: "Since the beginning, we’ve blazed a path and never settled, because that’s what it takes to make life better and easier.", short: "Since the beginning, we’ve blazed a path and never settled because that’s what it takes to make life better and easier." },
];

const sg = "font-[family-name:var(--font-secondary)]";

export default function Page() {
  const [l1, l2] = brand.taglineLines;
  return (
    <PageShell
      title="Brand Foundation"
      rail={rail}
      hero={
        <RowHero title="Brand Foundation">
          {/* Endless strip: four copies of the set, so the track fills ultra-wide screens and -50% lands on an identical frame. */}
          <div aria-hidden className="-mx-5 min-w-0 flex-1 overflow-hidden lg:-mx-[120px]">
            <div className="marquee-track flex w-max">
              {[0, 1, 2, 3].map((n) => heroImages.map((h) => (
                <div key={`${n}-${h.src}`} className="relative mr-4 h-[220px] w-[330px] shrink-0 overflow-hidden lg:h-[340px] lg:w-[507px]">
                  <Photo src={`foundation/${h.src}`} crop={h.crop} sizes="507px" />
                </div>
              )))}
            </div>
          </div>
        </RowHero>
      }
      after={<ExploreAssets current="foundation" />}
    >
      <section id="brand-foundation" className="scroll-mt-6 space-y-[60px] bg-white px-5 pb-20 pt-24 lg:px-[70px] lg:pt-[140px]">
        <h2 className="t-section text-black">Brand Foundation</h2>
        <p className="t-intro max-w-[836px]">This section is the bedrock of our brand, outlining our purpose, positioning, and principles. It guides us in all the ways {brand.name} comes to life: how we look, what we stand for, and how we act in the world.</p>
      </section>

      <section id="brand-purpose" className={`scroll-mt-6 space-y-[50px] bg-primary px-5 py-16 text-white lg:p-[70px] ${sg}`}>
        <div className="text-[1.75rem] leading-9 lg:text-[2.5rem] lg:leading-[48px]">
          <h2 className="font-medium">Brand Purpose</h2>
          <p className="font-light">Guides the enterprise</p>
        </div>
        <p className="text-[3rem] font-light leading-[1.11] lg:text-[4.5rem]"><span className="block">{l1}</span><span className="block text-pampas-950">{l2}</span></p>
        <div className="max-w-[510px] space-y-4 font-[family-name:var(--font-body)] text-xl leading-7">
          <p>Our brand purpose comes from a simple belief: the things people rely on every day should be easy to use and easy to make their own.</p>
          <p>This purpose guides our daily actions and behaviors to best serve our customers, associates, and communities. It is the driving force behind everything we do.</p>
        </div>
      </section>

      <section id="company-positioning" className={`scroll-mt-6 space-y-[50px] bg-pampas-100 px-5 py-16 lg:p-[70px] ${sg}`}>
        <h2 className="text-[1.75rem] font-medium leading-9 text-pampas-950 lg:text-[2.5rem] lg:leading-[48px]">Company Positioning</h2>
        <p className="max-w-[900px] text-[2.75rem] font-light leading-[1.11] text-grey-600 lg:text-[4.5rem]">
          We are a <strong className="font-normal text-black">people-led, tech-powered,</strong> company dedicated to helping people <strong className="font-normal text-black">make it simple and make it yours.</strong>
        </p>
      </section>

      <section id="brand-principles" className="scroll-mt-6 flex flex-col gap-20 bg-white px-5 py-20 lg:px-[70px]">
        <div className="flex flex-col gap-[30px]">
          {principles.map((p, i) => (
            <div key={p.title} className={`flex flex-col items-center justify-center gap-8 lg:gap-[90px] ${i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
              <div className="relative aspect-square w-full max-w-[440px] shrink-0 overflow-hidden rounded-[30px]">
                <Photo src={`foundation/${p.src}`} crop={p.crop} sizes="440px" />
              </div>
              <div className="w-full max-w-[400px] space-y-3 text-black">
                <h3 className="text-[2.5rem] font-light leading-[48px]">{p.title}</h3>
                <p className="text-2xl leading-8">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="cheat-sheet" className="scroll-mt-6 flex flex-col gap-10 rounded-[32px] bg-pampas-100 px-5 py-[60px] lg:px-[50px]">
          <h2 className="text-[2rem] font-medium leading-10 text-grey-950">Brand Foundation<br />Cheat Sheet</h2>
          <div className="flex flex-col gap-8 text-center">
            <div className="space-y-6">
              <div className="space-y-0.5">
                <p className="text-lg font-medium leading-6 text-grey-950">Brand Purpose</p>
                <p className={`text-xs leading-4 text-grey-700 ${sg}`}>Guides the enterprise.</p>
              </div>
              <p className="rounded-[20px] bg-primary p-6 text-[1.75rem] leading-9 text-white lg:text-[2.5rem] lg:leading-[48px]">{brand.tagline}</p>
            </div>
            <div className="space-y-6">
              <p className="text-lg font-medium leading-6 text-grey-950">Company Positioning</p>
              <p className={`rounded-[20px] bg-white p-6 text-lg leading-6 text-pampas-800 ${sg}`}>We are a people-led, tech-powered, company<br className="hidden lg:block" /> dedicated to helping people make it simple and make it yours.</p>
            </div>
            <div className="space-y-6">
              <div className="space-y-0.5">
                <p className="text-lg font-medium leading-6 text-grey-950">Brand Principles</p>
                <p className={`text-xs leading-4 text-grey-700 ${sg}`}>Guide our brand expression.</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {principles.map((p) => (
                  <div key={p.title} className={`overflow-hidden rounded-[20px] ${sg}`}>
                    <p className="bg-pampas-200 py-2 text-base leading-6 text-grey-950">{p.title}</p>
                    <p className="h-full bg-white px-3.5 py-3 text-xs leading-4 text-grey-700">{p.short}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
