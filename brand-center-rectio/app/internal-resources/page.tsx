import type { Metadata } from "next";
import { brand } from "@/content/brand.config";
import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import ExploreAssets from "@/components/site/ExploreAssets";
import { Button, Col, Lead } from "@/components/ui";

export const metadata: Metadata = { title: "Internal Resources" };
const rail = [{ id: "resources", label: "Resources" }];

export default function Page() {
  return (
    <PageShell hero={<PageHero title="Internal Resources" />} title="Internal Resources" rail={rail} after={<ExploreAssets />}>
      <Col className="pt-[120px] pb-[100px]">
        <Lead className="max-w-none"><p>Links to templates and other resources for internal {brand.name} team members and vendors:</p></Lead>
      </Col>
      <section id="resources" className="band scroll-mt-24 bg-tint text-ink">
        <div className="px-5 pt-14 pb-40 lg:px-7">
          <h3 className="text-2xl font-bold">Resources</h3>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[["Powerpoint Template", "When creating a Powerpoint Presentation, always use the template for consistency:", "Access PowerPoint Template"], ["Canva", "Obtain a license and locate our templates:", "Access Canva Templates"]].map(([t, d, c]) => (
              <div key={t} className="flex min-h-[270px] flex-col items-center justify-center rounded-[var(--radius-card)] bg-white px-10 text-center">
                <p className="t-h4">{t}</p><p className="t-small mt-4 max-w-[300px]">{d}</p><div className="mt-6"><Button href={brand.downloads.all} size="sm" download>{c}</Button></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
