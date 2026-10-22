import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import { Wordmark } from "@/components/Logo";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import PrevNext from "@/components/site/PrevNext";
import { links } from "@/lib/pageLinks";
import { Band, Button, Card, Col, DontCard, Grid, H3, Lead, Note, P, SectionHead, Split, WordmarkOn } from "@/components/ui";

export const metadata: Metadata = { title: "Wordmark" };
const p = brand.palette;
const rail = [
  { id: "introduction", label: "Introduction" },
  { id: "clearspace", label: "Clearspace" },
  { id: "primary-color-usage", label: "Primary Color Usage" },
  { id: "secondary-color-usage", label: "Secondary Color Usage" },
  { id: "sizing", label: "Sizing" },
  { id: "holding-shapes", label: "Holding shapes" },
  { id: "donts", label: "Don'ts" },
];

export default function Page() {
  return (
    <PageShell title="Wordmark" rail={rail} footerLabel="Download the wordmark assets" after={<PrevNext prev={links.logo} next={links.color} />}>
      <PageHero title="Wordmark">
        <div className="flex justify-center overflow-hidden whitespace-nowrap"><Wordmark className="text-[16rem] leading-none lg:text-[22rem]" /></div>
      </PageHero>

      <Col id="introduction" className="pt-[150px] pb-[150px]">
        <Lead>
          <p>Our wordmark is {brand.name}&apos;s secondary logo, inspired by the heritage of our name and the lettering that first carried it.</p>
          <p>It&apos;s a distinct and ownable piece of {brand.name}&apos;s visual legacy, made more modern for today&apos;s world.</p>
        </Lead>
        <div className="mt-12"><Button href={brand.downloads.all} size="sm" download>{brand.downloads.label}</Button></div>
      </Col>

      <Band tone="primary" className="!pb-0">
        <Split left={
          <div>
            <H3>Overview</H3>
            <div className="mt-6 max-w-[310px] space-y-4">
              <P size="small">While our {brand.markShort} can be used as a standalone logo, our wordmark can&apos;t be used without our {brand.markShort} present in the same application. In layouts with limited space, like an extremely narrow banner ad, we don&apos;t need to include the wordmark.</P>
              <P size="small">Our wordmark is a custom piece of artwork, not just the word &ldquo;{brand.name}&rdquo; in {brand.fontName}. Use as shown here, never alter or recreate.</P>
            </div>
            <Note className="mt-10">The weight of our wordmark matches the Bold weight of {brand.fontHeadline}.</Note>
          </div>
        } right={<div className="flex justify-center py-24"><Wordmark className="text-[8rem]" /></div>} />
        <div className="-ml-[calc(var(--content-x)-var(--rail-w)-24px)] lg:-mr-[var(--content-r)] lg:mr-6 mt-6 pb-20">
          <Card tone="ink" width="inner" id="clearspace">
            <H3>Clearspace</H3>
            <div className="mt-6 max-w-[520px] space-y-4">
              <P size="small">The clearspace of our wordmark is equal to half the height of the letter &ldquo;{brand.name[0]}&rdquo;.</P>
              <P size="small">This space helps maintain legibility and impact, and keeps it clear of any visual clutter.</P>
            </div>
            <div className="relative mt-16 grid grid-cols-[60px_1fr_60px] grid-rows-[60px_1fr_60px] border border-white/40 text-white/40">
              {Array.from({ length: 9 }).map((_, i) => <span key={i} className={`border border-white/25 ${i === 4 ? "flex items-center justify-center py-6" : ""}`}>{i === 4 && <Wordmark className="text-[7rem] text-white/40" />}</span>)}
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-3 text-xs text-ink">x</span>
            </div>
          </Card>
        </div>
      </Band>

      <Col id="primary-color-usage" className="pt-[150px]">
        <SectionHead title="Primary Color Usage">
          <P size="small">Our wordmark primarily appears in {p.primary.name} on White backgrounds, or in White on {p.primary.name} backgrounds.</P>
          <P size="small">These are our most iconic colorways and should be used wherever possible.</P>
        </SectionHead>
        <Grid cols={2} className="mt-12">
          <div><WordmarkOn tone="white" caption={`${p.primary.name} on White`} wmColor="text-primary" /><div className="mt-4"><Button href={brand.downloads.all} variant="outline" size="sm" download>Download in {p.primary.name}</Button></div></div>
          <div><WordmarkOn tone="primary" caption={`White on ${p.primary.name}`} /><div className="mt-4"><Button href={brand.downloads.all} variant="outline" size="sm" download>Download in White</Button></div></div>
        </Grid>
      </Col>

      <Col id="secondary-color-usage" className="pt-[150px]">
        <SectionHead title={<>Secondary<br />Color Usage</>} note={`In the case of photographs with lighter backgrounds, our ${p.primary.name} wordmark may provide better contrast — please use your best judgment to ensure legibility.`}>
          <P size="small">When applying our wordmark over dark backgrounds or photography, we use white for max contrast and legibility.</P>
        </SectionHead>
        <Grid cols={2} className="mt-12">
          <WordmarkOn tone="ink" caption={p.ink.name} />
          <WordmarkOn tone="photo" caption="White on Photo" />
        </Grid>
      </Col>

      <div className="pt-[150px]">
        <Card tone="primary" width="content" id="sizing">
          <H3>Minimum Sizing</H3>
          <div className="mt-6 max-w-[780px] space-y-4">
            <P size="small">Our wordmark exists in two sizes at different scales. Our standard wordmark is the default version and should be used most.</P>
            <P size="small">Our small-use wordmark is a unique piece of art that has been optimised for legibility and fidelity at small scales. They&apos;re not interchangeable. Don&apos;t substitute it for the main wordmark. It should always be used with great care. If in doubt, go the standard wordmark route!</P>
          </div>
          <p className="t-xs mt-10 font-bold">1. Standard Minimum Size 0.25 inch or 24px</p>
          <p className="t-xs mt-2 font-bold">2. Small-Use Minimum Size 0.15 inch or 14px</p>
          <Note className="mt-10">Wordmarks here are not shown to scale. Refer to pixel and inch measurements for proper sizing.</Note>
          <div className="mx-auto mt-20 max-w-[560px]">
            <div className="flex items-end justify-between border-b border-dashed border-white/60 pb-8"><Wordmark className="text-[7rem]" /><span className="t-xs">Standard ①</span></div>
            <div className="mt-10 flex items-end justify-between border-b border-dashed border-white/60 pb-4"><Wordmark className="text-[2rem]" /><span className="t-xs">Small Use ②</span></div>
          </div>
        </Card>
      </div>

      <Col id="holding-shapes" className="pt-[150px]">
        <SectionHead title="Holding Shapes" light note="Don't use any other holding shapes for our wordmark including circles, squares, or ovals.">
          <P size="small">When using the wordmark for pins, patches, stickers, or other merch that needs the logo to be die cut or moulded, we can use one of the holding shapes here.</P>
          <P size="small">These are limited use graphics and shouldn&apos;t be used as a substitute for the primary wordmark.</P>
        </SectionHead>
        <Grid cols={2} gap="gap-10" className="mt-20">
          <div><div className="flex h-40 items-center"><span className="rounded-[28px] bg-primary px-6 py-3 text-white"><Wordmark className="text-[5rem]" /></span></div><p className="t-small mt-8 font-bold">Form-Fitting Border</p><P size="small">Border width is equal to the interior arch of the letters.</P></div>
          <div><div className="flex h-40 items-center"><span className="rounded-2xl bg-primary px-10 py-5 text-white"><Wordmark className="text-[5rem]" /></span></div><p className="t-small mt-8 font-bold">Rounded Rectangle</p><P size="small">Clear space is equal to the width of one letter.</P></div>
        </Grid>
      </Col>

      <Col id="donts" className="pt-[150px] pb-16">
        <H3>Wordmark Don&apos;ts</H3>
        <Grid cols={3} className="mt-12">
          <DontCard caption="Don't use the wordmark in unapproved colors."><Wordmark className="text-[3rem] text-red-400" /></DontCard>
          <DontCard tone="primary" caption="Don't make the wordmark partially transparent."><Wordmark className="text-[3rem] text-white/40" /></DontCard>
          <DontCard tone="ink" caption="Don't use on incorrect background colors."><Wordmark className="text-[3rem] text-primary" /></DontCard>
          <DontCard tone="primary" caption="Don't crop off pieces of the wordmark."><Wordmark className="translate-y-10 text-[5rem] text-white" /></DontCard>
          <DontCard caption="Don't rotate our wordmark."><Wordmark className="-rotate-90 text-[2.5rem] text-primary" /></DontCard>
          <DontCard tone="primary" caption="Don't outline the wordmark."><span className="font-display text-[3rem] font-bold text-transparent [-webkit-text-stroke:1px_white]">{brand.name}</span></DontCard>
          <DontCard caption="Don't stretch the wordmark."><Wordmark className="scale-x-150 text-[3rem] text-primary" /></DontCard>
          <DontCard tone="primary" caption="Don't add effects to the wordmark."><Wordmark className="text-[3rem] text-white drop-shadow-[6px_6px_0_rgba(0,0,0,0.6)]" /></DontCard>
          <DontCard caption="Don't re-typeset the wordmark."><span className="font-body text-[3rem] font-normal text-primary">{brand.name}</span></DontCard>
        </Grid>
      </Col>
    </PageShell>
  );
}
