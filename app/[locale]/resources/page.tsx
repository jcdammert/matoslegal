import type { Metadata } from "next";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Button } from "@/components/primitives/Button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "es"
    ? { title: "Recursos | Matos Legal, PLLC", description: "Recursos legales para residentes del Sur de la Florida." }
    : { title: "Resources | Matos Legal, PLLC", description: "Legal resources for South Florida residents." };
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const r = t.resources;

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        <section className="bg-[var(--charcoal)] py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
            <EyebrowLabel light className="mb-5">{r.eyebrow}</EyebrowLabel>
            <SectionHeading
              start={r.headlineStart}
              accent={r.headlineAccent}
              light
              centered
              className="mb-5"
            />
          </div>
        </section>

        <section className="bg-white py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 max-w-2xl mx-auto text-center">
            <p className="text-[var(--text-muted)] text-lg leading-relaxed mb-4">{r.coming}</p>
            <p className="text-[var(--text-muted)] leading-relaxed mb-10">{r.ctaText}</p>
            <Button href={`/${locale}/contact`} variant="primary">
              {t.nav.contact}
            </Button>
          </div>
        </section>

        <CtaBlock />
      </main>
      <Footer />
    </>
  );
}
