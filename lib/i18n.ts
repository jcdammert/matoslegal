import { content as en } from "@/content/en";
import { content as es } from "@/content/es";

export type Locale = "en" | "es";
export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export function getDictionary(locale: Locale) {
  return locale === "es" ? es : en;
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
