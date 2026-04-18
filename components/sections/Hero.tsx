"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/primitives/Button";

const ease = [0.22, 0.61, 0.36, 1] as const;

function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const { t, locale } = useLocale();
  const h = t.hero;

  return (
    <section className="relative bg-[var(--charcoal)] overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--hairline) 1px, transparent 1px), linear-gradient(90deg, var(--hairline) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Red radial accent */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 pt-24 pb-40 md:pt-32 md:pb-52">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <FadeUp delay={0}>
            <p className="eyebrow text-[var(--red)]/90 mb-6">— {h.eyebrow}</p>
          </FadeUp>

          {/* Headline */}
          <FadeUp delay={0.1}>
            <h1 className="font-display font-medium text-[clamp(48px,7vw,104px)] leading-[1.02] tracking-[-0.015em] text-white mb-6">
              {h.headlineStart && <>{h.headlineStart} </>}
              <em className="not-italic italic text-[var(--burgundy)]">
                {h.headlineAccent}
              </em>
            </h1>
          </FadeUp>

          {/* Subhead */}
          <FadeUp delay={0.2}>
            <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
              {h.subhead}
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.3} className="flex flex-wrap gap-4">
            <Button href={`/${locale}/practice-areas`} variant="primary">
              {h.ctaPrimary}
            </Button>
            <Button href={`/${locale}/contact`} variant="outline-white">
              {h.ctaSecondary}
            </Button>
          </FadeUp>
        </div>

        {/* Vertical scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
        >
          <div className="w-px h-16 bg-white/20" />
          <span className="font-display italic text-[var(--burgundy)] text-2xl font-medium rotate-0 select-none">
            85
          </span>
          <div className="w-px h-16 bg-white/20" />
        </motion.div>
      </div>
    </section>
  );
}
