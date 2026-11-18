import type { Metadata } from "next";
import { Geist, Space_Grotesk, IBM_Plex_Sans_Arabic } from "next/font/google";
import { lang as rootLang } from "next/root-params";
import { notFound } from "next/navigation";
import "../globals.css";
import { brand } from "@/content/brand.config";
import { LANGUAGES, LOCALES, hasLocale } from "@/lib/i18n/config";
import { getShell } from "@/lib/i18n/dictionaries";
import { I18nProvider } from "@/components/i18n/I18nProvider";
import { MenuProvider } from "@/components/site/MenuContext";
import Header from "@/components/site/Header";
import MenuOverlay from "@/components/site/MenuOverlay";
import ScrollReveal from "@/components/site/ScrollReveal";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const grotesk = Space_Grotesk({ variable: "--font-space", subsets: ["latin"] });
/* Arabic: fetched only on Arabic pages (the class is added only for "ar"), and not preloaded for other languages. */
const arabic = IBM_Plex_Sans_Arabic({ variable: "--font-arabic", subsets: ["arabic"], weight: ["300", "400", "500", "600"], preload: false });

export const generateStaticParams = () => LOCALES.map((lang) => ({ lang }));

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const lang = await rootLang();
  const t = await getShell(hasLocale(lang) ? lang : "en");
  return {
    metadataBase: new URL(siteUrl),
    title: { default: brand.name, template: `%s · ${brand.name}` },
    description: t.meta.description,
  };
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = await rootLang();
  if (!hasLocale(lang)) notFound();
  const shell = await getShell(lang);
  return (
    <html lang={lang} dir={LANGUAGES[lang].dir} className={`${geist.variable} ${grotesk.variable} ${lang === "ar" ? arabic.variable : ""} h-full`}>
      <body className="min-h-full">
        <I18nProvider lang={lang} shell={shell}>
          <MenuProvider>
            <Header />
            <MenuOverlay />
            <ScrollReveal />
            {children}
          </MenuProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
