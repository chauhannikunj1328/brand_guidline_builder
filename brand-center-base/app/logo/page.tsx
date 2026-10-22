import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import { Mark } from "@/components/Logo";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import PrevNext from "@/components/site/PrevNext";
import Tabs from "@/components/ui/Tabs";
import { links } from "@/lib/pageLinks";
import { Band, Button, Card, Col, DontCard, Grid, H3, Lead, MarkOn, Note, P, SectionHead, Split } from "@/components/ui";

export const metadata: Metadata = { title: brand.markName };

const rail = [
  { id: "introduction", label: "Introduction" },
  { id: "notes", label: `${brand.markShort} Notes` },
  { id: "primary-color-usage", label: "Primary Color Usage" },
  { id: "secondary-color-usage", label: "Secondary Color Usage" },
  { id: "sizing", label: "Sizing" },
  { id: "app-icon", label: "App Icon" },
  { id: "holding-shapes", label: "Holding Shapes" },
  { id: "donts", label: "Dont's" },
];

const M = brand.markShort;
const p = brand.palette;

export default function Page() {
  return (
    <PageShell title={brand.markName} rail={rail} footerLabel={`Download the ${M} assets`} after={<PrevNext prev={links["brand-os"]} next={links.wordmark} />}>
      <PageHero title={brand.markName}>
        {/* phone mock-up bleeding out of the hero */}
        <div className="mx-auto h-[400px] w-[900px] max-w-[92vw] rounded-t-[60px] border-[10px] border-b-0 border-neutral-800 bg-ink shadow-2xl">
          <div className="flex justify-between px-14 pt-12 text-white"><span className="text-xl">3:42</span><span className="text-xl">▮▮▮ ◔ ▬</span></div>
          <div className="mt-10 flex justify-center gap-14">
            <div className="h-[190px] w-[190px] rounded-[40px] bg-white/10" />
            <div className="flex h-[190px] w-[190px] items-center justify-center rounded-[40px] bg-primary text-accent"><Mark className="h-24 w-24" /></div>
            <div className="h-[190px] w-[190px] rounded-[40px] bg-white/10" />
          </div>
        </div>
      </PageHero>

      <Col id="introduction" className="pt-[150px] pb-[150px]">
        <Lead>
          <p>{brand.markName} is our primary logo.</p>
          <p>It&apos;s an iconic visual shorthand for {brand.name} that&apos;s bold at any scale, and represents our brand clearly anywhere it shows up.</p>
        </Lead>
        <div className="mt-12"><Button href={brand.downloads.all} size="sm" download>{brand.downloads.label}</Button></div>
      </Col>

      <Band tone="primary" className="!pb-0">
        <Split left={
          <div>
            <H3>{M} Overview</H3>
            <div className="mt-8 space-y-4 max-w-[300px]">
              <P size="small">{brand.markName} is our most iconic symbol and the quickest shorthand for the {brand.name} brand, radiating energy and optimism wherever it appears.</P>
              <P size="small">{brand.markName} can appear alone as a representation of {brand.name} or with our wordmark in the same composition, but they should never be placed right next to each other. <a href="/layout#applying-logos" className="underline">See Layout page &lsquo;Applying Logos&rsquo; for placement guidance.</a></P>
            </div>
          </div>
        } right={<div className="flex justify-center py-24 text-accent"><Mark className="h-[420px] w-[420px]" /></div>} />
        <div className="-ml-[calc(var(--content-x)-var(--rail-w)-24px)] lg:-mr-[var(--content-r)] lg:mr-6 mt-10 pb-20">
          <Card tone="ink" width="inner" id="notes">
            <Tabs dark tabs={[
              { label: "Evolution", content: <Split left={<div><H3>{M} Notes</H3><p className="mt-6 t-small">Evolution</p><P size="small" className="mt-4 max-w-[300px]">The original mark was introduced years ago. Our new mark has been refreshed and redrawn with organic curves that feel approachable and less rigid.</P></div>} right={<div className="flex flex-col items-center gap-10 text-white/40"><Mark className="h-56 w-56" /><div className="flex items-center gap-16 text-accent"><div className="text-center"><Mark className="h-14 w-14" /><p className="t-xs mt-4 text-white">Before</p></div><span className="h-px w-16 bg-white/40" /><div className="text-center"><Mark className="h-14 w-14" /><p className="t-xs mt-4 text-white">Now</p></div></div></div>} /> },
              { label: "Construction", content: <Split left={<div><H3>{M} Notes</H3><p className="mt-6 t-small">Construction</p><P size="small" className="mt-4 max-w-[300px]">The mark is built on a simple geometric grid. Describe how each element relates to the others and what governs the proportions.</P></div>} right={<div className="relative mx-auto grid h-72 w-72 grid-cols-4 grid-rows-4 border border-dashed border-white/40 text-accent">{Array.from({ length: 16 }).map((_, i) => <span key={i} className="border border-dashed border-white/20" />)}<Mark className="absolute inset-8 h-56 w-56" /></div>} /> },
              { label: "Clearspace", content: <Split left={<div><H3>{M} Notes</H3><p className="mt-6 t-small">Clearspace</p><P size="small" className="mt-4 max-w-[300px]">Keep a minimum clear space equal to one unit of the mark on all sides. Nothing else should enter this zone.</P></div>} right={<div className="relative mx-auto flex h-72 w-72 items-center justify-center border border-dashed border-white/40 text-accent"><Mark className="h-40 w-40" /><span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-ink px-1 t-xs text-white">x</span></div>} /> },
            ]} />
          </Card>
        </div>
      </Band>

      {[
        { id: "primary-color-usage", title: "Primary Color Usage", text: `Our ${M} should mainly appear in ${p.accent.name} with a ${p.primary.name} or White background. In small-scale uses, ${p.accent.name} can be used on ${p.ink.name} for max contrast and legibility.`, tiles: [["primary", `${p.accent.name} on ${p.primary.name}`, "text-accent"], ["white", `${p.accent.name} on White`, "text-accent"], ["ink", `${p.accent.name} on ${p.ink.name}`, "text-accent"]] },
        { id: "secondary-color-usage", title: "Secondary Color Usage", text: `If ${p.accent.name} doesn't provide enough contrast, it can appear in White. This should be used in small applications and as a supporting role to messaging or imagery.`, tiles: [["photo", "White on Photo", "text-white"], ["mid", `White on ${p.mid.name}`, "text-white"], ["primary", `White on ${p.primary.name}`, "text-white"]] },
      ].map((s) => (
        <Col key={s.id} id={s.id} className="pt-[150px]">
          <SectionHead title={s.title} light><P size="small">{s.text}</P></SectionHead>
          <div className="mt-10"><Button href={brand.downloads.all} variant="outline" size="sm" download>Download assets</Button></div>
          <Grid cols={3} className="mt-12">
            {s.tiles.map(([tone, cap, col]) => <MarkOn key={cap} tone={tone as never} caption={cap} markColor={col} />)}
          </Grid>
        </Col>
      ))}

      <div className="mt-[150px] space-y-10">
        <Card tone="primary" width="wide" id="sizing">
          <Split align="start" left={
            <div>
              <H3>Minimum Sizing</H3>
              <P size="small" className="mt-6 max-w-[300px]">To ensure legibility, we don&apos;t use our {M} at sizes smaller than 16 pixels high in digital applications or 0.25 inches high in print.</P>
              <p className="t-xs mt-8 font-bold">Print Minimum Size - 0.25 inch</p>
              <p className="t-xs mt-3 font-bold">Digital Minimum Size - 16 px</p>
              <Note className="mt-10">{M}s here are not shown to scale. Refer to pixel and inch measurements for proper sizing.</Note>
            </div>
          } right={
            <div className="space-y-6 lg:pr-24">
              <div className="border-b border-dashed border-white/60 pb-4"><Mark className="h-20 w-20 text-accent" /><p className="t-small mt-8">Print Minimum Size: 0.25 Inches</p></div>
              <div className="border-b border-dashed border-white/60 pb-4"><Mark className="h-6 w-6 text-accent" /><p className="t-small mt-8">Digital Minimum Size - 16 px</p></div>
            </div>
          } />
        </Card>
        <Card tone="ink" width="wide" id="app-icon" className="overflow-hidden">
          <Split left={
            <div>
              <H3>App Icon</H3>
              <P size="small" className="mt-6 max-w-[320px]">In our app, the {M} is always in {p.accent.name} with a {p.primary.name} background with our usual clearspace.</P>
            </div>
          } right={
            <div className="relative mx-auto h-[420px] w-[480px] max-w-full rounded-t-[60px] border-[6px] border-b-0 border-primary/70">
              <div className="absolute left-1/2 top-16 flex h-[270px] w-[270px] -translate-x-1/2 items-center justify-center rounded-[60px] bg-primary text-accent"><Mark className="h-40 w-40" /></div>
              <span className="absolute left-1/2 top-6 h-4 w-24 -translate-x-1/2 rounded-full bg-primary/70" />
            </div>
          } />
        </Card>
      </div>

      <Col id="holding-shapes" className="pt-[150px]">
        <SectionHead title="Holding Shapes" light note={`Don't use any other holding shapes for the ${M}, aside from when it's depicted in our app icon.`}>
          <P size="small">When using the {M} for pins, patches, stickers, or other merch that needs the logo to be die cut or moulded, we can use one of the holding shapes here.</P>
          <P size="small">These are limited use graphics and shouldn&apos;t be used as a substitute for the primary logo.</P>
        </SectionHead>
        <Grid cols={2} gap="gap-16" className="mt-20">
          <div><div className="flex aspect-square items-center justify-center"><div className="flex h-[420px] w-[420px] items-center justify-center rounded-[90px] bg-primary text-accent"><Mark className="h-[300px] w-[300px]" /></div></div><p className="t-small mt-6 font-bold">Form-Fitting Border</p><P size="small">Border width is equal to one unit of the mark.</P></div>
          <div><div className="flex aspect-square items-center justify-center"><div className="flex h-[440px] w-[440px] items-center justify-center rounded-full bg-primary text-accent"><Mark className="h-[260px] w-[260px]" /></div></div><p className="t-small mt-6 font-bold">Circle</p><P size="small">Clear space is equal to one unit of the mark.</P></div>
        </Grid>
      </Col>

      <Col id="donts" className="pt-[150px] pb-16">
        <H3>{M} Don&apos;ts</H3>
        <Grid cols={3} className="mt-12">
          <DontCard caption={`Don't use the ${M} in unapproved colors.`}><Mark className="h-20 w-20 text-red-400" /></DontCard>
          <DontCard caption={`Don't use a partially transparent ${M}.`}><Mark className="h-20 w-20 text-accent opacity-40" /></DontCard>
          <DontCard caption={`Don't separate or remove pieces of the ${M}.`}><div className="h-20 w-20 overflow-hidden text-accent"><Mark className="h-20 w-20 translate-x-6" /></div></DontCard>
          <DontCard caption={`Don't use individual pieces for any purpose.`}><div className="h-24 w-10 rounded-full bg-accent" /></DontCard>
          <DontCard caption={`Don't crop off the edges of the ${M}.`}><Mark className="h-56 w-56 text-accent" /></DontCard>
          <DontCard caption={`Don't use multiple colors on the ${M}.`}><div className="relative h-20 w-20"><Mark className="absolute inset-0 h-20 w-20 text-accent" /><Mark className="absolute inset-0 h-20 w-20 text-primary [clip-path:inset(0_50%_0_0)]" /></div></DontCard>
          <DontCard caption={`Don't create a pattern out of the ${M}.`}><div className="grid grid-cols-4 gap-4 text-accent">{Array.from({ length: 8 }).map((_, i) => <Mark key={i} className={`h-10 w-10 ${i % 2 ? "rotate-12" : "-rotate-12"}`} />)}</div></DontCard>
          <DontCard caption={`Don't apply our Waterfall to the ${M}.`}><div className="flex gap-3">{["text-tint", "text-mid", "text-accent", "text-primary", "text-ink"].map((c) => <Mark key={c} className={`h-10 w-10 ${c}`} />)}</div></DontCard>
          <DontCard caption={`Don't tilt or rotate or skew the ${M}.`}><Mark className="h-20 w-20 rotate-[25deg] text-accent" /></DontCard>
        </Grid>
      </Col>
    </PageShell>
  );
}
