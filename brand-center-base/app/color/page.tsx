import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import { Mark, Wordmark } from "@/components/Logo";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import PrevNext from "@/components/site/PrevNext";
import SwatchCard from "@/components/ui/SwatchCard";
import { links } from "@/lib/pageLinks";
import { Button, Check, Col, DontCard, Grid, H3, H4, Lead, P, SectionHead, Split, type Tone } from "@/components/ui";

export const metadata: Metadata = { title: "Color" };
const p = brand.palette;
const rail = [
  { id: "primary-palette", label: "Primary Palette" },
  { id: "color-pairings", label: "Color Pairings" },
  { id: "waterfall", label: "Waterfall" },
  { id: "web-accessibility", label: "Web Accessibility" },
  { id: "donts", label: "Don'ts" },
];

function Pairing({ tone, special }: { tone: Tone | "photo" | "photo-light"; special?: boolean }) {
  const light = tone === "primary" || tone === "ink" || tone === "photo";
  const bg = tone === "photo" ? "bg-[linear-gradient(135deg,#8a8a8a,#3a3a3a)]" : tone === "photo-light" ? "bg-[linear-gradient(135deg,#f4f4f4,#c9c9c9)]" : { primary: "bg-primary", ink: "bg-ink", tint: "bg-tint", mid: "bg-mid", white: "bg-white" }[tone];
  return (
    <div className={`relative aspect-[500/320] rounded-[var(--radius-card)] p-6 ${bg} ${light ? "text-white" : "text-ink"}`}>
      <span className="font-display text-[3.5rem] font-light leading-none">Aa</span>
      <Mark className="absolute right-6 top-6 h-8 w-8 text-accent" />
      <Wordmark className={`absolute bottom-5 left-6 text-[2rem] ${light ? "text-white" : "text-primary"}`} />
      {special && <span className="absolute bottom-6 right-6 t-small">Special Use*</span>}
    </div>
  );
}

function A11y({ a, b, small = true }: { a: { hex: string; name: string }; b: { hex: string; name: string }; small?: boolean }) {
  const light = (h: string) => ["#FFFFFF", p.tint.hex, p.mid.hex, p.accent.hex].includes(h.toUpperCase());
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col gap-4"><Check /><Check ok={small} /></div>
      <div className="flex w-[160px] overflow-hidden rounded-xl border border-ink">
        {[a, b].map((c) => (
          <div key={c.hex} className={`flex-1 p-2 ${light(c.hex) ? "text-ink" : "text-white"}`} style={{ background: c.hex }}>
            <p className="text-[8px]">{c.hex}</p><p className="mt-1 text-sm leading-tight">Large<br />Text</p><p className="mt-3 text-[8px]">Normal Text</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <PageShell title="Color" rail={rail} footerLabel="Download the color assets" after={<PrevNext prev={links.wordmark} next={links.typography} />}>
      <PageHero title="Color">
        <div className="flex justify-center gap-4 overflow-hidden">
          {[p.white, p.tint, p.accent, p.ink, p.mid, p.primary, p.tint].map((c, i) => <div key={i} className="h-[200px] w-[210px] shrink-0 rounded-[var(--radius-card)]" style={{ background: c.hex }} />)}
        </div>
      </PageHero>

      <Col className="pt-[150px] pb-[150px]">
        <Lead><p>Our color palette provides distinctiveness and differentiation through the consistent use of {brand.name}&apos;s most iconic and recognisable colors: {p.primary.name} and {p.accent.name}.</p></Lead>
        <div className="mt-12"><Button href={brand.downloads.all} size="sm" download>{brand.downloads.label}</Button></div>
      </Col>

      <Col id="primary-palette">
        <SectionHead title="Primary Palette"><P size="small">Our primary palette are the colors that are most instantly recognisable as {brand.name}: {p.primary.name}, {p.accent.name}, and White.</P></SectionHead>
        <div className="mt-14 grid gap-3.5 md:grid-cols-3">
          <SwatchCard s={p.primary} light /><SwatchCard s={p.white} light={false} /><SwatchCard s={p.accent} light={false} />
        </div>
        <P size="small" className="mt-16 max-w-[560px]">Our accent tones bring warmth and depth to our system. {p.ink.name} is used for typography, while {p.mid.name} and {p.tint.name} help with hierarchy in presentations, graphs, infographics, and charts.</P>
        <div className="mt-14 grid gap-3.5 md:grid-cols-3">
          <SwatchCard s={p.tint} light={false} short /><SwatchCard s={p.mid} light={false} short /><SwatchCard s={p.ink} light short />
        </div>
      </Col>

      <div className="band mt-[140px] bg-tint text-ink">
        <div className="band-inner py-40">
          <div id="color-pairings" className="scroll-mt-24">
            <SectionHead title="Color Pairings" note={`${p.primary.name} type is reserved for high-impact, low-content applications such as video end cards, supers, or signage. We don't use ${p.primary.name} for applications with small, dense, or detailed copy.`}>
              <P>When combining different pieces in a layout, we use the combos shown here for consistency and legibility.</P>
            </SectionHead>
            <div className="mt-20 max-w-[560px]"><H4>Solid Background</H4><P size="small" className="mt-4">Over solid backgrounds, we prefer our iconic and recognisable colorways. These should be used for most communications.</P></div>
            <Grid cols={2} gap="gap-7" className="mt-14"><Pairing tone="white" /><Pairing tone="white" special /><Pairing tone="primary" /><Pairing tone="ink" /></Grid>
            <div className="mt-20 max-w-[560px]"><H4>Photography</H4><P size="small" className="mt-4">Over photography, we default to using White type and White logos. In the case of photos with lighter backgrounds, our {p.primary.name} wordmark and {p.accent.name} {brand.markShort} may provide better contrast — please use your best judgment for legibility.</P></div>
            <Grid cols={2} gap="gap-7" className="mt-14"><Pairing tone="photo" /><Pairing tone="photo-light" /></Grid>
          </div>
          <div id="waterfall" className="mt-24 scroll-mt-24">
            <Split align="center" left={<div><H4>Waterfall</H4><P size="small" className="mt-4">In some instances, we apply a waterfall treatment that organises our secondary palette (plus White) into a gradient. This treatment can be applied to help establish hierarchy when organising information into charts, tables, or graphs.</P></div>} right={
              <div className="overflow-hidden rounded-[var(--radius-card)] border border-ink lg:ml-auto lg:max-w-[560px]">
                {[p.white, p.tint, p.mid, p.primary, p.ink].map((c, i) => (
                  <div key={c.name} className={`flex h-[115px] items-center gap-3 px-6 t-small ${i >= 3 ? "text-white" : "text-ink"}`} style={{ background: c.hex }}>{i + 1}&nbsp;&nbsp;{c.name}</div>
                ))}
              </div>
            } />
          </div>
        </div>
      </div>

      <Col id="web-accessibility" className="pt-[150px]">
        <Split align="start" left={
          <div className="lg:pt-16">
            <H3>Web Accessibility</H3>
            <div className="mt-8 space-y-4">
              <P size="small">The Web Content Accessibility Guidelines (WCAG) are standards that help make the internet accessible to everyone, including people with disabilities. With color, they tell us the amount of visual contrast required between a piece of text and the background to maintain legibility for users with visual impairments.</P>
              <P size="small">When picking colors for web, we aim to comply with WCAG 2.0 standards for both large and normal text sizes. Large text is 14pt (18.66px) when set in a bold weight, or 18pt (24px) when set in a lighter weight. Any text beneath these sizes is considered normal text.</P>
              <P size="small">We always want to achieve a AAA rating, which is the highest possible compliance level (noted in green). {p.primary.name} text is not AAA compliant at small sizes and should be avoided.</P>
            </div>
          </div>
        } right={
          <div className="lg:pl-16">
            <p className="t-small font-bold">Fully compliant</p>
            <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6"><A11y a={p.white} b={p.ink} /><A11y a={p.ink} b={p.tint} /><A11y a={p.ink} b={p.mid} /><A11y a={p.ink} b={p.accent} /></div>
            <p className="t-small mt-12 font-bold">Partially compliant</p>
            <div className="mt-6"><A11y a={p.white} b={p.primary} small={false} /></div>
          </div>
        } />
      </Col>

      <Col id="donts" className="pt-[150px] pb-16">
        <H3>Color Don&apos;ts</H3>
        <Grid cols={3} className="mt-12">
          <DontCard caption="Don't use the wordmark in unapproved colors."><Wordmark className="text-[3rem] text-accent" /></DontCard>
          <DontCard tone="primary" caption="Don't use the wordmark at partial opacity."><Wordmark className="text-[3rem] text-white/40" /></DontCard>
          <DontCard tone="tint" caption="Don't use low-contrast colors for the wordmark."><Wordmark className="text-[3rem] text-white" /></DontCard>
          <DontCard tone="primary" caption="Don't use text colors that inhibit legibility."><span className="font-display text-[3rem] font-light text-ink">Aa Bb Cc</span></DontCard>
          <DontCard tone="mid" caption="Don't use text colors that cause visual discomfort."><span className="font-display text-[3rem] font-light text-accent">Aa Bb Cc</span></DontCard>
          <DontCard tone="ink" caption="Don't combine too many type colors in layout."><span className="font-display text-[3rem] font-light"><span className="text-accent">Aa</span> <span className="text-mid">Bb</span> <span className="text-white">Cc</span></span></DontCard>
          <DontCard tone="ink" caption={`Don't recolor individual pieces of the ${brand.markShort}.`}><div className="relative h-20 w-20"><Mark className="absolute inset-0 h-20 w-20 text-accent" /><Mark className="absolute inset-0 h-20 w-20 text-red-500 [clip-path:inset(0_0_50%_50%)]" /></div></DontCard>
          <DontCard tone="primary" caption={`Don't use the ${brand.markShort} in unapproved colorways.`}><Mark className="h-20 w-20 text-mid" /></DontCard>
          <DontCard tone="tint" caption={`Don't use the ${brand.markShort} on low-contrast colors.`}><Mark className="h-20 w-20 text-mid" /></DontCard>
        </Grid>
      </Col>
    </PageShell>
  );
}
