import Image from "next/image";
import { brand } from "@/content/brand.config";
import { SparkHero } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui";

export default function HomePage() {
  const [l1, l2] = brand.taglineLines;
  return (
    <>
      <main>
        <SparkHero title={<>Welcome to your new<br />{brand.name}</>} />

        {/* Intro (Figma "Question Section") */}
        <section className="flex flex-col gap-10 bg-grey-50 px-5 py-16 lg:flex-row lg:justify-between lg:px-[169px] lg:py-20">
          <h2 className="max-w-[438px] text-[2.5rem] font-medium leading-[48px] text-grey-950">{brand.hero.intro}</h2>
          <div className="flex max-w-[431px] flex-col items-start gap-6">
            <p className="max-w-[340px] text-lg leading-6 text-grey-600">{brand.hero.body}</p>
            <Button href="/contact" arrow>{brand.hero.contactLabel}</Button>
          </div>
        </section>

        {/* Statement card (Figma "CTA Section"): gradient photo behind a frosted glass panel */}
        <section className="bg-grey-50 px-5 py-16 lg:px-[125px] lg:py-20">
          <div className="relative overflow-hidden rounded-[var(--radius-card)] p-3 lg:h-[471px]">
            <Image src="/brand/cta-gradient.png" alt="" fill sizes="(min-width: 1024px) 1190px, 100vw" className="object-cover" />
            <div className="relative flex h-full flex-col items-center justify-center gap-10 rounded-[var(--radius-card)] border border-white/60 bg-white/20 px-6 py-20 text-center backdrop-blur-[12px] lg:px-20">
              <div className="space-y-3 text-grey-800">
                <h2 className="t-h2">{l1} {l2}</h2>
                <p className="mx-auto max-w-[600px] text-lg leading-6">{brand.statement.body}</p>
              </div>
              <Button href="/brand-foundation" arrow>Brand Foundation</Button>
            </div>
          </div>
        </section>

        <ExploreAssets />
      </main>
      <Footer />
    </>
  );
}
