"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
  type SpringOptions,
} from "motion/react";
import { cn } from "@/lib/utils";
import { MOTION_SPRINGS } from "@/lib/motion";

interface DockContextType {
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  magnification: number;
  distance: number;
}

const DockContext = createContext<DockContextType | null>(null);

function useDock() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error("useDock must be used within a <Dock /> container");
  }
  return context;
}

export type DockProps = {
  children: React.ReactNode;
  className?: string;
  spring?: SpringOptions;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
};

/**
 * Dock Container Component (Motion Primitives)
 * 
 * Tracks mouse position and provides dock context for smooth proximity magnification.
 * Works seamlessly with both icon-based docks and text-labelled navigation bars.
 */
export function Dock({
  children,
  className,
  spring = MOTION_SPRINGS.gentle,
  magnification = 1.08,
  distance = 120,
  direction = "middle",
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const shouldReduceMotion = useReducedMotion();

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (shouldReduceMotion) return;
      mouseX.set(e.clientX);
    },
    [mouseX, shouldReduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(Infinity);
  }, [mouseX]);

  const contextValue = useMemo(
    () => ({
      mouseX,
      spring,
      magnification,
      distance,
    }),
    [mouseX, spring, magnification, distance]
  );

  const alignmentClass =
    direction === "top"
      ? "items-start"
      : direction === "bottom"
      ? "items-end"
      : "items-center";

  return (
    <DockContext.Provider value={contextValue}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn("flex", alignmentClass, className)}
      >
        {children}
      </motion.div>
    </DockContext.Provider>
  );
}

export type DockItemProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
};

/**
 * DockItem Component (Motion Primitives)
 * 
 * Individual dock item that scales smoothly based on mouse proximity or keyboard focus.
 * Uses GPU-accelerated transform scale to completely prevent layout shifts (CLS = 0).
 */
export function DockItem({
  children,
  className,
  onClick,
  style,
}: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { mouseX, spring, magnification, distance } = useDock();
  const shouldReduceMotion = useReducedMotion();
  const [isFocused, setIsFocused] = useState(false);

  // Calculate distance between mouse X and center of this item
  const distanceCalc = useTransform(mouseX, (val: number) => {
    if (shouldReduceMotion || val === Infinity) return distance;
    const bounds = ref.current?.getBoundingClientRect();
    if (!bounds) return distance;
    return val - bounds.x - bounds.width / 2;
  });

  // Map distance to a subtle, restrained scale factor
  const scaleRaw = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [1, magnification, 1]
  );

  const scaleSpring = useSpring(scaleRaw, spring);

  if (shouldReduceMotion) {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn("relative", className)}
        style={style}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={{
        scale: isFocused ? magnification : scaleSpring,
        transformOrigin: "center center",
        ...style,
      }}
      className={cn("relative will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

export type DockLabelProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Optional DockLabel component for tooltip or text labels
 */
export function DockLabel({ children, className }: DockLabelProps) {
  return (
    <span
      className={cn(
        "text-xs font-mono font-medium text-content-secondary select-none pointer-events-none",
        className
      )}
    >
      {children}
    </span>
  );
}

export type DockIconProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Optional DockIcon wrapper component
 */
export function DockIcon({ children, className }: DockIconProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center w-full h-full",
        className
      )}
    >
      {children}
    </div>
  );
}
