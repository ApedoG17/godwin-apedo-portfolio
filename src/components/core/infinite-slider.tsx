"use client";

import React, { useRef, useState, useEffect, type ReactNode } from "react";
import { motion, useMotionValue, animate, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
  isPaused?: boolean;
};

export function InfiniteSlider({
  children,
  gap = 20,
  speed = 40,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
  isPaused = false,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const containerRef = useRef<HTMLDivElement>(null);
  const [contentSize, setContentSize] = useState(0);
  const translation = useMotionValue(0);
  const [key, setKey] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  // Measure content size with native ResizeObserver (zero external dependencies)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      const isHoriz = direction === "horizontal";
      const fullSize = isHoriz ? el.scrollWidth : el.scrollHeight;
      // el contains children duplicated plus gap between them.
      // One full cycle distance including the connecting gap is exactly (fullSize + gap) / 2.
      setContentSize((fullSize + gap) / 2);
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [direction, gap, children]);

  useEffect(() => {
    if (contentSize === 0 || shouldReduceMotion) {
      translation.set(0);
      return;
    }

    if (isPaused || currentSpeed === 0) {
      return;
    }

    const totalDistance = contentSize;
    const from = reverse ? -totalDistance : 0;
    const to = reverse ? 0 : -totalDistance;

    const remainingDistance = Math.abs(translation.get() - to);
    if (remainingDistance < 1) {
      translation.set(from);
    }

    const currentPos = translation.get();
    const distanceToTravel = Math.abs(to - currentPos);
    const speedVal = currentSpeed > 0 ? currentSpeed : 40;
    const duration = distanceToTravel / speedVal;

    const controls = animate(translation, [currentPos, to], {
      ease: "linear",
      duration,
      onComplete: () => {
        translation.set(from);
        setKey((prev) => prev + 1);
      },
    });

    return () => controls?.stop();
  }, [
    key,
    translation,
    currentSpeed,
    contentSize,
    gap,
    direction,
    reverse,
    shouldReduceMotion,
    isPaused,
  ]);

  const handleMouseEnter = () => {
    if (speedOnHover !== undefined) {
      setCurrentSpeed(speedOnHover);
    }
  };

  const handleMouseLeave = () => {
    if (speedOnHover !== undefined) {
      setCurrentSpeed(speed);
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      className={cn(
        shouldReduceMotion ? "overflow-x-auto" : "overflow-hidden",
        "select-none",
        className
      )}
    >
      <motion.div
        ref={containerRef}
        className={cn(
          "flex",
          direction === "horizontal" ? "w-max" : "flex-col h-max"
        )}
        style={{
          [direction === "horizontal" ? "x" : "y"]: translation,
          gap: `${gap}px`,
        }}
      >
        {children}
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(
              child as React.ReactElement<{
                "aria-hidden"?: boolean;
                tabIndex?: number;
              }>,
              {
                "aria-hidden": true,
                tabIndex: -1,
              }
            );
          }
          return child;
        })}
      </motion.div>
    </div>
  );
}
