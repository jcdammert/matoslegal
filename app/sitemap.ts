import { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";

const BASE = "https://matoslegal.com";

const slugs = [
  "foreclosure-defense",
  "civil-litigation",
  "personal-injury",
  "civil-rights",
];

const staticRoutes = [
  "",
  "/attorney-profile",
  "/practice-areas",
  "/resources",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    entries.push({
      url: `${BASE}/en${route}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE}/en${route}`,
          es: `${BASE}/es${route}`,
        },
      },
    });
  }

  for (const slug of slugs) {
    entries.push({
      url: `${BASE}/en/practice-areas/${slug}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${BASE}/en/practice-areas/${slug}`,
          es: `${BASE}/es/practice-areas/${slug}`,
        },
      },
    });
  }

  return entries;
}
