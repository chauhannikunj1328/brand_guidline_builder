import type { Metadata } from "next";
import { currentLang } from "@/lib/i18n/server";
import { getTrademarksText } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await currentLang();
  return { title: (await getTrademarksText(lang)).title, alternates: alternatesFor(lang, "/trademarks") };
}

export default async function Page() {
  const lang = await currentLang();
  const t = await getTrademarksText(lang);
  const letters = Array.from(t.markers);
  const rail = t.sections.map((s, i) => ({ id: s.id, label: t.rail[i] }));
  return (
    <PageShell hero={<PageHero title={t.title} />} title={t.title} rail={rail} after={<ExploreAssets current="trademarks" />}>
      <section className="bg-white px-5 pb-20 pt-24 lg:px-[70px] lg:pt-[140px]">
        <div className="t-intro max-w-[863px] space-y-12">
          <p>{t.intro.p1}</p>
          <p>{t.intro.p2}</p>
        </div>
      </section>
      {t.sections.map((s) => (
        <section key={s.id} id={s.id} className="scroll-mt-6 bg-white px-5 py-20 lg:px-[70px]">
          <div className="space-y-8">
            <div className="space-y-4 text-grey-950">
              <h2 className="text-[2rem] font-medium leading-10">{s.title}</h2>
              {s.intro && <p className="text-lg leading-6">{s.intro}</p>}
            </div>
            <div className="space-y-6 text-base leading-6">
              {s.items.map((it, i) => {
                const sub = "sub" in it ? it.sub : undefined;
                return (
                  <div key={i} className="space-y-3">
                    {it.dont && <p className="font-[family-name:var(--font-secondary)] font-medium text-grey-950">{t.dontLabel}</p>}
                    <p className="text-grey-700">{it.text}</p>
                    {sub && <ol className="space-y-1 text-grey-700">{sub.map((x, k) => <li key={k}>({letters[k]}) {x}</li>)}</ol>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </PageShell>
  );
}
