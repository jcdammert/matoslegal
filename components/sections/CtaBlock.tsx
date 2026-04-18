"use client";

import { Phone } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { Button } from "@/components/primitives/Button";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";

export function CtaBlock() {
  const { t, locale } = useLocale();
  const c = t.finalCta;

  return (
    <section className="relative bg-[var(--charcoal)] py-24 md:py-32 overflow-hidden">
      {/* Red radial bottom-right */}
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-[0.10]"
        style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <RevealOnScroll>
          <SectionHeading
            start={c.headlineStart}
            accent={c.headlineAccent}
            end={c.headlineEnd}
            light
            centered
            className="mb-6"
          />
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">{c.sub}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <MagneticButton>
              <Button href={`/${locale}/contact`} variant="primary">
                {c.ctaPrimary}
              </Button>
            </MagneticButton>
            <a
              href={`tel:${c.ctaSecondary}`}
              className="inline-flex items-center gap-2 px-7 py-4 text-xs tracking-[0.2em] uppercase font-medium font-body border border-white/40 text-white hover:bg-white hover:text-[var(--charcoal)] transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              {c.ctaSecondary}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
