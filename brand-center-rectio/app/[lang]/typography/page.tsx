import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import { currentLang } from "@/lib/i18n/server";
import { getTypographyText } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import TypesettingNotes from "@/components/typography/TypesettingNotes";
import CampaignCarousel from "@/components/typography/CampaignCarousel";
import { CapitalizationExamples, LeadingFormula, LeadingTable, LengthTile, PaddingDiagram } from "@/components/typography/Diagrams";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await currentLang();
  return { title: (await getTypographyText(lang)).title, alternates: alternatesFor(lang, "/typography") };
}

const families = [
  {
    name: "Geist",
    cls: "",
    info: "lg:w-[465px]",
    row: "lg:h-[368px] lg:items-end",
    weights: [["Thin", "font-thin"], ["Extra Light", "font-extralight"], ["Light", "font-light"], ["Regular", "font-normal"], ["Medium", "font-medium"], ["SemiBold", "font-semibold"], ["Bold", "font-bold"], ["ExtraBold", "font-extrabold"], ["Black", "font-black"]],
  },
  {
    name: "Space Grotesk",
    cls: "font-[family-name:var(--font-secondary)]",
    info: "lg:w-[609px]",
    row: "lg:items-start",
    weights: [["Light", "font-light"], ["Regular", "font-normal"], ["Medium", "font-medium"], ["Bold", "font-bold"]],
  },
];

const approved = ["bg-pampas-600 text-white", "bg-grey-600 text-white", "border border-grey-300 bg-white text-grey-950", "bg-black text-white"];

const roleStyles = ["flex-1 text-[2rem] font-light leading-10 lg:text-5xl lg:leading-[48px]", "max-w-[261px] text-2xl font-semibold leading-8", "flex-1 text-base leading-6"];

const sample = "For best legibility, lines of text shouldn’t be too long or short. Headlines should have between 4 and 15 characters per line, and paragraphs should have between 40 and 70 characters per line. For best legibility, lines of text shouldn’t be too long or short. Headlines should have between 4 and 15 characters per line, and paragraphs should have between 40 and 70 characters per line.";
const small = "text-[8.039px] leading-[11.484px]";

/** White band with a Space Grotesk 48px title and 40px light lead (Figma "Card": Introduction, Typesetting). */
function LeadSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-6 space-y-[60px] bg-white px-5 py-20 lg:px-[70px] lg:py-[140px]">
      <h2 className="t-section text-black">{title}</h2>
      <div className="max-w-[863px] space-y-12 text-[1.75rem] font-light leading-9 text-grey-600 lg:text-[2.5rem] lg:leading-[48px]">{children}</div>
    </section>
  );
}

/** 32px medium heading used by the Typesetting sub-sections. */
function H({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[2rem] font-medium leading-10 text-grey-950">{children}</h2>;
}

function Note({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1 text-grey-950">
      <p className="font-[family-name:var(--font-secondary)] text-base font-medium leading-6">{label}</p>
      <p className="text-sm leading-5">{children}</p>
    </div>
  );
}

export default async function Page() {
  const t = await getTypographyText(await currentLang());
  const [l1, l2] = brand.taglineLines;
  /* Figma rail groups: Geist (Introduction, Weights) and Typesetting (Notes … Campaign Headlines).
     SideRail only takes a flat list, so the "Typesetting" group heading links to its intro section. */
  const rail = [
    { group: brand.fontName, items: [{ id: "introduction", label: t.rail.introduction }, { id: "weights", label: t.rail.weights }] },
    {
      group: t.rail.typesetting,
      id: "typesetting",
      items: [
        { id: "typesetting-notes", label: t.rail.notes },
        { id: "standard-color", label: t.rail.color },
        { id: "padding", label: t.rail.padding },
        { id: "leading", label: t.rail.leading },
        { id: "capitalization", label: t.rail.capitalization },
        { id: "line-lengths", label: t.rail.lineLengths },
        { id: "campaign-headlines", label: t.rail.campaign },
      ],
    },
  ];
  return (
    <PageShell
      title={t.title}
      rail={rail}
      hero={
        <PageHero title={t.title}>
          {/* Endless strip: two copies of the alphabet, so -50% lands on an identical frame. Slower than the default because the set is long. */}
          <div aria-hidden dir="ltr" className="-mx-5 overflow-hidden lg:-mx-[120px]">
            <div className="marquee-track flex w-max [--marquee-duration:180s]">
              {[0, 1].map((n) => <p key={n} className="whitespace-pre text-[clamp(3rem,18vw,16.2rem)] font-light leading-[1.15] text-black/80">{"Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz "}</p>)}
            </div>
          </div>
        </PageHero>
      }
      after={<ExploreAssets current="type" />}
    >
      {/* Geist — Introduction */}
      <LeadSection id="introduction" title="Geist">
        <p>{t.intro.p1}</p>
        <p>{t.intro.p2}</p>
      </LeadSection>

      {/* Weights */}
      <section id="weights" className="scroll-mt-6 flex flex-col gap-20 bg-pampas-100 px-5 py-16 lg:p-[70px]">
        <div className="@container space-y-8 text-grey-950">
          <p className="font-[family-name:var(--font-secondary)] text-[min(9.125rem,13.9cqw)] font-light leading-[1.2055]">{l1}<br />{l2}</p>
          <div className="max-w-[1024px] space-y-4">
            <h2 className="text-[2rem] font-medium leading-10">{t.system.heading}</h2>
            <div className="max-w-[536px] space-y-5 text-xl leading-7">
              <p>{t.system.p1}</p>
              <p>{t.system.p2}</p>
            </div>
          </div>
        </div>
        {families.map((f, fi) => (
          <div key={f.name} className="space-y-6">
            <p className="text-2xl font-medium leading-8 text-grey-500">{t.system.families[fi].label}</p>
            <div className={`flex flex-col gap-10 xl:flex-row xl:justify-between ${f.row}`}>
              <div className={`space-y-3 ${f.info}`}>
                <p dir="ltr" className={`text-[4rem] leading-[1.2] text-grey-950 lg:text-[6.25rem] ${f.cls}`}>{f.name}</p>
                <p className="text-base font-medium leading-6 text-grey-600">{t.system.families[fi].text}</p>
              </div>
              <ul dir="ltr" lang="en" className={`space-y-2 text-2xl leading-8 text-grey-600 xl:w-[272px] xl:shrink-0 ${f.cls}`}>
                {f.weights.map(([w, c]) => <li key={w} className={c}>{w}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Typesetting */}
      <LeadSection id="typesetting" title={t.typesetting.heading}>
        <p>{t.typesetting.p1}</p>
        <p>{t.typesetting.p2}</p>
      </LeadSection>

      {/* Typesetting Notes */}
      <section id="typesetting-notes" className="scroll-mt-6 bg-pampas-100 px-5 py-16 lg:p-[70px]">
        <TypesettingNotes t={t.notes} />
      </section>

      {/* Standard Color */}
      <section id="standard-color" className="scroll-mt-6 flex flex-col gap-[60px] bg-white px-5 py-20 min-[1400px]:flex-row min-[1400px]:items-center lg:px-[70px] lg:py-[140px]">
        <div className="space-y-4 text-grey-950 min-[1400px]:w-[486px] min-[1400px]:shrink-0">
          <H>{t.color.heading}</H>
          <div className="space-y-7 text-xl leading-7">
            <p>{t.color.p1}</p>
            <p>{t.color.p2}</p>
          </div>
          <div className="grid w-[294px] grid-cols-2 gap-4">
            {approved.map((c, ai) => (
              <span dir="ltr" lang="en" key={c} title={t.color.approved[ai]} className={`flex h-[100px] items-center justify-center rounded-[20px] font-[family-name:var(--font-secondary)] text-[3.347rem] font-light leading-none ${c}`}>Aa</span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-10 rounded-3xl border border-black/60 bg-white p-6 sm:p-8">
          {t.color.roles.map((r, ri) => (
            <div key={ri} className="flex flex-col gap-3 sm:flex-row sm:gap-7">
              <div className="w-[85px] shrink-0 space-y-1">
                <p className="font-[family-name:var(--font-secondary)] text-base font-medium leading-6 text-grey-600">{r.label}</p>
                <span className="block size-3 rounded-full bg-[#d9d9d9]" />
              </div>
              <p className={`text-grey-950 ${roleStyles[ri]}`}>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Padding */}
      <section id="padding" className="scroll-mt-6 flex flex-col gap-[60px] bg-white px-5 py-20 lg:px-[70px] lg:py-[140px] xl:flex-row">
        <div className="space-y-6 text-grey-950 xl:w-[463px] xl:shrink-0">
          <div className="space-y-4">
            <H>{t.padding.heading}</H>
            <div className="space-y-6 text-lg leading-6">
              <p>{t.padding.p1}</p>
              <p>{t.padding.p2}</p>
            </div>
          </div>
          <Note label={t.padding.note}>{t.padding.noteText}</Note>
        </div>
        <div className="min-w-0 flex-1"><PaddingDiagram /></div>
      </section>

      {/* Leading */}
      <section id="leading" className="scroll-mt-6 flex flex-col gap-[60px] bg-pampas-100 px-5 py-16 lg:p-[70px] xl:flex-row">
        <div className="space-y-6 xl:w-[463px] xl:shrink-0">
          <div className="space-y-4 text-grey-950">
            <H>{t.leading.heading}</H>
            <p className="text-lg leading-6">{t.leading.text}</p>
          </div>
          <ol className="space-y-1 font-[family-name:var(--font-secondary)] text-xs leading-4 text-grey-600">
            {t.leading.items.map((it) => <li key={it.label}><span className="font-medium text-grey-950">{it.label}</span> {it.text}</li>)}
          </ol>
          <LeadingTable t={t.leading.table} />
        </div>
        <div className="flex min-w-0 flex-1 justify-center overflow-hidden px-[9px] xl:py-7">
          <LeadingFormula t={t.leading.formula} />
        </div>
      </section>

      {/* Capitalization */}
      <section id="capitalization" className="scroll-mt-6 flex flex-col gap-[60px] bg-white px-5 py-20 min-[1400px]:flex-row lg:px-[70px] lg:py-[140px]">
        <div className="space-y-10 text-grey-950 lg:w-[363px] lg:shrink-0">
          <H>{t.capitalization.heading}</H>
          <div className="space-y-3 text-sm leading-5">
            <p>{t.capitalization.p1}</p>
            <p>{t.capitalization.p2}</p>
          </div>
        </div>
        <CapitalizationExamples t={t.capitalization} doAlt={t.do} dontAlt={t.dont} />
      </section>

      {/* Line Lengths */}
      <section id="line-lengths" className="scroll-mt-6 space-y-10 bg-white px-5 py-16 lg:p-[70px]">
        <div className="max-w-[540px] space-y-10 text-grey-950">
          <H>{t.lineLengths.heading}</H>
          <div className="space-y-3 text-sm leading-5">
            <p>{t.lineLengths.p1}</p>
            <p>{t.lineLengths.p2}</p>
          </div>
        </div>
        <div className="grid gap-x-6 gap-y-[30px] sm:grid-cols-2 xl:grid-cols-3">
          <LengthTile ok={false} alt={t.dont} caption={t.lineLengths.tooShort}>
            <p className="text-[min(2.457rem,12.1cqw)] leading-[1.25]">Make<br />it<br />simple.<br />Make<br />it yours.</p>
          </LengthTile>
          <LengthTile ok alt={t.do} caption={t.lineLengths.ok1}>
            <p className="whitespace-nowrap text-[min(2.457rem,12.1cqw)] leading-[1.25]">{l1}<br />{l2}</p>
          </LengthTile>
          <LengthTile ok={false} alt={t.dont} caption={t.lineLengths.tooLong}>
            <p className="whitespace-nowrap text-[min(1.1875rem,5.85cqw)] font-semibold leading-9">{brand.tagline}</p>
          </LengthTile>
          <LengthTile ok={false} alt={t.dont} caption={t.lineLengths.tooShort}>
            <div className={`flex gap-[11px] ${small}`}>{[0, 1, 2].map((k) => <p key={k} className="w-[min(89px,27.4cqw)]">{sample}</p>)}</div>
          </LengthTile>
          <LengthTile ok alt={t.do} caption={t.lineLengths.ok2}>
            <div className={`flex w-[min(289px,89cqw)] gap-[11px] ${small}`}>{[0, 1].map((k) => <p key={k} className="min-w-0 flex-1">{sample}</p>)}</div>
          </LengthTile>
          <LengthTile ok={false} alt={t.dont} caption={t.lineLengths.tooLong}>
            <p className={`w-[min(289px,89cqw)] ${small}`}>{sample}</p>
          </LengthTile>
        </div>
      </section>

      {/* Campaign Headlines */}
      <section id="campaign-headlines" className="scroll-mt-6 flex flex-col items-center gap-12 bg-white px-5 py-20 lg:flex-row lg:justify-between lg:px-[70px] lg:py-[140px]">
        <div className="w-full space-y-10 lg:w-[363px] lg:shrink-0">
          <H>{t.campaign.heading}</H>
          <div className="space-y-5 text-sm leading-5">
            <p className="text-grey-950">{t.campaign.text}</p>
            <div className="space-y-0.5">
              <p dir="ltr" className="font-semibold text-pampas-800 text-start">{brand.contactTeam}</p>
              <a dir="ltr" href={`mailto:${brand.contactEmail}`} className="text-grey-500 hover:text-grey-700">{brand.contactEmail}</a>
            </div>
          </div>
        </div>
        <CampaignCarousel t={t.campaign} />
      </section>
    </PageShell>
  );
}
