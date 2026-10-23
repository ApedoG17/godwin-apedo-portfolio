import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Sparkles, MessageSquare } from "lucide-react";
import { PROJECTS } from "@/content/projects";
import { ProjectsDirectory } from "@/components/projects/ProjectsDirectory";

export const metadata: Metadata = {
  title: "The Work — Selected Projects & Engineering Systems | Godwin Apedo",
  description:
    "Selected software projects, architectural deep dives, and product designs engineered by Godwin Apedo — spanning luxury digital couture, commercial ordering platforms, and concurrency-controlled fleet management.",
  keywords: [
    "Godwin Apedo",
    "Projects",
    "Software Portfolio",
    "MENSAH",
    "Chef Apedo Foods",
    "Raku Automobiles",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Computer Science",
  ],
  openGraph: {
    title: "The Work — Selected Projects & Systems | Godwin Apedo",
    description:
      "Explore selected software projects, commercial platforms, and technical architecture engineered by Godwin Apedo.",
    type: "website",
    url: "https://godwinapedo.dev/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="relative flex-1 flex flex-col overflow-x-hidden">
      {/* Ambient Multi-Hue Gradient Blobs */}
      <div className="ambient-blob-teal" aria-hidden="true" />
      <div className="ambient-blob-blue" aria-hidden="true" />
      <div className="ambient-blob-violet" aria-hidden="true" />

      {/* Main Content Container */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex flex-col pt-28 sm:pt-32 pb-16 sm:pb-24">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-md py-1 px-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Return to Overview</span>
          </Link>
        </div>

        {/* ── HERO SECTION: THE WORK ── */}
        <header className="space-y-4 pb-8 sm:pb-10 border-b border-slate-200/80 dark:border-white/10 mb-8 sm:mb-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
              <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-[0.25em] text-purple-600 dark:text-purple-400">
                THE WORK
              </span>
            </div>

            {/* Dynamic Project Counter Badge */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>{PROJECTS.length} Selected Projects</span>
            </span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Ideas into <span className="text-gradient-teal">experiences.</span>
            </h1>
            <p className="text-sm sm:text-base text-content-secondary dark:text-slate-300 leading-relaxed max-w-2xl font-sans">
              A curated showcase of software applications, architectural deep dives, and product designs.
              Each project highlights practical problem-solving and hands-on engineering, from bespoke digital couture to real-time operations and concurrency-safe fleet management.
            </p>
          </div>
        </header>

        {/* ── PROJECTS SHOWCASE (Editorial Layout & Perspective Filter) ── */}
        <ProjectsDirectory projects={PROJECTS} />

        {/* ── CLOSING FOOTER NAVIGATION / CONTACT CALLOUT ── */}
        <section
          aria-label="Collaboration Inquiry"
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-200/80 dark:border-white/10"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                Have a project or collaboration in mind?
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-xl">
                I am actively seeking software engineering internships and technical collaborations. Let&apos;s build something exceptional.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-purple-600 dark:hover:bg-purple-500 shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Get in Touch</span>
                <MessageSquare className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
