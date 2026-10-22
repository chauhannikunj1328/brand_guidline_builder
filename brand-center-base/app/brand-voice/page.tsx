import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import PageHero, { HeroStrip } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import { Band, Card, Col, DoDont, H3, Lead, NumBadge, NumList, P, Ph, Split, Verdict } from "@/components/ui";

export const metadata: Metadata = { title: "Brand Voice" };

const rail = [
  { id: "voice-principles", label: "Voice Principles" },
  { id: "overview", label: "Overview" },
  { id: "conversational", label: "Conversational" },
  { id: "captivating", label: "Captivating" },
  { id: "confident", label: "Confident" },
  { id: "cheat-sheet", label: "Cheat Sheet" },
  { id: "best-practices", label: "Best Practices" },
];

const voice = [
  { n: 1, from: "Principle 1", name: "Conversational", short: "Our voice is just as down-to-earth as our customers. We want to be the realest voice in our category.", tone: "bg-white text-ink", body: ["Our voice is just as down-to-earth as our customers and teams. We want to be the realest voice in our category, so we need to avoid confusing our customers with marketing speak.", "Our tone is familiar and straightforward while using friendly, dressed-down language. We maintain a positive and optimistic perspective on everyday life."], doText: "Aim for the easy read. Use simple word choices, clear sentence structures, and well-known turns of phrase.", dontText: "Complicate things with industry jargon, uncommon phrasing or complex words. When in doubt, ask yourself: would you say this in an everyday conversation?" },
  { n: 2, from: "Principle 2", name: "Captivating", short: "We must always engage the reader, so our voice needs to be dynamic and energising.", tone: "bg-tint text-ink", body: ["We have to engage the reader, so our voice needs to be dynamic and energising. Our tone combines levity with an irresistible magnetism that appeals to readers. Whatever the subject, we talk about it in a current, relevant way with infectious energy.", "Never shy away from moments that are relatable, entertaining, and timely."], doText: "Use wordplay, subtle rhymes, and punchy sentence structures. Have fun with your writing and make it engaging and vibrant.", dontText: "Tell jokes. Our humour and fun come from a place of relatability, centring the customer and their experiences so we never become cheesy or contrived." },
  { n: 3, from: "Principle 3", name: "Confident", short: `Because ${brand.name} is a leader, our voice should be decisive and inspiring.`, tone: "bg-mid text-ink", body: [`Because ${brand.name} is a leader, our voice is decisive and inspiring.`, "We speak with a positivity that's impactful and reassuring. When we write confidently, our customers feel they can be confident too. We don't speak in ambiguity — we're declarative and direct, inspiring people to act."], doText: "Be specific and direct. Showing expertise when discussing moments or products helps your copy connect with customers.", dontText: "Be vague. Vagueness clouds the intent of your copy and will feel passive, bland, and boring." },
];

const practices = [
  { title: "On Clarity", card: true, points: ["Clarity is crucial in conveying information.", "Ensure your intent cannot be misunderstood."], text: ["Our brand voice is Conversational, Captivating, and Confident, but there's a fourth C that's vital to everything we write: Clarity.", "We never lose sight of how large our audience is and that our primary objective in every communication is to convey information to that audience. The brief is always top of mind, so ask yourself: does my copy translate the brief so clearly that the intent can't be misunderstood?"] },
  { title: "On Value", card: false, points: ["Find new ways to say repeated phrases.", "Consider how value affects the reader."], text: ["When storytelling with value, push yourself to find new ways to say commonly repeated phrases like \"faves,\" \"finds,\" \"essentials\" or \"must-haves.\" While these words work in a pinch, we always want to beat them.", "Also consider how value affects the reader. Find the relationship between the item and the customer beyond the price."] },
  { title: "On Humor", card: true, points: ["Be observational and relatable.", "Don't tell jokes outside our social channels."], text: [`${brand.name} embraces the humour in everyday life rather than telling jokes. We love the little things that make life great, and we relate to the moments that can be groan-worthy.`, "Jokes are the lifeblood of social media, and we're in on the joke. Our relevance on those platforms depends on it, so we make jokes, share memes, and engage with our followers in ways that differ from our other channels."] },
  { title: "On Puns", card: false, points: ["Do not use puns."], text: ["We resist using puns. While we admit they're a fun and helpful shortcut, they're also the lowest-hanging fruit. We believe there is always a deeper truth or more entertaining story to be told behind each pun.", "There will be exceptions over time, but please keep our general \"no puns\" rule in mind when writing as the brand."] },
  { title: "On Being Current", card: true, points: ["Learn through social listening.", "Be relateable-at-scale.", "Use contemporary language."], text: ["We stay current with culture through social listening. Discovering new turns of phrase, shared cultural references and sentence structures is as easy as scrolling through social media.", "Ultimately, however, we need to temper our language to be relatable-at-scale. Our writing shouldn't be on the cutting edge of slang or internet speak, but should employ contemporary language that is used or understood by the majority of our customers."] },
  { title: "On Emojis", card: false, points: ["Use smileys to convey general emotion.", "Use body part emojis in sets of three to reflect our diverse customers."], text: ["Emojis are a powerful tool in our CRM and social media platforms. We use them when they add to — and don't distract from — the story we're telling. Inclusivity is always top of mind, so use this general rule of thumb.", "Smileys convey general emotion and are only available in the yellow skin tone. Body part emojis reflect specific human movements and are available in multiple skin tones. Always use a set of 3 versions of the same emoji to convey the full range of our customers' identities."], emoji: true },
];

export default function Page() {
  return (
    <PageShell title="Brand Voice" rail={rail} after={<ExploreAssets />}>
      <PageHero title="Brand Voice">
        <HeroStrip>
          {["Ad example 1", "Ad example 2", "Ad example 3", "Ad example 4"].map((l, i) => (
            <div key={l} className={`relative h-[240px] w-[345px] shrink-0 overflow-hidden ${i % 2 ? "bg-tint" : "bg-white"} text-ink`}>
              <p className="absolute left-4 top-4 max-w-[220px] text-[2rem] font-light leading-tight">Headline goes here.</p>
              <span className="absolute bottom-4 left-4 rounded-full bg-primary px-3 py-1 text-[9px] text-white">Shop now</span>
            </div>
          ))}
        </HeroStrip>
      </PageHero>

      <Col id="voice-principles" className="pt-[150px] pb-[150px]">
        <H3>Voice Principles</H3>
        <Lead className="mt-10">
          <p>Our Voice Principles inform how we speak to customers, from the content on their social feeds to their experience in a local {brand.name} store.</p>
          <p>These principles are a direct translation of our core Brand Principles, specifically tailored for verbal and written expression.</p>
        </Lead>
      </Col>

      <Band tone="primary" id="overview">
        <H3>Overview</H3>
        <div className="mt-6 max-w-[410px] space-y-6">
          <P size="small">These principles guide the execution of our brand voice across all communications. These principles apply to customer-facing marketing comms, but it&apos;s also how we should be writing decks, pitches, etc. Every single team member is a steward of our voice!</P>
          <P size="small">Our Voice Principles may be dialled up or down to best suit your specific communication needs. Sometimes, you&apos;ll need to emphasise one principle more heavily than another, while other times you&apos;ll have copy that leverages all three principles equally.</P>
        </div>
        <div className="-ml-[calc(var(--content-x)-var(--rail-w)-24px)] mt-16 space-y-8 pr-0 lg:-mr-[var(--content-r)] lg:mr-6">
          {voice.map((v) => (
            <div key={v.name} className={`grid items-center gap-6 rounded-[var(--radius-card)] px-12 py-12 lg:grid-cols-[220px_1fr_360px] ${v.tone}`}>
              <p className="flex items-center gap-3 t-xs"><NumBadge n={v.n} /> {v.from} →</p>
              <p className="t-h2 !text-[3.5rem]">{v.name}</p>
              <P size="small">{v.short}</P>
            </div>
          ))}
        </div>
      </Band>

      {voice.map((v, i) => {
        const inner = (
          <>
            <Split align="start" left={
              <div>
                <p className="text-[1.75rem] font-light">Principle {v.n}</p>
                <p className="t-h3 !text-[1.75rem]">{v.name}</p>
                <div className="mt-8 space-y-4">{v.body.map((t) => <P key={t} size="small">{t}</P>)}</div>
              </div>
            } right={<div className="lg:pl-40"><DoDont doText={v.doText} dontText={v.dontText} /></div>} />
            <p className="mt-24 text-2xl">Examples</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[0, 1, 2].map((k) => (
                <div key={k}>
                  <Ph label="Example" className="aspect-[340/460] rounded-xl" />
                  <Verdict ok className="mt-4"><span className="sr-only">Approved</span></Verdict>
                </div>
              ))}
            </div>
          </>
        );
        return i === 1 ? (
          <div key={v.name} className="pt-24"><Card tone="tint" width="wide" id={v.name.toLowerCase()}>{inner}</Card></div>
        ) : (
          <Col key={v.name} id={v.name.toLowerCase()} className="pt-32">{inner}</Col>
        );
      })}

      {/* Cheat sheet */}
      <div className="pt-32">
        <Card tone="primary" width="wide" id="cheat-sheet" pad={false} className="px-6 py-14 lg:px-12 lg:pt-16">
          <H3>Voice Principles<br />Cheat Sheet</H3>
          <p className="t-small mt-14 text-center font-bold">Brand Purpose</p>
          <p className="t-xs mt-1 text-center">Guides the enterprise.</p>
          <div className="mt-6 flex h-[100px] items-center justify-center rounded-3xl bg-mid text-ink"><span className="text-[2rem] font-light">{brand.tagline}</span></div>
          <p className="t-small mt-14 text-center font-bold">Brand Principles</p>
          <p className="t-xs mt-1 text-center">Guide our brand expression.</p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {["Principle 1", "Principle 2", "Principle 3"].map((t) => (
              <div key={t} className="overflow-hidden rounded-2xl bg-white text-ink"><p className="bg-tint py-3 text-center t-small">{t}</p><p className="t-xs px-5 py-5 text-center">One or two sentences describing this principle.</p></div>
            ))}
          </div>
          <div className="mt-4 grid md:grid-cols-3">{[0, 1, 2].map((k) => <p key={k} className="text-center text-sm">↓</p>)}</div>
          <p className="t-small mt-10 text-center font-bold">Voice Principles</p>
          <p className="t-xs mt-1 text-center">Derived from our Brand Principles these are specifically tailored for easy implementation through language.</p>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {voice.map((v) => (
              <div key={v.name} className="overflow-hidden rounded-2xl bg-white text-ink"><p className="bg-tint py-3 text-center t-small">{v.name}</p><p className="t-xs px-5 py-5 text-center">{v.short}</p></div>
            ))}
          </div>
        </Card>
      </div>

      {/* Best practices */}
      <Col id="best-practices" className="pt-[150px]">
        <H3>Best Practices</H3>
        <Lead className="mt-10">
          <p>At {brand.name}, it&apos;s important that we speak with a consistent, unified voice.</p>
          <p>The following section includes best practices and guidance to help maintain our verbal style so we always sound authentically {brand.name}.</p>
        </Lead>
      </Col>
      <div className="space-y-24 pt-24">
        {practices.map((pr) => {
          const inner = (
            <Split align="start" left={
              <div>
                <p className="t-h3 !text-[1.75rem]">{pr.title}</p>
                <div className="mt-8"><NumList items={pr.points} /></div>
                {pr.emoji && <div className="mt-4 flex gap-6 text-4xl"><span>😃</span><span>😊</span><span>😎</span></div>}
              </div>
            } right={<div className="space-y-5 lg:pl-8">{pr.text.map((t) => <P key={t} size="small">{t}</P>)}</div>} />
          );
          return pr.card ? <Card key={pr.title} tone="tint" width="wide" className="lg:py-[150px]">{inner}</Card> : <Col key={pr.title}>{inner}</Col>;
        })}
      </div>

      {/* Closing bars */}
      <div className="card-wide mt-32 mb-6 space-y-5">
        {[
          ["bg-tint text-ink", "We're always Conversational, Captivating, and Confident, but our writing will lean into — or away from — a principle depending on what we're writing and who we're writing for."],
          ["bg-mid text-ink", "Consider every customer. Demographics and backgrounds matter, so make sure your words are clear and resonate with the majority."],
          ["bg-primary text-white", "Write how you talk. Literally."],
          ["bg-ink text-white", "We are the realest voice in our category. Live it. Breathe it. Own it."],
        ].map(([cls, text], i) => (
          <div key={i} className={`grid min-h-[120px] items-center gap-6 rounded-[var(--radius-card)] px-12 py-8 lg:grid-cols-[220px_1fr] ${cls}`}>
            <NumBadge n={i + 1} tone={i >= 2 ? "white" : "ink"} />
            <P size="small" className="max-w-[720px]">{text}</P>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
