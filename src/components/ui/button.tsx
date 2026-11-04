import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "shoreline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      type = "button",
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ocean-500 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.96] motion-reduce:active:scale-100 select-none";

    const variants = {
      // Primary: Ocean blue solid
      primary:
        "bg-ocean-600 text-white hover:bg-ocean-700 shadow-sm hover:shadow",
      // Secondary: Soft Shoreline surface
      secondary:
        "bg-shoreline-100 text-shoreline-900 hover:bg-shoreline-200 border border-shoreline-200",
      // Shoreline Accent: Used inside hero/coastal panels
      shoreline:
        "bg-shoreline-300 text-neutral-900 hover:bg-shoreline-400 font-medium",
      // Outline: Subtle border with clear contrast
      outline:
        "border border-neutral-300 bg-transparent text-neutral-800 hover:bg-neutral-50 hover:border-neutral-400",
      // Ghost: Clean text button
      ghost:
        "bg-transparent text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100/60",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 h-8 gap-1.5",
      md: "text-sm px-5 py-2.5 h-11 gap-2",
      lg: "text-base px-7 py-3.5 h-13 gap-2.5",
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

