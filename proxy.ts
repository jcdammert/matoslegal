import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale, type Locale } from "@/lib/i18n";

const LOCALE_COOKIE = "ml-locale";

function getLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return defaultLocale;
  const preferred = header
    .split(",")
    .map((s) => s.split(";")[0].trim().split("-")[0].toLowerCase());
  for (const lang of preferred) {
    if (locales.includes(lang as Locale)) return lang as Locale;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|woff2?|ttf|otf)$/)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return NextResponse.next();

  // Determine locale from cookie, then Accept-Language
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value as
    | Locale
    | undefined;
  const locale =
    cookieLocale && locales.includes(cookieLocale)
      ? cookieLocale
      : getLocaleFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.cookies.set(LOCALE_COOKIE, locale, {
    maxAge: 60 * 60 * 24 * 365,
    path: "/",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
