import type { Metadata } from "next";
import Image from "next/image";
import { lang as rootLang } from "next/root-params";
import { brand } from "@/content/brand.config";
import { hasLocale } from "@/lib/i18n/config";
import { getHomeText, getShell } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import { SparkHero } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await rootLang();
  return { alternates: alternatesFor(hasLocale(lang) ? lang : "en", "/") };
}

export default async function HomePage() {
  const l = await rootLang();
  const lang = hasLocale(l) ? l : "en";
  const [t, shell] = await Promise.all([getHomeText(lang), getShell(lang)]);
  const [l1, l2] = shell.brand.taglineLines;
  return (
    <>
      <main>
        <SparkHero title={<>{t.heroLines[0]}<br />{t.heroLines[1]}</>} />

        {/* Intro (Figma "Question Section") */}
        <section className="flex flex-col gap-10 bg-grey-50 px-5 py-16 lg:flex-row lg:justify-between lg:px-[169px] lg:py-20">
          <h2 className="max-w-[438px] text-[2.5rem] font-medium leading-[48px] text-grey-950">{t.intro}</h2>
          <div className="flex max-w-[431px] flex-col items-start gap-6">
            <p className="max-w-[340px] text-lg leading-6 text-grey-600">{t.body}</p>
            <Button href="/contact" arrow>{t.questions}</Button>
          </div>
        </section>

        {/* Statement card (Figma "CTA Section"): gradient photo behind a frosted glass panel */}
        <section className="bg-grey-50 px-5 py-16 lg:px-[125px] lg:py-20">
          <div className="relative overflow-hidden rounded-[var(--radius-card)] p-3 lg:h-[471px]">
            <Image src="/brand/cta-gradient.png" alt="" fill sizes="(min-width: 1024px) 1190px, 100vw" className="object-cover" />
            <div className="relative flex h-full flex-col items-center justify-center gap-10 rounded-[var(--radius-card)] border border-white/60 bg-white/20 px-6 py-20 text-center backdrop-blur-[12px] lg:px-20">
              <div className="space-y-3 text-grey-800">
                <h2 className="t-h2">{l1} {l2}</h2>
                <p className="mx-auto max-w-[600px] text-lg leading-6">{t.statementBody}</p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Button href="/brand-foundation" arrow>{t.brandFoundationCta}</Button>
                <Button href={brand.downloads.all} variant="outline" download>{t.downloadAll}</Button>
              </div>
            </div>
          </div>
        </section>

        <ExploreAssets />
      </main>
      <Footer />
    </>
  );
}
