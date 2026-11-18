import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { currentLang } from "@/lib/i18n/server";
import { getFoundationText, getShell } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import Rich from "@/components/i18n/Rich";
import PageShell from "@/components/site/PageShell";
import { RowHero } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import Photo from "@/components/ui/Photo";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await currentLang();
  return { title: (await getFoundationText(lang)).title, alternates: alternatesFor(lang, "/brand-foundation") };
}

const heroImages: { src: string; crop?: CSSProperties }[] = [
  { src: "hero-1.png" },
  { src: "hero-2.png", crop: { height: "230.55%", left: "-2.17%", top: "-47.65%", width: "103.35%" } },
  { src: "hero-3.png" },
  { src: "hero-4.png" },
];

/** Pictures for the three principles, in the same order as the text in the language files. */
const principleImages: { src: string; crop?: CSSProperties }[] = [
  { src: "principle-grassroots.png" },
  { src: "principle-agile.png" },
  { src: "principle-pioneering.png", crop: { height: "188.39%", left: "-12.95%", top: "-44.2%", width: "125.91%" } },
];

const sg = "font-[family-name:var(--font-secondary)]";

export default async function Page() {
  const lang = await currentLang();
  const [t, shell] = await Promise.all([getFoundationText(lang), getShell(lang)]);
  const [l1, l2] = shell.brand.taglineLines;
  const rail = [
    { group: t.rail.group, id: "brand-foundation", items: [{ id: "brand-purpose", label: t.rail.purpose }, { id: "company-positioning", label: t.rail.positioning }] },
    { id: "brand-principles", label: t.rail.principles },
    { id: "cheat-sheet", label: t.rail.cheatSheet },
  ];
  return (
    <PageShell
      title={t.title}
      rail={rail}
      hero={
        <RowHero title={t.title}>
          {/* Endless strip: four copies of the set, so the track fills ultra-wide screens and -50% lands on an identical frame.
              Always left to right: the pictures have no direction and the loop must move the same way in every language. */}
          <div aria-hidden dir="ltr" className="-mx-5 min-w-0 flex-1 overflow-hidden lg:-mx-[120px]">
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
        <h2 className="t-section text-black">{t.title}</h2>
        <p className="t-intro max-w-[836px]">{t.intro}</p>
      </section>

      <section id="brand-purpose" className={`scroll-mt-6 space-y-[50px] bg-pampas-700 px-5 py-16 text-white lg:p-[70px] ${sg}`}>
        <div className="text-[1.75rem] leading-9 lg:text-[2.5rem] lg:leading-[48px]">
          <h2 className="font-medium">{t.purpose.heading}</h2>
          <p className="font-light">{t.purpose.subtitle}</p>
        </div>
        <p className="text-[3rem] font-light leading-[1.11] lg:text-[4.5rem]"><span className="block">{l1}</span><span className="block text-pampas-950">{l2}</span></p>
        <div className="max-w-[510px] space-y-4 font-[family-name:var(--font-body)] text-xl leading-7">
          <p>{t.purpose.p1}</p>
          <p>{t.purpose.p2}</p>
        </div>
      </section>

      <section id="company-positioning" className={`scroll-mt-6 space-y-[50px] bg-pampas-100 px-5 py-16 lg:p-[70px] ${sg}`}>
        <h2 className="text-[1.75rem] font-medium leading-9 text-pampas-950 lg:text-[2.5rem] lg:leading-[48px]">{t.positioning.heading}</h2>
        <p className="max-w-[900px] text-[2.75rem] font-light leading-[1.11] text-grey-600 lg:text-[4.5rem]">
          <Rich text={t.positioning.lead} boldClassName="font-normal text-black" />
        </p>
      </section>

      <section id="brand-principles" className="scroll-mt-6 flex flex-col gap-20 bg-white px-5 py-20 lg:px-[70px]">
        <div className="flex flex-col gap-[30px]">
          {t.principles.map((p, i) => (
            <div key={i} className={`flex flex-col items-center justify-center gap-8 lg:gap-[90px] ${i % 2 ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
              <div className="relative aspect-square w-full max-w-[440px] shrink-0 overflow-hidden rounded-[30px]">
                <Photo src={`foundation/${principleImages[i].src}`} crop={principleImages[i].crop} sizes="440px" />
              </div>
              <div className="w-full max-w-[400px] space-y-3 text-black">
                <h3 className="text-[2.5rem] font-light leading-[48px]">{p.title}</h3>
                <p className="text-2xl leading-8">{p.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="cheat-sheet" className="scroll-mt-6 flex flex-col gap-10 rounded-[32px] bg-pampas-100 px-5 py-[60px] lg:px-[50px]">
          <h2 className="text-[2rem] font-medium leading-10 text-grey-950">{t.cheat.title[0]}<br />{t.cheat.title[1]}</h2>
          <div className="flex flex-col gap-8 text-center">
            <div className="space-y-6">
              <div className="space-y-0.5">
                <p className="text-lg font-medium leading-6 text-grey-950">{t.purpose.heading}</p>
                <p className={`text-xs leading-4 text-grey-700 ${sg}`}>{t.cheat.purposeNote}</p>
              </div>
              <p className="rounded-[20px] bg-primary p-6 text-[1.75rem] leading-9 text-white lg:text-[2.5rem] lg:leading-[48px]">{l1} {l2}</p>
            </div>
            <div className="space-y-6">
              <p className="text-lg font-medium leading-6 text-grey-950">{t.positioning.heading}</p>
              <p className={`rounded-[20px] bg-white p-6 text-lg leading-6 text-pampas-800 ${sg}`}><Rich text={t.positioning.lead.replace(/<\/?b>/g, "")} /></p>
            </div>
            <div className="space-y-6">
              <div className="space-y-0.5">
                <p className="text-lg font-medium leading-6 text-grey-950">{t.rail.principles}</p>
                <p className={`text-xs leading-4 text-grey-700 ${sg}`}>{t.cheat.principlesNote}</p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                {t.principles.map((p, i) => (
                  <div key={i} className={`overflow-hidden rounded-[20px] ${sg}`}>
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
