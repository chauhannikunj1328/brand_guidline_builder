import Image from "next/image";
import type { ReactNode } from "react";

/** Base path of the Layout page assets exported from Figma ("Rectio | Full Project Design", Layout page). */
export const L = "/brand/layout";

/** A Figma-exported asset filling a sized, positioned box (`className` sets size + position). */
export function Asset({ src, className = "", sizes = "100vw" }: { src: string; className?: string; sizes?: string }) {
  return (
    <span aria-hidden className={`pointer-events-none block ${className.includes("absolute") ? "" : "relative"} ${className}`}>
      <Image src={`${L}/${src}`} alt="" fill sizes={sizes} className="max-w-none" />
    </span>
  );
}

/** Rectio wordmark artwork as exported in this Figma page (pampas-600 / white / grey-950 variants). */
export function WordmarkArt({ tone, className = "" }: { tone: "pampas-600" | "white" | "grey-950"; className?: string }) {
  return (
    <span role="img" aria-label="Rectio" className={`relative block shrink-0 ${className}`}>
      <Image src={`${L}/wordmark-${tone}.svg`} alt="" fill sizes="120px" />
    </span>
  );
}

/** Red X / green check (28px frame) with a Space Grotesk caption — Optical Guide and Don'ts tiles. */
export function Verdict({ ok, children, className = "text-xs leading-4" }: { ok: boolean; children: ReactNode; className?: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="relative block size-7 shrink-0">
        {ok
          ? <Image src={`${L}/icon-check-circle.svg`} alt="Do" fill sizes="28px" />
          : <span className="absolute inset-[2.625px]"><Image src={`${L}/icon-x-circle.svg`} alt="Don’t" fill sizes="22px" className="max-w-none" /></span>}
      </span>
      <p className={`flex-1 font-[family-name:var(--font-secondary)] font-medium text-grey-600 ${className}`}>{children}</p>
    </div>
  );
}
