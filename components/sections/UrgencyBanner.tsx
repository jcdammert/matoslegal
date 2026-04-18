"use client";

import { useLocale } from "@/components/LocaleProvider";
import { Button } from "@/components/primitives/Button";

export function UrgencyBanner() {
  const { t, locale } = useLocale();
  const u = t.urgency;

  return (
    <div className="bg-[var(--red)] py-6">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-medium text-white text-xl md:text-2xl italic">
            {u.title}
          </p>
          <p className="text-white/80 text-sm mt-0.5">{u.sub}</p>
        </div>
        <Button href={`/${locale}/contact`} variant="secondary" className="flex-shrink-0">
          {u.cta}
        </Button>
      </div>
    </div>
  );
}
