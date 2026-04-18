"use client";

// TODO: Replace this component with GHL native form embed iframe
// once form is built in GHL dashboard. Keep fallback working until then.

import { useState } from "react";
import { useLocale } from "@/components/LocaleProvider";
import { cn } from "@/lib/utils";

interface FormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  matter: string;
  message: string;
}

const initialForm: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  matter: "",
  message: "",
};

export function ContactForm() {
  const { t } = useLocale();
  const f = t.contact.formFields;
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function validate(): boolean {
    const e: Partial<FormState> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.phone.trim() || !/^[\d\s\-().+]{7,}$/.test(form.phone))
      e.phone = "Valid phone required";
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
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm(initialForm);

      // Fire GA4 conversion event if available
      if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
        (window as any).gtag("event", "generate_lead");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[var(--cream)] rounded-lg p-10 text-center border border-[var(--hairline)]">
        <p className="font-display text-2xl text-[var(--charcoal)] italic mb-2">
          {f.success}
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof FormState) =>
    cn(
      "w-full border px-4 py-3 text-sm bg-white font-body text-[var(--text)] outline-none transition-colors duration-200 focus:border-[var(--charcoal)]",
      errors[field]
        ? "border-[var(--red)]"
        : "border-[var(--hairline)] hover:border-[var(--text-muted)]"
    );

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <h3 className="font-display text-2xl font-medium text-[var(--charcoal)] mb-6">
        {t.contact.formTitle}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs tracking-[0.1em] uppercase font-medium text-[var(--text-muted)] mb-1.5">
            {f.firstName}
          </label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className={inputClass("firstName")}
          />
          {errors.firstName && <p className="text-[11px] text-[var(--red)] mt-1">{errors.firstName}</p>}
        </div>
        <div>
          <label className="block text-xs tracking-[0.1em] uppercase font-medium text-[var(--text-muted)] mb-1.5">
            {f.lastName}
          </label>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className={inputClass("lastName")}
          />
          {errors.lastName && <p className="text-[11px] text-[var(--red)] mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-[0.1em] uppercase font-medium text-[var(--text-muted)] mb-1.5">
          {f.email}
        </label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className={inputClass("email")}
        />
        {errors.email && <p className="text-[11px] text-[var(--red)] mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-xs tracking-[0.1em] uppercase font-medium text-[var(--text-muted)] mb-1.5">
          {f.phone}
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className={inputClass("phone")}
        />
        {errors.phone && <p className="text-[11px] text-[var(--red)] mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label className="block text-xs tracking-[0.1em] uppercase font-medium text-[var(--text-muted)] mb-1.5">
          {f.matter}
        </label>
        <select
          value={form.matter}
          onChange={(e) => setForm({ ...form, matter: e.target.value })}
          className={cn(inputClass("matter"), "cursor-pointer")}
        >
          <option value="" disabled>—</option>
          {f.matters.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        {errors.matter && <p className="text-[11px] text-[var(--red)] mt-1">{errors.matter}</p>}
      </div>

      <div>
        <label className="block text-xs tracking-[0.1em] uppercase font-medium text-[var(--text-muted)] mb-1.5">
          {f.message}
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={cn(inputClass("message"), "resize-none")}
        />
        {errors.message && <p className="text-[11px] text-[var(--red)] mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[var(--red)] hover:bg-[var(--red-hover)] text-white text-xs tracking-[0.2em] uppercase font-medium py-4 transition-colors duration-200 disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed"
      >
        {status === "sending" ? "..." : f.submit}
      </button>

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
