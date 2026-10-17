"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { MOTION_EASINGS } from "@/lib/motion";

const INTRO_SESSION_KEY = "godwin_intro_seen";

export function IntroAnimation() {
  const shouldReduceMotion = useReducedMotion();
  const [destroyed, setDestroyed] = React.useState(false);
  const [isExiting, setIsExiting] = React.useState(false);

  const handleDismiss = React.useCallback(() => {
    setIsExiting(true);
    document.body.style.overflow = "";
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, "true");
      document.documentElement.classList.add("intro-seen");
    } catch {}
  }, []);

  React.useEffect(() => {
    const isForce =
      typeof window !== "undefined" &&
      window.location.search.indexOf("intro=true") !== -1;

    // If reduced motion is requested (and not forcing preview), immediately dismiss
    if (shouldReduceMotion && !isForce) {
      try {
        sessionStorage.setItem(INTRO_SESSION_KEY, "true");
        document.documentElement.classList.add("intro-seen");
      } catch {}
      setDestroyed(true);
      return;
    }

    // Check if user already saw the intro in this tab session
    if (!isForce) {
      try {
        if (sessionStorage.getItem(INTRO_SESSION_KEY)) {
          document.documentElement.classList.add("intro-seen");
          setDestroyed(true);
          return;
        }
      } catch {}
    }

    // First visit in session: mark session and lock scrolling for the 1.4s intro
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, "true");
    } catch {}

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Begin exit slide-up at 1.35s (duration 0.6s -> completes around 1.95s)
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
      document.body.style.overflow = originalOverflow;
    }, 1350);

    // Hard fallback timer at 2.4s to guarantee component unmounts & cleanup
    const cleanupTimer = setTimeout(() => {
      setDestroyed(true);
      document.body.style.overflow = originalOverflow;
      document.documentElement.classList.add("intro-seen");
    }, 2400);

    // Keyboard dismissal for quick exit
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        handleDismiss();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(cleanupTimer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [shouldReduceMotion, handleDismiss]);

  if (destroyed) {
    return null;
  }

  return (
    <motion.div
      id="portfolio-intro-overlay"
      role="presentation"
      aria-hidden="true"
      onClick={handleDismiss}
      initial={{ y: 0, opacity: 1 }}
      animate={isExiting ? { y: "-100%" } : { y: 0, opacity: 1 }}
      transition={
        isExiting
          ? { duration: 0.6, ease: MOTION_EASINGS.easeOut }
          : { duration: 0 }
      }
      onAnimationComplete={() => {
        if (isExiting) {
          setDestroyed(true);
          document.body.style.overflow = "";
          document.documentElement.classList.add("intro-seen");
        }
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#08090C] text-white select-none pointer-events-auto overflow-hidden cursor-pointer"
      title="Click or press Escape to skip intro"
    >
      {/* Subtle Cyan & Purple Ambient Glow */}
      <div
        aria-hidden="true"
        className="absolute w-[500px] h-[500px] sm:w-[680px] sm:h-[680px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, rgba(124, 58, 237, 0.16) 0%, rgba(6, 182, 212, 0.07) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-2xl">
        {/* Subtle Custom GA Monogram Brand Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.45,
            ease: MOTION_EASINGS.easeOut,
            delay: 0.1,
          }}
          className="mb-5 sm:mb-6"
        >
          <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur-md p-1.5 shadow-[0_0_35px_rgba(124,58,237,0.25)] flex items-center justify-center">
            <Image
              src="/images/godwin-apedo-icon.png"
              alt="GA Monogram"
              width={60}
              height={60}
              priority
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>

        {/* Main Identity: GODWIN APEDO */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: MOTION_EASINGS.easeOut,
            delay: 0.2,
          }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[0.16em] sm:tracking-[0.22em] uppercase leading-tight bg-gradient-to-b from-white via-slate-100 to-slate-400 bg-clip-text text-transparent"
        >
          GODWIN APEDO
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.45,
            ease: MOTION_EASINGS.easeOut,
            delay: 0.45,
          }}
          className="mt-3.5 sm:mt-4 text-xs sm:text-sm font-mono tracking-[0.15em] sm:tracking-[0.22em] text-slate-400 uppercase"
        >
          Computer Science Student <span className="text-purple-400 mx-1.5 sm:mx-2">·</span> Software Builder
        </motion.p>
      </div>
    </motion.div>
  );
}
