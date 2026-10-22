import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import Footer from "@/components/site/Footer";
import { Lead } from "@/components/ui";

export const metadata: Metadata = { title: "Contact" };

export default function Page() {
  return (
    <>
      <main className="content-col min-h-[850px] pt-[220px]">
        <Lead className="max-w-[800px]"><p>Please contact the {brand.contactTeam} team with any questions regarding the content of this guideline and what it means for you and your team.</p></Lead>
        <p className="t-small mt-16 font-bold text-primary">{brand.contactTeam}</p>
        <a href={`mailto:${brand.contactEmail}`} className="t-small mt-2 block">{brand.contactEmail}</a>
      </main>
      <Footer />
    </>
  );
}
