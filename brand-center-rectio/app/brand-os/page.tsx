import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import { RowHero } from "@/components/site/PageHero";
import ExploreAssets, { NEXT_UP } from "@/components/site/ExploreAssets";
import PillTabs from "@/components/brand-os/PillTabs";
import { Check } from "@/components/ui";
import { AddIcon, ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = { title: "Brand OS" };

const sg = "font-[family-name:var(--font-secondary)]";

const rail = [
  {
    group: "Frames",
    id: "frames",
    items: [
      { id: "ground-rules", label: "Ground Rules" },
      { id: "frame-notes", label: "Frame Notes" },
      { id: "optical-guide", label: "Optical Guide" },
      { id: "frame-behaviors", label: "Frame Behaviors" },
      { id: "window", label: "Window" },
      { id: "window-tips", label: "Window Tips" },
      { id: "tiles", label: "Tiles" },
      { id: "tile-tips", label: "Tile Tips" },
      { id: "outlines", label: "Outlines" },
      { id: "outline-tips", label: "Outline Tips" },
      { id: "frame-donts", label: "Frame Don’ts" },
    ],
  },
  {
    group: "Buttons",
    id: "buttons",
    items: [
      { id: "styling", label: "Styling" },
      { id: "button-types", label: "Button Types" },
      { id: "button-donts", label: "Don’ts" },
    ],
  },
];

/** Mock-up exported from Figma; keeps its aspect ratio and scales with the column. */
function Art({ src, w, h, alt = "", sizes }: { src: string; w: number; h: number; alt?: string; sizes?: string }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: `${w} / ${h}` }}>
      <Image src={`/brand/os/${src}.png`} alt={alt} fill sizes={sizes ?? `${w}px`} className="object-cover" />
    </div>
  );
}

function Num({ n }: { n: number }) {
  return <span className={`flex size-6 shrink-0 items-center justify-center rounded-full border-[0.5px] border-pampas-600 text-xs font-medium leading-4 text-grey-950 ${sg}`}>{n}</span>;
}

function Steps({ items, className = "text-[10px] leading-4" }: { items: string[]; className?: string }) {
  return (
    <ol className="space-y-2">
      {items.map((t, i) => <li key={t} className={`flex items-start gap-2 text-grey-950 ${className}`}><Num n={i + 1} /><span className="pt-1">{t}</span></li>)}
    </ol>
  );
}

function Verdict({ ok, children }: { ok: boolean; children: ReactNode }) {
  return (
    <p className="flex items-start gap-2 text-xs leading-4 text-grey-700">
      {ok ? <Check className="size-6" /> : <span className="flex size-6 shrink-0 items-center justify-center"><Image src="/brand/voice/x-filled.svg" alt="" width={18} height={18} /></span>}
      <span className="pt-1">{children}</span>
    </p>
  );
}

/** Heading + paragraphs + numbered points on the left, two columns of mock-ups on the right. */
function Behavior({ id, title, text, steps, left, right }: { id: string; title: string; text: string[]; steps: string[]; left: ReactNode; right: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-6 flex flex-col gap-8 p-0 lg:flex-row lg:justify-between lg:px-[30px]">
      <div className="space-y-6 lg:w-[313px] lg:shrink-0">
        <div className="space-y-4">
          <h2 className="text-[2rem] font-medium leading-10 text-grey-950">{title}</h2>
          <div className="space-y-4 text-base leading-6 text-grey-700">{text.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
        <Steps items={steps} />
      </div>
      <div className="grid flex-1 gap-5 sm:grid-cols-2 lg:max-w-[674px]">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </div>
  );
}

const card = "rounded-[32px] bg-white p-6 lg:p-[50px]";
const cardHead = "space-y-4 lg:max-w-[379px]";
const h2 = "text-[2rem] font-medium leading-10 text-grey-950";
const body = "text-base leading-6 text-grey-700";

const opticalRadius = [
  { src: "optical-radius-small", w: 323, ok: false, label: "Too Small" },
  { src: "optical-radius-right", w: 325, ok: true, label: "Just Right" },
  { src: "optical-radius-large", w: 325, ok: false, label: "Too Large" },
];
const opticalOutline = [
  { src: "optical-outline-thin", w: 323, ok: false, label: "Too Thin" },
  { src: "optical-outline-right", w: 331, ok: true, label: "Just Right" },
  { src: "optical-outline-thick", w: 325, ok: false, label: "Too Thick" },
];

function Optical({ text, items }: { text: string; items: typeof opticalRadius }) {
  return (
    <div className="flex flex-col gap-10">
      <div className={cardHead}>
        <h2 className={h2}>Optical Guide</h2>
        <p className={body}>{text}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((o) => (
          <figure key={o.src} className="space-y-3">
            <Art src={o.src} w={o.w} h={260} sizes="(min-width: 1024px) 325px, 100vw" />
            <Verdict ok={o.ok}>{o.label}</Verdict>
          </figure>
        ))}
      </div>
    </div>
  );
}

function FrameNote({ label, text, src, h }: { label: string; text: string[]; src: string; h: number }) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
      <div className="space-y-4 lg:w-[364px] lg:shrink-0">
        <h2 className={h2}>Frame Notes</h2>
        <div className="space-y-3">
          <p className="text-lg font-medium leading-6 text-grey-950">{label}</p>
          <div className={`space-y-3 ${body}`}>{text.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
      </div>
      <div className="w-full lg:max-w-[519px]"><Art src={src} w={519} h={h} sizes="519px" /></div>
    </div>
  );
}

const specs = [
  { src: "spec-cta", alt: "CTA buttons are text-only, used for short statements or signoffs, with text in sentence case. Example: Shop now." },
  { src: "spec-action", alt: "Action buttons combine text and symbols to aid in product storytelling, with text in sentence case. Example: Add to cart." },
  { src: "spec-search", alt: "Search buttons are white or outlined and mimic a digital search bar, with text in lowercase. Example: Home decor." },
  { src: "spec-accent", alt: "Accent buttons are symbol-only and enhance the digital appearance of our frames. Example: plus sign." },
];

const buttonTabs = [
  {
    label: "CTA Buttons",
    text: "CTA buttons may be used in place of standard typeset CTAs when a more digital aesthetic or when our goal is to drive viewers to our website. CTA buttons always use sentence case capitalization.",
    steps: ["CTA button may be placed in the lower right corner, sized to match the height of our wordmark.", "CTA button may be placed in the lower left corner beneath our headline.", "When using Pampas backgrounds, our solid CTA button color switches to Vanilla."],
    art: ["cta-1", "cta-2"],
  },
  {
    label: "Action Buttons",
    text: "Action buttons pair with photos to tell product stories. They may list the names of individual products or speak to more emotional product benefits. A well-written action button may stand alone as a headline. Use sentence case capitalization, unless naming a specific product or brand.",
    steps: ["A maximum of three action buttons may be used per layout to highlight different products or brands.", "A single action button may be centered within a layout, especially over a white background.", "When placed over a photo, action buttons may be arranged organically to best suit the image."],
    art: ["action-1", "action-2"],
  },
  {
    label: "Search Buttons",
    text: `Search buttons mimic the action of searching for a product on ${brand.name}.com. They use lowercase capitalization to simulate a user typing, unless naming a specific product or brand. Only one search button may be used per layout.`,
    steps: ["Search buttons only appear in solid white or outlined formats to mimic familiar UI cues.", "Search buttons may be organically placed over an image or centered within layout.", "Search buttons may be used in combination with action buttons. Limit yourself to one of each."],
    art: ["search-1", "search-2"],
  },
  {
    label: "Accent Buttons",
    text: "Accent buttons are added to frames to enhance the feeling of a digital shopping experience. They’re sized according to the radius of their frames, nestling into the corner with a smooth margin. The examples here indicate an “Add to Cart” action.",
    steps: ["Accent buttons are placed in the corner of product tiles or outlined frames.", "One accent button may be used per frame.", "When used in an outlined frame, the weight of an accent button should match the weight of its frame."],
    art: ["accent-1", "accent-2"],
  },
];

const buttonDonts = [
  "Don’t use rectangular buttons.",
  "Don’t recolor solid search buttons to any colors other than white.",
  "Don’t recolor outlined buttons to any colors other than Black or white.",
  "Don’t set button text in bold or all-caps.",
  "Don’t use buttons in solid white aside from our search buttons.",
  "Don’t mismatch weight of outline and symbol.",
  "Don’t make an accent button larger than its frame’s corner radius.",
  "Don’t make an accent button smaller than its frame’s corner radius.",
  "Don’t recolor outlined accent buttons.",
];

export default function Page() {
  const tagWords = brand.tagline.split(" ");
  const taglineTile = "text-[1.75rem] leading-[40px] text-white";
  const frameDonts: { caption: string; art: ReactNode }[] = [
    { caption: "Don’t apply frames within other frames.", art: <Art src="fdont-1" w={244} h={278} /> },
    { caption: "Don’t collage or overlap frames.", art: <Art src="fdont-2" w={244} h={278} /> },
    { caption: "Don’t use multiple outlines per layout.", art: <Art src="fdont-3" w={244} h={278} /> },
    {
      caption: "Don’t mix all of our frame styles together.",
      art: (
        <div className="relative">
          <Art src="fdont-4" w={244} h={278} />
          <p className="absolute inset-x-[5%] bottom-[4%] top-[64%] rounded-xl border border-grey-300 bg-white p-2.5 text-[1.05rem] leading-[1.25] text-black">{brand.taglineLines[0]} {brand.taglineLines[1]}</p>
        </div>
      ),
    },
    {
      caption: "Don’t use solid frames as decorative elements behind text or headlines.",
      art: (
        <div className="flex items-stretch bg-pampas-100 p-3" style={{ aspectRatio: "244 / 278" }}>
          <p className={`flex-1 rounded-xl bg-pampas-600 p-3 ${taglineTile}`}>{tagWords.join(" ")}</p>
        </div>
      ),
    },
    { caption: "Don’t use solid frames behind product in lifestyle imagery or footage.", art: <Art src="fdont-6" w={244} h={278} /> },
    {
      caption: "Don’t use outlines as decorative elements around text or headlines.",
      art: (
        <div className="flex items-stretch bg-pampas-600 p-3" style={{ aspectRatio: "244 / 278" }}>
          <p className={`flex-1 rounded-xl border border-white/80 p-3 ${taglineTile}`}>{tagWords.join(" ")}</p>
        </div>
      ),
    },
    { caption: "Don’t use outlines in any color other than Black or White.", art: <Art src="fdont-8" w={244} h={278} /> },
  ];

  return (
    <PageShell
      title="Brand OS"
      rail={rail}
      hero={
        <RowHero title="Brand OS" gap="gap-5 lg:gap-10">
          {[
            { label: "Add to Cart", icon: <AddIcon className="size-8 lg:size-12" />, cls: "bg-pampas-100" },
            { label: `New at ${brand.name}`, cls: "border border-pampas-200 bg-white", search: true },
            { label: "Now Trending", icon: <ArrowRightIcon className="size-8 lg:size-12" />, cls: "bg-pampas-100" },
          ].map((p) => (
            <span key={p.label} className={`flex shrink-0 items-center gap-4 whitespace-nowrap rounded-[80px] py-4 pl-6 pr-8 text-2xl text-pampas-700 lg:gap-6 lg:py-6 lg:pl-10 lg:pr-[60px] lg:text-[2.5rem] lg:leading-[48px] ${p.cls}`}>
              {p.search && (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-8 lg:size-12" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              )}
              {p.label}
              {p.icon}
            </span>
          ))}
        </RowHero>
      }
      after={<ExploreAssets items={NEXT_UP} heading={null} />}
    >
      <section id="frames" className="scroll-mt-6 space-y-[60px] bg-white px-5 pb-20 pt-24 lg:px-[70px] lg:pt-[140px]">
        <h2 className="t-section text-black">Frames</h2>
        <div className="t-intro max-w-[863px] space-y-12">
          <p>Our frames are flexible and versatile containers that mimic the look and behavior of digital tiles in a user interface.</p>
          <p>They help focus attention on a key product or headline, or to organize multiple images into a single layout.</p>
        </div>
      </section>

      <section id="ground-rules" className="scroll-mt-6 flex flex-col gap-20 bg-pampas-100 px-5 py-16 lg:p-[70px]">
        <div className="space-y-8">
          <h2 className={`text-[2.5rem] font-medium leading-[48px] text-pampas-950 ${sg}`}>Ground Rules for Frame Usage</h2>
          <div className="max-w-[740px] space-y-4 text-xl leading-7 text-grey-700">
            <p>Our frames are powerful, flexible tools that can easily be overused and abused. With great power comes great responsibility!</p>
            <p>Whenever you’re working with frames, please remember three key points:</p>
          </div>
        </div>
        <div className="divide-y divide-grey-300">
          {[
            ["Less is more.", "Avoid the impulse to overuse frames. Keep the number of frames per layout to a minimum. One skillfully executed frame is more powerful than three competing ones."],
            ["Don’t decorate.", "Frames are functional tools that exist to direct the viewers’ eye to a particular focal area or to thoughtfully tell a visual story. Don’t add unnecessary frames as aesthetic fillers."],
            ["Keep it clean.", "Alignment and spacing between frames should be neat, uniform, and intentional. Do not approach frames with a collage mentality."],
          ].map(([t, d], i) => (
            <div key={t} className="flex flex-col gap-4 py-6 first:pt-0 last:pb-0 lg:flex-row lg:items-center lg:gap-5">
              <div className="flex items-center gap-5 lg:contents">
                <Num n={i + 1} />
                <p className="text-[2.5rem] leading-[48px] text-pampas-950 lg:w-[394px] lg:shrink-0">{t}</p>
              </div>
              <p className={`lg:max-w-[448px] ${body}`}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-20 bg-pampas-100 p-4 lg:px-[30px] lg:py-[70px]">
        <div id="frame-notes" className={`scroll-mt-6 ${card}`}>
          <PillTabs
            tabs={[
              {
                label: "Corner Radius",
                content: (
                  <FrameNote
                    label="Corner Radius"
                    src="notes-radius"
                    h={495}
                    text={[
                      "To determine the corner radius of a frame, divide its longest side by 15. This allows corners to scale proportionately across applications. Depending on the size and dimensions of your frame, this initial measurement may need to be adjusted for optical correctness.",
                      "When using multiple frames in a single layout, all corner radii should match the average radius measurement — not the smallest, not the largest.",
                      "For standard 1920x1080 presentations, we always use a predetermined corner radius of 30px.",
                    ]}
                  />
                ),
              },
              {
                label: "Outline Weight",
                content: (
                  <FrameNote
                    label="Outline Weight"
                    src="notes-outline"
                    h={449}
                    text={[
                      "To determine the correct outline weight for a frame, divide its longest side by 150. Depending on the size and proportion of your frame, this number may need to be adjusted for optical correctness.",
                      "For standard 1920x1080 presentations, we always use a predetermined stroke weight of 1pt.",
                    ]}
                  />
                ),
              },
            ]}
          />
        </div>
        <div id="optical-guide" className={`scroll-mt-6 ${card}`}>
          <PillTabs
            tabs={[
              { label: "Radius", content: <Optical items={opticalRadius} text="After establishing a corner radius using our formula, check for optical correctness using the examples shown here. If your radius is too large or too small, adjust accordingly." /> },
              { label: "Outline", content: <Optical items={opticalOutline} text="After establishing an outline weight using our formula, check for optical correctness using the examples shown here. If your outline is too thin or too thick, adjust accordingly." /> },
            ]}
          />
        </div>
      </section>

      <section id="frame-behaviors" className="scroll-mt-6 space-y-6 bg-white px-5 py-20 lg:px-[70px]">
        <div className="space-y-4 text-[2rem] leading-10">
          <h2 className="font-medium text-grey-950">Frame Behaviors</h2>
          <p className="max-w-[597px] font-light text-grey-600">Our frames are designed to interact with photography and footage by embodying three distinct behaviors:</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { src: "behavior-window", w: 323, label: "Window", text: "holds photography or footage." },
            { src: "behavior-tiles", w: 325, label: "Tiles", text: "helps ground isolated products." },
            { src: "behavior-outlines", w: 325, label: "Outlines", text: "emphasize a focal point." },
          ].map((b, i) => (
            <figure key={b.src} className="space-y-2.5">
              <Art src={b.src} w={b.w} h={200} sizes="(min-width: 1024px) 325px, 100vw" />
              <figcaption className={`flex items-center gap-2 text-xs leading-4 text-grey-600 ${sg}`}>
                <Num n={i + 1} />
                <span><b className="font-[family-name:var(--font-body)] font-medium text-pampas-700">{b.label}</b> {b.text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-20 bg-pampas-100 p-4 lg:px-[30px] lg:pb-[70px] lg:pt-[120px]">
        <Behavior
          id="window"
          title="Window"
          text={[
            "We use windows to hold photography and footage. A max of three windows can be used per static layout to keep our message concise and avoid overcrowding. Images should be assembled with a common theme or message.",
            "Align our windows neatly to our grid. Wherever possible, they should stretch the full height or width between our margins.",
          ]}
          steps={["Always leave clear space equal to our margin between frames and surrounding content.", "Windows may bleed off one or two edges to mimic a scrolling motion. Edges must be on opposite sides.", "Up to three windows may be used in a single static layout—no more."]}
          left={<Art src="window-1" w={327} h={432} />}
          right={<Art src="window-2" w={327} h={432} />}
        />

        <div id="window-tips" className={`scroll-mt-6 flex flex-col gap-10 ${card}`}>
          <div className={cardHead}>
            <h2 className={h2}>Window Tips</h2>
            <p className={body}>When using windows in layout, always follow these tips for consistent application:</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "wtip-1", head: "Alignment", ok: true, text: "Do align windows into neat, tidy blocks that occupy the full width or height of a layout." },
              { src: "wtip-2", head: "", ok: false, text: "Don’t apply frames in a way that feels haphazard, scattered, or misaligned." },
              { src: "wtip-3", head: "Cropping", ok: true, text: "Do crop windows off opposite edges of a layout to mimic scrolling or swiping." },
              { src: "wtip-4", head: "", ok: false, text: "Don’t crop windows off adjacent layout edges." },
            ].map((t) => (
              <figure key={t.src} className="space-y-3">
                <p aria-hidden={!t.head} className={`text-sm font-medium leading-5 text-grey-700 ${t.head ? "" : "invisible hidden lg:block"}`}>{t.head || "–"}</p>
                <Art src={t.src} w={239} h={330} />
                <Verdict ok={t.ok}>{t.text}</Verdict>
              </figure>
            ))}
          </div>
        </div>

        <Behavior
          id="tiles"
          title="Tiles"
          text={[
            "Tiles mimic the aesthetic and behavior of a digital shopping experience. Up to five tiles can be used per static asset if they are neatly aligned and uniform in size. More tiles can be used in motion.",
            "Tiles are applied over White backgrounds, to feel more digitally-native while allowing for a wide variety of tile colors.",
          ]}
          steps={["Tiles may float in the center of a layout when featuring a single product.", "Up to five tiles may be used in a single static layout—keep them tidy and uniform in size.", "A single tile may be combined with a single window, where appropriate."]}
          left={<Art src="tiles-1" w={326} h={442} />}
          right={<Art src="tiles-2" w={328} h={442} />}
        />

        <div id="tile-tips" className={`scroll-mt-6 flex flex-col gap-20 ${card}`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
            <div className="space-y-6 lg:w-[368px]">
              <div className="space-y-4">
                <h2 className={h2}>Tiles Tips</h2>
                <p className={body}>When using tiles in layout, follow these tips for consistent application:</p>
              </div>
              <Steps
                className="text-xs leading-4"
                items={[
                  "A product name or price can be set inside a tile, aligned to an interior corner. Leave generous padding, roughly equal to the margin of the layout. Text must be in Black or White.",
                  "Products are shot straight-on or overhead, resting on (or floating above) a surface. Always include natural shadows for grounding and depth.",
                  "A product may extend past the edge of its tile, where appropriate. Products should occupy the same visual space, regardless of actual size.",
                  "Choose tile colors to complement products or to represent specific seasonal moments. Maintain sufficient contrast between a product and its background.",
                ]}
              />
            </div>
            <div className="w-full lg:max-w-[430px]"><Art src="tiles-tips" w={430} h={404} alt="A product tile on a Pampas background, with the title set in an interior corner" /></div>
          </div>
          {[
            { title: <>Evergreen Colors</>, text: "These are our preferred tile colors, used regardless of season or category.", prefix: "evergreen" },
            { title: <>Seasonal Colors<br /><span className="font-normal text-grey-600">Example Only</span></>, text: "For a moment like “Mother’s Day”, choose tile colors from that occasion’s specified seasonal palette.", prefix: "seasonal" },
          ].map((g) => (
            <div key={g.prefix} className="space-y-8">
              <div className="space-y-4 lg:max-w-[417px]">
                <h3 className={h2}>{g.title}</h3>
                <p className={body}>{g.text}</p>
              </div>
              <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => <Art key={i} src={`${g.prefix}-${i}`} w={242} h={228} />)}
              </div>
            </div>
          ))}
        </div>

        <Behavior
          id="outlines"
          title="Outlines"
          text={[
            "Outlines are used over lifestyle photography or footage to focus attention on a key product or moment. Only one outline may be used per layout. They can’t be applied with other frames or frame behaviors.",
            "Outlines are particularly effective in motion, as shown in examples 2 and 3. They are often used with price lockups, product names, or buttons.",
          ]}
          steps={["When aligning text to an outline, always leave clear space equal to our margin.", "Outlines may be flexibly positioned to best highlight product within a scene.", "An outline may interact with the subject of its focus, for added depth and dynamism."]}
          left={<Art src="outline-1" w={327} h={456} />}
          right={<Art src="outline-2" w={327} h={456} />}
        />

        <div id="outline-tips" className={`scroll-mt-6 flex flex-col gap-10 ${card}`}>
          <div className={cardHead}>
            <h2 className={h2}>Outline Tips</h2>
            <p className={body}>When using outlines in layout, always follow these tips for consistent application:</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "otip-1", head: "Color", ok: true, text: "Do apply frames in White or Black to match text." },
              { src: "otip-2", head: "", ok: false, text: "Don’t apply frames in any other colors." },
              { src: "otip-3", head: "Interaction", ok: true, text: "Do allow frames to interact with subjects or products." },
              { src: "otip-4", head: "", ok: false, text: "Don’t awkwardly overlap subjects or products, especially faces." },
            ].map((t) => (
              <figure key={t.src} className="space-y-3">
                <p aria-hidden={!t.head} className={`text-sm font-medium leading-5 text-grey-700 ${t.head ? "" : "invisible hidden lg:block"}`}>{t.head || "–"}</p>
                <Art src={t.src} w={239} h={278} />
                <Verdict ok={t.ok}>{t.text}</Verdict>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="frame-donts" className="scroll-mt-6 space-y-10 bg-white px-5 py-20 lg:px-[70px]">
        <h2 className="t-section text-black">Frame Don’ts</h2>
        <div className="grid gap-x-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {frameDonts.map((d) => (
            <figure key={d.caption} className="space-y-3">
              {d.art}
              <Verdict ok={false}>{d.caption}</Verdict>
            </figure>
          ))}
        </div>
      </section>

      <section id="buttons" className="scroll-mt-6 space-y-[60px] bg-white px-5 py-20 lg:px-[70px]">
        <h2 className="t-section text-black">Buttons</h2>
        <div className="t-intro max-w-[792px] space-y-12">
          <p>Our “Brand OS” buttons are graphic elements that mimic the look of a digital shopping experience in non-digital comms.</p>
          <p>By using buttons in static or motion assets, our design reflects a digital-first shopping experience and reinforces our tech-forward positioning.</p>
        </div>
      </section>

      <section id="styling" className="scroll-mt-6 flex flex-col gap-20 bg-pampas-100 px-5 py-16 lg:p-[70px]">
        <div className="space-y-8">
          <h2 className={`text-[2.5rem] font-medium leading-[48px] text-pampas-950 ${sg}`}>Styling</h2>
          <div className="max-w-[740px] space-y-4 text-xl leading-7 text-grey-700">
            <p>Our buttons are pill-shaped with fully rounded ends, appearing in both outlined and solid formats. Outline weight should optically match the weight of our type (set in {brand.fontName} Regular) and any symbols included (magnifying glass, plus sign, etc).</p>
            <p>These are our default colorways, which prioritize Pampas for solid buttons. Over Pampas backgrounds, Vanilla buttons can be used. Our search bar is the only button that may appear in solid white to reflect familiar UI cues.</p>
          </div>
          <div className={`max-w-[363px] space-y-2 text-sm leading-5 text-grey-700 ${sg}`}>
            <p className="font-medium text-grey-950">Note</p>
            <p>This is not an exhaustive list of all possible buttons. Additional buttons can be created within each category, provided they follow these styling rules.</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {specs.map((s) => <div key={s.src} className="overflow-hidden rounded-3xl"><Art src={s.src} w={498} h={286} alt={s.alt} sizes="(min-width: 1024px) 498px, 100vw" /></div>)}
        </div>
      </section>

      <section id="button-types" className="scroll-mt-6 bg-white p-4 lg:px-[30px] lg:py-[70px]">
        <div className="rounded-[32px] bg-pampas-100 p-6 lg:p-10">
          <PillTabs
            tabs={buttonTabs.map((t) => ({
              label: t.label,
              content: (
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                  <div className="space-y-6 lg:w-[314px] lg:shrink-0">
                    <div className="space-y-4">
                      <h2 className={h2}>{t.label}</h2>
                      <p className={body}>{t.text}</p>
                    </div>
                    <Steps items={t.steps} />
                  </div>
                  <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:max-w-[674px]">
                    <Art src={t.art[0]} w={326} h={442} />
                    <Art src={t.art[1]} w={328} h={442} />
                  </div>
                </div>
              ),
            }))}
          />
        </div>
      </section>

      <section id="button-donts" className="scroll-mt-6 space-y-10 bg-white px-5 py-20 lg:px-[70px]">
        <h2 className="t-section text-black">Button Don’ts</h2>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {buttonDonts.map((c, i) => (
            <figure key={c} className="space-y-3">
              <Art src={`bdont-${i + 1}`} w={331} h={278} sizes="(min-width: 1024px) 331px, 100vw" />
              <Verdict ok={false}>{c}</Verdict>
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
