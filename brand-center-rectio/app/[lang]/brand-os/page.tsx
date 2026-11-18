import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { brand } from "@/content/brand.config";
import { currentLang } from "@/lib/i18n/server";
import { getBrandOsText } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import PageShell from "@/components/site/PageShell";
import { RowHero } from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import PillTabs from "@/components/brand-os/PillTabs";
import { Check } from "@/components/ui";
import { AddIcon, ArrowRightIcon } from "@/components/ui/icons";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await currentLang();
  return { title: (await getBrandOsText(lang)).title, alternates: alternatesFor(lang, "/brand-os") };
}

const sg = "font-[family-name:var(--font-secondary)]";

/** Mock-up exported from Figma; keeps its aspect ratio and scales with the column. */
function Art({ src, w, h, alt = "", sizes }: { src: string; w: number; h: number; alt?: string; sizes?: string }) {
  return (
    <div className="relative w-full overflow-hidden" style={{ aspectRatio: `${w} / ${h}` }}>
      <Image src={`/brand/os/${src}.png`} alt={alt} fill sizes={sizes ?? `${w}px`} className="object-cover" />
    </div>
  );
}

function Num({ n }: { n: number }) {
  return <span className={`flex size-6 shrink-0 items-center justify-center rounded-full border-[0.5px] border-pampas-600 text-xs font-medium leading-4 text-grey-950 ${sg}`}>{n}</span>;
}

function Steps({ items, className = "text-[10px] leading-4" }: { items: string[]; className?: string }) {
  return (
    <ol className="space-y-2">
      {items.map((t, i) => <li key={t} className={`flex items-start gap-2 text-grey-950 ${className}`}><Num n={i + 1} /><span className="pt-1">{t}</span></li>)}
    </ol>
  );
}

function Verdict({ ok, children }: { ok: boolean; children: ReactNode }) {
  return (
    <p className="flex items-start gap-2 text-xs leading-4 text-grey-700">
      {ok ? <Check className="size-6" /> : <span className="flex size-6 shrink-0 items-center justify-center"><Image src="/brand/voice/x-filled.svg" alt="" width={18} height={18} /></span>}
      <span className="pt-1">{children}</span>
    </p>
  );
}

/** Heading + paragraphs + numbered points on the left, two columns of mock-ups on the right. */
function Behavior({ id, title, text, steps, left, right }: { id: string; title: string; text: string[]; steps: string[]; left: ReactNode; right: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-6 flex flex-col gap-8 p-0 lg:flex-row lg:justify-between lg:px-[30px]">
      <div className="space-y-6 lg:w-[313px] lg:shrink-0">
        <div className="space-y-4">
          <h2 className="text-[2rem] font-medium leading-10 text-grey-950">{title}</h2>
          <div className="space-y-4 text-base leading-6 text-grey-700">{text.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
        <Steps items={steps} />
      </div>
      <div className="grid flex-1 gap-5 sm:grid-cols-2 lg:max-w-[674px]">
        <div>{left}</div>
        <div>{right}</div>
      </div>
    </div>
  );
}

const card = "rounded-[32px] bg-white p-6 lg:p-[50px]";
const cardHead = "space-y-4 lg:max-w-[379px]";
const h2 = "text-[2rem] font-medium leading-10 text-grey-950";
const body = "text-base leading-6 text-grey-700";

const opticalRadius = [
  { src: "optical-radius-small", w: 323, ok: false },
  { src: "optical-radius-right", w: 325, ok: true },
  { src: "optical-radius-large", w: 325, ok: false },
];
const opticalOutline = [
  { src: "optical-outline-thin", w: 323, ok: false },
  { src: "optical-outline-right", w: 331, ok: true },
  { src: "optical-outline-thick", w: 325, ok: false },
];

function Optical({ heading, text, items, labels }: { heading: string; text: string; items: typeof opticalRadius; labels: string[] }) {
  return (
    <div className="flex flex-col gap-10">
      <div className={cardHead}>
        <h2 className={h2}>{heading}</h2>
        <p className={body}>{text}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((o, i) => (
          <figure key={o.src} className="space-y-3">
            <Art src={o.src} w={o.w} h={260} sizes="(min-width: 1024px) 325px, 100vw" />
            <Verdict ok={o.ok}>{labels[i]}</Verdict>
          </figure>
        ))}
      </div>
    </div>
  );
}

function FrameNote({ heading, label, text, src, h }: { heading: string; label: string; text: string[]; src: string; h: number }) {
  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
      <div className="space-y-4 lg:w-[364px] lg:shrink-0">
        <h2 className={h2}>{heading}</h2>
        <div className="space-y-3">
          <p className="text-lg font-medium leading-6 text-grey-950">{label}</p>
          <div className={`space-y-3 ${body}`}>{text.map((t) => <p key={t}>{t}</p>)}</div>
        </div>
      </div>
      <div className="w-full lg:max-w-[519px]"><Art src={src} w={519} h={h} sizes="519px" /></div>
    </div>
  );
}

const specSrc = ["spec-cta", "spec-action", "spec-search", "spec-accent"];

const buttonArt = [["cta-1", "cta-2"], ["action-1", "action-2"], ["search-1", "search-2"], ["accent-1", "accent-2"]];


export default async function Page() {
  const lang = await currentLang();
  const t = await getBrandOsText(lang);
  const withName = (x: string) => x.replace("{name}", brand.name);

  const tagWords = brand.tagline.split(" ");
  const taglineTile = "text-[1.75rem] leading-[40px] text-white";
  const frameDonts: { art: ReactNode }[] = [
    { art: <Art src="fdont-1" w={244} h={278} /> },
    { art: <Art src="fdont-2" w={244} h={278} /> },
    { art: <Art src="fdont-3" w={244} h={278} /> },
    {
      art: (
        <div className="relative">
          <Art src="fdont-4" w={244} h={278} />
          <p lang="en" dir="ltr" className="absolute inset-x-[5%] bottom-[4%] top-[64%] rounded-xl border border-grey-300 bg-white p-2.5 text-[1.05rem] leading-[1.25] text-black">{brand.taglineLines[0]} {brand.taglineLines[1]}</p>
        </div>
      ),
    },
    {
      art: (
        <div className="flex items-stretch bg-pampas-100 p-3" style={{ aspectRatio: "244 / 278" }}>
          <p lang="en" dir="ltr" className={`flex-1 rounded-xl bg-pampas-600 p-3 ${taglineTile}`}>{tagWords.join(" ")}</p>
        </div>
      ),
    },
    { art: <Art src="fdont-6" w={244} h={278} /> },
    {
      art: (
        <div className="flex items-stretch bg-pampas-600 p-3" style={{ aspectRatio: "244 / 278" }}>
          <p lang="en" dir="ltr" className={`flex-1 rounded-xl border border-white/80 p-3 ${taglineTile}`}>{tagWords.join(" ")}</p>
        </div>
      ),
    },
    { art: <Art src="fdont-8" w={244} h={278} /> },
  ];

  const rail = [
    { group: t.rail.frames, id: "frames", items: [
      { id: "ground-rules", label: t.rail.groundRules },
      { id: "frame-notes", label: t.rail.frameNotes },
      { id: "optical-guide", label: t.rail.optical },
      { id: "frame-behaviors", label: t.rail.behaviors },
      { id: "window", label: t.rail.window },
      { id: "window-tips", label: t.rail.windowTips },
      { id: "tiles", label: t.rail.tiles },
      { id: "tile-tips", label: t.rail.tileTips },
      { id: "outlines", label: t.rail.outlines },
      { id: "outline-tips", label: t.rail.outlineTips },
      { id: "frame-donts", label: t.rail.frameDonts },
    ] },
    { group: t.rail.buttons, id: "buttons", items: [
      { id: "styling", label: t.rail.styling },
      { id: "button-types", label: t.rail.buttonTypes },
      { id: "button-donts", label: t.rail.buttonDonts },
    ] },
  ];
  return (
    <PageShell
      title={t.title}
      rail={rail}
      hero={
        <RowHero title={t.title}>
          {/* Endless strip: six copies of the set, so the track fills ultra-wide screens and -50% lands on an identical frame. */}
          <div aria-hidden dir="ltr" className="-mx-5 min-w-0 flex-1 overflow-hidden lg:-mx-[120px]">
            <div className="marquee-track flex w-max">
              {Array.from({ length: 6 }, (_, n) => [
                { label: t.pills[0], icon: <AddIcon className="size-8 lg:size-12" />, cls: "bg-pampas-100" },
                { label: withName(t.pills[1]), cls: "border border-pampas-200 bg-white", search: true },
                { label: t.pills[2], icon: <ArrowRightIcon className="size-8 lg:size-12" />, cls: "bg-pampas-100" },
              ].map((p) => (
                <span key={`${n}-${p.label}`} className={`mr-5 flex shrink-0 lg:mr-10 items-center gap-4 whitespace-nowrap rounded-[80px] py-4 pl-6 pr-8 text-2xl text-pampas-700 lg:gap-6 lg:py-6 lg:pl-10 lg:pr-[60px] lg:text-[2.5rem] lg:leading-[48px] ${p.cls}`}>
                  {p.search && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="size-8 lg:size-12" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
                  )}
                  {p.label}
                  {p.icon}
                </span>
              )))}
            </div>
          </div>
        </RowHero>
      }
      after={<ExploreAssets current="brand-os" />}
    >
      <section id="frames" className="scroll-mt-6 space-y-[60px] bg-white px-5 pb-20 pt-24 lg:px-[70px] lg:pt-[140px]">
        <h2 className="t-section text-black">{t.frames.heading}</h2>
        <div className="t-intro max-w-[863px] space-y-12">
          <p>{t.frames.p1}</p>
          <p>{t.frames.p2}</p>
        </div>
      </section>

      <section id="ground-rules" className="scroll-mt-6 flex flex-col gap-20 bg-pampas-100 px-5 py-16 lg:p-[70px]">
        <div className="space-y-8">
          <h2 className={`text-[2.5rem] font-medium leading-[48px] text-pampas-950 ${sg}`}>{t.ground.heading}</h2>
          <div className="max-w-[740px] space-y-4 text-xl leading-7 text-grey-700">
            <p>{t.ground.p1}</p>
            <p>{t.ground.p2}</p>
          </div>
        </div>
        <div className="divide-y divide-grey-300">
          {t.ground.rules.map((g, i) => (
            <div key={i} className="flex flex-col gap-4 py-6 first:pt-0 last:pb-0 lg:flex-row lg:items-center lg:gap-5">
              <div className="flex items-center gap-5 lg:contents">
                <Num n={i + 1} />
                <p className="text-[2.5rem] leading-[48px] text-pampas-950 lg:w-[394px] lg:shrink-0">{g.title}</p>
              </div>
              <p className={`lg:max-w-[448px] ${body}`}>{g.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-20 bg-pampas-100 p-4 lg:px-[30px] lg:py-[70px]">
        <div id="frame-notes" className={`scroll-mt-6 ${card}`}>
          <PillTabs
            tabs={[
              {
                label: t.notes.radius.label,
                content: <FrameNote heading={t.notes.heading} label={t.notes.radius.label} src="notes-radius" h={495} text={t.notes.radius.text} />,
              },
              {
                label: t.notes.outline.label,
                content: <FrameNote heading={t.notes.heading} label={t.notes.outline.label} src="notes-outline" h={449} text={t.notes.outline.text} />,
              },
            ]}
          />
        </div>
        <div id="optical-guide" className={`scroll-mt-6 ${card}`}>
          <PillTabs
            tabs={[
              { label: t.optical.radius.tab, content: <Optical heading={t.optical.heading} items={opticalRadius} text={t.optical.radius.text} labels={t.optical.radius.labels} /> },
              { label: t.optical.outline.tab, content: <Optical heading={t.optical.heading} items={opticalOutline} text={t.optical.outline.text} labels={t.optical.outline.labels} /> },
            ]}
          />
        </div>
      </section>

      <section id="frame-behaviors" className="scroll-mt-6 space-y-6 bg-white px-5 py-20 lg:px-[70px]">
        <div className="space-y-4 text-[2rem] leading-10">
          <h2 className="font-medium text-grey-950">{t.behaviors.heading}</h2>
          <p className="max-w-[597px] font-light text-grey-600">{t.behaviors.intro}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { src: "behavior-window", w: 323 },
            { src: "behavior-tiles", w: 325 },
            { src: "behavior-outlines", w: 325 },
          ].map((b, i) => (
            <figure key={b.src} className="space-y-2.5">
              <Art src={b.src} w={b.w} h={200} sizes="(min-width: 1024px) 325px, 100vw" />
              <figcaption className={`flex items-center gap-2 text-xs leading-4 text-grey-600 ${sg}`}>
                <Num n={i + 1} />
                <span><b className="font-[family-name:var(--font-body)] font-medium text-pampas-700">{t.behaviors.items[i].label}</b> {t.behaviors.items[i].text}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-20 bg-pampas-100 p-4 lg:px-[30px] lg:pb-[70px] lg:pt-[120px]">
        <Behavior
          id="window"
          title={t.window.heading}
          text={t.window.text}
          steps={t.window.steps}
          left={<Art src="window-1" w={327} h={432} />}
          right={<Art src="window-2" w={327} h={432} />}
        />

        <div id="window-tips" className={`scroll-mt-6 flex flex-col gap-10 ${card}`}>
          <div className={cardHead}>
            <h2 className={h2}>{t.windowTips.heading}</h2>
            <p className={body}>{t.windowTips.intro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "wtip-1", ok: true },
              { src: "wtip-2", ok: false },
              { src: "wtip-3", ok: true },
              { src: "wtip-4", ok: false },
            ].map((w, i) => (
              <figure key={w.src} className="space-y-3">
                <p aria-hidden={!t.windowTips.items[i].head} className={`text-sm font-medium leading-5 text-grey-700 ${t.windowTips.items[i].head ? "" : "invisible hidden lg:block"}`}>{t.windowTips.items[i].head || "–"}</p>
                <Art src={w.src} w={239} h={330} />
                <Verdict ok={w.ok}>{t.windowTips.items[i].text}</Verdict>
              </figure>
            ))}
          </div>
        </div>

        <Behavior
          id="tiles"
          title={t.tiles.heading}
          text={t.tiles.text}
          steps={t.tiles.steps}
          left={<Art src="tiles-1" w={326} h={442} />}
          right={<Art src="tiles-2" w={328} h={442} />}
        />

        <div id="tile-tips" className={`scroll-mt-6 flex flex-col gap-20 ${card}`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
            <div className="space-y-6 lg:w-[368px]">
              <div className="space-y-4">
                <h2 className={h2}>{t.tileTips.heading}</h2>
                <p className={body}>{t.tileTips.intro}</p>
              </div>
              <Steps
                className="text-xs leading-4"
                items={t.tileTips.steps}
              />
            </div>
            <div className="w-full lg:max-w-[430px]"><Art src="tiles-tips" w={430} h={404} alt={t.tileTips.alt} /></div>
          </div>
          {[
            { title: <>{t.tileTips.evergreen.title}</>, text: t.tileTips.evergreen.text, prefix: "evergreen" },
            { title: <>{t.tileTips.seasonal.title}<br /><span className="font-normal text-grey-600">{t.tileTips.seasonal.example}</span></>, text: t.tileTips.seasonal.text, prefix: "seasonal" },
          ].map((g) => (
            <div key={g.prefix} className="space-y-8">
              <div className="space-y-4 lg:max-w-[417px]">
                <h3 className={h2}>{g.title}</h3>
                <p className={body}>{g.text}</p>
              </div>
              <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
                {[1, 2, 3, 4].map((i) => <Art key={i} src={`${g.prefix}-${i}`} w={242} h={228} />)}
              </div>
            </div>
          ))}
        </div>

        <Behavior
          id="outlines"
          title={t.outlines.heading}
          text={t.outlines.text}
          steps={t.outlines.steps}
          left={<Art src="outline-1" w={327} h={456} />}
          right={<Art src="outline-2" w={327} h={456} />}
        />

        <div id="outline-tips" className={`scroll-mt-6 flex flex-col gap-10 ${card}`}>
          <div className={cardHead}>
            <h2 className={h2}>{t.outlineTips.heading}</h2>
            <p className={body}>{t.outlineTips.intro}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { src: "otip-1", ok: true },
              { src: "otip-2", ok: false },
              { src: "otip-3", ok: true },
              { src: "otip-4", ok: false },
            ].map((w, i) => (
              <figure key={w.src} className="space-y-3">
                <p aria-hidden={!t.outlineTips.items[i].head} className={`text-sm font-medium leading-5 text-grey-700 ${t.outlineTips.items[i].head ? "" : "invisible hidden lg:block"}`}>{t.outlineTips.items[i].head || "–"}</p>
                <Art src={w.src} w={239} h={278} />
                <Verdict ok={w.ok}>{t.outlineTips.items[i].text}</Verdict>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="frame-donts" className="scroll-mt-6 space-y-10 bg-white px-5 py-20 lg:px-[70px]">
        <h2 className="t-section text-black">{t.frameDonts.heading}</h2>
        <div className="grid gap-x-3 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {frameDonts.map((d, i) => (
            <figure key={i} className="space-y-3">
              {d.art}
              <Verdict ok={false}>{t.frameDonts.captions[i]}</Verdict>
            </figure>
          ))}
        </div>
      </section>

      <section id="buttons" className="scroll-mt-6 space-y-[60px] bg-white px-5 py-20 lg:px-[70px]">
        <h2 className="t-section text-black">{t.buttons.heading}</h2>
        <div className="t-intro max-w-[792px] space-y-12">
          <p>{t.buttons.p1}</p>
          <p>{t.buttons.p2}</p>
        </div>
      </section>

      <section id="styling" className="scroll-mt-6 flex flex-col gap-20 bg-pampas-100 px-5 py-16 lg:p-[70px]">
        <div className="space-y-8">
          <h2 className={`text-[2.5rem] font-medium leading-[48px] text-pampas-950 ${sg}`}>{t.styling.heading}</h2>
          <div className="max-w-[740px] space-y-4 text-xl leading-7 text-grey-700">
            <p>{t.styling.p1.replace("{font}", brand.fontName)}</p>
            <p>{t.styling.p2}</p>
          </div>
          <div className={`max-w-[363px] space-y-2 text-sm leading-5 text-grey-700 ${sg}`}>
            <p className="font-medium text-grey-950">{t.note}</p>
            <p>{t.styling.note}</p>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {specSrc.map((src, i) => <div key={src} className="overflow-hidden rounded-3xl"><Art src={src} w={498} h={286} alt={t.styling.specAlts[i]} sizes="(min-width: 1024px) 498px, 100vw" /></div>)}
        </div>
      </section>

      <section id="button-types" className="scroll-mt-6 bg-white p-4 lg:px-[30px] lg:py-[70px]">
        <div className="rounded-[32px] bg-pampas-100 p-6 lg:p-10">
          <PillTabs
            tabs={t.buttonTypes.map((b, bi) => ({
              label: b.label,
              content: (
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                  <div className="space-y-6 lg:w-[314px] lg:shrink-0">
                    <div className="space-y-4">
                      <h2 className={h2}>{b.label}</h2>
                      <p className={body}>{withName(b.text)}</p>
                    </div>
                    <Steps items={b.steps} />
                  </div>
                  <div className="grid flex-1 gap-3 sm:grid-cols-2 lg:max-w-[674px]">
                    <Art src={buttonArt[bi][0]} w={326} h={442} />
                    <Art src={buttonArt[bi][1]} w={328} h={442} />
                  </div>
                </div>
              ),
            }))}
          />
        </div>
      </section>

      <section id="button-donts" className="scroll-mt-6 space-y-10 bg-white px-5 py-20 lg:px-[70px]">
        <h2 className="t-section text-black">{t.buttonDonts.heading}</h2>
        <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {t.buttonDonts.captions.map((c, i) => (
            <figure key={i} className="space-y-3">
              <Art src={`bdont-${i + 1}`} w={331} h={278} sizes="(min-width: 1024px) 331px, 100vw" />
              <Verdict ok={false}>{c}</Verdict>
            </figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
