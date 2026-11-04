"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface LanguageSwitcherProps {
  className?: string;
  variant?: "light" | "dark" | "transparent";
}

export function LanguageSwitcher({
  className,
  variant = "light",
}: LanguageSwitcherProps) {
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    const nextLocale = currentLocale === "en" ? "id" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  const styleVariants = {
    light:
      "bg-white/80 hover:bg-white text-neutral-800 border border-neutral-200/80 shadow-xs",
    dark:
      "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700",
    transparent:
      "bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm",
  };

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 active:scale-[0.96]",
        styleVariants[variant],
        className
      )}
      aria-label={`Switch language from ${currentLocale === "en" ? "English" : "Bahasa Indonesia"} to ${currentLocale === "en" ? "Bahasa Indonesia" : "English"}`}
    >
      <Globe className="w-3.5 h-3.5 opacity-80" aria-hidden="true" />
      <span className="uppercase">{currentLocale === "en" ? "ID" : "EN"}</span>
    </button>
  );
}

