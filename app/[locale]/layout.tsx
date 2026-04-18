import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import { getDictionary, isValidLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://matoslegal.com"),
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  const dictionary = getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link
          rel="alternate"
          hrefLang="en"
          href={`https://matoslegal.com/en`}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={`https://matoslegal.com/es`}
        />
        <link rel="alternate" hrefLang="x-default" href="https://matoslegal.com/en" />
      </head>
      <body
        className="font-body antialiased"
        style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
      >
        <LocaleProvider locale={locale as Locale} dictionary={dictionary}>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
