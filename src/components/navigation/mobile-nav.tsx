"use client";

import * as React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { X, ArrowRight } from "lucide-react";
import { LanguageSwitcher } from "./language-switcher";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const t = useTranslations("common.nav");
  const tCommon = useTranslations("common");
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      // Focus close button on open
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const navItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/accommodation", label: t("accommodation") },
    { href: "/facilities", label: t("facilities") },
    { href: "/gallery", label: t("gallery") },
    { href: "/location", label: t("location") },
    { href: "/contact", label: t("contact") },
  ];

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      ref={dialogRef}
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-neutral-900/95 text-white backdrop-blur-md transition-opacity duration-200"
    >
      {/* Top Bar with Logo and Close */}
      <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-800">
        <Logo isDark />
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 transition-colors"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between text-2xl font-editorial tracking-wide text-neutral-200 hover:text-white transition-colors py-2"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-shoreline-300" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer info & CTA */}
        <div className="pt-8 border-t border-neutral-800 space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-neutral-400">
              Language
            </span>
            <LanguageSwitcher variant="dark" />
          </div>

          <Link
            href="/booking"
            onClick={onClose}
            className="w-full inline-flex items-center justify-center px-6 py-3.5 bg-ocean-600 hover:bg-ocean-700 text-white rounded-full font-medium text-sm tracking-wide transition-colors shadow-md active:scale-[0.98]"
          >
            {t("book_now")}
          </Link>

          <p className="text-[11px] text-neutral-500 text-center">
            {tCommon("fictional_demo")}
          </p>
        </div>
      </nav>
    </div>
  );
}

