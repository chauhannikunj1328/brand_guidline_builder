import Image from "next/image";
import { brand } from "@/content/brand.config";
import { Mark } from "@/components/Logo";
import { L, WordmarkArt } from "./Asset";

/* Figma "Hero Section" (40007016:7937) of the Layout page: 1075px tall, "Layout" title, then a 2042px row of
   three 670×450 example layouts (40007016:7945) centred on the page and cropped on both sides. */

/** Margin/column guides drawn over each example card: 24px edge bands with dashed inner rules, a centre gutter. */
function Guides({ band, rule, centre = true }: { band: string; rule: string; centre?: boolean }) {
  return (
    <>
      <div className={`absolute inset-y-0 left-0 w-6 border-r border-dashed ${band} ${rule}`} />
      <div className={`absolute inset-y-0 right-0 w-6 border-l border-dashed ${band} ${rule}`} />
      <div className={`absolute inset-x-0 top-0 h-6 border-b border-dashed ${band} ${rule}`} />
      <div className={`absolute inset-x-0 bottom-0 h-6 border-t border-dashed ${band} ${rule}`} />
      {centre && <div className={`absolute inset-y-0 left-1/2 w-6 -translate-x-1/2 ${band}`} />}
    </>
  );
}

function Cards() {
  return (
    <div className="flex w-[2042px] shrink-0 items-start gap-4">
      {/* 1 — white: headline + photo */}
      <div className="relative flex h-[450px] w-[670px] shrink-0 items-start gap-6 overflow-hidden bg-white p-6">
        <div className="relative flex h-full flex-1 flex-col gap-2.5">
          <div className="relative flex flex-1 items-start gap-2.5">
            <p className="flex-1 text-[40px] leading-[48px] text-grey-950">Snag it.<br />Bag it.<br />Wag it.</p>
            <Mark className="size-[35.6px] shrink-0 text-pampas-600" />
            <div className="absolute -top-6 left-[137px] h-[450px] w-6 bg-pampas-600/15" />
            <div className="absolute -top-6 left-[461px] h-[450px] w-6 bg-pampas-600/15" />
          </div>
          <WordmarkArt tone="pampas-600" className="h-[17px] w-[70.79px]" />
        </div>
        <div className="relative h-full flex-1 overflow-hidden rounded-xl">
          <Image src={`${L}/hero-photo-hiker.jpg`} alt="A hiker standing on a boulder in a misty field" fill sizes="300px" className="object-cover" />
        </div>
        <Guides band="bg-pampas-600/15" rule="border-pampas-200" />
      </div>

      {/* 2 — Pampas: big headline, wordmark, pill button */}
      <div className="relative flex h-[450px] w-[670px] shrink-0 items-start overflow-hidden bg-pampas-600 p-6">
        <div className="relative flex h-full flex-1 flex-col gap-2.5">
          <div className="flex flex-1 items-start gap-2.5">
            <p className="flex-1 text-[84px] font-light leading-[92px] text-white">{brand.name}<br />delivers.</p>
            <Mark className="size-[35.6px] shrink-0 text-white" />
          </div>
          <div className="flex items-end justify-between">
            <WordmarkArt tone="white" className="h-[26px] w-[108.27px]" />
            <span className="rounded-[120px] bg-pampas-900 px-4 py-1.5 text-base font-medium leading-6 text-white">Learn more</span>
          </div>
        </div>
        <div className="absolute inset-y-0 left-[161px] w-6 bg-white/5" />
        <div className="absolute inset-y-0 left-[485px] w-6 bg-white/5" />
        <Guides band="bg-white/5" rule="border-pampas-400" />
      </div>

      {/* 3 — Pampas 100: headline, wordmark, product shot */}
      <div className="relative flex h-[450px] w-[670px] shrink-0 items-start overflow-hidden bg-pampas-100 p-6">
        <div className="relative flex h-full flex-1 flex-col gap-2.5">
          <div className="flex flex-1 items-start gap-2.5">
            <p className="flex-1 text-[40px] font-medium leading-[48px] text-grey-950">Swimwear<br />to slay<br />your vacay.</p>
            <Mark className="size-[35.6px] shrink-0 text-pampas-800" />
          </div>
          <WordmarkArt tone="grey-950" className="h-[26px] w-[108.27px]" />
        </div>
        <Guides band="bg-white/5" rule="border-pampas-400" centre={false} />
        <div className="absolute left-[261px] top-[196px] h-[254px] w-[383px] overflow-hidden">
          <Image src={`${L}/hero-lens.png`} alt="" width={383} height={383} sizes="383px" className="absolute left-0 top-[-16.49%] h-[150.81%] w-full max-w-none" />
        </div>
      </div>
    </div>
  );
}

export default function LayoutHero() {
  return (
    <section className="relative overflow-hidden pb-14 pt-20 lg:h-[1075px] lg:pb-0 lg:pt-[270px]">
      {/* Forest backdrop (Figma BG): the shared watercolour + feathered mask, placed 4px below the hero top. */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="forest-mask absolute left-[calc(50%-900px)] top-[60px] h-[1079px] w-[1755px] origin-top scale-[0.42] lg:top-1 lg:scale-100">
          <Image src="/brand/hero-forest-1.png" alt="" fill priority sizes="1755px" className="object-cover" />
          <Image src="/brand/hero-forest-2.png" alt="" fill priority sizes="1755px" className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-pampas-100 opacity-40" />
      </div>
      <h1 className="t-h2 relative px-5 text-center text-grey-600">Layout</h1>
      <div className="relative mt-12 flex h-[248px] justify-center lg:mt-[100px] lg:h-[450px]">
        <div className="flex origin-top scale-[0.55] justify-center lg:scale-100"><Cards /></div>
      </div>
    </section>
  );
}
