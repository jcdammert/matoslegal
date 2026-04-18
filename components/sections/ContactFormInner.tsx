"use client";

// TODO: Replace this component with GHL native form embed iframe
// once form is built in GHL dashboard. Keep fallback working until then.

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  phone: string;
  email: string;
  matter: string;
  message: string;
}

const initial: FormState = { name: "", phone: "", email: "", matter: "", message: "" };

export function ContactFormInner() {
  const { t } = useLocale();
  const f = t.contact.formFields;
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.phone.trim() || !/^[\d\s\-().+]{7,}$/.test(form.phone)) e.phone = "Valid phone required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.matter) e.matter = "Required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, firstName: form.name, lastName: "" }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(initial);
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "generate_lead");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-10 text-center">
        <p className="font-display text-xl text-[var(--charcoal)] italic">{f.success}</p>
      </div>
    );
  }

  const field = (key: keyof FormState) =>
    cn(
      "w-full border px-4 py-3 text-sm bg-[var(--cream)] font-body text-[var(--text)] outline-none transition-colors duration-200 focus:bg-white focus:border-[var(--charcoal)] rounded-none",
      errors[key] ? "border-[var(--red)]" : "border-[var(--hairline)] hover:border-[var(--text-muted)]"
    );

  const label = (text: string) => (
    <label className="block text-[11px] tracking-[0.15em] uppercase font-medium text-[var(--text-muted)] mb-1.5">
      {text}
    </label>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name + Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          {label(f.name)}
          <input
            type="text"
            placeholder={t.contact.formFields.name}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={field("name")}
          />
          {errors.name && <p className="text-[11px] text-[var(--red)] mt-1">{errors.name}</p>}
        </div>
        <div>
          {label(f.phone)}
          <input
            type="tel"
            placeholder={t.topBar.phone}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={field("phone")}
          />
          {errors.phone && <p className="text-[11px] text-[var(--red)] mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        {label(f.email)}
        <input
          type="email"
          placeholder={t.topBar.email}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={field("email")}
        />
        {errors.email && <p className="text-[11px] text-[var(--red)] mt-1">{errors.email}</p>}
      </div>

      {/* Matter */}
      <div>
        {label(f.matter)}
        <select
          value={form.matter}
          onChange={(e) => setForm({ ...form, matter: e.target.value })}
          className={cn(field("matter"), "cursor-pointer")}
        >
          <option value="" disabled>—</option>
          {f.matters.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
        {errors.matter && <p className="text-[11px] text-[var(--red)] mt-1">{errors.matter}</p>}
      </div>

      {/* Message */}
      <div>
        {label(f.message)}
        <textarea
          rows={4}
          placeholder={t.hero.subhead}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={cn(field("message"), "resize-none")}
        />
        {errors.message && <p className="text-[11px] text-[var(--red)] mt-1">{errors.message}</p>}
      </div>

      <MagneticButton className="w-full" strength={0.15}>
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full bg-[var(--red)] hover:bg-[var(--red-hover)] text-white text-xs tracking-[0.2em] uppercase font-medium py-4 transition-colors duration-200 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "sending" ? "..." : f.submit}
        </button>
      </MagneticButton>

      {status === "error" && (
        <p className="text-[11px] text-[var(--red)] text-center">
          Something went wrong. Please try again or call us directly.
        </p>
      )}

      <p className="text-[11px] text-[var(--text-muted)] italic leading-relaxed">
        {f.disclaimer}
      </p>
    </form>
  );
}
