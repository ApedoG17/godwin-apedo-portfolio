"use client";

import * as React from "react";
import {
  Compass,
  Layers,
  GitBranch,
  ShieldCheck,
} from "lucide-react";
import { AnimatedGroup } from "@/components/core/animated-group";

const METHODOLOGY_STEPS = [
  {
    step: "01",
    title: "Problem-First Discovery",
    desc: "Before writing code, I analyze the real operational bottleneck or user workflow. Software exists to solve human and organizational problems, not merely to showcase syntax.",
    icon: <Compass className="w-5 h-5 text-purple-600" />,
  },
  {
    step: "02",
    title: "Schema & Architecture Design",
    desc: "I establish structured relational models, typed data contracts, and component hierarchies early. Planning state and schemas upfront prevents brittle refactoring.",
    icon: <Layers className="w-5 h-5 text-blue-600" />,
  },
  {
    step: "03",
    title: "Accessible, Mobile-First Delivery",
    desc: "Building with Next.js and Tailwind CSS with strict attention to mobile ergonomics, semantic HTML, and high-contrast accessibility across various devices.",
    icon: <ShieldCheck className="w-5 h-5 text-amber-600" />,
  },
  {
    step: "04",
    title: "Disciplined Git & Code Hygiene",
    desc: "Clean commit histories, modular file organization, and structured pull requests. Whether working solo or in coursework teams, maintainability is paramount.",
    icon: <GitBranch className="w-5 h-5 text-indigo-600" />,
  },
];

export function WorkingApproachSection() {
  return (
    <section
      id="approach"
      aria-labelledby="working-approach-heading"
      className="w-full pt-6 sm:pt-8 pb-8 sm:pb-12 scroll-mt-28 relative z-10"
    >
      <div className="space-y-10">
        {/* Section Header */}
        <div className="space-y-2">
          <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-purple-600">
            ENGINEERING METHODOLOGY
          </span>
          <h2
            id="working-approach-heading"
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            How I Build: <span className="text-gradient-teal">From Concept to Tested Solution</span>
          </h2>
          <p className="text-sm sm:text-base text-content-secondary max-w-2xl">
            A disciplined, problem-driven approach informed by computer science rigor and real-world system delivery.
          </p>
        </div>

        {/* 4-Step Methodology Grid */}
        <AnimatedGroup
          preset="slide"
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6"
          childClassName="h-full"
        >
          {METHODOLOGY_STEPS.map((step) => (
            <div
              key={step.step}
              className="glass-panel h-full rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-purple-300 transition-all duration-300 group flex flex-col justify-between space-y-4 bg-white/80 shadow-sm"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl glass-card border border-purple-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs bg-purple-50/70">
                    {step.icon}
                  </div>
                  <span className="font-mono text-xs font-bold text-purple-700 px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200 font-semibold">
                    PHASE {step.step}
                  </span>
                </div>

                <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Disciplined Engineering</span>
                <span className="text-purple-700 font-medium">Step {step.step} of 04</span>
              </div>
            </div>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
