"use client";

import React, { useRef, useCallback, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type SpringOptions,
} from "motion/react";
import { cn } from "@/lib/utils";
import { MOTION_SPRINGS } from "@/lib/motion";

export type TiltProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  /** Maximum rotation angle in degrees (default: 7.5 for clear, elegant 3D tilt) */
  rotationFactor?: number;
  /** Reverses the rotation direction relative to mouse cursor (default: false) */
  isReverse?: boolean;
  /** Spring physics options for smooth lag and restoration */
  springOptions?: SpringOptions;
  /** CSS 3D perspective distance in pixels (default: 1000) */
  perspective?: number;
};

/**
 * Tilt Component (Motion Primitives)
 * 
 * Adds subtle, pointer-responsive 3D depth tilt to cards and UI containers.
 * Uses a stationary perspective viewport container to give genuine 3D perspective foreshortening
 * to its spring-smoothed rotating child.
 * Automatically disables on touch/coarse-pointer devices and respects prefers-reduced-motion.
 */
export function Tilt({
  children,
  className,
  style,
  rotationFactor = 7.5,
  isReverse = false,
  springOptions = MOTION_SPRINGS.gentle,
  perspective = 1000,
}: TiltProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(pointer: coarse)");
      setIsTouchDevice(mediaQuery.matches);
      const handler = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
      mediaQuery.addEventListener("change", handler);
      return () => mediaQuery.removeEventListener("change", handler);
    }
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, springOptions);
  const ySpring = useSpring(y, springOptions);

  const multiplier = isReverse ? -1 : 1;

  // Mouse Y drives X-axis rotation (tilt up/down)
  // When cursor is at top (yPct < 0), card tilts towards cursor
  const rotateX = useTransform(
    ySpring,
    [-0.5, 0.5],
    [-rotationFactor * multiplier, rotationFactor * multiplier]
  );

  // Mouse X drives Y-axis rotation (tilt left/right)
  // When cursor is at right (xPct > 0), card tilts towards cursor
  const rotateY = useTransform(
    xSpring,
    [-0.5, 0.5],
    [rotationFactor * multiplier, -rotationFactor * multiplier]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (shouldReduceMotion || isTouchDevice || e.pointerType === "touch" || !containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Normalize coordinates to [-0.5, 0.5] from element center
      const xPct = mouseX / rect.width - 0.5;
      const yPct = mouseY / rect.height - 0.5;

      x.set(xPct);
      y.set(yPct);
    },
    [shouldReduceMotion, isTouchDevice, x, y]
  );

  const handlePointerLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  // Reduced motion or touch: render standard static container
  if (shouldReduceMotion || isTouchDevice) {
    return (
      <div className={cn("relative", className)} style={style}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
      style={{
        perspective: `${perspective}px`,
        ...style,
      }}
      className={cn("relative", className)}
    >
      <motion.div
        style={{
          transformStyle: "preserve-3d",
          rotateX,
          rotateY,
        }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
