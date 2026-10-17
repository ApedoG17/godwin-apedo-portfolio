"use client";

import React from "react";
import {
  motion,
  useScroll,
  useSpring,
  useReducedMotion,
  type SpringOptions,
} from "motion/react";
import { cn } from "@/lib/utils";
import { MOTION_SPRINGS } from "@/lib/motion";

export type ScrollProgressProps = {
  className?: string;
  springOptions?: SpringOptions;
};

/**
 * ScrollProgress Component (Motion Primitives)
 * 
 * Renders an accessible, GPU-accelerated scroll progress bar tracking page depth.
 * Uses transform-based scaleX animation to avoid layout shifts or DOM reflow.
 */
export function ScrollProgress({
  className,
  springOptions = MOTION_SPRINGS.snappy,
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // Smooth out progress updates with spring physics unless reduced motion is preferred
  const scaleX = useSpring(scrollYProgress, springOptions);

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "pointer-events-none origin-left bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600",
        className
      )}
      style={{
        scaleX: shouldReduceMotion ? scrollYProgress : scaleX,
      }}
    />
  );
}
