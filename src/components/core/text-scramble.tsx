"use client";

import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

const MOTION_COMPONENTS = {
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  h4: motion.h4,
  h5: motion.h5,
  h6: motion.h6,
  p: motion.p,
  span: motion.span,
  div: motion.div,
} as const;

export type TextScrambleComponent = keyof typeof MOTION_COMPONENTS;

export type TextScrambleProps = {
  /** The text content to display and scramble */
  children: string;
  /** Duration in seconds of the scramble transition (default: 0.7s) */
  duration?: number;
  /** Speed / interval in seconds between character cycles (default: 0.04s) */
  speed?: number;
  /** Set of characters used to generate random glyphs */
  characterSet?: string;
  /** Semantic HTML tag to render (default: 'p') */
  as?: TextScrambleComponent;
  /** Optional custom CSS classes */
  className?: string;
  /** Optional manual trigger boolean. If omitted, triggers once when scrolling into view */
  trigger?: boolean;
  /** Optional callback fired when animation finishes */
  onScrambleComplete?: () => void;
  /** Optional inline styles */
  style?: React.CSSProperties;
};

const DEFAULT_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

/**
 * TextScramble Component (Motion Primitives)
 * 
 * Creates a cybernetic text-decrypt effect by cycling through random glyphs
 * before resolving to the final text from left to right.
 * 
 * Features:
 * - One-shot viewport triggering using MOTION_VIEWPORT.default
 * - Screen reader compliance (aria-label + aria-hidden on scrambled glyphs)
 * - Zero layout shift by preserving exact character count and whitespace
 * - Prefers-reduced-motion bypass (renders final text immediately)
 * - Safe unmount cleanup and SSR hydration consistency
 */
export function TextScramble({
  children,
  duration = 0.7,
  speed = 0.04,
  characterSet = DEFAULT_CHARS,
  as: Component = "p",
  className,
  trigger,
  onScrambleComplete,
  style,
}: TextScrambleProps) {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const inView = useInView(containerRef, { once: true, margin: "0px 0px -120px 0px" });

  // Maintain SSR and initial render consistency
  const [displayText, setDisplayText] = useState(children);
  const hasAnimatedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Trigger when explicit trigger prop is true, or on one-shot viewport entrance
  const shouldAnimate = trigger !== undefined ? trigger : inView;

  const startScramble = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    const steps = Math.max(Math.floor(duration / speed), 1);
    let step = 0;

    intervalRef.current = setInterval(() => {
      step++;
      const progress = step / steps;
      let output = "";

      for (let i = 0; i < children.length; i++) {
        const char = children[i];
        if (/\s/.test(char)) {
          output += char;
          continue;
        }

        // Characters to the left of progress resolve to the original text
        if (i < Math.floor(progress * children.length)) {
          output += char;
        } else {
          const randomIndex = Math.floor(Math.random() * characterSet.length);
          output += characterSet[randomIndex];
        }
      }

      setDisplayText(output);

      if (step >= steps) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        setDisplayText(children);
        onScrambleComplete?.();
      }
    }, speed * 1000);
  }, [children, duration, speed, characterSet, onScrambleComplete]);

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(children);
      return;
    }

    if (shouldAnimate && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      startScramble();
    }
  }, [shouldAnimate, shouldReduceMotion, children, startScramble]);

  // Clean up interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  // When prefers-reduced-motion is active, render static text immediately
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
      ref={containerRef as React.Ref<never>}
      aria-label={children}
      className={className}
      style={style}
    >
      <span aria-hidden="true">{displayText}</span>
      <span className="sr-only">{children}</span>
    </MotionComponent>
  );
}
