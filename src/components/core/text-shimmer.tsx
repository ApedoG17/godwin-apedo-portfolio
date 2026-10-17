"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const MOTION_COMPONENTS = {
  p: motion.p,
  span: motion.span,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
} as const;

export type TextShimmerComponent = keyof typeof MOTION_COMPONENTS;

export type TextShimmerProps = {
  /** The text content to display and shimmer */
  children: string;
  /** HTML element to render as (default: 'p') */
  as?: TextShimmerComponent;
  /** Optional custom CSS classes */
  className?: string;
  /** Duration in seconds of one shimmer wave cycle (default: 3.5s for restrained polish) */
  duration?: number;
  /** Spread multiplier scaling the beam width dynamically to text length (default: 2) */
  spread?: number;
  /** Base text color before the highlight beam sweeps over it */
  baseColor?: string;
  /** Highlight color of the sweeping shimmer beam */
  gradientColor?: string;
  /** Optional inline styles */
  style?: React.CSSProperties;
};

/**
 * TextShimmer Component (Motion Primitives)
 * 
 * Creates a subtle, elegant sweeping light highlight across text elements.
 * Built with GPU-accelerated background-position transforms and CSS background-clip.
 * Automatically respects prefers-reduced-motion by presenting crisp, static text.
 */
export function TextShimmer({
  children,
  as: Component = "p",
  className,
  duration = 3.5,
  spread = 2,
  baseColor,
  gradientColor,
  style,
}: TextShimmerProps) {
  const shouldReduceMotion = useReducedMotion();

  // Scale the light beam spread dynamically based on string length
  const dynamicSpread = useMemo(() => {
    return Math.max(children.length * spread, 32);
  }, [children.length, spread]);

  // Reduced motion: render static, fully readable semantic element
  if (shouldReduceMotion) {
    const StaticComponent = Component;
    return (
      <StaticComponent className={className} style={style}>
        {children}
      </StaticComponent>
    );
  }

  const MotionComponent = MOTION_COMPONENTS[Component] ?? motion.p;

  return (
    <MotionComponent
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent [background-repeat:no-repeat,no-repeat]",
        className
      )}
      initial={{ backgroundPosition: "100% center" }}
      animate={{ backgroundPosition: "0% center" }}
      transition={{
        repeat: Infinity,
        duration,
        ease: "linear",
      }}
      style={{
        "--spread": `${dynamicSpread}px`,
        ...(baseColor && { "--base-color": baseColor }),
        ...(gradientColor && { "--base-gradient-color": gradientColor }),
        "--bg": `linear-gradient(90deg, transparent calc(50% - var(--spread)), var(--base-gradient-color, #ffffff) 50%, transparent calc(50% + var(--spread)))`,
        backgroundImage: `var(--bg), linear-gradient(var(--base-color, #00d4aa), var(--base-color, #00d4aa))`,
        ...style,
      } as React.CSSProperties}
    >
      {children}
    </MotionComponent>
  );
}
