import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import PrevNext from "@/components/site/PrevNext";
import Tabs from "@/components/ui/Tabs";
import Dots from "@/components/ui/Dots";
import { links } from "@/lib/pageLinks";
import { Band, Button, Card, Check, Col, DontCard, Grid, H3, Lead, Note, P, Ph, SectionHead, Split, Table, Verdict } from "@/components/ui";

export const metadata: Metadata = { title: "Typography" };
const F = brand.fontName;
const p = brand.palette;
const rail = [
  { id: "font", label: F }, { id: "introduction", label: "Introduction" }, { id: "weights", label: "Weights" }, { id: "styles", label: "Styles" }, { id: "style-features", label: "Style Features" },
  { id: "typesetting", label: "Typesetting" }, { id: "typesetting-notes", label: "Typesetting Notes" }, { id: "standard-color", label: "Standard Color" }, { id: "graphic-color", label: "Graphic Color" }, { id: "padding", label: "Padding" }, { id: "leading", label: "Leading" }, { id: "capitalization", label: "Capitalization" }, { id: "line-lengths", label: "Line Lengths" }, { id: "campaign-headlines", label: "Campaign Headlines" }, { id: "cheatsheet", label: "Cheatsheet" }, { id: "donts", label: "Don'ts" },
  { id: "value-pricing", label: "Value & Pricing" }, { id: "price-callouts", label: "Price Callouts" }, { id: "lockups", label: "Lockups" }, { id: "inline-pricing", label: "Inline Pricing" }, { id: "lockup-supers", label: "Lockup Supers" }, { id: "inline-supers", label: "Inline Supers" }, { id: "label-design", label: "Label Design" },
];

const styles = [
  { use: "General Use:", who: "All team members", name: F, desc: "Our default typeface for everyday usage across headlines, subheads, and paragraph copy.", weights: ["Light + Light Italic", "Regular + Regular Italic", "Medium + Medium Italic", "Bold + Bold Italic", "Black + Black Italic"], cta: "Download" },
  { use: "Special Use:", who: "Creatives & Creative Partners", name: brand.fontHeadline, desc: `A limited-use version of ${F} for large-scale implementation on OOH and signage.`, weights: ["Light + Light Italic", "Regular + Regular Italic", "Medium + Medium Italic", "Bold + Bold Italic", "Black + Black Italic"], cta: "Request" },
  { use: "Special Use:", who: "Site/App/CRM Teams", name: brand.fontMono, desc: `A monospace version of ${F} for use in data tables, blocks of code, or anywhere that tabular alignment is required.`, weights: ["Regular", "Bold"], cta: "Request", mono: true },
  { use: "Special Use:", who: "Site/App/CRM Livetext Only", name: brand.fontUI, desc: `An exact visual copy of ${F} with added functionality for use on our website and app.`, weights: ["Light + Light Italic", "Regular + Regular Italic", "Medium + Medium Italic", "Bold + Bold Italic", "Black + Black Italic"], cta: "Request" },
];

const Bar = ({ label, val, pct }: { label: string; val: string; pct: number }) => (
  <div className="grid grid-cols-[90px_1fr_60px] items-center gap-3 t-xs"><span>{label}</span><span className="h-2 rounded-full bg-white/30"><span className="block h-2 rounded-full bg-white" style={{ width: `${pct}%` }} /></span><span className="text-right">{val}</span></div>
);

function TypeStack({ h = "font-display font-bold", s = "font-bold", b = "", cls = "", hText = "Headline" }: { h?: string; s?: string; b?: string; cls?: string; hText?: string }) {
  return <div className={`text-left ${cls}`}><p className={`text-[2.25rem] leading-none ${h}`}>{hText}</p><p className={`mt-3 text-xl ${s}`}>Subhead</p><p className={`mt-3 text-sm ${b}`}>Body</p></div>;
}

export default function Page() {
  const [l1, l2] = brand.taglineLines;
  return (
    <PageShell title="Typography" rail={rail} footerLabel="Download the type assets" after={<PrevNext prev={links.color} next={links.layout} />}>
      <PageHero title="Typography">
        <div className="overflow-hidden whitespace-nowrap pl-0 font-display text-[18rem] font-light leading-none text-ink lg:text-[22rem]">AaBbCc</div>
      </PageHero>

      <Col id="font" className="pt-[150px] pb-[150px]">
        <H3>{F}</H3>
        <Lead className="mt-10">
          <p>{F} is our own type family designed as an extension of our {brand.name} wordmark.<br />It includes a wide range of weights and styles to maximise the function and flexibility of our system.</p>
        </Lead>
      </Col>

      <Band tone="primary" id="introduction">
        <p className="t-display"><span className="block">{l1}</span><span className="block">{l2}</span></p>
        <H3 className="mt-16">{F}</H3>
        <div className="mt-6 max-w-[430px] space-y-4">
          <P size="small">{F} is a custom type family crafted exclusively for {brand.name}. Utilitarian yet beautiful, it&apos;s designed to carefully balance expression with function and is used in all brand expressions.</P>
          <P size="small">Its shapes are sleek and modern while retaining some unique quirks and characteristics:</P>
        </div>
        <div className="relative mt-24 overflow-hidden rounded-t-lg bg-white/10 pb-12">
          <p className="whitespace-nowrap px-10 font-display text-[16rem] font-light leading-none text-white/25">SaRt</p>
          <div className="grid grid-cols-2 gap-4 px-10 pt-6 t-xs md:grid-cols-4">{["1. Vertical terminals", "2. Teardrop counter shapes", "3. Strong diagonal legs", "4. Elongated circular forms"].map((t) => <span key={t}>{t}</span>)}</div>
        </div>

        <div id="weights" className="scroll-mt-24 pt-28">
          <Split align="start" left={<div className="lg:pl-4"><H3>Weights</H3><P size="small" className="mt-8 max-w-[300px]">{F} includes five standard weights ranging from Light to Black to help us flex our voice across a range of communications.</P><Note title="Note:" className="mt-8">Black is reserved for special use cases including pins, patches, swag, and limited campaigns. It is not to be used for marketing or internal materials.</Note></div>} right={
            <div className="font-display text-[6.5rem] leading-[1.05] lg:pl-16">
              {[["Light", 300], ["Regular", 400], ["Medium", 500], ["Bold", 700], ["Black", 900]].map(([n, w]) => <p key={n as string} style={{ fontWeight: w as number }}>{n}</p>)}
            </div>
          } />
        </div>

        <div id="styles" className="scroll-mt-24 pt-40">
          <H3>Styles</H3>
          <div className="mt-8 max-w-[560px] space-y-4">
            <P size="small">Our type family has four font variations designed for the purposes listed here. Our default typeface is called {F} and is used by all {brand.name} team members for everyday documents.</P>
            <P size="small">If you are a creative partner or member of a cross-functional team, you may have access to the additional fonts shown here. Each one is distinct and intended for specific uses and teams. For a breakdown of their key differences, see below.</P>
          </div>
          <Grid cols={4} gap="gap-4" className="mt-20">
            {styles.map((s, i) => (
              <div key={s.name} className="flex flex-col">
                <div className={`flex-1 rounded-2xl p-5 ${i === 0 ? "bg-white text-ink" : "bg-white/15 text-white"}`}>
                  <p className="t-xs font-bold">{s.use}</p><p className="t-xs">{s.who}</p>
                  <p className={`mt-6 text-base ${s.mono ? "font-mono" : ""}`}>{s.name}</p>
                  <p className="t-xs mt-3 opacity-90">{s.desc}</p>
                  <hr className="my-5 border-current opacity-30" />
                  <p className="t-xs">Weights</p>
                  <ul className="mt-3 space-y-1.5 t-xs">{s.weights.map((w, k) => <li key={w} style={{ fontWeight: [300, 400, 500, 700, 900][k] }}>{w}</li>)}</ul>
                </div>
                <Button href={i === 0 ? brand.downloads.all : "/contact"} variant={i === 0 ? "mid" : "white-outline"} size="sm" download={i === 0}>{s.cta}</Button>
              </div>
            ))}
          </Grid>
        </div>

        <div id="style-features" className="scroll-mt-24 pt-40">
          <H3>Style Features</H3>
          <P size="small" className="mt-8 max-w-[560px]">The fonts within our type family are calibrated for specific uses through the special features outlined here.</P>
          <Note className="mt-8">{brand.fontUI} is an exact visual match for {F}, with the addition of variable functionality for use on our website or app.</Note>
          <Grid cols={3} gap="gap-4" className="mt-14">
            {[
              { name: F, bars: [["X-height:", "MEDIUM", 50], ["Letter spacing:", "MEDIUM", 50], ["Letter width:", "MEDIUM", 50]], cap: "Accessible letterforms to help readers distinguish between similar characters (ex. uppercase I and lowercase l).", cls: "" },
              { name: brand.fontHeadline, bars: [["X-height:", "HIGH", 80], ["Letter spacing:", "TIGHT", 25], ["Letter width:", "WIDE", 85]], cap: "Streamlined letterforms for maximum visual impact at large scales.", cls: "tracking-tight" },
              { name: brand.fontMono, bars: [["X-height:", "LOW", 25], ["Letter spacing:", "LOOSE", 85], ["Letter width:", "NARROW", 20]], cap: "Slab serifs to ensure narrow characters occupy the same width as wider characters.", cls: "font-mono" },
            ].map((c) => (
              <div key={c.name} className="rounded-2xl bg-white/15 p-5 text-white">
                <p className={`t-small ${c.cls}`}>{c.name}</p>
                <div className="mt-5 space-y-2">{c.bars.map(([l, v, pc]) => <Bar key={l as string} label={l as string} val={v as string} pct={pc as number} />)}</div>
                <p className={`mt-8 text-lg leading-snug ${c.cls}`}>Quick buyers of prized new products save money while enjoying exceptional value.</p>
                <p className={`mt-6 border-y border-dashed border-white/40 font-display text-[7rem] leading-none ${c.cls}`}>lmr</p>
                <p className="t-xs mt-6 opacity-90">{c.cap}</p>
              </div>
            ))}
          </Grid>
        </div>
      </Band>

      <Col id="typesetting" className="pt-[150px] pb-[150px]">
        <H3>Typesetting</H3>
        <Lead className="mt-10"><p>Typesetting is the process of selecting and arranging our fonts with consistent sizing, spacing, and alignment principles.<br />This section outlines our standard typographic hierarchy and demonstrates use cases for each member of our font family.</p></Lead>
      </Col>

      <Card tone="tint" width="wide" id="typesetting-notes" className="lg:py-12">
        <Tabs tabs={[
          { label: "Hierarchy", content: <Split align="start" left={<div><H3>Typesetting Notes</H3><p className="mt-6 t-small">Hierarchy</p>{[["Extra Large Headline", `Extra large headlines don't appear in all standard documents, appearing in places like presentation covers, divider slides or physical signage.`, `Extra large headlines are set in ${brand.fontHeadline} Light. If you don't have access to this font, use ${F} Light.`], ["Headline", `${F} Medium is used for all external-facing headlines, set in title case for everyday documents or sentence case for comms.`], ["Subhead", `${F} Medium is used for all standard subheads, set in title case for everyday documents or sentence case for comms.`], ["Body copy", `Use ${F} Regular for body text, captions, and other detailed info.`]].map(([t, ...ps]) => <div key={t} className="mt-6"><p className="t-small font-bold">{t}</p>{ps.map((x) => <P key={x} size="small" className="mt-2">{x}</P>)}</div>)}</div>} right={<div className="space-y-14 lg:pl-6">{[["XL Headli", "text-[7rem] font-light", `${brand.fontHeadline} Light`], ["Headline", "text-[4.5rem] font-bold", `${F} Medium`], ["Subhead", "text-[2.5rem] font-bold", `${F} Medium`], ["Body copy", "text-xl", `${F} Regular`]].map(([t, c, l]) => <div key={t}><p className={`whitespace-nowrap border-y border-primary/40 font-display leading-none ${c}`}>{t}</p><p className="t-xs mt-2"><b>{l.split(" ").slice(0, -1).join(" ")}</b> {l.split(" ").slice(-1)}</p></div>)}</div>} /> },
          { label: "Scale", content: <Split align="start" left={<div><H3>Typesetting Notes</H3><p className="mt-6 t-small">Scale</p><P size="small" className="mt-4">Describe the ratio between levels of type and how the scale flexes across formats.</P></div>} right={<div className="font-display font-light lg:pl-6">{[7, 4.5, 2.5, 1.25].map((s) => <p key={s} style={{ fontSize: `${s}rem` }} className="border-b border-primary/40 leading-none py-2">Aa</p>)}</div>} /> },
          { label: "Tracking", content: <Split align="start" left={<div><H3>Typesetting Notes</H3><p className="mt-6 t-small">Tracking</p><P size="small" className="mt-4">Headlines are tracked tighter as they grow; body copy is never tracked.</P></div>} right={<div className="font-display lg:pl-6"><p className="text-[5rem] font-light tracking-[-0.04em]">Tight −40</p><p className="text-[3rem] font-light tracking-[-0.02em]">Tight −20</p><p className="text-xl">Body 0</p></div>} /> },
        ]} />
      </Card>

      <Col id="standard-color" className="pt-[150px]">
        <Split align="start" left={<div><H3>Standard Color</H3><P size="small" className="mt-6">When applying color to type, keep it simple and functional. Our standard approach is to utilise {p.ink.name} or White across all levels. Limit yourself to a single type color per layout.</P><P size="small" className="mt-4">Always choose your type color to maximise contrast and legibility. For example, don&apos;t use {p.ink.name} text over a {p.primary.name} background. Here are some approved type and background combinations:</P><div className="mt-10 grid w-[260px] grid-cols-2 gap-3">{[["bg-mid text-ink"], ["bg-ink text-white"], ["bg-tint text-ink"], ["bg-accent text-ink"]].map(([c]) => <span key={c} className={`flex h-24 items-center justify-center rounded-2xl font-display text-[2.5rem] font-light ${c}`}>Aa</span>)}</div></div>} right={
          <div className="lg:pl-16">
            <div className="rounded-3xl border border-ink p-10">
              {[["Headline", <span key="h" className="font-display text-[3rem] font-light leading-none">On light backgrounds, set all text in {p.ink.name}.</span>], ["Subhead", <span key="s" className="text-xl font-bold">Limit yourself to one text color per layout.</span>], ["Body Copy", <span key="b" className="t-xs">Color use should match across headlines, subheads, and body copy to help keep our layouts streamlined and clean.</span>]].map(([l, c]) => <div key={l as string} className="mt-8 grid grid-cols-[80px_1fr] gap-6 first:mt-0"><p className="t-xs">{l}<span className="mt-2 block h-2.5 w-2.5 rounded-full bg-ink" /></p>{c}</div>)}
            </div>
            <Dots />
          </div>
        } />
      </Col>

      <Col id="graphic-color" className="pt-[150px]">
        <Split align="center" left={<div><H3>Graphic Color</H3><P size="small" className="mt-6">{p.primary.name} is used for headlines only in the case of high-impact, low-content applications where color and type are our main means of generating brand recognition. This includes instances like OLV end cards, video supers, large-scale signage, or environmental graphics.</P><P size="small" className="mt-4">We do not use {p.primary.name} type in applications with small, dense, or detailed copy.</P></div>} right={
          <div className="lg:pl-16">
            <div className="rounded-3xl border border-ink p-10">
              <div className="grid grid-cols-[80px_1fr] gap-6"><p className="t-xs">Headline<span className="mt-2 block h-2.5 w-2.5 rounded-full bg-primary" /></p><span className="font-display text-[3rem] font-light leading-none text-primary">Graphic type is set in {p.primary.name} over White.</span></div>
              <div className="mt-10 grid grid-cols-[80px_1fr] gap-6"><p className="t-xs"><b>Example:</b><br />Video super</p><span className="flex h-24 w-44 items-center justify-center rounded-xl border border-primary text-center text-[10px] text-primary">{brand.tagline}</span></div>
            </div>
            <Dots />
          </div>
        } />
      </Col>

      <Col id="padding" className="pt-[150px]">
        <Split align="start" left={<div><H3>Padding</H3><P size="small" className="mt-4">As our type sizes shift between applications, the vertical padding should scale.</P><P size="small" className="mt-4">The minimum space following any headline should be 75% of the headline&apos;s cap height. The minimum space following a subhead or body paragraph is equal to 100% of the subhead or body copy&apos;s cap height.</P><Note className="mt-8">This is a good rule of thumb for most applications. In layouts with limited space, padding between type can be condensed.</Note></div>} right={
          <div className="space-y-6 overflow-hidden whitespace-nowrap font-display lg:pl-8">
            {[["4X", "Headline", "text-[7rem] font-bold"], ["2X", "Subhead", "text-[3rem] font-bold"], ["X", "Body copy", "text-2xl"]].map(([m, t, c]) => <div key={t} className="relative border-y border-dashed border-primary/40 py-2"><span className="absolute left-0 top-0 t-xs">{m}</span><p className={`pl-10 leading-none ${c}`}>{t}</p></div>)}
          </div>
        } />
      </Col>

      <div className="pt-[150px]">
        <Card tone="ink" width="wide" id="leading">
          <Split align="start" left={<div><H3>Leading</H3><P size="small" className="mt-6">Use this formula to determine leading values based on type size. Leading ratios (L) are predetermined for each level of type hierarchy according to the table here. For example, if your subhead size is 100pts, your leading is 100 x 1.2, or 120pts.</P><ol className="t-xs mt-6 space-y-1"><li><b>1. Type Size:</b> Expressed in pts</li><li><b>2. Leading Ratio:</b> Expressed as a decimal</li><li><b>3. Leading Value:</b> Expressed in pts</li></ol><div className="mt-10 max-w-[440px]"><Table head={["Type Level", "Leading Ratio"]} rows={[["Extra Large Headlines", "1.0*"], ["Subheads", "1.2"], ["Large Body Copy", "1.2"], ["Body Copy", "1.2"], ["Small Body Copy", "1.3"]]} /></div></div>} right={
            <div className="font-display text-center lg:pl-10">
              <p className="text-[4.5rem] font-light leading-none">Type Size</p><p className="t-xs mt-3">①</p>
              <p className="mt-6 text-[4.5rem] font-light leading-none">× L</p><p className="t-xs mt-3">②</p>
              <p className="mt-6 text-[4.5rem] font-light leading-none">= Leading</p><p className="t-xs mt-3">③</p>
              <div className="mt-10 text-left"><Note title="*Note">Some extra large headlines may require tighter leading. Always begin with a 1.0 ratio and reduce incrementally, if desired.</Note></div>
            </div>
          } />
        </Card>
      </div>

      <Col id="capitalization" className="pt-[150px]">
        <Split align="start" left={<div><H3>Capitalization</H3><P size="small" className="mt-8">Headlines and subheads in external communications are set using <b>sentence case</b> capitalisation. This keeps our content colloquial, casual, and consistent. Punctuation may be included where necessary for tone and grammar.</P><P size="small" className="mt-4">Please note that this differs from our rule for internal documents (like presentations or documents) which use <b>title case</b> capitalisation for presentation titles, page headers, or section names.</P></div>} right={
          <div className="space-y-14 lg:pl-8">
            <div><p className="font-display text-[3rem] font-bold leading-none text-primary">headlines are set in<br />sentence case</p><Verdict ok className="mt-4">Use sentence case capitalisation when speaking externally to customers.</Verdict></div>
            <div className="grid gap-8 md:grid-cols-2">
              <div><p className="font-display text-[2.25rem] font-bold leading-tight text-primary">Internal<br />Headlines Are<br />Set in Title Case</p><Verdict ok className="mt-4">Use title case capitalisation for routine internal documents.</Verdict></div>
              <div><p className="font-display text-[2.25rem] font-bold leading-tight text-ink">WE NEVER<br />SET HEADLINES<br />IN ALL-CAPS</p><Verdict ok={false} className="mt-4">Don&apos;t use all-caps headlines for any document type or audience.</Verdict></div>
            </div>
          </div>
        } />
      </Col>

      <Col id="line-lengths" className="pt-[150px]">
        <SectionHead title="Line Lengths"><P size="small">For best legibility, lines of text shouldn&apos;t be too long or short. Headlines should have between 4 and 15 characters per line, and paragraphs should have between 40 and 70 characters per line.</P><P size="small">If the line length of a body paragraph becomes too long, divide the text into columns. Remember, spaces and punctuation count as characters.</P></SectionHead>
        <Grid cols={3} className="mt-20">
          {[["Lots\nto\nlove,\nfor\nless.", "text-[3rem] max-w-[120px]", false, "Too Short"], ["Lots to love,\nfor less.", "text-[3rem]", true, "4-15 Characters Per Line"], ["Lots to love, for less.", "text-2xl font-bold", false, "Too Long"]].map(([t, c, ok, v]) => <div key={v as string}><div className="flex aspect-square items-center justify-center rounded-3xl bg-tint p-8"><p className={`whitespace-pre-line font-display font-light leading-tight ${c}`}>{t as string}</p></div><Verdict ok={ok as boolean} className="mt-4">{v as string}</Verdict></div>)}
          {[[3, false, "Too Short"], [2, true, "40-70 Characters Per Line"], [1, false, "Too Long"]].map(([cols, ok, v]) => <div key={v as string}><div className="flex aspect-square items-center rounded-3xl bg-tint p-6"><div className={`grid gap-3 ${cols === 3 ? "grid-cols-3" : cols === 2 ? "grid-cols-2" : "grid-cols-1"}`}>{Array.from({ length: cols as number }).map((_, i) => <p key={i} className="text-[7px] leading-tight">Quiae qui dolor ducilla eostibus si culpa corumq amendit, quaectium inis et hariora entibus nos se ud sequam quibaetem voluptatem aute pliqui et aut di occatem imet res consendant aditaturem rempor abor molori nent liquo volum quiat latem renis ditatio officiem nos. Sedi derum ducilla com to voluptaque minus et eiciend elitibus excatur.</p>)}</div></div><Verdict ok={ok as boolean} className="mt-4">{v as string}</Verdict></div>)}
        </Grid>
      </Col>

      <Col id="campaign-headlines" className="pt-[150px]">
        <Split align="center" left={<div><H3>Campaign Headlines</H3><P size="small" className="mt-8">In some special cases, headline weight may be modified to suit the tone of a campaign. This may only be done in limited instances with explicit approval from:</P><p className="t-small mt-6 font-bold text-primary">{brand.contactTeam}</p><a href={`mailto:${brand.contactEmail}`} className="t-small underline">{brand.contactEmail}</a></div>} right={<div className="lg:pl-24"><Ph label="Campaign" className="aspect-[440/510] max-w-[440px] lg:ml-auto"><span className="absolute left-4 top-4 font-display text-[3rem] font-light leading-none">It&apos;s a<br />mood.</span></Ph><p className="t-xs mt-6 text-center">Light</p><Dots count={4} /></div>} />
      </Col>

      <div className="pt-[150px]">
        <Card tone="primary" width="wide" id="cheatsheet">
          <Split align="start" left={<div><H3>Typesetting<br />Cheatsheet</H3><P size="small" className="mt-10">Here&apos;s an overview of our typesetting rules for typeface, weight, leading, tracking, and scale. Tiers of messaging that use specialty fonts have an asterisk. If you are not a member of a team with access to these fonts, use {F} instead.</P><Note className="mt-8">Extra large headlines are our largest and most expressive level of typography and require some specialised formatting, as follows:</Note><p className="t-xs mt-4 max-w-sm"><b>Leading</b> may be manually tightened if lines of copy feel too loose. Begin with a ratio of 1.0 and tighten gradually, if needed.</p><p className="t-xs mt-4 max-w-sm"><b>Tracking</b> should be tightened to -15 to avoid large gaps between letters.</p></div>} right={
            <ul className="lg:pl-6">
              {[["XL Headline", "font-display text-[4.5rem] font-light"], ["Headline", "font-display text-[3rem] font-bold"], ["Subhead", "font-display text-[2rem] font-bold"], ["Inline Header", "text-base font-bold"], ["Body Copy", "text-base"], ["Captions + Legal Copy", "t-xs"], ["DATA + CODE", "font-mono t-xs"]].map(([t, c]) => <li key={t} className="flex items-center justify-between border-b border-white/50 py-6"><span className={`leading-none ${c}`}>{t}</span><span className="text-2xl">+</span></li>)}
            </ul>
          } />
        </Card>
      </div>

      <Col id="donts" className="pt-[150px]">
        <H3>Type Don&apos;ts</H3>
        <Grid cols={3} className="mt-12">
          <DontCard caption={`Don't set headlines in ${brand.fontMono}.`}><TypeStack h="font-mono font-normal" /></DontCard>
          <DontCard caption="Don't set subheads in unapproved weights."><TypeStack s="font-light" /></DontCard>
          <DontCard caption="Don't set levels of type too close together."><div className="text-left"><p className="font-display text-[2.25rem] font-bold leading-none">Headline</p><p className="-mt-1 text-xl font-bold">Subhead</p><p className="-mt-1 text-sm">Body</p></div></DontCard>
          <DontCard tone="primary" caption="Don't track out our typography."><TypeStack h="font-mono tracking-[0.2em]" s="tracking-[0.2em]" b="tracking-[0.2em]" /></DontCard>
          <DontCard tone="primary" caption="Don't use all-caps for headlines or subheads."><TypeStack hText="HEADLINE" s="uppercase" /></DontCard>
          <DontCard tone="primary" caption="Don't set our levels of type too close in size."><div className="text-left"><p className="font-display text-[2.25rem] font-bold leading-none">Headline</p><p className="text-[1.9rem] font-bold leading-none">Subhead</p><p className="text-2xl">Body</p></div></DontCard>
          <DontCard tone="tint" caption="Don't use low-contrast color combinations."><TypeStack cls="text-white" /></DontCard>
          <DontCard tone="mid" caption="Don't use combinations that cause visual vibration."><TypeStack cls="text-accent" /></DontCard>
          <DontCard tone="ink" caption="Don't use too many type colors in layout."><div className="text-left"><p className="font-display text-[2.25rem] font-bold leading-none text-mid">Headline</p><p className="mt-3 text-xl font-bold text-red-500">Subhead</p><p className="mt-3 text-sm text-accent">Body</p></div></DontCard>
        </Grid>
      </Col>

      <div className="band mt-[150px] bg-tint text-ink">
        <div className="band-inner py-40">
          <div id="value-pricing" className="scroll-mt-24"><H3>Value &amp; Pricing</H3><Lead className="mt-10"><p>This section outlines our standard method for typesetting prices for maximum consistency and clarity.</p></Lead></div>

          <div id="price-callouts" className="mt-56 scroll-mt-24">
            <Split align="start" left={<div><H3>Price Callouts</H3><div className="mt-8 space-y-4"><P size="small">Price callouts are used to highlight specific products or to promote bundled / bucketed pricing. Prices can be shown in one of two ways: as a standalone superscript lockup or basic inline text.</P><P size="small"><b>Superscript</b> callouts are used when pricing is the focus of an application and should be set at large sizes in {F} Light.</P><P size="small"><b>Inline</b> callouts are used to include price details within a subhead or section of body copy, or when setting prices at small sizes.</P><P size="small">Remember — prices without cents don&apos;t need to include &ldquo;00&rdquo;. For example, $80.00 should be set as $80.</P></div><Note className="mt-8">Superscript numbers and symbols should always be set using the automated &ldquo;superscript&rdquo; function. These numbers have been optimised for small usage to maintain consistent weight alongside our large numerals.</Note><p className="t-xs mt-4 max-w-sm"><span className="text-red-500">Don&apos;t</span> attempt to create your own superscript characters by manually reducing the size of our regular type.</p></div>} right={
              <div className="font-display font-light lg:pl-8">
                <p className="t-xs"><b>Style 1</b> Superscript</p>
                <p className="mt-4 border-y border-primary/40 text-[11rem] leading-none">$34<sup className="text-[5rem] align-top">98</sup></p>
                <p className="t-xs mt-16"><b>Style 2</b> Inline</p>
                <p className="mt-4 border-y border-primary/40 text-[7rem] leading-none">$34.98</p>
              </div>
            } />
          </div>

          <div className="-ml-[calc(var(--content-x)-var(--rail-w)-24px)] mt-40 lg:-mr-[var(--content-r)] lg:mr-6">
            <Card tone="ink" width="inner" id="lockups">
              <Tabs dark tabs={["Standard Lockups", "Extended Lockups", "Descriptive Lockups"].map((label, i) => ({ label, content: (
                <Split align="start" left={<div><H3>Price Lockups</H3><p className="mt-6 t-small">{label.split(" ")[0]}</p><P size="small" className="mt-4">Price lockups are designed to work as scalable units using the structures shown here.</P><P size="small" className="mt-4">Signifiers such as &ldquo;lb&rdquo;, &ldquo;each&rdquo;, or &ldquo;& below&rdquo; may be added to the right of the price, aligned to the price&apos;s cap height. The signifier&apos;s size and formatting matches the product name.</P><ol className="t-xs mt-6 space-y-2"><li><b>1. Product</b><br />{F} Regular - 1.2 Leading</li><li><b>2. Price</b><br />{F} Light</li><li><b>3. Signifier</b><br />{F} Regular</li></ol></div>} right={
                  <div className="space-y-16 font-display lg:pl-8">
                    <div><p className="t-xs"><b>Vertical</b><br />Signifier optional</p><div className="mt-6 inline-block border border-dashed border-white/40 p-4"><p className="text-[2rem] font-light leading-tight">Product<br />name here</p><p className="text-[5rem] font-light leading-none">$8<sup className="text-[2rem] align-top">98</sup> <span className="text-[2rem]">lb</span></p></div></div>
                    {i === 0 && <div><p className="t-xs"><b>Horizontal</b><br />Signifier optional</p><div className="mt-6 inline-flex items-end gap-6 border border-dashed border-white/40 p-4"><p className="text-[2rem] font-light leading-tight">Product<br />name here</p><p className="text-[5rem] font-light leading-none">$8<sup className="text-[2rem] align-top">98</sup> <span className="text-[2rem]">lb</span></p></div></div>}
                  </div>
                } />
              ) }))} />
            </Card>
          </div>

          <div id="inline-pricing" className="mt-40 scroll-mt-24">
            <Split align="center" left={<div><H3>Inline Pricing</H3><P size="small" className="mt-8">When pricing is used in headlines, subheads, or body copy, we do not use superscripts.</P><P size="small" className="mt-4">Inline prices should be formatted like the copy they live in, using decimals to indicate cents. If desired, the weight may be increased by one level for added emphasis. Do not increase pricing by more than one weight.</P></div>} right={
              <div className="lg:pl-16"><div className="rounded-3xl bg-white p-8"><Check /><p className="mt-6 border-y border-primary/30 font-display text-[3rem] font-light leading-tight">Save up to <b className="font-bold">$2,300</b> per year on paper towels by shopping at {brand.name}.</p><div className="mt-10 grid grid-cols-2 t-xs"><p><b>Paragraph:</b><br />{F} Regular</p><p><b>Price:</b><br />{F} Medium</p></div></div><Dots /></div>
            } />
          </div>

          {[["lockup-supers", "Lockup Supers", "Price lockups can be used as film supers where cost is the main selling point.", "The width of the price should be scaled to 1/8 of the layout's width, utilising an 8-column structure.", <><p className="text-[10px]">BRAND</p><p className="text-2xl font-light">True Wireless<br />Solo Buds</p><p className="text-[3rem] font-light leading-none">$71<sup className="text-xl align-top">98</sup></p></>], ["inline-supers", "Inline Lockup Supers", "Inline pricing can be used as film supers where we intend for the brand name to be the main selling point.", "The width of the price should be scaled to 1/10 of the layout's width, utilising a 10-column structure.", <p key="i" className="text-2xl font-light">Skincare<br />starting at<br />$12.98</p>]].map(([id, title, a, b, ex]) => (
            <div key={id as string} id={id as string} className="mt-40 scroll-mt-24">
              <SectionHead title={title as string}><P size="small">{a as string}</P><P size="small">Supers are sized based on <a href="/layout" className="underline">our grid system</a>. {b as string}</P><P size="small">Lockup placement can vary and doesn&apos;t need to live in a single section of the grid. In most cases, we set our prices in White. {p.ink.name} can be used as a secondary option where necessary for legibility.</P></SectionHead>
              <Ph label="Film still" className="mt-12 aspect-[1040/580] rounded-lg"><div className="absolute inset-0 grid grid-cols-8 divide-x divide-white/30 border border-dashed border-white/50" /><div className="absolute right-[15%] top-[45%] text-white">{ex as React.ReactNode}</div></Ph>
            </div>
          ))}

          <div id="label-design" className="mt-40 scroll-mt-24">
            <Split align="center" left={<div><H3>Label Design</H3><P size="small" className="mt-8">Pricing labels are designed for key price information while creating brand attribution with color. These examples represent the range of information included in pricing labels.</P><P size="small" className="mt-4">Labels are used in White type on {p.primary.name} or {p.primary.name} type on White.</P><p className="t-small mt-6">Pricing labels can consist of one or two elements:</p><ol className="t-small mt-2 list-inside pl-2">{["Price only", "Promotional copy with price"].map((x, i) => <li key={x}>{i + 1}. {x}</li>)}</ol><p className="t-small mt-6">Pricing labels can be used in:</p><ol className="t-small mt-2 pl-2">{["Digital banners", "Social posts", "Print and OOH", "In-store signage", brand.siteLabel].map((x, i) => <li key={x}>{i + 1}. {x}</li>)}</ol></div>} right={
              <div className="lg:pl-16"><div className="rounded-[var(--radius-card)] bg-primary p-12 font-display text-white"><div className="space-y-8 text-[2.5rem] font-light leading-none">{["Starting at $2⁶⁸", "Starting at 68¢", "$2⁶⁸ & below", "Only $2⁶⁸", "$2⁶⁸"].map((t) => <p key={t} className="inline-block border border-dashed border-white/40 px-2 py-1 block w-fit">{t}</p>)}</div></div><Dots /></div>
            } />
          </div>
        </div>
      </div>
    </PageShell>
  );
}
