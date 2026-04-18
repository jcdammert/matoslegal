"use client";

import { Phone, Mail } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export function TopBar() {
  const { t } = useLocale();
  return (
    <div
      className="bg-[var(--charcoal-3)] text-white/70 text-[11px] tracking-[0.15em] uppercase font-medium"
      style={{ height: 36 }}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-full flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a
            href={`tel:${t.topBar.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3" />
            {t.topBar.phone}
          </a>
          <a
            href={`mailto:${t.topBar.email}`}
            className="hidden sm:flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3 h-3" />
            {t.topBar.email}
          </a>
        </div>
        <span className="text-[var(--red)]/90">{t.topBar.language}</span>
      </div>
    </div>
  );
}
