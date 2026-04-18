import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { getDictionary, isValidLocale, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { TopBar } from "@/components/layout/TopBar";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/sections/ContactForm";
import { EyebrowLabel } from "@/components/primitives/EyebrowLabel";
import { SectionHeading } from "@/components/primitives/SectionHeading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return locale === "es"
    ? {
        title: "Contáctenos | Matos Legal, PLLC",
        description: "Programe su consulta gratuita con la abogada Rosalind J. Matos. Hablamos español.",
      }
    : {
        title: "Contact Us | Matos Legal, PLLC",
        description: "Schedule your free consultation with Attorney Rosalind J. Matos. We speak English and Spanish.",
      };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const t = getDictionary(locale as Locale);
  const c = t.contact;

  return (
    <>
      <TopBar />
      <Nav />
      <main>
        {/* Header */}
        <section className="bg-[var(--charcoal)] py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
            <EyebrowLabel light className="mb-5">{c.eyebrow}</EyebrowLabel>
            <SectionHeading
              start={c.headlineStart}
              accent={c.headlineAccent || (locale === "es" ? "Hablemos" : "Talk")}
              light
              centered
              className="mb-5"
            />
            <p className="text-white/60 max-w-xl mx-auto leading-relaxed">{c.subhead}</p>
          </div>
        </section>

        {/* Two-column content */}
        <section className="bg-white py-24 md:py-32">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left: contact details */}
              <div>
                <ul className="space-y-5 mb-10">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[var(--red)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--text)] leading-relaxed">{c.address}</span>
                  </li>
                  <li>
                    <a
                      href={`tel:${t.topBar.phone}`}
                      className="flex items-center gap-3 text-[var(--text)] hover:text-[var(--red)] transition-colors"
                    >
                      <Phone className="w-5 h-5 text-[var(--red)] flex-shrink-0" />
                      {t.topBar.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`mailto:${t.topBar.email}`}
                      className="flex items-center gap-3 text-[var(--text)] hover:text-[var(--red)] transition-colors"
                    >
                      <Mail className="w-5 h-5 text-[var(--red)] flex-shrink-0" />
                      {t.topBar.email}
                    </a>
                  </li>
                </ul>

                {/* Bilingual note */}
                <div className="bg-[var(--cream)] border border-[var(--hairline)] rounded-lg p-5">
                  <p className="text-sm text-[var(--text)] font-medium">
                    {locale === "es" ? "Hablamos Español" : "Hablamos Español · We Speak English"}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] mt-1 leading-relaxed">
                    {locale === "es"
                      ? "Atendemos a nuestra comunidad en inglés y en español."
                      : "We proudly serve South Florida's English and Spanish-speaking communities."}
                  </p>
                </div>

                {/* Google Maps embed */}
                <div className="mt-8 rounded-lg overflow-hidden border border-[var(--hairline)]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.8!2d-80.3999!3d26.1003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9a6b!2sLakeside+Executive+Suites!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Matos Legal Office Location"
                  />
                </div>
              </div>

              {/* Right: form */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
