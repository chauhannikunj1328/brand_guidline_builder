import Link from "next/link";
import { brand } from "@/content/brand.config";
import { Mark } from "@/components/Logo";
import ExploreAssets from "@/components/site/ExploreAssets";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui";

export default function HomePage() {
  const [l1, l2] = brand.taglineLines;
  return (
    <>
      <main>
        {/* Hero — two-tone angled background, mark below the split */}
        <section className="relative min-h-[100svh] overflow-hidden bg-primary text-white lg:min-h-[900px]">
          <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--brand-primary)_0%,color-mix(in_srgb,var(--brand-primary),white_18%)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-ink" style={{ clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0 100%)" }} />
          <div className="relative flex flex-col items-center px-5 pt-40 text-center lg:pt-[270px]">
            <h1 className="t-hero max-w-[760px]">{brand.hero.headline}</h1>
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-accent drop-shadow-[0_0_40px_rgba(255,255,255,0.35)] lg:bottom-8">
            <Mark className="h-32 w-32 lg:h-[220px] lg:w-[220px]" />
          </div>
        </section>

        {/* Intro split */}
        <section className="grid gap-10 px-5 py-24 lg:grid-cols-[1fr_400px] lg:gap-20 lg:px-[155px] lg:py-[210px]">
          <h2 className="t-h2 max-w-[640px]">{brand.hero.intro}</h2>
          <div className="max-w-[380px] lg:pt-3">
            <p className="t-small">{brand.hero.body}</p>
            <div className="mt-8"><Button href="/contact" size="sm">{brand.hero.contactLabel}</Button></div>
          </div>
        </section>

        {/* Tagline card */}
        <section className="edge-x">
          <div className="flex min-h-[500px] flex-col items-center justify-center rounded-[var(--radius-card)] bg-tint px-6 py-24 text-center lg:min-h-[660px]">
            <h2 className="t-display"><span className="text-ink">{l1}</span> <span className="text-primary">{l2}</span></h2>
            <p className="t-small mx-auto mt-14 max-w-[620px]">{brand.statement.body}</p>
            <div className="mt-12"><Button href="/brand-foundation" size="sm">Brand Foundation</Button></div>
          </div>
        </section>

        <ExploreAssets />
      </main>
      <Footer />
      <Link href="/" className="sr-only">Home</Link>
    </>
  );
}
