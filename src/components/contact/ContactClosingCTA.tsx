import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Briefcase, FileText } from "lucide-react";

export function ContactClosingCTA() {
  return (
    <section
      aria-label="Portfolio Navigation and Resume Request"
      className="w-full pb-16 pt-6"
    >
      <div className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-200/90 bg-white/85 shadow-sm">
        <div className="space-y-1.5 text-center sm:text-left">
          <h3 className="font-bold text-base sm:text-lg text-slate-900">
            Looking to explore more of my work?
          </h3>
          <p className="text-xs sm:text-sm text-content-secondary max-w-xl">
            Inspect the flagship Chef Apedo Foods architecture, academic milestones, and engineering practices on the main portfolio.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-800 glass-card border border-slate-200 hover:border-purple-300 hover:text-purple-700 bg-white/80 shadow-2xs transition-all"
          >
            <Briefcase className="w-3.5 h-3.5 text-purple-600" />
            <span>View Projects</span>
          </Link>

          <a
            href="/pdf/Godwin_Apedo_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold text-slate-800 glass-card border border-slate-200 hover:border-purple-300 hover:text-purple-700 bg-white/80 shadow-2xs transition-all"
          >
            <FileText className="w-3.5 h-3.5 text-purple-600" />
            <span>View / Download CV</span>
          </a>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-slate-500 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Return to Top</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
