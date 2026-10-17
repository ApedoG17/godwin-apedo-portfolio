"use client";

import React, { useState, useEffect, Children } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Transition,
  type Variants,
} from "motion/react";
import { cn } from "@/lib/utils";
import { MOTION_DURATIONS, MOTION_EASINGS } from "@/lib/motion";

export type TextLoopProps = {
  children: React.ReactNode[];
  className?: string;
  interval?: number;
  transition?: Transition;
  variants?: Variants;
  onIndexChange?: (index: number) => void;
  trigger?: boolean;
};

const defaultVariants: Variants = {
  initial: { y: 16, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -16, opacity: 0 },
};

/**
 * TextLoop Component (Motion Primitives)
 * 
 * Cycles through multiple phrases or child nodes with smooth exit/enter choreography.
 * Supports prefers-reduced-motion by halting rotation and presenting the primary entry statically.
 */
export function TextLoop({
  children,
  className,
  interval = 3.5,
  transition = {
    duration: MOTION_DURATIONS.moderate,
    ease: MOTION_EASINGS.easeOut,
  },
  variants = defaultVariants,
  onIndexChange,
  trigger = true,
}: TextLoopProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = Children.toArray(children);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!trigger || items.length <= 1 || shouldReduceMotion) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % items.length;
        onIndexChange?.(next);
        return next;
      });
    }, interval * 1000);

    return () => clearInterval(intervalId);
  }, [trigger, items.length, interval, onIndexChange, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span className={className}>{items[0]}</span>;
  }

  return (
    <span className={cn("inline-block relative overflow-hidden align-baseline", className)}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={currentIndex}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={variants}
          transition={transition}
          className="inline-block"
        >
          {items[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
