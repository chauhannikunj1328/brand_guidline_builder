"use client";

import Link from "next/link";
import { FullLogo } from "@/components/Logo";
import { useMenu } from "./MenuContext";
import { MenuIcon } from "@/components/ui/icons";

/* Top bar (Figma "Header"): grey-50 bar, full logo left, Pampas menu button right. */
export default function Header() {
  const { setOpen } = useMenu();
  return (
    <header className="relative z-20 flex items-center justify-between h-20 border-b border-grey-200 bg-grey-50 px-5 lg:px-10">
      <Link href="/" aria-label="Rectio home" className="text-ink">
        <FullLogo size={36} />
      </Link>
      <button type="button" aria-label="Open menu" onClick={() => setOpen(true)} className="flex size-10 items-center justify-center rounded-lg bg-primary text-white">
        <MenuIcon />
      </button>
    </header>
  );
}
