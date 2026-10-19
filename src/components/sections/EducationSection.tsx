"use client";

import * as React from "react";
import Image from "next/image";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { EDUCATION } from "@/content/education";

// Individual Milestone Card Component
function MilestoneCard({
  entry,
  isCurrent,
}: {
  entry: typeof EDUCATION[0];
  isCurrent: boolean;
}) {
  return (
    <article
      className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between h-full space-y-6 relative overflow-hidden group ${
        isCurrent
          ? "border-purple-300/90 shadow-[0_12px_32px_rgba(124,58,237,0.08)] hover:border-purple-400 bg-white/90"
          : "border-slate-200/90 hover:border-purple-200 shadow-sm bg-white/80"
      }`}
    >
      {/* Subtle background glow on current milestone */}
      {isCurrent && (
        <div
          aria-hidden="true"
          className="absolute -top-16 -right-16 w-52 h-52 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)",
            filter: "blur(32px)",
          }}
        />
      )}

      <div className="space-y-5 relative z-10">
        {/* Header Badges Row */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <div
              className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-bold ${
                isCurrent
                  ? "bg-purple-100 text-purple-700 border border-purple-200 shadow-sm"
                  : "bg-slate-100 text-slate-600 border border-slate-200"
              }`}
            >
              {entry.milestoneNumber}
            </div>
            <span
              className={`font-mono text-[11px] font-bold uppercase tracking-wider ${
                isCurrent ? "text-purple-700" : "text-slate-500"
              }`}
            >
              {isCurrent ? "HIGHER EDUCATION" : "SECONDARY EDUCATION"}
            </span>
          </div>

          {isCurrent ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-amber-50 text-amber-800 border border-amber-200">
              <Sparkles className="w-3 h-3 text-amber-600" />
              Level 200 • In Progress
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200">
              <CheckCircle2 className="w-3 h-3 text-purple-600" />
              Completed
            </span>
          )}
        </div>

        {/* Institution Brand Crest & Programme Details */}
        <div className="flex items-start gap-4">
          {/* Institutional Crest Emblem Frame */}
          {entry.logo && (
            <div
              className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white crest-frame border p-2 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-all duration-300 ${
                isCurrent
                  ? "border-purple-200 shadow-[0_4px_16px_rgba(124,58,237,0.1)] group-hover:border-purple-400"
                  : "border-slate-200 group-hover:border-purple-200"
              }`}
            >
              <Image
                src={entry.logo}
                alt={`${entry.institution} official crest`}
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
          )}

          <div className="space-y-1 min-w-0 flex-1">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
              {entry.institution}
            </h3>
            <p
              className={`text-sm sm:text-base font-semibold ${
                isCurrent ? "text-purple-700" : "text-slate-800"
              }`}
            >
              {entry.degree}
            </p>

            {/* Location & Period Meta */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-1 text-xs font-mono text-slate-500">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-600" />
                {entry.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {entry.location}
              </span>
            </div>
          </div>
        </div>

        {/* Focus Narrative */}
        <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
          {entry.focus}
        </p>

        {/* Electives / Coursework Foundation Tags */}
        <div className="space-y-2 pt-1">
          <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
            {isCurrent ? "Core Coursework & Foundations" : "Main Elective Concentrations"}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {entry.electives?.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200"
              >
                <BookOpen className="w-3 h-3 text-purple-600" />
                {item}
              </span>
            ))}

            {entry.coursework?.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 border border-purple-200/80 font-medium"
              >
                <CheckCircle2 className="w-3 h-3 text-purple-600" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footnote */}
      <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-mono text-slate-500 relative z-10">
        <span>{isCurrent ? "Bachelor of Science" : "Senior High School Certificate"}</span>
        <span className={isCurrent ? "text-purple-700 font-medium" : "text-slate-600"}>
          {isCurrent ? "Software & Systems Focus" : "Pre-University Grounding"}
        </span>
      </div>
    </article>
  );
}

export function EducationSection() {
  const stPeters = EDUCATION[0];
  const uG = EDUCATION[1];

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="w-full pt-6 sm:pt-8 pb-8 sm:pb-12 scroll-mt-28 relative z-10"
    >
      <div className="space-y-8 sm:space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-purple-600">
            ACADEMIC JOURNEY
          </span>
          <h2
            id="education-heading"
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            Education &amp; <span className="text-gradient-teal">Academic Foundations</span>
          </h2>
          <p className="text-sm sm:text-base text-content-secondary max-w-2xl leading-relaxed">
            The academic progression and scientific discipline shaping how I approach software development, technical problem-solving, and practical system design.
          </p>
        </div>

        {/* ── TIMELINE TRACK BAR (Desktop & Mobile Adaptive) ── */}
        <div className="relative px-1 pt-1">
          {/* Horizontal Track Line on sm+ */}
          <div
            className="hidden sm:block absolute left-8 right-8 top-7 h-[2px] bg-gradient-to-r from-purple-200 via-purple-300 to-indigo-400"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 relative z-10">
            {/* Node 1: St. Peter's */}
            <div className="flex items-center gap-3 bg-base w-fit sm:pr-4">
              <div className="w-11 h-11 rounded-full bg-white crest-frame border-2 border-slate-300 p-1.5 flex items-center justify-center shadow-sm shrink-0 overflow-hidden">
                {stPeters.logo ? (
                  <Image
                    src={stPeters.logo}
                    alt="St. Peter's crest"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <span className="font-mono text-xs font-bold text-slate-700">01</span>
                )}
              </div>
              <div className="font-mono text-xs">
                <span className="text-slate-500 block text-[10px] tracking-wider uppercase">Foundation</span>
                <span className="text-slate-800 font-medium">Senior High School</span>
              </div>
            </div>

            {/* Node 2: University of Ghana */}
            <div className="flex items-center justify-between bg-base sm:pl-2">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-white crest-frame border-2 border-purple-500 p-1.5 flex items-center justify-center shadow-[0_0_16px_rgba(124,58,237,0.25)] relative shrink-0 overflow-hidden">
                  <span className="absolute -inset-1 rounded-full border border-purple-300 animate-pulse pointer-events-none" />
                  {uG.logo ? (
                    <Image
                      src={uG.logo}
                      alt="University of Ghana crest"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="font-mono text-xs font-bold text-slate-900">02</span>
                  )}
                </div>
                <div className="font-mono text-xs">
                  <span className="text-purple-600 block text-[10px] tracking-wider uppercase font-semibold">Active Milestone</span>
                  <span className="text-slate-900 font-semibold">Undergraduate Studies</span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-purple-600 pr-2 font-medium">
                <span>Academic Flow</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>

        {/* ── TWO-COLUMN MILESTONE CARDS (Horizontal Progression) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch pt-2">
          {/* Milestone 1: Secondary Education */}
          <MilestoneCard entry={stPeters} isCurrent={false} />

          {/* Milestone 2: Higher Education (Current Milestone) */}
          <MilestoneCard entry={uG} isCurrent={true} />
        </div>
      </div>
    </section>
  );
}
