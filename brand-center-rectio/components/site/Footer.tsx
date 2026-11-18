import { lang as rootLang } from "next/root-params";
import { brand } from "@/content/brand.config";
import { hasLocale } from "@/lib/i18n/config";
import { getShell } from "@/lib/i18n/dictionaries";
import { FOOTER_COLUMNS, TRADEMARKS } from "@/lib/i18n/nav";
import { FullLogo } from "@/components/Logo";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import { Button } from "@/components/ui";

/* Figma "Footer": black, logo + "Download the assets" at the start, three link columns + trademark row at the end.
   The first link in each column is that column's heading. */
export default async function Footer({ downloadLabel, downloadHref = brand.downloads.all }: { downloadLabel?: string; downloadHref?: string }) {
  const lang = await rootLang();
  const t = await getShell(hasLocale(lang) ? lang : "en");
  const label = downloadLabel ?? t.footer.download;
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col gap-14 px-5 py-16 lg:flex-row lg:justify-between lg:px-[100px] lg:py-20">
        <div className="flex flex-col justify-between gap-10 lg:w-[331px]">
          <div className="space-y-4">
            <FullLogo size={50} />
            <h2 className="text-[2rem] font-medium leading-10">{label}</h2>
          </div>
          <div><Button href={downloadHref} download>{t.footer.download}</Button></div>
        </div>

        <div className="flex flex-col justify-center gap-10 lg:w-[670px]">
          <nav aria-label={t.aria.footer} className="grid grid-cols-2 gap-x-[70px] gap-y-10 md:flex">
            {FOOTER_COLUMNS.map(([head, ...links]) => (
              <div key={head.href} className="space-y-4">
                <LocalizedLink href={head.href} className="block text-lg uppercase leading-6 hover:text-pampas-300">{t.nav[head.key]}</LocalizedLink>
                <ul className="space-y-1.5">
                  {links.map((l) => (
                    <li key={l.href}><LocalizedLink href={l.href} className="text-base leading-6 text-white/80 hover:text-white">{t.nav[l.key]}</LocalizedLink></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className="border-t border-white/40 pt-5">
            <LocalizedLink href={TRADEMARKS.href} className="text-lg uppercase leading-6 hover:text-pampas-300">{t.nav[TRADEMARKS.key]}</LocalizedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
