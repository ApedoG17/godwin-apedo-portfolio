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
  Heart,
  CheckCircle2,
  AlertTriangle,
  Code2,
  Layers,
  ShieldCheck,
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
  Volume2,
  Gamepad2,
  HelpCircle,
  CreditCard,
  Download,
  Eye,
} from "lucide-react";
import { Spotlight } from "@/components/core/spotlight";
import { Tilt } from "@/components/core/tilt";
import {
  MOTION_DURATIONS,
  MOTION_EASINGS,
  MOTION_DISTANCES,
  MOTION_VIEWPORT,
} from "@/lib/motion";

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

export function DavcieCaseStudyView() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* BREADCRUMB & BACK LINK */}
      <div className="flex items-center justify-between gap-4">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md py-1 px-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
          <span>Back to Projects Archive</span>
        </Link>

        <span className="text-xs font-mono text-content-muted">
          Project 04 of 04
        </span>
      </div>

      {/* 1. HERO SECTION */}
      <header className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-300 border border-blue-200/90 dark:border-blue-400/30">
              <Heart className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              Nonprofit Client Collaboration &bull; Technical Case Study
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-slate-600 dark:text-slate-400 bg-white/70 dark:bg-white/[0.05] border border-slate-200/80 dark:border-white/10">
              <Activity className="w-3.5 h-3.5 text-slate-500" />
              Paediatric Health &amp; Interactive Education Hub
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shrink-0 border border-blue-200/90 dark:border-blue-400/30 bg-[#fdfaf0] p-2 flex items-center justify-center shadow-md">
              <Image
                src="/images/davcie/davcie-emblem.png"
                alt="Davcie Foundation emblem"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.08]">
                Davcie Foundation
              </h1>
              <p className="text-base sm:text-xl font-bold text-blue-700 dark:text-blue-400 mt-1">
                Nonprofit Platform &amp; Paediatric Diabetes Health Hub
              </p>
            </div>
          </div>

          <p className="text-base sm:text-lg text-content-secondary dark:text-slate-300 leading-relaxed max-w-3xl pt-2">
            A modern, accessible non-profit web platform supporting children and teenagers living with
            diabetes across West Africa. Engineered with Next.js 16, Supabase, Tailwind CSS v4, and
            Paystack integration, pairing gamified health literacy experiences with an authenticated
            administrative management portal.
          </p>
        </div>

        {/* Quick Project Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 sm:p-6 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 text-xs font-mono">
          <div className="space-y-1">
            <span className="text-slate-600 dark:text-slate-400 block font-semibold">My Role</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold block">
              Full-Stack Developer
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Frontend, Education, Supabase &amp; Admin
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-slate-600 dark:text-slate-400 block font-semibold">Collaboration</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold block">
              Tech Lead Colleague
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Authored Foundation About Page
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-slate-600 dark:text-slate-400 block font-semibold">Core Stack</span>
            <span className="text-slate-800 dark:text-slate-200 font-bold block">
              Next.js 16 &bull; Supabase
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Tailwind v4 &bull; Framer Motion
            </span>
          </div>
          <div className="space-y-1">
            <span className="text-slate-600 dark:text-slate-400 block font-semibold">Project Status</span>
            <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Pre-Launch Preview
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Awaiting Medical Review
            </span>
          </div>
        </div>

        {/* Primary Interface Chrome Preview */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-blue-200/90 dark:border-blue-400/20 bg-slate-950 shadow-xl">
          <div className="px-4 py-3 bg-slate-900 border-b border-white/10 flex items-center justify-between gap-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-slate-300 font-semibold truncate">
                davciefoundation.org &bull; Preview Build
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/ApedoG17/davcie-foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
              >
                <span>Source Code</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="relative aspect-[16/9] w-full bg-[#fdfaf0] flex items-center justify-center overflow-hidden">
            <Image
              src="/images/davcie/davcie-logo.jpg"
              alt="Davcie Foundation official brand identity and mission"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="px-4 py-2.5 bg-slate-900/90 border-t border-white/10 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400">
            <span className="text-slate-300">
              Davcie Foundation &bull; Empowering Young Lives Beyond Diabetes
            </span>
            <span className="text-blue-400 font-semibold">
              Verified Staging Implementation
            </span>
          </div>
        </div>
      </header>

      {/* 2. PROJECT OVERVIEW & THE PAEDIATRIC CHALLENGE */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Heart className="w-4 h-4" />
            <span>01 &bull; The Mission</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Demystifying Paediatric Diabetes in West Africa
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-content-secondary dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            Davcie Foundation is a non-profit initiative dedicated to supporting children and teenagers living
            with diabetes and their families. Across Ghana and West Africa, a diagnosis of diabetes in young
            people is frequently accompanied by profound societal stigma, isolation, and widespread misinformation.
            Myths such as diabetes being caused solely by excessive sugar intake or being contagious can lead to
            delayed clinical presentation, anxiety, and school disruptions.
          </p>
          <p>
            The platform was created to provide a warm, encouraging, and authoritative digital presence.
            Instead of presenting intimidating clinical manuals, the objective was to craft an approachable
            space where children, parents, and educators can build accurate health awareness through interactive
            discovery, volunteer for outreach programmes, and access vital support.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          <div className="p-5 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-2">
            <span className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-xs">
              01
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Education</h3>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              Dispel persistent misconceptions through gamified myth-busting cards and interactive quizzes.
            </p>
          </div>
          <div className="p-5 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-2">
            <span className="w-8 h-8 rounded-xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-xs">
              02
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Support</h3>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              Connect newly diagnosed families with community networks, shared stories, and peer encouragement.
            </p>
          </div>
          <div className="p-5 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-2">
            <span className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs">
              03
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Advocacy</h3>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              Raise institutional awareness across schools, health centres, and youth sporting programmes.
            </p>
          </div>
          <div className="p-5 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-2">
            <span className="w-8 h-8 rounded-xl bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
              04
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">Empowerment</h3>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              Equip young individuals with the confidence and tools to thrive beyond a chronic diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* 3. DESIGN DIRECTION & ACCESSIBILITY TOKENS */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Sparkles className="w-4 h-4" />
            <span>02 &bull; Visual Direction</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Warmth, Dignity, and Contrast-Engineered Design
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-content-secondary dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            When designing health platforms for children and families, visual atmosphere directly impacts
            emotional safety. Harsh clinical whites, stark reds, and cold sterile layouts were rejected in
            favour of a comforting, organic palette rooted in warm cream (<code className="text-xs font-mono">#fdfaf0</code>),
            stately navy (<code className="text-xs font-mono">#14307a</code>), and hopeful gold (<code className="text-xs font-mono">#e8b423</code>).
          </p>
          <p>
            I drew limited structural inspiration from <span className="font-semibold text-slate-800 dark:text-slate-200">meeafoundation.org</span>,
            specifically its arrangement of information, floating pill navigation bar, and rounded card containers.
            However, the visual direction, color system, typography pairings, and code architecture were entirely
            my own creation, tailored specifically to Davcie Foundation&apos;s mission.
          </p>
        </div>

        {/* Brand Token Architecture Table */}
        <div className="rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/10 glass-panel">
          <div className="px-5 py-3 bg-slate-100/80 dark:bg-slate-800/80 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
            <span>Theme Token</span>
            <span>Hex Code</span>
            <span>Contrast &amp; Application Role</span>
          </div>
          <div className="divide-y divide-slate-200/70 dark:divide-white/5 text-xs font-mono">
            <div className="p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#14307a] border border-black/10 shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white">navy</span>
              </div>
              <span className="text-slate-500">#14307a</span>
              <span className="text-slate-600 dark:text-slate-400 text-right">
                Primary headings, dark cards, footer, authoritative anchors
              </span>
            </div>
            <div className="p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#2f7fd0] border border-black/10 shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white">azure</span>
              </div>
              <span className="text-slate-500">#2f7fd0</span>
              <span className="text-slate-600 dark:text-slate-400 text-right">
                Surface glows, badges, icon backdrops (decorative only)
              </span>
            </div>
            <div className="p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#2566ad] border border-black/10 shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white">azure-text</span>
              </div>
              <span className="text-slate-500">#2566ad</span>
              <span className="text-emerald-600 dark:text-emerald-400 text-right font-semibold">
                WCAG AA compliant (4.5:1 ratio) for small blue text
              </span>
            </div>
            <div className="p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#e8b423] border border-black/10 shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white">gold</span>
              </div>
              <span className="text-slate-500">#e8b423</span>
              <span className="text-slate-600 dark:text-slate-400 text-right">
                Action triggers, celebration stars, active interactive states
              </span>
            </div>
            <div className="p-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-[#fdfaf0] border border-slate-300 shrink-0" />
                <span className="font-bold text-slate-900 dark:text-white">cream</span>
              </div>
              <span className="text-slate-500">#fdfaf0</span>
              <span className="text-slate-600 dark:text-slate-400 text-right">
                Warm page canvas, inviting alternative to sterile hospital white
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-500/20 text-xs text-blue-900 dark:text-blue-300 font-mono space-y-1">
          <span className="font-bold block">Accessibility Rigour:</span>
          <p>
            Standard azure (<code className="text-[11px]">#2f7fd0</code>) failed WCAG AA text contrast on cream
            backgrounds at small font sizes. I engineered the dedicated <code className="text-[11px]">azure-text</code> (<code className="text-[11px]">#2566ad</code>)
            design token, ensuring readable contrast across all mobile viewports while preserving the visual identity.
          </p>
        </div>
      </section>

      {/* 4. THE 14-PIECE EMBLEM REASSEMBLY */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Layers className="w-4 h-4" />
            <span>03 &bull; Motion Physics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            14-Piece Emblem Reassembly &amp; Web Speech Narration
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-content-secondary dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            To introduce visitors to the foundation&apos;s core philosophy of restoration and community, I designed
            an opening animation experience. The foundation&apos;s circular emblem enters the screen divided into
            fourteen distinct vector puzzle fragments scattered around the viewport.
          </p>
          <p>
            Using polar coordinates and trigonometric scattering mathematics, each piece begins dispersed across
            the screen with deliberate angular offsets. As the intro sequence unfolds, Framer Motion springs
            magnetically pull the fourteen fragments toward the centre, smoothly reassembling the complete
            foundation emblem. Concurrently, the browser&apos;s native Web Speech API speaks a welcoming voice
            greeting, establishing an inviting, multi-sensory first impression.
          </p>
        </div>

        {/* Polar Scatter Mathematics Snippet */}
        <CodeSnippetBlock
          title="components/IntroSplash.tsx &bull; Polar Coordinate Fragment Scattering"
          language="typescript"
          code={`// Polar distribution: spreads 14 emblem fragments across orbits
function scatterFor(i: number, n: number) {
  const angle = (i / n) * Math.PI * 2 + 0.6;
  const rx = 30 + ((i * 7) % 18);
  const ry = 45 + ((i * 11) % 30);
  return {
    x: Math.round(Math.cos(angle) * rx) + "%",
    y: Math.round(Math.sin(angle) * ry) + "%",
    rotate: (i % 2 === 0 ? -1 : 1) * (140 + ((i * 23) % 120)),
    scale: 0.55 + ((i * 13) % 5) * 0.1,
  };
}

// Zero-flash pre-hydration caching in layout.tsx:
// An inline script immediately reads localStorage('davcie-intro-seen')
// and appends .intro-seen before DOM paint, preventing duplicate animations.`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs font-mono">
              <Eye className="w-3.5 h-3.5" />
              <span>Zero-Flash Caching</span>
            </div>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              Inline head script appends <code className="text-[11px] font-mono">.intro-seen</code> prior to paint,
              guaranteeing returning visitors never experience intro replay lag.
            </p>
          </div>
          <div className="p-4 rounded-xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs font-mono">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Web Speech API</span>
            </div>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              Synthesized audio greeting triggers upon first user interaction, gracefully degrading in unsupported
              environments without throwing exceptions.
            </p>
          </div>
          <div className="p-4 rounded-xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-1.5">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Reduced-Motion Bypass</span>
            </div>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              Users with <code className="text-[11px] font-mono">prefers-reduced-motion</code> bypass the animation
              entirely, while an Escape key shortcut allows instant skipping.
            </p>
          </div>
        </div>
      </section>

      {/* 5. GAMIFIED PAEDIATRIC EDUCATION HUB */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Gamepad2 className="w-4 h-4" />
            <span>04 &bull; Gamified Health Literacy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Interactive Learning: Flip Cards, Game &amp; Quiz
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-content-secondary dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            Education is the platform&apos;s primary clinical defense against paediatric diabetes complications.
            To transform complex medical facts into engaging, age-appropriate interactions, I engineered three
            distinct learning modules on <code className="text-xs font-mono">/learn</code>:
          </p>
        </div>

        {/* The 3 Educational Modules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
                Module A &bull; CSS 3D Transforms
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                Myth-Busting 3D Flip Cards
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Rendered with CSS <code className="text-[11px] font-mono">perspective: 1000px</code> and 3D backface
                visibility. Clicking or pressing Enter flips the card 180 degrees to replace prevalent myths with
                clinical truths.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] text-[11px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/5">
              Accessible ARIA live labels inform screen reader users of the hidden state toggle.
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
                Module B &bull; Binary Classification
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                Myth or Fact Rapid Game
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Presents children with real-world statements. Players make quick binary decisions, receiving instant
                affirmation with <code className="text-[11px] font-mono">bg-green-700</code> success states and concise
                explanations.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] text-[11px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/5">
              Reinforces clinical knowledge without punitive penalties or high-pressure timers.
            </div>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 flex flex-col justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold uppercase text-amber-600 dark:text-amber-400">
                Module C &bull; Dynamic Knowledge Check
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                5-Question Randomised Quiz
              </h3>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Selects five randomised questions from a clinical question pool using the Fisher-Yates shuffle
                algorithm. Shuffles options on every round to guarantee unique learning sessions.
              </p>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.04] text-[11px] font-mono text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/5">
              Programmatic focus restoration automatically shifts keyboard focus to the next question heading.
            </div>
          </div>
        </div>

        {/* Screenshot of Educational Content */}
        <div className="rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/10 bg-slate-950">
          <div className="relative aspect-[16/9] w-full bg-slate-100">
            <Image
              src="/images/davcie/education.jpg"
              alt="Davcie Foundation Diabetes Education Hub"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="px-4 py-2.5 bg-slate-900/90 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>Paediatric Education Workshop &amp; Warning Signs Curriculum</span>
            <span className="text-blue-400">Interactive Curriculum Suite</span>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL ARCHITECTURE: NEXT.JS 16 & PROXY.TS */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Code2 className="w-4 h-4" />
            <span>05 &bull; Technical Architecture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Next.js 16 App Router, Proxy Gating &amp; Tagged Caching
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-content-secondary dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            The project leverages the latest Next.js 16 App Router runtime alongside React 19, Turbopack,
            and Tailwind CSS v4&apos;s inline token system (<code className="text-xs font-mono">@theme inline</code>).
            Two modern Next.js architectural patterns were introduced:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
            <li>
              <strong className="text-slate-900 dark:text-white">Next.js 16 Proxy Gating (<code className="text-xs font-mono">proxy.ts</code>):</strong> Transitioned
              from legacy middleware to Next.js 16&apos;s recommended proxy architecture to intercept all requests targeting
              <code className="text-xs font-mono">/admin/*</code> routes, verifying Supabase SSR authentication tokens and redirecting
              unauthenticated users to <code className="text-xs font-mono">/admin/login</code>.
            </li>
            <li>
              <strong className="text-slate-900 dark:text-white">Directive-Level Caching (&quot;use cache&quot;):</strong> Implemented
              the Next.js 16 &quot;use cache&quot; directive with <code className="text-xs font-mono">cacheTag(&quot;events&quot;)</code>,
              enabling edge caching for public event schedules while granting administrators instant on-demand cache revalidation.
            </li>
          </ul>
        </div>

        {/* Code Snippet for proxy.ts and cacheTag */}
        <CodeSnippetBlock
          title="proxy.ts &bull; Next.js 16 Route Protection &amp; SSR Auth Session Interception"
          language="typescript"
          code={`import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function proxy(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => request.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  const pathname = request.nextUrl.pathname;

  // Gate all admin management routes
  if (!user && pathname !== "/admin/login") {
    const url = request.nextUrl.clone();
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}

export const config = { matcher: "/admin/:path*" };`}
        />
      </section>

      {/* 7. ZERO-DEPENDENCY ANTI-SPAM & SUPABASE INGESTION */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <ShieldCheck className="w-4 h-4" />
            <span>06 &bull; Form Ingestion Pipeline</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Dual-Layer Anti-Spam Pipeline &amp; Supabase Backend
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-content-secondary dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            Community outreach websites frequently suffer from aggressive spam bot submissions. Rather than
            burdening children, parents, and volunteers with privacy-invasive, visual reCAPTCHA puzzles, I built
            a zero-dependency, server-side anti-spam verification pipeline in <code className="text-xs font-mono">app/api/contact/route.ts</code> and
            <code className="text-xs font-mono">app/api/volunteer/route.ts</code>.
          </p>
        </div>

        {/* Dual-Layer Pipeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-blue-600 dark:text-blue-400">
              Layer 1 &bull; Honeypot &amp; Timing Gate
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Invisible Bot Interception
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              An invisible form input (<code className="text-[11px] font-mono">website</code>) is left empty by genuine users.
              Automated scrapers invariably fill it, triggering an immediate silent HTTP 200 drop. Concurrently, a
              3-second elapsed time check (<code className="text-[11px] font-mono">elapsedMs &lt; 3000</code>) weeds out
              programmatic headless submissions.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-emerald-600 dark:text-emerald-400">
              Layer 2 &bull; Payload Size &amp; Validation
            </span>
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              10KB Boundary &amp; Service Role Ingestion
            </h3>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              Every request is gated by a strict 10KB payload limit (<code className="text-[11px] font-mono">10240 bytes</code>)
              to thwart memory exhaustion attempts. Verified submissions are cleaned, field-length truncated, and
              committed to Supabase PostgreSQL using an isolated server-only administrative client.
            </p>
          </div>
        </div>

        {/* Code Snippet for Form Ingestion */}
        <CodeSnippetBlock
          title="app/api/contact/route.ts &bull; Server-Side Bot Defense &amp; Supabase Mutation"
          language="typescript"
          code={`export async function POST(request: Request) {
  // 1. Strict 10KB payload protection gate
  const rawText = await request.text();
  if (new TextEncoder().encode(rawText).length > 10240) {
    return NextResponse.json({ error: "Payload too large." }, { status: 413 });
  }

  const body = JSON.parse(rawText);

  // 2. Honeypot check: automated scrapers populate this hidden field
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true }); // Silent drop
  }

  // 3. Human interaction timing threshold: reject bots filling in < 3s
  if (typeof body.elapsedMs !== "number" || body.elapsedMs < 3000) {
    return NextResponse.json({ ok: true });
  }

  // 4. Sanitize and insert into Supabase contact_messages table
  const { error } = await supabaseAdmin.from("contact_messages").insert({
    name: String(body.name).trim().slice(0, 120),
    email: String(body.email).trim().slice(0, 254),
    subject: body.subject ? String(body.subject).trim().slice(0, 200) : null,
    message: String(body.message).trim().slice(0, 3000),
  });

  if (error) return NextResponse.json({ error: "Submission failed." }, { status: 500 });
  return NextResponse.json({ ok: true });
}`}
        />
      </section>

      {/* 8. ADMINISTRATIVE DASHBOARD & TIMEZONE NORMALISATION */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Lock className="w-4 h-4" />
            <span>07 &bull; Operations Portal</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Administrative Management CMS &amp; Timezone Operations
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-content-secondary dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            To empower foundation staff to manage operations independently without touching database tables,
            I constructed the authenticated backoffice portal under <code className="text-xs font-mono">/admin</code>.
            The portal provides event creation, volunteer tracking, message reviews, and secure CSV data export.
          </p>
        </div>

        {/* Admin Architecture Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs font-mono">
              <Calendar className="w-4 h-4" />
              <span>Accra Timezone Handling</span>
            </div>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              Bi-directional conversion between ISO UTC timestamps and <code className="text-[11px] font-mono">Africa/Accra</code> (GMT+0)
              ensures event schedules align precisely with local Ghanaian community timing.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs font-mono">
              <Download className="w-4 h-4" />
              <span>Safe CSV Export</span>
            </div>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              Volunteer rosters export as sanitized CSV files. Formula injection prevention prepends single quotes
              to cells starting with <code className="text-[11px] font-mono">=, +, -, @</code> to guard coordinator spreadsheets.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-2">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-xs font-mono">
              <Activity className="w-4 h-4" />
              <span>Live Operational Metrics</span>
            </div>
            <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
              Real-time database count badges immediately show coordinators the volume of upcoming events,
              unreviewed volunteer applications, and unresolved contact inquiries.
            </p>
          </div>
        </div>

        {/* Safe CSV Export Code Snippet */}
        <CodeSnippetBlock
          title="app/admin/volunteers/export/route.ts &bull; Formula Injection-Proof CSV Export"
          language="typescript"
          code={`function escapeCsvCell(val: unknown): string {
  if (val === null || val === undefined) return '""';
  let str = Array.isArray(val) ? val.join("; ") : String(val);

  // Prefix any cell starting with =, +, -, @, \\t, \\r with a single quote
  // to prevent malicious spreadsheet formula execution vulnerabilities
  if (/^\\s*[=+\\-@\\t\\r]/.test(str)) {
    str = "'" + str;
  }

  // Double up quotation marks to satisfy CSV specification
  str = str.replace(/"/g, '""');
  return '"' + str + '"';
}`}
        />
      </section>

      {/* 9. PAYSTACK MULTI-CURRENCY DONATION PROCESSING */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <CreditCard className="w-4 h-4" />
            <span>08 &bull; Payments &amp; Checkout</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Paystack Multi-Currency Checkout Integration
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-content-secondary dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            To fund educational workshops and essential glucose testing equipment for vulnerable families,
            I integrated Paystack&apos;s transaction initialization API into the platform. Built inside
            <code className="text-xs font-mono">app/api/donate/initialize/route.ts</code>, the checkout supports
            three core African regional and international currencies: Ghanaian Cedi (GHS), US Dollar (USD),
            and Nigerian Naira (NGN).
          </p>
          <p>
            The backend validates the donor&apos;s contact information, converts the donation total into integer
            subunits (e.g. pesewas or cents), attaches custom donor metadata, and requests an official
            authorization URL from Paystack&apos;s gateway.
          </p>
        </div>

        {/* Pre-Launch Disclosure Banner */}
        <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200 text-xs sm:text-sm font-mono space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300">
            <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>Pre-Launch Technical Disclosure</span>
          </div>
          <p className="leading-relaxed">
            The Paystack integration is fully written and tested in code. However, the foundation has not officially
            launched public donation processing. The production Paystack secret key remains unconfigured in live
            hosting, returning a transparent HTTP 503 fallback state until merchant banking approvals are finalised.
            No live donor funds or payment cards have been processed in production.
          </p>
        </div>
      </section>

      {/* 10. COLLABORATIVE DIVISION OF WORK */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Users className="w-4 h-4" />
            <span>09 &bull; Team &amp; Collaboration</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Collaborative Division: Full-Stack Developer vs. Tech Lead
          </h2>
        </div>

        <div className="prose prose-slate dark:prose-invert max-w-none text-content-secondary dark:text-slate-300 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            Davcie Foundation was built as a focused two-person engineering collaboration. To maintain transparency
            and accurately honour team contributions, responsibilities were divided clearly:
          </p>
        </div>

        {/* Contribution Matrix Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-blue-200/90 dark:border-blue-400/20 bg-blue-50/30 dark:bg-blue-950/20 space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                Godwin Apedo &bull; Full-Stack Developer
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                Frontend Architecture, Games, Backend &amp; Admin
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-content-secondary dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Engineered complete visual identity, typography tokens, and WCAG AA contrast styling.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Constructed 14-piece emblem scatter physics, Framer Motion assembly, and Web Speech narration.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Built interactive education suite: 3D perspective flip cards, Myth-or-Fact game, and quiz.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Architected dual-layer anti-spam submission pipeline and Supabase PostgreSQL ingestion.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Created operations admin CMS with proxy.ts auth gating and injection-proof CSV export.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>Integrated Paystack multi-currency donation checkout with HTTP 503 fallback handling.</span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                Collaborator &bull; Project Tech Lead
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                Editorial About Page &amp; Founder Narrative
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-content-secondary dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Authored the foundation&apos;s About page narrative (<code className="text-[11px] font-mono">/about</code> and <code className="text-[11px] font-mono">/about/story</code>).</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Drafted the founder&apos;s personal journey and early organizational documentation.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Conducted editorial liaison with the foundation&apos;s leadership.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>Collaborated on overall site milestone planning and launch criteria.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 11. LESSONS LEARNED & ROADMAP */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            <Gauge className="w-4 h-4" />
            <span>10 &bull; Retrospective</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key Lessons, Outstanding Approvals &amp; Roadmap
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Key Engineering Insights
            </h3>
            <ul className="space-y-2 text-xs text-content-secondary dark:text-slate-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Contrast engineering in health UI:</strong> Aesthetic warmth must never compromise
                  legibility. Developing dedicated text tokens (<code className="text-[11px] font-mono">azure-text</code>)
                  resolved contrast gaps on soft cream surfaces.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Accessible gamification:</strong> Educational games must offer keyboard parity,
                  programmatic focus restoration, and screen reader announcements to truly welcome every child.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero-dependency bot mitigation:</strong> Combining hidden honeypot fields with client timing
                  gates eliminates spam without relying on cumbersome third-party CAPTCHAs.
                </span>
              </li>
            </ul>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-slate-200/90 dark:border-white/10 space-y-3">
            <h3 className="font-bold text-slate-900 dark:text-white text-base">
              Outstanding Approvals Prior to Launch
            </h3>
            <ul className="space-y-2 text-xs text-content-secondary dark:text-slate-300">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Formal Clinical Review:</strong> All diabetes health statements and warning signs are
                  slated for review by qualified paediatric endocrinology specialists before official launch.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Production Merchant Credentials:</strong> Live Paystack API keys and bank settlement
                  routing require finalization by the foundation&apos;s board.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Physical Assistive Tech Testing:</strong> Screen reader validation on real mobile hardware
                  (iOS VoiceOver and Android TalkBack) remains on the pre-launch testing checklist.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 12. COMPANION CASE STUDIES NAVIGATION */}
      <section className="space-y-8 pt-8 border-t border-slate-200/80 dark:border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Explore More Case Studies
            </h3>
            <p className="text-xs sm:text-sm text-content-secondary dark:text-slate-400 font-mono mt-1">
              Architectural breakdowns, commercial platforms, and university engineering systems.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/ApedoG17/davcie-foundation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <span>GitHub Repository &bull; Davcie</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* 3 Companion Cards linking to MENSAH, Chef Apedo, Raku */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 01: MENSAH */}
          <div className="glass-panel rounded-2xl p-6 border border-amber-200/90 dark:border-amber-400/20 bg-white/80 dark:bg-slate-900/60 flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-300 font-bold">
                Project 01 &bull; Luxury E-Commerce &amp; Spatial Logistics
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                MENSAH
              </h4>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                Luxury tailoring, deterministic measurement sizing &amp; Haversine courier dispatch prototype.
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

          {/* Project 02: Chef Apedo Foods */}
          <div className="glass-panel rounded-2xl p-6 border border-purple-200/90 dark:border-purple-400/20 bg-white/80 dark:bg-slate-900/60 flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-700 dark:text-purple-300 font-bold">
                Project 02 &bull; Commercial Platform
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Chef Apedo Foods
              </h4>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
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

          {/* Project 03: Raku Vehicle Rental */}
          <div className="glass-panel rounded-2xl p-6 border border-blue-200/90 dark:border-blue-400/20 bg-white/80 dark:bg-slate-900/60 flex flex-col justify-between space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-300 font-bold">
                Project 03 &bull; Software Engineering
              </span>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                Raku Vehicle Rental
              </h4>
              <p className="text-xs text-content-secondary dark:text-slate-400 leading-relaxed">
                University coursework: full-stack rental inventory engine, lockouts &amp; concurrency control.
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
