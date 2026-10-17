"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Sparkles,
  Users,
  CheckCircle2,
  Lock,
  Store,
  LayoutDashboard,
  Bike,
  Car,
  Layers,
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
import { GlowEffect } from "@/components/core/glow-effect";
import { Tilt } from "@/components/core/tilt";

// Technology badge colors for light theme
const TECH_TAGS: Record<string, { bg: string; text: string; border: string }> = {
  "Next.js": { bg: "rgba(15,23,42,0.06)", text: "#0f172a", border: "rgba(15,23,42,0.12)" },
  "React": { bg: "rgba(2,132,199,0.08)", text: "#0284c7", border: "rgba(2,132,199,0.2)" },
  "TypeScript": { bg: "rgba(37,99,235,0.08)", text: "#2563eb", border: "rgba(37,99,235,0.2)" },
  "Tailwind CSS": { bg: "rgba(8,145,178,0.08)", text: "#0891b2", border: "rgba(8,145,178,0.2)" },
  "Supabase": { bg: "rgba(16,185,129,0.08)", text: "#059669", border: "rgba(16,185,129,0.2)" },
  "Realtime WebSockets": { bg: "rgba(124,58,237,0.08)", text: "#7c3aed", border: "rgba(124,58,237,0.2)" },
  "Python": { bg: "rgba(217,119,6,0.08)", text: "#d97706", border: "rgba(217,119,6,0.2)" },
  "SQL": { bg: "rgba(124,58,237,0.08)", text: "#7c3aed", border: "rgba(124,58,237,0.2)" },
  "Relational Modeling": { bg: "rgba(124,58,237,0.08)", text: "#7c3aed", border: "rgba(124,58,237,0.2)" },
  "Git": { bg: "rgba(240,80,50,0.08)", text: "#ea580c", border: "rgba(240,80,50,0.2)" },
  "GitHub": { bg: "rgba(15,23,42,0.06)", text: "#0f172a", border: "rgba(15,23,42,0.12)" },
  "Vercel": { bg: "rgba(15,23,42,0.06)", text: "#0f172a", border: "rgba(15,23,42,0.12)" },
};

function TechBadge({ name }: { name: string }) {
  const style = TECH_TAGS[name] ?? {
    bg: "rgba(100,116,139,0.08)",
    text: "#475569",
    border: "rgba(100,116,139,0.2)",
  };
  return (
    <span
      className="inline-flex items-center font-mono text-[11px] px-2.5 py-1 rounded-lg shadow-2xs"
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

function getSubsystemIcon(id: string) {
  switch (id) {
    case "storefront":
      return Store;
    case "admin":
    case "manager":
      return LayoutDashboard;
    case "rider":
      return Bike;
    case "client":
      return Car;
    default:
      return Layers;
  }
}

// Single Screenshot Card with Route Chrome & Captions
function ScreenshotFrame({
  screenshot,
  priority = false,
  accentColor = "teal",
}: {
  screenshot: ProjectScreenshot;
  priority?: boolean;
  accentColor?: "teal" | "blue";
}) {
  const isTeal = accentColor === "teal";
  const borderClass = isTeal ? "border-purple-200" : "border-blue-200";
  const textAccent = isTeal ? "text-purple-700" : "text-blue-700";
  const dotColor = isTeal ? "bg-purple-600" : "bg-blue-600";

  return (
    <div
      className={`relative rounded-2xl overflow-hidden border ${borderClass} bg-white shadow-md group/img transition-all duration-300`}
    >
      {/* Mini Browser Bar */}
      <div className="px-3 py-2 border-b border-slate-200/80 bg-slate-50/90 backdrop-blur-sm flex items-center justify-between gap-2 text-[11px] font-mono">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-400" />
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          {screenshot.route && (
            <span className="ml-2 text-slate-500 text-[10px] tracking-tight truncate max-w-[190px] sm:max-w-[240px]">
              {screenshot.route}
            </span>
          )}
        </div>
        <span
          className={`px-2 py-0.5 rounded text-[10px] font-medium shrink-0 ${
            isTeal ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"
          }`}
        >
          {screenshot.label}
        </span>
      </div>

      {/* Real Screenshot */}
      <div
        className="relative w-full aspect-video min-h-[180px] sm:min-h-[220px] overflow-hidden bg-slate-100"
        style={{ aspectRatio: "16 / 9" }}
      >
        <Image
          src={screenshot.src}
          alt={screenshot.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="object-cover object-top transition-transform duration-500 group-hover/img:scale-[1.03]"
          priority={priority}
        />
      </div>

      {/* Bottom Caption Bar */}
      {screenshot.caption && (
        <div className="px-3.5 py-2 border-t border-slate-200/80 bg-slate-50/90 backdrop-blur-sm flex items-center justify-between text-[11px] font-mono text-slate-500">
          <span className="flex items-center gap-1.5 text-slate-700 truncate">
            <span className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
            <span className="truncate">{screenshot.caption}</span>
          </span>
          <span className={`${textAccent} font-medium shrink-0 text-[10px]`}>Verified</span>
        </div>
      )}
    </div>
  );
}

// Dedicated Workflow Card for Rider / Logistics (displayed when Rider tab is active)
function RiderLogisticsCard() {
  return (
    <div className="rounded-2xl border border-purple-200 bg-gradient-to-b from-purple-50/70 to-white p-4 sm:p-5 shadow-sm space-y-3.5">
      <div className="flex items-center justify-between border-b border-purple-200/80 pb-2.5">
        <span className="text-xs font-mono font-semibold text-purple-700 uppercase tracking-wider flex items-center gap-1.5">
          <Bike className="w-3.5 h-3.5 text-purple-600" />
          Kwame Dispatch Pipeline
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200 font-medium">
          Real-time Event Queue
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
        <div className="p-2.5 rounded-xl bg-white border border-purple-100 shadow-2xs space-y-1">
          <p className="font-mono text-[10px] text-purple-700 uppercase font-semibold">1. Ticket Dispatch</p>
          <p className="text-content-secondary text-[11px] leading-relaxed">
            Kitchen staff flags order ready; WebSocket broadcast instantly triggers courier queue.
          </p>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-purple-100 shadow-2xs space-y-1">
          <p className="font-mono text-[10px] text-purple-700 uppercase font-semibold">2. Campus Coordinates</p>
          <p className="text-content-secondary text-[11px] leading-relaxed">
            Pins exact customer hall coordinates (e.g. Evandy Hostel, Legon Hall) for courier navigation.
          </p>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-purple-100 shadow-2xs space-y-1">
          <p className="font-mono text-[10px] text-purple-700 uppercase font-semibold">3. Delivery Handover</p>
          <p className="text-content-secondary text-[11px] leading-relaxed">
            Rider marks order delivered, notifying both customer and kitchen display in real-time.
          </p>
        </div>
        <div className="p-2.5 rounded-xl bg-white border border-purple-100 shadow-2xs space-y-1">
          <p className="font-mono text-[10px] text-purple-700 uppercase font-semibold">4. Fee Reconciliation</p>
          <p className="text-content-secondary text-[11px] leading-relaxed">
            Courier delivery fee (GH₵ 10.00/drop) automatically logged to the admin financial ledger.
          </p>
        </div>
      </div>
    </div>
  );
}

// Interactive Project Card with Subsystem Switcher
function ProjectCard({
  project,
  index,
  accentColor = "teal",
}: {
  project: Project;
  index: number;
  accentColor?: "teal" | "blue";
}) {
  const shouldReduceMotion = useReducedMotion();
  const isTeal = accentColor === "teal";
  const subsystems = project.subsystems ?? [];

  // Active Subsystem Tab
  const [activeSubsystemId, setActiveSubsystemId] = React.useState<string>(
    subsystems[0]?.id ?? "default"
  );

  // Sub-view index if subsystem has > 2 screenshots (e.g. Admin marketing toggle)
  const [adminViewIndex, setAdminViewIndex] = React.useState<number>(0);

  const activeSubsystem =
    subsystems.find((s) => s.id === activeSubsystemId) ?? subsystems[0];

  // Border & Glow Accents
  const cardBorderClass = isTeal
    ? "border-purple-200 hover:border-purple-300"
    : "border-blue-200 hover:border-blue-300";
  const spotlightClass = isTeal
    ? "from-purple-500/12 via-indigo-500/5 to-transparent"
    : "from-blue-500/12 via-indigo-500/5 to-transparent";

  return (
    <Tilt rotationFactor={7.5} perspective={1000} className="w-full">
      <motion.article
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : MOTION_DISTANCES.prominent }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={MOTION_VIEWPORT.default}
        transition={{
          duration: shouldReduceMotion ? MOTION_DURATIONS.instant : MOTION_DURATIONS.deliberate,
          delay: shouldReduceMotion ? 0 : index * 0.1,
          ease: MOTION_EASINGS.easeOut,
        }}
        className={`glass-panel rounded-[2.5rem] overflow-hidden border ${cardBorderClass} shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative group/card bg-white/85`}
      >
        {/* Motion Primitives Spotlight Hover Effect */}
        <Spotlight className={spotlightClass} size={440} />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 p-6 sm:p-8 lg:p-10 items-start">
          {/* ── LEFT COLUMN: Interactive Subsystem Explorer & Real Screenshots ── */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5">
            {/* Header Row: Category & Role Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span
                className={`font-mono text-xs font-bold uppercase tracking-wider ${
                  isTeal ? "text-purple-700" : "text-blue-700"
                }`}
              >
                {index === 0 ? "01 • COMMERCIAL ECOSYSTEM" : "02 • SOFTWARE ENGINEERING"}
              </span>

              {isTeal ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  Solo Product Designer &amp; Developer
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-blue-50 text-blue-800 border border-blue-200">
                  <Users className="w-3 h-3 text-blue-600" />
                  Product/Client Manager &amp; Primary Contributor
                </span>
              )}
            </div>

            {/* Subsystem Switcher Tabs */}
            {subsystems.length > 1 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                    Explore System Interfaces
                  </span>
                  <span className="text-[10px] font-mono text-purple-700 font-medium">
                    {subsystems.length} Connected Portals
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100/90 border border-slate-200 backdrop-blur-md">
                  {subsystems.map((sub) => {
                    const isActive = activeSubsystemId === sub.id;
                    const Icon = getSubsystemIcon(sub.id);
                    return (
                      <button
                        key={sub.id}
                        type="button"
                        onClick={() => {
                          setActiveSubsystemId(sub.id);
                          setAdminViewIndex(0);
                        }}
                        className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                          isActive
                            ? isTeal
                              ? "text-purple-700 font-semibold shadow-xs"
                              : "text-blue-700 font-semibold shadow-xs"
                            : "text-slate-600 hover:text-slate-900"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId={`active-tab-${project.slug}`}
                            className={`absolute inset-0 rounded-lg ${
                              isTeal
                                ? "bg-white border border-purple-200 shadow-xs"
                                : "bg-white border border-blue-200 shadow-xs"
                            }`}
                            transition={{ type: "spring", stiffness: 400, damping: 32 }}
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-1.5">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{sub.name}</span>
                          <span className="text-[10px] opacity-75 font-normal px-1 py-0.2 rounded bg-slate-200/60 border border-slate-300/40">
                            {sub.screenshots.length}
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Subsystem Role Helper Description */}
                {activeSubsystem?.description && (
                  <p className="text-[11px] font-mono text-slate-500 leading-relaxed px-1">
                    {activeSubsystem.description}
                  </p>
                )}
              </div>
            )}

            {/* Sub-view toggle when subsystem has 3 screenshots */}
            {activeSubsystem?.screenshots && activeSubsystem.screenshots.length > 2 && (
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-100 border border-slate-200 text-[11px] font-mono">
                <span className="text-slate-500 px-2 text-[10px]">Views:</span>
                {activeSubsystem.screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setAdminViewIndex(idx)}
                    className={`px-2 py-0.5 rounded text-[10px] cursor-pointer transition-colors ${
                      adminViewIndex === idx
                        ? isTeal
                          ? "bg-purple-600 text-white font-bold"
                          : "bg-blue-600 text-white font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {s.label.split("&")[0].trim()}
                  </button>
                ))}
              </div>
            )}

            {/* ── Screenshots Stack for Active Subsystem ── */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSubsystemId}-${adminViewIndex}`}
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : MOTION_DISTANCES.subtle }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -MOTION_DISTANCES.subtle }}
                transition={{
                  duration: shouldReduceMotion ? MOTION_DURATIONS.instant : MOTION_DURATIONS.normal,
                  ease: MOTION_EASINGS.easeOut,
                }}
                className="flex flex-col gap-4 sm:gap-5"
              >
                {activeSubsystemId === "rider" ? (
                  <>
                    <ScreenshotFrame
                      screenshot={activeSubsystem.screenshots[0]}
                      accentColor={accentColor}
                    />
                    <RiderLogisticsCard />
                  </>
                ) : activeSubsystem.screenshots.length > 2 ? (
                  <>
                    <ScreenshotFrame
                      screenshot={activeSubsystem.screenshots[adminViewIndex]}
                      accentColor={accentColor}
                    />
                    <ScreenshotFrame
                      screenshot={
                        activeSubsystem.screenshots[
                          (adminViewIndex + 1) % activeSubsystem.screenshots.length
                        ]
                      }
                      accentColor={accentColor}
                    />
                  </>
                ) : (
                  activeSubsystem.screenshots.map((shot, idx) => (
                    <ScreenshotFrame
                      key={shot.src}
                      screenshot={shot}
                      priority={index === 0 && idx === 0}
                      accentColor={accentColor}
                    />
                  ))
                )}
              </motion.div>
            </AnimatePresence>

            {/* Footnote */}
            <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-500">
              <span>
                {isTeal ? "Independent Product Initiative" : "University Software Engineering"}
              </span>
              <span className={isTeal ? "text-purple-700 font-medium" : "text-blue-700 font-medium"}>
                {isTeal ? "Full Ownership (3 Portals)" : "Collaborative Group Project"}
              </span>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Project Details & Systems Narrative ── */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-start sm:items-center gap-3.5">
                {project.slug === "chef-apedo-foods" && (
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shrink-0 border border-amber-200/90 bg-white shadow-xs p-1 mt-0.5 sm:mt-0">
                    <Image
                      src="/images/chef_apedo_icon.png"
                      alt="Chef Apedo Foods"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                )}
                {project.slug === "raku-vehicle-rental" && (
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shrink-0 border border-red-200/90 bg-[#d5001c] shadow-xs p-1 flex items-center justify-center mt-0.5 sm:mt-0">
                    <Image
                      src="/images/raku_icon.svg"
                      alt="Raku Vehicle Rental Management System"
                      width={48}
                      height={48}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {project.title}
                  </h3>
                  <p
                    className={`text-sm sm:text-base font-semibold mt-1 ${
                      isTeal ? "text-purple-700" : "text-blue-700"
                    }`}
                  >
                    {project.tagline}
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                {project.contributionSummary}
              </p>

              {/* Architectural Ecosystem Scope Callout */}
              <div className="p-3.5 rounded-2xl glass-card border border-slate-200 bg-slate-50/70 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-purple-700 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    Ecosystem Architecture
                  </span>
                  <span className="text-slate-500 text-[11px]">
                    {isTeal ? "3 Interconnected Roles" : "2 Management Tiers"}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {subsystems.map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActiveSubsystemId(s.id)}
                      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-mono cursor-pointer transition-all ${
                        activeSubsystemId === s.id
                          ? isTeal
                            ? "bg-purple-100 text-purple-700 border border-purple-300 font-semibold"
                            : "bg-blue-100 text-blue-700 border border-blue-300 font-semibold"
                          : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <span className="font-medium">{s.name}</span>
                      <span className="text-[10px] text-slate-500">({s.badge})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Problem & Architecture Callout Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-2xl glass-card border border-slate-200/90 space-y-1 bg-white/90 shadow-2xs">
                  <p
                    className={`text-[11px] font-mono font-semibold uppercase ${
                      isTeal ? "text-purple-700" : "text-blue-700"
                    }`}
                  >
                    Problem Solved
                  </p>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>
                <div className="p-4 rounded-2xl glass-card border border-slate-200/90 space-y-1 bg-white/90 shadow-2xs">
                  <p
                    className={`text-[11px] font-mono font-semibold uppercase ${
                      isTeal ? "text-purple-700" : "text-blue-700"
                    }`}
                  >
                    Architecture Overview
                  </p>
                  <p className="text-xs text-content-secondary leading-relaxed">
                    {project.architectureOverview}
                  </p>
                </div>
              </div>

              {/* Key Contributions List */}
              <div className="space-y-2 pt-2">
                <p className="text-xs font-mono uppercase text-slate-500 tracking-wider font-semibold">
                  {isTeal ? "Key Contributions & System Engineering" : "My Responsibilities in the Team"}
                </p>
                <ul className="space-y-2">
                  {project.individualContributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-content-secondary">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isTeal ? "text-purple-600" : "text-blue-600"
                        }`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack & Action Links */}
            <div className="pt-6 border-t border-slate-200/80 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {[
                  ...(project.techStack.frontend ?? []),
                  ...(project.techStack.backend ?? []),
                  ...(project.techStack.database ?? []),
                  ...(project.techStack.tooling ?? []),
                ].map((t) => (
                  <TechBadge key={t} name={t} />
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                {project.links.live && (
                  <div className="relative inline-flex group/glow">
                    <GlowEffect
                      colors={
                        isTeal
                          ? ["#8b5cf6", "#a78bfa", "#38bdf8", "#6366f1"]
                          : ["#3b82f6", "#60a5fa", "#8b5cf6", "#818cf8"]
                      }
                      mode="colorShift"
                      blur="medium"
                      scale={1.22}
                      duration={4}
                      className="opacity-60 group-hover/glow:opacity-90 group-focus-within/glow:opacity-90 transition-opacity duration-300 rounded-2xl"
                    />
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm transition-all group/btn bg-slate-900 text-white hover:bg-slate-800 shadow-[0_2px_12px_rgba(15,23,42,0.2)] hover:shadow-[0_4px_16px_rgba(124,58,237,0.25)] hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>View Live Demo</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                )}

                {isTeal ? (
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-600" />
                    Independent Platform • Deployed on Vercel
                  </span>
                ) : (
                  <span className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-slate-400" />
                    Private Coursework Repository • Deployed on Vercel
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </Tilt>
  );
}

export function ProjectsSection() {
  const chefApedo = PROJECTS.find((p) => p.slug === "chef-apedo-foods") ?? PROJECTS[0];
  const raku = PROJECTS.find((p) => p.slug === "raku-vehicle-rental") ?? PROJECTS[1];

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full pt-8 sm:pt-10 pb-8 sm:pb-12 scroll-mt-28 relative z-10"
    >
      {/* Anchor for #projects compatibility */}
      <div id="projects" className="sr-only" aria-hidden="true" />

      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-2">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-purple-600">
              FEATURED WORK
            </span>
            <TextEffect
              as="h2"
              per="word"
              preset="fade-in-blur"
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
              segmentWrapperClassName={(segment) =>
                segment.includes("Systems") ? "text-gradient-teal" : undefined
              }
            >
              Selected Projects & Systems
            </TextEffect>
          </div>
          <a
            href="https://github.com/ApedoG17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-700 hover:text-purple-700 transition-colors glass-card px-4 py-2 rounded-full self-start sm:self-auto border-slate-200 hover:border-purple-300 bg-white/80 shadow-2xs group"
          >
            <span>Explore all on GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* ── PROJECT 1: Chef Apedo Foods (Multi-Role Commercial Platform) ── */}
        <ProjectCard project={chefApedo} index={0} accentColor="teal" />

        {/* ── PROJECT 2: Raku Vehicle Rental Management System (Team Coursework) ── */}
        <ProjectCard project={raku} index={1} accentColor="blue" />
      </div>
    </section>
  );
}
