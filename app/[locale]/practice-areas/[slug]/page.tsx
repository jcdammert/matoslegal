"use client";

import { use, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Scale, Users, Gavel, Phone, CheckCircle2, ArrowRight,
  Building2, Home, Briefcase, Plus,
  type LucideIcon,
} from "lucide-react";
import { getDictionary, isValidLocale, locales, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { Button } from "@/components/primitives/Button";
import { LocaleProvider } from "@/components/LocaleProvider";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.22, 0.61, 0.36, 1] }}
      className="border border-[var(--hairline)] rounded-xl overflow-hidden bg-white"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display font-medium text-[var(--charcoal)] text-base leading-snug">{q}</span>
        <span className={`flex-shrink-0 w-6 h-6 rounded-full border border-[var(--red)]/40 flex items-center justify-center transition-transform duration-200 ${open ? "rotate-45" : ""}`}>
          <Plus className="w-3 h-3 text-[var(--red)]" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-[var(--text-muted)] leading-relaxed text-sm border-t border-[var(--hairline)] pt-4">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  scale: Scale,
  users: Users,
  gavel: Gavel,
  building: Building2,
  home: Home,
  briefcase: Briefcase,
};

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function PracticeAreaDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = use(params);
  if (!isValidLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const area = t.practice.areas.find((a) => a.slug === slug);
  if (!area) notFound();

  const Icon = iconMap[area.icon] ?? Shield;
  const otherAreas = t.practice.areas.filter((a) => a.slug !== slug);

  return (
    <LocaleProvider locale={locale as Locale} dictionary={t}>
      <TopBar />
      <Nav />
      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <section className="relative bg-[var(--charcoal)] py-14 md:py-20 overflow-hidden text-center">
          {/* grid bg */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--hairline) 1px,transparent 1px),linear-gradient(90deg,var(--hairline) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* red radial */}
          <div
            aria-hidden
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-[0.12]"
            style={{ background: "radial-gradient(ellipse, var(--red) 0%, transparent 70%)" }}
          />

          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease }}
              className="w-16 h-16 rounded-xl bg-[var(--red)] flex items-center justify-center mx-auto mb-8 shadow-lg"
            >
              <Icon className="w-7 h-7 text-white" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="font-display font-medium text-white leading-tight text-[clamp(36px,6vw,80px)] tracking-[-0.015em] mb-5"
            >
              {locale === "es" ? "Expertos en" : "Expert"}{" "}
              <em className="not-italic italic text-[var(--burgundy)]">{area.title}</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="text-white/55 text-lg max-w-xl mx-auto"
            >
              {area.detail.heroSub}
            </motion.p>
          </div>
        </section>

        {/* ── Intro drop-cap ────────────────────────── */}
        <section className="bg-[var(--cream)] py-12 md:py-16">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <RevealOnScroll>
              <p className="drop-cap text-[var(--text)] text-lg leading-relaxed mb-5">
                {area.detail.intro}
              </p>
              {area.detail.body.map((para, i) => (
                <p key={i} className="text-[var(--text)] leading-relaxed mb-5 last:mb-0">
                  {para}
                </p>
              ))}
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Key Facts ─────────────────────────────────── */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {area.detail.keyFacts.map((fact, i) => (
                <RevealOnScroll key={i}>
                  <div className="border-l-2 border-[var(--red)] pl-5">
                    <p className="font-display text-3xl md:text-4xl font-medium text-[var(--charcoal)] mb-1">{fact.stat}</p>
                    <p className="text-xs tracking-[0.15em] uppercase font-body font-medium text-[var(--red)] mb-2">{fact.label}</p>
                    <p className="text-[var(--text-muted)] text-sm leading-relaxed">{fact.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ── Services checklist card ───────────────── */}
        <section className="bg-[var(--cream)] py-12 md:py-16">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <RevealOnScroll>
              <div className="bg-white rounded-2xl border border-[var(--hairline)] p-8 md:p-12 shadow-sm">
                <EyebrowLabel className="mb-4">— OUR SERVICES</EyebrowLabel>
                <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--charcoal)] mb-8">
                  {area.detail.services.heading}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {area.detail.services.items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.5, delay: i * 0.06, ease }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[var(--red)] mt-0.5 flex-shrink-0" />
                      <span className="text-[var(--text)] text-sm leading-relaxed">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────── */}
        <section className="bg-[var(--cream)] py-12 md:py-16">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <RevealOnScroll>
              <EyebrowLabel className="mb-4">— THE PROCESS</EyebrowLabel>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--charcoal)] mb-10">
                {area.detail.process.heading}
              </h2>
            </RevealOnScroll>
            <div className="space-y-8">
              {area.detail.process.steps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--red)] flex items-center justify-center">
                    <span className="text-white text-xs font-body font-medium">{step.num}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-display font-medium text-[var(--charcoal)] text-lg mb-2">{step.title}</h3>
                    <p className="text-[var(--text-muted)] leading-relaxed text-sm">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Approach ──────────────────────────────── */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <RevealOnScroll>
              <EyebrowLabel className="mb-4">{area.detail.approach.eyebrow}</EyebrowLabel>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--charcoal)] mb-6">
                {area.detail.approach.heading}
              </h2>
              <p className="text-[var(--text)] leading-relaxed">{area.detail.approach.body}</p>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────── */}
        <section className="bg-[var(--cream)] py-12 md:py-16">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <RevealOnScroll>
              <EyebrowLabel className="mb-4">— COMMON QUESTIONS</EyebrowLabel>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--charcoal)] mb-8">
                {locale === "es" ? "Preguntas Frecuentes" : "Frequently Asked Questions"}
              </h2>
            </RevealOnScroll>
            <div className="space-y-4">
              {area.detail.faq.map((item, i) => (
                <FaqItem key={i} q={item.q} a={item.a} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Inline CTA card ───────────────────────── */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <RevealOnScroll>
              <div
                className="relative rounded-2xl overflow-hidden p-10 md:p-14 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--charcoal) 0%, #1a0810 60%, #2a1018 100%)",
                }}
              >
                {/* Red radial glow */}
                <div
                  aria-hidden
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full opacity-25"
                  style={{ background: "radial-gradient(ellipse, var(--red) 0%, transparent 70%)" }}
                />
                <div className="relative">
                  <h3 className="font-display text-3xl md:text-4xl font-medium text-white italic mb-3">
                    {t.practiceDetailCta.headlineStart}{" "}
                    <em className="not-italic text-[var(--burgundy)]">
                      {t.practiceDetailCta.headlineAccent}
                    </em>
                    {t.practiceDetailCta.headlineEnd}
                  </h3>
                  <p className="text-white/55 mb-8 max-w-sm mx-auto">
                    {t.practiceDetailCta.sub}
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    <MagneticButton>
                      <Button href={`/${locale}/contact`} variant="primary">
                        {t.practiceDetailCta.cta}
                      </Button>
                    </MagneticButton>
                    <a
                      href={`tel:${t.practiceDetailCta.phone}`}
                      className="inline-flex items-center gap-2 px-6 py-4 text-xs tracking-[0.2em] uppercase font-medium border border-white/25 text-white/80 hover:border-white/60 hover:text-white transition-all duration-200 rounded-none"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {t.practiceDetailCta.phone}
                    </a>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* ── Related practice areas ────────────────── */}
        <section className="bg-[var(--cream)] py-12 md:py-16">
          <div className="max-w-[900px] mx-auto px-6 md:px-12">
            <RevealOnScroll>
              <EyebrowLabel className="mb-4">— {t.exploreMore.toUpperCase()}</EyebrowLabel>
              <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--charcoal)] mb-8">
                {t.exploreMore}
              </h2>
            </RevealOnScroll>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherAreas.map((other, i) => {
                const OtherIcon = iconMap[other.icon] ?? Shield;
                return (
                  <motion.div
                    key={other.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease }}
                  >
                    <Link
                      href={`/${locale}/practice-areas/${other.slug}`}
                      className="group flex flex-col items-center text-center bg-white border border-[var(--hairline)] rounded-xl p-6 hover:border-[var(--red)]/40 hover:shadow-md transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-[var(--red)]/10 group-hover:bg-[var(--red)] flex items-center justify-center mb-4 transition-colors duration-300">
                        <OtherIcon className="w-5 h-5 text-[var(--red)] group-hover:text-white transition-colors duration-300" />
                      </div>
                      <p className="font-display font-medium text-[var(--charcoal)] mb-2">
                        {other.title}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] tracking-[0.15em] uppercase font-medium text-[var(--red)]">
                        {t.learnMore}
                        <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform duration-200" />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </LocaleProvider>
  );
}
