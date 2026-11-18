import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import Footer from "@/components/site/Footer";
import { Lead } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <main className="content-col min-h-[850px] pt-[220px]">
        <Lead className="max-w-[800px]"><p>Please contact {brand.contactTeam} with any questions regarding the content of this guideline and what it means for you and your team.</p></Lead>
        <p className="t-small mt-16 font-bold text-pampas-700">Designed and developed by {brand.contactTeam}</p>
        <p className="t-small mt-2">Contact at <a href={`mailto:${brand.contactEmail}`} className="underline underline-offset-2 hover:text-pampas-700">{brand.contactEmail}</a></p>
      </main>
      <Footer />
    </>
  );
}
