import type { ReactNode } from "react";
import { brand } from "@/content/brand.config";
import { Mark } from "@/components/Logo";
import { Check } from "@/components/ui";
import Photo from "@/components/ui/Photo";

/* Brand Voice "Examples" (Figma 40007074:6282, 40007074:9339, 40007079:9871): three ad / social mock-ups per principle,
   each with a green check below. Fixed 10–14px type inside is deliberate: these are miniature posts, not page copy. */

const SIZES = "(min-width: 1024px) 323px, 100vw";

const Cta = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center justify-center rounded-lg bg-pampas-700 px-2 py-1.5 text-sm font-medium leading-5 text-white">{children}</span>
);

const Search = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <span className={`inline-flex items-center gap-2 whitespace-nowrap rounded-lg px-1.5 py-1 text-[10px] leading-4 ${className}`}>
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-3.5" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
    {children}
  </span>
);

/** Social post header: Spark, brand name, optional "Sponsored". */
function PostHead({ text, sponsored }: { text: string; sponsored?: boolean }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 items-center justify-center"><Mark className="size-[86%] text-black" /></span>
        <div className="flex flex-col gap-0.5">
          <p className="text-sm leading-5 text-black">{brand.name}</p>
          {sponsored && <p className="text-[8px] leading-[10px] text-grey-600">Sponsored</p>}
        </div>
      </div>
      <p className="text-[10px] leading-4 text-grey-600">{text}</p>
    </div>
  );
}

/** Post with a header above a 348px image. */
function Post({ text, src, children }: { text: string; src: string; children?: ReactNode }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-t-2xl border border-grey-300">
      <div className="bg-white p-3.5"><PostHead text={text} /></div>
      <div className="relative min-h-[348px] flex-1 overflow-hidden">
        <Photo src={src} sizes={SIZES} />
        {children}
      </div>
    </div>
  );
}

/** Full-bleed image ad: copy on top, button pinned by the layout of `children`. */
function ImageAd({ src, crop, className = "", children }: { src: string; crop?: React.CSSProperties; className?: string; children: ReactNode }) {
  return (
    <div className={`relative flex h-full min-h-[460px] flex-col overflow-hidden p-5 ${className}`}>
      <div className="absolute inset-0 overflow-hidden"><Photo src={src} crop={crop} sizes={SIZES} /></div>
      <div className="relative flex flex-1 flex-col items-start justify-between">{children}</div>
    </div>
  );
}

/** Product card: rounded 312px image with a headline, note and button underneath. */
function ProductCard({ src, title, note, cta, gap = "gap-6", pb = "pb-10" }: { src: string; title: string; note: string[]; cta: string; gap?: string; pb?: string }) {
  return (
    <div className={`flex h-full flex-col justify-end overflow-hidden rounded-t-2xl border border-grey-300 bg-white px-3.5 pt-3.5 ${pb}`}>
      <div className={`flex flex-col ${gap}`}>
        <div className="relative h-[312px] overflow-hidden rounded-[20px]"><Photo src={src} sizes={SIZES} /></div>
        <div className="flex flex-col items-start gap-5">
          <div className="space-y-1.5">
            <p className="text-2xl font-light leading-8 text-black">{title}</p>
            <p className="font-[family-name:var(--font-secondary)] text-xs leading-4 text-grey-600">{note[0]}<br />{note[1]}</p>
          </div>
          <Cta>{cta}</Cta>
        </div>
      </div>
    </div>
  );
}

const headline = "text-[2rem] font-light leading-10";

export const principle1Examples: ReactNode[] = [
  <Post key="a" text="From daily staples to weekly refills, get what your household uses most sent to your door automatically." src="voice/ex1-team.png">
    <p className={`absolute left-5 top-5 text-white ${headline}`}>Run out?<br />no way!</p>
    <div className="absolute left-5 top-[271px] text-white">
      <p className="text-[10px] leading-4 uppercase">{brand.name}</p>
      <p className="text-sm leading-5">Home Refills<br />52 count</p>
    </div>
    <span className="absolute left-[calc(50%+40px)] top-[calc(50%+70px)] -translate-x-1/2 -translate-y-1/2"><Cta>Subscribe</Cta></span>
  </Post>,
  <ImageAd key="b" src="voice/ex1-runner.png">
    <div className="flex flex-col items-start gap-3">
      <p className={`text-white ${headline}`}>Swimwear<br />to slay<br />your vacay</p>
      <Cta>Shop now</Cta>
    </div>
  </ImageAd>,
  <div key="c" className="flex h-full flex-col gap-8 overflow-hidden rounded-t-2xl border border-grey-300 bg-white p-3.5">
    <PostHead sponsored text={`"Halloween without candy? Terrifying. Tame the creatures that come crawling with extra treats delivered in as fast as one hour. Restrictions and fees apply."`} />
    <div className="flex flex-col items-center gap-5">
      <p className="text-center text-[1.75rem] font-light leading-8 text-black">From “boo” to “woo”!</p>
      <div className="flex w-[227px] max-w-full flex-col gap-3.5">
        <div className="relative h-[156px] overflow-hidden rounded-lg"><Photo src="voice/ex1-meeting.png" sizes="227px" /></div>
        <div className="relative h-[156px] overflow-hidden rounded-lg"><Photo src="voice/ex1-talk.png" sizes="227px" /></div>
      </div>
    </div>
  </div>,
];

export const principle2Examples: ReactNode[] = [
  <ImageAd key="a" src="voice/ex2-man.png" crop={{ height: "100%", left: "-6.67%", top: 0, width: "122.15%" }}>
    <div className="space-y-3 text-black">
      <p className="text-sm leading-5">Easter is March 31</p>
      <p className={headline}>Get<br />crackin’</p>
    </div>
    <Cta>Shop now</Cta>
  </ImageAd>,
  <Post key="b" text="Get outside like an 80s childhood with family fun and delivery as soon as today." src="voice/ex2-family.png">
    <Search className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-pampas-200 text-[#18181b]">Summer family fun inspo</Search>
  </Post>,
  <ProductCard key="c" src="voice/ex2-woman.png" title="She’s going out tonight" note={["Let’s be real: getting", "dressed up is half the fun"]} cta="Shop now" />,
];

export const principle3Examples: ReactNode[] = [
  <ImageAd key="a" src="voice/ex3-field.png">
    <div className="space-y-3 text-white">
      <p className={headline}>Calling all<br />outdoor explorers</p>
      <p className="text-sm leading-5">Save on all you need to hit<br />the trails, catch some rays,<br />&amp; maybe a few fish, too.</p>
    </div>
    <Cta>Let’s go</Cta>
  </ImageAd>,
  <Post key="b" text={`The hype is real. Shop the latest and greatest from your feed on ${brand.name} today.`} src="voice/ex3-target.png">
    <Search className="absolute left-1/2 top-[calc(50%-110px)] -translate-x-1/2 -translate-y-1/2 border border-grey-500 text-grey-800">New at {brand.name}</Search>
  </Post>,
  <ProductCard key="c" src="voice/ex3-gym.png" title="Gym days, your way" note={["Better activewear = better workouts.", "It’s simple math."]} cta="Shop now" gap="gap-[30px]" pb="pb-5" />,
];

/** The "Examples" heading and 3-up grid. */
export function Examples({ items }: { items: ReactNode[] }) {
  return (
    <div className="space-y-6">
      <h3 className="text-[2rem] font-medium leading-10 text-grey-950">Examples</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it, i) => (
          <figure key={i} className="flex flex-col gap-3">
            <div className="flex-1">{it}</div>
            <Check />
          </figure>
        ))}
      </div>
    </div>
  );
}
