"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Spotlight } from "@/components/core/spotlight";
import { TextEffect } from "@/components/core/text-effect";
import {
  getStaggerContainerVariants,
  getStaggerItemVariants,
  MOTION_STAGGERS,
  MOTION_DISTANCES,
  MOTION_DURATIONS,
  MOTION_VIEWPORT,
} from "@/lib/motion";

interface CapabilityCategory {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  skills: string[];
  accentColor: "purple" | "blue" | "teal" | "amber";
}

const CAPABILITIES: CapabilityCategory[] = [
  {
    id: "product-dev",
    title: "Product Development",
    eyebrow: "Planning & Execution",
    description:
      "Translating ideas into structured user stories, clear technical requirements, and manageable engineering increments with disciplined Git workflows.",
    skills: ["User Stories", "Product Planning", "Git & GitHub", "Agile Workflows", "Sprint Coordination"],
    accentColor: "purple",
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    eyebrow: "Responsive Interfaces",
    description:
      "Building responsive, accessible web applications with modern React frameworks, strict TypeScript typing, and purposeful motion interactions.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    accentColor: "blue",
  },
  {
    id: "backend-data",
    title: "Backend & Data",
    eyebrow: "APIs & Schemas",
    description:
      "Designing relational data models, real-time database subscriptions, server actions, and protected administrative endpoints.",
    skills: ["Supabase", "PostgreSQL", "SQL", "Server Actions", "REST APIs", "Python"],
    accentColor: "teal",
  },
  {
    id: "uiux-proto",
    title: "UI/UX & Prototyping",
    eyebrow: "Design & Usability",
    description:
      "Crafting interactive component prototypes, design systems, visual hierarchy, and WCAG AA contrast-compliant user flows in Figma.",
    skills: ["Figma", "Design Systems", "Prototyping", "WCAG Accessibility", "Wireframing"],
    accentColor: "amber",
  },
];

export function CapabilitiesSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = getStaggerContainerVariants({
    staggerChildren: MOTION_STAGGERS.default,
    delayChildren: MOTION_STAGGERS.fast,
    shouldReduceMotion,
  });

  const cardVariants = getStaggerItemVariants({
    distance: MOTION_DISTANCES.default,
    duration: MOTION_DURATIONS.moderate,
    shouldReduceMotion,
  });

  return (
    <section
      id="capabilities"
      aria-labelledby="capabilities-heading"
      className="w-full pt-8 sm:pt-10 pb-8 sm:pb-12 scroll-mt-28 relative z-10"
    >
      {/* Anchor for legacy #services compatibility */}
      <div id="services" className="sr-only" aria-hidden="true" />
      <div id="tech" className="sr-only" aria-hidden="true" />

      <div className="space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200/80 dark:border-white/10">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
              CORE EXPERTISE
            </span>
            <TextEffect
              as="h2"
              per="word"
              preset="fade-in-blur"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]"
              segmentWrapperClassName={(segment) =>
                segment.includes("Stack") ? "text-gradient-teal" : undefined
              }
            >
              Capabilities & Technical Stack
            </TextEffect>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-xl font-mono leading-relaxed">
              Consolidated areas of capability across product strategy, client interfaces, backend architecture, and interaction design.
            </p>
          </div>

          <div className="text-xs font-mono text-content-muted">
            4 Core Focus Disciplines
          </div>
        </div>

        {/* 2 × 2 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={MOTION_VIEWPORT.default}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {CAPABILITIES.map((cap) => {
            const isPurple = cap.accentColor === "purple";
            const isBlue = cap.accentColor === "blue";
            const isTeal = cap.accentColor === "teal";
            const isAmber = cap.accentColor === "amber";

            const accentTextClass = isPurple
              ? "text-purple-700 dark:text-purple-300"
              : isBlue
              ? "text-blue-700 dark:text-blue-300"
              : isTeal
              ? "text-emerald-700 dark:text-emerald-300"
              : "text-amber-700 dark:text-amber-300";

            const accentBorderClass = isPurple
              ? "hover:border-purple-300 dark:hover:border-purple-400/40"
              : isBlue
              ? "hover:border-blue-300 dark:hover:border-blue-400/40"
              : isTeal
              ? "hover:border-emerald-300 dark:hover:border-emerald-400/40"
              : "hover:border-amber-300 dark:hover:border-amber-400/40";

            const spotlightGradient = isPurple
              ? "from-purple-500/10 via-indigo-500/4 to-transparent"
              : isBlue
              ? "from-blue-500/10 via-indigo-500/4 to-transparent"
              : isTeal
              ? "from-emerald-500/10 via-teal-500/4 to-transparent"
              : "from-amber-500/10 via-orange-500/4 to-transparent";

            return (
              <motion.div
                key={cap.id}
                variants={cardVariants}
                className={`glass-card rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between group transition-all duration-300 relative overflow-hidden bg-white/80 dark:bg-slate-900/60 border border-slate-200/90 dark:border-white/10 shadow-sm ${accentBorderClass}`}
              >
                <Spotlight className={`${spotlightGradient} blur-2xl`} size={320} />

                <div className="space-y-4 relative z-10">
                  {/* Eyebrow Label */}
                  <div className="flex items-center justify-between">
                    <span className={`text-[11px] sm:text-xs font-mono uppercase tracking-wider font-semibold ${accentTextClass}`}>
                      {cap.eyebrow}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600 group-hover:scale-125 transition-transform" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                    {cap.title}
                  </h3>

                  {/* Concise Description */}
                  <p className="text-sm sm:text-base text-content-secondary dark:text-slate-300 leading-relaxed">
                    {cap.description}
                  </p>
                </div>

                {/* Technology and Skills Tags */}
                <div className="pt-6 mt-6 border-t border-slate-200/70 dark:border-white/10 flex flex-wrap gap-1.5 relative z-10">
                  {cap.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100/90 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10 group-hover:border-purple-200 dark:group-hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

