"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";

export function Testimonials() {
  const { t } = useLocale();
  const items = t.testimonials.items;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((i) => (i + dir + items.length) % items.length);
    },
    [items.length]
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 7000);
    return () => clearInterval(id);
  }, [go]);

  return (
    <section className="bg-[var(--cream)] py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <RevealOnScroll className="text-center mb-8 max-w-2xl mx-auto">
          <EyebrowLabel className="mb-5">{t.testimonials.eyebrow}</EyebrowLabel>
          <SectionHeading
            start={t.testimonials.headlineStart}
            accent={t.testimonials.headlineAccent}
            end={t.testimonials.headlineEnd}
            centered
          />
        </RevealOnScroll>

        <div className="relative max-w-3xl mx-auto">
          {/* Card */}
          <div className="bg-white rounded-lg border border-[var(--hairline)] p-8 md:p-12 min-h-[280px] flex flex-col justify-between">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <Quote className="w-8 h-8 text-[var(--red)] mb-6 opacity-60" />
                <blockquote className="font-display text-lg md:text-xl text-[var(--charcoal)] leading-relaxed mb-8 italic">
                  &ldquo;{items[index].quote}&rdquo;
                </blockquote>
                <p className="eyebrow text-[var(--text-muted)]">
                  — {items[index].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            {/* Dots */}
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  aria-label={`Testimonial ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === index ? "bg-[var(--red)] w-6" : "bg-[var(--hairline)]"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                aria-label="Previous"
                className="w-10 h-10 rounded-full border border-[var(--hairline)] flex items-center justify-center text-[var(--charcoal)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Next"
                className="w-10 h-10 rounded-full border border-[var(--hairline)] flex items-center justify-center text-[var(--charcoal)] hover:border-[var(--red)] hover:text-[var(--red)] transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
