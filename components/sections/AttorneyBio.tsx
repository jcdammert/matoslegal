"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";

export function AttorneyBio() {
  const { t } = useLocale();
  const a = t.attorney;

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Photo card */}
          <RevealOnScroll className="lg:col-span-2 max-w-sm mx-auto w-full lg:max-w-none">
            <div className="relative">
              {/* Red corner accent */}
              <div className="absolute -top-3 -left-3 w-16 h-16 bg-[var(--red)] z-0" />
              <div className="relative z-10 bg-[var(--cream-2)] aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src="/images/rosalind-portrait.jpg"
                  alt={a.photoName}
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 384px, (max-width: 1024px) 50vw, 560px"
                />
              </div>
              <div className="mt-4 p-5 bg-[var(--charcoal)] text-white rounded-sm">
                <p className="font-display text-xl font-medium">{a.photoName}</p>
                <p className="eyebrow text-[var(--red)]/80 mt-1">{a.photoRole}</p>
                <a
                  href={`mailto:${a.photoEmail}`}
                  className="flex items-center gap-2 text-white/50 text-sm mt-3 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {a.photoEmail}
                </a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Bio */}
          <RevealOnScroll delay={0.15} className="lg:col-span-3">
            <EyebrowLabel className="mb-5">{a.bioEyebrow}</EyebrowLabel>
            <div className="space-y-5">
              {a.bio.map((para, i) => (
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
