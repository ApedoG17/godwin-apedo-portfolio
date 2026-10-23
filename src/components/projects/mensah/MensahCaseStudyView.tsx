"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Code2,
  Layers,
  MapPin,
  MessageSquare,
  ShoppingBag,
  ExternalLink,
  Calculator,
  Compass,
  FileCode,
  ShieldCheck,
  Cpu,
  RefreshCw,
  GitFork,
  Check,
  Copy,
} from "lucide-react";
import { Spotlight } from "@/components/core/spotlight";
import { Tilt } from "@/components/core/tilt";
import {
  MOTION_DURATIONS,
  MOTION_EASINGS,
  MOTION_DISTANCES,
  MOTION_VIEWPORT,
} from "@/lib/motion";

// Helper for copying code snippets
function CodeSnippetBlock({
  code,
  language = "javascript",
  title,
}: {
  code: string;
  language?: string;
  title?: string;
}) {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-slate-950 text-slate-100 shadow-md">
      <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-2 text-slate-400">
          <FileCode className="w-3.5 h-3.5 text-amber-400" />
          <span>{title ?? language}</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Copy code snippet"
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 sm:p-5 text-xs sm:text-[13px] font-mono leading-relaxed overflow-x-auto text-amber-200/90 scrollbar-thin">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function MensahCaseStudyView() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ── BREADCRUMB & BACK LINK ── */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-500 hover:text-purple-600 dark:text-slate-400 dark:hover:text-purple-400 transition-colors group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-md py-1 px-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects Archive</span>
        </Link>

        <span className="text-xs font-mono text-content-muted">
          Project 01 of 03
        </span>
      </div>

      {/* ── A. CASE STUDY HERO ── */}
      <header className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-200/90 dark:border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              Hackathon Prototype &bull; Technical Case Study
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-600 dark:text-slate-400 bg-white/70 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/10">
              <ShoppingBag className="w-3.5 h-3.5 text-slate-500" />
              Luxury E-Commerce &amp; Spatial Logistics
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-amber-200/90 dark:border-amber-400/30 bg-slate-950 p-2 flex items-center justify-center shadow-md">
              <Image
                src="/images/mensah-logo.png"
                alt="MENSAH emblem"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                MENSAH
              </h1>
              <p className="text-base sm:text-xl font-bold text-amber-700 dark:text-amber-400 mt-1">
                Luxury Tailoring &amp; Spatial Logistics Prototype
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-content-secondary dark:text-slate-300 leading-relaxed max-w-3xl pt-2">
            A luxury menswear e-commerce prototype exploring bespoke monogram customization,
            deterministic measurement-based sizing recommendations, Haversine spatial courier matching,
            and conversational WhatsApp order manifests.
          </p>
        </div>

        {/* Tech Stack Badges & External Links Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
          <div className="flex flex-wrap gap-2">
            {["React 19", "Vite 8", "GSAP 3", "Vanilla CSS", "Haversine Math", "WhatsApp API"].map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono px-3 py-1 rounded-lg bg-white/80 dark:bg-white/[0.05] border border-slate-200/90 dark:border-white/10 text-slate-800 dark:text-slate-200 font-medium shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://mensah-lex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-amber-600 dark:hover:bg-amber-500 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Live Prototype</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/ApedoG17/MENSAH-LEX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-medium text-xs sm:text-sm glass-card border-slate-200/90 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>GitHub Repo</span>
            </a>
          </div>
        </div>

        {/* Real Screenshot Preview Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-amber-200/90 dark:border-amber-400/25 bg-white dark:bg-slate-900 shadow-xl">
          <div className="px-4 py-3 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-sm flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-slate-500 dark:text-slate-400 text-[11px] truncate">
                https://mensah-lex.vercel.app
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-200">
              Verified Live Deployment
            </span>
          </div>

          <div className="relative w-full aspect-16/9 min-h-[240px] sm:min-h-[420px] bg-slate-950">
            <Image
              src="/images/mensah-preview.png"
              alt="MENSAH Live Deployment Storefront Preview"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-top"
            />
          </div>

          <div className="px-4 py-2.5 bg-slate-50/80 dark:bg-slate-900/80 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>Production storefront rendering Savile Row structure with West African sartorial silhouettes</span>
            <span className="text-amber-700 dark:text-amber-400 font-semibold">Dual-View Atelier</span>
          </div>
        </div>
      </header>

      {/* ── EXECUTIVE FACTUAL CONTEXT STRIP ── */}
      <section
        aria-label="Implementation Verification Summary"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        <div className="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            Project Classification
          </span>
          <p className="font-bold text-sm text-slate-900 dark:text-white">
            Hackathon Prototype
          </p>
          <p className="text-xs text-content-secondary dark:text-slate-400">
            Engineered independently to demonstrate luxury bespoke e-commerce and algorithmic logistics.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            Virtual Fitting Formula
          </span>
          <p className="font-bold text-sm text-slate-900 dark:text-white">
            Deterministic Arithmetic Mean
          </p>
          <p className="text-xs text-content-secondary dark:text-slate-400">
            Calculated via average of chest, waist, and hips. Not an AI model or machine-learning neural net.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            Courier Logistics
          </span>
          <p className="font-bold text-sm text-slate-900 dark:text-white">
            Haversine Distance (R = 6371km)
          </p>
          <p className="text-xs text-content-secondary dark:text-slate-400">
            Predefined Accra neighborhood coordinates animated on a vector map. Not real-time GPS telemetry.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            Checkout Integration
          </span>
          <p className="font-bold text-sm text-slate-900 dark:text-white">
            WhatsApp Order Manifest
          </p>
          <p className="text-xs text-content-secondary dark:text-slate-400">
            Direct-to-merchant conversational handshake. Not an automated credit card payment gateway.
          </p>
        </div>
      </section>

      {/* ── B. PROJECT OVERVIEW ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            01 &bull; CONCEPT &amp; AUDIENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Project Overview &amp; Spatial Purpose
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base text-content-secondary dark:text-slate-300 leading-relaxed space-y-4">
          <p>
            <strong>MENSAH</strong> is a luxury menswear e-commerce prototype tailored for high-end West African
            sartorial fashion—specifically ceremonial Grand Agbadas, Senator tunics, and modern Italian-cut double-breasted suits.
            Developed during a hackathon sprint, the project explores how digital storefronts can accommodate garments that
            cannot be treated like standard commodity off-the-rack t-shirts.
          </p>
          <p>
            The platform serves discerning clients seeking bespoke garments sewn to individual bodily proportions with
            custom monogramming. It addresses two distinct perspectives:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 not-prose">
            <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>The Client Experience (Atelier &amp; Mall)</span>
              </div>
              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
                Allows clients to explore editorial brand stories without immediate price pressures, transition into a commercial
                boutique, submit measurements through a conversational virtual tailor, customize gold embroidery initials,
                and finalize bespoke commissions via WhatsApp.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
              <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-sm">
                <Compass className="w-4 h-4" />
                <span>The Boutique Operations (Logistics &amp; Admin)</span>
              </div>
              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
                Provides a merchant portal to inspect incoming commission references, publish seasonal lookbook drops, and
                calculate the closest Accra courier using spherical trigonometry to orchestrate last-mile atelier pickups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── C. THE PROBLEM & OBJECTIVES ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            02 &bull; PROBLEM STATEMENT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Product Challenge &amp; Technical Scope
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-mono font-bold text-sm">
              01
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Rigid Off-the-Rack Sizing Paradigms
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              Standard commercial cart platforms force customers into arbitrary S, M, or L classifications. High-value African
              menswear (such as weighted damask Agbadas) requires specific sleeve drops, chest spans, and waist circumferences.
              Off-the-rack selections frequently lead to ill-fitting garments and costly manual alterations.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-mono font-bold text-sm">
              02
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Informal Last-Mile Courier Coordination
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              In metropolitan Accra, delivery addresses frequently reference localized landmarks (e.g. American House,
              Osu Oxford St, Cantonments) rather than formal postal codes. Boutique owners often dispatch motorcycle couriers
              ad-hoc without calculating which dispatch rider is geographically closest to the atelier.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center font-mono font-bold text-sm">
              03
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Bespoke Customization in Checkout
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              Luxury clients require custom monogram embroidery (e.g. gold cuffs) and direct communication with the tailor.
              Standard checkout gateways isolate the customer from the artisan; MENSAH bridges this via structured payload compilation
              into direct WhatsApp conversations.
            </p>
          </div>
        </div>
      </section>

      {/* ── D. THE SOLUTION & SYSTEM ARCHITECTURE ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            03 &bull; SOLUTION ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Integrated Data Flow &amp; Dual-View Engine
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            How client interactions, mathematical calculations, and fallback data structures flow through React 19.
          </p>
        </div>

        {/* Visual Architectural Data Flow Map */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-white/10 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-900 dark:text-white">
              <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>MENSAH End-to-End System Pipeline</span>
            </div>
            <span className="text-[11px] font-mono text-content-muted">
              Source: user_flow_architecture.md
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            {/* Step 1 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 space-y-2">
              <span className="text-amber-700 dark:text-amber-400 font-bold">1. Entry &amp; Catalog</span>
              <p className="text-content-secondary dark:text-slate-300">
                React attempts <code className="text-[11px]">GET /items</code>. If API fails, auto-binds <code className="text-[11px]">FALLBACK_CATALOG</code> (10 pre-seeded garments).
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 space-y-2">
              <span className="text-amber-700 dark:text-amber-400 font-bold">2. Sizing Assistant</span>
              <p className="text-content-secondary dark:text-slate-300">
                User inputs chest, waist, and hips. Runs deterministic arithmetic mean formula and injects size label into order note.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 space-y-2">
              <span className="text-amber-700 dark:text-amber-400 font-bold">3. Checkout Handshake</span>
              <p className="text-content-secondary dark:text-slate-300">
                Sends <code className="text-[11px]">POST /baskets</code> payload. Responds with ID or local reference, compiles WhatsApp deep-link.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200/90 dark:border-white/10 space-y-2">
              <span className="text-amber-700 dark:text-amber-400 font-bold">4. Spatial Dispatch</span>
              <p className="text-content-secondary dark:text-slate-300">
                Admin executes Haversine formula across 3 predefined Accra couriers; GSAP animates vector courier trajectory to Boutique and customer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── E. FEATURE DEEP DIVES ── */}
      <section className="space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            04 &bull; CODE-LEVEL FEATURE DEEP DIVES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Technical Implementation
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Direct examination of the algorithms, equations, and code paths driving the prototype.
          </p>
        </div>

        {/* Feature 1: Deterministic Sizing */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-200/80 dark:border-amber-400/20 bg-white/85 dark:bg-slate-900/70 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  1. Measurement-Based Virtual Fitting
                </h3>
                <p className="text-xs font-mono text-amber-700 dark:text-amber-400">
                  Deterministic Arithmetic Sizing &bull; Not an AI / Neural Model
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
              App.jsx: L524-L560
            </span>
          </div>

          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
            The virtual fitting assistant is an interactive conversational step machine that guides the client through three
            validated anatomical measurement inputs: <strong>chest circumference</strong> (80–130 cm), <strong>natural waist</strong> (40–180 cm),
            and <strong>maximum hip circumference</strong> (50–180 cm). Rather than employing a black-box machine learning model,
            it computes a deterministic arithmetic mean and maps it into discrete tailoring bins.
          </p>

          <CodeSnippetBlock
            title="src/App.jsx — calculateChatbotFitting()"
            code={`// Source: mensah-retail/src/App.jsx (Lines 524-555)
const calculateChatbotFitting = (metrics) => {
  setTimeout(() => {
    // 1. Compute deterministic arithmetic mean of 3 body circumferences
    const averageMetric = (metrics.chest + metrics.waist + metrics.hips) / 3;
    let finalLabel;
    let matchingScore;

    // 2. Discrete classification thresholds
    if (averageMetric < 85) {
      finalLabel = 'Tailored S';
      matchingScore = 92;
    } else if (averageMetric < 98) {
      finalLabel = 'Tailored M';
      matchingScore = 97;
    } else if (averageMetric < 112) {
      finalLabel = 'Bespoke L';
      matchingScore = 94;
    } else {
      finalLabel = 'Sartorial XL';
      matchingScore = 89;
    }

    const scoreTag = \`\${matchingScore}% Silhouette Match\`;
    const sizeTag = \`\${finalLabel} (\${fitPreference.toUpperCase()})\`;

    // 3. Auto-bind coordinates to state for injection into order note
    setChatbotFitScore(scoreTag);
    setChatbotSizeLabel(sizeTag);
    setChatStep(5);
  }, 1000);
};`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-mono pt-2">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <span className="text-slate-500">&lt; 85 cm</span>
              <p className="font-bold text-slate-900 dark:text-white pt-1">Tailored S</p>
              <p className="text-[11px] text-amber-700 dark:text-amber-400">92% Match Score</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <span className="text-slate-500">85 - 97 cm</span>
              <p className="font-bold text-slate-900 dark:text-white pt-1">Tailored M</p>
              <p className="text-[11px] text-amber-700 dark:text-amber-400">97% Match Score</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <span className="text-slate-500">98 - 111 cm</span>
              <p className="font-bold text-slate-900 dark:text-white pt-1">Bespoke L</p>
              <p className="text-[11px] text-amber-700 dark:text-amber-400">94% Match Score</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10">
              <span className="text-slate-500">&ge; 112 cm</span>
              <p className="font-bold text-slate-900 dark:text-white pt-1">Sartorial XL</p>
              <p className="text-[11px] text-amber-700 dark:text-amber-400">89% Match Score</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-900/20 border border-amber-200/90 dark:border-amber-400/20 text-xs text-amber-900 dark:text-amber-200 space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
              <span>Limitations of the Deterministic Calculation</span>
            </p>
            <p className="text-xs leading-relaxed text-amber-800 dark:text-amber-300">
              While predictable and zero-latency, an arithmetic mean averaging chest, waist, and hips does not account
              for shoulder width, athletic drop ratios (e.g. broad chest with a narrow waist), or height. The confidence
              scores (e.g. 97%) are hardcoded UX heuristics rather than empirical statistical probabilities.
            </p>
          </div>
        </div>

        {/* Feature 2: Haversine Courier Proximity */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-200/80 dark:border-blue-400/20 bg-white/85 dark:bg-slate-900/70 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  2. Haversine Spatial Proximity &amp; Animated Route Map
                </h3>
                <p className="text-xs font-mono text-blue-700 dark:text-blue-400">
                  Spherical Trigonometry &bull; Predefined Vector Coordinates &bull; Not Live GPS
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
              App.jsx: L144-L155, L580-L635
            </span>
          </div>

          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
            To coordinate delivery dispatches from the physical atelier in East Legon, the merchant portal implements
            the mathematical <strong>Haversine great-circle distance formula</strong> on a spherical Earth model (R = 6,371 km).
            It evaluates the radial distance between the boutique and three predefined motorcycle courier positions across Accra.
          </p>

          <CodeSnippetBlock
            title="src/App.jsx — haversineDistance() & handleAutoDispatch()"
            code={`// Source: mensah-retail/src/App.jsx (Lines 144-154)
function haversineDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's mean radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // Returns distance in kilometers
}

// Dispatch Matching Loop (Lines 590-605)
let closestCourier = null;
let minDistance = Infinity;

couriers.forEach(courier => {
  const dist = haversineDistance(courier.lat, courier.lng, BOUTIQUE_LAT, BOUTIQUE_LNG);
  if (dist < minDistance) {
    minDistance = dist;
    closestCourier = courier;
  }
});`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-blue-700 dark:text-blue-400 font-bold">Kojo Mall Rider</span>
              <p className="text-slate-500">Lat: 5.6213, Lng: -0.1735</p>
              <p className="text-[11px] text-content-muted">Location: Accra Mall / Tetteh Quarshie</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-blue-700 dark:text-blue-400 font-bold">Yaw Osu Dispatch</span>
              <p className="text-slate-500">Lat: 5.5502, Lng: -0.1901</p>
              <p className="text-[11px] text-content-muted">Location: Osu Oxford Street corridor</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-blue-700 dark:text-blue-400 font-bold">Akosua Cantonments</span>
              <p className="text-slate-500">Lat: 5.5790, Lng: -0.1601</p>
              <p className="text-[11px] text-content-muted">Location: Cantonments embassy zone</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-900/20 border border-blue-200/90 dark:border-blue-400/20 text-xs text-blue-900 dark:text-blue-200 space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>Distinction: Mathematical Simulation vs Live GPS Telemetry</span>
            </p>
            <p className="text-xs leading-relaxed text-blue-800 dark:text-blue-300">
              The courier route is rendered on an SVG vector grid map using GSAP timeline tweens
              (<code className="text-[11px]">duration: 2.2s</code> to the boutique, then <code className="text-[11px]">duration: 3.5s</code> to the destination).
              Courier locations are represented by static mathematical seeds rather than real-time hardware GPS pings or IoT cellular trackers.
            </p>
          </div>
        </div>

        {/* Feature 3: Bespoke Customization & WhatsApp Handshake */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-purple-200/80 dark:border-purple-400/20 bg-white/85 dark:bg-slate-900/70 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  3. Bespoke Customization &amp; WhatsApp Checkout Manifest
                </h3>
                <p className="text-xs font-mono text-purple-700 dark:text-purple-400">
                  Gold Monogramming &bull; Two-Stage Handshake &bull; Conversational Order Settlement
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
              App.jsx: L690-L760, api.js: L45-L68
            </span>
          </div>

          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
            Clients can input personalized <strong>gold embroidery monograms</strong> (e.g. initials <code className="text-[11px]">JM</code>) and custom tailoring notes
            (e.g. sleeve length adjustments). During checkout, the application compiles these inputs into an itemized payload,
            dispatches a <code className="text-[11px]">POST /baskets</code> request to the REST backend, and constructs a URL-encoded
            WhatsApp order manifest.
          </p>

          <CodeSnippetBlock
            title="src/App.jsx — Order Payload & WhatsApp Handshake"
            code={`// Source: mensah-retail/src/App.jsx (Lines 703-755)
const basketPayload = {
  merchant_id: 'mensah',
  team_slug: 'likekodji',
  items: cart.map(i => ({
    id: i.id,
    name: i.name,
    qty: i.qty,
    price_minor: i.price_minor,
    note: i.note // E.g. 'Gold Monogram: "JM". Size: Bespoke M (Tailored)'
  })),
  customerName: checkoutName,
  customerPhone: checkoutPhone,
  customerNote: checkoutNote
};

// Resilient API Handshake with Fallback Reference
let basketId = \`BSK-\${Date.now().toString(36).toUpperCase()}\`;
try {
  const result = await submitBasket(basketPayload);
  if (result && result.id) basketId = result.id;
} catch (apiErr) {
  console.warn('API registration offline; proceeding with local bespoke reference:', apiErr);
}

// Deep-link generation bypassing browser pop-up blockers
const whatsappUrl = \`https://wa.me/\${whatsappMerchantNumber}?text=\${encodeURIComponent(whatsappText)}\`;
window.open(whatsappUrl, '_blank');`}
          />

          <div className="p-4 rounded-xl bg-purple-50/70 dark:bg-purple-900/20 border border-purple-200/90 dark:border-purple-400/20 text-xs text-purple-900 dark:text-purple-200 space-y-1">
            <p className="font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />
              <span>Commercial Boundary: Conversational Intake vs Payment Settlement</span>
            </p>
            <p className="text-xs leading-relaxed text-purple-800 dark:text-purple-300">
              The WhatsApp redirect hands off the structured order to an atelier sales concierge.
              This design aligns with luxury Ghanaian commerce conventions—where high-ticket commissions are finalized
              through personal conversation and bespoke fabric verification—rather than acting as an automated credit card settlement gateway.
            </p>
          </div>
        </div>
      </section>

      {/* ── F. TECHNICAL ARCHITECTURE & RESILIENCE ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            05 &bull; ARCHITECTURE &amp; RESILIENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Stack &amp; Offline Resilience Strategy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Core Application Stack</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-content-secondary dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>React 19 &amp; Vite 8:</strong> ES module architecture with componentized modals and reactive cart drawer state.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>GSAP 3.15:</strong> Drives seamless view crossfades between the Brand Runway and Storefront Mall, message slide-ins, and vector courier paths.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span><strong>1,180+ Lines Vanilla CSS:</strong> Custom design token architecture (<code className="text-[11px]">index.css</code>) ensuring precise dark luxury typography (Playfair Display &amp; Inter) without framework dependencies.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Offline Catalog Fallback Strategy</span>
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              During hackathon testing, external endpoints at <code className="text-[11px]">api-hackathon.codedematrixtech.com</code> were
              observed returning HTTP 404 errors. To prevent broken views, the frontend integrates a pre-seeded
              catalog of 10 bespoke outfits (<code className="text-[11px]">FALLBACK_CATALOG</code>) and lookbook drops (<code className="text-[11px]">FALLBACK_CAMPAIGNS</code>).
            </p>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              When an API request fails, the application catches the network exception, populates local catalog states,
              and displays a non-intrusive alert, ensuring the live demo remains fully navigable.
            </p>
          </div>
        </div>
      </section>

      {/* ── G. ENGINEERING TRADE-OFFS & DECISIONS ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            06 &bull; IMPLEMENTATION DECISIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Technical Decisions &amp; Trade-Offs
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-sm">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-100/90 dark:bg-slate-800/80 border-b border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
              <tr>
                <th className="p-3.5 font-bold">Domain</th>
                <th className="p-3.5 font-bold">Approach Chosen</th>
                <th className="p-3.5 font-bold">Architectural Benefit</th>
                <th className="p-3.5 font-bold">Technical Limitation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-white/10 bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">Virtual Fitting</td>
                <td className="p-3.5">Deterministic 3-point arithmetic mean</td>
                <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Zero latency, zero model hosting costs, 100% predictable</td>
                <td className="p-3.5 text-rose-700 dark:text-rose-400">Does not capture height, posture, or drape variations</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">Spatial Logistics</td>
                <td className="p-3.5">Haversine formula on static coordinates</td>
                <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Self-contained spherical calculation without external map billing</td>
                <td className="p-3.5 text-rose-700 dark:text-rose-400">Simulated demonstration rather than live GPS tracking</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">Catalog Data</td>
                <td className="p-3.5">Hardcoded fallback array on network failure</td>
                <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Guarantees portfolio &amp; demo uptime when API 404s</td>
                <td className="p-3.5 text-rose-700 dark:text-rose-400">Client catalog diverges from backend database changes</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">Checkout Flow</td>
                <td className="p-3.5">Structured WhatsApp URL deep-link</td>
                <td className="p-3.5 text-emerald-700 dark:text-emerald-400">Immediate direct-to-artisan conversational verification</td>
                <td className="p-3.5 text-rose-700 dark:text-rose-400">Lacks automated webhook order reconciliation &amp; settlement</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── H. CHALLENGES & LIMITATIONS ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            07 &bull; HONEST ASSESSMENT
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Challenges &amp; System Limitations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-amber-200/90 dark:border-amber-400/20 bg-amber-50/40 dark:bg-amber-900/10 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>External API Unavailability</span>
            </div>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              The external backend endpoint (<code className="text-[11px]">api-hackathon.codedematrixtech.com</code>) was designed
              for ephemeral hackathon evaluation and has experienced persistent 404 responses. While the frontend fallback
              preserves 100% visual functionality, live lookbook creation and server-side team analytics cannot be permanently synchronized.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-amber-200/90 dark:border-amber-400/20 bg-amber-50/40 dark:bg-amber-900/10 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Absence of Live Telemetry &amp; Gateway Callbacks</span>
            </div>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              The courier dispatch pipeline illustrates geometric proximity matching, but lacks an active GPS driver app
              or real-time WebSockets connection. Similarly, the checkout flow hands off an order manifest to WhatsApp rather
              than executing a verified payment gateway transaction (e.g. Paystack or Mobile Money webhook reconciliation).
            </p>
          </div>
        </div>
      </section>

      {/* ── I. WHAT I WOULD IMPROVE NEXT ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            08 &bull; FUTURE WORK
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Proposed Future Architecture Improvements
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 font-mono">
            Key enhancements identified to elevate the prototype into a production-grade bespoke commerce suite:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2.5">
            <div className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center font-mono font-bold text-xs">
              01
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Multi-Point 3D Body Mesh Fitting
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-300 leading-relaxed">
              Transition from a simple 3-metric average to an anatomical 8-point measurement geometry (shoulder slope,
              sleeve inseam, collar circumference) with a real-time Three.js / WebGL parametric mannequin preview.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
              02
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Real-Time Geolocation Telemetry
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-300 leading-relaxed">
              Replace predefined coordinate seeds with a lightweight mobile courier PWA publishing real-time coordinates
              via Supabase WebSockets or Mapbox GL, tracking live motorcycle movements through traffic.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2.5">
            <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center font-mono font-bold text-xs">
              03
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Hybrid Payment Gateway &amp; Ledger
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-300 leading-relaxed">
              Integrate Paystack Mobile Money (MoMo) webhook callbacks to confirm deposit payments before commission tailoring,
              while retaining the conversational WhatsApp concierge for final fitting appointments.
            </p>
          </div>
        </div>
      </section>

      {/* ── J. LESSONS & REFLECTION ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-amber-700 dark:text-amber-400">
            09 &bull; RETROSPECTIVE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering &amp; Product Reflection
          </h2>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-white/10 bg-white/85 dark:bg-slate-900/60 space-y-4 text-sm sm:text-base text-content-secondary dark:text-slate-300 leading-relaxed">
          <p>
            Building <strong>MENSAH</strong> during a hackathon sprint highlighted the critical boundary between an
            ambitious visual prototype and an operational production system. In luxury e-commerce, user experience
            cannot be separated from cultural and domain context: African bespoke menswear does not fit neatly into
            off-the-shelf Western checkout flows where one clicks &ldquo;Add to Cart&rdquo; on an &ldquo;XL&rdquo; garment and expects immediate shipping.
          </p>
          <p>
            From a software engineering perspective, the most valuable architectural pattern was the <strong>offline fallback catalog</strong>.
            When third-party hackathon APIs collapsed, the application did not fail with empty screens or uncaught exceptions;
            instead, it gracefully degraded to verified local assets. True craft lies not in assuming every API will always respond with HTTP 200,
            but in structuring user interfaces that remain dignified, communicative, and resilient under failure conditions.
          </p>
        </div>
      </section>

      {/* ── K. PROJECT NAVIGATION FOOTER ── */}
      <section
        aria-label="Case Study Navigation"
        className="pt-12 border-t border-slate-200/80 dark:border-white/10 space-y-8"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-4 py-2 rounded-xl glass-card border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://mensah-lex.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-700 dark:text-amber-400 hover:underline"
            >
              <span>Live Prototype ↗</span>
            </a>
            <span className="text-slate-300 dark:text-slate-600">&bull;</span>
            <a
              href="https://github.com/ApedoG17/MENSAH-LEX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <span>GitHub ↗</span>
            </a>
          </div>
        </div>

        {/* Companion Case Studies Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-purple-200/90 dark:border-purple-400/20 bg-white/80 dark:bg-slate-900/60 flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 dark:text-purple-300 font-bold">
                Project 02 &bull; Commercial Platform
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Chef Apedo Foods
              </h4>
              <p className="text-xs text-content-secondary dark:text-slate-400">
                Full-cycle food ordering, real-time kitchen operations &amp; courier dispatch platform.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                &bull; Case Study Available
              </span>
              <Link
                href="/projects/chef-apedo-foods"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-600 hover:text-purple-700 dark:text-purple-400 group"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-blue-200/90 dark:border-blue-400/20 bg-white/80 dark:bg-slate-900/60 flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-300 font-bold">
                Project 03 &bull; Academic Software Engineering
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Raku Vehicle Rental Management System
              </h4>
              <p className="text-xs text-content-secondary dark:text-slate-400">
                Fleet inventory, client reservations &amp; backoffice management engine.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                &bull; Case Study Available
              </span>
              <Link
                href="/projects/raku"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 group"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
