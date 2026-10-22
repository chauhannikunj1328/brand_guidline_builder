import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import TypesettingNotes from "@/components/typography/TypesettingNotes";
import CampaignCarousel from "@/components/typography/CampaignCarousel";
import { CapitalizationExamples, LeadingFormula, LeadingTable, LengthTile, PaddingDiagram } from "@/components/typography/Diagrams";

export const metadata: Metadata = { title: "Typography" };

/* Figma rail groups — Geist: Introduction, Weights · Typesetting: Notes … Campaign Headlines.
   SideRail only takes a flat list, so the "Typesetting" group heading links to its intro section. */
const rail = [
  { group: brand.fontName, items: [{ id: "introduction", label: "Introduction" }, { id: "weights", label: "Weights" }] },
  {
    group: "Typesetting",
    id: "typesetting",
    items: [
      { id: "typesetting-notes", label: "Typesetting Notes" },
      { id: "standard-color", label: "Standard Color" },
      { id: "padding", label: "Padding" },
      { id: "leading", label: "Leading" },
      { id: "capitalization", label: "Capitalization" },
      { id: "line-lengths", label: "Line Lengths" },
      { id: "campaign-headlines", label: "Campaign Headlines" },
    ],
  },
];

const families = [
  {
    label: "Primary Font Family",
    name: "Geist",
    cls: "",
    info: "lg:w-[465px]",
    row: "lg:h-[368px] lg:items-end",
    text: `Geist is a modern, neutral sans-serif typeface designed for clarity and readability across digital interfaces. Its clean forms, balanced proportions, and broad range of weights give ${brand.name} a precise, contemporary, and highly adaptable typographic system.`,
    weights: [["Thin", "font-thin"], ["Extra Light", "font-extralight"], ["Light", "font-light"], ["Regular", "font-normal"], ["Medium", "font-medium"], ["SemiBold", "font-semibold"], ["Bold", "font-bold"], ["ExtraBold", "font-extrabold"], ["Black", "font-black"]],
  },
  {
    label: "Secondary Font Family",
    name: "Space Grotesk",
    cls: "font-[family-name:var(--font-secondary)]",
    info: "lg:w-[609px]",
    row: "lg:items-start",
    text: "Space Grotesk is a geometric sans-serif designed for clarity with a distinctive character. Its open forms and balanced proportions make it ideal for supporting headlines, highlights, and expressive brand communication.",
    weights: [["Light", "font-light"], ["Regular", "font-normal"], ["Medium", "font-medium"], ["Bold", "font-bold"]],
  },
];

const approved = [
  ["bg-pampas-600 text-white", "White on Pampas 600"],
  ["bg-grey-600 text-white", "White on Grey 600"],
  ["border border-grey-300 bg-white text-grey-950", "Black on White"],
  ["bg-black text-white", "White on Black"],
];

const roles = [
  { label: "Headline", text: "On light backgrounds, set all text in Black.", cls: "flex-1 text-[2rem] font-light leading-10 lg:text-5xl lg:leading-[48px]" },
  { label: "Subhead", text: "Limit yourself to one text color per layout.", cls: "max-w-[261px] text-2xl font-semibold leading-8" },
  { label: "Body Copy", text: "Color use should match across headline, subheads, and body copy to help keep our layouts streamlined and clean.", cls: "flex-1 text-base leading-6" },
];

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

function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-1 text-grey-950">
      <p className="font-[family-name:var(--font-secondary)] text-base font-medium leading-6">Note</p>
      <p className="text-sm leading-5">{children}</p>
    </div>
  );
}

export default function Page() {
  const [l1, l2] = brand.taglineLines;
  return (
    <PageShell
      title="Typography"
      rail={rail}
      footerLabel="Download the assets"
      hero={
        <PageHero title="Typography">
          <div className="flex justify-center lg:-mx-[120px]"><p aria-hidden className="whitespace-nowrap text-[clamp(3rem,18vw,16.2rem)] font-light leading-[1.15] text-black/80">AaBbCcEeFf</p></div>
        </PageHero>
      }
      after={<ExploreAssets except="type" />}
    >
      {/* Geist — Introduction */}
      <LeadSection id="introduction" title="Geist">
        <p>Geist is our primary typeface, chosen for its clarity and the quiet confidence it brings to everything {brand.name} says.</p>
        <p>It includes a wide range of weights and styles to maximize the function and flexibility of our system.</p>
      </LeadSection>

      {/* Weights */}
      <section id="weights" className="scroll-mt-6 flex flex-col gap-20 bg-pampas-100 px-5 py-16 lg:p-[70px]">
        <div className="@container space-y-8 text-grey-950">
          <p className="font-[family-name:var(--font-secondary)] text-[min(9.125rem,13.9cqw)] font-light leading-[1.2055]">{l1}<br />{l2}</p>
          <div className="max-w-[1024px] space-y-4">
            <h2 className="text-[2rem] font-medium leading-10">Our type system</h2>
            <div className="max-w-[536px] space-y-5 text-xl leading-7">
              <p>Geist and Space Grotesk are open-source typefaces chosen for {brand.name}. Utilitarian yet characterful, together they balance expression with function across all brand expressions.</p>
              <p>Their shapes are sleek and modern while retaining some unique quirks and characteristics:</p>
            </div>
          </div>
        </div>
        {families.map((f) => (
          <div key={f.name} className="space-y-6">
            <p className="text-2xl font-medium leading-8 text-grey-500">{f.label}</p>
            <div className={`flex flex-col gap-10 lg:flex-row lg:justify-between ${f.row}`}>
              <div className={`space-y-3 ${f.info}`}>
                <p className={`text-[4rem] leading-[1.2] text-grey-950 lg:text-[6.25rem] ${f.cls}`}>{f.name}</p>
                <p className={`text-base font-medium leading-6 text-grey-600 ${f.cls}`}>{f.text}</p>
              </div>
              <ul className={`space-y-2 text-2xl leading-8 text-grey-600 lg:w-[272px] lg:shrink-0 ${f.cls}`}>
                {f.weights.map(([w, c]) => <li key={w} className={c}>{w}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </section>

      {/* Typesetting */}
      <LeadSection id="typesetting" title="Typesetting">
        <p>Typesetting is the process of selecting and arranging our fonts with consistent sizing, spacing, and alignment principles.</p>
        <p>This section outlines our standard typographic hierarchy and demonstrates use cases for each member of our font family.</p>
      </LeadSection>

      {/* Typesetting Notes */}
      <section id="typesetting-notes" className="scroll-mt-6 bg-pampas-100 px-5 py-16 lg:p-[70px]">
        <TypesettingNotes />
      </section>

      {/* Standard Color */}
      <section id="standard-color" className="scroll-mt-6 flex flex-col gap-[60px] bg-white px-5 py-20 xl:flex-row xl:items-center lg:px-[70px] lg:py-[140px]">
        <div className="space-y-4 text-grey-950 xl:w-[486px] xl:shrink-0">
          <H>Standard Color</H>
          <div className="space-y-7 text-xl leading-7">
            <p>When applying color to type, keep it simple and functional. Our standard approach is to use Black or White across all levels. Limit yourself to a single type color per layout.</p>
            <p>Always choose your type color to maximize contrast and legibility. For example, don’t use Pampas text over a Pampas background. Here are some approved type and background combinations:</p>
          </div>
          <div className="grid w-[294px] grid-cols-2 gap-4">
            {approved.map(([c, name]) => (
              <span key={name} title={name} className={`flex h-[100px] items-center justify-center rounded-[20px] font-[family-name:var(--font-secondary)] text-[3.347rem] font-light leading-none ${c}`}>Aa</span>
            ))}
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-10 rounded-3xl border border-black/60 bg-white p-6 sm:p-8">
          {roles.map((r) => (
            <div key={r.label} className="flex flex-col gap-3 sm:flex-row sm:gap-7">
              <div className="w-[85px] shrink-0 space-y-1">
                <p className="font-[family-name:var(--font-secondary)] text-base font-medium leading-6 text-grey-600">{r.label}</p>
                <span className="block size-3 rounded-full bg-[#d9d9d9]" />
              </div>
              <p className={`text-grey-950 ${r.cls}`}>{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Padding */}
      <section id="padding" className="scroll-mt-6 flex flex-col gap-[60px] bg-white px-5 py-20 lg:px-[70px] lg:py-[140px] xl:flex-row">
        <div className="space-y-6 text-grey-950 xl:w-[463px] xl:shrink-0">
          <div className="space-y-4">
            <H>Padding</H>
            <div className="space-y-6 text-lg leading-6">
              <p>As our type sizes shift between applications, the vertical padding should scale.</p>
              <p>The minimum space following any headline should be 75% of the headline’s cap height. The minimum space following a subhead or body paragraph is equal to 100% of the subhead body copy’s cap height.</p>
            </div>
          </div>
          <Note>This is a good rule of thumb for most applications. In layouts with limited space, padding between type can be condensed.</Note>
        </div>
        <div className="min-w-0 flex-1"><PaddingDiagram /></div>
      </section>

      {/* Leading */}
      <section id="leading" className="scroll-mt-6 flex flex-col gap-[60px] bg-pampas-100 px-5 py-16 lg:p-[70px] xl:flex-row">
        <div className="space-y-6 xl:w-[463px] xl:shrink-0">
          <div className="space-y-4 text-grey-950">
            <H>Leading</H>
            <p className="text-lg leading-6">Use this formula to determine leading <br className="max-xl:hidden" />values based on type size. Leading ratios (L) are predetermined for each level of type hierarchy according to the table here. For example, if your subhead size is 100pts, your leading is <br className="max-xl:hidden" />100 x 1.2, or 120pts.</p>
          </div>
          <ol className="space-y-1 font-[family-name:var(--font-secondary)] text-xs leading-4 text-grey-600">
            <li><span className="font-medium text-grey-950">1. Type Size:</span> Expressed in pts</li>
            <li><span className="font-medium text-grey-950">2. Leading Ratio:</span> Expressed as a decimal</li>
            <li><span className="font-medium text-grey-950">3. Leading Value:</span> Expressed in pts</li>
          </ol>
          <LeadingTable />
        </div>
        <div className="flex min-w-0 flex-1 justify-center overflow-hidden px-[9px] xl:py-7">
          <LeadingFormula />
        </div>
      </section>

      {/* Capitalization */}
      <section id="capitalization" className="scroll-mt-6 flex flex-col gap-[60px] bg-white px-5 py-20 lg:flex-row lg:px-[70px] lg:py-[140px]">
        <div className="space-y-10 text-grey-950 lg:w-[363px] lg:shrink-0">
          <H>Capitalization</H>
          <div className="space-y-3 text-sm leading-5">
            <p>Headlines and subheads in external communications are set using sentence case capitalization. This keeps our content colloquial, casual, and consistent. Punctuation may be included where necessary for tone and grammar.</p>
            <p>Please note that this differs from our rule for internal documents (like PowerPoint presentations or Word documents) which use title case capitalization for presentation titles, page headers, or section names.</p>
          </div>
        </div>
        <CapitalizationExamples />
      </section>

      {/* Line Lengths */}
      <section id="line-lengths" className="scroll-mt-6 space-y-10 bg-white px-5 py-16 lg:p-[70px]">
        <div className="max-w-[540px] space-y-10 text-grey-950">
          <H>Line Lengths</H>
          <div className="space-y-3 text-sm leading-5">
            <p>For best legibility, lines of text shouldn’t be too long or short. Headlines should have between 4 and 15 characters per line, and paragraphs should have between 40 and 70 characters per line.</p>
            <p>If the line length of a body paragraph becomes too long, divide the text into columns. Remember, spaces and punctuation count as characters.</p>
          </div>
        </div>
        <div className="grid gap-x-6 gap-y-[30px] sm:grid-cols-2 xl:grid-cols-3">
          <LengthTile ok={false} caption="Too Short">
            <p className="text-[min(2.457rem,12.1cqw)] leading-[1.25]">Make<br />it<br />simple.<br />Make<br />it yours.</p>
          </LengthTile>
          <LengthTile ok caption="4-15 Characters Per Line">
            <p className="whitespace-nowrap text-[min(2.457rem,12.1cqw)] leading-[1.25]">{l1}<br />{l2}</p>
          </LengthTile>
          <LengthTile ok={false} caption="Too Long">
            <p className="whitespace-nowrap text-[min(1.1875rem,5.85cqw)] font-semibold leading-9">{brand.tagline}</p>
          </LengthTile>
          <LengthTile ok={false} caption="Too Short">
            <div className={`flex gap-[11px] ${small}`}>{[0, 1, 2].map((k) => <p key={k} className="w-[min(89px,27.4cqw)]">{sample}</p>)}</div>
          </LengthTile>
          <LengthTile ok caption="40-70 Characters Per Line">
            <div className={`flex w-[min(289px,89cqw)] gap-[11px] ${small}`}>{[0, 1].map((k) => <p key={k} className="min-w-0 flex-1">{sample}</p>)}</div>
          </LengthTile>
          <LengthTile ok={false} caption="Too Long">
            <p className={`w-[min(289px,89cqw)] ${small}`}>{sample}</p>
          </LengthTile>
        </div>
      </section>

      {/* Campaign Headlines */}
      <section id="campaign-headlines" className="scroll-mt-6 flex flex-col items-center gap-12 bg-white px-5 py-20 lg:flex-row lg:justify-between lg:px-[70px] lg:py-[140px]">
        <div className="w-full space-y-10 lg:w-[363px] lg:shrink-0">
          <H>Campaign Headlines</H>
          <div className="space-y-5 text-sm leading-5">
            <p className="text-grey-950">In some special cases, headline weight may be modified to suit the tone of a campaign. This may only be done in limited instances with explicit approval from:</p>
            <div className="space-y-0.5">
              <p className="font-semibold text-pampas-800">{brand.contactTeam}</p>
              <a href={`mailto:${brand.contactEmail}`} className="text-grey-500 hover:text-grey-700">{brand.contactEmail}</a>
            </div>
          </div>
        </div>
        <CampaignCarousel />
      </section>
    </PageShell>
  );
}
