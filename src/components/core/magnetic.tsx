"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
  type SpringOptions,
} from "motion/react";
import { cn } from "@/lib/utils";
import { MOTION_SPRINGS } from "@/lib/motion";

export type MagneticActionArea = "self" | "parent" | "global";

export type MagneticProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /**
   * Pull intensity factor (default: 0.35).
   * Controls how far the element translates toward the pointer.
   */
  intensity?: number;
  /**
   * Activation range in pixels from element center (default: 120).
   * When cursor is outside this distance, the element returns to resting state.
   */
  range?: number;
  /**
   * Trigger scope: 'self' tracks pointer within element bounds,
   * 'parent' tracks within direct parent, 'global' tracks window (default: 'self').
   */
  actionArea?: MagneticActionArea;
  /**
   * Spring physics configuration for the magnetic attraction and release.
   */
  springOptions?: SpringOptions;
};

/**
 * Magnetic Component (Motion Primitives)
 * 
 * Attracts interactive elements subtly toward the cursor using spring physics.
 * Supports configurable intensity, activation range, and action area.
 * Automatically disables on touch/coarse devices and respects prefers-reduced-motion.
 */
export function Magnetic({
  children,
  className,
  style,
  intensity = 0.35,
  range = 120,
  actionArea = "self",
  springOptions = MOTION_SPRINGS.snappy,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for X and Y pixel offsets
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for translation
  const springX = useSpring(x, springOptions);
  const springY = useSpring(y, springOptions);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(pointer: coarse)");
      setIsTouchDevice(mediaQuery.matches);
      const handler = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  const handlePointerMove = useCallback(
    (clientX: number, clientY: number) => {
      if (shouldReduceMotion || isTouchDevice || !ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = clientX - centerX;
      const deltaY = clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      if (range > 0 && distance > range) {
        // Outside magnetic influence range
        x.set(0);
        y.set(0);
        return;
      }

      // Calculate pull translation
      x.set(deltaX * intensity);
      y.set(deltaY * intensity);
    },
    [shouldReduceMotion, isTouchDevice, range, intensity, x, y]
  );

  const handleReset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  // Handle actionArea listeners for parent or global triggers
  useEffect(() => {
    if (shouldReduceMotion || isTouchDevice) return;

    if (actionArea === "global") {
      const onGlobalMove = (e: MouseEvent) => {
        handlePointerMove(e.clientX, e.clientY);
      };
      window.addEventListener("mousemove", onGlobalMove);
      return () => {
        window.removeEventListener("mousemove", onGlobalMove);
        handleReset();
      };
    }

    if (actionArea === "parent" && ref.current?.parentElement) {
      const parent = ref.current.parentElement;
      const onParentMove = (e: MouseEvent) => {
        handlePointerMove(e.clientX, e.clientY);
      };
      const onParentLeave = () => {
        handleReset();
      };
      parent.addEventListener("mousemove", onParentMove);
      parent.addEventListener("mouseleave", onParentLeave);
      return () => {
        parent.removeEventListener("mousemove", onParentMove);
        parent.removeEventListener("mouseleave", onParentLeave);
        handleReset();
      };
    }
  }, [actionArea, shouldReduceMotion, isTouchDevice, handlePointerMove, handleReset]);

  // Reduced motion or touch: render standard static container
  if (shouldReduceMotion || isTouchDevice) {
    return (
      <div className={cn("inline-flex", className)} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={(e) => {
        if (actionArea === "self") {
          if (e.pointerType === "touch") return;
          handlePointerMove(e.clientX, e.clientY);
        }
      }}
      onPointerLeave={() => {
        if (actionArea === "self") {
          handleReset();
        }
      }}
      onPointerCancel={handleReset}
      onBlur={handleReset}
      style={{
        x: springX,
        y: springY,
        ...style,
      }}
      className={cn("inline-flex will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
