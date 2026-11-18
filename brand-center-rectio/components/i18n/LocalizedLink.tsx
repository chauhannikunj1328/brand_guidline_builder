"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { localizeHref } from "@/lib/i18n/href";
import { useI18n } from "./I18nProvider";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

/** Internal pages get the visitor's language prefix (when that page is translated). Downloads, mailto and external links pass through. */
export default function LocalizedLink({ href, download, ...rest }: Props) {
  const { lang } = useI18n();
  const internal = href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/downloads/") && !download;
  if (!internal) return <a href={href} download={download} {...rest} />;
  return <Link href={localizeHref(lang, href)} {...rest} />;
}
