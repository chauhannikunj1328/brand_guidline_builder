import type { Metadata } from "next";
import type { ReactNode } from "react";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import type { RailEntry } from "@/components/site/SideRail";
import ExploreAssets from "@/components/site/ExploreAssets";
import LayoutHero from "@/components/layout-page/LayoutHero";
import OpticalGuide from "@/components/layout-page/OpticalGuide";
import { ColumnsDiagram, Dimension, GuttersDiagram, MarginsDiagram, SpecTable } from "@/components/layout-page/GridDiagrams";
import { DontTiles, PlacementTiles, ProportionsDiagram, ScaleDiagram } from "@/components/layout-page/LogoDiagrams";

export const metadata: Metadata = { title: "Layout" };

const M = brand.markShort;

/* Figma rail card (40007016:7952): "Grids" and "Applying Logos" groups with their sub-sections. */
const rail: RailEntry[] = [
  { group: "Grids", id: "grids", items: [
    { id: "margins", label: "Margins" },
    { id: "columns", label: "Columns" },
    { id: "gutters", label: "Gutters" },
    { id: "optical-guide", label: "Optical Guide" },
  ] },
  { group: "Applying Logos", id: "applying-logos", items: [
    { id: "proportions", label: "Proportions" },
    { id: "scale", label: "Scale" },
    { id: "placement", label: "Placement" },
    { id: "donts", label: "Don’ts" },
  ] },
];

const sg = "font-[family-name:var(--font-secondary)]";
/** White content card: 70px side padding, 80px vertical (Figma "Card" frames inside the 1164px content column). */
const card = "scroll-mt-6 bg-white px-5 py-16 lg:px-[70px] lg:py-20";

/** Section heading (H5 32/40 medium) + 18/24 body paragraphs, 463px wide. */
function Intro({ title, children, note }: { title: string; children: ReactNode; note?: ReactNode }) {
  return (
    <div className="flex w-full max-w-[463px] flex-col gap-6 text-grey-950">
      <div className="flex flex-col gap-4">
        <h2 className="t-h3">{title}</h2>
        <div className="text-lg leading-6">{children}</div>
      </div>
      {note && (
        <div className="flex flex-col gap-1">
          <p className={`text-base font-medium leading-6 ${sg}`}>Note</p>
          <p className="text-sm leading-5">{note}</p>
        </div>
      )}
    </div>
  );
}

export default function Page() {
  return (
    <PageShell title="Layout" rail={rail} hero={<LayoutHero />} after={<ExploreAssets except="layout" />}>
      {/* ---------------- Grids ---------------- */}
      <section id="grids" className="scroll-mt-6 bg-white px-5 pb-16 pt-20 lg:px-[70px] lg:pb-20 lg:pt-[140px]">
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <h2 className="t-section text-black">Grids</h2>
          <div className="t-lead max-w-[863px] space-y-12 font-light text-grey-600">
            <p>Our grid is how we assemble our brand elements into a whole.</p>
            <p>Whether we’re making a detailed multi-page presentation or a simple email, we always use the grid as our starting point.</p>
          </div>
        </div>
      </section>

      <section id="margins" className={`${card} flex flex-col gap-[60px]`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Intro title="Margins" note={<>The margins listed here for Leaderboard Display <br className="hidden lg:inline" />and Skyscraper Display have been reduced for <br className="hidden lg:inline" />optical correctness.*</>}>
            <p>Margins establish a consistent foundation, ensuring content remains legible, uniform, and tidy. Our standard margin width is determined by dividing the document&apos;s longest side into 24 equal segments, with the width of one segment becoming our margin. See the table for some sample document sizes and margins.</p>
          </Intro>
          <SpecTable last="Margins" rows={[["16:9 Powerpoints or Video", "1920 X 1080 PX", "80 PX"], ["Square Social Post", "1080 X 1080 PX", "45 PX"], ["Printed/PDF Report", "8.5 X 11 IN", ".5 IN"], ["Leaderboard Display*", "728 X 90 PX", "16 PX"], ["Skyscraper Display*", "120 X 600 PX", "12 PX"]]} />
        </div>
        <div className="flex flex-col gap-6">
          <MarginsDiagram big={["Our margin is equal to the", "longest side of a document", "divided by 24."]} small={["In the case of very wide or very tall layouts,", "your margins may need to be reduced slightly", "to maintain appropriate space for content."]} />
          <Dimension label="24 X" />
        </div>
      </section>

      <section id="columns" className={`${card} flex flex-col gap-[60px]`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Intro title="Columns">
            <div className="space-y-4">
              <p>We divide the interior space into vertical columns to help organize our content. Columns are drawn in increments of two, based on the document’s width. Wider applications will need more columns, while narrow applications will need fewer.</p>
              <p>Also consider the type of content that will occupy the space—complex information will require more columns to establish a clear hierarchy. See the table here for some common document sizes and sample column counts.</p>
            </div>
          </Intro>
          <SpecTable last="Columns" rows={[["16:9 Powerpoints or Video", "1920 X 1080 PX", "12"], ["Square Social Post", "1080 X 1080 PX", "4"], ["Printed/PDF Report", "8.5 X 11 IN", "6"], ["Leaderboard Display*", "728 X 90 PX", "8"], ["Skyscraper Display*", "120 X 600 PX", "2"]]} />
        </div>
        <div className="flex flex-col gap-6">
          <ColumnsDiagram big={["Columns are drawn in", "increments of 2, up to a", "maximum of 12."]} small={["Narrow applications will typically use", "2 to 4 columns, while wide layouts", "will use between 6 and 12."]} />
          <Dimension label="6 COLUMNS" />
        </div>
      </section>

      <section id="gutters" className={`${card} flex flex-col gap-[60px]`}>
        <Intro title="Gutters">
          <div className="space-y-10">
            <p>Gutters are the clear spaces between columns that separate text, images, and graphics. They make our communications tidy, organized, and legible.</p>
            <p>The width of our gutters is determined in relation to our margin. Gutters should be between 50% and 100% of our margin width, depending on the size of the application. A 50% gutter is sufficient for most needs, but may be too thin for very wide layouts. Use your best judgment for spacing.</p>
          </div>
        </Intro>
        <GuttersDiagram big={["Our gutter width is", "between 50% and 100%", "of our margin."]} small={["Wider applications may require larger gutters", "for optical correctness. When in doubt, start", "at 50% and increase as needed."]} />
      </section>

      <section id="optical-guide" className={card}>
        <OpticalGuide />
      </section>

      {/* ---------------- Applying Logos ---------------- */}
      <section id="applying-logos" className="scroll-mt-6 flex flex-col gap-16 bg-pampas-100 px-5 py-16 lg:gap-20 lg:p-[70px]">
        <div className="flex flex-col gap-8">
          <h2 className={`text-[2.5rem] font-medium leading-[48px] text-pampas-950 ${sg}`}>Applying Logos</h2>
          <div className="flex max-w-[664px] flex-col gap-4 text-xl leading-7 text-grey-950 lg:text-2xl lg:leading-8">
            <p>After establishing a grid, our logos may be used.</p>
            <p>Our wordmark and {M} are now decoupled from one another for more design flexibility. This section outlines the rules that govern their sizing and placement.</p>
          </div>
        </div>
        <div id="proportions" className="scroll-mt-6 flex flex-col gap-[60px] text-pampas-950">
          <div className="flex flex-col gap-4">
            <h2 className="t-h3">Proportions</h2>
            <div className="flex max-w-[664px] flex-col gap-5 text-lg leading-7 lg:text-xl">
              <p>When our wordmark and {M} are used together in a layout, they always maintain the size relationship shown here. The four inner segments of our {M} should match the height of our wordmark, making the {M} approximately 1.7x our wordmark’s height.</p>
              <p>This size relationship is fixed: the wordmark and {M} must always scale up or down as a set—never independently. Remember—our {M} and wordmark are separate logos. We do not lock them up together.</p>
            </div>
          </div>
          <ProportionsDiagram />
        </div>
      </section>

      <section className="bg-pampas-100 px-3 pb-16 lg:px-[30px] lg:py-[70px]">
        <div className="flex flex-col gap-24 rounded-[32px] bg-white px-5 py-16 lg:gap-[120px] lg:px-[70px] lg:py-20">
          <div id="scale" className="scroll-mt-6 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full max-w-[463px] flex-col gap-[30px] text-grey-950">
              <div className="flex flex-col gap-4">
                <h2 className="t-h3">Scale</h2>
                <div className="flex flex-col gap-3 text-lg leading-6">
                  <p>The height for our wordmark in layout is equal to the width of our margin. The height for our {M} is then 1.7x the margin height, according to the proportions above.</p>
                  <p>Use this as a baseline measurement—logo sizes can require optical adjustment, particularly on very wide or very tall layouts.</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className={`text-base font-medium leading-6 ${sg}`}>Remember</p>
                <p className="max-w-[349px] text-sm leading-5">When resizing the wordmark, our {M} must also increase or decrease accordingly to maintain correct proportions.</p>
              </div>
            </div>
            <ScaleDiagram />
          </div>

          <div id="placement" className="scroll-mt-6 flex flex-col gap-20">
            <div className="flex max-w-[593px] flex-col gap-8">
              <h2 className="t-h3 text-grey-950">Placement</h2>
              <div className="flex flex-col gap-5">
                <p className="text-lg leading-6 text-grey-950">Our wordmark and {M} are always located on opposite sides of a layout. Where possible, we place the wordmark in the lower left corner and the {M} in the upper right. If this isn’t possible, you can use one of our secondary placements. To help you remember these placements, keep in mind two simple rules:</p>
                <ol className="flex flex-col gap-1 text-sm leading-5 text-grey-700">
                  <li>1. Wordmark can&apos;t be at the top of a composition.</li>
                  <li>2. Wordmark can&apos;t be right-aligned.</li>
                </ol>
              </div>
            </div>
            <PlacementTiles />
          </div>

          <div id="donts" className="scroll-mt-6 flex flex-col gap-20">
            <div className="flex max-w-[593px] flex-col gap-6">
              <h2 className="t-h3 text-grey-950">Don&apos;ts</h2>
              <p className="text-sm leading-5 text-grey-700">When applying our logos, we always avoid the following misuses.</p>
            </div>
            <DontTiles />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
