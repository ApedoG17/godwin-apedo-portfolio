"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOTION_DURATIONS } from "@/lib/motion";

export interface CopyTextButtonProps {
  textToCopy: string;
  label?: string;
  successLabel?: string;
  variant?: "primary" | "secondary" | "ghost" | "pill";
  size?: "xs" | "sm" | "md";
  className?: string;
  ariaAnnouncement?: string;
}

export function CopyTextButton({
  textToCopy,
  label = "Copy",
  successLabel = "Copied!",
  variant = "secondary",
  size = "sm",
  className,
  ariaAnnouncement,
}: CopyTextButtonProps) {
  const [copied, setCopied] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!textToCopy) return;

    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(textToCopy);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (!successful) throw new Error("Copy failed");
      }

      setCopied(true);
      setFailed(false);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setFailed(true);
      setTimeout(() => setFailed(false), 2500);
    }
  };

  const variantStyles = {
    primary:
      "bg-slate-900 text-white font-bold hover:bg-slate-800 shadow-sm",
    secondary:
      "bg-white dark:bg-white/[0.08] text-slate-700 dark:text-slate-100 hover:text-purple-700 dark:hover:text-purple-300 hover:bg-purple-50/60 dark:hover:bg-white/[0.14] border border-slate-200 dark:border-white/12 hover:border-purple-300 dark:hover:border-purple-400/40 shadow-2xs copy-btn-secondary",
    ghost:
      "bg-transparent text-slate-500 hover:text-purple-700 hover:bg-purple-50/60",
    pill:
      "bg-white/90 dark:bg-white/[0.08] text-slate-700 dark:text-slate-100 hover:text-purple-700 dark:hover:text-purple-300 border border-slate-200 dark:border-white/12 rounded-full px-3 py-1 shadow-2xs copy-btn-secondary",
  };

  const sizeStyles = {
    xs: "text-[11px] px-2 py-1 rounded-md gap-1 h-6",
    sm: "text-xs px-2.5 py-1.5 rounded-lg gap-1.5 h-7",
    md: "text-sm px-3.5 py-2 rounded-xl gap-2 h-9",
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={
        copied
          ? `${textToCopy} copied to clipboard`
          : ariaAnnouncement || `Copy ${textToCopy}`
      }
      className={cn(
        "inline-flex items-center justify-center font-mono font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 active:scale-95",
        variantStyles[variant],
        sizeStyles[size],
        copied && "border-purple-300 text-purple-700 bg-purple-50",
        failed && "border-red-400 text-red-600 bg-red-50",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="check"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: MOTION_DURATIONS.fast }}
            className="flex items-center text-purple-600 shrink-0"
          >
            <Check className="h-3 w-3" />
          </motion.span>
        ) : (
          <motion.span
            key="copy"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: MOTION_DURATIONS.fast }}
            className="flex items-center text-slate-400 shrink-0"
          >
            <Copy className="h-3 w-3" />
          </motion.span>
        )}
      </AnimatePresence>

      <span>{copied ? successLabel : failed ? "Failed" : label}</span>

      <span className="sr-only" role="status" aria-live="polite">
        {copied ? `${textToCopy} copied to clipboard` : ""}
      </span>
    </button>
  );
}
