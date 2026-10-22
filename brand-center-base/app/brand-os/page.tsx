import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import { Mark, Wordmark } from "@/components/Logo";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import PrevNext from "@/components/site/PrevNext";
import Tabs from "@/components/ui/Tabs";
import { links } from "@/lib/pageLinks";
import { Band, Card, Col, DontCard, Grid, H3, Lead, Note, NumBadge, NumList, P, Ph, SectionHead, Split, Verdict } from "@/components/ui";

export const metadata: Metadata = { title: "Brand OS" };
const p = brand.palette;
const rail = [
  { id: "frames", label: "Frames" }, { id: "ground-rules", label: "Ground Rules" }, { id: "frame-notes", label: "Frame Notes" }, { id: "optical-guide", label: "Optical Guide" }, { id: "frame-behaviors", label: "Frame Behaviors" },
  { id: "window", label: "Window" }, { id: "window-tips", label: "Window Tips" }, { id: "tiles", label: "Tiles" }, { id: "tile-tips", label: "Tile Tips" }, { id: "outlines", label: "Outlines" }, { id: "outline-tips", label: "Outline Tips" }, { id: "frame-donts", label: "Frame Don'ts" },
  { id: "buttons", label: "Buttons" }, { id: "styling", label: "Styling" }, { id: "button-tabs", label: "Buttons" }, { id: "button-donts", label: "Don'ts" },
];

const Pill = ({ children, outline = false, cls = "" }: { children: React.ReactNode; outline?: boolean; cls?: string }) => (
  <span className={`inline-flex items-center gap-4 rounded-full px-6 py-3 text-base ${outline ? "border border-current" : "bg-primary text-white"} ${cls}`}>{children}</span>
);
const Search = ({ cls = "" }: { cls?: string }) => <span className={`inline-flex items-center gap-3 rounded-full border border-primary px-5 py-2 text-sm text-primary ${cls}`}><svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="9" r="6" /><path d="M14 14l4 4" /></svg>sporting goods</span>;

function Behavior({ n, label, text }: { n: number; label: string; text: string }) {
  return <div><Ph label="Photo" className="aspect-[340/230] rounded-2xl" /><p className="t-xs mt-4 flex items-start gap-3"><NumBadge n={n} /><span><b>{label}</b> {text}</span></p></div>;
}
function TipGrid({ groups }: { groups: { title: string; items: { ok: boolean; text: string; art: React.ReactNode }[] }[] }) {
  return (
    <div className="mt-14 grid gap-10 md:grid-cols-2">
      {groups.map((g) => (
        <div key={g.title}><p className="t-xs font-bold">{g.title}</p><div className="mt-6 grid grid-cols-2 gap-5">{g.items.map((it) => <div key={it.text}><div className="relative aspect-[230/265] overflow-hidden border border-line bg-white"><div className="absolute inset-[6%] grid grid-cols-4 gap-[8%]">{Array.from({ length: 4 }).map((_, i) => <span key={i} className="bg-tint/50" />)}</div>{it.art}</div><Verdict ok={it.ok} className="mt-3">{it.text}</Verdict></div>)}</div></div>
      ))}
    </div>
  );
}
const Blk = ({ cls }: { cls: string }) => <span className={`absolute rounded-lg ${cls}`} />;

export default function Page() {
  return (
    <PageShell title="Brand OS" rail={rail} after={<PrevNext prev={links.layout} next={links.logo} />}>
      <PageHero title="Brand OS">
        <div className="flex items-center justify-center gap-12 overflow-hidden whitespace-nowrap">
          <span className="flex h-[150px] items-center gap-8 rounded-full bg-mid px-12 text-[3rem] text-ink">cart <span className="text-[3.5rem] font-light">+</span></span>
          <span className="flex h-[150px] items-center gap-8 rounded-full bg-white px-14 text-[3rem] text-ink"><svg viewBox="0 0 20 20" className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="9" r="6" /><path d="M14 14l4 4" /></svg>New at {brand.name}</span>
          <span className="flex h-[150px] items-center gap-8 rounded-full bg-mid px-14 text-[3rem] text-ink">Now trending</span>
        </div>
      </PageHero>

      <Col id="frames" className="pt-[150px] pb-[150px]">
        <H3>Frames</H3>
        <Lead className="mt-10"><p>Our frames are flexible and versatile containers that mimic the look and behaviour of digital tiles in a user interface.</p><p>They help focus attention on a key product or headline, or to organise multiple images into a single layout.</p></Lead>
      </Col>

      <Band tone="primary" id="ground-rules" className="!pb-0">
        <H3>Ground Rules for Frame Usage</H3>
        <P size="small" className="mt-6 max-w-[640px]">Our frames are powerful, flexible tools that can easily be overused and abused. With great power comes great responsibility!</P>
        <P size="small" className="mt-4">Whenever you&apos;re working with frames, please remember three key points:</P>
        <div className="mt-16 max-w-[900px] divide-y divide-white/40">
          {[["Less is more.", "Avoid the impulse to overuse frames. Keep the number of frames per layout to a minimum. One skillfully executed frame is more powerful than three competing ones."], ["Don't decorate.", "Frames are functional tools that exist to direct the viewers' eye to a particular focal area or to thoughtfully tell a visual story. Don't add unnecessary frames as aesthetic fillers."], ["Keep it clean.", "Alignment and spacing between frames should be neat, uniform, and intentional. Do not approach frames with a collage mentality."]].map(([t, d], i) => (
            <div key={t} className="grid items-center gap-6 py-8 lg:grid-cols-[40px_1fr_440px]"><NumBadge n={i + 1} tone="white" /><p className="font-display text-[2.5rem] font-light">{t}</p><P size="xs">{d}</P></div>
          ))}
        </div>
        <div className="-ml-[calc(var(--content-x)-var(--rail-w)-24px)] lg:-mr-[var(--content-r)] lg:mr-6 mt-24 space-y-12 pb-24">
          <Card tone="white" width="inner" id="frame-notes">
            <Tabs tabs={["Corner Radius", "Outline Weight"].map((label) => ({ label, content: (
              <Split align="start" left={<div><H3>Frame Notes</H3><p className="t-small mt-6">{label}</p><P size="small" className="mt-4">To determine the corner radius of a frame, divide its longest side by 15. This allows corners to scale proportionately across applications. Depending on the size and dimensions of your frame, this initial measurement may need to be adjusted for optical correctness.</P><P size="small" className="mt-4">When using multiple frames in a single layout, all corner radii should match the average radius measurement — not the smallest, not the largest.</P><P size="small" className="mt-4">For standard 1920x1080 presentations, we always use a predetermined corner radius of 30px.</P></div>} right={<div className="relative lg:pl-10"><div className="flex aspect-[560/330] items-center rounded-[36px] bg-tint px-12"><p className="max-w-[420px] font-display text-[1.75rem] font-light leading-tight">To determine a frame&apos;s corner radius, divide its longest side by 15.</p></div><span className="absolute left-14 top-4 t-xs">X / 15</span></div>} />
            ) }))} />
          </Card>
          <Card tone="white" width="inner" id="optical-guide">
            <Tabs tabs={["Radius", "Outline"].map((label) => ({ label, content: (
              <>
                <SectionHead title="Optical Guide"><P size="small">After establishing a corner radius using our formula, check for optical correctness using the examples shown here. If your radius is too large or too small, adjust accordingly.</P></SectionHead>
                <Grid cols={3} className="mt-12">{[["rounded-md", false, "Too Small"], ["rounded-[28px]", true, "Just Right"], ["rounded-[64px]", false, "Too Large"]].map(([r, ok, c]) => <div key={c as string}><div className={`aspect-[340/250] bg-tint ${r}`} /><Verdict ok={ok as boolean} className="mt-4">{c as string}</Verdict></div>)}</Grid>
              </>
            ) }))} />
          </Card>
        </div>
      </Band>

      <Col id="frame-behaviors" className="pt-[150px] pb-[100px]">
        <H3>Frame Behaviors</H3>
        <Lead className="mt-10"><p>Our frames are designed to interact with photography and footage by embodying three distinct behaviours:</p></Lead>
        <Grid cols={3} className="mt-12"><Behavior n={1} label="Windows" text="holds photography or footage." /><Behavior n={2} label="Tiles" text="helps ground isolated products." /><Behavior n={3} label="Outlines" text="emphasize a focal point." /></Grid>
      </Col>

      <Band tone="tint" className="!pb-0">
        {[
          { id: "window", title: "Window", text: ["We use windows to hold photography and footage. A max of three windows can be used per static layout to keep our message concise and avoid overcrowding. Images should be assembled with a common theme or message.", "Align our windows neatly to our grid. Wherever possible, they should stretch the full height or width between our margins."], list: ["Always leave clear space equal to our margin between frames and surrounding content.", "Windows may bleed off one or two edges to mimic a scrolling motion. Edges must be on opposite sides.", "Up to three windows may be used in a single static layout — no more."], big: <div className="relative aspect-[340/450] overflow-hidden bg-primary p-5 text-white"><p className="font-display text-[2rem] font-light leading-tight">Headline<br />goes here.</p><p className="t-xs mt-3 font-bold">And subhead<br />goes here.</p><Wordmark className="mt-6 block text-xl" /><Mark className="absolute right-4 top-4 h-6 w-6 text-accent" /><Ph label="" className="absolute bottom-0 left-4 right-4 h-[45%] rounded-t-xl" /></div>, side: [<div key="a" className="relative aspect-[340/100] overflow-hidden bg-white p-3 text-ink"><p className="text-sm">Headline<br />goes here.</p><Wordmark className="absolute bottom-2 left-3 text-xs text-primary" /><Mark className="absolute left-[38%] top-2 h-4 w-4 text-accent" /><Ph label="" className="absolute right-3 top-3 h-[75%] w-[35%] rounded-lg" /></div>, <div key="b" className="relative aspect-[340/270] overflow-hidden bg-ink p-4 text-white"><p className="mt-12 font-display text-2xl font-light">Headline<br />goes here.</p><p className="t-xs mt-2">And subhead goes here</p><Wordmark className="absolute bottom-4 left-4 text-base" /><Mark className="absolute right-4 top-4 h-5 w-5 text-accent" /><Ph label="" className="absolute right-4 top-12 h-[35%] w-[40%] rounded-lg" /><Ph label="" className="absolute bottom-4 right-4 h-[35%] w-[40%] rounded-lg" /></div>] },
        ].map((s) => (
          <div key={s.id} id={s.id} className="scroll-mt-24">
            <Split align="start" left={<div><H3>{s.title}</H3>{s.text.map((t) => <P key={t} size="small" className="mt-4">{t}</P>)}<div className="mt-8"><NumList items={s.list} /></div></div>} right={<div className="grid gap-6 md:grid-cols-2"><div><NumBadge n={1} /><div className="mt-3">{s.big}</div></div><div className="space-y-6"><div><NumBadge n={2} /><div className="mt-3">{s.side[0]}</div></div><div><NumBadge n={3} /><div className="mt-3">{s.side[1]}</div></div></div></div>} />
          </div>
        ))}
        <div className="-ml-[calc(var(--content-x)-var(--rail-w)-24px)] lg:-mr-[var(--content-r)] lg:mr-6 mt-28">
          <Card tone="white" width="inner" id="window-tips">
            <SectionHead title="Window Tips"><P size="small">When using windows in layout, always follow these tips for consistent application:</P></SectionHead>
            <TipGrid groups={[
              { title: "Alignment", items: [{ ok: true, text: "Do align windows into neat, tidy blocks that occupy the full width or height of a layout.", art: <><Blk cls="left-[6%] bottom-[6%] h-[45%] w-[42%] bg-mid/60" /><Blk cls="right-[6%] bottom-[6%] h-[45%] w-[42%] bg-mid/60" /></> }, { ok: false, text: "Don't apply frames in a way that feels haphazard, scattered, or misaligned.", art: <><Blk cls="left-[10%] top-[10%] h-[25%] w-[35%] bg-red-200" /><Blk cls="right-[8%] top-[35%] h-[30%] w-[40%] bg-red-200" /><Blk cls="left-[30%] bottom-[8%] h-[20%] w-[30%] bg-red-200" /></> }] },
              { title: "Cropping", items: [{ ok: true, text: "Do crop windows off opposite edges of a layout to mimic scrolling or swiping.", art: <><Blk cls="left-[6%] -top-[5%] h-[25%] w-[88%] bg-mid/60" /><Blk cls="left-[6%] -bottom-[5%] h-[25%] w-[88%] bg-mid/60" /></> }, { ok: false, text: "Don't crop windows off adjacent layout edges.", art: <><Blk cls="left-[8%] top-[8%] h-[35%] w-[50%] bg-red-200" /><Blk cls="-right-[5%] -bottom-[5%] h-[35%] w-[50%] bg-red-200" /></> }] },
            ]} />
          </Card>
        </div>

        <div id="tiles" className="mt-40 scroll-mt-24">
          <Split align="start" left={<div><H3>Tiles</H3><P size="small" className="mt-4">Tiles mimic the aesthetic and behaviour of a digital shopping experience. Up to five tiles can be used per static asset if they are neatly aligned and uniform in size. More tiles can be used in motion.</P><P size="small" className="mt-4">Tiles are applied over White backgrounds, to feel more digitally-native while allowing for a wide variety of tile colors.</P><div className="mt-8"><NumList items={["Tiles may float in the center of a layout when featuring a single product.", "Up to five tiles may be used in a single static layout — keep them tidy and uniform in size.", "A single tile may be combined with a single window, where appropriate."]} /></div></div>} right={
            <div className="grid gap-6 md:grid-cols-2"><div><NumBadge n={1} /><div className="relative mt-3 aspect-[340/450] border border-line bg-white p-5 text-ink"><p className="font-display text-[2rem] font-light leading-tight">Up your<br />game.</p><Mark className="absolute right-4 top-4 h-6 w-6 text-accent" /><div className="absolute left-8 right-8 top-[35%] aspect-square rounded-2xl bg-mid" /><Search cls="absolute bottom-6 left-1/2 -translate-x-1/2 !text-[10px] !py-1" /></div></div><div className="space-y-6"><div><NumBadge n={2} /><div className="relative mt-3 aspect-[340/100] border border-line bg-white p-3"><p className="text-sm">Fall<br />haul.</p><div className="absolute right-3 top-3 flex h-[70%] gap-2">{["bg-primary", "bg-ink", "bg-mid"].map((c) => <span key={c} className={`aspect-square h-full rounded-lg ${c}`} />)}</div></div></div><div><NumBadge n={3} /><div className="relative mt-3 aspect-[340/270] border border-line bg-white p-4"><p className="font-display text-2xl font-light">Grill out, chill out.</p><p className="t-xs mt-1">Same-day delivery on groceries</p><Mark className="absolute right-4 top-4 h-5 w-5 text-accent" /><div className="absolute inset-x-4 bottom-4 grid h-[50%] grid-cols-2 gap-3"><span className="rounded-lg bg-mid" /><span className="rounded-lg bg-tint" /></div></div></div></div></div>
          } />
        </div>
        <div className="-ml-[calc(var(--content-x)-var(--rail-w)-24px)] lg:-mr-[var(--content-r)] lg:mr-6 mt-28">
          <Card tone="white" width="inner" id="tile-tips">
            <Split align="start" left={<div><H3>Tiles Tips</H3><P size="small" className="mt-6">When using tiles in layout, follow these tips for consistent application:</P><div className="mt-10"><NumList items={["A product name or price can be set inside a tile, aligned to an interior corner. Leave generous padding, roughly equal to the margin of the layout. Text must be in " + p.ink.name + " or White.", "Products are shot straight-on or overhead, resting on (or floating above) a surface. Always include natural shadows for grounding and depth.", "A product may extend past the edge of its tile, where appropriate. Products should occupy the same visual space, regardless of actual size.", "Choose tile colors to complement products or to represent specific seasonal moments. Maintain sufficient contrast between a product and its background."]} /></div></div>} right={<div className="relative mx-auto aspect-[560/500] max-w-[560px] rounded-3xl bg-mid p-8 lg:ml-auto"><p className="text-lg">Women&apos;s Ultra Stride<br />Running Shoe</p><div className="absolute bottom-6 left-1/2 h-[45%] w-[85%] -translate-x-1/2 rounded-[40%] bg-white shadow-xl" /><span className="absolute left-1/2 -top-3 -translate-x-1/2"><NumBadge n={1} /></span><span className="absolute -bottom-3 right-10"><NumBadge n={2} /></span><span className="absolute -right-3 top-1/3"><NumBadge n={3} /></span></div>} />
            <div className="mt-24"><SectionHead title="Evergreen Colors"><P size="small">These are our preferred tile colors, used regardless of season or category.</P></SectionHead><Grid cols={4} gap="gap-8" className="mt-12">{["bg-tint", "bg-mid", "bg-accent", "bg-primary"].map((c) => <div key={c} className={`aspect-square rounded-3xl ${c}`}><Ph label="" className="mx-auto mt-[15%] h-[70%] w-[50%] rounded-xl" /></div>)}</Grid></div>
            <div className="mt-24"><SectionHead title={<>Seasonal Colors<br /><span className="font-normal">Example Only</span></>}><P size="small">For a moment like &ldquo;Mother&apos;s Day&rdquo;, choose tile colors from that occasion&apos;s specified seasonal palette.</P></SectionHead><Grid cols={4} gap="gap-8" className="mt-12">{["#6f6f6f", "#9a9a9a", "#c9c9c9", "#7c7c7c"].map((c) => <div key={c} className="aspect-square rounded-3xl" style={{ background: c }}><Ph label="" className="mx-auto mt-[15%] h-[70%] w-[50%] rounded-xl" /></div>)}</Grid></div>
          </Card>
        </div>

        <div id="outlines" className="mt-40 scroll-mt-24">
          <Split align="start" left={<div><H3>Outlines</H3><P size="small" className="mt-4">Outlines are used over lifestyle photography or footage to focus attention on a key product or moment. Only one outline may be used per layout. They can&apos;t be applied with other frames or frame behaviours.</P><P size="small" className="mt-4">Outlines are particularly effective in motion, as shown in examples 2 and 3. They are often used with price lockups, product names, or buttons.</P><div className="mt-8"><NumList items={["When aligning text to an outline, always leave clear space equal to our margin.", "Outlines may be flexibly positioned to best highlight product within a scene.", "An outline may interact with the subject of its focus, for added depth and dynamism."]} /></div></div>} right={
            <div className="grid gap-6 md:grid-cols-2"><div><NumBadge n={1} /><Ph label="Photo" className="mt-3 aspect-[340/450]"><div className="absolute inset-[18%] rounded-3xl border border-white/80" /><Mark className="absolute left-4 top-4 h-6 w-6" /><Wordmark className="absolute bottom-4 left-4 text-xl" /></Ph></div><div className="space-y-6"><div><NumBadge n={2} /><Ph label="Photo" className="mt-3 aspect-[340/180]"><div className="absolute left-[35%] top-[30%] h-[40%] w-[30%] rounded-xl border border-white/80" /></Ph></div><div><NumBadge n={3} /><Ph label="Photo" className="mt-3 aspect-[340/180]"><div className="absolute left-[40%] top-[25%] h-[45%] w-[25%] rounded-xl border border-white/80" /></Ph></div></div></div>
          } />
        </div>
        <div className="-ml-[calc(var(--content-x)-var(--rail-w)-24px)] lg:-mr-[var(--content-r)] lg:mr-6 mt-28 pb-8">
          <Card tone="white" width="inner" id="outline-tips">
            <SectionHead title="Outline Tips"><P size="small">When using outlines in layout, always follow these tips for consistent application:</P></SectionHead>
            <TipGrid groups={[
              { title: "Color", items: [{ ok: true, text: `Do apply frames in White or ${p.ink.name} to match text.`, art: <Blk cls="left-[20%] top-[15%] h-[45%] w-[55%] border border-white bg-mid/40" /> }, { ok: false, text: "Don't apply frames in any other colors.", art: <Blk cls="left-[20%] top-[15%] h-[45%] w-[55%] border border-primary bg-mid/40" /> }] },
              { title: "Interaction", items: [{ ok: true, text: "Do allow frames to interact with subjects or products.", art: <Blk cls="left-[25%] top-[10%] h-[50%] w-[50%] border border-ink bg-mid/40" /> }, { ok: false, text: "Don't awkwardly overlap subjects or products, especially faces.", art: <Blk cls="left-[25%] top-[10%] h-[50%] w-[50%] border border-ink bg-red-200/60" /> }] },
            ]} />
          </Card>
        </div>
      </Band>

      <Col id="frame-donts" className="pt-[100px]">
        <H3>Frame Don&apos;ts</H3>
        <Grid cols={4} gap="gap-6" className="mt-12">
          {["Don't apply frames within other frames.", "Don't collage or overlap frames.", "Don't use multiple outlines per layout.", "Don't mix all out frame styles together.", "Don't use solid frames as decorative elements behind text or headlines.", "Don't use solid frames behind product in lifestyle imagery or footage.", "Don't use outlines as decorative elements around text or headlines.", `Don't use outlines in any color other than ${p.ink.name} or White.`].map((c, i) => (
            <div key={c}><div className={`relative aspect-[290/360] overflow-hidden border border-line ${i % 2 ? "bg-white" : "bg-mid/40"}`}><span className="absolute inset-[15%] rounded-2xl border border-ink/60" />{i > 3 && <span className="absolute inset-[30%] rounded-xl bg-primary/70" />}</div><Verdict ok={false} className="mt-4">{c}</Verdict></div>
          ))}
        </Grid>
      </Col>

      <Col id="buttons" className="pt-[150px] pb-[150px]">
        <H3>Buttons</H3>
        <Lead className="mt-10"><p>Our &ldquo;Brand OS&rdquo; buttons are graphic elements that mimic the look of a digital shopping experience in non-digital comms.</p><p>By using buttons in static or motion assets, our design reflects a digital-first shopping experience and reinforces our tech-forward positioning.</p></Lead>
      </Col>

      <Band tone="primary" id="styling">
        <H3>Styling</H3>
        <div className="mt-6 max-w-[640px] space-y-4">
          <P size="small">Our buttons are pill-shaped with fully rounded ends, appearing in both outlined and solid formats. Outline weight should optically match the weight of our type (set in {brand.fontName} Regular) and any symbols included (magnifying glass, plus sign, etc).</P>
          <P size="small">These are our default colorways, which prioritise {p.primary.name} for solid buttons. Over {p.primary.name} backgrounds, {p.mid.name} buttons can be used. Our search bar is the only button that may appear in solid white to reflect familiar UI cues.</P>
        </div>
        <Note className="mt-8">This is not an exhaustive list of all possible buttons. Additional buttons can be created within each category, provided they follow these styling rules.</Note>
        <div className="mt-16 flex flex-wrap gap-6"><Pill cls="!bg-mid !text-ink">Add to cart <span className="text-xl">+</span></Pill><Pill outline cls="text-white">Shop now</Pill><span className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-ink"><svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="9" r="6" /><path d="M14 14l4 4" /></svg>New at {brand.name}</span></div>
      </Band>

      <div className="pt-16">
        <Card tone="tint" width="wide" id="button-tabs">
          <Tabs tabs={["CTA Buttons", "Action Buttons", "Search Buttons", "Accent Buttons"].map((label) => ({ label, content: (
            <Split align="start" left={<div><H3 className="!text-2xl">{label}</H3><p className="t-small mt-4">{label}</p><P size="small" className="mt-4">{label} may be used in place of standard typeset CTAs when a more digital aesthetic or when our goal is to drive viewers to our website. {label} always use sentence case capitalisation.</P><div className="mt-8"><NumList items={["Button may be placed in the lower right corner, sized to match the height of our wordmark.", "Button may be placed in the lower left corner beneath our headline.", `When using ${p.primary.name} backgrounds, our solid button color switches to ${p.mid.name}.`]} /></div></div>} right={
              <div className="grid gap-6 md:grid-cols-2"><div><NumBadge n={1} /><Ph label="Photo" className="mt-3 aspect-[340/450]"><p className="absolute left-4 top-4 font-display text-[2rem] font-light leading-tight">Headline<br />goes here.</p><Mark className="absolute right-4 top-4 h-6 w-6 text-accent" /><Wordmark className="absolute bottom-4 left-4 text-xl" /><span className="absolute bottom-4 right-4 rounded-full bg-primary px-3 py-1 text-[9px]">Shop now</span></Ph></div><div className="space-y-6"><div><NumBadge n={2} /><div className="relative mt-3 aspect-[340/100] bg-white p-3 text-ink"><p className="text-sm">Headline<br />goes here.</p><span className="absolute bottom-3 left-3 rounded-full bg-primary px-2 py-0.5 text-[8px] text-white">Shop now</span><Mark className="absolute left-[38%] top-2 h-4 w-4 text-accent" /><Ph label="" className="absolute right-3 top-3 h-[75%] w-[40%] rounded-md" /></div></div><div><NumBadge n={3} /><div className="relative mt-3 aspect-[340/270] bg-primary p-4 text-white"><p className="mt-6 font-display text-2xl font-light">Headline<br />goes here.</p><p className="t-xs mt-2">And subhead goes here</p><Wordmark className="absolute bottom-4 left-4 text-base" /><Mark className="absolute right-4 top-4 h-5 w-5 text-accent" /><span className="absolute bottom-4 right-4 rounded-full bg-mid px-3 py-1 text-[9px] text-ink">Shop now</span></div></div></div></div>
            } />
          ) }))} />
        </Card>
      </div>

      <Col id="button-donts" className="pt-[150px] pb-16">
        <H3>Button Don&apos;ts</H3>
        <Grid cols={3} className="mt-12">
          <DontCard caption="Don't use rectangular buttons."><span className="rounded-md bg-primary px-6 py-3 text-sm text-white">Shop Now</span></DontCard>
          <DontCard caption="Don't recolor solid search buttons to any colors other than white."><span className="rounded-full bg-primary px-6 py-3 text-sm text-white">🔍 sporting goods</span></DontCard>
          <DontCard caption={`Don't recolor outlined buttons to any colors other than ${p.ink.name} or white.`}><Search cls="!border-accent !text-accent" /></DontCard>
          <DontCard tone="primary" caption="Don't set button text in bold or all-caps."><span className="rounded-full bg-mid px-6 py-3 text-sm font-bold uppercase text-ink">Shop now</span></DontCard>
          <DontCard tone="primary" caption="Don't use buttons in solid white aside from our search buttons."><span className="rounded-full bg-white px-6 py-3 text-sm text-ink">Same-day delivery ✓</span></DontCard>
          <DontCard tone="primary" caption="Don't mismatch weight of outline and symbol."><span className="rounded-full border border-white px-6 py-3 text-sm text-white">Add to cart <b className="text-xl">+</b></span></DontCard>
          <DontCard caption="Don't make an accent button larger than its frame's corner radius."><div className="relative h-full w-full"><span className="absolute inset-0 top-6 rounded-tr-[70px] bg-mid" /><span className="absolute right-6 top-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary text-3xl text-primary">+</span></div></DontCard>
          <DontCard caption="Don't make an accent button smaller than its frame's corner radius."><div className="relative h-full w-full"><span className="absolute inset-0 top-6 rounded-tr-[70px] bg-mid" /><span className="absolute right-10 top-14 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary text-xl text-primary">+</span></div></DontCard>
          <DontCard caption="Don't recolor outlined accent buttons."><div className="relative h-full w-full"><span className="absolute inset-0 top-6 rounded-tr-[70px] bg-mid" /><span className="absolute right-8 top-12 flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-primary text-2xl text-white">+</span></div></DontCard>
        </Grid>
      </Col>
    </PageShell>
  );
}
