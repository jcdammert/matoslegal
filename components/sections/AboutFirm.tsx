"use client";

import { Scale } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";

export function AboutFirm() {
  const { t } = useLocale();
  const a = t.about;

  return (
    <section className="bg-[var(--cream)] py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <RevealOnScroll>
            <EyebrowLabel className="mb-5">{a.eyebrow}</EyebrowLabel>
            <SectionHeading
              start={a.headlineStart}
              accent={a.headlineAccent}
              className="mb-6"
            />
            <div className="inline-flex items-center gap-2 bg-[var(--charcoal)] text-white text-xs tracking-[0.15em] uppercase font-medium px-4 py-2 rounded-full">
              <Scale className="w-3.5 h-3.5 text-[var(--red)]" />
              {a.badge}
            </div>
          </RevealOnScroll>

          {/* Right */}
          <RevealOnScroll delay={0.15}>
            <div className="space-y-5">
              {a.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className={`text-[var(--text)] leading-relaxed ${i === 0 ? "drop-cap" : ""}`}
                >
                  {para}
                </p>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
