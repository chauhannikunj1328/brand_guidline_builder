import type { ReactNode } from "react";

/* Inner-page hero: 900px tall primary band, centred light title, optional visual strip below. */
export default function PageHero({ title, children, tall = false }: { title: string; children?: ReactNode; tall?: boolean }) {
  return (
    <section className={`relative flex flex-col items-center overflow-hidden bg-primary text-white ${tall ? "min-h-[900px]" : "min-h-[600px] lg:min-h-[900px]"}`}>
      <h1 className={`t-hero px-5 text-center ${children ? "pt-40 lg:pt-[268px]" : "pt-56 lg:pt-[390px]"}`}>{title}</h1>
      {children && <div className="mt-16 w-full lg:mt-20">{children}</div>}
    </section>
  );
}

/** Row of edge-bleeding tiles under the hero title (345 × 240, 20px gap). */
export function HeroStrip({ children }: { children: ReactNode }) {
  return <div className="flex justify-center gap-5 overflow-hidden">{children}</div>;
}
