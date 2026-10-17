"use client";

import * as React from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Mail, RefreshCw } from "lucide-react";
import { ContactFormValues, ContactFormResponse } from "@/types/contact";
import { CONTACT_EMAIL } from "@/lib/contactData";

export function DedicatedContactForm() {
  const [values, setValues] = React.useState<ContactFormValues>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    botField: "",
  });

  const [touched, setTouched] = React.useState<Record<string, boolean>>({});
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);
  const [isUnconfigured, setIsUnconfigured] = React.useState(false);

  // Validate a single field
  const validateField = (name: keyof ContactFormValues, value: string): string => {
    switch (name) {
      case "fullName":
        if (!value.trim()) return "Full name is required.";
        if (value.trim().length < 2) return "Name must be at least 2 characters.";
        if (value.trim().length > 100) return "Name cannot exceed 100 characters.";
        return "";
      case "email": {
        if (!value.trim()) return "Email address is required.";
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value.trim())) return "Please enter a valid email address.";
        return "";
      }
      case "subject":
        if (!value.trim()) return "Subject is required.";
        if (value.trim().length < 2) return "Subject must be at least 2 characters.";
        if (value.trim().length > 150) return "Subject cannot exceed 150 characters.";
        return "";
      case "message":
        if (!value.trim()) return "Message is required.";
        if (value.trim().length < 10) return "Message must be at least 10 characters long.";
        if (value.trim().length > 3000) return "Message cannot exceed 3,000 characters.";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const fieldError = validateField(name as keyof ContactFormValues, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldError = validateField(name as keyof ContactFormValues, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Validate all fields
    const formErrors: Record<string, string> = {
      fullName: validateField("fullName", values.fullName),
      email: validateField("email", values.email),
      subject: validateField("subject", values.subject),
      message: validateField("message", values.message),
    };

    setTouched({
      fullName: true,
      email: true,
      subject: true,
      message: true,
    });

    setErrors(formErrors);

    const hasErrors = Object.values(formErrors).some((err) => Boolean(err));
    if (hasErrors) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data: ContactFormResponse = await response.json().catch(() => ({
        success: false,
        message: "Failed to parse server response.",
      }));

      if (response.ok && data.success) {
        setIsSuccess(true);
        setIsUnconfigured(false);
      } else {
        if (response.status === 503 || data.configured === false) {
          setIsUnconfigured(true);
          setServerError(
            data.message ||
              "The email delivery service is in setup mode awaiting RESEND_API_KEY."
          );
        } else {
          setServerError(
            data.message || "Failed to submit message. Please try again."
          );
        }
      }
    } catch {
      setServerError(
        "Network connection error. Please verify your connection or use the direct email link."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setValues({
      fullName: "",
      email: "",
      subject: "",
      message: "",
      botField: "",
    });
    setTouched({});
    setErrors({});
    setIsSuccess(false);
    setServerError(null);
    setIsUnconfigured(false);
  };

  // Fallback mailto link pre-filled with the current typed text
  const mailtoFallbackUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    values.subject || "Portfolio Inquiry"
  )}&body=${encodeURIComponent(
    `Hello Godwin,\n\nName: ${values.fullName || "Not specified"}\nEmail: ${
      values.email || "Not specified"
    }\n\nMessage:\n${values.message || ""}\n\n---\nSent from dedicated contact form`
  )}`;

  return (
    <section
      id="contact-form"
      aria-labelledby="form-heading"
      className="w-full py-10 sm:py-16 scroll-mt-24"
    >
      <div className="glass-panel rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden bg-white/80">
        {/* Ambient subtle glow backdrops */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-600">
              INQUIRY COMPOSER
            </span>
            <h2
              id="form-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
            >
              Send a Direct Message
            </h2>
            <p className="text-sm text-content-secondary max-w-lg mx-auto">
              Send a message directly from this page to{" "}
              <span className="text-slate-900 font-semibold font-mono">
                {CONTACT_EMAIL}
              </span>
              . Messages are delivered straight to my primary inbox.
            </p>
          </div>

          {/* ── SUCCESS STATE ── */}
          {isSuccess ? (
            <div
              role="alert"
              aria-live="polite"
              className="glass-card rounded-3xl p-8 sm:p-10 text-center space-y-5 border border-emerald-200 bg-emerald-50/70 animate-fade-in shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Message Delivered Successfully!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{values.fullName}</strong>. Your message has been received. I typically respond within 24 hours.
                </p>
              </div>

              <div className="pt-3 flex justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-800 glass-card border border-slate-200 hover:border-purple-300 hover:text-purple-700 bg-white shadow-xs transition-all cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Send Another Message</span>
                </button>
              </div>
            </div>
          ) : (
            /* ── FORM ── */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Server Error / Unconfigured Service Notice */}
              {serverError && (
                <div
                  role="alert"
                  className={`p-4 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs sm:text-sm ${
                    isUnconfigured
                      ? "bg-amber-50 border-amber-200 text-amber-900"
                      : "bg-red-50 border-red-200 text-red-900"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-amber-600" />
                    <div>
                      <p className="font-semibold">
                        {isUnconfigured
                          ? "Email Service Configuration Notice"
                          : "Submission Error"}
                      </p>
                      <p className="text-xs opacity-90 mt-0.5">{serverError}</p>
                    </div>
                  </div>

                  <a
                    href={mailtoFallbackUrl}
                    className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-mono text-xs font-bold transition-colors cursor-pointer shadow-xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-purple-600" />
                    <span>Send via Mail App</span>
                  </a>
                </div>
              )}

              {/* Honeypot Spam Trap (Hidden from human visitors) */}
              <div
                style={{
                  display: "none",
                  position: "absolute",
                  left: "-9999px",
                }}
                aria-hidden="true"
              >
                <label htmlFor="form-bot-field">Do not fill this field</label>
                <input
                  id="form-bot-field"
                  type="text"
                  name="botField"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.botField}
                  onChange={handleChange}
                />
              </div>

              {/* Row 1: Full Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="fullName"
                      className="text-xs font-mono font-medium text-slate-700"
                    >
                      Full Name <span className="text-purple-600">*</span>
                    </label>
                    {touched.fullName && errors.fullName && (
                      <span
                        id="fullName-error"
                        className="text-[11px] font-mono text-red-600"
                      >
                        {errors.fullName}
                      </span>
                    )}
                  </div>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="e.g. Ama Mensah"
                    aria-required="true"
                    aria-invalid={Boolean(touched.fullName && errors.fullName)}
                    aria-describedby={
                      touched.fullName && errors.fullName
                        ? "fullName-error"
                        : undefined
                    }
                    className={`w-full bg-slate-50/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 border transition-all focus:outline-none ${
                      touched.fullName && errors.fullName
                        ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    }`}
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="email"
                      className="text-xs font-mono font-medium text-slate-700"
                    >
                      Email Address <span className="text-purple-600">*</span>
                    </label>
                    {touched.email && errors.email && (
                      <span
                        id="email-error"
                        className="text-[11px] font-mono text-red-600"
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="name@organization.com"
                    aria-required="true"
                    aria-invalid={Boolean(touched.email && errors.email)}
                    aria-describedby={
                      touched.email && errors.email ? "email-error" : undefined
                    }
                    className={`w-full bg-slate-50/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 border transition-all focus:outline-none ${
                      touched.email && errors.email
                        ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        : "border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    }`}
                  />
                </div>
              </div>

              {/* Row 2: Subject */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="subject"
                    className="text-xs font-mono font-medium text-slate-700"
                  >
                    Subject <span className="text-purple-600">*</span>
                  </label>
                  {touched.subject && errors.subject && (
                    <span
                      id="subject-error"
                      className="text-[11px] font-mono text-red-600"
                    >
                      {errors.subject}
                    </span>
                  )}
                </div>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="e.g. Software Internship Opportunity / Web Collaboration"
                  aria-required="true"
                  aria-invalid={Boolean(touched.subject && errors.subject)}
                  aria-describedby={
                    touched.subject && errors.subject
                      ? "subject-error"
                      : undefined
                  }
                  className={`w-full bg-slate-50/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 border transition-all focus:outline-none ${
                    touched.subject && errors.subject
                      ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  }`}
                />
              </div>

              {/* Row 3: Message */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="message"
                    className="text-xs font-mono font-medium text-slate-700"
                  >
                    Message <span className="text-purple-600">*</span>
                  </label>
                  {touched.message && errors.message && (
                    <span
                      id="message-error"
                      className="text-[11px] font-mono text-red-600"
                    >
                      {errors.message}
                    </span>
                  )}
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tell me about your project, timeline, technical requirements, or opportunity..."
                  aria-required="true"
                  aria-invalid={Boolean(touched.message && errors.message)}
                  aria-describedby={
                    touched.message && errors.message
                      ? "message-error"
                      : undefined
                  }
                  className={`w-full bg-slate-50/90 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 border transition-all focus:outline-none resize-none ${
                    touched.message && errors.message
                      ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      : "border-slate-200 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  }`}
                />
              </div>

              {/* Actions & Protection notice */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] font-mono text-slate-500 text-center sm:text-left">
                  Protected with rate-limiting &amp; spam prevention.
                </p>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 py-3.5 px-8 rounded-full font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-[0_4px_16px_rgba(15,23,42,0.18)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.22)] cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
