"use client";

import { Scale, GraduationCap, Users } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import { RevealOnScroll } from "@/components/primitives/RevealOnScroll";

export function Credentials() {
  const { t } = useLocale();
  const creds = t.attorney.credentials;

  const cards = [
    {
      icon: Scale,
      title: creds.bar.title,
      content: (
        <ul className="space-y-2">
          {creds.bar.items.map((item) => (
            <li key={item} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[var(--red)] mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: GraduationCap,
      title: creds.education.title,
      content: (
        <ul className="space-y-4">
          {creds.education.items.map((item) => (
            <li key={item.school}>
              <p className="font-medium text-[var(--charcoal)] text-sm">{item.school}</p>
              <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.detail}</p>
            </li>
          ))}
        </ul>
      ),
    },
    {
      icon: Users,
      title: creds.memberships.title,
      content: (
        <ul className="space-y-2">
          {creds.memberships.items.map((item) => (
            <li key={item} className="text-sm text-[var(--text-muted)] flex items-start gap-2">
              <span className="w-1 h-1 rounded-full bg-[var(--red)] mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className="bg-[var(--cream)] py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, content }, i) => (
            <RevealOnScroll key={title} delay={i * 0.1}>
              <div className="bg-white border border-[var(--hairline)] rounded-lg p-8 h-full">
                <div className="w-12 h-12 rounded-md bg-[var(--red)] flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-display text-xl font-medium text-[var(--charcoal)] mb-5">
                  {title}
                </h3>
                {content}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
