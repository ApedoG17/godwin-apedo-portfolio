"use client";

import React, { Children } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Transition,
  type Variants,
} from "motion/react";
import { cn } from "@/lib/utils";
import {
  MOTION_DURATIONS,
  MOTION_EASINGS,
  MOTION_DISTANCES,
} from "@/lib/motion";

export type TransitionPanelProps = {
  children: React.ReactNode[];
  activeIndex: number;
  className?: string;
  transition?: Transition;
  variants?: Variants;
  style?: React.CSSProperties;
};

const defaultPanelVariants: Variants = {
  enter: {
    opacity: 0,
    y: MOTION_DISTANCES.subtle,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -MOTION_DISTANCES.subtle,
  },
};

/**
 * TransitionPanel Component (Motion Primitives)
 * 
 * Smoothly switches between content states (tabs, sub-views, onboarding panels)
 * using declarative enter and exit animations via AnimatePresence.
 * Automatically respects prefers-reduced-motion by presenting content statically.
 */
export function TransitionPanel({
  children,
  activeIndex,
  className,
  transition = {
    duration: MOTION_DURATIONS.normal,
    ease: MOTION_EASINGS.easeOut,
  },
  variants = defaultPanelVariants,
  style,
}: TransitionPanelProps) {
  const shouldReduceMotion = useReducedMotion();
  const items = Children.toArray(children);

  if (shouldReduceMotion) {
    return (
      <div className={cn("relative", className)} style={style}>
        {items[activeIndex]}
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)} style={style}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeIndex}
          initial="enter"
          animate="center"
          exit="exit"
          variants={variants}
          transition={transition}
          className="w-full"
        >
          {items[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
