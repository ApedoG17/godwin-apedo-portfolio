"use client";

import * as React from "react";
import {
  Search,
  Layers,
  Code2,
  RefreshCw,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  getStaggerContainerVariants,
  getStaggerItemVariants,
  MOTION_STAGGERS,
  MOTION_DISTANCES,
  MOTION_DURATIONS,
  MOTION_EASINGS,
  MOTION_VIEWPORT,
} from "@/lib/motion";

interface MethodologyStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
}

const METHODOLOGY_STEPS: MethodologyStep[] = [
  {
    step: "01",
    title: "Discovery & Research",
    desc: "I start by understanding the problem, the people experiencing it, and the context in which it occurs. I look beyond surface-level symptoms to investigate root causes, learn from existing solutions, and identify opportunities to make things better.",
    icon: Search,
  },
  {
    step: "02",
    title: "Strategy & Architecture",
    desc: "With a clearer understanding of the problem, I define the proposed solution, break requirements into manageable parts, and plan the system structure. Where appropriate, I map data relationships, establish clear interfaces, and identify the key implementation steps before coding.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Disciplined Implementation",
    desc: "I turn the plan into working software through manageable increments, maintainable code, and clear version-control practices. I consider testing, security, accessibility, and performance throughout development rather than leaving them all until the end.",
    icon: Code2,
  },
  {
    step: "04",
    title: "Iterative Prototyping & Testing",
    desc: "I test what I build, identify weaknesses, and improve the solution through iteration. When a prototype is ready for real users, their feedback helps reveal what works, what needs attention, and what should change next.",
    icon: RefreshCw,
  },
  {
    step: "05",
    title: "Outcome-Driven Evolution",
    desc: "I see launch as the beginning of a product's next stage, not the end of the work. Where feedback and usage data are available, I use them to guide improvements, prioritize meaningful changes, and keep technical decisions connected to the problem the product is meant to solve.",
    icon: TrendingUp,
  },
];

export function WorkingApproachSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = React.useMemo(
    () =>
      getStaggerContainerVariants({
        staggerChildren: MOTION_STAGGERS.default,
        delayChildren: 0.08,
        shouldReduceMotion,
      }),
    [shouldReduceMotion]
  );

  const cardVariants = React.useMemo(
    () =>
      getStaggerItemVariants({
        distance: MOTION_DISTANCES.default,
        duration: MOTION_DURATIONS.moderate,
        shouldReduceMotion,
      }),
    [shouldReduceMotion]
  );

  const fadeInVariants: Variants = React.useMemo(
    () => ({
      hidden: {
        opacity: 0,
        y: shouldReduceMotion ? 0 : MOTION_DISTANCES.default,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion
            ? MOTION_DURATIONS.instant
            : MOTION_DURATIONS.deliberate,
          ease: MOTION_EASINGS.easeOut,
        },
      },
    }),
    [shouldReduceMotion]
  );

  return (
    <section
      id="approach"
      aria-labelledby="working-approach-heading"
      className="w-full pt-6 sm:pt-8 pb-8 sm:pb-12 scroll-mt-28 relative z-10"
    >
      <div className="space-y-10 sm:space-y-12">
        {/* 1. Core Philosophy: The Why */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT.default}
          variants={fadeInVariants}
          className="space-y-4 max-w-4xl"
        >
          <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-purple-600 block">
            ENGINEERING PHILOSOPHY
          </span>
          <h2
            id="working-approach-heading"
            className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
          >
            Outcome-oriented <span className="text-gradient-teal">ownership.</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-content-secondary leading-relaxed max-w-3xl">
            As a Product Engineer at the intersection of software engineering and product building, my approach is rooted in understanding the problem before choosing the solution. I treat every project as a product with real users, combining thoughtful planning, technical execution, and continuous improvement to build solutions that address actual needs. For me, writing code is only part of the process. The goal is to create something useful, reliable, and meaningful to the people who use it.
          </p>
        </motion.div>

        {/* 2. The Execution Framework: The How (5 Steps) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT.default}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-5 sm:gap-6"
        >
          {METHODOLOGY_STEPS.map((step) => {
            const isBottomRow = step.step === "04" || step.step === "05";
            const isStep05 = step.step === "05";
            const colSpanClasses = isStep05
              ? "col-span-1 md:col-span-2 lg:col-span-3 md:max-w-xl md:mx-auto lg:max-w-none w-full"
              : isBottomRow
              ? "col-span-1 md:col-span-1 lg:col-span-3"
              : "col-span-1 md:col-span-1 lg:col-span-2";

            const Icon = step.icon;

            return (
              <motion.div
                key={step.step}
                variants={cardVariants}
                className={`${colSpanClasses} flex flex-col`}
              >
                <div className="glass-panel h-full rounded-3xl p-6 sm:p-7 border border-slate-200/90 hover:border-purple-300 transition-all duration-300 group flex flex-col justify-between space-y-5 bg-white/80 shadow-sm hover:shadow-md">
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl glass-card border border-purple-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs bg-purple-50/70">
                        <Icon className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="font-mono text-xs font-bold text-purple-700 px-2.5 py-1 rounded-full bg-purple-50 border border-purple-200">
                        STEP {step.step}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>Disciplined Engineering</span>
                    <span className="text-purple-700 font-medium">Step {step.step} of 05</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 3. Proof of Execution: Connect Philosophy to Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT.default}
          variants={fadeInVariants}
          className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 bg-white/70 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              The thinking behind the build.
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary leading-relaxed">
              These principles guide how I approach projects, from understanding the problem to building, testing, and refining the solution.
            </p>
          </div>

          <a
            href="#work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold text-slate-800 hover:text-purple-700 transition-all duration-200 glass-card border border-slate-200 hover:border-purple-300 bg-white/90 shadow-2xs group shrink-0"
          >
            <span>Explore Featured Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-purple-600" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
