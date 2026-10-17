"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowDown, Mail, MapPin, MessageSquare, Sparkles, FileText } from "lucide-react";
import { GENERAL_LOCATION } from "@/lib/contactData";
import { TextShimmer } from "@/components/core/text-shimmer";
import { BorderTrail } from "@/components/core/border-trail";
import { Magnetic } from "@/components/core/magnetic";

export function ContactHero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      aria-label="Contact Introduction"
      className="relative w-full pt-28 sm:pt-32 pb-12 sm:pb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* ── LEFT: Introductory Typography & Direct CTAs (7 cols) ── */}
        <div className="lg:col-span-7 flex flex-col gap-6 animate-fade-in">
          {/* Eyebrow */}
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.25em] text-purple-600">
              GET IN TOUCH
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.08]">
              Let&apos;s <span className="text-gradient-teal">Connect.</span>
            </h1>
          </div>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-content-secondary leading-relaxed max-w-xl">
            Whether you have a project in mind, want to collaborate, have a
            professional opportunity, or simply want to say hello, I&apos;d love
            to hear from you.
          </p>

          {/* Location Badge & Status */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs sm:text-sm font-mono">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200 text-slate-700 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-purple-600 shrink-0" />
              <span>{GENERAL_LOCATION}</span>
            </div>

            <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-700">
              <BorderTrail
                size={56}
                className="bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent shadow-[0_0_10px_#8b5cf6]"
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "linear",
                }}
              />
              <span className="w-1.5 h-1.5 rounded-full bg-purple-600 animate-ping" />
              <TextShimmer
                as="span"
                duration={2.5}
                spread={3}
                className="text-xs font-semibold [--base-color:#7c3aed] [--base-gradient-color:#0f172a]"
              >
                Open to New Opportunities
              </TextShimmer>
            </div>
          </div>

          {/* CTAs to Direct Channels or Form */}
          <div className="flex flex-wrap items-center gap-3.5 pt-3">
            <Magnetic intensity={0.25} range={100} actionArea="self">
              <button
                type="button"
                onClick={() => scrollToSection("contact-form")}
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 hover:scale-105 active:scale-95 bg-slate-900 hover:bg-slate-800 text-white shadow-[0_4px_16px_rgba(15,23,42,0.18)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.25)] cursor-pointer"
              >
                <span>Send a Message</span>
                <MessageSquare className="w-4 h-4" />
              </button>
            </Magnetic>

            <button
              type="button"
              onClick={() => scrollToSection("direct-channels")}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm text-slate-800 glass-card border border-slate-200 hover:border-purple-300 hover:text-purple-700 bg-white/80 shadow-2xs transition-all duration-200 cursor-pointer"
            >
              <span>Direct Channels</span>
              <ArrowDown className="w-4 h-4 text-purple-600" />
            </button>

            <a
              href="/pdf/Godwin_Apedo_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm text-slate-800 glass-card border border-slate-200 hover:border-purple-300 hover:text-purple-700 bg-white/80 shadow-2xs transition-all duration-200"
            >
              <FileText className="w-4 h-4 text-purple-600" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* ── RIGHT: Profile Photograph Card (5 cols) ── */}
        <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0 animate-fade-in">
          <div className="relative w-full max-w-[320px] sm:max-w-[360px]">
            {/* Ambient Backing Aura */}
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[2.5rem] pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.18) 0%, transparent 70%)",
                filter: "blur(28px)",
                zIndex: 0,
              }}
            />

            {/* Accent Gold Border Frame */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[2.2rem] pointer-events-none"
              style={{
                border: "2px solid rgba(217, 119, 6, 0.35)",
                transform: "translate(8px, 8px)",
                zIndex: 0,
              }}
            />

            {/* Main Glass Photo Frame */}
            <div
              className="relative rounded-[2.2rem] overflow-hidden glass-panel p-2 z-10 bg-white/85"
              style={{
                aspectRatio: "4/5",
                boxShadow:
                  "0 20px 40px -10px rgba(0, 0, 0, 0.08), 0 0 30px rgba(139, 92, 246, 0.08)",
              }}
            >
              <div className="relative w-full h-full rounded-[1.8rem] overflow-hidden bg-slate-100">
                <Image
                  src="/images/me-contact.jpg"
                  alt="Godwin Apedo — Portrait"
                  fill
                  priority
                  sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 400px"
                  className="object-cover object-top"
                  style={{ filter: "brightness(0.98) contrast(1.04)" }}
                />

                {/* Subtle vignette gradient at bottom */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(255, 255, 255, 0.5) 0%, transparent 40%)",
                  }}
                />

                {/* Name Overlay in Photo */}
                <div className="absolute bottom-3 inset-x-3 px-3 py-2 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/90 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-900 tracking-tight">
                      Godwin Apedo
                    </p>
                    <p className="text-[10px] text-purple-700 font-mono font-medium">
                      CS &amp; Product Builder
                    </p>
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Info Pill: Fast Response */}
            <div
              className="absolute -top-3 -right-3 sm:-right-4 z-20 glass-card rounded-2xl px-3.5 py-2 flex items-center gap-2 border border-purple-200 shadow-sm bg-white/95"
            >
              <div className="w-6 h-6 rounded-lg bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="text-[11px] font-mono font-medium text-slate-900">
                Direct Email Available
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
