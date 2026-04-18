"use client";

import { motion } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { Button } from "@/components/primitives/Button";

const ease = [0.22, 0.61, 0.36, 1] as const;

function WordReveal({ text, delay = 0, className }: { text: string; delay?: number; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + i * 0.07, ease }}
          className="inline-block mr-[0.25em] last:mr-0"
          aria-hidden
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export function Hero() {
  const { t, locale } = useLocale();
  const h = t.hero;

  return (
    <section className="relative bg-[var(--charcoal)] overflow-hidden">
      {/* Grid overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--hairline) 1px,transparent 1px),linear-gradient(90deg,var(--hairline) 1px,transparent 1px)",
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
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="eyebrow text-[var(--red)]/90 mb-6"
          >
            — {h.eyebrow}
          </motion.p>

          {/* Headline with word-by-word reveal */}
          <h1 className="font-display font-medium text-[clamp(48px,7vw,104px)] leading-[1.02] tracking-[-0.015em] text-white mb-6">
            {h.headlineStart && (
              <WordReveal text={h.headlineStart} delay={0.1} />
            )}{" "}
            <em className="not-italic italic text-[var(--burgundy)]">
              <WordReveal text={h.headlineAccent} delay={h.headlineStart ? 0.3 : 0.1} />
            </em>
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="text-white/60 text-lg leading-relaxed max-w-xl mb-10"
          >
            {h.subhead}
          </motion.p>

          {/* CTAs with magnetic effect */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65, ease }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton>
              <Button href={`/${locale}/practice-areas`} variant="primary">
                {h.ctaPrimary}
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button href={`/${locale}/contact`} variant="outline-white">
                {h.ctaSecondary}
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Vertical scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
        >
          <div className="w-px h-16 bg-white/20" />
          <span className="font-display italic text-[var(--burgundy)] text-2xl font-medium select-none">
            85
          </span>
          <div className="w-px h-16 bg-white/20" />
        </motion.div>
      </div>
    </section>
  );
}
