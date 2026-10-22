import type { ReactNode } from "react";
import SideRail, { type RailItem } from "./SideRail";
import Footer from "./Footer";

/* Wraps an inner page: side rail + content + footer. Pagination (PrevNext / ExploreAssets) is passed as `after`. */
export default function PageShell({ title, rail, footerLabel, after, children }: { title: string; rail: RailItem[]; footerLabel?: string; after?: ReactNode; children: ReactNode }) {
  return (
    <>
      <SideRail title={title} items={rail} />
      <main>{children}</main>
      {after}
      <Footer downloadLabel={footerLabel} />
    </>
  );
}
