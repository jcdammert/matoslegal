import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import {
  Shield,
  Scale,
  Users,
  Gavel,
  ArrowRight,
  Check,
  Building2,
  Home,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { TopBar } from "@/components/layout/TopBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { CtaBlock } from "@/components/sections/CtaBlock";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  scale: Scale,
  users: Users,
  gavel: Gavel,
  building: Building2,
  home: Home,
  briefcase: Briefcase,
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
  const learnMore = locale === "es" ? "Ver Más" : "Learn More";

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        {/* Hero */}
        <section className="relative bg-[var(--charcoal)] py-14 md:py-20 overflow-hidden">
          {/* decorative large text */}
          <span
            aria-hidden
            className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none font-display font-medium text-[22vw] leading-none text-white/[0.03] whitespace-nowrap pr-8"
          >
            LAW
          </span>
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-center">
            <EyebrowLabel light className="mb-5">{p.eyebrow}</EyebrowLabel>
            <SectionHeading
              start={p.headlineStart}
              accent={p.headlineAccent}
              end={p.headlineEnd}
              light
              centered
              className="mb-6"
            />
            <p className="text-white/55 max-w-lg mx-auto leading-relaxed text-lg">
              {p.subhead}
            </p>
          </div>
        </section>

        {/* Practice area sections */}
        {p.areas.map((area, i) => {
          const Icon = iconMap[area.icon] ?? Shield;
          const flip = i % 2 !== 0;
          const previewItems = area.detail.services.items.slice(0, 4);

          return (
            <section
              key={area.slug}
              className="relative overflow-hidden border-b border-[var(--hairline)] last:border-b-0"
            >
              {/* Ghost numeral */}
              <span
                aria-hidden
                className="absolute top-1/2 -translate-y-1/2 select-none pointer-events-none font-display font-medium leading-none text-[var(--charcoal)]/[0.04] text-[20vw]"
                style={{ [flip ? "left" : "right"]: "-2vw" }}
              >
                {area.num}
              </span>

              <div
                className={`relative max-w-[1400px] mx-auto px-6 md:px-12 py-12 md:py-16 grid md:grid-cols-2 gap-12 md:gap-16 items-center ${
                  flip ? "md:[direction:rtl]" : ""
                }`}
              >
                {/* Content side */}
                <div className={flip ? "[direction:ltr]" : ""}>
                  {/* Number + icon row */}
                  <div className="flex items-center gap-5 mb-8">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-xl bg-[var(--red)] flex items-center justify-center shadow-lg shadow-red-900/20">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <span className="font-display italic text-[var(--burgundy)] text-3xl font-medium opacity-60">
                      {area.num}
                    </span>
                  </div>

                  <h2 className="font-display text-4xl md:text-5xl font-medium text-[var(--charcoal)] mb-5 leading-tight">
                    {area.title}
                  </h2>
                  <p className="text-[var(--text-muted)] leading-relaxed text-lg mb-8 max-w-lg">
                    {area.desc}
                  </p>

                  <Link
                    href={`/${locale}/practice-areas/${area.slug}`}
                    className="group inline-flex items-center gap-3 text-[var(--red)] font-body font-medium text-sm tracking-[0.1em] uppercase transition-colors hover:text-[var(--red-hover)]"
                  >
                    {learnMore}
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--red)]/40 group-hover:border-[var(--red)] group-hover:bg-[var(--red)] group-hover:text-white transition-all duration-200">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>

                {/* Visual side — services preview card */}
                <div className={flip ? "[direction:ltr]" : ""}>
                  <div className="relative rounded-2xl bg-[var(--cream)] border border-[var(--hairline)] p-8 md:p-10 overflow-hidden">
                    {/* Red top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[var(--red)] to-[var(--burgundy)]" />

                    <p className="eyebrow mb-6">{area.detail.services.heading}</p>
                    <ul className="space-y-4">
                      {previewItems.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[var(--red)]/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-[var(--red)]" />
                          </span>
                          <span className="text-[var(--text-muted)] text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {area.detail.services.items.length > 4 && (
                      <p className="mt-5 text-xs text-[var(--text-muted)]/60 italic">
                        +{area.detail.services.items.length - 4}{" "}
                        {locale === "es" ? "más" : "more"}…
                      </p>
                    )}
                  </div>
                </div>
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
