import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import { Button, Card, Col, Lead } from "@/components/ui";

export const metadata: Metadata = { title: "Lockups" };
const rail = [{ id: "brand-and-vendor-lockups", label: "Brand & Vendor lockups" }];

export default function Page() {
  return (
    <PageShell title="Lockups" rail={rail} after={<ExploreAssets />}>
      <PageHero title="Lockups" />
      <Col className="pt-[130px] pb-[150px]">
        <Lead className="max-w-[900px] space-y-4">
          <p>Lockups are graphic assets that pair our {brand.name} logos with additional elements like taglines, campaign lines, or partner logos.</p>
          <p>This page provides downloadable asset packs for two lockup categories: brand lockups for use on video end cards and other core communications, and vendor-tagged asset lockups used by vendors to promote their products on {brand.siteLabel} and in our stores.</p>
        </Lead>
      </Col>
      <div className="px-5 lg:px-[280px_20px] lg:pl-[280px] lg:pr-5">
        <Card tone="tint" width="inner" id="brand-and-vendor-lockups" className="flex min-h-[540px] flex-col items-center justify-center text-center">
          <p className="t-h2">Download resources here:</p>
          <p className="t-small mt-4 max-w-[420px]">Each asset pack contains a PDF guide with usage tips and individual lockup files.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4"><Button href={brand.downloads.all} size="sm" download>Brand Lockups</Button><Button href={brand.downloads.all} size="sm" download>Vendor Lockups</Button></div>
        </Card>
      </div>
    </PageShell>
  );
}
