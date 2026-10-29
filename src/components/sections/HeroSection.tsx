"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Mail,
  GraduationCap,
  MapPin,
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { PROJECTS } from "@/content/projects";
import {
  MOTION_DURATIONS,
  MOTION_EASINGS,
  MOTION_DISTANCES,
} from "@/lib/motion";
import { TextShimmer } from "@/components/core/text-shimmer";
import { Magnetic } from "@/components/core/magnetic";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const davcieProject = PROJECTS.find((p) => p.slug === "davcie-foundation");

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative w-full flex flex-col pt-24 sm:pt-28 pb-8 sm:pb-12"
    >
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-2 sm:py-4">

        {/* ── LEFT: Typography & Bio (7 cols) ── */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: MOTION_DISTANCES.prominent }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: shouldReduceMotion ? MOTION_DURATIONS.instant : MOTION_DURATIONS.deliberate,
            ease: MOTION_EASINGS.easeOut,
          }}
          className="lg:col-span-7 flex flex-col gap-6 z-10"
        >
          {/* Eyebrow Label & Headline */}
          <div className="space-y-2">
            <TextShimmer
              as="p"
              duration={2.5}
              spread={2.5}
              className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-semibold [--base-color:#7c3aed] [--base-gradient-color:#0f172a]"
            >
              PORTFOLIO
            </TextShimmer>
            <h1
              className="font-black tracking-tight leading-[1.05] select-none text-[clamp(2rem,4vw,3.85rem)]"
            >
              <span className="text-gradient-white block sm:whitespace-nowrap">
                GODWIN MAWULIE
              </span>
              <span className="text-gradient-teal block sm:whitespace-nowrap">
                YAW APEDO
              </span>
            </h1>
          </div>

          {/* Subtitle / Focus */}
          <div className="space-y-2 max-w-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Product-minded Developer
            </h2>
            <p className="text-sm sm:text-base text-content-secondary dark:text-slate-300 leading-relaxed">
              I design and build digital products, combining software development, product thinking, and thoughtful design to solve real problems.
            </p>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap text-xs sm:text-sm font-mono text-content-secondary dark:text-slate-400">
            <a
              href={SITE_CONFIG.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="GitHub Profile @ApedoG17"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>@ApedoG17</span>
            </a>
            <span className="w-px h-3.5 bg-slate-200 dark:bg-white/10" aria-hidden="true" />
            <a
              href={`mailto:${SITE_CONFIG.links.email}`}
              className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Send email"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </a>
            <span className="w-px h-3.5 bg-slate-200 dark:bg-white/10" aria-hidden="true" />
            <a
              href={SITE_CONFIG.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <span className="w-px h-3.5 bg-slate-200 dark:bg-white/10" aria-hidden="true" />
            <span className="flex items-center gap-1.5 text-content-muted dark:text-slate-400">
              <MapPin className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
              <span>Accra, Ghana</span>
            </span>
          </div>

          {/* CTAs — Dark primary, light secondary */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Magnetic intensity={0.25} range={100} actionArea="self">
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-bold text-xs sm:text-sm transition-all duration-200 hover:scale-105 active:scale-95 bg-slate-900 hover:bg-slate-800 text-white shadow-[0_4px_16px_rgba(15,23,42,0.18)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.25)]"
              >
                <span>View My Work</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Magnetic>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 glass-card border-slate-200/80 dark:border-white/10 hover:border-purple-300 hover:text-purple-700 dark:hover:text-purple-300 bg-white/80 dark:bg-white/[0.06] shadow-sm transition-all duration-200"
            >
              <span>Let&apos;s Connect</span>
            </a>
          </div>
        </motion.div>

        {/* ── RIGHT: Prominent Portrait + Floating Glass Info Cards (5 cols) ── */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: shouldReduceMotion ? MOTION_DURATIONS.instant : MOTION_DURATIONS.deliberate,
            ease: MOTION_EASINGS.easeOut,
            delay: shouldReduceMotion ? 0 : 0.1,
          }}
          className="lg:col-span-5 relative flex justify-center lg:justify-end -mt-6 sm:-mt-8 lg:mt-0"
        >
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] flex flex-col items-center">

            {/* Subtle atmospheric ambient glow behind head */}
            <div
              aria-hidden="true"
              className="absolute top-2 left-1/2 -translate-x-1/2 w-72 sm:w-80 h-72 sm:h-80 rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, rgba(139, 92, 246, 0.03) 50%, transparent 75%)",
                filter: "blur(40px)",
                zIndex: 0,
              }}
            />

            {/* ── Borderless Portrait with Smooth Atmospheric Blend ── */}
            <div
              className="relative w-full aspect-[3/4] z-10"
              style={{
                maskImage:
                  "radial-gradient(ellipse 52% 50% at 50% 46%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0.65) 86%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 52% 50% at 50% 46%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 72%, rgba(0, 0, 0, 0.65) 86%, transparent 100%)",
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/me-home.jpg"
                  alt="Godwin Mawulie Yaw Apedo — Product-minded Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 400px, 440px"
                  className="object-cover object-[center_top] scale-125 origin-[50%_18%]"
                  style={{ filter: "brightness(1.02) contrast(1.06)" }}
                />
              </div>
            </div>

            {/* ── Layered Soft Cloud Effect Elements (Concentrated strictly at lower torso/base) ── */}
            {/* Broad atmospheric mist bed - Behind lower torso */}
            <div
              aria-hidden="true"
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-36 pointer-events-none z-5 hero-torso-mist"
              style={{
                background:
                  "radial-gradient(ellipse 80% 55% at 50% 90%, #fbfbfe 45%, rgba(251, 251, 254, 0.95) 60%, rgba(245, 243, 255, 0.7) 80%, transparent 100%)",
                filter: "blur(16px)",
              }}
            />

            {/* Cloud puff - Left (Base only, soft backing) */}
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -left-8 w-52 h-24 rounded-full pointer-events-none z-5 opacity-60 hero-cloud-puff-left"
              style={{
                background:
                  "radial-gradient(circle at center, #ffffff 40%, rgba(245, 243, 255, 0.85) 68%, transparent 100%)",
                filter: "blur(14px)",
              }}
            />

            {/* Cloud puff - Right (Base only, soft backing) */}
            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-8 w-56 h-24 rounded-full pointer-events-none z-5 opacity-60 hero-cloud-puff-right"
              style={{
                background:
                  "radial-gradient(circle at center, #ffffff 45%, rgba(238, 242, 255, 0.85) 68%, transparent 100%)",
                filter: "blur(14px)",
              }}
            />

            {/* Foreground cloud base roll (Soft subtle grounding) */}
            <div
              aria-hidden="true"
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 rounded-full pointer-events-none z-5 opacity-50 hero-cloud-roll"
              style={{
                background:
                  "radial-gradient(ellipse at center, #ffffff 55%, rgba(251, 251, 254, 0.95) 78%, transparent 100%)",
                filter: "blur(12px)",
              }}
            />

            {/* ── Floating Glass Card 1: Current Project (Top-Right) ── */}
            <Link
              href={`/projects/${davcieProject?.slug ?? "davcie-foundation"}`}
              className="absolute -top-4 -right-1 sm:-top-5 sm:-right-3 lg:top-4 lg:-right-8 xl:-right-10 z-25 glass-card rounded-2xl p-2.5 sm:p-3.5 flex items-center gap-2.5 sm:gap-3 animate-float shadow-lg max-w-[200px] sm:max-w-[235px] border border-purple-200/90 dark:border-white/10 bg-white/95 dark:bg-slate-900/90"
              aria-label="Current Project: Davcie Foundation"
            >
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl overflow-hidden border border-purple-200/90 dark:border-white/10 flex items-center justify-center shrink-0 shadow-sm bg-white dark:bg-slate-800 crest-frame p-0.5">
                <Image
                  src="/images/davcie/davcie-emblem.png"
                  alt={davcieProject?.title ?? "Davcie Foundation"}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] font-mono text-content-muted dark:text-slate-400 uppercase tracking-wider font-semibold">
                  Current Project
                </p>
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  {davcieProject?.title ?? "Davcie Foundation"}
                </p>
                <p className="text-[10px] text-purple-600 dark:text-purple-400 font-mono font-medium">
                  {davcieProject?.category ?? "Nonprofit Web Platform"}
                </p>
              </div>
            </Link>

            {/* ── Floating Glass Card 2: Academic Focus (Bottom-Left) ── */}
            <div
              className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-4 md:-left-6 z-25 glass-card rounded-2xl p-3 sm:p-3.5 flex items-center gap-3 shadow-lg max-w-[210px] sm:max-w-[240px] border border-indigo-200/90 dark:border-white/10 bg-white/95 dark:bg-slate-900/90"
              style={{
                animation: shouldReduceMotion
                  ? "none"
                  : "float-y 5s ease-in-out infinite reverse",
              }}
            >
              <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-400/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shrink-0 shadow-sm">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] font-mono text-content-muted dark:text-slate-400 uppercase tracking-wider font-semibold">
                  Degree &amp; School
                </p>
                <p className="text-xs font-bold text-slate-900 dark:text-white truncate">
                  BSc Computer Science
                </p>
                <p className="text-[10px] text-indigo-600 dark:text-indigo-400 font-mono font-medium">
                  Univ. of Ghana
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
