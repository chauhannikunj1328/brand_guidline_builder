import { lang as rootLang } from "next/root-params";
import { hasLocale } from "@/lib/i18n/config";
import { getShell } from "@/lib/i18n/dictionaries";
import Footer from "@/components/site/Footer";
import { Button } from "@/components/ui";

export default async function NotFound() {
  const lang = await rootLang();
  const t = await getShell(hasLocale(lang) ? lang : "en");
  return (
    <>
      <main className="content-col flex min-h-[70vh] flex-col justify-center pt-40">
        <h1 className="t-h2">{t.notFound.title}</h1>
        <div className="mt-8"><Button href="/" size="sm">{t.notFound.back}</Button></div>
      </main>
      <Footer />
    </>
  );
}
