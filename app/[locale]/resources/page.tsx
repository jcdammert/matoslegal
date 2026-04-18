"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { Landmark, BookOpen, ExternalLink, type LucideIcon } from "lucide-react";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { LocaleProvider } from "@/components/LocaleProvider";
import { TopBar } from "@/components/layout/TopBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";
import { CtaBlock } from "@/components/sections/CtaBlock";

const iconMap: Record<string, LucideIcon> = {
  landmark: Landmark,
  "book-open": BookOpen,
};

const ease = [0.22, 0.61, 0.36, 1] as const;

export default function ResourcesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  if (!isValidLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const r = t.resources;

  return (
    <LocaleProvider locale={locale as Locale} dictionary={t}>
      <TopBar />
      <Nav />
      <main>
        {/* Header */}
        <section className="relative bg-[var(--charcoal)] py-24 md:py-32 overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(var(--hairline) 1px,transparent 1px),linear-gradient(90deg,var(--hairline) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-[0.08]"
            style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 70%)" }}
          />
          <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="inline-flex items-center gap-2 bg-[var(--red)]/15 border border-[var(--red)]/25 text-[var(--red)] text-[11px] tracking-[0.2em] uppercase font-medium px-4 py-2 rounded-full mb-8">
                ⚖ {r.eyebrow.replace("—", "").trim()}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
            >
              <SectionHeading
                start={r.headlineStart}
                accent={r.headlineAccent}
                light
                centered
                className="mb-5"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="text-white/55 max-w-xl mx-auto leading-relaxed"
            >
              {r.subhead}
            </motion.p>
          </div>
        </section>

        {/* Category cards */}
        <section className="bg-[var(--cream)] py-16 md:py-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {r.categories.map((cat, ci) => {
                const CatIcon = iconMap[cat.icon] ?? Landmark;
                return (
                  <RevealOnScroll key={cat.num} delay={ci * 0.1}>
                    <div className="relative bg-white rounded-2xl border border-[var(--hairline)] p-8 h-full overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                      {/* Ghost numeral */}
                      <span
                        aria-hidden
                        className="absolute top-4 right-6 font-display italic font-medium text-[120px] leading-none text-[var(--burgundy)]/8 select-none pointer-events-none"
                      >
                        {cat.num}
                      </span>

                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 rounded-lg bg-[var(--red)] flex items-center justify-center flex-shrink-0">
                            <CatIcon className="w-5 h-5 text-white" />
                          </div>
                          <h2 className="font-display text-xl md:text-2xl font-medium text-[var(--charcoal)]">
                            {cat.title}
                          </h2>
                        </div>

                        {/* Links */}
                        <ul className="divide-y divide-[var(--hairline)]">
                          {cat.links.map((link, li) => (
                            <motion.li
                              key={link.url}
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.35, delay: li * 0.04 }}
                            >
                              <a
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-between py-3.5 text-sm text-[var(--text)] hover:text-[var(--red)] transition-colors duration-200"
                              >
                                <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                                  {link.label}
                                </span>
                                <ExternalLink className="w-3.5 h-3.5 text-[var(--text-muted)] group-hover:text-[var(--red)] flex-shrink-0 transition-colors duration-200" />
                              </a>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </section>
        <CtaBlock />
      </main>
      <Footer />
    </LocaleProvider>
  );
}
