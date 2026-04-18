"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";
import { cn } from "@/lib/utils";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function toggleLocale() {
    const next = locale === "en" ? "es" : "en";
    // Swap /en/... → /es/... or vice versa
    const newPath = pathname.replace(`/${locale}`, `/${next}`);
    // Set cookie so middleware remembers preference
    document.cookie = `ml-locale=${next};max-age=31536000;path=/;samesite=lax`;
    router.push(newPath);
  }

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "text-[11px] tracking-[0.2em] uppercase font-medium font-body transition-colors duration-200",
        className
      )}
      aria-label="Switch language"
    >
      {locale === "en" ? "ES" : "EN"}
    </button>
  );
}
