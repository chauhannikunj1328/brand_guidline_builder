"use client";

import Image from "next/image";
import { useState } from "react";

/* Figma "Campaign Headlines" carousel (401×453 image card, weight caption, 4 square dots).
   Slides are the off-canvas frames next to the Typography page: Light / Regular / Medium / Bold. */
const slides = [
  { src: "/brand/typography/campaign-light.png", lines: ["It’s a", "mood."], weight: "Light", cls: "font-light text-white" },
  { src: "/brand/typography/campaign-regular.png", lines: ["Crystal", "clear."], weight: "Regular", cls: "font-normal text-pampas-900" },
  { src: "/brand/typography/campaign-medium.png", lines: ["Up your", "game."], weight: "Medium", cls: "font-medium text-white" },
  { src: "/brand/typography/campaign-bold.png", lines: ["Looks", "on lock."], weight: "Bold", cls: "font-bold text-white" },
];

export default function CampaignCarousel() {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((n + slides.length) % slides.length);
  const s = slides[i];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Campaign headline weights"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
      className="flex w-full max-w-[401px] flex-col items-center gap-4 outline-none focus-visible:ring-2 focus-visible:ring-pampas-400"
    >
      <button
        type="button"
        onClick={() => go(i + 1)}
        aria-label={`${s.lines.join(" ")} — ${s.weight}. Show next example`}
        className="relative flex aspect-[401/453] w-full flex-col items-start justify-start overflow-hidden text-left"
      >
        {slides.map((sl, k) => (
          <Image
            key={sl.src}
            src={sl.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 401px, 100vw"
            className={`object-cover transition-opacity duration-500 ${k === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <p className={`relative p-4 font-[family-name:var(--font-secondary)] text-[2.5rem] leading-[1.05] sm:text-5xl sm:leading-[50px] ${s.cls}`}>
          {s.lines[0]}<br />{s.lines[1]}
        </p>
      </button>
      <p aria-live="polite" className="text-sm leading-5 text-grey-500">{s.weight}</p>
      <div className="-my-[3px] flex">
        {slides.map((sl, k) => (
          <button key={sl.weight} type="button" aria-label={`Show ${sl.weight} example`} aria-current={k === i} onClick={() => go(k)} className="p-[3px]">
            <span className={`block size-1.5 rounded-[2px] ${k === i ? "bg-pampas-700" : "bg-grey-300"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
