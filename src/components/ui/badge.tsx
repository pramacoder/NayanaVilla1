import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "shoreline" | "ocean" | "neutral" | "outline";
}

export function Badge({
  variant = "shoreline",
  className,
  children,
  ...props
}: BadgeProps) {
  const variants = {
    shoreline:
      "bg-shoreline-100 text-shoreline-900 border border-shoreline-200/80",
    ocean:
      "bg-ocean-50 text-ocean-700 border border-ocean-100",
    neutral:
      "bg-neutral-100 text-neutral-700 border border-neutral-200",
    outline:
      "bg-transparent text-neutral-600 border border-neutral-300",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3.5 py-1 text-xs font-medium uppercase tracking-subtle-caps rounded-full select-none",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

