/**
 * Shared Motion Design Tokens & Reusable Animation Patterns
 * 
 * Centralized motion tokens for consistent durations, easing curves,
 * entrance distances, stagger intervals, and physics configurations across the portfolio.
 * 
 * All tokens and utilities strictly support accessibility and 'prefers-reduced-motion'.
 */

import type { Transition, Variants, SpringOptions } from "motion/react";

/* ── 1. Duration Tokens (seconds) ── */
export const MOTION_DURATIONS = {
  /** 10ms: Immediate fallback for prefers-reduced-motion */
  instant: 0.01,
  /** 150ms: Quick micro-interactions (copy button icon toggle, button active state) */
  fast: 0.15,
  /** 250ms: Interactive UI states (dropdowns, mobile drawer, navbar pill) */
  normal: 0.25,
  /** 400ms: Standard component entrances & tab crossfades */
  moderate: 0.4,
  /** 550ms: Deliberate editorial entrances (hero typography, featured project reveals) */
  deliberate: 0.55,
} as const;

/* ── 2. Easing Curves ── */
export const MOTION_EASINGS = {
  /**
   * Premium deceleration curve: cubic-bezier(0.16, 1, 0.3, 1)
   * Smooth deceleration into resting position without jarring bounce.
   * Matches the CSS '--ease-out-expo' in globals.css.
   */
  easeOut: [0.16, 1, 0.3, 1] as [number, number, number, number],
  /**
   * Smooth bidirectional curve for modal dialogs and drawers: cubic-bezier(0.65, 0, 0.35, 1)
   */
  easeInOut: [0.65, 0, 0.35, 1] as [number, number, number, number],
  /**
   * Crisp exit curve: cubic-bezier(0.7, 0, 0.84, 0)
   */
  easeIn: [0.7, 0, 0.84, 0] as [number, number, number, number],
  /** Linear curve for continuous tickers/sliders */
  linear: "linear" as const,
} as const;

/* ── 3. Distance Tokens (pixels) ── */
export const MOTION_DISTANCES = {
  /** 8px: Subtle shifts (subsystem tabs, tooltip hints) */
  subtle: 8,
  /** 16px: Standard entrance distance (cards, list items, text paragraphs) */
  default: 16,
  /** 24px: Prominent entrance distance (hero headers, large project cards) */
  prominent: 24,
} as const;

/* ── 4. Stagger Intervals (seconds) ── */
export const MOTION_STAGGERS = {
  /** 50ms: Rapid sequence for compact items (tech badges, icon lists) */
  fast: 0.05,
  /** 80ms: Balanced stagger for card grids (services, methodologies) */
  default: 0.08,
  /** 100ms: Relaxed sequence for milestone cards and project showcases */
  relaxed: 0.1,
} as const;

/* ── 5. Spring Physics Configurations ── */
export const MOTION_SPRINGS: Record<string, SpringOptions> = {
  /** Snappy feedback for buttons and tactile controls */
  snappy: { stiffness: 400, damping: 30 },
  /** Navbar sliding pill spring: smooth fluid glide */
  navPill: { stiffness: 380, damping: 30 },
  /** Cursor-following spotlight spring */
  spotlight: { stiffness: 200, damping: 25, bounce: 0 },
  /** Gentle hover lift spring */
  gentle: { stiffness: 200, damping: 24 },
} as const;

/* ── 6. Viewport Defaults ── */
export const MOTION_VIEWPORT = {
  /** Trigger animation once when 40px inside viewport */
  default: { once: true, margin: "-40px" },
  /** Conservative trigger with 15% intersection */
  amount15: { once: true, amount: 0.15 },
} as const;

/* ── 7. Reusable Motion Pattern Generators ── */

/**
 * Creates a standardized fade-and-rise entrance animation definition.
 */
export function getFadeInUp({
  distance = MOTION_DISTANCES.default,
  duration = MOTION_DURATIONS.moderate,
  delay = 0,
  shouldReduceMotion = false,
}: {
  distance?: number;
  duration?: number;
  delay?: number;
  shouldReduceMotion?: boolean | null;
} = {}) {
  const isReduced = Boolean(shouldReduceMotion);
  return {
    initial: {
      opacity: 0,
      y: isReduced ? 0 : distance,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: isReduced ? MOTION_DURATIONS.instant : duration,
      delay: isReduced ? 0 : delay,
      ease: MOTION_EASINGS.easeOut,
    } as Transition,
  };
}

/**
 * Creates container variants for staggered children reveal.
 */
export function getStaggerContainerVariants({
  staggerChildren = MOTION_STAGGERS.default,
  delayChildren = 0,
  shouldReduceMotion = false,
}: {
  staggerChildren?: number;
  delayChildren?: number;
  shouldReduceMotion?: boolean | null;
} = {}): Variants {
  const isReduced = Boolean(shouldReduceMotion);
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: isReduced ? 0 : staggerChildren,
        delayChildren: isReduced ? 0 : delayChildren,
      },
    },
  };
}

/**
 * Creates card child variants to pair with getStaggerContainerVariants.
 */
export function getStaggerItemVariants({
  distance = MOTION_DISTANCES.default,
  duration = MOTION_DURATIONS.moderate,
  shouldReduceMotion = false,
}: {
  distance?: number;
  duration?: number;
  shouldReduceMotion?: boolean | null;
} = {}): Variants {
  const isReduced = Boolean(shouldReduceMotion);
  return {
    hidden: {
      opacity: 0,
      y: isReduced ? 0 : distance,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReduced ? MOTION_DURATIONS.instant : duration,
        ease: MOTION_EASINGS.easeOut,
      },
    },
  };
}

/**
 * Transition variants for tab crossfades (e.g. Subsystem tabs in Featured Projects).
 */
export function getTabContentVariants({
  distance = MOTION_DISTANCES.subtle,
  duration = MOTION_DURATIONS.normal,
  shouldReduceMotion = false,
}: {
  distance?: number;
  duration?: number;
  shouldReduceMotion?: boolean | null;
} = {}): Variants {
  const isReduced = Boolean(shouldReduceMotion);
  return {
    initial: {
      opacity: 0,
      y: isReduced ? 0 : distance,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isReduced ? MOTION_DURATIONS.instant : duration,
        ease: MOTION_EASINGS.easeOut,
      },
    },
    exit: {
      opacity: 0,
      y: isReduced ? 0 : -distance,
      transition: {
        duration: isReduced ? MOTION_DURATIONS.instant : duration * 0.75,
        ease: MOTION_EASINGS.easeIn,
      },
    },
  };
}
