import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import { currentLang } from "@/lib/i18n/server";
import { getLockupsText } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import { Button } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await currentLang();
  return { title: (await getLockupsText(lang)).title, alternates: alternatesFor(lang, "/lockups") };
}

export default async function Page() {
  const t = await getLockupsText(await currentLang());
  const rail = [{ id: "brand-and-vendor-lockups", label: t.rail }];
  return (
    <PageShell hero={<PageHero title={t.title} />} title={t.title} rail={rail} after={<ExploreAssets current="lockups" />}>
      <section className="bg-white px-5 pb-20 pt-24 lg:px-[70px] lg:pt-[140px]">
        <div className="t-intro max-w-[836px] space-y-12">
          <p>{t.p1}</p>
          <p>{t.p2}</p>
        </div>
      </section>
      <section id="brand-and-vendor-lockups" className="scroll-mt-6 bg-white px-5 py-20 lg:px-[70px]">
        <div className="flex flex-col gap-8 rounded-[32px] bg-pampas-100 px-6 py-[60px] text-center lg:px-[50px]">
          <div className="space-y-2">
            <h2 className="text-[2rem] font-medium leading-10 text-grey-950">{t.heading}</h2>
            <p className="mx-auto max-w-[440px] font-[family-name:var(--font-secondary)] text-base leading-6 text-grey-700">{t.sub}</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <Button href={brand.downloads.brandLockups} download>{t.brandButton}</Button>
            <Button href={brand.downloads.vendorLockups} download>{t.vendorButton}</Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
