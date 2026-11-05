import Link from "next/link";
import { brand } from "@/content/brand.config";
import { FullLogo } from "@/components/Logo";
import { Button } from "@/components/ui";

/* Figma "Footer": black, logo + "Download the assets" left, three link columns + trademark row right.
   The first link in each footerNav column is that column's heading. */
export default function Footer({ downloadLabel = "Download the assets" }: { downloadLabel?: string }) {
  return (
    <footer className="bg-black text-white">
      <div className="flex flex-col gap-14 px-5 py-16 lg:flex-row lg:justify-between lg:px-[100px] lg:py-20">
        <div className="flex flex-col justify-between gap-10 lg:w-[331px]">
          <div className="space-y-4">
            <FullLogo size={50} />
            <h2 className="text-[2rem] font-medium leading-10">{downloadLabel}</h2>
          </div>
          <div><Button href={brand.downloads.all} download>{brand.downloads.label}</Button></div>
        </div>

        <div className="flex flex-col justify-center gap-10 lg:w-[670px]">
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-[70px] gap-y-10 md:flex">
            {brand.footerNav.map(([head, ...links]) => (
              <div key={head.href} className="space-y-4">
                <Link href={head.href} className="block text-lg uppercase leading-6 hover:text-pampas-300">{head.label}</Link>
                <ul className="space-y-1.5">
                  {links.map((l) => (
                    <li key={l.href}><Link href={l.href} className="text-base leading-6 text-white/80 hover:text-white">{l.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
          <div className="border-t border-white/40 pt-5">
            <Link href={brand.trademarks.href} className="text-lg uppercase leading-6 hover:text-pampas-300">{brand.trademarks.label}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
