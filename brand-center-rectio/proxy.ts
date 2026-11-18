import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, hasLocale, isTranslated, normalizePath } from "@/lib/i18n/config";

/* English lives at the plain address (/color) and Spanish / Arabic at /es/color, /ar/color.
   - /color        → served from app/[lang] as lang "en" (a rewrite: the address stays /color)
   - /en/color     → redirected to /color, so there is one address per page
   - /es/<page>    → served only if that page is translated (lib/i18n/config.ts); otherwise sent to the English page */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  if (hasLocale(first)) {
    const rest = pathname.slice(first.length + 1) || "/";
    if (first === DEFAULT_LOCALE || !isTranslated(first, normalizePath(rest))) {
      const url = request.nextUrl.clone();
      url.pathname = rest;
      return NextResponse.redirect(url, 308);
    }
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Everything except Next internals, public folders and files with an extension (images, zips, favicon).
  matcher: ["/((?!_next/|downloads/|brand/|.*\\..*).*)"],
};
