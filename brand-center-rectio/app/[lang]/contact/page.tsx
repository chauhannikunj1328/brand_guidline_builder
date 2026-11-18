import type { Metadata } from "next";
import { lang as rootLang } from "next/root-params";
import { brand } from "@/content/brand.config";
import { hasLocale } from "@/lib/i18n/config";
import { getContactText } from "@/lib/i18n/dictionaries";
import { alternatesFor } from "@/lib/i18n/metadata";
import Fill from "@/components/i18n/Fill";
import Footer from "@/components/site/Footer";
import { Lead } from "@/components/ui";

export async function generateMetadata(): Promise<Metadata> {
  const l = await rootLang();
  const lang = hasLocale(l) ? l : "en";
  return { title: (await getContactText(lang)).title, alternates: alternatesFor(lang, "/contact") };
}

export default async function Page() {
  const l = await rootLang();
  const t = await getContactText(hasLocale(l) ? l : "en");
  const email = <a href={`mailto:${brand.contactEmail}`} className="underline underline-offset-2 hover:text-pampas-700">{brand.contactEmail}</a>;
  return (
    <>
      <main className="content-col min-h-[850px] pt-[220px]">
        <Lead className="max-w-[800px]"><p><Fill template={t.lead} values={{ name: brand.contactTeam }} /></p></Lead>
        <p className="t-small mt-16 font-bold text-pampas-700"><Fill template={t.designedBy} values={{ name: brand.contactTeam }} /></p>
        <p className="t-small mt-2"><Fill template={t.contactAt} values={{ email }} /></p>
      </main>
      <Footer />
    </>
  );
}
