import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import ExploreAssets, { NEXT_UP } from "@/components/site/ExploreAssets";
import { Button } from "@/components/ui";

export const metadata: Metadata = { title: "Lockups" };
const rail = [{ id: "brand-and-vendor-lockups", label: "Brand & Vendor lockups" }];

export default function Page() {
  return (
    <PageShell hero={<PageHero title="Lockups" />} title="Lockups" rail={rail} after={<ExploreAssets items={NEXT_UP} heading={null} />}>
      <section className="bg-white px-5 pb-20 pt-24 lg:px-[70px] lg:pt-[140px]">
        <div className="t-intro max-w-[836px] space-y-12">
          <p>Lockups are graphic assets that pair our {brand.name} logos with additional elements like taglines, campaign lines, or partner logos.</p>
          <p>This page provides downloadable asset packs for two lockup categories: brand lockups for use on video end cards and other core communications, and vendor-tagged asset lockups used by vendors to promote their products on {brand.siteLabel} and in our stores.</p>
        </div>
      </section>
      <section id="brand-and-vendor-lockups" className="scroll-mt-6 bg-white px-5 py-20 lg:px-[70px]">
        <div className="flex flex-col gap-8 rounded-[32px] bg-pampas-100 px-6 py-[60px] text-center lg:px-[50px]">
          <div className="space-y-2">
            <h2 className="text-[2rem] font-medium leading-10 text-grey-950">Download resources here:</h2>
            <p className="mx-auto max-w-[440px] font-[family-name:var(--font-secondary)] text-base leading-6 text-grey-700">Each asset pack contains a PDF guide with usage tips and individual lockup files.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href={brand.downloads.all} download>Brand Lockups</Button>
            <Button href={brand.downloads.all} download>Vendor Lockups</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
