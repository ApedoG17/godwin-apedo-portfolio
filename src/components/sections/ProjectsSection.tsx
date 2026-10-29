"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Users,
  CheckCircle2,
  Lock,
  Layers,
  HeartHandshake,
} from "lucide-react";
import { PROJECTS } from "@/content/projects";
import { Project, ProjectScreenshot } from "@/types";
import { Spotlight } from "@/components/core/spotlight";
import {
  MOTION_DURATIONS,
  MOTION_EASINGS,
  MOTION_DISTANCES,
  MOTION_VIEWPORT,
} from "@/lib/motion";
import { TextEffect } from "@/components/core/text-effect";
import { Tilt } from "@/components/core/tilt";

// Technology badge colors for both light and dark themes
const TECH_TAGS: Record<string, { bg: string; text: string; border: string }> = {
  "React": { bg: "rgba(2,132,199,0.08)", text: "#0284c7", border: "rgba(2,132,199,0.2)" },
  "Vite": { bg: "rgba(124,58,237,0.08)", text: "#7c3aed", border: "rgba(124,58,237,0.2)" },
  "JavaScript": { bg: "rgba(234,179,8,0.08)", text: "#b45309", border: "rgba(234,179,8,0.25)" },
  "GSAP": { bg: "rgba(16,185,129,0.08)", text: "#059669", border: "rgba(16,185,129,0.2)" },
  "CSS": { bg: "rgba(37,99,235,0.08)", text: "#2563eb", border: "rgba(37,99,235,0.2)" },
  "Next.js": { bg: "rgba(15,23,42,0.06)", text: "#0f172a", border: "rgba(15,23,42,0.12)" },
  "TypeScript": { bg: "rgba(37,99,235,0.08)", text: "#2563eb", border: "rgba(37,99,235,0.2)" },
  "Tailwind CSS": { bg: "rgba(8,145,178,0.08)", text: "#0891b2", border: "rgba(8,145,178,0.2)" },
  "Supabase": { bg: "rgba(16,185,129,0.08)", text: "#059669", border: "rgba(16,185,129,0.2)" },
  "Realtime WebSockets": { bg: "rgba(124,58,237,0.08)", text: "#7c3aed", border: "rgba(124,58,237,0.2)" },
  "SQL": { bg: "rgba(124,58,237,0.08)", text: "#7c3aed", border: "rgba(124,58,237,0.2)" },
  "Relational Modeling": { bg: "rgba(124,58,237,0.08)", text: "#7c3aed", border: "rgba(124,58,237,0.2)" },
  "Git": { bg: "rgba(240,80,50,0.08)", text: "#ea580c", border: "rgba(240,80,50,0.2)" },
  "GitHub": { bg: "rgba(15,23,42,0.06)", text: "#0f172a", border: "rgba(15,23,42,0.12)" },
  "Vercel": { bg: "rgba(15,23,42,0.06)", text: "#0f172a", border: "rgba(15,23,42,0.12)" },
  "Framer Motion": { bg: "rgba(236,72,153,0.08)", text: "#db2777", border: "rgba(236,72,153,0.2)" },
  "Server Actions": { bg: "rgba(15,23,42,0.06)", text: "#0f172a", border: "rgba(15,23,42,0.12)" },
  "Node.js": { bg: "rgba(34,197,94,0.08)", text: "#16a34a", border: "rgba(34,197,94,0.2)" },
  "PostgreSQL": { bg: "rgba(2,132,199,0.08)", text: "#0284c7", border: "rgba(2,132,199,0.2)" },
  "Supabase Auth": { bg: "rgba(16,185,129,0.08)", text: "#059669", border: "rgba(16,185,129,0.2)" },
  "Paystack": { bg: "rgba(14,165,233,0.08)", text: "#0284c7", border: "rgba(14,165,233,0.2)" },
};

function TechBadge({ name }: { name: string }) {
  const style = TECH_TAGS[name] ?? {
    bg: "rgba(100,116,139,0.08)",
    text: "#475569",
    border: "rgba(100,116,139,0.2)",
  };
  return (
    <span
      className="inline-flex items-center font-mono text-[11px] px-2.5 py-0.5 rounded-lg shadow-2xs tech-badge dark:bg-white/[0.06] dark:border-white/10 dark:text-slate-300"
      style={{
        background: style.bg,
        color: style.text,
        border: `1px solid ${style.border}`,
      }}
    >
      {name}
    </span>
  );
}

// Single Screenshot Card with Route Chrome & Captions
function ScreenshotFrame({
  screenshot,
  priority = false,
  accentColor = "purple",
}: {
  screenshot: ProjectScreenshot;
  priority?: boolean;
  accentColor?: "purple" | "blue" | "amber";
}) {
  const borderClass =
    accentColor === "amber"
      ? "border-amber-200/90 dark:border-amber-400/20"
      : accentColor === "blue"
      ? "border-blue-200/90 dark:border-blue-400/20"
      : "border-purple-200/90 dark:border-purple-400/20";

  const textAccent =
    accentColor === "amber"
      ? "text-amber-700 dark:text-amber-300"
      : accentColor === "blue"
      ? "text-blue-700 dark:text-blue-300"
      : "text-purple-700 dark:text-purple-300";

  const badgeBg =
    accentColor === "amber"
      ? "bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-200"
      : accentColor === "blue"
      ? "bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-200"
      : "bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-200";

  const dotColor =
    accentColor === "amber"
      ? "bg-amber-600"
      : accentColor === "blue"
      ? "bg-blue-600"
      : "bg-purple-600";

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border ${borderClass} bg-white dark:bg-slate-900/90 shadow-md group/img transition-all duration-300`}
    >
      {/* Mini Browser Bar */}
      <div className="px-3 py-2 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-sm flex items-center justify-between gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-400" />
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          {screenshot.route && (
            <span className="ml-2 text-slate-500 dark:text-slate-400 text-[10px] tracking-tight truncate max-w-[190px] sm:max-w-[240px]">
              {screenshot.route}
            </span>
          )}
        </div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-medium shrink-0 ${badgeBg}`}>
          {screenshot.label}
        </span>
      </div>

      {/* Screenshot Image */}
      <div
        className="relative w-full aspect-video min-h-[180px] sm:min-h-[220px] overflow-hidden bg-slate-100 dark:bg-slate-800"
        style={{ aspectRatio: "16 / 9" }}
      >
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.03]"
          priority={priority}
        />
      </div>

      {/* Bottom Caption Bar */}
      {screenshot.caption && (
        <div className="px-3.5 py-2 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-sm flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 truncate">
            <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
            <span className="truncate">{screenshot.caption}</span>
          </span>
          <span className={`${textAccent} font-medium shrink-0 text-[10px]`}>Verified</span>
        </div>
      )}
    </div>
  );
}

// ── 01. FEATURED FLAGSHIP SPOTLIGHT: DAVCIE FOUNDATION ──
function FeaturedProjectCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const primaryScreenshot: ProjectScreenshot = project.subsystems?.[0]?.screenshots?.[0] ?? {
    src: project.images?.[0] ?? "/images/davcie/davcie-logo.jpg",
    alt: "Davcie Foundation Platform Hero",
    label: "Foundation Platform",
    route: "davciefoundation.org",
    caption: "Empowering young lives beyond diabetes",
  };

  return (
    <Tilt rotationFactor={6} perspective={1000} className="w-full">
      <motion.article
        initial={shouldReduceMotion ? false : { opacity: 0, y: MOTION_DISTANCES.prominent }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={MOTION_VIEWPORT.default}
        transition={{
          duration: shouldReduceMotion ? MOTION_DURATIONS.instant : MOTION_DURATIONS.deliberate,
          ease: MOTION_EASINGS.easeOut,
        }}
        className="glass-panel rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-blue-200/90 dark:border-blue-400/25 shadow-[0_20px_50px_rgba(59,130,246,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative group/card bg-white/90 dark:bg-slate-900/70"
      >
        <Spotlight className="from-blue-500/12 via-purple-500/6 to-transparent" size={500} />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 items-center">
          {/* ── LEFT COLUMN: Real Interface Screenshot ── */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <ScreenshotFrame screenshot={primaryScreenshot} priority accentColor="blue" />
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 px-1 pt-1">
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                Nonprofit Platform &amp; Health Hub
              </span>
              <span className="text-blue-700 dark:text-blue-400 font-medium">
                Live Community Build
              </span>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Narrative & Action Links ── */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            {/* Classification & Role Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                01 • FEATURED SPOTLIGHT
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-200 border border-blue-200/80 dark:border-blue-400/30">
                Nonprofit Client Collaboration
              </span>
            </div>

            {/* Title & Brand Emblem */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-blue-200/90 dark:border-blue-400/30 bg-white p-1 flex items-center justify-center shadow-xs">
                  <Image
                    src="/images/davcie/davcie-emblem.png"
                    alt="Davcie Foundation emblem"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-blue-700 dark:text-blue-400">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed pt-1">
                {project.shortDescription}
              </p>
            </div>

            {/* Distinctive Technical Highlights */}
            <div className="space-y-2 pt-1 border-t border-slate-200/70 dark:border-white/10">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Core Architectural Capabilities
              </p>
              <ul className="space-y-1.5 text-xs text-content-secondary dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Interactive diabetes learning suite with 3D flip cards &amp; randomized quiz</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>14-piece vector emblem reassembly animation powered by Framer Motion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <span>Administrative backoffice with proxy request gating &amp; Paystack donation flow</span>
                </li>
              </ul>
            </div>

            {/* Tech Tags & CTAs */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {[
                  ...(project.techStack.frontend ?? []),
                  ...(project.techStack.tooling ?? []),
                ]
                  .slice(0, 6)
                  .map((t) => (
                    <TechBadge key={t} name={t} />
                  ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href="/projects/davcie-foundation"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all bg-slate-900 hover:bg-slate-800 text-white dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span>View Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm glass-card border-slate-200/90 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>GitHub Code</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Tilt>
  );
}

// ── COMPANION PROJECT CARD (MENSAH & RAKU) ──
function CompanionProjectCard({
  project,
  indexNumber,
  categoryLabel,
  roleBadge,
  iconSrc,
  iconBg,
  accentColor = "purple",
  caseStudyHref,
}: {
  project: Project;
  indexNumber: string;
  categoryLabel: string;
  roleBadge: string;
  iconSrc?: string;
  iconBg?: string;
  accentColor: "purple" | "blue" | "amber";
  caseStudyHref: string;
}) {
  const shouldReduceMotion = useReducedMotion();
  const isAmber = accentColor === "amber";
  const isPurple = accentColor === "purple";

  const cardBorder = isAmber
    ? "border-amber-200/90 hover:border-amber-300 dark:border-amber-400/20 dark:hover:border-amber-400/40"
    : isPurple
    ? "border-purple-200/90 hover:border-purple-300 dark:border-purple-400/20 dark:hover:border-purple-400/40"
    : "border-blue-200/90 hover:border-blue-300 dark:border-blue-400/20 dark:hover:border-blue-400/40";

  const categoryColor = isAmber
    ? "text-amber-700 dark:text-amber-300"
    : isPurple
    ? "text-purple-700 dark:text-purple-300"
    : "text-blue-700 dark:text-blue-300";

  const roleBg = isAmber
    ? "bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-200 border-amber-200/80 dark:border-amber-400/30"
    : isPurple
    ? "bg-purple-50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-200 border-purple-200/80 dark:border-purple-400/30"
    : "bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-200 border-blue-200/80 dark:border-blue-400/30";

  const spotlightGradient = isAmber
    ? "from-amber-500/12 via-orange-500/5 to-transparent"
    : isPurple
    ? "from-purple-500/12 via-indigo-500/5 to-transparent"
    : "from-blue-500/12 via-indigo-500/5 to-transparent";

  const primaryScreenshot: ProjectScreenshot = project.subsystems?.[0]?.screenshots?.[0] ?? {
    src: project.images?.[0] ?? "",
    alt: project.title,
    label: "Portal Interface",
    route: project.links.live?.replace("https://", "") ?? "",
    caption: project.tagline,
  };

  return (
    <Tilt rotationFactor={5} perspective={1000} className="w-full h-full">
      <motion.article
        initial={shouldReduceMotion ? false : { opacity: 0, y: MOTION_DISTANCES.default }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={MOTION_VIEWPORT.default}
        transition={{
          duration: shouldReduceMotion ? MOTION_DURATIONS.instant : MOTION_DURATIONS.moderate,
          ease: MOTION_EASINGS.easeOut,
        }}
        className={`glass-panel rounded-[2rem] overflow-hidden border ${cardBorder} shadow-sm relative group/card flex flex-col justify-between p-6 sm:p-7 bg-white/85 dark:bg-slate-900/60 h-full`}
      >
        <Spotlight className={spotlightGradient} size={360} />

        <div className="relative z-10 flex flex-col space-y-4">
          {/* Top Label Row */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className={`font-mono text-xs font-bold uppercase tracking-wider ${categoryColor}`}>
              {indexNumber} • {categoryLabel}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold border ${roleBg}`}>
              {isAmber ? (
                <Sparkles className="w-3 h-3 text-amber-600" />
              ) : isPurple ? (
                <Sparkles className="w-3 h-3 text-purple-600" />
              ) : (
                <Users className="w-3 h-3 text-blue-600" />
              )}
              {roleBadge}
            </span>
          </div>

          {/* Screenshot Frame */}
          <ScreenshotFrame
            screenshot={primaryScreenshot}
            accentColor={accentColor}
          />

          {/* Title & Brand Icon */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center gap-3">
              {iconSrc && (
                <div
                  className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-slate-200/90 dark:border-white/10 shadow-2xs p-1 flex items-center justify-center"
                  style={{ backgroundColor: iconBg ?? "#ffffff" }}
                >
                  <Image
                    src={iconSrc}
                    alt={`${project.title} icon`}
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}
              <div className="min-w-0 flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight truncate">
                  {project.title}
                </h3>
                <p className={`text-xs font-semibold truncate ${categoryColor}`}>
                  {project.subtitle ?? project.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed pt-1">
              {project.shortDescription ?? project.contributionSummary}
            </p>
          </div>

          {/* Architecture Callout Pills */}
          {project.subsystems && project.subsystems.length > 0 && (
            <div className="p-3 rounded-xl glass-card border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.03] space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                  <Layers className="w-3 h-3" />
                  Connected Portals
                </span>
                <span>{project.subsystems.length} Subsystems</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {project.subsystems.map((sub) => (
                  <span
                    key={sub.id}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300"
                  >
                    {sub.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer: Tech Stack & CTAs */}
        <div className="relative z-10 pt-5 mt-5 border-t border-slate-200/70 dark:border-white/10 space-y-3.5">
          <div className="flex flex-wrap gap-1.5">
            {[
              ...(project.techStack.frontend ?? []),
              ...(project.techStack.backend ?? []),
              ...(project.techStack.database ?? []),
            ]
              .slice(0, 5)
              .map((t) => (
                <TechBadge key={t} name={t} />
              ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2.5">
              <Link
                href={caseStudyHref}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-xs transition-all bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/[0.1] dark:hover:bg-white/[0.16] dark:text-white shadow-2xs hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
              >
                <span>View Case Study</span>
                <ArrowRight className="w-3 h-3" />
              </Link>

              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl font-medium text-xs glass-card border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </div>

            {project.slug === "raku-vehicle-rental" ? (
              <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <Lock className="w-3 h-3 text-slate-400" />
                Coursework
              </span>
            ) : project.slug === "mensah" ? (
              <span className="text-[11px] font-mono text-amber-700 dark:text-amber-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                Hackathon
              </span>
            ) : (
              <span className="text-[11px] font-mono text-purple-700 dark:text-purple-300 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                Commercial
              </span>
            )}
          </div>
        </div>
      </motion.article>
    </Tilt>
  );
}

// ── MAIN PROJECTS SECTION COMPONENT ──
export function ProjectsSection() {
  const davcie = PROJECTS.find((p) => p.slug === "davcie-foundation") ?? PROJECTS[0];
  const mensah = PROJECTS.find((p) => p.slug === "mensah") ?? PROJECTS[1];
  const raku = PROJECTS.find((p) => p.slug === "raku-vehicle-rental") ?? PROJECTS[2];

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full pt-8 sm:pt-10 pb-8 sm:pb-12 scroll-mt-28 relative z-10"
    >
      {/* Anchor for #projects compatibility */}
      <div id="projects" className="sr-only" aria-hidden="true" />

      <div className="space-y-10 sm:space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2 border-b border-slate-200/80 dark:border-white/10">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-purple-600">
              FEATURED WORK
            </span>
            <TextEffect
              as="h2"
              per="word"
              preset="fade-in-blur"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]"
              segmentWrapperClassName={(segment) =>
                segment.includes("Systems") ? "text-gradient-teal" : undefined
              }
            >
              Selected Projects & Systems
            </TextEffect>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-xl font-mono leading-relaxed">
              Curated builds spanning non-profit health platforms, luxury digital couture, and university software engineering systems.
            </p>
          </div>

          <a
            href="https://github.com/ApedoG17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-700 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-300 transition-colors glass-card px-4 py-2 rounded-full self-start sm:self-auto border-slate-200 dark:border-white/10 hover:border-purple-300 bg-white/80 dark:bg-white/[0.06] shadow-2xs group cursor-pointer"
          >
            <span>Explore all on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* ── 1. FEATURED FLAGSHIP SPOTLIGHT: DAVCIE FOUNDATION ── */}
        <FeaturedProjectCard project={davcie} />

        {/* ── 2. COMPANION GRID: MENSAH & RAKU RENTALS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <CompanionProjectCard
            project={mensah}
            indexNumber="02"
            categoryLabel="LUXURY E-COMMERCE"
            roleBadge="Sole Creator & Frontend"
            iconSrc="/images/mensah-logo.png"
            iconBg="#000000"
            accentColor="amber"
            caseStudyHref="/projects/mensah"
          />

          <CompanionProjectCard
            project={raku}
            indexNumber="03"
            categoryLabel="SOFTWARE ENGINEERING"
            roleBadge="Product/Client Manager & Contributor"
            iconSrc="/images/raku_icon.svg"
            iconBg="#d5001c"
            accentColor="blue"
            caseStudyHref="/projects/raku"
          />
        </div>

        {/* ── 3. PROMINENT SECTION-LEVEL EXPLORE ALL PROJECTS BUTTON ── */}
        <div className="pt-4 sm:pt-6 flex flex-col items-center justify-center text-center space-y-3">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] bg-slate-900 hover:bg-slate-800 text-white dark:bg-purple-600 dark:hover:bg-purple-500 shadow-[0_4px_20px_rgba(15,23,42,0.15)] dark:shadow-[0_4px_20px_rgba(147,51,234,0.3)] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
          >
            <span>Explore All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="text-xs font-mono text-content-muted">
            Complete collection including operational workflows, deep-dive architectures, and university coursework archives
          </p>
        </div>
      </div>
    </section>
  );
}
