"use client";

import React, { Children, isValidElement, useMemo } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import {
  MOTION_DURATIONS,
  MOTION_EASINGS,
  MOTION_DISTANCES,
} from "@/lib/motion";

export type PresetType =
  | "fade"
  | "slide"
  | "scale"
  | "blur-sm"
  | "blur-slide";

export type AnimatedGroupProps = {
  children: React.ReactNode;
  className?: string;
  childClassName?: string;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  preset?: PresetType;
  as?: keyof typeof MOTION_CONTAINERS;
  asChild?: keyof typeof MOTION_CHILDREN;
  stagger?: number;
  delay?: number;
};

const MOTION_CONTAINERS = {
  div: motion.div,
  ul: motion.ul,
  ol: motion.ol,
  section: motion.section,
  article: motion.article,
  nav: motion.nav,
  aside: motion.aside,
  header: motion.header,
  footer: motion.footer,
} as const;

const MOTION_CHILDREN = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  span: motion.span,
} as const;

/**
 * AnimatedGroup Component (Motion Primitives)
 * 
 * Orchestrates staggered entrance animations across collections of child elements.
 * Coordinates cards, grid items, and lists using unified motion tokens.
 * Automatically respects prefers-reduced-motion by bypassing animations.
 */
export function AnimatedGroup({
  children,
  className,
  childClassName,
  variants,
  preset = "slide",
  as: ComponentTag = "div",
  asChild: ChildTag = "div",
  stagger = 0.1,
  delay = 0,
}: AnimatedGroupProps) {
  const shouldReduceMotion = useReducedMotion();

  // Container variants with configurable stagger and delay
  const containerVariants: Variants = useMemo(() => {
    if (variants?.container) return variants.container;
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : stagger,
          delayChildren: shouldReduceMotion ? 0 : delay,
        },
      },
    };
  }, [variants?.container, stagger, delay, shouldReduceMotion]);

  // Item variants corresponding to preset type
  const itemVariants: Variants = useMemo(() => {
    if (variants?.item) return variants.item;

    const transition = {
      duration: MOTION_DURATIONS.moderate + 0.05,
      ease: MOTION_EASINGS.easeOut,
    };

    switch (preset) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: { opacity: 1, scale: 1, transition },
        };
      case "blur-sm":
        return {
          hidden: { opacity: 0, filter: "blur(6px)" },
          visible: { opacity: 1, filter: "blur(0px)", transition },
        };
      case "blur-slide":
        return {
          hidden: { opacity: 0, filter: "blur(6px)", y: MOTION_DISTANCES.default + 4 },
          visible: { opacity: 1, filter: "blur(0px)", y: 0, transition },
        };
      case "slide":
      default:
        return {
          hidden: { opacity: 0, y: MOTION_DISTANCES.default + 4 },
          visible: { opacity: 1, y: 0, transition },
        };
    }
  }, [variants?.item, preset]);

  // Fallback for prefers-reduced-motion: render static semantic HTML
  if (shouldReduceMotion) {
    const StaticContainer = ComponentTag;
    const StaticChild = ChildTag;
    return (
      <StaticContainer className={className}>
        {Children.map(children, (child, index) => {
          if (!isValidElement(child)) return child;
          return (
            <StaticChild
              key={child.key ?? index}
              className={childClassName}
            >
              {child}
            </StaticChild>
          );
        })}
      </StaticContainer>
    );
  }

  const MotionContainer = MOTION_CONTAINERS[ComponentTag] ?? motion.div;
  const MotionChild = MOTION_CHILDREN[ChildTag] ?? motion.div;

  return (
    <MotionContainer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
      className={className}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        return (
          <MotionChild
            key={child.key ?? index}
            variants={itemVariants}
            className={childClassName}
          >
            {child}
          </MotionChild>
        );
      })}
    </MotionContainer>
  );
}
