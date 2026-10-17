"use client";

import * as React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { InView } from "@/components/core/in-view";
import { TextEffect } from "@/components/core/text-effect";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="w-full pt-6 sm:pt-8 pb-8 sm:pb-12 scroll-mt-28 relative z-10"
    >
      <InView
        as="div"
        viewOptions={{ once: true, margin: "0px 0px -120px 0px" }}
        className="glass-panel rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-slate-200/90 relative overflow-hidden"
      >
        {/* Subtle decorative glow in top-right corner */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />

        {/* 2-Column Responsive Layout */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* ── LEFT COLUMN: Eyebrow, Heading, Narrative, Closing Statement (7 cols) ── */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Eyebrow & Section Heading */}
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.2em] text-purple-600">
                ABOUT ME
              </span>
              <TextEffect
                as="h2"
                per="word"
                preset="fade-in-blur"
                delay={0.15}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]"
                segmentWrapperClassName={(segment) =>
                  segment.includes("real") || segment.includes("problems")
                    ? "text-gradient-teal"
                    : undefined
                }
              >
                Building things that solve real problems.
              </TextEffect>
            </div>

            {/* First-person Narrative */}
            <div className="space-y-4 text-sm sm:text-base text-content-secondary leading-relaxed">
              <p>
                I&apos;m a Computer Science student at the{" "}
                <strong className="text-slate-900 font-semibold">
                  University of Ghana, Legon
                </strong>
                , with an interest in building software that goes beyond the
                classroom.
              </p>

              <p>
                I enjoy taking an idea, understanding the problem behind it, and
                working through the process of turning it into something useful.
                My experience spans personal software projects, collaborative
                university development, and exploring how design and technology
                work together.
              </p>

              <p>
                Through projects like{" "}
                <strong className="text-slate-900 font-semibold">CatholicVibes</strong>{" "}
                and my work on the{" "}
                <strong className="text-slate-900 font-semibold">
                  Raku Vehicle Rental Management System
                </strong>
                , I&apos;ve been exploring different sides of software
                development, from building products for users to understanding
                requirements and coordinating work within a team.
              </p>

              <p>
                I&apos;m also building{" "}
                <strong className="text-slate-900 font-semibold">
                  Chef Apedo Foods
                </strong>
                , a food-delivery brand that brings together my interest in
                entrepreneurship, digital products, and creating something of my
                own.
              </p>

              <p>
                Beyond writing code, I&apos;m interested in UI/UX design,
                product thinking, and the details that make software easier to
                understand and use. I&apos;m still learning, experimenting, and
                improving with every project.
              </p>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Three Compact Glass Highlight Cards (5 cols) ── */}
          <div className="lg:col-span-5 flex flex-col gap-4 pt-1">

            {/* Card 1: CatholicVibes */}
            <div className="glass-card rounded-2xl p-5 border border-purple-200/90 hover:border-purple-300 transition-all duration-300 group shadow-sm bg-white/80">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-purple-200/90 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm bg-[#14091f] relative">
                  <Image
                    src="/images/catholic_vibes_icon.png"
                    alt="CatholicVibes"
                    width={72}
                    height={49}
                    className="absolute w-[72px] max-w-none top-[6px] left-1/2 -translate-x-1/2 pointer-events-none"
                    priority
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-purple-600 font-semibold mb-1">
                    Social Platform • Beta Launch
                  </p>
                  <h3 className="font-bold text-base text-slate-900 tracking-tight">
                    CatholicVibes
                  </h3>
                  <p className="text-xs sm:text-sm text-content-secondary mt-1.5 leading-relaxed">
                    A church-focused social platform that I happily joined a group of friends to develop and I&apos;m purposely in the marketing team.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Raku Vehicle Rental Management System */}
            <div className="glass-card rounded-2xl p-5 border border-blue-200/90 hover:border-blue-300 transition-all duration-300 group shadow-sm bg-white/80">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-red-200/90 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm bg-[#d5001c]">
                  <Image
                    src="/images/raku_icon.svg"
                    alt="Raku Vehicle Rental Management System"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold mb-1">
                    Collaborative Software • Product/Client Manager
                  </p>
                  <h3 className="font-bold text-base text-slate-900 tracking-tight">
                    Raku Vehicle Rental Management System
                  </h3>
                  <p className="text-xs sm:text-sm text-content-secondary mt-1.5 leading-relaxed">
                    A collaborative university software project for which I served as Product/Client Manager.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Chef Apedo Foods */}
            <div className="glass-card rounded-2xl p-5 border border-amber-200/90 hover:border-amber-300 transition-all duration-300 group shadow-sm bg-white/80">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl overflow-hidden border border-amber-200/90 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-sm bg-white p-0.5">
                  <Image
                    src="/images/chef_apedo_icon.png"
                    alt="Chef Apedo Foods"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-amber-600 font-semibold mb-1">
                    Food-Delivery Brand • Digital Product
                  </p>
                  <h3 className="font-bold text-base text-slate-900 tracking-tight">
                    Chef Apedo Foods
                  </h3>
                  <p className="text-xs sm:text-sm text-content-secondary mt-1.5 leading-relaxed">
                    My food-delivery brand and digital product initiative.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* ── FULL-WIDTH GUIDING MINDSET CALLOUT (Horizontally Long) ── */}
        <div className="relative z-10 mt-8 sm:mt-10 p-5 sm:p-6 rounded-2xl glass-card border border-purple-200 border-l-4 border-l-purple-600 bg-gradient-to-r from-purple-50 via-purple-50/40 to-white/80 shadow-sm">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-purple-700 font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Guiding Mindset</span>
          </div>
          <blockquote className="text-base sm:text-lg lg:text-xl font-semibold text-slate-900 tracking-tight leading-snug italic">
            &ldquo;Keep learning, build with purpose, and make the things I create useful to someone.&rdquo;
          </blockquote>
        </div>

      </InView>
    </section>
  );
}
