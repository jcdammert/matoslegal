import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import {
  Shield,
  Scale,
  Users,
  Gavel,
  type LucideIcon,
} from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Button } from "@/components/primitives/Button";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  scale: Scale,
  users: Users,
  gavel: Gavel,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "es"
    ? {
        title: "Áreas de Práctica | Matos Legal, PLLC",
        description:
          "Defensa ante ejecuciones hipotecarias, litigio civil, lesiones personales y litigio de derechos civiles en el Sur de la Florida.",
      }
    : {
        title: "Practice Areas | Matos Legal, PLLC",
        description:
          "Foreclosure defense, civil litigation, personal injury, and civil rights litigation in South Florida.",
      };
}

export default async function PracticeAreasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const p = t.practice;

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-[var(--charcoal)] py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
            <EyebrowLabel light className="mb-5">{p.eyebrow}</EyebrowLabel>
            <SectionHeading
              start={p.headlineStart}
              accent={p.headlineAccent}
              end={p.headlineEnd}
              light
              centered
              className="mb-5"
            />
            <p className="text-white/60 max-w-xl mx-auto leading-relaxed">
              {p.subhead}
            </p>
          </div>
        </section>

        {/* Alternating rows */}
        {p.areas.map((area, i) => {
          const Icon = iconMap[area.icon] ?? Shield;
          const bg = i % 2 === 0 ? "bg-[var(--cream)]" : "bg-white";
          return (
            <section key={area.slug} className={`${bg} py-20 md:py-28`}>
              <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <RevealOnScroll>
                  <div className="max-w-3xl">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-md bg-[var(--red)] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-display italic text-[var(--burgundy)] text-xl font-medium">
                        {area.num}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl font-medium text-[var(--charcoal)] mb-4">
                      {area.title}
                    </h2>
                    <p className="text-[var(--text-muted)] leading-relaxed text-lg mb-6">
                      {area.desc}
                    </p>
                    <Button href={`/${locale}/practice-areas/${area.slug}`} variant="primary">
                      {locale === "es" ? "Agendar Consulta Gratis" : "Schedule Free Consultation"}
                    </Button>
                  </div>
                </RevealOnScroll>
              </div>
            </section>
          );
        })}

        <CtaBlock />
      </main>
      <Footer />
    </>
  );
}
