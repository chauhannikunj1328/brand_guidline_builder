import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import { RowHero } from "@/components/site/PageHero";
import ExploreAssets, { NEXT_UP } from "@/components/site/ExploreAssets";
import { Examples, principle1Examples, principle2Examples, principle3Examples } from "@/components/voice/Examples";
import { Check } from "@/components/ui";
import { ArrowRightIcon } from "@/components/ui/icons";
import Photo from "@/components/ui/Photo";

export const metadata: Metadata = { title: "Brand Voice" };

const N = brand.name;
const sg = "font-[family-name:var(--font-secondary)]";

const rail = [
  {
    group: "Voice Principles",
    id: "voice-principles",
    items: [
      { id: "overview", label: "Overview" },
      { id: "conversational", label: "Conversational" },
      { id: "captivating", label: "Captivating" },
      { id: "confident", label: "Confident" },
    ],
  },
  { id: "cheat-sheet", label: "Cheat Sheet" },
  { id: "best-practices", label: "Best Practices" },
];

const heroCards: { title: ReactNode; className: string; text: string; src?: string; crop?: CSSProperties; shade?: boolean }[] = [
  { title: <>{N} delivers.<br />Yes, even here.</>, className: "bg-white text-[2.875rem] leading-[54px]", text: "text-black" },
  { title: <>Calling all outdoor<br />explorers.</>, className: "text-[2.5rem] font-medium leading-[48px]", text: "text-white", src: "voice/hero-outdoor.png", crop: { height: "198.82%", left: 0, top: "-15.95%", width: "100%" }, shade: true },
  { title: <>The Hype<br />is Real.</>, className: "text-[2.875rem] leading-[54px]", text: "text-white", src: "voice/hero-hype.png" },
];

const principles = [
  { from: "Grassroots", name: "Conversational", cls: "bg-white", head: "text-pampas-950", body: "text-grey-700", num: "border-pampas-600 text-grey-950", brand: "We never forget our humble beginnings; we're relatable, down-to-earth and part of the community.", short: "Our voice is just as down-to-earth as our customers and associates. We want to be the realest voice in our category.", cheat: "Our voice is just as down-to-earth as our customers and associates. We’re the realest voice in our category." },
  { from: "Agile", name: "Captivating", cls: "bg-pampas-200", head: "text-pampas-950", body: "text-grey-700", num: "border-pampas-600 text-grey-950", brand: "Agility is our x-factor. We are constantly improving, endlessly testing, always adapting.", short: "We must always engage the reader, so our voice needs to be dynamic and energizing.", cheat: "We must always engage the reader, so our voice needs to be dynamic and energizing." },
  { from: "Pioneering", name: "Confident", cls: "bg-primary", head: "text-white", body: "text-white", num: "border-pampas-200 text-white", brand: "Since the beginning, we’ve blazed a path and never settled because that’s what it takes to make life better and easier.", short: `Because ${N} is a leader, our voice should be decisive and inspiring.`, cheat: `Because ${N} is a leader, our voice should be decisive and inspiring.` },
];

const closing = [
  { text: "We’re always Conversational, Captivating, and Confident, but our writing will lean into—or away from—a principle depending on what we’re writing and who we’re writing for.", cls: "bg-pampas-100 text-grey-700", num: "border-pampas-600 text-grey-950" },
  { text: "Consider every customer. Demographics and backgrounds matter, so make sure your words are clear and resonate with the majority.", cls: "bg-pampas-300 text-grey-700", num: "border-pampas-600 text-grey-950" },
  { text: "Write how you talk. Literally.", cls: "bg-pampas-600 text-white", num: "border-white text-white" },
  { text: "We are the realest voice in our category. Live it. Breathe it. Own it.", cls: "bg-pampas-800 text-white", num: "border-white text-white" },
];

function Num({ n, className = "border-pampas-600 text-grey-950" }: { n: number; className?: string }) {
  return <span className={`flex size-6 shrink-0 items-center justify-center rounded-full border-[0.5px] text-xs font-medium leading-4 ${sg} ${className}`}>{n}</span>;
}

/** Principle text left, Do / Don't right (Figma: 426px + 180px gap + 238px). */
function PrincipleIntro({ n, name, text, doText, dontText }: { n: number; name: string; text: string[]; doText: string; dontText: string }) {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:gap-[180px]">
      <div className="space-y-4 lg:w-[426px] lg:shrink-0">
        <h2 className="text-[2rem] leading-10 text-grey-950"><span className="block font-light">Principle {n}</span><span className="block font-medium">{name}</span></h2>
        <div className="space-y-6 text-base leading-6 text-grey-600">{text.map((t) => <p key={t}>{t}</p>)}</div>
      </div>
      <div className="flex max-w-[238px] flex-col gap-4">
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-base font-medium leading-6 text-grey-950"><Check /> Do</p>
          <p className={`text-xs font-medium leading-4 text-grey-600 ${sg}`}>{doText}</p>
        </div>
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-base font-medium leading-6 text-grey-950">
            <span className="flex size-7 items-center justify-center"><Image src="/brand/voice/x-filled.svg" alt="" width={21} height={21} /></span> Don&apos;t
          </p>
          <p className={`text-xs font-medium leading-4 text-grey-600 ${sg}`}>{dontText}</p>
        </div>
      </div>
    </div>
  );
}

/** Heading-above-white-text card used three times in the cheat sheet. */
function CheatCard({ title, text }: { title: string; text: string }) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-[20px] ${sg}`}>
      <p className="bg-pampas-200 py-2 text-center text-base leading-6 text-grey-950">{title}</p>
      <p className="flex-1 bg-white px-3.5 py-3 text-center text-xs leading-4 text-grey-700">{text}</p>
    </div>
  );
}

function CheatHead({ title, note }: { title: string; note: string }) {
  return (
    <div className="space-y-0.5 text-center">
      <p className="text-lg font-medium leading-6 text-grey-950">{title}</p>
      <p className={`text-xs leading-4 text-grey-700 ${sg}`}>{note}</p>
    </div>
  );
}

const practiceBody = "flex flex-1 flex-col gap-4 text-base leading-6 text-grey-950";

/** Title + numbered points left, paragraphs right; `card` puts it on a Pampas-100 panel. */
function Practice({ title, points, text, card, children }: { title: string; points: string[]; text: string[]; card?: boolean; children?: ReactNode }) {
  const row = (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
      <div className={`space-y-6 ${card ? "lg:w-[314px]" : "lg:w-[364px]"} lg:shrink-0`}>
        <h3 className="text-[2rem] font-medium leading-10 text-grey-950">{title}</h3>
        {children ?? (
          <ol className="max-w-[313px] space-y-3">
            {points.map((p, i) => <li key={p} className="flex items-center gap-2 text-[10px] leading-4 text-grey-950"><Num n={i + 1} /> {p}</li>)}
          </ol>
        )}
      </div>
      <div className={`${practiceBody} ${card ? "" : "lg:max-w-[502px]"}`}>{text.map((t) => <p key={t}>{t}</p>)}</div>
    </div>
  );
  return card ? <div className="flex flex-col justify-center rounded-[32px] bg-pampas-100 px-5 py-[60px] lg:min-h-[400px] lg:px-[50px]">{row}</div> : row;
}

export default function Page() {
  return (
    <PageShell
      title="Brand Voice"
      rail={rail}
      hero={
        <RowHero title="Brand Voice">
          {heroCards.map((c, i) => (
            <div key={i} className={`relative flex h-[300px] w-[340px] shrink-0 overflow-hidden p-6 lg:h-[340px] lg:w-[507px] ${c.src ? "" : "bg-white"}`}>
              {c.src && <div className="absolute inset-0 overflow-hidden"><Photo src={c.src} crop={c.crop} sizes="507px" /></div>}
              {c.shade && <div className="absolute inset-0 bg-black/10" />}
              <div className="relative flex flex-1 flex-col items-start justify-between">
                <p className={`${c.className} ${c.text}`}>{c.title}</p>
                <span className="inline-flex w-[122px] justify-center rounded-lg bg-primary px-2 py-3 text-base font-medium leading-6 text-white">Shop now</span>
              </div>
            </div>
          ))}
        </RowHero>
      }
      after={<ExploreAssets items={NEXT_UP} heading={null} />}
    >
      <section id="voice-principles" className="scroll-mt-6 space-y-[60px] bg-white px-5 pb-20 pt-24 lg:px-[70px] lg:pt-[140px]">
        <h2 className="t-section text-black">Voice Principles</h2>
        <div className="t-intro max-w-[863px] space-y-12">
          <p>Our Voice Principles inform how we speak to customers, from the content on their social feeds to their experience in a local {N} store.</p>
          <p>These principles are a direct translation of our core Brand Principles, specifically tailored for verbal and written expression.</p>
        </div>
      </section>

      <section id="overview" className="scroll-mt-6 flex flex-col gap-20 bg-pampas-100 px-5 py-16 lg:p-[70px]">
        <div className="space-y-8">
          <h2 className={`text-[2.5rem] font-medium leading-[48px] text-pampas-950 ${sg}`}>Overview</h2>
          <div className="max-w-[478px] space-y-4 text-xl leading-7 text-grey-700">
            <p>These principles guide the execution of our brand voice across all communications. These principles apply to customer-facing marketing comms, but it&apos;s also how we should be writing decks, pitches, etc. Every single Associate is a steward of our voice!</p>
            <p>Our Voice Principles may be dialed up or down to best suit your specific communication needs. Sometimes, you’ll need to emphasize one principle more heavily than another, while other times you’ll have copy that leverages all three principles equally. Flexible usage is encouraged, as long as you can point to one or more Voice Principle in your copy.</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {principles.map((p, i) => (
            <div key={p.name} className={`flex flex-col gap-4 rounded-[20px] p-6 lg:h-[120px] lg:flex-row lg:items-center lg:gap-6 ${p.cls}`}>
              <div className={`flex w-[166px] shrink-0 items-center gap-3 text-lg leading-6 ${p.head} ${sg}`}>
                <Num n={i + 1} className={p.num} />
                {p.from}
                <ArrowRightIcon />
              </div>
              <p className={`flex-1 text-[2.5rem] leading-[48px] ${p.head}`}>{p.name}</p>
              <p className={`flex-1 text-base leading-6 ${p.body}`}>{p.short}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="conversational" className="scroll-mt-6 flex flex-col gap-20 bg-white px-5 py-20 lg:px-[70px]">
        <PrincipleIntro
          n={1}
          name="Conversational"
          text={[
            "Our voice is just as down-to-earth as our customers and associates. We want to be the realest voice in our category, so we need to avoid confusing our customers with marketing speak.",
            "Our tone is familiar and straightforward while using friendly, dressed-down language. We maintain a positive and optimistic perspective on everyday life, from parties to chores and everything in between.",
          ]}
          doText="Aim for the easy read. Use simple word choices, clear sentence structures, and well-known turns of phrase."
          dontText="Complicate things with industry jargon, uncommon phrasing or complex words. When in doubt, ask yourself: would you say this in an everyday conversation?"
        />
        <Examples items={principle1Examples} />
      </section>

      <section className="bg-white px-5 pb-20 lg:px-[70px]">
        <div id="captivating" className="scroll-mt-6 flex flex-col gap-12 rounded-[32px] bg-pampas-100 px-5 py-[60px] lg:px-[50px]">
          <PrincipleIntro
            n={2}
            name="Captivating"
            text={[
              "We have to engage the reader, so our voice needs to be dynamic and energizing. Our tone combines levity with an irresistible magnetism that appeals to readers. Whatever the subject, we talk about it in a current, relevant way with infectious energy. We choose words that are memorable and interesting while still feeling casual and conversational.",
              "Never shy away from moments that are relatable, entertaining, and timely.",
            ]}
            doText="Use wordplay, subtle rhymes, and punchy sentence structures. Have fun with your writing and make it engaging and vibrant."
            dontText="Tell jokes. Our humor and fun come from a place of relatability, centering the customer and their experiences so we never become cheesy or contrived."
          />
          <Examples items={principle2Examples} />
        </div>
      </section>

      <section id="confident" className="scroll-mt-6 flex flex-col gap-20 bg-white px-5 py-20 lg:px-[70px]">
        <PrincipleIntro
          n={3}
          name="Confident"
          text={[
            `Because ${N} is a leader, our voice is decisive and inspiring. We speak with a positivity that’s impactful and reassuring. When we write confidently, our customers feel they can be confident too. Our words help them make it simple and make it theirs, so we don't speak in ambiguity—we’re declarative and direct, inspiring people to act.`,
          ]}
          doText="Be specific and direct. Showing expertise when discussing moments or products helps your copy connect with customers. Tie everyday complications and quick solves to product use cases."
          dontText="Be vague. Vagueness clouds the intent of your copy and will feel passive, bland, and boring."
        />
        <Examples items={principle3Examples} />

        <div id="cheat-sheet" className="scroll-mt-6 flex flex-col gap-10 rounded-[32px] bg-pampas-100 px-5 py-[60px] lg:px-[50px]">
          <h2 className="text-[2rem] font-medium leading-10 text-grey-950">Voice Principles<br />Cheat Sheet</h2>
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <CheatHead title="Brand Purpose" note="Guides the enterprise." />
              <p className="rounded-[20px] bg-primary p-6 text-center text-[1.75rem] leading-9 text-white lg:text-[2.5rem] lg:leading-[48px]">{brand.tagline}</p>
            </div>
            <div className="space-y-6">
              <CheatHead title="Brand Principles" note="Guide our brand expression." />
              <div className="grid gap-4 md:grid-cols-3">
                {principles.map((p) => (
                  <div key={p.from} className="flex flex-col items-center gap-2">
                    <div className="w-full flex-1"><CheatCard title={p.from} text={p.brand} /></div>
                    <span aria-hidden className="h-7 w-px bg-pampas-600" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <CheatHead title="Voice Principles" note="Derived from our Brand Principles these are specifically tailored for easy implementation through language." />
              <div className="grid gap-4 md:grid-cols-3">
                {principles.map((p) => <CheatCard key={p.name} title={p.name} text={p.cheat} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="best-practices" className="scroll-mt-6 flex flex-col gap-20 bg-white px-5 py-20 lg:px-[70px]">
        <div className="space-y-[60px]">
          <h2 className="t-section text-black">Best Practices</h2>
          <div className="t-intro max-w-[863px] space-y-12">
            <p>At {N}, it’s important that we speak with a consistent, unified voice.</p>
            <p>The following section includes best practices and guidance to help maintain our verbal style so we always sound authentically {N}.</p>
          </div>
        </div>

        <div className="flex flex-col gap-[60px]">
          <Practice
            card
            title="On Clarity"
            points={["Clarity is crucial in conveying information.", "Ensure your intent cannot be misunderstood."]}
            text={[
              "Our brand voice is Conversational, Captivating, and Confident, but there’s a fourth C that’s vital to everything we write: Clarity.",
              "We never lose sight of how large our audience is and that our primary objective in every communication is to convey information to that audience. The brief is always top of mind, so ask yourself: Does my copy translate the brief so clearly that the intent can’t be misunderstood? The best copy incorporates shades of all our Voice Principles, but first and foremost, all copy should be clear.",
            ]}
          />
          <Practice
            title="On Value"
            points={["Find new ways to say repeated phrases.", "Consider how value affects the reader."]}
            text={[
              "When storytelling with value, push yourself to find new ways to say commonly repeated phrases like “faves,” “finds,” “essentials” or “must-haves.” While these words work in a pinch, we always want to beat them.",
              "Also consider how value affects the reader. Will less expensive bathing suits mean more vacation options to pack? Will a lower price on sweatpants mean a cozier winter? Find the relationship between the item and the customer beyond the price.",
            ]}
          />
          <Practice
            card
            title="On Humor"
            points={["Be observational and relatable.", "Don't tell jokes outside our social channels."]}
            text={[
              `${N} embraces the humor in everyday life rather than telling jokes.* We love the little things that make life great, and we relate to the moments that can be groan-worthy. Our humor comes from that relatability—when we get a smile from our readers and they think “Ha, ${N} gets me.”`,
              "*Jokes are the lifeblood of social media, and we’re in on the joke. Our relevance on those platforms depends on it, so we make jokes, share memes, and engage with our followers in ways that differ from our interactions in other channels.",
            ]}
          />
          <Practice
            title="On Puns"
            points={["Do not use puns."]}
            text={[
              "We resist using puns. While we admit they’re a fun and helpful shortcut, they’re also the lowest-hanging fruit. We believe there is always a deeper truth or more entertaining story to be told behind each pun.",
              `There will be exceptions over time (such as headlines inspired by dad-worthy puns for Father’s Day) but please keep our general “no puns” rule in mind when writing as ${N}.`,
            ]}
          />
          <Practice
            card
            title="On Being Current"
            points={["Learn through social listening.", "Be relatable-at-scale.", "Use contemporary language."]}
            text={[
              "We stay current with culture through social listening. Discovering new turns of phrase, shared cultural references and sentence structures is as easy as scrolling through social media.",
              `Ultimately, however, we need to temper our language to be relatable-at-scale. Our writing shouldn’t be on the cutting edge of slang or internet speak, but should employ contemporary language that is used or understood by the majority of our customers and helps ${N} feel modern and fresh.`,
            ]}
          />
          <Practice
            title="On Emojis"
            points={[]}
            text={[
              "Emojis are a powerful tool in our CRM and social media platforms. We use them when they add to—and don't distract from—the story we’re telling. Inclusivity is always top of mind, so use this general rule of thumb.",
              "Smileys convey general emotion and are only available in the yellow skin tone. Use these emojis as you like.",
              "Body part emojis reflect specific human movements and are available in multiple skin tones. Always use a set of 3 versions of the same emoji to convey the full range of our customers’ identities.",
            ]}
          >
            <ol className="max-w-[313px] space-y-4 text-[10px] leading-4 text-grey-950">
              <li className="flex items-start gap-2"><Num n={1} /><div className="space-y-3.5"><p>Use smileys to convey general emotion.</p><p aria-hidden className="flex gap-4 text-[2.2rem] leading-none"><span>😃</span><span>😉</span><span>😎</span></p></div></li>
              <li className="flex items-start gap-2"><Num n={2} /><div className="space-y-3.5"><p>Use body part emojis in sets of three to reflect our diverse customers.</p><p aria-hidden className="flex gap-4 text-[2.2rem] leading-none"><span>👏🏿</span><span>👏🏽</span><span>👏🏻</span></p></div></li>
            </ol>
          </Practice>
        </div>

        <div className="flex flex-col gap-8">
          {closing.map((c, i) => (
            <div key={c.text} className={`flex items-center justify-center rounded-[20px] p-6 lg:h-[132px] ${c.cls}`}>
              <div className="flex w-full max-w-[880px] items-center justify-between gap-6">
                <Num n={i + 1} className={c.num} />
                <p className="flex-1 text-lg leading-6 lg:max-w-[688px]">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
