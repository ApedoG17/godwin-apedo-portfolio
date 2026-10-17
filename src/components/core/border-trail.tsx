"use client";

import React from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";
import { MOTION_DURATIONS, MOTION_EASINGS } from "@/lib/motion";

export type BorderTrailProps = {
  className?: string;
  size?: number;
  transition?: Transition;
  onAnimationComplete?: () => void;
  style?: React.CSSProperties;
};

/**
 * BorderTrail Component (Motion Primitives)
 *
 * Renders an animated luminous beam traveling along the borders of its parent container.
 * Uses CSS motion-path (`offset-path: rect(...)`) and dual-mask clipping
 * (`[mask-clip:padding-box,border-box]` with `mask-composite: intersect`)
 * to keep the glow strictly constrained to the border channel without obscuring content.
 *
 * Strictly respects 'prefers-reduced-motion', provides a static fallback,
 * keeps decorative elements hidden from assistive technology, and avoids pointer blocking.
 */
export function BorderTrail({
  className,
  size = 60,
  transition,
  onAnimationComplete,
  style,
}: BorderTrailProps) {
  const shouldReduceMotion = useReducedMotion();

  const defaultTransition: Transition = {
    repeat: Infinity,
    duration: 5,
    ease: MOTION_EASINGS.linear,
  };

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-[1.5px] border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
      style={{
        WebkitMaskImage:
          "linear-gradient(transparent, transparent), linear-gradient(#000, #000)",
        WebkitMaskClip: "padding-box, border-box",
        WebkitMaskComposite: "source-in",
      }}
    >
      <motion.div
        className={cn("absolute aspect-square bg-purple-600", className)}
        style={{
          width: size,
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        animate={{
          offsetDistance: shouldReduceMotion ? "0%" : ["0%", "100%"],
        }}
        transition={
          shouldReduceMotion
            ? { duration: MOTION_DURATIONS.instant }
            : transition || defaultTransition
        }
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
}
