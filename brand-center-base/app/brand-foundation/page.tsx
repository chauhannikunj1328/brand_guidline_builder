import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import PageHero, { HeroStrip } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import { Band, Card, Col, H3, Lead, P, Ph } from "@/components/ui";

export const metadata: Metadata = { title: "Brand Foundation" };

const rail = [
  { id: "brand-foundation", label: "Brand Foundation" },
  { id: "brand-purpose", label: "Brand Purpose" },
  { id: "company-positioning", label: "Company Positioning" },
  { id: "brand-principles", label: "Brand Principles" },
  { id: "cheat-sheet", label: "Cheat Sheet" },
];

const principles = [
  { title: "Principle 1", text: "One or two sentences describing this principle and how it shows up in the way we behave." },
  { title: "Principle 2", text: "One or two sentences describing this principle and how it shows up in the way we behave." },
  { title: "Principle 3", text: "One or two sentences describing this principle and how it shows up in the way we behave." },
];

export default function Page() {
  const [l1, l2] = brand.taglineLines;
  return (
    <PageShell title="Brand Foundation" rail={rail} after={<ExploreAssets />}>
      <PageHero title="Brand Foundation">
        <HeroStrip>
          {["Archive photo", "Founder", "Early store", "Community"].map((l) => <Ph key={l} label={l} className="h-[240px] w-[345px] shrink-0" />)}
        </HeroStrip>
      </PageHero>

      {/* Intro */}
      <Col id="brand-foundation" className="pt-[150px] pb-[150px]">
        <H3>Brand Foundation</H3>
        <Lead className="mt-10">
          <p>This section is the bedrock of our brand, outlining our purpose, positioning, and principles. It guides us in all the ways {brand.name} comes to life: how we look, what we stand for, and how we act in the world.</p>
        </Lead>
      </Col>

      {/* Brand Purpose — ink band */}
      <Band tone="ink" id="brand-purpose">
        <p className="t-h4">Brand Purpose</p>
        <p className="mt-1 text-xl">Guides the enterprise</p>
        <p className="t-display mt-14"><span className="block">{l1}</span><span className="block text-mid">{l2}</span></p>
        <div className="mt-16 max-w-[440px] space-y-6">
          <P size="small">Our brand purpose is inspired by the words of our founder. Replace this paragraph with the origin of your purpose and the belief that drives it.</P>
          <P size="small">This purpose guides our daily actions and behaviours to best serve our customers, teams, and communities. It is the driving force behind everything we do.</P>
        </div>
      </Band>

      {/* Company Positioning — primary band */}
      <Band tone="primary" id="company-positioning">
        <p className="t-h4">Company Positioning</p>
        <p className="t-h2 mt-14 max-w-[720px]">
          We are a <strong className="font-bold">people-led,</strong> <strong className="font-bold">tech-powered,</strong> company dedicated to helping people <strong className="font-bold">{l1.toLowerCase().replace(/\.$/, "")}</strong>.
        </p>
      </Band>

      {/* Brand Principles */}
      <Col id="brand-principles" className="pt-[150px]">
        <H3>Brand Principles</H3>
        <Lead className="mt-10 max-w-[980px]">
          <p>Brand Principles are simple descriptors that exist to guide our brand identity and experience across channels.<br />They&apos;re an articulation of the image {brand.name} should spark in the minds of our customers. They&apos;re not external-facing, but are always at the core of how we look, feel, sound, speak, and act.</p>
        </Lead>
        <div className="mt-28 space-y-16">
          {principles.map((p, i) => (
            <div key={p.title} className={`grid items-center gap-10 lg:grid-cols-[470px_1fr] lg:gap-14 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2 lg:pl-10" : ""}`}>
              <Ph label="Photo" className="aspect-[470/460] w-full max-w-[470px] rounded-3xl" />
              <div className="max-w-[360px]">
                <p className="t-h2 !text-[3rem]">{p.title}</p>
                <P size="small" className="mt-3">{p.text}</P>
              </div>
            </div>
          ))}
        </div>
      </Col>

      {/* Cheat sheet */}
      <div className="pt-[120px] pb-6">
        <Card tone="primary" width="wide" id="cheat-sheet" pad={false} className="px-6 py-14 lg:px-6 lg:pt-16 lg:pb-14">
          <H3 className="px-6 lg:px-8">Brand Foundation<br />Cheat Sheet</H3>
          <p className="t-small mt-14 text-center font-bold">Brand Purpose</p>
          <p className="t-xs mt-1 text-center">Guides the enterprise.</p>
          <div className="mt-6 flex h-[100px] items-center justify-center rounded-3xl bg-mid text-ink"><span className="text-[2rem] font-light">{brand.tagline}</span></div>
          <p className="t-small mt-14 text-center font-bold">Company Positioning</p>
          <div className="mt-6 flex min-h-[130px] items-center justify-center rounded-3xl bg-white px-10 text-center text-ink"><P>We are a people-led, tech-powered company dedicated to helping people {l1.toLowerCase().replace(/\.$/, "")} and {l2.toLowerCase().replace(/\.$/, "")}.</P></div>
          <p className="t-small mt-14 text-center font-bold">Brand Principles</p>
          <p className="t-xs mt-1 text-center">Guides our brand expression.</p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className="overflow-hidden rounded-2xl bg-white text-ink">
                <p className="bg-tint py-3 text-center t-small">{p.title}</p>
                <p className="t-xs px-5 py-5 text-center">{p.text}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
