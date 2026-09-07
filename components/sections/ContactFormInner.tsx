"use client";

// TODO: Replace this component with GHL native form embed iframe
// once form is built in GHL dashboard. Keep fallback working until then.

import { useState, useEffect, useRef, useCallback } from "react";
import Script from "next/script";
import { useLocale } from "@/components/LocaleProvider";
import { MagneticButton } from "@/components/primitives/MagneticButton";
import { cn } from "@/lib/utils";

interface FormState {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  matter: string;
  message: string;
}

const initial: FormState = { firstName: "", lastName: "", phone: "", email: "", matter: "", message: "" };

const SITEKEY = "0x4AAAAAAEpf_x-4KyhO88cU";

export function ContactFormInner() {
  const { t } = useLocale();
  const f = t.contact.formFields;
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const pendingRef = useRef(false);
  const formSnapshotRef = useRef<FormState>(initial);

  const submitToApi = useCallback(async (data: FormState, token: string) => {
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, turnstileToken: token }),
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
  }, []);

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !(window as any).turnstile || widgetIdRef.current) return;
    widgetIdRef.current = (window as any).turnstile.render(containerRef.current, {
      sitekey: SITEKEY,
      execution: "execute", // Only run when we explicitly call turnstile.execute()
      callback: async (token: string) => {
        if (!pendingRef.current) return;
        pendingRef.current = false;
        await submitToApi(formSnapshotRef.current, token);
        // Reset widget so it can be used again
        if (widgetIdRef.current !== null) {
          (window as any).turnstile?.reset(widgetIdRef.current);
        }
      },
      "error-callback": () => {
        if (!pendingRef.current) return;
        pendingRef.current = false;
        setStatus("error");
        if (widgetIdRef.current !== null) {
          (window as any).turnstile?.reset(widgetIdRef.current);
        }
      },
      "expired-callback": () => {
        pendingRef.current = false;
        if (widgetIdRef.current !== null) {
          (window as any).turnstile?.reset(widgetIdRef.current);
        }
      },
    });
  }, [submitToApi]);

  useEffect(() => {
    if ((window as any).turnstile) renderWidget();
  }, [renderWidget]);

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.firstName.trim()) e.firstName = "Required";
    if (!form.lastName.trim()) e.lastName = "Required";
    if (!form.phone.trim() || form.phone.replace(/\D/g, "").length < 7) e.phone = "Valid phone required";
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

    if (widgetIdRef.current !== null && (window as any).turnstile) {
      // Execute Turnstile now — fresh challenge tied to this user interaction
      formSnapshotRef.current = { ...form };
      pendingRef.current = true;
      (window as any).turnstile.execute(widgetIdRef.current);
    } else {
      // Widget not ready — submit directly (server will reject if no valid token)
      await submitToApi(form, "");
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          {label(f.firstName)}
          <input type="text" placeholder="" value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            className={field("firstName")} />
          {errors.firstName && <p className="text-[11px] text-[var(--red)] mt-1">{errors.firstName}</p>}
        </div>
        <div>
          {label(f.lastName)}
          <input type="text" placeholder="" value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            className={field("lastName")} />
          {errors.lastName && <p className="text-[11px] text-[var(--red)] mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          {label(f.phone)}
          <input type="tel" placeholder="" value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={field("phone")} />
          {errors.phone && <p className="text-[11px] text-[var(--red)] mt-1">{errors.phone}</p>}
        </div>
        <div>
          {label(f.email)}
          <input type="email" placeholder="" value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={field("email")} />
          {errors.email && <p className="text-[11px] text-[var(--red)] mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        {label(f.matter)}
        <select value={form.matter}
          onChange={(e) => setForm({ ...form, matter: e.target.value })}
          className={cn(field("matter"), "cursor-pointer")}>
          <option value="" disabled>—</option>
          {f.matters.map((m) => <option key={m} value={m}>{m}</option>)}
        </select>
        {errors.matter && <p className="text-[11px] text-[var(--red)] mt-1">{errors.matter}</p>}
      </div>

      <div>
        {label(f.message)}
        <textarea rows={4} placeholder="" value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={cn(field("message"), "resize-none")} />
        {errors.message && <p className="text-[11px] text-[var(--red)] mt-1">{errors.message}</p>}
      </div>

      {/* Turnstile — execute-on-submit pattern, never auto-fires */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={renderWidget}
      />
      <div ref={containerRef} className="hidden" />

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
