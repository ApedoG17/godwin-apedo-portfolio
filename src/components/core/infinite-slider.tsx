"use client";

import React, { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import { motion, useMotionValue, animate, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { MOTION_EASINGS } from "@/lib/motion";

export type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
  isPaused?: boolean;
  draggable?: boolean;
};

const TOTAL_COPIES = 4;

function wrap(val: number, min: number, max: number): number {
  const range = max - min;
  if (range <= 0) return min;
  return ((((val - min) % range) + range) % range) + min;
}

export function InfiniteSlider({
  children,
  gap = 20,
  speed = 40,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className,
  isPaused = false,
  draggable = true,
}: InfiniteSliderProps) {
  const isHoriz = direction === "horizontal";
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cycleDistance, setCycleDistance] = useState(0);
  const translation = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  // Drag & pointer tracking refs
  const isDraggingRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const startPointerPosRef = useRef(0);
  const startTranslationRef = useRef(0);
  const lastPointerPosRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const isHoveredRef = useRef(false);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Measure content size with native ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateSize = () => {
      const fullSize = isHoriz ? el.scrollWidth : el.scrollHeight;
      const singleCycle = (fullSize + gap) / TOTAL_COPIES;
      if (singleCycle > 0) {
        setCycleDistance((prev) => {
          if (Math.abs(prev - singleCycle) < 0.5) return prev;
          return singleCycle;
        });
        if (translation.get() === 0) {
          translation.set(-singleCycle);
        }
      }
    };

    updateSize();

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, [gap, isHoriz, translation]);

  const startLoopRef = useRef<() => void>(() => {});

  // Self-looping animation loop without React state re-renders
  const startLoop = useCallback(() => {
    controlsRef.current?.stop();

    if (
      cycleDistance === 0 ||
      shouldReduceMotion ||
      isPaused ||
      currentSpeed === 0 ||
      isDraggingRef.current
    ) {
      return;
    }

    const min = -2 * cycleDistance;
    const max = -cycleDistance;
    const from = reverse ? min : max;
    const to = reverse ? max : min;

    let currentPos = wrap(translation.get(), min, max);

    // If remaining distance is less than 2px, reset to start position
    const remaining = Math.abs(to - currentPos);
    if (remaining < 2) {
      translation.set(from);
      currentPos = from;
    } else {
      translation.set(currentPos);
    }

    const distanceToTravel = Math.abs(to - currentPos);
    const speedVal = currentSpeed > 0 ? currentSpeed : 40;
    const duration = distanceToTravel / speedVal;

    controlsRef.current = animate(translation, to, {
      ease: "linear",
      duration,
      onComplete: () => {
        translation.set(from);
        startLoopRef.current();
      },
    });
  }, [
    cycleDistance,
    shouldReduceMotion,
    isPaused,
    currentSpeed,
    reverse,
    translation,
  ]);

  useEffect(() => {
    startLoopRef.current = startLoop;
    startLoop();
    return () => {
      controlsRef.current?.stop();
    };
  }, [startLoop]);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
    if (speedOnHover !== undefined) {
      setCurrentSpeed(speedOnHover);
    }
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (speedOnHover !== undefined) {
      setCurrentSpeed(speed);
    }
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!draggable || e.button !== 0 || cycleDistance === 0 || shouldReduceMotion) return;

    controlsRef.current?.stop();
    isDraggingRef.current = true;
    setIsDragging(true);

    const pos = isHoriz ? e.clientX : e.clientY;
    startPointerPosRef.current = pos;
    lastPointerPosRef.current = pos;
    lastPointerTimeRef.current = performance.now();
    startTranslationRef.current = translation.get();
    velocityRef.current = 0;

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // Ignore if setPointerCapture is unsupported
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || cycleDistance === 0) return;

    const pos = isHoriz ? e.clientX : e.clientY;
    const now = performance.now();
    const dt = now - lastPointerTimeRef.current;
    if (dt > 8) {
      velocityRef.current = (pos - lastPointerPosRef.current) / dt;
      lastPointerPosRef.current = pos;
      lastPointerTimeRef.current = now;
    }

    const delta = pos - startPointerPosRef.current;
    const rawPos = startTranslationRef.current + delta;
    const min = -2 * cycleDistance;
    const max = -cycleDistance;
    const wrappedPos = wrap(rawPos, min, max);
    translation.set(wrappedPos);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if releasePointerCapture fails
    }

    const min = -2 * cycleDistance;
    const max = -cycleDistance;
    const currentPos = translation.get();
    const v = velocityRef.current;

    // Check if user flicked with momentum
    if (Math.abs(v) > 0.15 && cycleDistance > 0) {
      const glideDist = Math.max(-500, Math.min(500, v * 220));
      const targetPos = currentPos + glideDist;
      const duration = Math.min(0.65, Math.max(0.25, Math.abs(glideDist) / 500));

      controlsRef.current = animate(translation, targetPos, {
        ease: MOTION_EASINGS.easeOut,
        duration,
        onComplete: () => {
          const finalWrapped = wrap(translation.get(), min, max);
          translation.set(finalWrapped);
          if (!isPaused && !isHoveredRef.current && currentSpeed > 0) {
            startLoop();
          }
        },
      });
    } else {
      const finalWrapped = wrap(currentPos, min, max);
      translation.set(finalWrapped);
      if (!isPaused && !isHoveredRef.current && currentSpeed > 0) {
        startLoop();
      }
    }
  };

  const handlePointerCancel = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    setIsDragging(false);
    const min = -2 * cycleDistance;
    const max = -cycleDistance;
    translation.set(wrap(translation.get(), min, max));
    if (!isPaused && !isHoveredRef.current && currentSpeed > 0) {
      startLoop();
    }
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (cycleDistance === 0 || shouldReduceMotion) return;

    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY)
      ? e.deltaX
      : (e.shiftKey ? e.deltaY : 0);

    if (Math.abs(delta) > 1) {
      controlsRef.current?.stop();
      const min = -2 * cycleDistance;
      const max = -cycleDistance;
      const newPos = wrap(translation.get() - delta, min, max);
      translation.set(newPos);

      if (!isPaused && !isHoveredRef.current && currentSpeed > 0) {
        if (wheelTimeoutRef.current) clearTimeout(wheelTimeoutRef.current);
        wheelTimeoutRef.current = setTimeout(() => {
          startLoop();
        }, 400);
      }
    }
  };

  const renderClones = (copyIndex: number) => {
    return React.Children.map(children, (child, idx) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(
          child as React.ReactElement<{
            "aria-hidden"?: boolean;
            tabIndex?: number;
            key?: React.Key;
          }>,
          {
            "aria-hidden": true,
            tabIndex: -1,
            key: `clone-${copyIndex}-${idx}`,
          }
        );
      }
      return child;
    });
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onWheel={handleWheel}
      onDragStart={(e) => e.preventDefault()}
      className={cn(
        shouldReduceMotion ? "overflow-x-auto" : "overflow-hidden",
        "select-none touch-pan-y",
        draggable && !shouldReduceMotion && (isDragging ? "cursor-grabbing" : "cursor-grab"),
        className
      )}
    >
      <motion.div
        ref={containerRef}
        className={cn(
          "flex",
          isHoriz ? "w-max" : "flex-col h-max"
        )}
        style={{
          [isHoriz ? "x" : "y"]: translation,
          gap: `${gap}px`,
        }}
      >
        {/* Copy 0: clone for wrap buffer to the left */}
        {renderClones(0)}

        {/* Copy 1: original accessible children */}
        {children}

        {/* Copy 2: clone for wrap buffer to the right */}
        {renderClones(2)}

        {/* Copy 3: clone for extra buffer on ultra-wide screens */}
        {renderClones(3)}
      </motion.div>
    </div>
  );
}
