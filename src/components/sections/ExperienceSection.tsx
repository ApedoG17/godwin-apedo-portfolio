"use client";

import * as React from "react";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Users,
  Briefcase,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import { EDUCATION } from "@/content/education";
import { TextEffect } from "@/components/core/text-effect";

interface ExperienceItem {
  projectTitle: string;
  role: string;
  scopeType: "Nonprofit Client Collaboration" | "University Group Project" | "Independent Commercial Initiative";
  summary: string;
  caseStudyHref: string;
  accent: "purple" | "blue" | "amber";
}

const PROJECT_EXPERIENCE: ExperienceItem[] = [
  {
    projectTitle: "Davcie Foundation",
    role: "Full-Stack Developer",
    scopeType: "Nonprofit Client Collaboration",
    summary:
      "Collaborated closely with the Tech Lead to engineer the visual design, interactive paediatric diabetes learning suite, Framer Motion emblem physics, and authenticated Supabase administrative workflows.",
    caseStudyHref: "/projects/davcie-foundation",
    accent: "blue",
  },
  {
    projectTitle: "Raku Vehicle Rental",
    role: "Product/Client Manager & Contributor",
    scopeType: "University Group Project",
    summary:
      "Structured product requirements and user stories for a university software engineering team project, modeled relational database schemas, and implemented fleet reservation approval controls.",
    caseStudyHref: "/projects/raku",
    accent: "purple",
  },
  {
    projectTitle: "Chef Apedo Foods",
    role: "Solo Product Designer & Developer",
    scopeType: "Independent Commercial Initiative",
    summary:
      "Spearheaded independent digital product initiative from customer ordering workflows to live Supabase WebSocket kitchen subscriptions, financial ledger auditing, and courier fulfillment queues.",
    caseStudyHref: "/projects/chef-apedo-foods",
    accent: "amber",
  },
];

export function ExperienceSection() {
  const uG = EDUCATION.find((e) => e.institution === "University of Ghana") ?? EDUCATION[1];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="w-full pt-8 sm:pt-10 pb-8 sm:pb-12 scroll-mt-28 relative z-10"
    >
      {/* Anchor for legacy #education compatibility */}
      <div id="education" className="sr-only" aria-hidden="true" />

      <div className="space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-slate-200/80 dark:border-white/10">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400">
              BACKGROUND & PRACTICE
            </span>
            <TextEffect
              as="h2"
              per="word"
              preset="fade-in-blur"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]"
              segmentWrapperClassName={(segment) =>
                segment.includes("Education") ? "text-gradient-teal" : undefined
              }
            >
              Experience & Education
            </TextEffect>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-xl font-mono leading-relaxed">
              Academic computer science foundations paired with practical, hands-on project engineering and product responsibilities.
            </p>
          </div>

          <div className="text-xs font-mono text-content-muted">
            Academic Track • Hands-on Builds
          </div>
        </div>

        {/* 2-Column Responsive Grid: Left Education, Right Project Roles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ── LEFT COLUMN: Higher Education (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2 px-1">
              <GraduationCap className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Academic Foundation
              </span>
            </div>

            <article className="glass-panel rounded-[2rem] p-6 sm:p-7 border border-purple-200/90 dark:border-purple-400/25 shadow-sm bg-white/85 dark:bg-slate-900/60 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                {/* Header Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-purple-700 dark:text-purple-300 font-semibold">
                    Higher Education
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-200 border border-amber-200/80 dark:border-amber-400/30">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    Level 200 • In Progress
                  </span>
                </div>

                {/* Institution & Crest */}
                <div className="flex items-start gap-4">
                  {uG?.logo && (
                    <div className="relative w-14 h-14 rounded-2xl bg-white crest-frame border border-purple-200 p-2 flex items-center justify-center shrink-0 shadow-sm">
                      <Image
                        src={uG.logo}
                        alt={`${uG.institution} crest`}
                        width={56}
                        height={56}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}

                  <div className="space-y-1 min-w-0 flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                      {uG?.institution ?? "University of Ghana"}
                    </h3>
                    <p className="text-sm font-semibold text-purple-700 dark:text-purple-300">
                      {uG?.degree ?? "Bachelor of Science in Computer Science"}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs font-mono text-content-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-purple-600" />
                        {uG?.period ?? "January 2025 – Present"}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {uG?.location ?? "Legon, Accra, Ghana"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Narrative Focus */}
                <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
                  {uG?.focus ?? "Connecting core computer science theory directly to real-world software engineering, technical problem-solving, and building practical full-stack systems."}
                </p>

                {/* Core Coursework Tags */}
                <div className="space-y-2 pt-1 border-t border-slate-200/70 dark:border-white/10">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                    Core Coursework & Theory
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {uG?.coursework?.map((course) => (
                      <span
                        key={course}
                        className="inline-flex items-center gap-1 font-mono text-[11px] px-2.5 py-1 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200/80 dark:border-purple-400/30"
                      >
                        <CheckCircle2 className="w-3 h-3 text-purple-600" />
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CV Download Link Callout */}
              <div className="pt-4 border-t border-slate-200/70 dark:border-white/10 flex items-center justify-between text-xs font-mono text-content-muted">
                <span>Complete Academic Record</span>
                <a
                  href="/pdf/Godwin_Apedo_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center gap-1 font-semibold"
                >
                  <span>View CV</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          </div>

          {/* ── RIGHT COLUMN: Relevant Project Experience (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                  Project Responsibilities
                </span>
              </div>
              <span className="text-[11px] font-mono text-content-muted hidden sm:inline">
                Hands-on Collaborative & Solo Builds
              </span>
            </div>

            <div className="space-y-4">
              {PROJECT_EXPERIENCE.map((item) => {
                const isBlue = item.accent === "blue";
                const isPurple = item.accent === "purple";
                const isAmber = item.accent === "amber";

                const badgeBg = isBlue
                  ? "bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-200 border-blue-200/80 dark:border-blue-400/30"
                  : isPurple
                  ? "bg-purple-50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-200 border-purple-200/80 dark:border-purple-400/30"
                  : "bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-200 border-amber-200/80 dark:border-amber-400/30";

                const textAccent = isBlue
                  ? "text-blue-700 dark:text-blue-300"
                  : isPurple
                  ? "text-purple-700 dark:text-purple-300"
                  : "text-amber-700 dark:text-amber-300";

                return (
                  <article
                    key={item.projectTitle}
                    className="glass-card rounded-2xl p-5 sm:p-6 border border-slate-200/90 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-400/40 transition-all duration-300 bg-white/80 dark:bg-slate-900/60 shadow-xs flex flex-col justify-between space-y-3 group"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2.5">
                          <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                            {item.projectTitle}
                          </h3>
                          <span className={`text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-full border ${badgeBg}`}>
                            {item.scopeType}
                          </span>
                        </div>
                        <p className={`text-xs sm:text-sm font-semibold pt-0.5 ${textAccent}`}>
                          {item.role}
                        </p>
                      </div>

                      <Link
                        href={item.caseStudyHref}
                        className="inline-flex items-center gap-1 text-xs font-mono font-medium text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors self-start sm:self-auto shrink-0 pt-1 sm:pt-0"
                      >
                        <span>Case study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>

                    <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
                      {item.summary}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

