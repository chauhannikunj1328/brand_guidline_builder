"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* Fades each block up as it scrolls into view (07-motion.md: 24px, 300ms, ease-out, 40ms stagger, max 8).
   Works on the rendered page, so every page gets it without per-page markup.
   Blocks already on screen at first load stay put: hiding them after paint would flicker.
   With reduced motion or no JavaScript, nothing is hidden. */
const STAGGER_MS = 40;
const MAX_STAGGERED = 8;

/* The page the visitor landed on. Module state, so it survives React's double effect run in development. */
let landedOn: string | null = null;
let hasNavigated = false;

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    landedOn ??= pathname;
    if (pathname !== landedOn) hasNavigated = true;
    const firstLoad = !hasNavigated;
    const blocks = [...document.querySelectorAll<HTMLElement>("section > *, footer > *")].filter((el) => {
      const { position } = getComputedStyle(el);
      return position !== "absolute" && position !== "fixed" && !el.parentElement?.parentElement?.closest("section");
    });

    const finish = (el: HTMLElement) => {
      el.removeAttribute("data-reveal");
      el.style.removeProperty("animation-delay");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.filter((e) => e.isIntersecting).forEach((entry, i) => {
          const el = entry.target as HTMLElement;
          observer.unobserve(el);
          el.style.animationDelay = `${Math.min(i, MAX_STAGGERED - 1) * STAGGER_MS}ms`;
          el.addEventListener("animationend", () => finish(el), { once: true });
          el.dataset.reveal = "in";
        });
      },
      { rootMargin: "0px 0px -8% 0px" }
    );

    blocks.forEach((el) => {
      if (firstLoad && el.getBoundingClientRect().top < window.innerHeight) return;
      el.dataset.reveal = "hidden";
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      blocks.forEach(finish);
    };
  }, [pathname]);

  return null;
}
