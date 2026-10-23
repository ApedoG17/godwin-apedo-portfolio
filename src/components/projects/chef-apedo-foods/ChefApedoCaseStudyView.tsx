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
  MapPin,
  Utensils,
  ExternalLink,
  Calculator,
  Compass,
  FileCode,
  ShieldAlert,
  Cpu,
  RefreshCw,
  GitFork,
  Check,
  Copy,
  Clock,
  Bike,
  Coins,
  Database,
  Radio,
  TestTube2,
  Terminal,
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
          <FileCode className="w-3.5 h-3.5 text-purple-400" />
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
      <pre className="p-4 sm:p-5 text-xs sm:text-[13px] font-mono leading-relaxed overflow-x-auto text-purple-200/90 scrollbar-thin">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export function ChefApedoCaseStudyView() {
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
          Project 02 of 03
        </span>
      </div>

      {/* ── 1. HERO ── */}
      <header className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 border border-purple-200/90 dark:border-purple-400/30">
              <Sparkles className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              Technical Pilot &bull; Deployed MVP
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-600 dark:text-slate-400 bg-white/70 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/10">
              <Utensils className="w-3.5 h-3.5 text-slate-500" />
              Cloud Kitchen &amp; Campus Logistics OS
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-purple-200/90 dark:border-purple-400/30 bg-white p-2 flex items-center justify-center shadow-md">
              <Image
                src="/images/chef_apedo_icon.png"
                alt="Chef Apedo Foods logo"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                Chef Apedo Foods
              </h1>
              <p className="text-base sm:text-xl font-bold text-purple-700 dark:text-purple-400 mt-1">
                Full-Stack Food Ordering &amp; Delivery Management Platform
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-content-secondary dark:text-slate-300 leading-relaxed max-w-3xl pt-2">
            A vertically integrated food ordering and dispatch operations system engineered for a delivery-only cloud kitchen serving the University of Ghana, Legon campus community.
          </p>
        </div>

        {/* Tech Stack Badges & External Links Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-white/10">
          <div className="flex flex-wrap gap-2">
            {[
              "Next.js 16 (App Router)",
              "React 18",
              "TypeScript",
              "Tailwind CSS",
              "Supabase PostgreSQL",
              "Supabase Realtime",
              "Leaflet Maps",
              "Zod",
              "Vitest (116 Tests)",
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
              href="https://chefapedofoods.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl font-semibold text-xs sm:text-sm bg-slate-900 hover:bg-slate-800 text-white dark:bg-purple-600 dark:hover:bg-purple-500 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Technical Preview</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Screenshot Preview Frame */}
        <div className="relative rounded-3xl overflow-hidden border border-purple-200/90 dark:border-purple-400/25 bg-white dark:bg-slate-900 shadow-xl">
          <div className="px-4 py-3 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-sm flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 text-slate-500 dark:text-slate-400 text-[11px] truncate">
                https://chefapedofoods.vercel.app
              </span>
            </div>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-200">
              Technical Pilot Preview
            </span>
          </div>

          <div className="relative w-full aspect-16/9 min-h-[240px] sm:min-h-[420px] bg-slate-950">
            <Image
              src="/images/chef-apedo-foods.png"
              alt="Chef Apedo Foods Storefront Landing Hero"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-top"
            />
          </div>

          <div className="px-4 py-2.5 bg-slate-50/80 dark:bg-slate-900/80 border-t border-slate-200/80 dark:border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
            <span>Storefront landing interface with mobile-first menu discovery and real-time ordering</span>
            <span className="text-purple-700 dark:text-purple-400 font-semibold">Customer Portal</span>
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
            Technical Pilot / Deployed MVP
          </p>
          <p className="text-xs text-content-secondary dark:text-slate-400">
            Demonstrates architectural viability and operations. Not an active commercial business taking public orders.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            Financial Precision
          </span>
          <p className="font-bold text-sm text-slate-900 dark:text-white">
            Integer Pesewas Accounting
          </p>
          <p className="text-xs text-content-secondary dark:text-slate-400">
            Zero floating-point math across line items, proteins, and delivery fees. 1 GHS = 100 pesewas.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            Kitchen Operations
          </span>
          <p className="font-bold text-sm text-slate-900 dark:text-white">
            Supabase WebSocket KDS
          </p>
          <p className="text-xs text-content-secondary dark:text-slate-400">
            Realtime subscriptions push tickets to kitchen displays instantly without manual polling.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-5 border border-slate-200/90 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            Checkout Reality
          </span>
          <p className="font-bold text-sm text-slate-900 dark:text-white">
            Manual Order Flow (Hubtel Inactive)
          </p>
          <p className="text-xs text-content-secondary dark:text-slate-400">
            Active flow uses manual arrangements; Hubtel gateway integration is present in codebase but currently inactive.
          </p>
        </div>
      </section>

      {/* ── 2. THE IDEA ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            01 &bull; CONCEPT &amp; OPERATIONAL REALITY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Idea: A Cloud Kitchen Built for Campus Logistics
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-sm sm:text-base text-content-secondary dark:text-slate-300 leading-relaxed space-y-4">
          <p>
            <strong>Chef Apedo Foods</strong> was conceived around the operational needs of an independent, delivery-only culinary business serving the University of Ghana, Legon campus. Traditional food aggregators impose prohibitive commission fees (often 20% to 30%) and standard retail e-commerce software assumes conventional street addresses, credit card payments, and postal delivery.
          </p>
          <p>
            On a Ghanaian university campus, food delivery is fundamentally different:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 not-prose">
            <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2.5">
              <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-400 uppercase">
                Hyper-Localized Dropoffs
              </span>
              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
                Orders are bound to specific student residential halls (Evandy, Pentagon, Commonwealth, Volta, Night Market) where street addresses do not exist.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2.5">
              <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-400 uppercase">
                Dual Payment Separation
              </span>
              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
                Food revenue belongs to the kitchen, while delivery fees are collected physically by dispatch riders at the hostel gate.
              </p>
            </div>

            <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2.5">
              <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-400 uppercase">
                High-Volume Kitchen Rushes
              </span>
              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
                Orders arrive in intense lunch and evening bursts, necessitating an auto-updating Kitchen Display System rather than manual phone checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. THE CHALLENGE ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            02 &bull; ENGINEERING CHALLENGES
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Engineering &amp; Architectural Challenges
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 flex items-center justify-center font-mono font-bold text-sm">
              01
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Complex Combinatorial Meal Pricing
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              Ghanaian cuisine involves dynamic combinations: a base rice portion (Regular or Large), an included protein package (e.g. Crispy Chicken, Grilled Tilapia, or Boiled Egg), and optional supplementary proteins. Calculating these combinations on the client risks price manipulation if not strictly validated on the server.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 flex items-center justify-center font-mono font-bold text-sm">
              02
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Unreliable Mobile Network Conditions
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              Students and riders frequently browse under throttled mobile 3G/4G connectivity. If interactive map tile servers (OpenStreetMap/Leaflet) fail to load, the ordering pipeline must degrade gracefully to a pre-cached text landmark selector rather than blocking checkout.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 flex items-center justify-center font-mono font-bold text-sm">
              03
            </div>
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Three-Way State Synchronization
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              A single order moves through distinct stages across three separate personas: the student tracking progress, the kitchen staff advancing tickets, and the dispatch rider confirming physical cash/MoMo collection at the gate.
            </p>
          </div>
        </div>
      </section>

      {/* ── 4. CUSTOMER EXPERIENCE ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            03 &bull; CUSTOMER EXPERIENCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Customer Ordering Workflow
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            From interactive menu selection and protein package customization to landmark delivery and live order tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Menu & Customization Card */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-400">
                A &bull; Deep Item Customization
              </span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                Portion Sizing &amp; Protein Packages
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
                Customers choose base meals (Signature Jollof, Fried Rice, Assorted Waakye) and customize portions. Each option updates running totals in real time on the client before being sent for server-authoritative validation.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 aspect-16/10">
              <Image
                src="/images/chef-apedo-foods-menu.png"
                alt="Chef Apedo Foods Interactive Menu & Customization Interface"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Delivery & Tracking Card */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-400">
                B &bull; Resilient Location &amp; Tracking
              </span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                Map Selection with Landmark Fallbacks
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
                Students can pick delivery dropoffs using an interactive Leaflet map centered on Legon campus or select from pre-seeded landmarks (hostels, lecture halls). If map tiles fail on poor connections, the form gracefully falls back to instant landmark radio buttons.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 space-y-2 text-xs font-mono">
              <span className="text-purple-700 dark:text-purple-400 font-bold">Delivery Pricing &amp; Campus Coverage</span>
              <ul className="space-y-1.5 text-content-secondary dark:text-slate-300">
                <li className="flex justify-between"><span>GPS Tier (0–3.0 km from South Legon Hub)</span><span className="font-bold text-slate-900 dark:text-white">GH₵ 7.00 base</span></li>
                <li className="flex justify-between"><span>Additional Distance (&gt; 3.0 km, up to 15.0 km)</span><span className="font-bold text-slate-900 dark:text-white">+GH₵ 2.00 / km</span></li>
                <li className="flex justify-between"><span>Configurable Regional Zones (East Legon, Osu, Spintex)</span><span className="font-bold text-slate-900 dark:text-white">GH₵ 10 – 20</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. BUSINESS LOGIC ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            04 &bull; CORE BUSINESS LOGIC
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Server-Authoritative Pricing &amp; Pesewa Accounting
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Eliminating client price tampering and JavaScript IEEE 754 floating-point inaccuracies.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-200/80 dark:border-purple-400/20 bg-white/85 dark:bg-slate-900/70 space-y-6">
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
            All currency values throughout the Chef Apedo Foods architecture are calculated and stored exclusively as <strong>integers in Ghanaian Pesewas</strong> (1 GH₵ = 100 pesewas). The client transmits only item IDs, portion selections, and extra protein IDs; the server looks up database records directly and recomputes every line item.
          </p>

          <CodeSnippetBlock
            title="lib/pricing/index.ts — Server-Authoritative Subtotal Calculation"
            code={`// Source: chefapedo/lib/pricing/index.ts
import { MEAL_SIZES, EXTRA_PROTEIN_PESEWAS } from "@/config/business";

type SizeKey = keyof typeof MEAL_SIZES;
type ExtraKey = keyof typeof EXTRA_PROTEIN_PESEWAS;

export function calculateFoodSubtotalPesewas(
  size: SizeKey,
  extras: { chicken?: number; sausage?: number; egg?: number; fish?: number } = {}
): number {
  // 1. Look up authoritative base price from locked business configuration
  let total: number = MEAL_SIZES[size].basePesewas; // small: 4500, medium: 7000, large: 9000

  // 2. Accumulate additional protein add-ons in pure integer pesewas
  (Object.keys(extras) as ExtraKey[]).forEach((key) => {
    const qty = extras[key] ?? 0;
    if (qty > 0) {
      total += EXTRA_PROTEIN_PESEWAS[key] * qty;
    }
  });

  return total; // Always integer pesewas (never float; 1 GH₵ = 100 pesewas)
}`}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono pt-2">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-purple-700 dark:text-purple-400 font-bold">Integer Precision</span>
              <p className="text-content-secondary dark:text-slate-300">
                Guarantees zero fractional pesewa drift across financial calculations and Paystack/Hubtel transactions.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-purple-700 dark:text-purple-400 font-bold">Operating Hours Gate</span>
              <p className="text-content-secondary dark:text-slate-300">
                Window: 6:00 AM – 5:00 PM GMT; same-day cutoff at 10:00 AM (first slot 11:30 AM); ASAP cooking: 8:00 AM – 3:00 PM GMT.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-1">
              <span className="text-purple-700 dark:text-purple-400 font-bold">Order Expiration Engine</span>
              <p className="text-content-secondary dark:text-slate-300">
                Unpaid orders expire after 15 minutes with gateway payment status verification before cancellation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. KITCHEN OPERATIONS ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            05 &bull; KITCHEN &amp; BACKOFFICE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Kitchen Display System (KDS) &amp; Financial Ledger
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Realtime WebSocket order queues, status dispatch, and daily payment channel reconciliation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* KDS Interface Card */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-400">
                Kitchen Display System (/admin)
              </span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                Live Supabase WebSocket Ticket Feed
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
                Kitchen staff monitor orders across active state columns: <em>Awaiting Confirmation</em> &rarr; <em>Preparing</em> &rarr; <em>Ready</em> &rarr; <em>Dispatched</em>. One-tap actions assign available dispatch riders and trigger SMS notifications to students.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 aspect-16/10">
              <Image
                src="/images/chef-apedo-foods-admin-dashboard.png"
                alt="Chef Apedo Foods Kitchen Overview Admin Dashboard with real-time Supabase subscriptions"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Financial Ledger Card */}
          <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-purple-700 dark:text-purple-400">
                Financial Ledger (/admin/finance)
              </span>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                Daily Revenue, MoMo &amp; Courier Fee Audit
              </h3>
              <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
                Tracks daily culinary revenue and isolates delivery fees collected by riders. Provides reconciliation breakdown across Mobile Money (MTN, Telecel, AT) and on-delivery cash settlements.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 aspect-16/10">
              <Image
                src="/images/chef-apedo-foods-admin-finance.png"
                alt="Chef Apedo Foods Financial Ledger auditing food revenue and MoMo splits"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. RIDER EXPERIENCE ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            06 &bull; LOGISTICS DISPATCH
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The Courier Experience (/rider)
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              <Bike className="w-3.5 h-3.5" />
              <span>Dedicated Dispatch View</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Focused Mobile Queue with Cash Collection Gate
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              Dispatch couriers log in using their verified phone number to access an isolated delivery queue. Couriers see only active orders assigned to them, complete with student contact numbers, dropoff landmarks, and directions.
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-content-secondary dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                <span><strong>1-Tap Navigation:</strong> Direct deep-links to Google Maps with landmark destination coordinates.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                <span><strong>Mandatory Payment Gate:</strong> Courier must explicitly confirm collection of the delivery fee before closing out the order.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                <span><strong>Automated Customer Review Trigger:</strong> Marking delivery completed fires an automated SMS inviting the student to submit a 1–5 star dish review.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden border border-purple-200/90 dark:border-purple-400/25 bg-white dark:bg-slate-900 shadow-md aspect-16/10">
              <Image
                src="/images/chef-apedo-foods-rider.png"
                alt="Chef Apedo Foods Kwame Dispatch Courier Logistics Portal"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. TECHNICAL ARCHITECTURE ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            07 &bull; SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Verified Stack &amp; Architectural Pipeline
          </h2>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-purple-700 dark:text-purple-400 font-bold">1. Frontend &amp; State</span>
              <p className="text-content-secondary dark:text-slate-300">
                Next.js 16 (App Router), React 18, TypeScript, Tailwind CSS, Framer Motion transitions.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-purple-700 dark:text-purple-400 font-bold">2. Validation Layer</span>
              <p className="text-content-secondary dark:text-slate-300">
                Zod schemas validate all API payloads (line items, phone numbers, landmark codes).
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-purple-700 dark:text-purple-400 font-bold">3. Database &amp; Realtime</span>
              <p className="text-content-secondary dark:text-slate-300">
                Supabase PostgreSQL with Realtime Channels powering live KDS push updates.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-purple-700 dark:text-purple-400 font-bold">4. External Gateways</span>
              <p className="text-content-secondary dark:text-slate-300">
                Agoo SMS for customer dispatch alerts. Hubtel payment code present but inactive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. DATA MODEL ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            08 &bull; RELATIONAL DATA MODEL
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Database Schema &amp; Migration Structure
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Verified across 6 SQL migrations in <code className="text-[11px]">supabase/migrations/</code> (0001_init through 0006_order_expiry_and_reconciliation).
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200/90 dark:border-white/10 shadow-sm">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-100/90 dark:bg-slate-800/80 border-b border-slate-200 dark:border-white/10 text-slate-900 dark:text-white">
              <tr>
                <th className="p-3.5 font-bold">Table Entity</th>
                <th className="p-3.5 font-bold">Purpose</th>
                <th className="p-3.5 font-bold">Key Columns &amp; Relationships</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-white/10 bg-white/70 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300">
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">orders</td>
                <td className="p-3.5">Core order transaction lifecycle &amp; payment reconciliation</td>
                <td className="p-3.5 text-content-secondary dark:text-slate-400">id, customer_id (FK), address_id (FK), subtotal_pesewas, delivery_fee_pesewas, order_status, payment_status, payment_collected, rider_id (FK), expires_at, created_at</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">order_items</td>
                <td className="p-3.5">Individual meal line items &amp; snapshot packages</td>
                <td className="p-3.5 text-content-secondary dark:text-slate-400">id, order_id (FK), meal_id (FK), size_id (FK), quantity, base_price_pesewas, included_protein_package_name</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">meals &amp; meal_sizes</td>
                <td className="p-3.5">Catalog dishes, portion tiers (Small/Medium/Large) &amp; base tariffs</td>
                <td className="p-3.5 text-content-secondary dark:text-slate-400">meals: id, name, description, available; meal_sizes: id, meal_id (FK), size, base_price_pesewas</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">protein_options &amp; packages</td>
                <td className="p-3.5">Portion-bundled protein options &amp; add-on tariffs</td>
                <td className="p-3.5 text-content-secondary dark:text-slate-400">protein_options: id, name, additional_price_pesewas; protein_packages: id, meal_size_id (FK), name</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">delivery_zones</td>
                <td className="p-3.5">Regional coverage zones &amp; delivery tariffs</td>
                <td className="p-3.5 text-content-secondary dark:text-slate-400">id, name, areas (text[]), fee_pesewas, active</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">riders</td>
                <td className="p-3.5">Campus dispatch couriers</td>
                <td className="p-3.5 text-content-secondary dark:text-slate-400">id, full_name, phone_number, is_active, created_at</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">reviews</td>
                <td className="p-3.5">Post-delivery rating &amp; feedback loop</td>
                <td className="p-3.5 text-content-secondary dark:text-slate-400">id, order_id (FK, unique), rating (1–5), customer_comment, created_at</td>
              </tr>
              <tr>
                <td className="p-3.5 font-bold text-slate-900 dark:text-white">kitchen_settings</td>
                <td className="p-3.5">Atomic daily order capacity &amp; kitchen shift gates</td>
                <td className="p-3.5 text-content-secondary dark:text-slate-400">id, open, daily_capacity (default: 12), orders_today, orders_date</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── 10. TESTING & RELIABILITY ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            09 &bull; QUALITY ASSURANCE
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Testing Suite &amp; Reliability Verification
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 max-w-2xl font-mono">
            Verified execution using Vitest test runner.
          </p>
        </div>

        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-purple-200/80 dark:border-purple-400/20 bg-white/85 dark:bg-slate-900/70 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                  116 Tests Passing Across 19 Test Files (Vitest Runner)
                </h3>
                <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400">
                  Command: npm test (vitest run) &bull; Zero Failures
                </p>
              </div>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10">
              Duration: 7.30s
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-purple-700 dark:text-purple-400 font-bold">Unit Test Suites (10 files &bull; 73 tests)</span>
              <ul className="space-y-1 text-content-secondary dark:text-slate-300">
                <li>&bull; <code className="text-[11px]">landmarks.test.ts</code> (19 tests) &mdash; Campus coordinate fallbacks</li>
                <li>&bull; <code className="text-[11px]">validation.test.ts</code> (9 tests) &mdash; Zod schema input barriers</li>
                <li>&bull; <code className="text-[11px]">operating-hours.test.ts</code> (9 tests) &mdash; Kitchen time shift gates</li>
                <li>&bull; <code className="text-[11px]">delivery.test.ts</code> (7 tests) &mdash; Zone fee algorithms</li>
                <li>&bull; <code className="text-[11px]">pricing.test.ts</code> (6 tests) &mdash; Pesewa rounding integrity</li>
                <li>&bull; <code className="text-[11px]">distance-pricing.test.ts</code> (6 tests) &mdash; Off-campus tariff scaling</li>
                <li>&bull; <code className="text-[11px]">edge-cases.test.ts</code> (6 tests) &mdash; Empty trays &amp; invalid IDs</li>
                <li>&bull; <code className="text-[11px]">expiration.test.ts</code> (5 tests) &mdash; 15-minute order lifecycle</li>
                <li>&bull; <code className="text-[11px]">timing.test.ts</code> (5 tests) &mdash; ETA calculation windows</li>
                <li>&bull; <code className="text-[11px]">logistics-timing.test.ts</code> (3 tests) &mdash; Dispatch delays</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 space-y-2">
              <span className="text-purple-700 dark:text-purple-400 font-bold">API &amp; Integration Suites (9 files &bull; 43 tests)</span>
              <ul className="space-y-1 text-content-secondary dark:text-slate-300">
                <li>&bull; <code className="text-[11px]">webhooks.test.ts</code> (10 tests) &mdash; Hubtel webhook security</li>
                <li>&bull; <code className="text-[11px]">orders.test.ts</code> (5 tests) &mdash; Order creation and persistence</li>
                <li>&bull; <code className="text-[11px]">hubtel.test.ts</code> (5 tests) &mdash; Hosted payment initiation</li>
                <li>&bull; <code className="text-[11px]">promos.test.ts</code> (5 tests) &mdash; Promotional code redemption</li>
                <li>&bull; <code className="text-[11px]">rider.test.ts</code> (4 tests) &mdash; Courier queue filtering</li>
                <li>&bull; <code className="text-[11px]">marketing.test.ts</code> (4 tests) &mdash; SMS blast dispatcher</li>
                <li>&bull; <code className="text-[11px]">feedback.test.ts</code> (4 tests) &mdash; Customer review intake</li>
                <li>&bull; <code className="text-[11px]">manual-orders.test.ts</code> (3 tests) &mdash; Cash-on-delivery endpoint</li>
                <li>&bull; <code className="text-[11px]">golden-path.test.ts</code> (1 test) &mdash; Full checkout integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. CHALLENGES & LESSONS ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            10 &bull; ENGINEERING INSIGHTS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Lessons &amp; Software Engineering Takeaways
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Calculator className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Never Trust Client Pricing</span>
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              In food ordering systems, allowing client applications to pass total prices directly to checkout is an invitation to manipulation. Enforcing server-authoritative calculations where client payloads transmit only references ensures financial integrity.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-3">
            <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Security Audits Before Commercial Scaling</span>
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              Moving from a working prototype to a live commercial platform requires rigorous security review. Code inspections identified areas where administrative authorization, webhook signature validation, and database Row Level Security policies require hardening before handling open financial transactions.
            </p>
          </div>
        </div>
      </section>

      {/* ── 12. CURRENT LIMITATIONS ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            11 &bull; CURRENT STATUS &amp; LIMITATIONS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Current Limitations &amp; Verification Boundaries
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6 border border-amber-200/90 dark:border-amber-400/20 bg-amber-50/40 dark:bg-amber-900/10 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Technical Pilot Classification</span>
            </div>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              Chef Apedo Foods is deployed as an engineering pilot demonstrating end-to-end culinary logistics. It is not currently operating as an active public food venture, and order volume or commercial traction metrics are not claimed.
            </p>
          </div>

          <div className="glass-panel rounded-2xl p-6 border border-amber-200/90 dark:border-amber-400/20 bg-amber-50/40 dark:bg-amber-900/10 space-y-2.5">
            <div className="flex items-center gap-2 text-amber-800 dark:text-amber-300 font-bold text-sm">
              <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Payment &amp; Authorization Hardening Needed</span>
            </div>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-300 leading-relaxed">
              The active checkout uses manual payment arrangements rather than the hosted Hubtel payment gateway. Administrative authorization and rider verification require production hardening prior to open commercial use.
            </p>
          </div>
        </div>
      </section>

      {/* ── 13. FUTURE IMPROVEMENTS ── */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono font-semibold uppercase tracking-[0.2em] text-purple-700 dark:text-purple-400">
            12 &bull; FUTURE WORK
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Planned Architecture Improvements
          </h2>
          <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 font-mono">
            Key steps to advance the pilot into a fully hardened, production-grade cloud kitchen:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2.5">
            <span className="w-7 h-7 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center font-mono font-bold text-xs">
              01
            </span>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Hardened RBAC &amp; RLS Policies
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-300 leading-relaxed">
              Enforce strict role-based access control (RBAC) across administrative endpoints and lock down rider table policies to prevent unauthorized record reading.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2.5">
            <span className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center font-mono font-bold text-xs">
              02
            </span>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Active Payment Webhook Verification
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-300 leading-relaxed">
              Activate automated Mobile Money payment processing with mandatory cryptographic webhook signature verification and idempotent order reconciliation.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-slate-200/90 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 space-y-2.5">
            <span className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center font-mono font-bold text-xs">
              03
            </span>
            <h3 className="font-bold text-sm text-slate-900 dark:text-white">
              Scheduled Background Processing
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-300 leading-relaxed">
              Implement resilient Vercel cron tasks with strict secret verification for automated order expiration, kitchen shift rollover, and daily financial reconciliation.
            </p>
          </div>
        </div>
      </section>

      {/* ── 14. RELATED PROJECTS ── */}
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
              href="https://chefapedofoods.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-purple-700 dark:text-purple-400 hover:underline"
            >
              <span>Technical Preview ↗</span>
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
