import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { getDictionary, isValidLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";
import { Button } from "@/components/primitives/Button";

export async function generateStaticParams() {
  const slugs = ["foreclosure-defense", "civil-litigation", "personal-injury", "civil-rights"];
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) return {};
  const t = getDictionary(locale as Locale);
  const area = t.practice.areas.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `${area.title} | Matos Legal, PLLC`,
    description: area.desc,
  };
}

export default async function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const area = t.practice.areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const testimonial = t.testimonials.items[0];

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        {/* Hero header */}
        <section className="bg-[var(--charcoal)] py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/40 text-xs tracking-[0.15em] uppercase font-medium mb-8">
              <Link href={`/${locale}`} className="hover:text-white/70 transition-colors">
                {t.nav.home}
              </Link>
              <ChevronRight className="w-3 h-3" />
              <Link href={`/${locale}/practice-areas`} className="hover:text-white/70 transition-colors">
                {t.nav.practice}
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-white/60">{area.title}</span>
            </nav>

            <SectionHeading
              accent={area.title}
              light
              size="lg"
              className="max-w-3xl"
            />
          </div>
        </section>

        {/* Overview */}
        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="max-w-3xl">
              <RevealOnScroll>
                <div className="space-y-5 mb-12">
                  {area.detail.overview.map((para, i) => (
                    <p key={i} className="text-[var(--text)] leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              </RevealOnScroll>

              {/* How We Help */}
              <RevealOnScroll delay={0.1}>
                <h2 className="font-display text-2xl font-medium text-[var(--charcoal)] mb-6">
                  {locale === "es" ? "Cómo Lo Ayudamos" : "How We Help"}
                </h2>
                <ul className="space-y-3 mb-12">
                  {area.detail.howWeHelp.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--red)] mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--text)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>

              {/* What to Expect */}
              <RevealOnScroll delay={0.2}>
                <h2 className="font-display text-2xl font-medium text-[var(--charcoal)] mb-4">
                  {locale === "es" ? "Qué Esperar" : "What to Expect"}
                </h2>
                <p className="text-[var(--text)] leading-relaxed mb-8">
                  {area.detail.whatToExpect}
                </p>
                <Button href={`/${locale}/contact`} variant="primary">
                  {locale === "es" ? "Agendar Consulta Gratis" : "Schedule Free Consultation"}
                </Button>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-[var(--cream)] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <RevealOnScroll className="max-w-2xl mx-auto text-center">
              <blockquote className="font-display text-xl italic text-[var(--charcoal)] leading-relaxed mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <p className="eyebrow text-[var(--text-muted)]">— {testimonial.author}</p>
            </RevealOnScroll>
          </div>
        </section>

        <CtaBlock />
      </main>
      <Footer />
    </>
  );
}
