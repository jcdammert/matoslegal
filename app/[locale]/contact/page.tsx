"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/LocaleProvider";
import { TopBar } from "@/components/layout/TopBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";
import { ContactFormInner } from "@/components/sections/ContactFormInner";
import { CtaBlock } from "@/components/sections/CtaBlock";

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  if (!isValidLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const c = t.contact;

  return (
    <LocaleProvider locale={locale as Locale} dictionary={t}>
      <TopBar />
      <Nav />
      <main>
        {/* Header */}
        <section className="relative bg-[var(--charcoal)] py-14 md:py-20 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--hairline) 1px,transparent 1px),linear-gradient(90deg,var(--hairline) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <EyebrowLabel light className="mb-5">{c.eyebrow}</EyebrowLabel>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              <SectionHeading
                start={c.headlineStart}
                accent={c.headlineAccent}
                light
                centered
                className="mb-5"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="text-white/55 max-w-lg mx-auto"
            >
              {c.subhead}
            </motion.p>
          </div>
        </section>

        {/* Two-column content */}
        <section className="bg-[var(--cream)] py-12 md:py-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">

              {/* Left: Form card + map */}
              <div className="space-y-8">
                {/* Form card */}
                <RevealOnScroll>
                  <div className="relative bg-white rounded-2xl border border-[var(--hairline)] p-8 md:p-10 shadow-sm overflow-hidden">
                    {/* Ghost numeral */}
                    <span
                      aria-hidden
                      className="absolute top-4 right-6 font-display italic font-medium text-[120px] leading-none text-[var(--burgundy)]/8 select-none pointer-events-none"
                    >
                      01
                    </span>
                    <div className="relative">
                      <EyebrowLabel className="mb-3">{c.formCard.eyebrow}</EyebrowLabel>
                      <h2 className="font-display text-2xl md:text-3xl font-medium text-[var(--charcoal)] mb-2">
                        {c.formCard.headlineStart}{" "}
                        <em className="not-italic italic text-[var(--burgundy)]">
                          {c.formCard.headlineAccent}
                        </em>
                      </h2>
                      <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-7">
                        {c.formCard.sub}
                      </p>
                      <ContactFormInner />
                    </div>
                  </div>
                </RevealOnScroll>

                {/* Map */}
                <RevealOnScroll delay={0.1}>
                  <div className="rounded-2xl overflow-hidden border border-[var(--hairline)] shadow-sm">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.8!2d-80.3999!3d26.1003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6b!2sLakeside+Executive+Suites!5e0!3m2!1sen!2sus!4v1"
                      width="100%"
                      height="320"
                      style={{ border: 0, display: "block" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Matos Legal Office Location"
                    />
                  </div>
                </RevealOnScroll>
              </div>

              {/* Right: Dark contact info card */}
              <RevealOnScroll delay={0.15}>
                <div
                  className="rounded-2xl p-8 text-white sticky top-24"
                  style={{ background: "var(--charcoal-2)" }}
                >
                  <EyebrowLabel light className="mb-4">{c.reachUs.eyebrow}</EyebrowLabel>
                  <h3 className="font-display text-2xl font-medium text-white mb-8">
                    {c.reachUs.heading}
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase font-medium text-white/40 mb-2">
                        {c.reachUs.office}
                      </p>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-[var(--red)]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <MapPin className="w-3.5 h-3.5 text-[var(--red)]" />
                        </div>
                        <p className="text-white/75 text-sm leading-relaxed">{c.address}</p>
                      </div>
                    </div>

                    <div className="w-full h-px bg-white/10" />

                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase font-medium text-white/40 mb-2">
                        {c.reachUs.phoneLabel}
                      </p>
                      <a
                        href={`tel:${t.topBar.phone}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-full bg-[var(--red)]/15 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-3.5 h-3.5 text-[var(--red)]" />
                        </div>
                        <span className="text-white/75 text-sm group-hover:text-white transition-colors">
                          {t.topBar.phone}
                        </span>
                      </a>
                    </div>

                    <div className="w-full h-px bg-white/10" />

                    <div>
                      <p className="text-[11px] tracking-[0.2em] uppercase font-medium text-white/40 mb-2">
                        {c.reachUs.emailLabel}
                      </p>
                      <a
                        href={`mailto:${t.topBar.email}`}
                        className="flex items-center gap-3 group"
                      >
                        <div className="w-8 h-8 rounded-full bg-[var(--red)]/15 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-3.5 h-3.5 text-[var(--red)]" />
                        </div>
                        <span className="text-white/75 text-sm group-hover:text-white transition-colors break-all">
                          {t.topBar.email}
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Bilingual note */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/50 text-xs leading-relaxed">
                      {locale === "es"
                        ? "Atendemos a nuestra comunidad en inglés y en español."
                        : "Proudly serving South Florida's English and Spanish-speaking communities. Hablamos Español."}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </section>
        <CtaBlock />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
