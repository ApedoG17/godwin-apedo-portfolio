"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Sparkles,
  Users,
  CheckCircle2,
  Layers,
  ArrowRight,
  ArrowUpRight,
  ShoppingBag,
  ExternalLink,
  Car,
  UtensilsCrossed,
} from "lucide-react";
import { Project, ProjectScreenshot } from "@/types";
import { Spotlight } from "@/components/core/spotlight";
import { Tilt } from "@/components/core/tilt";
import {
  MOTION_DURATIONS,
  MOTION_EASINGS,
  MOTION_DISTANCES,
  MOTION_VIEWPORT,
} from "@/lib/motion";

// Helper to resolve accurate case study routes
export function getCaseStudyHref(slug: string): string {
  if (slug === "raku-vehicle-rental" || slug === "raku") return "/projects/raku";
  return `/projects/${slug}`;
}

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
  "Express": { bg: "rgba(100,116,139,0.08)", text: "#475569", border: "rgba(100,116,139,0.2)" },
  "PostgreSQL": { bg: "rgba(2,132,199,0.08)", text: "#0284c7", border: "rgba(2,132,199,0.2)" },
  "Framer Motion": { bg: "rgba(236,72,153,0.08)", text: "#db2777", border: "rgba(236,72,153,0.2)" },
  "Server Actions": { bg: "rgba(15,23,42,0.06)", text: "#0f172a", border: "rgba(15,23,42,0.12)" },
  "Node.js": { bg: "rgba(34,197,94,0.08)", text: "#16a34a", border: "rgba(34,197,94,0.2)" },
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

// Single Screenshot Frame with Browser Chrome, Route Bar & Captions
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
            <span className="ml-2 text-slate-500 dark:text-slate-400 text-[10px] tracking-tight truncate max-w-[190px] sm:max-w-[260px]">
              {screenshot.route}
            </span>
          )}
        </div>
        <span className={`px-2 py-0.5 rounded text-[10px] font-medium shrink-0 ${badgeBg}`}>
          {screenshot.label}
        </span>
      </div>

      {/* Screenshot Image Container */}
      <div
        className="relative w-full aspect-video min-h-[190px] sm:min-h-[240px] overflow-hidden bg-slate-100 dark:bg-slate-800"
        style={{ aspectRatio: "16 / 9" }}
      >
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-top transition-transform duration-500 group-hover/card:scale-[1.03]"
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
          <span className={`${textAccent} font-medium shrink-0 text-[10px]`}>
            Verified Prototype
          </span>
        </div>
      )}
    </div>
  );
}

// ── 01. FEATURED FLAGSHIP SPOTLIGHT: MENSAH ──
function FeaturedShowcaseCard({ project }: { project: Project }) {
  const shouldReduceMotion = useReducedMotion();
  const caseStudyHref = getCaseStudyHref(project.slug);

  const primaryScreenshot: ProjectScreenshot = project.subsystems?.[0]?.screenshots?.[0] ?? {
    src: project.images?.[0] ?? "/images/mensah-preview.png",
    alt: "MENSAH Luxury Bespoke Tailoring & E-Commerce Storefront",
    label: "Brand Runway & Atelier",
    route: "mensah-lex.vercel.app",
    caption: "Savile Row structure meets West African sartorial heritage",
  };

  return (
    <Tilt rotationFactor={4} perspective={1000} className="w-full">
      <motion.article
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : MOTION_DISTANCES.prominent }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? MOTION_DURATIONS.instant : MOTION_DURATIONS.deliberate,
          ease: MOTION_EASINGS.easeOut,
        }}
        className="glass-panel rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-amber-200/90 hover:border-amber-300/90 dark:border-amber-400/25 dark:hover:border-amber-400/40 shadow-[0_20px_50px_rgba(217,119,6,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative group/card bg-white/90 dark:bg-slate-900/70 transition-all duration-300"
      >
        <Spotlight className="from-amber-500/12 via-purple-500/6 to-transparent" size={540} />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 items-center">
          {/* Left Column: Real Interface Visual */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <Link
              href={caseStudyHref}
              className="block group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-2xl"
              aria-label={`View ${project.title} detailed case study`}
            >
              <ScreenshotFrame screenshot={primaryScreenshot} priority accentColor="amber" />
            </Link>
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 px-1 pt-1">
              <span className="flex items-center gap-1.5">
                <ShoppingBag className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                Luxury E-Commerce &amp; Spatial Logistics
              </span>
              <span className="text-amber-700 dark:text-amber-400 font-medium">
                Dual-View Atelier Runway
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Action CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            {/* Classification & Role Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                01 • FLAGSHIP SPOTLIGHT
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-200 border border-amber-200/80 dark:border-amber-400/30">
                Hackathon Prototype
              </span>
            </div>

            {/* Title & Brand Emblem */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-amber-200/90 dark:border-amber-400/30 bg-slate-950 p-1 flex items-center justify-center shadow-xs">
                  <Image
                    src="/images/mensah-logo.png"
                    alt="MENSAH emblem"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {project.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-400">
                    {project.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed pt-1">
                {project.shortDescription}
              </p>
            </div>

            {/* Core Architectural Capabilities */}
            <div className="space-y-2 pt-1 border-t border-slate-200/70 dark:border-white/10">
              <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                Architectural Highlights
              </p>
              <ul className="space-y-1.5 text-xs text-content-secondary dark:text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>Deterministic measurement-based virtual fitting assistant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>Haversine spherical distance courier matching &amp; animated route map</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  <span>Resilient offline catalog architecture ensuring uninterrupted browsing</span>
                </li>
              </ul>
            </div>

            {/* Tech Badges */}
            <div className="space-y-3 pt-1 border-t border-slate-200/70 dark:border-white/10">
              <div className="flex flex-wrap gap-1.5">
                {[
                  ...(project.techStack.frontend ?? []),
                  ...(project.techStack.tooling ?? []),
                ].map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={caseStudyHref}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all bg-slate-900 hover:bg-slate-800 text-white dark:bg-amber-600 dark:hover:bg-amber-500 shadow-sm hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
                >
                  <span>Explore Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/card:translate-x-0.5" />
                </Link>

                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm glass-card border-slate-200/90 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                  >
                    <span>Live Prototype</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors py-2 px-2"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
              <p className="text-[11px] font-mono text-content-muted">
                • Case Study Available &bull; Frontend live at mensah-lex.vercel.app with catalog fallback
              </p>
            </div>
          </div>
        </div>
      </motion.article>
    </Tilt>
  );
}

// ── 02 & 03. COMPANION SHOWCASE CARDS ──
function CompanionShowcaseCard({
  project,
  indexNumber,
  categoryLabel,
  roleBadge,
  iconSrc,
  iconBg,
  accentColor = "purple",
}: {
  project: Project;
  indexNumber: string;
  categoryLabel: string;
  roleBadge: string;
  iconSrc?: string;
  iconBg?: string;
  accentColor: "purple" | "blue" | "amber";
}) {
  const shouldReduceMotion = useReducedMotion();
  const caseStudyHref = getCaseStudyHref(project.slug);

  const isPurple = accentColor === "purple";
  const isBlue = accentColor === "blue";

  const cardBorder = isBlue
    ? "border-blue-200/90 hover:border-blue-300 dark:border-blue-400/20 dark:hover:border-blue-400/40"
    : "border-purple-200/90 hover:border-purple-300 dark:border-purple-400/20 dark:hover:border-purple-400/40";

  const categoryColor = isBlue
    ? "text-blue-700 dark:text-blue-300"
    : "text-purple-700 dark:text-purple-300";

  const roleBg = isBlue
    ? "bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-200 border-blue-200/80 dark:border-blue-400/30"
    : "bg-purple-50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-200 border-purple-200/80 dark:border-purple-400/30";

  const spotlightGradient = isBlue
    ? "from-blue-500/12 via-indigo-500/5 to-transparent"
    : "from-purple-500/12 via-indigo-500/5 to-transparent";

  const primaryScreenshot: ProjectScreenshot = project.subsystems?.[0]?.screenshots?.[0] ?? {
    src: project.images?.[0] ?? "/images/chef-apedo-foods.png",
    alt: project.title,
    label: "Portal Interface",
    route: project.links.live?.replace("https://", "") ?? "",
    caption: project.tagline,
  };

  return (
    <Tilt rotationFactor={4} perspective={1000} className="w-full h-full">
      <motion.article
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : MOTION_DISTANCES.default }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? MOTION_DURATIONS.instant : MOTION_DURATIONS.moderate,
          ease: MOTION_EASINGS.easeOut,
        }}
        className={`glass-panel rounded-[2rem] overflow-hidden border ${cardBorder} shadow-sm relative group/card flex flex-col justify-between p-6 sm:p-7 bg-white/85 dark:bg-slate-900/60 h-full transition-all duration-300`}
      >
        <Spotlight className={spotlightGradient} size={380} />

        <div className="relative z-10 flex flex-col space-y-4">
          {/* Top Label Row */}
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className={`font-mono text-xs font-bold uppercase tracking-wider ${categoryColor}`}>
              {indexNumber} • {categoryLabel}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold border ${roleBg}`}>
              {isPurple ? <Sparkles className="w-3 h-3 text-purple-600" /> : <Users className="w-3 h-3 text-blue-600" />}
              {roleBadge}
            </span>
          </div>

          {/* Screenshot Frame */}
          <Link
            href={caseStudyHref}
            className="block group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-2xl"
            aria-label={`View ${project.title} detailed case study`}
          >
            <ScreenshotFrame screenshot={primaryScreenshot} accentColor={accentColor} />
          </Link>

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
                    alt={`${project.title} emblem`}
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

          {/* Context Notice / Scope Clarity */}
          {project.slug === "raku-vehicle-rental" ? (
            <div className="px-3 py-2 rounded-xl bg-blue-50/70 dark:bg-blue-900/10 border border-blue-200/80 dark:border-blue-500/20 text-[11px] font-mono text-blue-800 dark:text-blue-300">
              <span className="font-semibold">University Group Project:</span> DCIT 208 Software Engineering &bull; Role: Product/Client Manager &amp; Backend Concurrency Contributor
            </div>
          ) : project.slug === "davcie-foundation" ? (
            <div className="px-3 py-2 rounded-xl bg-blue-50/70 dark:bg-blue-900/10 border border-blue-200/80 dark:border-blue-500/20 text-[11px] font-mono text-blue-800 dark:text-blue-300">
              <span className="font-semibold">Nonprofit Collaboration:</span> Paediatric diabetes health education, emblem motion physics &amp; backoffice admin
            </div>
          ) : (
            <div className="px-3 py-2 rounded-xl bg-purple-50/70 dark:bg-purple-900/10 border border-purple-200/80 dark:border-purple-500/20 text-[11px] font-mono text-purple-800 dark:text-purple-300">
              <span className="font-semibold">Independent Initiative:</span> Customer ordering, live Supabase kitchen ticketing, and courier dispatch portal
            </div>
          )}

          {/* Connected Subsystems */}
          {project.subsystems && project.subsystems.length > 0 && (
            <div className="p-3 rounded-xl glass-card border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/[0.03] space-y-1.5">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                  <Layers className="w-3 h-3" />
                  Key Modules &amp; Interfaces
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
              {/* Internal Case Study Link */}
              <Link
                href={caseStudyHref}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/[0.1] dark:hover:bg-white/[0.16] dark:text-white shadow-2xs hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 cursor-pointer"
              >
                <span>Explore Case Study</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover/card:translate-x-0.5" />
              </Link>

              {/* External Live Demo */}
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl font-medium text-xs glass-card border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                >
                  <span>{project.slug === "raku-vehicle-rental" ? "Live Staging" : "Live Demo"}</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}

              {/* GitHub Link */}
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl glass-card border-slate-200/90 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-purple-600 transition-colors"
                  aria-label={`${project.title} GitHub repository`}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <span className={`w-1.5 h-1.5 rounded-full ${isBlue ? "bg-blue-500" : "bg-purple-500"}`} />
              Case Study Ready
            </span>
          </div>

          <p className="text-[10px] font-mono text-content-muted">
            • Case Study Available &bull; Technical Breakdown &amp; Concurrency Architecture
          </p>
        </div>
      </motion.article>
    </Tilt>
  );
}

// ── MAIN PROJECTS SHOWCASE COMPONENT ──
export function ProjectsDirectory({ projects }: { projects: Project[] }) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("All");

  // Derive distinct categories present in active dataset
  const categoryFilters = React.useMemo(() => {
    return [
      { id: "All", label: "All Projects", count: projects.length },
      { id: "Luxury E-Commerce & Logistics", label: "Luxury & Logistics", count: projects.filter(p => p.category === "Luxury E-Commerce & Logistics").length },
      { id: "Commercial Platform", label: "Commercial Platforms", count: projects.filter(p => p.category === "Commercial Platform").length },
      { id: "Academic Software Engineering", label: "Software Engineering", count: projects.filter(p => p.category === "Academic Software Engineering").length },
      { id: "Nonprofit Web Platform", label: "Nonprofit Platform", count: projects.filter(p => p.category === "Nonprofit Web Platform").length },
    ].filter(item => item.id === "All" || item.count > 0);
  }, [projects]);

  // Filter projects by category
  const activeProjects = React.useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  const mensahProject = projects.find((p) => p.slug === "mensah");
  const chefApedoProject = projects.find((p) => p.slug === "chef-apedo-foods");
  const rakuProject = projects.find((p) => p.slug === "raku-vehicle-rental");
  const davcieProject = projects.find((p) => p.slug === "davcie-foundation");

  // In default "All" view, present the curated editorial layout: 01 Flagship on top, 02 & 03 side-by-side
  const isDefaultView = selectedCategory === "All";

  return (
    <div className="space-y-8 sm:space-y-10">
      {/* ── MINIMALIST CATEGORY PERSPECTIVE BAR ── */}
      <nav
        aria-label="Filter showcase by project focus"
        className="flex flex-wrap items-center justify-between gap-3 pb-2"
      >
        <div className="flex flex-wrap items-center gap-2">
          {categoryFilters.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-slate-900 text-white dark:bg-purple-600 dark:text-white shadow-xs"
                    : "glass-card text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 border border-slate-200/80 dark:border-white/10"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        <span className="text-xs font-mono text-content-muted hidden sm:inline-block">
          Select any project card to open its full technical case study
        </span>
      </nav>

      {/* ── EDITORIAL SHOWCASE PRESENTATION ── */}
      <AnimatePresence mode="wait">
        {isDefaultView ? (
          /* Editorial Curated Hierarchy */
          <motion.div
            key="editorial-layout"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-8 sm:space-y-10"
          >
            {/* 1. Flagship Spotlight: MENSAH */}
            {mensahProject && <FeaturedShowcaseCard project={mensahProject} />}

            {/* 2. Complementary Three-Column Grid: Chef Apedo Foods, Raku & Davcie Foundation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {chefApedoProject && (
                <CompanionShowcaseCard
                  project={chefApedoProject}
                  indexNumber="02"
                  categoryLabel="COMMERCIAL PLATFORM"
                  roleBadge="Solo Product Designer & Developer"
                  iconSrc="/images/chef_apedo_icon.png"
                  iconBg="#ffffff"
                  accentColor="purple"
                />
              )}

              {rakuProject && (
                <CompanionShowcaseCard
                  project={rakuProject}
                  indexNumber="03"
                  categoryLabel="SOFTWARE ENGINEERING"
                  roleBadge="Product/Client Manager & Contributor"
                  iconSrc="/images/raku_icon.svg"
                  iconBg="#d5001c"
                  accentColor="blue"
                />
              )}

              {davcieProject && (
                <CompanionShowcaseCard
                  project={davcieProject}
                  indexNumber="04"
                  categoryLabel="NONPROFIT PLATFORM"
                  roleBadge="Full-Stack Developer"
                  iconSrc="/images/davcie/davcie-emblem.png"
                  iconBg="#fdfaf0"
                  accentColor="blue"
                />
              )}
            </div>
          </motion.div>
        ) : (
          /* Filtered Category View */
          <motion.div
            key={`filtered-${selectedCategory}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: MOTION_DURATIONS.normal }}
            className="space-y-8"
          >
            {activeProjects.map((p) => {
              if (p.slug === "mensah") {
                return <FeaturedShowcaseCard key={p.slug} project={p} />;
              }
              const isChef = p.slug === "chef-apedo-foods";
              const isRaku = p.slug === "raku-vehicle-rental";
              const isDavcie = p.slug === "davcie-foundation";
              return (
                <div key={p.slug} className="max-w-2xl mx-auto">
                  <CompanionShowcaseCard
                    project={p}
                    indexNumber={isChef ? "02" : isRaku ? "03" : "04"}
                    categoryLabel={
                      isChef
                        ? "COMMERCIAL PLATFORM"
                        : isRaku
                        ? "SOFTWARE ENGINEERING"
                        : "NONPROFIT PLATFORM"
                    }
                    roleBadge={
                      isChef
                        ? "Solo Product Designer & Developer"
                        : isRaku
                        ? "Product/Client Manager & Contributor"
                        : "Full-Stack Developer"
                    }
                    iconSrc={
                      isChef
                        ? "/images/chef_apedo_icon.png"
                        : isRaku
                        ? "/images/raku_icon.svg"
                        : "/images/davcie/davcie-emblem.png"
                    }
                    iconBg={isChef ? "#ffffff" : isRaku ? "#d5001c" : "#fdfaf0"}
                    accentColor={isChef ? "purple" : "blue"}
                  />
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
