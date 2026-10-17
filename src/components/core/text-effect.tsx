"use client";

import React, { useRef, useMemo } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  type Variants,
  type Transition,
} from "motion/react";
import { cn } from "@/lib/utils";
import {
  MOTION_DURATIONS,
  MOTION_EASINGS,
} from "@/lib/motion";

export type PresetType = "fade" | "blur" | "fade-in-blur" | "slide";
export type PerType = "word" | "char";

export type TextEffectProps = {
  children: string;
  per?: PerType;
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div" | "blockquote";
  preset?: PresetType;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  trigger?: boolean;
  segmentWrapperClassName?: (segment: string, index: number) => string | undefined;
  onAnimationComplete?: () => void;
};

const defaultStaggerTimes: Record<PerType, number> = {
  char: 0.03,
  word: 0.08, // 80ms: balanced editorial cadence so words are visibly seen arriving
};

const MOTION_COMPONENTS = {
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  span: motion.span,
  div: motion.div,
  blockquote: motion.blockquote,
} as const;

/**
 * TextEffect Component (Motion Primitives)
 * 
 * Segmented text animation with accessible semantics and screen reader compliance.
 * Employs aria-label on the parent container with aria-hidden on split segments.
 * Bypasses splitting and renders static text immediately when prefers-reduced-motion is active.
 */
export function TextEffect({
  children,
  per = "word",
  as: Component = "p",
  preset = "fade-in-blur",
  variants,
  className,
  style,
  delay = 0,
  trigger,
  segmentWrapperClassName,
  onAnimationComplete,
}: TextEffectProps) {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const inView = useInView(containerRef, { once: true, margin: "0px 0px -60px 0px" });

  // If trigger is explicitly defined, use it; otherwise trigger when in view
  const shouldAnimate = trigger !== undefined ? trigger : inView;

  // Split string based on 'word' (preserving spaces) or 'char'
  const segments = useMemo(() => {
    if (per === "word") {
      return children.split(/(\s+)/);
    }
    return children.split("");
  }, [children, per]);

  // Compute container variants
  const computedContainerVariants: Variants = useMemo(() => {
    if (variants?.container) return variants.container;
    const stagger = defaultStaggerTimes[per];
    return {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: stagger,
          delayChildren: delay,
        },
      },
    };
  }, [variants?.container, per, delay]);

  // Compute item variants based on preset
  const computedItemVariants: Variants = useMemo(() => {
    if (variants?.item) return variants.item;
    const transition: Transition = {
      duration: MOTION_DURATIONS.moderate + 0.05,
      ease: MOTION_EASINGS.easeOut,
    };

    switch (preset) {
      case "blur":
        return {
          hidden: { opacity: 0, filter: "blur(8px)" },
          visible: { opacity: 1, filter: "blur(0px)", transition },
        };
      case "fade":
        return {
          hidden: { opacity: 0, y: 8 },
          visible: { opacity: 1, y: 0, transition },
        };
      case "slide":
        return {
          hidden: { opacity: 0, y: 14 },
          visible: { opacity: 1, y: 0, transition },
        };
      case "fade-in-blur":
      default:
        return {
          hidden: { opacity: 0, y: 14, filter: "blur(8px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)", transition },
        };
    }
  }, [variants?.item, preset]);

  // Reduced motion: bypass all text splitting and animation
  if (shouldReduceMotion) {
    return (
      <Component className={className} style={style}>
        {children}
      </Component>
    );
  }

  const MotionComponent = MOTION_COMPONENTS[Component];

  return (
    <MotionComponent
      ref={containerRef as React.Ref<never>}
      aria-label={children}
      inherit={false}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      variants={computedContainerVariants}
      onAnimationComplete={onAnimationComplete}
      className={className}
      style={style}
    >
      {segments.map((segment, index) => {
        // Render whitespace tokens without extra wrapper animation
        if (/^\s+$/.test(segment)) {
          return <span key={index}>{segment}</span>;
        }

        const customClass = segmentWrapperClassName
          ? segmentWrapperClassName(segment, index)
          : undefined;

        return (
          <motion.span
            key={index}
            variants={computedItemVariants}
            aria-hidden="true"
            className={cn("inline-block", customClass)}
          >
            {segment}
          </motion.span>
        );
      })}
    </MotionComponent>
  );
}
