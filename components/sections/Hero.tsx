"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "@/components/LocaleProvider";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { Button } from "@/components/primitives/Button";

const ease = [0.22, 0.61, 0.36, 1] as const;

const slides = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/7/79/Ft._Lauderdale%2C_FL%2C_Courthouse%2C_Broward_County%2C_11-21-2010_%2810%29.JPG",
    name: "Broward County Courthouse",
    location: "Fort Lauderdale, FL",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Miami-Dade_County_Courthouse_-_Miami_-_Daniel_Di_Palma_Photography_06.jpg",
    name: "Miami-Dade County Courthouse",
    location: "Miami, FL",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/West_Palm_Beach%2C_FL%2C_Courthouse_One%2C_West_Side%2C_Palm_Beach_County%2C_11-21-2010_%283%29.JPG",
    name: "Palm Beach County Courthouse",
    location: "West Palm Beach, FL",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/James_Lawrence_King_Federal_Justice_Building.jpg",
    name: "U.S. District Court · Southern District of Florida",
    location: "Miami, FL",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Florida_Supreme_Court_2022.jpg",
    name: "Florida Supreme Court",
    location: "Tallahassee, FL",
  },
];

const INTERVAL = 6000; // ms between slides

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
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(slides.map(() => false));

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const markLoaded = (i: number) =>
    setLoaded((prev) => {
      const next = [...prev];
      next[i] = true;
      return next;
    });

  return (
    <section className="relative bg-[var(--charcoal)] overflow-hidden">
      {/* ── Carousel background ──────────────────────────────── */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {/* Ken Burns: slow scale + drift */}
            <motion.img
              src={slides[current].url}
              alt={slides[current].name}
              onLoad={() => markLoaded(current)}
              initial={{ scale: 1.08 }}
              animate={{ scale: 1.0 }}
              transition={{ duration: INTERVAL / 1000 + 1.5, ease: "linear" }}
              className="w-full h-full object-cover object-center"
              style={{ willChange: "transform" }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark gradient overlay — heavier on left for text legibility */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(20,22,26,0.88) 0%, rgba(20,22,26,0.72) 50%, rgba(20,22,26,0.40) 100%)",
          }}
        />
        {/* Bottom vignette for caption readability */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-40"
          style={{
            background: "linear-gradient(to top, rgba(20,22,26,0.7) 0%, transparent 100%)",
          }}
        />
        {/* Red radial accent top-right */}
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 70%)" }}
        />
      </div>

      {/* ── Foreground content ───────────────────────────────── */}
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

          {/* Headline */}
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

          {/* CTAs */}
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

        {/* ── Scroll indicator (right) ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3"
        >
          <div className="w-px h-16 bg-white/20" />
          <span className="font-display italic text-[var(--burgundy)] text-2xl font-medium select-none">
            {String(current + 1).padStart(2, "0")}
          </span>
          <div className="w-px h-16 bg-white/20" />
        </motion.div>
      </div>

      {/* ── Slide caption + dots ─────────────────────────────── */}
      <div className="absolute bottom-6 left-0 right-0 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between">
          {/* Caption */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-px bg-[var(--red)]" />
              <p className="text-white/50 text-[11px] tracking-[0.2em] uppercase font-body">
                {slides[current].name}
                <span className="mx-2 text-white/25">·</span>
                {slides[current].location}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="relative h-[3px] rounded-full overflow-hidden bg-white/20 transition-all duration-300"
                style={{ width: i === current ? 28 : 12 }}
              >
                {i === current && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-[var(--red)] rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                    key={current}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
