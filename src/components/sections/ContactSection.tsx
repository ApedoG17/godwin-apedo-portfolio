"use client";

import * as React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  ExternalLink,
  Send,
  FileText,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export function ContactSection() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [projectType, setProjectType] = React.useState("Web Development");
  const [message, setMessage] = React.useState("");
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim() && !name.trim()) {
      setStatusMessage("Please enter your name or a short message.");
      return;
    }

    // Genuine mailto client trigger
    const subject = encodeURIComponent(`Project Inquiry: ${projectType} - from ${name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Hello Godwin,\n\nName: ${name || "Not specified"}\nEmail: ${email || "Not specified"}\nProject Type: ${projectType}\n\nMessage:\n${message}\n\n---\nSent from godwinapedo portfolio website`
    );

    const mailtoUrl = `mailto:${SITE_CONFIG.links.email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;

    setStatusMessage("Opening your email client to send message...");
    setTimeout(() => setStatusMessage(null), 5000);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="w-full pt-6 sm:pt-8 pb-10 sm:pb-14 scroll-mt-24 relative z-10"
    >
      <div className="glass-panel rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden bg-white/80">
        {/* Background ambient lighting */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(219, 234, 254, 0.4) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* ── LEFT: Contact Info & Verified Channels (6 cols) ── */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-600">
                LET&apos;S CONNECT
              </span>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.1]"
              >
                Have a project or opportunity? <br />
                <span className="text-gradient-teal">Let&apos;s build together.</span>
              </h2>
              <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                I am actively seeking software engineering internships, collaborative product builds,
                and technical projects. Reach out via email or direct client dispatch below.
              </p>
            </div>

            {/* Direct verified channel cards */}
            <div className="space-y-4">
              {/* Email */}
              <div className="glass-card rounded-2xl p-4 sm:p-5 flex items-center justify-between gap-4 border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-white/[0.06] shadow-2xs">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                      Direct Email
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.links.email}`}
                      className="font-bold text-sm sm:text-base text-slate-900 hover:text-purple-700 transition-colors"
                    >
                      {SITE_CONFIG.links.email}
                    </a>
                  </div>
                </div>
                <CopyEmailButton email={SITE_CONFIG.links.email} size="sm" />
              </div>

              {/* Location */}
              <div className="glass-card rounded-2xl p-4 sm:p-5 flex items-center gap-3.5 border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-white/[0.06] shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">
                    Location &amp; University
                  </p>
                  <p className="font-bold text-sm sm:text-base text-slate-900">
                    Accra, Ghana · University of Ghana
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-3.5 pt-2">
                <a
                  href={SITE_CONFIG.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 flex items-center justify-between group hover:border-purple-300 transition-all border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-white/[0.06] shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-slate-800 dark:text-slate-200" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    <span className="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100">GitHub</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-600 transition-colors" />
                </a>

                <a
                  href={SITE_CONFIG.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 flex items-center justify-between group hover:border-purple-300 transition-all border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-white/[0.06] shadow-2xs"
                >
                  <div className="flex items-center gap-2.5">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-blue-600" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="text-xs font-mono font-semibold text-slate-900 dark:text-slate-100">LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                </a>
              </div>

              {/* CV Note / Direct Download */}
              <div className="pt-2 text-xs font-mono text-content-muted flex items-center justify-between gap-2 flex-wrap">
                <div className="flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-purple-600" />
                  <span className="text-slate-600">Curriculum Vitae / Resume:</span>
                </div>
                <a
                  href="/pdf/Godwin_Apedo_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-purple-50 border border-purple-200 text-purple-700 hover:bg-purple-100 transition-all font-semibold"
                >
                  <FileText className="w-3 h-3" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Dedicated Contact & Social Hub Link */}
              <div className="pt-1">
                <Link
                  href="/contact"
                  className="w-full glass-card rounded-2xl p-3.5 sm:p-4 flex items-center justify-between group border border-purple-200 hover:border-purple-300 transition-all bg-purple-50/50 hover:bg-purple-50/80 shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 shrink-0">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                        Dedicated Contact &amp; Social Media Hub
                      </p>
                      <p className="text-[11px] font-mono text-slate-500">
                        Explore all verified socials, WhatsApp &amp; dedicated form
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-semibold text-purple-700 group-hover:translate-x-1 transition-transform shrink-0 hidden sm:inline">
                    Visit Hub &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Direct Message Composer (6 cols) ── */}
          <div className="lg:col-span-6">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-[2rem] p-6 sm:p-8 space-y-4 border border-slate-200/90 shadow-md bg-white/95"
            >
              <div className="space-y-1 pb-2">
                <h3 className="font-bold text-lg text-slate-900">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-content-secondary">
                  Fills your email client directly with these details. No external form broker required.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="contact-name" className="text-[11px] font-mono text-slate-600 font-medium">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="contact-email" className="text-[11px] font-mono text-slate-600 font-medium">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-project-type" className="text-[11px] font-mono text-slate-600 font-medium">
                  Inquiry Topic
                </label>
                <select
                  id="contact-project-type"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all cursor-pointer"
                >
                  <option value="Web Development" className="bg-white text-slate-900">Frontend / Web Development</option>
                  <option value="Digital Product Development" className="bg-white text-slate-900">Digital Product Development</option>
                  <option value="Internship Opportunity" className="bg-white text-slate-900">Software Engineering Internship</option>
                  <option value="Database & Systems" className="bg-white text-slate-900">Database &amp; Systems Architecture</option>
                  <option value="Other Exploration" className="bg-white text-slate-900">General Discussion / Computer Science</option>
                </select>
              </div>

              <div className="space-y-1">
                <label htmlFor="contact-message" className="text-[11px] font-mono text-slate-600 font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share details about the project, team, or opportunity..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                />
              </div>

              {statusMessage && (
                <p className="text-xs font-mono text-purple-700 animate-fade-in font-medium">
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[0_4px_16px_rgba(15,23,42,0.18)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.22)] cursor-pointer"
              >
                <span>Send via Email Client</span>
                <Send className="w-4 h-4" />
              </button>

              <div className="pt-2 text-center">
                <p className="text-[11px] font-mono text-slate-500">
                  Direct inquiries welcome at <span className="text-purple-700 font-semibold">{SITE_CONFIG.links.email}</span>
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
