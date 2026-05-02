import type { Metadata } from "next";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { AttorneyBio } from "@/components/sections/AttorneyBio";
import { Credentials } from "@/components/sections/Credentials";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (locale === "es") {
    return {
      title: "Perfil de la Abogada | Matos Legal, PLLC",
      description:
        "Conozca a la abogada Rosalind J. Matos — 24 años de experiencia en litigio civil en tribunales estatales y federales. Completamente bilingüe.",
    };
  }
  return {
    title: "Attorney Profile | Matos Legal, PLLC",
    description:
      "Meet Attorney Rosalind J. Matos — 24 years of civil litigation experience in state and federal courts. Fully bilingual.",
  };
}

export default async function AttorneyProfilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const t = getDictionary(locale as Locale);
  const a = t.attorney;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rosalind J. Matos",
    jobTitle: "Attorney",
    worksFor: { "@type": "LegalService", name: "Matos Legal, PLLC" },
    alumniOf: [
      "University of Puerto Rico School of Law",
      "Florida International University",
    ],
    knowsLanguage: ["English", "Spanish"],
    url: `https://matoslegal.com/${locale}/attorney-profile`,
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
        {/* Header */}
        <section className="bg-[var(--charcoal)] py-14 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[var(--red)]/20 text-[var(--red)] text-[11px] tracking-[0.2em] uppercase font-medium px-4 py-2 rounded-full mb-8">
              ⚖ {a.badge}
            </div>
            <SectionHeading
              start={a.headlineStart}
              accent={a.headlineAccent}
              light
              centered
              className="mb-6"
            />
            <p className="text-white/60 text-lg leading-relaxed max-w-xl mx-auto">
              {a.subhead}
            </p>
          </div>
        </section>

        <AttorneyBio />
        <Credentials />
        <CtaBlock />
      </main>
      <Footer />
    </>
  );
}
