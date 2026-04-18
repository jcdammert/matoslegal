"use client";

import { createContext, useContext } from "react";
import type { Content } from "@/content/en";
import type { Locale } from "@/lib/i18n";

interface LocaleContextValue {
  locale: Locale;
  t: Content;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  locale,
  dictionary,
  children,
}: {
  locale: Locale;
  dictionary: Content;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={{ locale, t: dictionary }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
