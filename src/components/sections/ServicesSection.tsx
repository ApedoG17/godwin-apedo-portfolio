"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Spotlight } from "@/components/core/spotlight";
import {
  MOTION_DURATIONS,
  MOTION_DISTANCES,
  MOTION_STAGGERS,
  MOTION_VIEWPORT,
  getStaggerContainerVariants,
  getStaggerItemVariants,
} from "@/lib/motion";
import { TextEffect } from "@/components/core/text-effect";

interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tools: string[];
  iconSrc: string;
  accentColor: string;
  borderColor: string;
  bgColor: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "web-dev",
    title: "Web & Software Development",
    subtitle: "Web Applications & Interfaces",
    description:
      "Building responsive web applications and digital products with technologies such as Next.js, React, TypeScript, and Tailwind CSS. Exploring practical ways to turn ideas into functional digital experiences.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    iconSrc: "/images/W&SD-icon.png",
    accentColor: "#7c3aed",
    borderColor: "rgba(124, 58, 237, 0.25)",
    bgColor: "rgba(124, 58, 237, 0.08)",
  },
  {
    id: "ui-ux",
    title: "UI/UX & Interface Design",
    subtitle: "Visual Design & User Experience",
    description:
      "Exploring interface design through Figma, with attention to typography, spacing, visual hierarchy, and user flows. My work includes recreating and refining web and mobile interface designs.",
    tools: ["Figma", "UI Design", "UX", "Design Systems"],
    iconSrc: "/images/U&ID-icon.png",
    accentColor: "#d97706",
    borderColor: "rgba(217, 119, 6, 0.25)",
    bgColor: "rgba(217, 119, 6, 0.08)",
  },
  {
    id: "product-thinking",
    title: "Product Thinking & Software Design",
    subtitle: "Requirements & Product Planning",
    description:
      "Thinking beyond the code by breaking ideas into requirements, user stories, and practical development tasks. Through the Raku Vehicle Rental Management System group project, I have worked on product and client management responsibilities.",
    tools: ["User Stories", "Requirements", "Product Planning", "Git"],
    iconSrc: "/images/PT&SD-icon.png",
    accentColor: "#2563eb",
    borderColor: "rgba(37, 99, 235, 0.25)",
    bgColor: "rgba(37, 99, 235, 0.08)",
  },
  {
    id: "data-ops",
    title: "Data & IT Operations",
    subtitle: "Data, Records & Systems",
    description:
      "My IT attachment at Ghana Civil Aviation Authority involved document digitization, data entry, archival organization, and IT support. I am also continuing to develop my interest in SQL and data analytics.",
    tools: ["SQL", "Data Handling", "IT Support", "Digital Records"],
    iconSrc: "/images/Data & IT Operations-icon.png",
    accentColor: "#9333ea",
    borderColor: "rgba(147, 51, 234, 0.25)",
    bgColor: "rgba(147, 51, 234, 0.08)",
  },
];

export function ServicesSection() {
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
      id="services"
      aria-labelledby="services-heading"
      className="w-full pt-6 sm:pt-8 pb-8 sm:pb-12 scroll-mt-28 relative z-10"
    >
      <div className="space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <TextEffect
              as="h2"
              per="word"
              preset="fade-in-blur"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
              segmentWrapperClassName={(segment) =>
                segment.includes("Do") ? "text-gradient-teal" : undefined
              }
            >
              What I Do
            </TextEffect>
          </div>
          <p className="text-xs sm:text-sm text-content-secondary max-w-md font-mono leading-relaxed">
            The things I build, the problems I explore, and the skills I&apos;m developing.
          </p>
        </div>

        {/* 2 × 2 Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={MOTION_VIEWPORT.default}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="glass-card rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between group hover:border-purple-300 transition-all duration-300 relative overflow-hidden bg-white/80 border border-slate-200/90 shadow-sm"
            >
              {/* Motion Primitives Spotlight (cursor-tracking ambient glow adapted for light palette) */}
              <Spotlight
                className="from-purple-500/12 via-indigo-500/5 to-transparent blur-2xl"
                size={280}
              />

              {/* Subtle top accent ambient glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-20 group-hover:opacity-35 transition-opacity"
                style={{
                  background: `radial-gradient(circle, ${service.accentColor} 0%, transparent 70%)`,
                  filter: "blur(24px)",
                }}
                aria-hidden="true"
              />

              <div className="space-y-5 relative z-10">
                {/* Custom Icon Box */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden bg-white border border-slate-200/90 shadow-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105 p-1"
                  aria-hidden="true"
                >
                  <Image
                    src={service.iconSrc}
                    alt={`${service.title} icon`}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain rounded-xl"
                  />
                </div>

                {/* Titles */}
                <div>
                  <p
                    className="text-[11px] sm:text-xs font-mono uppercase tracking-wider font-semibold mb-1"
                    style={{ color: service.accentColor }}
                  >
                    {service.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight group-hover:text-purple-700 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-content-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tools chips */}
              <div className="pt-6 mt-6 border-t border-slate-200/70 flex flex-wrap gap-2 relative z-10">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100/80 text-slate-700 border border-slate-200/80 group-hover:border-purple-200 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
