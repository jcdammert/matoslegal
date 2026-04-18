"use client";

import { useLocale } from "@/components/LocaleProvider";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { IconCard } from "@/components/primitives/IconCard";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";

export function WhyChooseUs() {
  const { t } = useLocale();
  const w = t.why;

  return (
    <section className="relative bg-[var(--charcoal)] py-24 md:py-32 overflow-hidden">
      {/* Subtle red radial top-left */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.08]"
        style={{ background: "radial-gradient(circle, var(--red) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-12">
        <RevealOnScroll className="text-center mb-16 max-w-2xl mx-auto">
          <EyebrowLabel light className="mb-5">{w.eyebrow}</EyebrowLabel>
          <SectionHeading
            start={w.headlineStart}
            accent={w.headlineAccent}
            end={w.headlineEnd}
            light
            centered
          />
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {w.items.map((item, i) => (
            <IconCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              dark
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
