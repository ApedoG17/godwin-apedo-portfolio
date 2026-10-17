import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "secondary",
      size = "md",
      href,
      external,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
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

    const combinedClassName = cn(
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <a
          href={href}
          className={combinedClassName}
          {...(external
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
