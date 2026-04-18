"use client";

import { Phone } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/primitives/Button";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";

export function CtaBlock() {
  const { t, locale } = useLocale();
  const c = t.practiceDetailCta;

  return (
    <section className="py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[860px] mx-auto">
        <RevealOnScroll>
          <div
            className="relative rounded-2xl overflow-hidden px-10 py-14 md:px-16 md:py-20 text-center"
            style={{
              background:
                "linear-gradient(135deg, var(--charcoal) 0%, #1a0810 60%, #2a1018 100%)",
            }}
          >
            {/* Red radial glow */}
            <div
              aria-hidden
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[360px] rounded-full opacity-25"
              style={{
                background: "radial-gradient(ellipse, var(--red) 0%, transparent 70%)",
              }}
            />

            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium text-white italic mb-4">
                {c.headlineStart}{" "}
                <em className="not-italic text-[var(--burgundy)]">{c.headlineAccent}</em>
                {c.headlineEnd}
              </h2>
              <p className="text-white/55 text-lg mb-10 max-w-sm mx-auto">{c.sub}</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <MagneticButton>
                  <Button href={`/${locale}/contact`} variant="primary">
                    {c.cta}
                  </Button>
                </MagneticButton>
                <a
                  href={`tel:${c.phone}`}
                  className="inline-flex items-center gap-2 px-7 py-4 text-xs tracking-[0.2em] uppercase font-medium font-body border border-white/30 text-white/80 hover:border-white/70 hover:text-white transition-all duration-200"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {c.phone}
                </a>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
