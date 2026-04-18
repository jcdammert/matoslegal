"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/components/LocaleProvider";
import { LanguageToggle } from "./LanguageToggle";
import { Button } from "@/components/primitives/Button";
import { cn } from "@/lib/utils";

export function Nav() {
  const { t, locale } = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: t.nav.home, href: `/${locale}` },
    { label: t.nav.attorney, href: `/${locale}/attorney-profile` },
    { label: t.nav.practice, href: `/${locale}/practice-areas` },
    { label: t.nav.resources, href: `/${locale}/resources` },
    { label: t.nav.contact, href: `/${locale}/contact` },
  ];

  const isActive = (href: string) =>
    href === `/${locale}` ? pathname === `/${locale}` : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-white"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex-shrink-0">
          <span className="font-display font-medium text-xl text-[var(--charcoal)] tracking-tight">
            MATOS <span className="text-[var(--red)]">LEGAL</span>
          </span>
          <span className="block text-[9px] tracking-[0.25em] uppercase text-[var(--text-muted)] font-body -mt-0.5">
            PLLC
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-[11px] tracking-[0.15em] uppercase font-medium font-body transition-colors duration-200 link-underline",
                isActive(link.href)
                  ? "text-[var(--red)]"
                  : "text-[var(--charcoal)] hover:text-[var(--red)]"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageToggle className="text-[var(--text-muted)] hover:text-[var(--charcoal)]" />
          <Button href={`/${locale}/contact`} variant="primary" showArrow={false} className="py-3 px-5 text-[10px]">
            {t.nav.cta}
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-[var(--charcoal)]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[var(--hairline)] bg-white overflow-hidden"
          >
            <nav className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "text-sm tracking-[0.15em] uppercase font-medium font-body transition-colors",
                    isActive(link.href)
                      ? "text-[var(--red)]"
                      : "text-[var(--charcoal)]"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-[var(--hairline)]">
                <LanguageToggle className="text-[var(--text-muted)]" />
                <Button href={`/${locale}/contact`} variant="primary" showArrow={false} className="py-3 px-5 text-[10px]">
                  {t.nav.cta}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
