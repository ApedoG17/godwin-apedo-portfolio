"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Code2,
  Layers,
  Car,
  Key,
  Shield,
  ShieldAlert,
  FileCode,
  Users,
  Copy,
  Check,
  Calendar,
  Lock,
  Database,
  Terminal,
  Activity,
  CheckCheck,
  ExternalLink,
  Info,
  Clock,
  Gauge,
  FileCheck2,
  GitBranch,
  Video,
} from "lucide-react";
import { Spotlight } from "@/components/core/spotlight";
import { Tilt } from "@/components/core/tilt";

function CodeSnippetBlock({
  code,
  language = "typescript",
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
          <FileCode className="w-3.5 h-3.5 text-blue-400" />
          <span>{title ?? language}</span>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
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
      <pre className="p-4 sm:p-5 text-xs sm:text-[13px] font-mono leading-relaxed overflow-x-auto text-blue-200/90 scrollbar-thin">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function RakuCaseStudyView() {
  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ── BREADCRUMB & BACK LINK ── */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md py-1 px-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects Archive</span>
        </Link>

        <span className="text-xs font-mono text-content-muted">
          Project 03 of 04
        </span>
      </div>

      {/* ── 1. HERO ── */}
      <header className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-300 border border-blue-200/90 dark:border-blue-400/30">
              <Users className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              University Engineering Project &bull; DCIT 208
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-600 dark:text-slate-400 bg-white/70 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/10">
              <Car className="w-3.5 h-3.5 text-slate-500" />
              Fleet Inventory &amp; Backoffice Engine
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-blue-200/90 dark:border-blue-400/30 bg-[#d5001c] p-2 flex items-center justify-center shadow-md">
              <Image
                src="/images/raku_icon.svg"
                alt="Raku logo icon"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                Raku Automobiles
              </h1>
              <p className="text-base sm:text-xl font-bold text-blue-700 dark:text-blue-400 mt-1">
                Vehicle Rental Management &amp; Fleet Operations Platform
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-content-secondary dark:text-slate-300 leading-relaxed max-w-3xl pt-2">
            A full-stack fleet inventory, client reservations, and operations management platform engineered for a luxury automobile rental business in Ghana. Built as a collaborative university team project for DCIT 208 Software Engineering at the University of Ghana, featuring PostgreSQL <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">btree_gist</code> exclusion constraints to mathematically prevent double-bookings and an asynchronous Supabase identity bridge.
          </p>
        </div>

        {/* Project Meta Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          <div className="p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-content-muted">My Role</span>
            <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Product/Client Manager &amp; Contributor</p>
          </div>
          <div className="p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-content-muted">Academic Context</span>
            <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">DCIT 208 Software Engineering</p>
          </div>
          <div className="p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-content-muted">Team Structure</span>
            <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">SEG26-08 (7 Team Members)</p>
          </div>
          <div className="p-4 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-content-muted">Real Client</span>
            <p className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white">Raku Automobiles (Eric Asante, CEO)</p>
          </div>
        </div>

        {/* Tech Stack Badges & External Links Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
          <div className="flex flex-wrap gap-2">
            {[
              "React 19",
              "Vite",
              "React Router v7",
              "Express API (Serverless)",
              "PostgreSQL (Supabase)",
              "btree_gist Constraints",
              "Supavisor Pooler",
              "Supabase Auth",
              "Recharts",
              "Node.js Test Runner (11 Tests)",
            ].map((tag) => (
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
              href="https://raku-rentals.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Technical Staging</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/Dept-of-Comp-Sci-University-of-Ghana/dcit208-client-project-2026-team-engineering-repository-seg26-08-activecarrentalss"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl font-medium text-xs sm:text-sm glass-card border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>Repository ↗</span>
            </a>
          </div>
        </div>

        {/* Real Screenshot Preview Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-blue-200/90 dark:border-blue-400/25 bg-white dark:bg-slate-900 shadow-xl">
          <div className="px-4 py-3 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-sm flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-slate-500 dark:text-slate-400 text-[11px] truncate">
                https://raku-rentals.vercel.app
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-200">
              Verified Staging Deployment
            </span>
          </div>

          <div className="relative w-full aspect-16/9 min-h-[240px] sm:min-h-[420px] bg-slate-950">
            <Image
              src="/images/raku-rentals img.png"
              alt="Raku Automobiles vehicle rental discovery portal landing hero"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
              priority
              className="object-cover object-top"
            />
          </div>
        </div>
      </header>

      {/* ── 2. PROJECT OVERVIEW MATRIX ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            01 &bull; EXECUTIVE SUMMARY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Project Overview &amp; Client Context
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-rose-50 dark:bg-rose-900/20 text-rose-600 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              The Client Challenge
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-300 leading-relaxed">
              Operating purely on Instagram and Snapchat (<code className="text-[11px]">@raku.mgr</code>), Raku lacked a central booking registry, causing frequent overlapping reservations and uncoordinated manual pricing.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              The Engineering Solution
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-300 leading-relaxed">
              Engineered a decoupled React 19 frontend with an Express API on Vercel Serverless and PostgreSQL, enforcing physical reservation non-overlap via GiST exclusion constraints at the database tier.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Customer Self-Service
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-300 leading-relaxed">
              Transparent vehicle catalogue browsing across SUVs, luxury sedans, and economy tiers with instant server-calculated rental quotes, Supabase Auth verification, and personal booking history.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center font-bold">
              04
            </div>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Operational Fleet Control
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-300 leading-relaxed">
              Role-gated fleet management backoffice featuring vehicle CRUD, Supabase Storage photo uploads, Recharts analytics, reservation lifecycle state transitions, and vehicle maintenance status tracking.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. THE PROBLEM ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            02 &bull; THE PROBLEM
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Bottlenecks: Operating an Automobile Business Without a Platform
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Direct findings from the initial client discovery interview with CEO Eric Kweku Asante.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-white/10 bg-white/85 dark:bg-slate-900/60 space-y-6 text-sm sm:text-base text-content-secondary dark:text-slate-300 leading-relaxed">
          <p>
            Raku Automobiles operates in the competitive Ghanaian vehicle sales and rental market, supplying economy sedans, executive SUVs, and luxury wedding/event rentals to private individuals and corporate clients. Despite commanding high-value vehicle inventory (including Range Rovers and Honda Accords), the enterprise operated <strong>entirely without a central digital web presence</strong>. Inventory was marketed through social media posts on Instagram and Snapchat (<code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">@raku.mgr</code>), and all customer inquiries, date checks, and bookings were negotiated manually through phone calls and fragmented WhatsApp chats.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1.5">
              <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Double-Booking Collisions on Peak Dates
              </span>
              <p className="text-content-secondary dark:text-slate-400 leading-normal">
                High-demand weekend slots (weddings, executive delegations, regional travel) frequently resulted in staff committing the same vehicle to different clients in parallel WhatsApp conversations. Discovering overlaps at pickup required awkward client cancellations or emergency vehicle swaps.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1.5">
              <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Fragmented Identity Records &amp; Lost History
              </span>
              <p className="text-content-secondary dark:text-slate-400 leading-normal">
                Driver verification documents, phone numbers, and rental receipts were decentralized across staff phones. The business had no ledger to verify customer return histories, track repeat client discounts, or trace past damage incidents.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1.5">
              <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Information Asymmetry &amp; Enquiries Fatigue
              </span>
              <p className="text-content-secondary dark:text-slate-400 leading-normal">
                Prospective customers could not view real-time fleet availability, vehicle specifications, or daily rates without initiating direct messaging. Staff spent hours answering repetitive availability inquiries instead of managing vehicle readiness.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1.5">
              <span className="text-rose-600 dark:text-rose-400 font-bold flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                Operational Blindness on Fleet Utilization
              </span>
              <p className="text-content-secondary dark:text-slate-400 leading-normal">
                Management had no visibility into fleet utilization metrics, maintenance rollover schedules, or overdue returns. Vehicle turnaround maintenance occurred reactively rather than proactively.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. MY ROLE & CONTRIBUTIONS ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            03 &bull; INDIVIDUAL CONTRIBUTION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            My Role: Product/Client Manager &amp; Hands-On Contributor
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Bridging client business requirements with concrete software engineering implementation.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-200/90 dark:border-blue-400/20 bg-white/85 dark:bg-slate-900/60 space-y-8">
          <p className="text-sm sm:text-base text-content-secondary dark:text-slate-300 leading-relaxed">
            In team projects of this scale, engineering success is determined as much by disciplined requirements definition and scope management as by code syntax. As <strong>Product/Client Manager</strong> for team SEG26-08, I held primary responsibility for managing the client relationship with Raku CEO Eric Kweku Asante while actively developing core backend logic, automated test suites, and operational dashboards.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 space-y-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
                01
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Stakeholder Discovery &amp; Client Communication
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Spearheaded the initial discovery call with CEO Eric Kweku Asante, transcribed operational pain points, and maintained weekly progress touchpoints throughout the 4 sprint cycles.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 space-y-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
                02
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Requirements Engineering &amp; MoSCoW Prioritization
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Authored user stories and acceptance criteria. Applied MoSCoW prioritization to isolate Must-Haves (double-booking exclusion constraint, fleet catalogue) from Could-Haves (live MoMo checkout, automated hold timers).
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 space-y-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
                03
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Backend Reservation Creation &amp; Server Pricing
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Engineered the <code className="text-[11px]">POST /api/bookings</code> route handler in Express. Enforced authoritative server-calculated pricing from vehicle daily rates (<code className="text-[11px]">daily_rate * nights</code>), rejecting client-supplied totals.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 space-y-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
                04
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Identity-Bridge Implementation
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Designed and built the <code className="text-[11px]">POST /api/auth/register</code> endpoint to bridge Supabase Auth accounts to PostgreSQL customer records idempotently, extracting verified names and phones from JWT metadata.
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 space-y-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
                05
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Concurrency Conflict &amp; Authorization Testing
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Authored automated tests in Node.js test runner and Supertest verifying SQLSTATE 23P01 conflict trapping (409 Conflict), invalid date ranges (400), and customer-scoped data access gates (401/403).
              </p>
            </div>

            <div className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 space-y-2.5">
              <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
                06
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Client UAT &amp; Final Handoff Pack
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Structured user acceptance test scenarios for the client demo, managed issue remediation, compiled the deployment operations manual, and prepared presentation materials for the final defense.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. SYSTEM ARCHITECTURE ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            04 &bull; ARCHITECTURE &amp; STACK
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Decoupled Multi-Tier System Architecture
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Clean separation of concerns across presentation, serverless routing, and relational data guarantees.
          </p>
        </div>

        {/* Visual Responsive Architecture Diagram */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-blue-200 dark:border-blue-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-blue-700 dark:text-blue-400 font-bold">1. Client Tier</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">SPA</span>
              </div>
              <p className="text-content-secondary dark:text-slate-300">
                React 19, Vite, React Router v7, Tailwind CSS, Framer Motion transitions, and Recharts analytics.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-blue-200 dark:border-blue-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-blue-700 dark:text-blue-400 font-bold">2. API Gateway</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">Express</span>
              </div>
              <p className="text-content-secondary dark:text-slate-300">
                Express 4 on Vercel Serverless Functions. Auth middleware, structured JSON logging, and Resend email alerts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-blue-200 dark:border-blue-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-blue-700 dark:text-blue-400 font-bold">3. Connection Pool</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">Supavisor</span>
              </div>
              <p className="text-content-secondary dark:text-slate-300">
                Supavisor transaction pooler on port 6543 via <code className="text-[11px]">pg</code> pool, preventing connection exhaustion on serverless scale.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-blue-200 dark:border-blue-500/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-blue-700 dark:text-blue-400 font-bold">4. Database Tier</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">Postgres</span>
              </div>
              <p className="text-content-secondary dark:text-slate-300">
                PostgreSQL (Supabase) with <code className="text-[11px]">btree_gist</code> exclusion constraint, Row-Level Security, and Supabase Storage.
              </p>
            </div>
          </div>

          {/* Architecture Decision Records Callouts */}
          <div className="pt-2 border-t border-slate-200/80 dark:border-white/10 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Key Architecture Decision Records (ADRs)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs font-mono">
              <div className="p-3 rounded-xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 space-y-1">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">ADR-001: GiST Exclusion</span>
                <p className="text-content-secondary dark:text-slate-400 text-[11px]">
                  Delegate reservation concurrency completely to PostgreSQL GiST exclusion rather than fragile application-tier checks.
                </p>
              </div>
              <div className="p-3 rounded-xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 space-y-1">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">ADR-002: Identity Bridge</span>
                <p className="text-content-secondary dark:text-slate-400 text-[11px]">
                  Decouple customer profiles from auth accounts via <code className="text-[10px]">user_account</code>, enabling walk-in records and safe signup verification.
                </p>
              </div>
              <div className="p-3 rounded-xl glass-card border border-slate-200/80 dark:border-white/10 bg-white/60 dark:bg-slate-900/40 space-y-1">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">ADR-003: Supavisor Pooling</span>
                <p className="text-content-secondary dark:text-slate-400 text-[11px]">
                  Connect Express serverless invocations through Supavisor port 6543 to eliminate Postgres connection timeouts during bursts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. ENGINEERING DEEP DIVE: DOUBLE BOOKINGS ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            05 &bull; DEEP DIVE: CONCURRENCY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Eliminating Double-Bookings with PostgreSQL GiST Constraints
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Why application-level availability queries fail under concurrency, and how database-tier intervals guarantee mutual exclusion.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-blue-200/90 dark:border-blue-400/20 bg-white/85 dark:bg-slate-900/60 space-y-6 text-sm sm:text-base text-content-secondary dark:text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-rose-500" />
              <span>The Race Condition Flaw in Application-Tier Checks</span>
            </h3>
            <p>
              In conventional booking systems, availability is checked with an application-tier query like <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">SELECT COUNT(*) FROM booking WHERE vehicle_id = X AND dates_overlap</code>, followed by an <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">INSERT</code>. Under simultaneous traffic (two customers reserving the Range Rover for the same weekend), both requests check availability at the exact same millisecond, both read 0 conflicts, and both insert reservations. This classic Time-of-Check to Time-of-Use (TOCTOU) race condition renders application-level validation fundamentally unreliable.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              <span>The Database-Level Solution: btree_gist and Half-Open Intervals</span>
            </h3>
            <p>
              To solve this permanently, we enabled the PostgreSQL <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">btree_gist</code> extension and created an exclusion constraint on the <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">booking</code> table. Rental periods are modeled using <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">tstzrange</code> with half-open <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">[)</code> semantics (inclusive start, exclusive end).
            </p>
            <p>
              Half-open intervals mean an abutting booking ending at 10:00 AM does <em>not</em> overlap with a new booking starting at 10:00 AM on the same day. If any concurrent transaction attempts to insert an overlapping interval for the same vehicle, the PostgreSQL storage engine aborts the insert with error <strong>SQLSTATE 23P01</strong> (<code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">exclusion_violation</code>), which the Express backend cleanly maps to an HTTP 409 Conflict.
            </p>
          </div>

          <CodeSnippetBlock
            title="supabase/migrations/0001_init_schema.sql — Authoritative Exclusion Constraint"
            language="sql"
            code={`-- Enable btree_gist for equality '=' operator on UUID alongside range overlap '&&'
create extension if not exists btree_gist;

-- Booking entity with half-open timestamp range
create table booking (
    booking_id    uuid primary key default gen_random_uuid(),
    customer_id   uuid not null references customer (customer_id) on delete restrict,
    vehicle_id    uuid not null references vehicle (vehicle_id) on delete restrict,
    rental_period tstzrange not null,
    status        text not null check (status in ('Hold', 'Confirmed', 'Active', 'Completed', 'Cancelled')),
    total_amount  numeric(10,2),
    created_at    timestamptz not null default now(),
    constraint booking_period_nonempty check (not isempty(rental_period))
);

-- ADR-001: The authoritative physical non-overlap guarantee.
-- Abutting rentals (end_ts == next start_ts) do NOT collide under '[)' bounds.
-- Cancelled/Completed bookings immediately free the slot via the partial predicate.
alter table booking
    add constraint exclude_vehicle_double_booking
    exclude using gist (
        vehicle_id    with =,
        rental_period with &&
    )
    where (status in ('Confirmed', 'Active', 'Hold'));`}
          />

          <CodeSnippetBlock
            title="backend/api/index.js — Conflict Trapping & HTTP 409 Mapping"
            language="javascript"
            code={`// Source: raku-rentals/backend/api/index.js
try {
  const { rows } = await pool.query(
    \`insert into booking
       (customer_id, vehicle_id, rental_period, status, total_amount)
     values
       ($1, $2, tstzrange($3::timestamptz, $4::timestamptz, '[)'), 'Hold', $5)
     returning booking_id, customer_id, vehicle_id, rental_period, status, total_amount\`,
    [req.customerId, vehicle_id, start_ts, end_ts, total_amount]
  );
  return res.status(201).json(rows[0]);

} catch (err) {
  if (err.code === '23P01') {
    // GiST exclusion constraint (exclude_vehicle_double_booking) triggered
    return res.status(409).json({
      error: 'booking_conflict',
      message: 'This car is already booked for those dates. Please choose different dates.',
    });
  }
  console.error('POST /api/bookings failed:', err.code, err.message);
  return res.status(500).json({ error: 'database_error' });
}`}
          />
        </div>
      </section>

      {/* ── 7. ENGINEERING DEEP DIVE: IDENTITY BRIDGE ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            06 &bull; DEEP DIVE: AUTHENTICATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Asynchronous Supabase Identity Bridge
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Solving the authentication timing gap when email verification delays session issuance.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-white/10 bg-white/85 dark:bg-slate-900/60 space-y-6 text-sm sm:text-base text-content-secondary dark:text-slate-300 leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              The Registration Timing Challenge
            </h3>
            <p>
              Supabase Auth enforces email confirmation before issuing a valid authenticated JWT session. When a prospective customer signs up on the frontend, <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">supabase.auth.signUp()</code> creates an unconfirmed record in <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">auth.users</code>, but no active session is returned. Consequently, the frontend cannot execute an authenticated API call to create a customer profile in the database at signup time.
            </p>
            <p>
              We solved this by retaining customer metadata (<code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">full_name</code> and <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">phone</code>) in the Supabase user metadata payload during signup. Upon email confirmation or first login, the frontend invokes our identity bridge: <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">POST /api/auth/register</code>.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Idempotency, Concurrency &amp; Tamper-Proof Metadata
            </h3>
            <p>
              The backend bridge extracts <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">full_name</code> and <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">phone</code> directly from the cryptographically verified JWT payload, preventing client request spoofing. A database transaction checks whether <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">user_account.supabase_auth_id</code> already exists. If found, it returns the customer ID immediately (idempotent no-op). If new, it creates the <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">customer</code> and <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">user_account</code> link.
            </p>
            <p>
              If a concurrent request races to register, the <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">ON CONFLICT (supabase_auth_id)</code> constraint triggers a rollback of the duplicate customer insert, guaranteeing zero orphan profile records.
            </p>
          </div>

          <CodeSnippetBlock
            title="backend/api/index.js — Idempotent Identity Bridge Handshake"
            language="javascript"
            code={`// Source: raku-rentals/backend/api/index.js
app.post('/api/auth/register', requireAuth, async (req, res) => {
  const uid   = req.authUser.id;
  const email = req.authUser.email;
  // Trust only verified JWT claims — client request body is not trusted
  const meta  = req.authUser.user_metadata || {};
  const fullName = (meta.full_name || '').trim() || 'Unknown';
  const phone    = (meta.phone    || '').trim();

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // 1. Fast path: bridge already exists (idempotent on repeat logins)
    const existing = await client.query(
      'select customer_id from user_account where supabase_auth_id = $1',
      [uid]
    );
    if (existing.rows.length) {
      await client.query('COMMIT');
      return res.status(200).json({ customer_id: existing.rows[0].customer_id, created: false });
    }

    // 2. Slow path: create customer profile then link to user_account
    const cust = await client.query(
      'insert into customer (full_name, phone, email) values ($1, $2, $3) returning customer_id',
      [fullName, phone, email]
    );
    const customerId = cust.rows[0].customer_id;

    const ua = await client.query(
      \`insert into user_account (supabase_auth_id, customer_id, role)
       values ($1, $2, 'Customer')
       on conflict (supabase_auth_id) do nothing
       returning user_account_id\`,
      [uid, customerId]
    );

    if (ua.rows.length === 0) {
      // Concurrent race condition won by another request: roll back customer insert
      await client.query('ROLLBACK');
      const winner = await client.query(
        'select customer_id from user_account where supabase_auth_id = $1',
        [uid]
      );
      return res.status(200).json({ customer_id: winner.rows[0].customer_id, created: false });
    }

    await client.query('COMMIT');
    return res.status(201).json({ customer_id: customerId, created: true });
  } catch (err) {
    await client.query('ROLLBACK');
    return res.status(500).json({ error: 'bridge_failed' });
  } finally {
    client.release();
  }
});`}
          />
        </div>
      </section>

      {/* ── 8. CUSTOMER EXPERIENCE ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            07 &bull; CUSTOMER PORTAL
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Customer Journey &amp; Fleet Booking Experience
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            From vehicle catalog discovery to authenticated reservation tracking.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-white/10 bg-white/85 dark:bg-slate-900/60 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
                01
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Vehicle Discovery &amp; Filters
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Filter fleet inventory by category (SUV, Luxury, Economy, Sedan), daily rate, and seat capacity. Vehicle cards display real-time status badges and high-res photography.
              </p>
            </div>

            <div className="space-y-3">
              <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
                02
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Date Range &amp; Authoritative Quotes
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Customers choose pickup and return timestamps. The backend calculates total nights and costs authoritatively; browsing does not lock a vehicle until the reservation is committed.
              </p>
            </div>

            <div className="space-y-3">
              <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
                03
              </span>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Customer Booking Dashboard
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Authenticated clients track their booking status (<code className="text-[11px]">Hold</code>, <code className="text-[11px]">Confirmed</code>, <code className="text-[11px]">Active</code>, <code className="text-[11px]">Completed</code>) with customer-scoped data access.
              </p>
            </div>
          </div>

          {/* Vehicle Showcase Cards */}
          <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Featured Fleet Inventory Models
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 text-center space-y-2">
                <div className="relative w-full h-28">
                  <Image
                    src="/images/raku/range-rover.png"
                    alt="2019 Land Rover Range Rover"
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-contain"
                  />
                </div>
                <h5 className="font-bold text-xs text-slate-900 dark:text-white">2019 Range Rover</h5>
                <p className="text-[11px] font-mono text-blue-600 dark:text-blue-400">Luxury SUV &bull; GH₵ 1,200/day</p>
              </div>

              <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 text-center space-y-2">
                <div className="relative w-full h-28">
                  <Image
                    src="/images/raku/honda-accord.png"
                    alt="2020 Honda Accord"
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-contain"
                  />
                </div>
                <h5 className="font-bold text-xs text-slate-900 dark:text-white">2020 Honda Accord</h5>
                <p className="text-[11px] font-mono text-blue-600 dark:text-blue-400">Executive Sedan &bull; GH₵ 450/day</p>
              </div>

              <div className="p-4 rounded-2xl glass-card border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 text-center space-y-2">
                <div className="relative w-full h-28">
                  <Image
                    src="/images/raku/honda-civic.png"
                    alt="2019 Honda Civic"
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-contain"
                  />
                </div>
                <h5 className="font-bold text-xs text-slate-900 dark:text-white">2019 Honda Civic</h5>
                <p className="text-[11px] font-mono text-blue-600 dark:text-blue-400">Economy Sedan &bull; GH₵ 350/day</p>
              </div>
            </div>
          </div>

          {/* Wireframes & Flows Visual Preview */}
          <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Customer Wireframes &amp; Booking Architecture
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950 aspect-video">
                <Image
                  src="/images/raku/wireframes-customer.jpg"
                  alt="Customer interface wireframe specification"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 text-white">
                  Customer UI Wireframes
                </span>
              </div>
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-slate-950 aspect-video">
                <Image
                  src="/images/raku/flow-customer-booking.jpg"
                  alt="Customer booking lifecycle and status flow diagram"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-black/70 text-white">
                  Booking Decision Flow Diagram
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. FLEET MANAGEMENT & ANALYTICS ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            08 &bull; FLEET OPERATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Fleet Operations, Management Backoffice &amp; Analytics
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Role-gated administration panel for vehicle inventory, reservation approval queues, and fleet metrics.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-white/10 bg-white/85 dark:bg-slate-900/60 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-blue-200/80 dark:border-blue-400/20 bg-slate-950 aspect-16/10 shadow-md">
                <Image
                  src="/images/raku-rentals-admin-dashboard.png"
                  alt="Raku vehicle rental management dashboard and analytics"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Executive KPI Cards &amp; Recharts Trends
                </h3>
                <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                  Real-time visualization of fleet utilization rate, active bookings count, monthly revenue projections, and category distribution charts powered by Recharts.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="relative rounded-2xl overflow-hidden border border-blue-200/80 dark:border-blue-400/20 bg-slate-950 aspect-16/10 shadow-md">
                <Image
                  src="/images/raku-rentals-admin-fleet.png"
                  alt="Raku fleet manager inventory CRUD and pricing controls"
                  fill
                  sizes="(max-width: 768px) 100vw, 540px"
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                  Fleet Inventory CRUD &amp; Status Toggles
                </h3>
                <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                  Managers create new vehicle profiles, adjust daily rates, upload photos to Supabase Storage, and switch operational statuses between Available, Unavailable, and Maintenance.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-2 text-xs font-mono">
            <span className="text-blue-700 dark:text-blue-400 font-bold">Reservation Approval Lifecycle</span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-center pt-1">
              <span className="p-2 rounded bg-amber-50 dark:bg-amber-900/20 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800">1. Hold (Submitted)</span>
              <span className="p-2 rounded bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800">2. Confirmed (Approved)</span>
              <span className="p-2 rounded bg-emerald-50 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800">3. Active (Handover)</span>
              <span className="p-2 rounded bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">4. Completed (Returned)</span>
              <span className="p-2 rounded bg-rose-50 dark:bg-rose-900/20 text-rose-800 dark:text-rose-200 border border-rose-200 dark:border-rose-800">5. Cancelled (Released)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10. TESTING & SECURITY ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            09 &bull; QUALITY ASSURANCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Automated Testing Suite &amp; Security Validation
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Zero-dependency automated testing running via native Node.js test runner and Supertest.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-blue-200/80 dark:border-blue-400/20 bg-white/85 dark:bg-slate-900/70 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  11 Tests Passing Across 2 Test Suites
                </h3>
                <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
                  Command: npm test (node --test test/bookings.test.js test/auth.test.js) &bull; Zero Failures
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
              Duration: ~8.0s
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-blue-700 dark:text-blue-400 font-bold">Reservation &amp; Conflict Tests (bookings.test.js &bull; 6 tests)</span>
              <ul className="space-y-1 text-content-secondary dark:text-slate-300">
                <li>&bull; <code className="text-[11px]">POST /api/bookings</code> &rarr; 201 with booking_id on happy path</li>
                <li>&bull; <code className="text-[11px]">POST /api/bookings</code> with 23P01 exclusion violation &rarr; 409 booking_conflict</li>
                <li>&bull; <code className="text-[11px]">POST /api/bookings</code> missing end_ts &rarr; 400 missing_fields</li>
                <li>&bull; <code className="text-[11px]">POST /api/bookings</code> end_ts before start_ts &rarr; 400 invalid_period</li>
                <li>&bull; <code className="text-[11px]">POST /api/bookings</code> unexpected database error &rarr; 500 database_error</li>
                <li>&bull; <code className="text-[11px]">GET /api/bookings</code> returns customer-scoped rows (200 OK)</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-blue-700 dark:text-blue-400 font-bold">Authentication &amp; Role Tests (auth.test.js &bull; 5 tests)</span>
              <ul className="space-y-1 text-content-secondary dark:text-slate-300">
                <li>&bull; <code className="text-[11px]">POST /api/bookings</code> without Authorization header &rarr; 401 missing_token</li>
                <li>&bull; <code className="text-[11px]">POST /api/bookings</code> with invalid token &rarr; 401 invalid_token</li>
                <li>&bull; <code className="text-[11px]">POST /api/bookings</code> valid JWT but no customer record &rarr; 403 no_customer_record</li>
                <li>&bull; <code className="text-[11px]">GET /api/manager/stats</code> with non-manager role &rarr; 403 forbidden</li>
                <li>&bull; <code className="text-[11px]">GET /api/manager/stats</code> with no role claim &rarr; 403 forbidden</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1.5 text-xs">
            <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 font-mono">
              <Shield className="w-4 h-4 text-blue-600" />
              Testing Boundary Disclosure
            </span>
            <p className="text-content-secondary dark:text-slate-400 leading-relaxed">
              These automated test suites run in isolation using mocked database queries to verify HTTP status codes, JSON response schemas, and authorization middleware logic without requiring live cloud database access. While functional and security gates were verified under unit conditions, a formal third-party penetration test or statutory Ghana Data Protection Act (Act 843) audit was not conducted.
            </p>
          </div>
        </div>
      </section>

      {/* ── 11. KNOWN LIMITATIONS ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            10 &bull; HONEST EVALUATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Known Limitations &amp; Future Engineering Backlog
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Documenting the boundary between delivered MVP capabilities and deferred features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
          <div className="p-5 rounded-2xl glass-card border border-amber-200/80 dark:border-amber-400/20 bg-white/70 dark:bg-slate-900/40 space-y-2">
            <span className="text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              1. Un-enforced 15-Minute Hold Expiry
            </span>
            <p className="text-content-secondary dark:text-slate-300 leading-relaxed">
              When a customer submits a reservation, it enters status <code className="text-[11px]">Hold</code>. The product specification called for an automated 15-minute expiration timer to release abandoned holds. Because no scheduled background worker (cron) was deployed, abandoned holds remain blocking until a manager manually cancels them.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-amber-200/80 dark:border-amber-400/20 bg-white/70 dark:bg-slate-900/40 space-y-2">
            <span className="text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4" />
              2. Driver Licence &amp; Ghana Card Collection
            </span>
            <p className="text-content-secondary dark:text-slate-300 leading-relaxed">
              The database schema provides columns for <code className="text-[11px]">drivers_license_no</code> and <code className="text-[11px]">ghana_card_no</code> in the <code className="text-[11px]">customer</code> table. However, the customer-facing registration interface does not collect them online; physical driver verification remains handled off-system during vehicle handover.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-amber-200/80 dark:border-amber-400/20 bg-white/70 dark:bg-slate-900/40 space-y-2">
            <span className="text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1.5">
              <Lock className="w-4 h-4" />
              3. Live Mobile Money Payment Integration
            </span>
            <p className="text-content-secondary dark:text-slate-300 leading-relaxed">
              A relational <code className="text-[11px]">payment</code> table and MoMo reference schema were defined in SQL. However, live API integration with a payment gateway (e.g., Paystack or Hubtel) was scoped out of the frontend checkout flow. Rental charges are collected manually upon vehicle pickup.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-amber-200/80 dark:border-amber-400/20 bg-white/70 dark:bg-slate-900/40 space-y-2">
            <span className="text-amber-700 dark:text-amber-400 font-bold flex items-center gap-1.5">
              <Gauge className="w-4 h-4" />
              4. Mobile Manager Usability Constraints
            </span>
            <p className="text-content-secondary dark:text-slate-300 leading-relaxed">
              The manager dashboard was architected for desktop operations. Dense reservations management tables and multi-column Recharts analytics require horizontal scrolling on viewports under 640px, posing usability constraints on mobile devices.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-slate-900/40 space-y-2 md:col-span-2">
            <span className="text-slate-700 dark:text-slate-300 font-bold flex items-center gap-1.5">
              <Database className="w-4 h-4 text-blue-600" />
              5. Database Backup &amp; Disaster Recovery Tier
            </span>
            <p className="text-content-secondary dark:text-slate-400 leading-relaxed">
              The project relies on standard Supabase free-tier daily automated database snapshots. High-availability multi-region replication and automated point-in-time recovery (PITR) were not provisioned under the academic project hosting budget.
            </p>
          </div>
        </div>
      </section>

      {/* ── 12. TEAM COLLABORATION ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            11 &bull; TEAM COLLABORATION
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Engineering Team &bull; SEG26-08
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            A collaborative university engineering group for DCIT 208 Software Engineering at the University of Ghana.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-white/10 bg-white/85 dark:bg-slate-900/60 space-y-6 text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
          <p>
            Delivering Raku Automobiles required coordinated teamwork across 7 students, governed by a formal Team Charter with weekly Tuesday sprint planning, GitHub pull request code reviews, and transparent AI usage disclosures documented in <code className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-1 py-0.5 rounded">AI_USAGE_LOG.md</code>.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-mono pt-2">
            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-blue-200/80 dark:border-blue-400/30 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Godwin Apedo</span>
              <p className="text-blue-700 dark:text-blue-400 text-[11px]">Product/Client Manager &amp; Contributor</p>
              <p className="text-content-muted text-[10px]">Client discovery, booking route, identity bridge, tests</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Lawrence Eklah</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px]">DevOps &amp; Release Lead</p>
              <p className="text-content-muted text-[10px]">Vercel deployments, CI workflow, architecture review</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Edward Junior Amoah</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px]">Documentation &amp; Evidence Lead</p>
              <p className="text-content-muted text-[10px]">Deliverable preparation, user manuals, sprint evidence</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Nana Kwabena Boakye Duah</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px]">Implementation Lead</p>
              <p className="text-content-muted text-[10px]">Frontend page styling, component architecture, UI integration</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Lester Nartey Opata</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px]">Validation &amp; QA Lead</p>
              <p className="text-content-muted text-[10px]">Test plan design, quality gates, feature validation</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white">Philip Kese Boadu</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px]">Architecture &amp; Context Lead</p>
              <p className="text-content-muted text-[10px]">C4 diagrams, system context, ERD modeling</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1 sm:col-span-2 lg:col-span-1">
              <span className="font-bold text-slate-900 dark:text-white">Abdul-Raziq Nyaaba</span>
              <p className="text-slate-600 dark:text-slate-400 text-[11px]">UX &amp; Implementation Lead</p>
              <p className="text-content-muted text-[10px]">User flow diagrams, customer wireframes, UI implementation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 13. OUTCOME & REFLECTION ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            12 &bull; RETROSPECTIVE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Client Acceptance, Demo Walkthrough &amp; Lessons Learned
          </h2>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 dark:border-white/10 bg-white/85 dark:bg-slate-900/60 space-y-6 text-sm sm:text-base text-content-secondary dark:text-slate-300 leading-relaxed">
          <p>
            Delivering Raku Automobiles as a working staging deployment provided invaluable software engineering lessons in client communication, concurrency modeling, and scope discipline:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1.5">
              <span className="text-blue-700 dark:text-blue-400 font-bold">1. Grounding Design in Client Reality</span>
              <p className="text-content-secondary dark:text-slate-400 leading-normal">
                Real clients do not communicate in database schemas; they communicate in operational pain points like lost bookings and chaotic weekend handovers. Engineering begins with listening, distilling constraints, and building software that directly eliminates operational risks.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1.5">
              <span className="text-blue-700 dark:text-blue-400 font-bold">2. Enforcing Invariants at the Database Tier</span>
              <p className="text-content-secondary dark:text-slate-400 leading-normal">
                Relying on application code to prevent concurrency collisions is a trap. Leveraging PostgreSQL storage engine primitives like <code className="text-[11px]">btree_gist</code> exclusion constraints turns critical business rules into mathematical guarantees that cannot be bypassed by race conditions.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1.5">
              <span className="text-blue-700 dark:text-blue-400 font-bold">3. Authentication Lifecycle Awareness</span>
              <p className="text-content-secondary dark:text-slate-400 leading-normal">
                Third-party auth providers like Supabase Auth introduce asynchronous verification flows. Designing an explicit identity bridge taught me how to handle distributed state and preserve user metadata without creating orphan records.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1.5">
              <span className="text-blue-700 dark:text-blue-400 font-bold">4. Scope Discipline &amp; Honest Trade-offs</span>
              <p className="text-content-secondary dark:text-slate-400 leading-normal">
                Academic timelines force hard trade-offs. Shipping a robust core MVP that reliably eliminates double-bookings while openly documenting deferred items (such as the 15-minute hold timer and live payment gateway) is the hallmark of honest software engineering.
              </p>
            </div>
          </div>

          {/* YouTube Video Demo Embed */}
          <div className="pt-4 border-t border-slate-200/80 dark:border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                <Video className="w-4 h-4 text-rose-500" />
                Final Demo Video Walkthrough
              </span>
              <a
                href="https://youtu.be/oCha5WenreA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-blue-600 dark:text-blue-400 hover:underline"
              >
                Watch on YouTube ↗
              </a>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-200 dark:border-white/10 shadow-md">
              <iframe
                src="https://www.youtube-nocookie.com/embed/oCha5WenreA"
                title="Raku Automobiles DCIT 208 Final Demo Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 14. RELATED PROJECTS NAVIGATION ── */}
      <section
        aria-label="Case Study Navigation"
        className="pt-12 border-t border-slate-200/80 dark:border-white/10 space-y-8"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold px-4 py-2 rounded-xl glass-card border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="https://raku-rentals.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-700 dark:text-blue-400 hover:underline"
            >
              <span>Technical Staging ↗</span>
            </a>
            <span className="text-slate-300 dark:text-slate-600">&bull;</span>
            <a
              href="https://github.com/Dept-of-Comp-Sci-University-of-Ghana/dcit208-client-project-2026-team-engineering-repository-seg26-08-activecarrentalss"
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
          <div className="glass-panel rounded-2xl p-6 border border-amber-200/90 dark:border-amber-400/20 bg-white/80 dark:bg-slate-900/60 flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-300 font-bold">
                Project 01 &bull; Luxury E-Commerce &amp; Spatial Logistics
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                MENSAH
              </h4>
              <p className="text-xs text-content-secondary dark:text-slate-400">
                Luxury tailoring, deterministic virtual sizing &amp; Haversine courier dispatch prototype.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                &bull; Case Study Available
              </span>
              <Link
                href="/projects/mensah"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400 group"
              >
                <span>Read Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

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
                Project 04 &bull; Nonprofit Platform &amp; Health Hub
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Davcie Foundation
              </h4>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Paediatric diabetes health education, emblem motion physics &amp; authenticated admin portal.
              </p>
            </div>
            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                &bull; Case Study Available
              </span>
              <Link
                href="/projects/davcie-foundation"
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
