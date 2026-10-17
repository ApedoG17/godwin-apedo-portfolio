"use client";

import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOTION_DURATIONS } from "@/lib/motion";

export interface CopyEmailButtonProps {
  email?: string;
  label?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  showAddress?: boolean;
  showMailtoLink?: boolean;
  className?: string;
}

export function CopyEmailButton({
  email,
  label = "Copy Email",
  variant = "secondary",
  size = "md",
  showAddress = false,
  showMailtoLink = false,
  className,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);

  const handleCopy = async () => {
    if (!email) return;

    try {
      if (typeof navigator !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for non-secure contexts
        const textArea = document.createElement("textarea");
        textArea.value = email;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand("copy");
        document.body.removeChild(textArea);
        if (!successful) throw new Error("Copy command unsuccessful");
      }

      setCopied(true);
      setErrorMessage(null);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setErrorMessage("Could not copy");
      setTimeout(() => setErrorMessage(null), 3000);
    }
  };

  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 active:scale-[0.98]";

  const variantStyles = {
    primary:
      "bg-slate-900 text-white font-semibold hover:bg-slate-800 hover:shadow-[0_4px_16px_rgba(15,23,42,0.18)] border border-slate-900",
    secondary:
      "bg-white text-slate-800 hover:bg-slate-50 hover:text-purple-700 border border-slate-200 hover:border-purple-300 shadow-2xs",
    outline:
      "bg-transparent text-slate-700 hover:text-purple-700 hover:bg-purple-50/50 border border-slate-200 hover:border-purple-300",
    ghost:
      "bg-transparent text-slate-600 hover:text-purple-700 hover:bg-purple-50/50 border border-transparent",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-lg gap-1.5 h-8",
    md: "text-sm px-4 py-2 rounded-lg gap-2 h-10",
    lg: "text-base px-5 py-2.5 rounded-xl gap-2.5 h-12",
  };

  // If no email address is provided yet, render a clean disabled button without guessing
  if (!email) {
    return (
      <button
        type="button"
        disabled
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          "opacity-60 cursor-not-allowed",
          className
        )}
        title="Email address will be available once confirmed"
        aria-label="Email address pending confirmation"
      >
        <Mail className="h-4 w-4 text-slate-400" />
        <span>Email Pending Confirmation</span>
      </button>
    );
  }

  const displayText = copied
    ? "Copied to clipboard!"
    : errorMessage
    ? errorMessage
    : showAddress
    ? email
    : label;

  return (
    <div className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Email copied to clipboard" : `Copy email: ${email}`}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          copied && "border-purple-400 text-purple-700 bg-purple-50/60",
          className
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.span
              key="check"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: MOTION_DURATIONS.fast }}
              className="text-purple-600 flex items-center shrink-0"
            >
              <Check className="h-4 w-4" />
            </motion.span>
          ) : (
            <motion.span
              key="copy"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.6, opacity: 0 }}
              transition={{ duration: MOTION_DURATIONS.fast }}
              className="text-slate-400 flex items-center shrink-0"
            >
              <Copy className="h-4 w-4" />
            </motion.span>
          )}
        </AnimatePresence>

        <span className="font-mono text-xs">{displayText}</span>

        {/* Live region for screen readers */}
        <span className="sr-only" role="status" aria-live="polite">
          {copied ? "Email address copied to clipboard." : ""}
        </span>
      </button>

      {showMailtoLink && (
        <a
          href={`mailto:${email}`}
          className={cn(
            baseStyles,
            variantStyles.outline,
            sizeStyles.sm,
            "h-8 px-2.5 text-slate-500 hover:text-purple-700"
          )}
          title={`Open mail client for ${email}`}
          aria-label={`Send email directly to ${email}`}
        >
          <Mail className="h-3.5 w-3.5" />
          <span className="text-xs">Direct Link</span>
        </a>
      )}
    </div>
  );
}
