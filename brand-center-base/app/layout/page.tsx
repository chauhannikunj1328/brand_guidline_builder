import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import { Mark, Wordmark } from "@/components/Logo";
import PageShell from "@/components/site/PageShell";
import PageHero, { HeroStrip } from "@/components/site/PageHero";
import PrevNext from "@/components/site/PrevNext";
import Tabs from "@/components/ui/Tabs";
import { links } from "@/lib/pageLinks";
import { Band, Card, Col, Grid, H3, Lead, Note, NumBadge, NumList, P, SectionHead, Split, Table, Verdict } from "@/components/ui";

export const metadata: Metadata = { title: "Layout" };
const M = brand.markShort;
const rail = [
  { id: "grids", label: "Grids" }, { id: "margins", label: "Margins" }, { id: "columns", label: "Columns" }, { id: "gutters", label: "Gutters" }, { id: "optical-guide", label: "Optical Guide" },
  { id: "applying-logos", label: "Applying Logos" }, { id: "proportions", label: "Proportions" }, { id: "scale", label: "Scale" }, { id: "placement", label: "Placement" }, { id: "logo-donts", label: "Don'ts" },
  { id: "applying-type", label: "Applying Type" }, { id: "type-placement", label: "Placement" }, { id: "type-scale", label: "Scale" }, { id: "type-donts", label: "Don'ts" }, { id: "quick-guide", label: "Layout Quick Guide" },
];

/* Grid diagram: page frame with margin band + columns */
function GridFrame({ children, cols = 6, margin = true, className = "aspect-[1040/650]", dark = false }: { children?: React.ReactNode; cols?: number; margin?: boolean; className?: string; dark?: boolean }) {
  return (
    <div className={`relative ${className} border ${dark ? "border-white/60" : "border-ink"} p-[4%]`}>
      {margin && <div className={`pointer-events-none absolute inset-0 border-[4%] ${dark ? "border-white/10" : "border-tint"}`} style={{ borderWidth: "4%" }} />}
      <div className={`absolute inset-[4%] grid gap-[2%] grid-cols-${cols}`}>{Array.from({ length: cols }).map((_, i) => <span key={i} className={`${dark ? "bg-white/10" : "bg-tint/70"}`} />)}</div>
      <span className={`absolute left-1 top-1 t-xs ${dark ? "text-white" : ""}`}>x</span><span className={`absolute right-1 top-1 t-xs ${dark ? "text-white" : ""}`}>x</span>
      <div className="relative">{children}</div>
    </div>
  );
}
/* Small poster: mark + wordmark placement demo */
function Poster({ mark = "tr", wm = "bl", head, headPos = "tl", tone = "white", caption, ok }: { mark?: "tr" | "tl" | "br" | "bl" | "c" | "none"; wm?: "bl" | "tl" | "br" | "bc" | "none"; head?: string; headPos?: "tl" | "tr" | "c" | "bl"; tone?: "white" | "primary"; caption?: React.ReactNode; ok?: boolean }) {
  const pos = { tr: "right-3 top-3", tl: "left-3 top-3", br: "right-3 bottom-3", bl: "left-3 bottom-3", bc: "bottom-3 left-1/2 -translate-x-1/2", c: "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" };
  const light = tone === "primary";
  return (
    <div>
      <div className={`relative aspect-[290/360] overflow-hidden border ${light ? "border-primary bg-primary text-white" : "border-line bg-white text-ink"}`}>
        <div className={`absolute inset-[6%] grid grid-cols-4 gap-[8%] ${light ? "opacity-30" : ""}`}>{Array.from({ length: 4 }).map((_, i) => <span key={i} className={light ? "bg-white/20" : "bg-tint/60"} />)}</div>
        {mark !== "none" && <Mark className={`absolute h-5 w-5 text-accent ${pos[mark]}`} />}
        {wm !== "none" && <Wordmark className={`absolute text-sm ${light ? "text-white" : "text-primary"} ${pos[wm]}`} />}
        {head && <p className={`absolute max-w-[60%] font-display text-lg font-light leading-tight ${pos[headPos]} ${headPos === "tr" ? "text-right" : ""}`}>{head}</p>}
      </div>
      {caption && (ok === undefined ? <p className="t-xs mt-4 flex items-center gap-3"><NumBadge n="" />{caption}</p> : <Verdict ok={ok} className="mt-4">{caption}</Verdict>)}
    </div>
  );
}

export default function Page() {
  const [l1, l2] = brand.taglineLines;
  return (
    <PageShell title="Layout" rail={rail} after={<PrevNext prev={links.typography} next={links["brand-os"]} />}>
      <PageHero title="Layout">
        <HeroStrip>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className={`relative h-[240px] w-[345px] shrink-0 overflow-hidden ${i === 3 ? "bg-ink text-white" : "bg-white text-ink"}`}>
              <div className="absolute inset-3 grid grid-cols-4 gap-4 opacity-40">{Array.from({ length: 4 }).map((_, k) => <span key={k} className="bg-tint" />)}</div>
              <p className="absolute left-4 top-4 font-display text-[2rem] font-light leading-tight">Exactly what<br />you need.</p>
              <Mark className="absolute right-4 top-4 h-6 w-6 text-accent" /><Wordmark className={`absolute bottom-4 left-4 text-base ${i === 3 ? "text-white" : "text-primary"}`} />
            </div>
          ))}
        </HeroStrip>
      </PageHero>

      <Col id="grids" className="pt-[150px] pb-[150px]">
        <H3>Grids</H3>
        <Lead className="mt-10"><p>Our grid is how we assemble our brand elements into a whole.<br />Whether we&apos;re making a detailed multi-page presentation or a simple email, we always use the grid as our starting point.</p></Lead>
      </Col>

      {[
        { id: "margins", title: "Margins", text: ["Margins establish a consistent foundation, ensuring content remains legible, uniform, and tidy. Our standard margin width is determined by dividing the document's longest side into 24 equal segments, with the width of one segment becoming our margin. See the table for some sample document sizes and margins."], note: "The margins listed here for Leaderboard Display and Skyscraper Display have been reduced for optical correctness.*", table: { head: ["Document Type", "Dimensions", "Margins"], rows: [["16:9 Powerpoint or Video", "1920 X 1080 PX", "80 PX"], ["Square Social Post", "1080 X 1080 PX", "45 PX"], ["Printed/PDF Report", "8.5 X 11 IN", ".5 IN"], ["Leaderboard Display*", "728 X 90 PX", "16 PX"], ["Skyscraper Display*", "120 X 600 PX", "12 PX"]] }, big: "Our margin is equal to the longest side of a document divided by 24.", small: "In the case of very wide or very tall layouts, your margins may need to be reduced slightly to maintain appropriate space for content.", under: "24 X", cols: 12 },
        { id: "columns", title: "Columns", text: ["We divide the interior space into vertical columns to help organise our content. Columns are drawn in increments of two, based on the document's width. Wider applications will need more columns, while narrow applications will need fewer.", "Also consider the type of content that will occupy the space — complex information will require more columns to establish a clear hierarchy. See the table here for some common document sizes and sample column counts."], table: { head: ["Document Type", "Dimensions", "Columns"], rows: [["16:9 Powerpoint or Video", "1920 x 1080 PX", "12"], ["Square Social Post", "1080 x 1080 PX", "4"], ["Printed/PDF Report", "8.5 x 11 IN", "6"], ["Leaderboard Display", "728 x 90 PX", "8"], ["Skyscraper Display", "120 x 600 PX", "2"]] }, big: "Columns are drawn in increments of 2, up to a maximum of 12.", small: "Narrow applications will typically use 2 to 4 columns, while wide layouts will use between 6 and 12.", under: "6 COLUMNS", cols: 6 },
        { id: "gutters", title: "Gutters", text: ["Gutters are the clear spaces between columns that separate text, images, and graphics. They make our communications tidy, organised, and legible.", "The width of our gutters is determined in relation to our margin width. Gutters should be between 50% and 100% of our margin width, depending on the size of the application. A 50% gutter is sufficient for most needs, but may be too thin for very wide layouts. Use your best judgment for spacing."], big: "Our gutter width is between 50% and 100% of our margin.", small: "Wider applications may require larger gutters for optical correctness. When in doubt, start at 50% and increase as needed.", cols: 6 },
      ].map((s) => (
        <Col key={s.id} id={s.id} className="pt-[60px] pb-[80px]">
          <Split align="start" left={<SectionHead title={s.title} note={s.note}>{s.text.map((t) => <P key={t} size="small">{t}</P>)}</SectionHead>} right={s.table ? <div className="lg:pl-10 lg:pt-12"><Table head={s.table.head} rows={s.table.rows} /></div> : null} />
          <div className="mt-20"><GridFrame cols={s.cols}><div className="px-8 py-10"><p className="font-display text-[2.75rem] font-light leading-tight text-primary">{s.big}</p><p className="mt-40 max-w-[440px] text-xl font-light">{s.small}</p></div></GridFrame>{s.under && <p className="t-small mt-3 text-center">{s.under}</p>}</div>
        </Col>
      ))}

      <Col id="optical-guide" className="pb-[150px]">
        <H3>Optical Guide</H3>
        <Tabs className="mt-8" tabs={["Margins", "Gutters"].map((label) => ({ label, content: (
          <Grid cols={3}>{[["Too Narrow", false, "2%"], ["Just Right", true, "5%"], ["Too Wide", false, "12%"]].map(([c, ok, m]) => <div key={c as string}><div className="aspect-[340/300] border border-ink" style={{ padding: m as string }}><div className="h-full w-full border border-primary/40 bg-tint/40" /></div><Verdict ok={ok as boolean} className="mt-4">{c as string}</Verdict></div>)}</Grid>
        ) }))} />
      </Col>

      <Band tone="primary" id="applying-logos" className="!pb-0">
        <H3>Applying Logos</H3>
        <Lead className="mt-10 text-white"><p>After establishing a grid, our logos may be used.</p><p>Our wordmark and {M} are now decoupled from one another for more design flexibility. This section outlines the rules that govern their sizing and placement.</p></Lead>
        <div id="proportions" className="scroll-mt-24 pt-56">
          <SectionHead title="Proportions"><P size="small">When our wordmark and {M} are used together in a layout, they always maintain the size relationship shown here. The height of our {M} should match 1.7x our wordmark&apos;s height.</P><P size="small">This size relationship is fixed: the wordmark and {M} must always scale up or down as a set — never independently. Remember — our {M} and wordmark are separate logos. We do not lock them up together.</P></SectionHead>
          <div className="relative mt-24 flex h-[320px] items-center gap-24 overflow-hidden bg-white/10 px-16 text-white/50">
            <Mark className="h-[240px] w-[240px]" /><span className="t-small text-white">1.7 W</span><span className="t-small text-white">W</span><Wordmark className="whitespace-nowrap text-[11rem]" />
          </div>
        </div>
        <div className="-ml-[calc(var(--content-x)-var(--rail-w)-24px)] lg:-mr-[var(--content-r)] lg:mr-6 mt-40 pb-20">
          <Card tone="white" width="inner" id="scale">
            <Split align="start" left={<div><H3>Scale</H3><P size="small" className="mt-8">The height for our wordmark in layout is equal to the width of our margin. The height for our {M} is then 1.7x the margin height, according to the proportions above.</P><P size="small" className="mt-4">Use this as a baseline measurement — logo sizes can require optical adjustment, particularly on very wide or very tall layouts.</P><Note title="Remember" className="mt-8">When resizing the wordmark, our {M} must also increase or decrease accordingly to maintain correct proportions.</Note></div>} right={
              <GridFrame cols={4} className="aspect-[600/380]"><div className="relative h-full p-8"><Mark className="absolute right-0 top-0 h-8 w-8 text-accent" /><p className="max-w-[420px] font-display text-[1.75rem] font-light leading-tight text-primary">Our standard wordmark height is equal to our margin. Our {M} height is 1.7x this measurement.</p><Wordmark className="absolute bottom-0 left-0 text-xl text-primary" /></div></GridFrame>
            } />
            <div id="placement" className="scroll-mt-24 pt-40">
              <SectionHead title="Placement"><P size="small">Our wordmark and {M} are always located on opposite sides of a layout. Where possible, we place the wordmark in the lower left corner and the {M} in the upper right. If this isn&apos;t possible, you can use one of our secondary placements. To help you remember these placements, keep in mind two simple rules:</P><P size="small">1. Wordmark can&apos;t be at the top of a composition.<br />2. Wordmark can&apos;t be right-aligned.</P></SectionHead>
              <div className="mt-12 grid grid-cols-4 t-xs font-bold"><span>Primary</span><span>Secondary</span></div>
              <Grid cols={4} className="mt-3">
                <Poster mark="tr" wm="bl" caption="Left-aligned Diagonal" /><Poster mark="tl" wm="bl" caption="Left-aligned vertical" /><Poster mark="br" wm="bl" caption="Baseline horizontal" /><Poster mark="c" wm="bc" caption="Centered vertical" />
              </Grid>
            </div>
            <div id="logo-donts" className="scroll-mt-24 pt-40">
              <SectionHead title="Don'ts"><P size="small">When applying our logos, we always avoid the following misuses.</P></SectionHead>
              <Grid cols={4} className="mt-12">
                <Poster tone="primary" mark="tr" wm="br" ok={false} caption="Don't align our wordmark to the right edge of a layout." /><Poster tone="primary" mark="br" wm="tl" ok={false} caption="Don't align our wordmark to the top margin." /><Poster tone="primary" mark="tr" wm="bl" ok={false} caption={`Don't alter the size relationship between our wordmark and ${M}.`} /><Poster tone="primary" mark="bl" wm="bc" ok={false} caption={`Don't create a lockup with our wordmark and ${M}.`} />
              </Grid>
            </div>
          </Card>
        </div>
      </Band>

      <Col id="applying-type" className="pt-[150px] pb-[100px]">
        <H3>Applying Type</H3>
        <Lead className="mt-10"><p>This section outlines our rules for consistent type layout to enhance brand recognition and clarity.</p></Lead>
      </Col>
      <Col id="type-placement">
        <SectionHead title="Placement"><P size="small">Our preferred headline placement is always in the upper left corner. If this placement doesn&apos;t work, you may use one of the flexible secondary placements shown below (in order of preference).</P><P size="small">Always be mindful of leaving ample white space for our {M}. When the {M} is located in the upper right corner, we aim to keep the right column free from any headlines or subheads. If text must be placed in the same column, give a generous vertical buffer (roughly 1/3 of our document height).</P></SectionHead>
        <div className="mt-16 grid grid-cols-4 t-xs font-bold"><span>Primary</span><span>Secondary</span></div>
        <Grid cols={4} className="mt-3">
          <Poster head={`${l1} ${l2}`} headPos="tl" caption="Upper left corner" /><Poster head={`${l1} ${l2}`} headPos="c" caption="Left-aligned to margin" /><Poster head={`${l1} ${l2}`} headPos="tr" caption="Left-aligned to gutter" /><Poster head={`${l1} ${l2}`} headPos="c" caption="Centered" />
        </Grid>
      </Col>
      <Col id="type-scale" className="pt-[150px]">
        <SectionHead title="Scale"><P size="small">To maintain hierarchy, headlines should always be set larger than our wordmark. Aim for a <b>contrast ratio of at least 3:2</b>; in other words, our wordmark should be no larger than 2/3 of the headline size. We encourage using larger headlines for greater contrast when possible.</P></SectionHead>
        <Grid cols={4} className="mt-12">
          {[["Too small", false, "Not Enough Contrast", "text-xs"], ["Good", true, "3:2 Contrast Ratio", "text-lg"], ["Better", true, "", "text-2xl"], ["Best", true, "", "text-4xl"]].map(([h, ok, cap, size]) => <div key={h as string}><Verdict ok={ok as boolean} className="mb-4 font-bold">{cap as string}</Verdict><div className={`relative aspect-[290/360] border ${ok ? "border-line" : "border-red-300"} bg-white`}><p className={`absolute left-3 top-3 font-display font-light ${size}`}>{h as string}</p><Wordmark className="absolute bottom-3 left-3 text-sm text-primary" /></div></div>)}
        </Grid>
      </Col>
      <Col id="type-donts" className="pt-[150px] pb-[150px]">
        <SectionHead title="Headline Don'ts"><P size="small">When setting headlines, we&apos;re always mindful of the way our text interacts with our wordmark and {M}. Avoid the following misuses.</P></SectionHead>
        <Grid cols={4} className="mt-12">
          <Poster tone="primary" head={`${l1} ${l2}`} headPos="tl" ok={false} caption="Don't set headline too small." /><Poster tone="primary" head={`${l1} ${l2}`} headPos="tl" ok={false} caption={`Don't let headline encroach on the ${M}.`} /><Poster tone="primary" head={`${l1} ${l2}`} headPos="tr" ok={false} caption="Don't right-align headline." /><Poster tone="primary" head={`${l1} ${l2}`} headPos="tr" ok={false} caption={`Don't let headline encroach on the ${M}.`} />
        </Grid>
      </Col>

      <Band tone="tint" id="quick-guide" className="!pb-0">
        <H3>Layout Quick Guide</H3>
        <Lead className="mt-10 max-w-[900px]"><p>This section is our layout design cheat sheet. It&apos;s a quick summary that walks through the step-by-step process of building a layout, from our initial grid to adding frames and photography.</p><p>Our quick guide only includes the most essential layout information. For more details on each element, see the previous sections.</p></Lead>
        <div className="-ml-[calc(var(--content-x)-var(--rail-w)-24px)] lg:-mr-[var(--content-r)] lg:mr-6 mt-40 pb-10">
          <Card tone="primary" width="inner">
            <Tabs dark tabs={["Margins", "Columns and Gutters", "Headlines", "Subheads", "Logos", "Frames", "Full-bleed Imagery"].map((label) => ({ label, content: (
              <Split align="start" left={<div><H3 className="!text-2xl">Layout Guide</H3><p className="mt-3 t-small">Applying {label}</p><P size="small" className="mt-4">When designing a layout, our first step is to establish margins using the formula:</P><P size="small" className="mt-4">Long Side ÷ 24 = Margin</P><P size="small" className="mt-4">In the case of very wide or very tall layouts, margins may need to be slightly reduced for optical correctness.</P><div className="mt-6"><NumList tone="white" items={["815px H ÷ 24 = 34px Margin", "664px W ÷ 24 = 28px Margin", "664px W ÷ 24 = 28px Margin"]} /></div></div>} right={
                <div className="grid gap-8 lg:grid-cols-2 lg:pl-8"><div><NumBadge n={1} tone="white" /><GridFrame dark cols={2} className="mt-3 aspect-[220/300]" /></div><div className="space-y-6"><div><NumBadge n={2} tone="white" /><GridFrame dark cols={4} className="mt-3 aspect-[220/70]" /></div><div><NumBadge n={3} tone="white" /><GridFrame dark cols={4} className="mt-3 aspect-[220/180]" /></div></div></div>
              } />
            ) }))} />
          </Card>
        </div>
      </Band>
    </PageShell>
  );
}
