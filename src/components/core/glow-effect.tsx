"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion, type Transition } from "motion/react";
import { cn } from "@/lib/utils";

export type GlowMode =
  | "rotate"
  | "pulse"
  | "breathe"
  | "colorShift"
  | "flowHorizontal"
  | "static";

export type GlowBlur =
  | "softest"
  | "soft"
  | "medium"
  | "strong"
  | "stronger"
  | "none"
  | number;

export type GlowEffectProps = {
  className?: string;
  style?: React.CSSProperties;
  /** Palette of colors used to build the gradient glow */
  colors?: string[];
  /** Glow animation mode (default: 'colorShift') */
  mode?: GlowMode;
  /** Blur intensity (default: 'medium') */
  blur?: GlowBlur;
  /** Duration of animation cycle in seconds (default: 4s) */
  duration?: number;
  /** Scale factor of the glow aura (default: 1) */
  scale?: number;
  /** Custom motion transition overrides */
  transition?: Transition;
};

const BLUR_MAP: Record<string, string> = {
  softest: "blur(6px)",
  soft: "blur(12px)",
  medium: "blur(20px)",
  strong: "blur(30px)",
  stronger: "blur(40px)",
  none: "none",
};

const DEFAULT_LAVENDER_PURPLE = [
  "#8b5cf6", // lavender / violet
  "#a78bfa", // vivid lavender
  "#38bdf8", // subtle sky
  "#6366f1", // indigo
];

/**
 * GlowEffect Component (Motion Primitives)
 * 
 * Renders a customizable, GPU-accelerated ambient lighting aura behind elements.
 * Supports continuous rotating conic gradients, pulsing, breathing, and static modes.
 * Respects prefers-reduced-motion by rendering a subtle static glow without motion loops.
 */
export function GlowEffect({
  className,
  style,
  colors = DEFAULT_LAVENDER_PURPLE,
  mode = "colorShift",
  blur = "medium",
  duration = 4,
  scale = 1,
  transition,
}: GlowEffectProps) {
  const shouldReduceMotion = useReducedMotion();

  const blurValue = useMemo(() => {
    if (typeof blur === "number") return `blur(${blur}px)`;
    return BLUR_MAP[blur] ?? BLUR_MAP.medium;
  }, [blur]);

  const gradientBackground = useMemo(() => {
    const stops = [...colors, colors[0]].join(", ");
    return `conic-gradient(from 0deg at 50% 50%, ${stops})`;
  }, [colors]);

  // Reduced motion: render a soft, static aura without infinite loops
  if (shouldReduceMotion || mode === "static") {
    return (
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 rounded-[inherit] pointer-events-none will-change-transform",
          className
        )}
        style={{
          background: gradientBackground,
          filter: blurValue,
          transform: `scale(${scale})`,
          ...style,
        }}
      />
    );
  }

  // Define animation variants based on mode
  const getAnimationConfig = () => {
    switch (mode) {
      case "rotate":
        return {
          animate: { rotate: 360 },
          transition: transition ?? {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        };
      case "pulse":
        return {
          animate: {
            opacity: [0.35, 0.75, 0.35],
            scale: [scale * 0.98, scale * 1.03, scale * 0.98],
          },
          transition: transition ?? {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      case "breathe":
        return {
          animate: {
            opacity: [0.4, 0.7, 0.4],
          },
          transition: transition ?? {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          },
        };
      case "flowHorizontal":
        return {
          animate: {
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          },
          transition: transition ?? {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        };
      case "colorShift":
      default:
        return {
          animate: {
            rotate: [0, 360],
            scale: [scale, scale * 1.03, scale],
          },
          transition: transition ?? {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
        };
    }
  };

  const anim = getAnimationConfig();

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "absolute inset-0 rounded-[inherit] pointer-events-none will-change-transform",
        className
      )}
      style={{
        background: gradientBackground,
        filter: blurValue,
        transformOrigin: "center center",
        ...style,
      }}
      animate={anim.animate}
      transition={anim.transition}
    />
  );
}
