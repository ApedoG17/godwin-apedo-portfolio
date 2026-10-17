"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  MOTION_DURATIONS,
  MOTION_EASINGS,
  MOTION_SPRINGS,
} from "@/lib/motion";
import { ScrollProgress } from "@/components/core/scroll-progress";
import { Dock, DockItem } from "@/components/core/dock";

interface NavItem {
  label: string;
  href: string;
  isExternalRoute?: boolean;
}

export function Navbar() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";
  const shouldReduceMotion = useReducedMotion();

  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive] = React.useState(isContactPage ? "Contact" : "Home");

  const navItems: NavItem[] = React.useMemo(() => {
    if (isContactPage) {
      return [
        { label: "Home", href: "/#top" },
        { label: "About", href: "/#about" },
        { label: "What I Do", href: "/#services" },
        { label: "Work", href: "/#work" },
        { label: "Contact", href: "/contact", isExternalRoute: true },
      ];
    }
    return [
      { label: "Home", href: "#top" },
      { label: "About", href: "#about" },
      { label: "What I Do", href: "#services" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "/contact", isExternalRoute: true },
    ];
  }, [isContactPage]);

  React.useEffect(() => {
    if (isContactPage) {
      setActive("Contact");
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section intersection detection for active state
      const sections = [
        { id: "top", label: "Home", top: 0 },
        { id: "about", label: "About" },
        { id: "services", label: "What I Do" },
        { id: "work", label: "Work" },
        { id: "contact", label: "Contact" },
      ].map((item) => {
        if (item.id === "top") return { ...item, top: 0 };
        const el = document.getElementById(item.id);
        return {
          ...item,
          top: el ? el.offsetTop - 120 : Infinity,
        };
      });

      const scrollPos = window.scrollY;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPos >= sections[i].top - 100) {
          setActive(sections[i].label);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isContactPage]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 pt-3 sm:pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none transition-all duration-300">
      <nav
        aria-label="Main Navigation"
        className={cn(
          "relative overflow-hidden pointer-events-auto max-w-6xl mx-auto glass-pill rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300",
          scrolled
            ? "border-purple-200/80 shadow-[0_12px_32px_rgba(124,58,237,0.08),0_2px_8px_rgba(0,0,0,0.04)] bg-white/85"
            : "border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        )}
      >
        {/* Brand */}
        <Link
          href={isContactPage ? "/" : "#top"}
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-full px-1"
          aria-label="Godwin Apedo — Home"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-300 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:border-purple-500 transition-all shadow-sm bg-white">
            <Image
              src="/images/godwin-apedo-icon.png"
              alt="Godwin Apedo logo"
              width={32}
              height={32}
              priority
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-slate-900 font-bold text-sm tracking-tight group-hover:text-purple-600 transition-colors">
              Godwin
            </span>
            <span className="text-purple-600 font-bold text-xs hidden sm:inline">.dev</span>
          </div>
        </Link>

        {/* Desktop Nav Items with Restrained Dock Proximity Effect */}
        <Dock
          magnification={1.08}
          distance={120}
          className="hidden md:flex items-center gap-1 lg:gap-1.5"
        >
          {navItems.map((item) => {
            const isActive = active === item.label;
            const Element = item.isExternalRoute ? Link : "a";

            return (
              <DockItem key={item.label}>
                <Element
                  href={item.href}
                  onClick={() => {
                    if (!item.isExternalRoute) {
                      setActive(item.label);
                    }
                  }}
                  className={cn(
                    "relative text-xs lg:text-sm font-medium px-3.5 py-1.5 rounded-full transition-colors duration-200 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600",
                    isActive
                      ? "text-purple-700 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="navbar-pill"
                      className="absolute inset-0 rounded-full bg-purple-100/70 border border-purple-200/80 shadow-[0_2px_8px_rgba(124,58,237,0.08)]"
                      transition={
                        shouldReduceMotion
                          ? { duration: MOTION_DURATIONS.instant }
                          : { type: "spring", ...MOTION_SPRINGS.navPill }
                      }
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Element>
              </DockItem>
            );
          })}
        </Dock>

        {/* Desktop CTA Button — Dark, near-black primary button */}
        <div className="hidden sm:flex items-center gap-2.5">
          <Link
            href={isContactPage ? "#contact-form" : "/contact"}
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95 bg-slate-900 hover:bg-slate-800 text-white shadow-[0_2px_12px_rgba(15,23,42,0.18)] hover:shadow-[0_4px_16px_rgba(124,58,237,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600"
          >
            <span>Let&apos;s Talk</span>
            <MessageSquare className="h-3 w-3" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close menu" : "Open navigation menu"}
          className="md:hidden flex items-center justify-center h-8 w-8 rounded-full border border-slate-200/90 text-slate-700 hover:text-purple-600 hover:border-purple-300 bg-white/80 transition-colors cursor-pointer"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>

        {/* Luminous scroll progress indicator nestled within the bottom curvature of the navbar */}
        <ScrollProgress className="absolute bottom-0 inset-x-6 h-[2.5px] rounded-full opacity-100 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 shadow-[0_0_8px_rgba(139,92,246,0.4)]" />
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : -8,
              scale: shouldReduceMotion ? 1 : 0.98,
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{
              opacity: 0,
              y: shouldReduceMotion ? 0 : -8,
              scale: shouldReduceMotion ? 1 : 0.98,
            }}
            transition={{
              duration: shouldReduceMotion ? MOTION_DURATIONS.instant : MOTION_DURATIONS.normal,
              ease: MOTION_EASINGS.easeOut,
            }}
            className="pointer-events-auto md:hidden max-w-sm mx-auto mt-2 p-5 rounded-3xl bg-white/95 backdrop-blur-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex flex-col gap-2"
          >
            {navItems.map((item) => {
              const Element = item.isExternalRoute ? Link : "a";
              return (
                <Element
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActive(item.label);
                    closeMenu();
                  }}
                  className={cn(
                    "text-sm font-medium px-4 py-2.5 rounded-xl transition-colors flex items-center justify-between",
                    active === item.label
                      ? "bg-purple-100/70 text-purple-700 border border-purple-200/80 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
                  )}
                >
                  <span>{item.label}</span>
                  {active === item.label && (
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                  )}
                </Element>
              );
            })}

            <div className="pt-3 mt-1 border-t border-slate-200/80 flex flex-col gap-2">
              <Link
                href={isContactPage ? "#contact-form" : "/contact"}
                onClick={closeMenu}
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-bold py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
              >
                <span>Let&apos;s Talk</span>
                <MessageSquare className="h-3.5 w-3.5" />
              </Link>

              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-slate-600 hover:text-purple-600 py-1"
              >
                <span>GitHub Profile</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
