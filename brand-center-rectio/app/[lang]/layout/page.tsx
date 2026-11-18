import type { Metadata } from "next";
import type { ReactNode } from "react";
import { currentLang } from "@/lib/i18n/server";
import { getLayoutText } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import PageShell from "@/components/site/PageShell";
import type { RailEntry } from "@/components/site/SideRail";
import ExploreAssets from "@/components/site/ExploreAssets";
import LayoutHero from "@/components/layout-page/LayoutHero";
import OpticalGuide from "@/components/layout-page/OpticalGuide";
import { ColumnsDiagram, Dimension, GuttersDiagram, MarginsDiagram, SpecTable } from "@/components/layout-page/GridDiagrams";
import { DontTiles, PlacementTiles, ProportionsDiagram, ScaleDiagram } from "@/components/layout-page/LogoDiagrams";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await currentLang();
  return { title: (await getLayoutText(lang)).title, alternates: alternatesFor(lang, "/layout") };
}

const sg = "font-[family-name:var(--font-secondary)]";
/** White content card: 70px side padding, 80px vertical (Figma "Card" frames inside the 1164px content column). */
const card = "scroll-mt-6 bg-white px-5 py-16 lg:px-[70px] lg:py-20";

/** Section heading (H5 32/40 medium) + 18/24 body paragraphs, 463px wide. */
function Intro({ title, children, note, noteLabel }: { title: string; children: ReactNode; note?: ReactNode; noteLabel?: string }) {
  return (
    <div className="flex w-full max-w-[463px] flex-col gap-6 text-grey-950">
      <div className="flex flex-col gap-4">
        <h2 className="t-h3">{title}</h2>
        <div className="text-lg leading-6">{children}</div>
      </div>
      {note && (
        <div className="flex flex-col gap-1">
          <p className={`text-base font-medium leading-6 ${sg}`}>{noteLabel}</p>
          <p className="text-sm leading-5">{note}</p>
        </div>
      )}
    </div>
  );
}

export default async function Page() {
  const lang = await currentLang();
  const t = await getLayoutText(lang);
  const rail: RailEntry[] = [
    { group: t.rail.grids, id: "grids", items: [
      { id: "margins", label: t.rail.margins },
      { id: "columns", label: t.rail.columns },
      { id: "gutters", label: t.rail.gutters },
      { id: "optical-guide", label: t.rail.optical },
    ] },
    { group: t.rail.applying, id: "applying-logos", items: [
      { id: "proportions", label: t.rail.proportions },
      { id: "scale", label: t.rail.scale },
      { id: "placement", label: t.rail.placement },
      { id: "donts", label: t.rail.donts },
    ] },
  ];
  const dims = ["1920 X 1080 PX", "1080 X 1080 PX", "8.5 X 11 IN", "728 X 90 PX", "120 X 600 PX"];
  const rows = (vals: string[]) => t.table.rows.map((n, i) => [n, dims[i], vals[i]] as [string, string, string]);
  const marginRows = rows(["80 PX", "45 PX", ".5 IN", "16 PX", "12 PX"]);
  const columnRows = rows(["12", "4", "6", "8", "2"]);
  return (
    <PageShell title={t.title} rail={rail} hero={<LayoutHero title={t.title} />} after={<ExploreAssets current="layout" />}>
      {/* ---------------- Grids ---------------- */}
      <section id="grids" className="scroll-mt-6 bg-white px-5 pb-16 pt-20 lg:px-[70px] lg:pb-20 lg:pt-[140px]">
        <div className="flex flex-col gap-10 lg:gap-[60px]">
          <h2 className="t-section text-black">{t.grids.heading}</h2>
          <div className="t-lead max-w-[863px] space-y-12 font-light text-grey-600">
            <p>{t.grids.p1}</p>
            <p>{t.grids.p2}</p>
          </div>
        </div>
      </section>

      <section id="margins" className={`${card} flex flex-col gap-[60px]`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Intro title={t.margins.heading} noteLabel={t.note} note={t.margins.note}>
            <p>{t.margins.p}</p>
          </Intro>
          <SpecTable head={[t.table.docType, t.table.dimensions, t.margins.heading]} rows={marginRows} />
        </div>
        <div className="flex flex-col gap-6">
          <MarginsDiagram big={t.margins.big} small={t.margins.small} />
          <Dimension label={t.margins.dimension} />
        </div>
      </section>

      <section id="columns" className={`${card} flex flex-col gap-[60px]`}>
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <Intro title={t.columns.heading}>
            <div className="space-y-4">
              <p>{t.columns.p1}</p>
              <p>{t.columns.p2}</p>
            </div>
          </Intro>
          <SpecTable head={[t.table.docType, t.table.dimensions, t.columns.heading]} rows={columnRows} />
        </div>
        <div className="flex flex-col gap-6">
          <ColumnsDiagram big={t.columns.big} small={t.columns.small} />
          <Dimension label={t.columns.dimension} />
        </div>
      </section>

      <section id="gutters" className={`${card} flex flex-col gap-[60px]`}>
        <Intro title={t.gutters.heading}>
          <div className="space-y-10">
            <p>{t.gutters.p1}</p>
            <p>{t.gutters.p2}</p>
          </div>
        </Intro>
        <GuttersDiagram big={t.gutters.big} small={t.gutters.small} />
      </section>

      <section id="optical-guide" className={card}>
        <OpticalGuide heading={t.rail.optical} aria={t.optical.aria} tabs={t.optical.tabs} labels={t.optical.labels} />
      </section>

      {/* ---------------- Applying Logos ---------------- */}
      <section id="applying-logos" className="scroll-mt-6 flex flex-col gap-16 bg-pampas-100 px-5 py-16 lg:gap-20 lg:p-[70px]">
        <div className="flex flex-col gap-8">
          <h2 className={`text-[2.5rem] font-medium leading-[48px] text-pampas-950 ${sg}`}>{t.logos.heading}</h2>
          <div className="flex max-w-[664px] flex-col gap-4 text-xl leading-7 text-grey-950 lg:text-2xl lg:leading-8">
            <p>{t.logos.p1}</p>
            <p>{t.logos.p2}</p>
          </div>
        </div>
        <div id="proportions" className="scroll-mt-6 flex flex-col gap-[60px] text-pampas-950">
          <div className="flex flex-col gap-4">
            <h2 className="t-h3">{t.logos.proportions.heading}</h2>
            <div className="flex max-w-[664px] flex-col gap-5 text-lg leading-7 lg:text-xl">
              <p>{t.logos.proportions.p1}</p>
              <p>{t.logos.proportions.p2}</p>
            </div>
          </div>
          <ProportionsDiagram aria={t.logos.proportions.aria} />
        </div>
      </section>

      <section className="bg-pampas-100 px-3 pb-16 lg:px-[30px] lg:py-[70px]">
        <div className="flex flex-col gap-24 rounded-[32px] bg-white px-5 py-16 lg:gap-[120px] lg:px-[70px] lg:py-20">
          <div id="scale" className="scroll-mt-6 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full max-w-[463px] flex-col gap-[30px] text-grey-950">
              <div className="flex flex-col gap-4">
                <h2 className="t-h3">{t.logos.scale.heading}</h2>
                <div className="flex flex-col gap-3 text-lg leading-6">
                  <p>{t.logos.scale.p1}</p>
                  <p>{t.logos.scale.p2}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <p className={`text-base font-medium leading-6 ${sg}`}>{t.remember}</p>
                <p className="max-w-[349px] text-sm leading-5">{t.logos.scale.rememberText}</p>
              </div>
            </div>
            <ScaleDiagram caption={t.logos.scale.caption} />
          </div>

          <div id="placement" className="scroll-mt-6 flex flex-col gap-20">
            <div className="flex max-w-[593px] flex-col gap-8">
              <h2 className="t-h3 text-grey-950">{t.logos.placement.heading}</h2>
              <div className="flex flex-col gap-5">
                <p className="text-lg leading-6 text-grey-950">{t.logos.placement.p}</p>
                <ol className="flex flex-col gap-1 text-sm leading-5 text-grey-700">
                  {t.logos.placement.rules.map((x, i) => <li key={i}>{x}</li>)}
                </ol>
              </div>
            </div>
            <PlacementTiles primary={t.logos.placement.primary} secondary={t.logos.placement.secondary} captions={t.logos.placement.captions} />
          </div>

          <div id="donts" className="scroll-mt-6 flex flex-col gap-20">
            <div className="flex max-w-[593px] flex-col gap-6">
              <h2 className="t-h3 text-grey-950">{t.logos.donts.heading}</h2>
              <p className="text-sm leading-5 text-grey-700">{t.logos.donts.p}</p>
            </div>
            <DontTiles primary={t.logos.placement.primary} secondary={t.logos.placement.secondary} captions={t.logos.donts.captions} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
