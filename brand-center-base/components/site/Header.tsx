"use client";

import Link from "next/link";
import { Mark } from "@/components/Logo";
import { useMenu } from "./MenuContext";

/* Floating pill header. Slides away when the side rail takes over (inner pages, desktop). */
export default function Header() {
  const { setOpen, railVisible } = useMenu();
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 px-5 pt-5 transition-transform duration-300 lg:px-10 lg:pt-6 ${
        railVisible ? "lg:-translate-y-32" : ""
      }`}
    >
      <div className="flex h-[76px] items-center justify-between rounded-2xl bg-ink px-6 text-white">
        <Link href="/" aria-label="Home" className="text-accent">
          <Mark className="h-9 w-9" />
        </Link>
        <button type="button" aria-label="Menu" onClick={() => setOpen(true)} className="flex h-10 w-10 items-center justify-center">
          <span className="relative block h-3.5 w-5">
            <span className="absolute left-0 top-0 h-px w-5 bg-current" />
            <span className="absolute left-0 top-[6px] h-px w-5 bg-current" />
            <span className="absolute left-0 top-[12px] h-px w-5 bg-current" />
          </span>
        </button>
      </div>
    </header>
  );
}
