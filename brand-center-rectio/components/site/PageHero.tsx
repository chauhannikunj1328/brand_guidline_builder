import Image from "next/image";
import type { ReactNode } from "react";
import { Mark } from "@/components/Logo";

/* Forest backdrop shared by every hero (Figma "Hero Section" → BG): watercolour forest masked with a
   feathered shape (hero-mask.svg), then a 40% Pampas-100 wash. Geometry matches the 1440px frame. */
export function ForestBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className="forest-mask absolute left-[calc(50%-877.5px)] top-[-60px] h-[1079px] w-[1755px] origin-top scale-[0.42] lg:top-[-179px] lg:scale-100"
      >
        <Image src="/brand/hero-forest-1.png" alt="" fill priority sizes="1755px" className="object-cover" />
        <Image src="/brand/hero-forest-2.png" alt="" fill priority sizes="1755px" className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-pampas-100 opacity-40" />
    </div>
  );
}

/** Hero frame: 815px tall on desktop, content centred on the forest. */
export function HeroFrame({ children, className = "justify-start pt-20" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`relative flex min-h-[560px] flex-col items-center overflow-hidden px-5 pb-20 lg:h-[815px] lg:px-[120px] ${className}`}>
      <ForestBackground />
      <div className="relative flex w-full flex-col items-center">{children}</div>
    </section>
  );
}

/** Spark (180px inside a 210px frame) above a large Space Grotesk title — Home and Spark pages. */
export function SparkHero({ title }: { title: ReactNode }) {
  return (
    <HeroFrame>
      <div className="flex flex-col items-center gap-12 lg:gap-[90px]">
        <span className="flex size-[150px] items-center justify-center lg:size-[210px]"><Mark className="size-[86%] text-black" /></span>
        <h1 className="t-hero text-center text-grey-950">{title}</h1>
      </div>
    </HeroFrame>
  );
}

/** Title-only hero (56px Geist medium, grey-600) with an optional visual under it — Color, Typography, other pages. */
export default function PageHero({ title, children }: { title: string; children?: ReactNode }) {
  return (
    <HeroFrame className="justify-center pt-20">
      <h1 className="t-h2 text-center text-grey-600">{title}</h1>
      {children && <div className="mt-16 w-full lg:mt-[100px]">{children}</div>}
    </HeroFrame>
  );
}

/** Row of tiles under a hero title (kept for pages not yet redesigned). */
export function HeroStrip({ children }: { children: ReactNode }) {
  return <div className="flex justify-center gap-4 overflow-hidden">{children}</div>;
}
