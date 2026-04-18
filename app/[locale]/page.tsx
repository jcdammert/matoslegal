import type { Metadata } from "next";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { TopBar } from "@/components/layout/TopBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsRow } from "@/components/sections/StatsRow";
import { UrgencyBanner } from "@/components/sections/UrgencyBanner";
import { AboutFirm } from "@/components/sections/AboutFirm";
import { PracticeAreasGrid } from "@/components/sections/PracticeAreasGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "es") {
    return {
      title: "Matos Legal, PLLC | Abogada de Litigio Civil en el Sur de la Florida",
      description:
        "Bufete bilingüe de litigio civil que atiende Miami-Dade, Broward y Palm Beach. Defensa de ejecuciones hipotecarias, lesiones personales, derechos civiles. 24+ años de experiencia. Consulta gratis.",
      openGraph: {
        title: "Matos Legal, PLLC | Abogada de Litigio Civil en el Sur de la Florida",
        description:
          "Bufete bilingüe de litigio civil que atiende Miami-Dade, Broward y Palm Beach.",
        images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
        locale: "es_US",
        type: "website",
      },
      twitter: { card: "summary_large_image" },
    };
  }
  return {
    title: "Matos Legal, PLLC | South Florida Civil Litigation Attorney",
    description:
      "Bilingual civil litigation law firm serving Miami-Dade, Broward, and Palm Beach. Foreclosure defense, personal injury, civil rights. 24+ years of experience. Free consultation.",
    openGraph: {
      title: "Matos Legal, PLLC | South Florida Civil Litigation Attorney",
      description:
        "Bilingual civil litigation law firm serving Miami-Dade, Broward, and Palm Beach.",
      images: [{ url: "/images/og-default.png", width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image" },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const t = getDictionary(locale as Locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Matos Legal, PLLC",
    url: `https://matoslegal.com/${locale}`,
    telephone: t.topBar.phone,
    email: t.topBar.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2645 Executive Park Drive, Ste. 676",
      addressLocality: "Weston",
      addressRegion: "FL",
      postalCode: "33331",
      addressCountry: "US",
    },
    areaServed: ["Miami-Dade County", "Broward County", "Palm Beach County"],
    availableLanguage: ["English", "Spanish"],
    founder: {
      "@type": "Person",
      name: "Rosalind J. Matos",
      jobTitle: "Attorney",
    },
    description: t.about.paragraphs[0],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TopBar />
      <Nav />
      <main>
        <Hero />
        <StatsRow />
        <UrgencyBanner />
        <AboutFirm />
        <PracticeAreasGrid />
        <WhyChooseUs />
        <Testimonials />
        <CtaBlock />
      </main>
      <Footer />
    </>
  );
}
