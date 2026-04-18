"use client";

import { useLocale } from "@/components/LocaleProvider";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { IconCard } from "@/components/primitives/IconCard";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";

export function PracticeAreasGrid() {
  const { t, locale } = useLocale();
  const p = t.practice;

  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <RevealOnScroll className="text-center mb-16 max-w-2xl mx-auto">
          <EyebrowLabel className="mb-5">{p.eyebrow}</EyebrowLabel>
          <SectionHeading
            start={p.headlineStart}
            accent={p.headlineAccent}
            end={p.headlineEnd}
            centered
            className="mb-5"
          />
          <p className="text-[var(--text-muted)] leading-relaxed">{p.subhead}</p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {p.areas.map((area, i) => (
            <IconCard
              key={area.slug}
              icon={area.icon}
              title={area.title}
              desc={area.desc}
              num={area.num}
              href={`/${locale}/practice-areas/${area.slug}`}
              learnMore="Learn More"
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
