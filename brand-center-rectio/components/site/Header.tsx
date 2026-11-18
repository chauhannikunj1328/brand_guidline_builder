"use client";

import { FullLogo } from "@/components/Logo";
import { useI18n } from "@/components/i18n/I18nProvider";
import LocalizedLink from "@/components/i18n/LocalizedLink";
import LanguageSwitcher from "@/components/i18n/LanguageSwitcher";
import { useMenu } from "./MenuContext";
import { MenuIcon } from "@/components/ui/icons";

/* Top bar (Figma "Header"): grey-50 bar, full logo at the start, language menu and Pampas menu button at the end. */
export default function Header() {
  const { setOpen } = useMenu();
  const { t } = useI18n();
  return (
    <header className="relative z-20 flex items-center justify-between h-20 border-b border-grey-200 bg-grey-50 px-5 lg:px-10">
      <LocalizedLink href="/" aria-label={t.aria.home} className="text-ink">
        <FullLogo size={36} />
      </LocalizedLink>
      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <button type="button" aria-label={t.aria.openMenu} onClick={() => setOpen(true)} className="flex size-10 items-center justify-center rounded-lg bg-primary text-white">
          <MenuIcon />
        </button>
      </div>
    </header>
  );
}
