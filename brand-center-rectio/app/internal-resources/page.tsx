import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import ExploreAssets, { NEXT_UP } from "@/components/site/ExploreAssets";
import { Button } from "@/components/ui";

export const metadata: Metadata = { title: "Internal Resources" };
const rail = [{ id: "resources", label: "Resources" }];

const resources = [
  { title: "Powerpoint Template", text: "When creating a Powerpoint Presentation, always use the template for consistency:", cta: "Access PowerPoint Template" },
  { title: "Canva", text: "Obtain a license and locate our templates:", cta: "Access Canva Template" },
];

export default function Page() {
  return (
    <PageShell hero={<PageHero title="Internal Resources" />} title="Internal Resources" rail={rail} after={<ExploreAssets items={NEXT_UP} heading={null} />}>
      <section className="bg-white px-5 pb-20 pt-24 lg:px-[70px] lg:pt-[140px]">
        <p className="t-intro max-w-[836px]">Links to templates and other resources for internal {brand.name} team members and vendors:</p>
      </section>
      <section id="resources" className="scroll-mt-6 flex flex-col gap-20 bg-pampas-100 px-5 py-16 lg:p-[70px]">
        <h2 className="font-[family-name:var(--font-secondary)] text-[2.5rem] font-medium leading-[48px] text-pampas-950">Resources</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {resources.map((r) => (
            <div key={r.title} className="flex flex-col items-center justify-between gap-8 rounded-[32px] bg-white p-8 text-center lg:p-[50px]">
              <div className="space-y-2">
                <h3 className="text-[2rem] font-medium leading-10 text-grey-950">{r.title}</h3>
                <p className="font-[family-name:var(--font-secondary)] text-base leading-6 text-grey-700">{r.text}</p>
              </div>
              <Button href={brand.downloads.all} download>{r.cta}</Button>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
