import Link from "next/link";
import { brand } from "@/content/brand.config";
import { Mark } from "@/components/Logo";

export default function Footer({ downloadLabel = "Download the assets" }: { downloadLabel?: string }) {
  return (
    <footer className="bg-ink text-white">
      <div className="edge-x pt-10 pb-24">
        <Mark className="h-9 w-9 text-accent" />
        <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_1fr] lg:pl-[100px]">
          <div>
            <h2 className="t-h2 max-w-md">{downloadLabel}</h2>
            <a href={brand.downloads.all} download className="mt-14 inline-flex h-10 items-center rounded-full bg-mid px-6 text-sm text-ink">
              {brand.downloads.label}
            </a>
          </div>
          <div className="lg:pl-[130px]">
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 text-xs font-bold md:grid-cols-3">
              {brand.footerNav.map((col, i) => (
                <ul key={i} className="space-y-4">
                  {col.map((l) => (
                    <li key={l.href}><Link href={l.href} className="hover:text-mid">{l.label}</Link></li>
                  ))}
                </ul>
              ))}
            </div>
            <div className="mt-14 border-t border-white/40 pt-4 text-xs">
              <Link href={brand.trademarks.href} className="hover:text-mid">{brand.trademarks.label}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
