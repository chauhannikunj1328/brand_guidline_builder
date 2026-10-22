"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mark } from "@/components/Logo";
import { useMenu } from "./MenuContext";

export type RailItem = { id: string; label: string };

/* Fixed left rail on inner pages: appears once the hero has scrolled away (desktop only). */
export default function SideRail({ title, items, threshold = 700 }: { title: string; items: RailItem[]; threshold?: number }) {
  const { setOpen, railVisible, setRailVisible } = useMenu();
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const onScroll = () => setRailVisible(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); setRailVisible(false); };
  }, [threshold, setRailVisible]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    items.forEach((i) => { const el = document.getElementById(i.id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [items]);

  return (
    <aside
      className={`fixed left-0 top-0 z-30 hidden h-screen w-[var(--rail-w)] border-r border-line bg-white px-10 pt-10 transition-opacity duration-300 lg:block ${
        railVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex items-center gap-[100px]">
        <Link href="/" aria-label="Home" className="text-accent"><Mark className="h-10 w-10" /></Link>
        <button type="button" aria-label="Menu" onClick={() => setOpen(true)} className="relative h-4 w-5 text-ink">
          <span className="absolute left-0 top-0 h-px w-5 bg-current" />
          <span className="absolute left-0 top-[7px] h-px w-5 bg-current" />
          <span className="absolute left-0 top-[14px] h-px w-5 bg-current" />
        </button>
      </div>
      <h2 className="mt-14 text-sm font-bold text-ink">{title}</h2>
      <nav aria-label="Page sections" className="mt-6">
        <ul className="space-y-3">
          {items.map((i) => (
            <li key={i.id}>
              <a href={`#${i.id}`} className={`text-base transition ${active === i.id ? "text-ink" : "text-muted hover:text-ink"}`}>{i.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
