import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "cyan" | "blue" | "outline" | "muted";
  size?: "sm" | "md";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  size = "sm",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-mono transition-colors select-none";

  const variantStyles = {
    default:
      "bg-slate-100 text-slate-700 border border-slate-200",
    cyan:
      "bg-purple-50 text-purple-700 border border-purple-200",
    blue:
      "bg-blue-50 text-blue-700 border border-blue-200",
    outline:
      "bg-transparent text-slate-500 border border-slate-200",
    muted:
      "bg-slate-50 text-slate-500 border border-transparent",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5 rounded-md gap-1.5",
    md: "text-xs px-2.5 py-1 rounded-md gap-2",
  };

  const dotColors = {
    default: "bg-slate-400",
    cyan: "bg-purple-600 shadow-[0_0_8px_rgba(124,58,237,0.4)]",
    blue: "bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.4)]",
    outline: "bg-slate-400",
    muted: "bg-slate-400",
  };

  return (
    <span
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={cn("h-1.5 w-1.5 rounded-full shrink-0", dotColors[variant])}
        />
      )}
      {children}
    </span>
  );
}
