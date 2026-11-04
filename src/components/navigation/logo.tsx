import Image from "next/image";
import { Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export function Logo({ className, isDark = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 transition-opacity duration-150 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 rounded-sm",
        className
      )}
      aria-label="Nayana Villa - Home"
    >
      {/* Editorial Minimalist Brand Emblem */}
      <div
        className={cn(
          "w-9 h-9 rounded-full flex items-center justify-center border transition-colors duration-200 overflow-hidden p-1.5",
          isDark
            ? "border-neutral-700 bg-neutral-800"
            : "border-white/30 bg-white/15 backdrop-blur-xs group-[.is-scrolled]:border-shoreline-300 group-[.is-scrolled]:bg-shoreline-100"
        )}
      >
        <Image
          src="/icon.png"
          alt="Nayana Villa"
          width={28}
          height={28}
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col text-left">
        <span
          className={cn(
            "font-editorial text-lg tracking-[0.2em] uppercase font-medium leading-none transition-colors duration-200",
            isDark
              ? "text-white"
              : "text-white group-[.is-scrolled]:text-neutral-900"
          )}
        >
          Nayana
        </span>
        <span
          className={cn(
            "text-[9px] tracking-[0.28em] uppercase font-sans font-normal opacity-80 mt-1 transition-colors duration-200",
            isDark
              ? "text-neutral-400"
              : "text-white/80 group-[.is-scrolled]:text-neutral-500"
          )}
        >
          Villa Bali
        </span>
      </div>
    </Link>
  );
}

