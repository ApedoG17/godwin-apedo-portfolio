"use client";

import React, { useRef, type ReactNode } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Transition,
  type Variant,
  type UseInViewOptions,
} from "motion/react";
import { MOTION_DURATIONS, MOTION_EASINGS, MOTION_VIEWPORT } from "@/lib/motion";

export type InViewProps = {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
};

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * InView Component (Motion Primitives)
 * 
 * Declarative viewport-triggered reveal container.
 * Executes a one-time entrance animation when element scrolls into view.
 * Automatically respects prefers-reduced-motion by rendering static content immediately.
 */
export function InView({
  children,
  variants = defaultVariants,
  transition = {
    duration: MOTION_DURATIONS.deliberate,
    ease: MOTION_EASINGS.easeOut,
  },
  viewOptions = MOTION_VIEWPORT.amount15,
  as: Component = "div",
  className,
  style,
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewOptions);
  const shouldReduceMotion = useReducedMotion();

  const MotionComponent = React.useMemo(() => motion.create(Component), [Component]);

  if (shouldReduceMotion) {
    return (
      <Component ref={ref} className={className} style={style}>
        {children}
      </Component>
    );
  }

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={transition}
      className={className}
      style={style}
    >
      {children}
    </MotionComponent>
  );
}
