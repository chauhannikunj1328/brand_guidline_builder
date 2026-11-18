import type { Metadata } from "next";
import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { currentLang } from "@/lib/i18n/server";
import { getShell, getVoiceText } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import PageShell from "@/components/site/PageShell";
import { RowHero } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import { Examples, principle1Examples, principle2Examples, principle3Examples } from "@/components/voice/Examples";
import { Check } from "@/components/ui";
import { ArrowRightIcon } from "@/components/ui/icons";
import Photo from "@/components/ui/Photo";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await currentLang();
  return { title: (await getVoiceText(lang)).title, alternates: alternatesFor(lang, "/brand-voice") };
}

const N = "Rectio";
const sg = "font-[family-name:var(--font-secondary)]";

/* The three sample ads in the hero are English mock-ups (like the examples further down), so they are not translated. */
const heroCards: { title: ReactNode; className: string; text: string; src?: string; crop?: CSSProperties; shade?: boolean }[] = [
  { title: <>{N} delivers.<br />Yes, even here.</>, className: "bg-white text-[2.875rem] leading-[54px]", text: "text-black" },
  { title: <>Calling all outdoor<br />explorers.</>, className: "text-[2.5rem] font-medium leading-[48px]", text: "text-white", src: "voice/hero-outdoor.png", crop: { height: "198.82%", left: 0, top: "-15.95%", width: "100%" }, shade: true },
  { title: <>The Hype<br />is Real.</>, className: "text-[2.875rem] leading-[54px]", text: "text-white", src: "voice/hero-hype.png" },
];

/** Card colours for the three principles, in the same order as the text in the language file. */
const principleStyles = [
  { cls: "bg-white", head: "text-pampas-950", body: "text-grey-700", num: "border-pampas-600 text-grey-950" },
  { cls: "bg-pampas-200", head: "text-pampas-950", body: "text-grey-700", num: "border-pampas-600 text-grey-950" },
  { cls: "bg-pampas-700", head: "text-white", body: "text-white", num: "border-pampas-200 text-white" },
];

const closingStyles = [
  { cls: "bg-pampas-100 text-grey-700", num: "border-pampas-600 text-grey-950" },
  { cls: "bg-pampas-300 text-grey-700", num: "border-pampas-600 text-grey-950" },
  { cls: "bg-pampas-700 text-white", num: "border-white text-white" },
  { cls: "bg-pampas-800 text-white", num: "border-white text-white" },
];

function Num({ n, className = "border-pampas-600 text-grey-950" }: { n: number; className?: string }) {
  return <span className={`flex size-6 shrink-0 items-center justify-center rounded-full border-[0.5px] text-xs font-medium leading-4 ${sg} ${className}`}>{n}</span>;
}

/** Principle text at the start, Do / Don't at the end (Figma: 426px + 180px gap + 238px). */
function PrincipleIntro({ label, n, name, text, doLabel, dontLabel, doText, dontText }: { label: string; n: number; name: string; text: string[]; doLabel: string; dontLabel: string; doText: string; dontText: string }) {
  return (
    <div className="flex flex-col gap-10 xl:flex-row xl:gap-[180px]">
      <div className="space-y-4 xl:w-[426px] xl:shrink-0">
        <h2 className="text-[2rem] leading-10 text-grey-950"><span className="block font-light">{label} {n}</span><span className="block font-medium">{name}</span></h2>
        <div className="space-y-6 text-base leading-6 text-grey-600">{text.map((p) => <p key={p}>{p}</p>)}</div>
      </div>
      <div className="flex max-w-[238px] flex-col gap-4">
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-base font-medium leading-6 text-grey-950"><Check /> {doLabel}</p>
          <p className={`text-xs font-medium leading-4 text-grey-600 ${sg}`}>{doText}</p>
        </div>
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-base font-medium leading-6 text-grey-950">
            <span className="flex size-7 items-center justify-center"><Image src="/brand/voice/x-filled.svg" alt="" width={21} height={21} /></span> {dontLabel}
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

/** Title + numbered points at the start, paragraphs at the end; `card` puts it on a Pampas-100 panel. */
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
      <div className={`${practiceBody} ${card ? "" : "lg:max-w-[502px]"}`}>{text.map((p) => <p key={p}>{p}</p>)}</div>
    </div>
  );
  return card ? <div className="flex flex-col justify-center rounded-[32px] bg-pampas-100 px-5 py-[60px] lg:min-h-[400px] lg:px-[50px]">{row}</div> : row;
}

/** Which of the best-practice items sit on a Pampas panel (the others sit on white). */
const practiceCards = [true, false, true, false, true, false];
const exampleSets = [principle1Examples, principle2Examples, principle3Examples];

export default async function Page() {
  const lang = await currentLang();
  const [t, shell] = await Promise.all([getVoiceText(lang), getShell(lang)]);
  const tagline = shell.brand.taglineLines.join(" ");
  const rail = [
    {
      group: t.rail.group,
      id: "voice-principles",
      items: [
        { id: "overview", label: t.rail.overview },
        { id: "conversational", label: t.rail.conversational },
        { id: "captivating", label: t.rail.captivating },
        { id: "confident", label: t.rail.confident },
      ],
    },
    { id: "cheat-sheet", label: t.rail.cheatSheet },
    { id: "best-practices", label: t.rail.bestPractices },
  ];
  const intro = (i: number) => {
    const p = t.principles[i];
    return <PrincipleIntro label={t.principleLabel} n={i + 1} name={p.name} text={p.text} doLabel={t.do} dontLabel={t.dont} doText={p.do} dontText={p.dont} />;
  };
  const emojiItems = (
    <ol className="max-w-[313px] space-y-4 text-[10px] leading-4 text-grey-950">
      <li className="flex items-start gap-2"><Num n={1} /><div className="space-y-3.5"><p>{t.best.emojis[0]}</p><p aria-hidden dir="ltr" className="flex gap-4 text-[2.2rem] leading-none"><span>😃</span><span>😉</span><span>😎</span></p></div></li>
      <li className="flex items-start gap-2"><Num n={2} /><div className="space-y-3.5"><p>{t.best.emojis[1]}</p><p aria-hidden dir="ltr" className="flex gap-4 text-[2.2rem] leading-none"><span>👏🏿</span><span>👏🏽</span><span>👏🏻</span></p></div></li>
    </ol>
  );
  return (
    <PageShell
      title={t.title}
      rail={rail}
      hero={
        <RowHero title={t.title}>
          {/* Endless strip: four copies of the set, so the track fills ultra-wide screens and -50% lands on an identical frame.
              English sample ads, so it always runs left to right. */}
          <div aria-hidden dir="ltr" lang="en" className="-mx-5 min-w-0 flex-1 overflow-hidden lg:-mx-[120px]">
            <div className="marquee-track flex w-max [--marquee-duration:70s]">
              {[0, 1, 2, 3].map((n) => heroCards.map((c, i) => (
                <div key={`${n}-${i}`} className={`relative mr-4 flex h-[300px] w-[340px] shrink-0 overflow-hidden p-6 lg:h-[340px] lg:w-[507px] ${c.src ? "" : "bg-white"}`}>
                  {c.src && <div className="absolute inset-0 overflow-hidden"><Photo src={c.src} crop={c.crop} sizes="507px" /></div>}
                  {c.shade && <div className="absolute inset-0 bg-black/10" />}
                  <div className="relative flex flex-1 flex-col items-start justify-between">
                    <p className={`${c.className} ${c.text}`}>{c.title}</p>
                    <span className="inline-flex w-[122px] justify-center rounded-lg bg-pampas-700 px-2 py-3 text-base font-medium leading-6 text-white">Shop now</span>
                  </div>
                </div>
              )))}
            </div>
          </div>
        </RowHero>
      }
      after={<ExploreAssets current="voice" />}
    >
      <section id="voice-principles" className="scroll-mt-6 space-y-[60px] bg-white px-5 pb-20 pt-24 lg:px-[70px] lg:pt-[140px]">
        <h2 className="t-section text-black">{t.principlesSection.heading}</h2>
        <div className="t-intro max-w-[863px] space-y-12">
          <p>{t.principlesSection.p1}</p>
          <p>{t.principlesSection.p2}</p>
        </div>
      </section>

      <section id="overview" className="scroll-mt-6 flex flex-col gap-20 bg-pampas-100 px-5 py-16 lg:p-[70px]">
        <div className="space-y-8">
          <h2 className={`text-[2.5rem] font-medium leading-[48px] text-pampas-950 ${sg}`}>{t.overview.heading}</h2>
          <div className="max-w-[478px] space-y-4 text-xl leading-7 text-grey-700">
            <p>{t.overview.p1}</p>
            <p>{t.overview.p2}</p>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {t.principles.map((p, i) => (
            <div key={i} className={`flex flex-col gap-4 rounded-[20px] p-6 lg:h-[120px] lg:flex-row lg:items-center lg:gap-6 ${principleStyles[i].cls}`}>
              <div className={`flex w-[166px] shrink-0 items-center gap-3 text-lg leading-6 ${principleStyles[i].head} ${sg}`}>
                <Num n={i + 1} className={principleStyles[i].num} />
                {p.from}
                <ArrowRightIcon className="size-6 rtl:-scale-x-100" />
              </div>
              <p className={`flex-1 text-[2.5rem] leading-[48px] ${principleStyles[i].head}`}>{p.name}</p>
              <p className={`flex-1 text-base leading-6 ${principleStyles[i].body}`}>{p.short}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="conversational" className="scroll-mt-6 flex flex-col gap-20 bg-white px-5 py-20 lg:px-[70px]">
        {intro(0)}
        <Examples heading={t.examples} items={exampleSets[0]} />
      </section>

      <section className="bg-white px-5 pb-20 lg:px-[70px]">
        <div id="captivating" className="scroll-mt-6 flex flex-col gap-12 rounded-[32px] bg-pampas-100 px-5 py-[60px] lg:px-[50px]">
          {intro(1)}
          <Examples heading={t.examples} items={exampleSets[1]} />
        </div>
      </section>

      <section id="confident" className="scroll-mt-6 flex flex-col gap-20 bg-white px-5 py-20 lg:px-[70px]">
        {intro(2)}
        <Examples heading={t.examples} items={exampleSets[2]} />

        <div id="cheat-sheet" className="scroll-mt-6 flex flex-col gap-10 rounded-[32px] bg-pampas-100 px-5 py-[60px] lg:px-[50px]">
          <h2 className="text-[2rem] font-medium leading-10 text-grey-950">{t.cheat.title[0]}<br />{t.cheat.title[1]}</h2>
          <div className="flex flex-col gap-8">
            <div className="space-y-6">
              <CheatHead title={t.cheat.purpose} note={t.cheat.purposeNote} />
              <p className="rounded-[20px] bg-primary p-6 text-center text-[1.75rem] leading-9 text-white lg:text-[2.5rem] lg:leading-[48px]">{tagline}</p>
            </div>
            <div className="space-y-6">
              <CheatHead title={t.cheat.brand} note={t.cheat.brandNote} />
              <div className="grid gap-4 md:grid-cols-3">
                {t.principles.map((p, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div className="w-full flex-1"><CheatCard title={p.from} text={p.brand} /></div>
                    <span aria-hidden className="h-7 w-px bg-pampas-600" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <CheatHead title={t.cheat.voice} note={t.cheat.voiceNote} />
              <div className="grid gap-4 md:grid-cols-3">
                {t.principles.map((p, i) => <CheatCard key={i} title={p.name} text={p.cheat} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="best-practices" className="scroll-mt-6 flex flex-col gap-20 bg-white px-5 py-20 lg:px-[70px]">
        <div className="space-y-[60px]">
          <h2 className="t-section text-black">{t.best.heading}</h2>
          <div className="t-intro max-w-[863px] space-y-12">
            <p>{t.best.p1}</p>
            <p>{t.best.p2}</p>
          </div>
        </div>

        <div className="flex flex-col gap-[60px]">
          {t.best.items.map((item, i) => (
            <Practice key={i} card={practiceCards[i]} title={item.title} points={item.points} text={item.text}>
              {i === t.best.items.length - 1 ? emojiItems : undefined}
            </Practice>
          ))}
        </div>

        <div className="flex flex-col gap-8">
          {t.closing.map((text, i) => (
            <div key={i} className={`flex items-center justify-center rounded-[20px] p-6 lg:h-[132px] ${closingStyles[i].cls}`}>
              <div className="flex w-full max-w-[880px] items-center justify-between gap-6">
                <Num n={i + 1} className={closingStyles[i].num} />
                <p className="flex-1 text-lg leading-6 lg:max-w-[688px]">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
