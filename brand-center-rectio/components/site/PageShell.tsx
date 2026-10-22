import type { ReactNode } from "react";
import SideRail, { type RailEntry } from "./SideRail";
import Footer from "./Footer";

/* Inner page layout from the Figma pages:
   hero → intro (full width) → [276px sticky rail | content] → `after` (asset cards / pagination) → footer. */
export default function PageShell({ title, rail, hero, intro, footerLabel, after, children }: { title: string; rail: RailEntry[]; hero?: ReactNode; intro?: ReactNode; footerLabel?: string; after?: ReactNode; children: ReactNode }) {
  return (
    <>
      {hero}
      {intro}
      <div className="lg:flex">
        <SideRail title={title} items={rail} />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      {after}
      <Footer downloadLabel={footerLabel} />
    </>
  );
}

/** Figma "Question Section": grey-50 band under the hero with a statement and a button. */
export function IntroSection({ children, className = "lg:px-[330px]" }: { children: ReactNode; className?: string }) {
  return <section className={`bg-grey-50 px-5 py-16 lg:py-20 ${className}`}>{children}</section>;
}
