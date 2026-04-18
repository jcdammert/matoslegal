"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";

export function Footer() {
  const { t, locale } = useLocale();

  const links = [
    { label: t.nav.home, href: `/${locale}` },
    { label: t.nav.attorney, href: `/${locale}/attorney-profile` },
    { label: t.nav.practice, href: `/${locale}/practice-areas` },
    { label: t.nav.resources, href: `/${locale}/resources` },
    { label: t.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer className="bg-[var(--charcoal)] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="block font-display font-medium text-xl tracking-tight mb-1">
              MATOS <span className="text-[var(--red)]">LEGAL</span> PLLC
            </span>
            <p className="text-white/50 text-sm leading-relaxed mt-3 max-w-xs">
              {t.footer.blurb}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="eyebrow text-[var(--red)]/80 mb-5">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="eyebrow text-[var(--red)]/80 mb-5">{t.footer.contactUs}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-white/60 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-[var(--red)]/70" />
                <span>{t.contact.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${t.topBar.phone}`}
                  className="flex items-center gap-2.5 text-white/60 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[var(--red)]/70" />
                  {t.topBar.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${t.topBar.email}`}
                  className="flex items-center gap-2.5 text-white/60 text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-[var(--red)]/70" />
                  {t.topBar.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/40 text-xs mb-3">{t.footer.copyright}</p>
          <p className="text-white/25 text-[11px] leading-relaxed max-w-4xl">
            {t.footer.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
