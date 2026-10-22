"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Mark } from "@/components/Logo";
import { MenuIcon } from "@/components/ui/icons";
import { useMenu } from "./MenuContext";

export type RailItem = { id: string; label: string };
/** A titled group of anchors (Typography / Layout rails). `id` makes the title a link too. */
export type RailGroup = { group: string; id?: string; items: RailItem[] };
export type RailEntry = RailItem | RailGroup;

const isGroup = (e: RailEntry): e is RailGroup => "group" in e;

/* Figma page rail ("Card", 276px): sits beside the content and sticks to the top while it scrolls.
   Spark + menu button, page title, then section anchors with the current one highlighted.
   Flat rails (Spark, Wordmark, Color): grey-50, 18px title, 14px Space Grotesk anchors.
   Grouped rails (Typography, Layout): white, 14px Space Grotesk title, 16px group titles, indented 14px anchors. */
export default function SideRail({ title, items }: { title: string; items: RailEntry[] }) {
  const { setOpen } = useMenu();
  const grouped = items.some(isGroup);
  const ids = items.flatMap((e) => (isGroup(e) ? [...(e.id ? [e.id] : []), ...e.items.map((i) => i.id)] : [e.id]));
  const [active, setActive] = useState(ids[0] ?? "");
  const key = ids.join(",");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    key.split(",").forEach((id) => { const el = id && document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [key]);

  const link = (i: RailItem, base: string) => (
    <a href={`#${i.id}`} className={`transition-colors ${active === i.id ? "text-grey-950" : `${base} hover:text-grey-950`}`}>{i.label}</a>
  );

  return (
    <aside className={`hidden w-[var(--rail-w)] shrink-0 border-r border-grey-200 lg:block ${grouped ? "bg-white" : "bg-grey-50"}`}>
      <div className={`sticky top-0 flex max-h-screen flex-col overflow-y-auto px-10 py-[38px] ${grouped ? "gap-6" : "gap-4"}`}>
        <div className="flex items-center justify-between">
          <Link href="/" aria-label="Rectio home" className="flex size-11 items-center justify-center text-black"><Mark className="size-[86%]" /></Link>
          <button type="button" aria-label="Open menu" onClick={() => setOpen(true)} className="flex size-10 items-center justify-center rounded-lg border border-pampas-200 text-grey-950">
            <MenuIcon />
          </button>
        </div>
        {grouped ? (
          <div className="flex flex-col gap-5">
            <h2 className="font-[family-name:var(--font-secondary)] text-sm leading-5 text-grey-700">{title}</h2>
            <nav aria-label="Page sections">
              <ul className="flex flex-col gap-2">
                {items.map((e) =>
                  isGroup(e) ? (
                    <li key={e.group} className="flex flex-col gap-2">
                      {e.id ? <a href={`#${e.id}`} className="text-base font-medium leading-6 text-grey-950">{e.group}</a> : <span className="text-base font-medium leading-6 text-grey-950">{e.group}</span>}
                      <ul className="flex flex-col gap-1 pl-3.5 text-sm leading-5">
                        {e.items.map((i) => <li key={i.id}>{link(i, "text-grey-500")}</li>)}
                      </ul>
                    </li>
                  ) : (
                    <li key={e.id} className="text-sm leading-5">{link(e, "text-grey-500")}</li>
                  )
                )}
              </ul>
            </nav>
          </div>
        ) : (
          <>
            <h2 className="text-lg leading-6 text-grey-800">{title}</h2>
            <nav aria-label="Page sections">
              <ul className="space-y-2.5 font-[family-name:var(--font-secondary)] text-sm leading-5">
                {items.map((e) => !isGroup(e) && <li key={e.id}>{link(e, "text-grey-500")}</li>)}
              </ul>
            </nav>
          </>
        )}
      </div>
    </aside>
  );
}
