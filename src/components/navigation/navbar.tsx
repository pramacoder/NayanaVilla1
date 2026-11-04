"use client";

import * as React from "react";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Menu } from "lucide-react";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { MobileNav } from "./mobile-nav";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

interface NavbarProps {
  className?: string;
  forceSolid?: boolean;
}

export function Navbar({ className, forceSolid = false }: NavbarProps) {
  const t = useTranslations("common.nav");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(forceSolid);
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  React.useEffect(() => {
    if (forceSolid) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceSolid]);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/accommodation", label: t("accommodation") },
    { href: "/facilities", label: t("facilities") },
    { href: "/gallery", label: t("gallery") },
    { href: "/location", label: t("location") },
    { href: "/contact", label: t("contact") },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/70 shadow-xs py-3.5 is-scrolled"
            : "bg-gradient-to-b from-neutral-900/60 via-neutral-900/20 to-transparent py-5 text-white",
          className
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Brand Logo */}
          <Logo isDark={false} />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs uppercase tracking-wider font-medium transition-colors duration-150 py-1 relative",
                    isScrolled
                      ? isActive
                        ? "text-ocean-600 font-semibold"
                        : "text-neutral-700 hover:text-neutral-950"
                      : isActive
                      ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white"
                      : "text-white/85 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Area */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher
              variant={isScrolled ? "light" : "transparent"}
            />
            <Link
              href="/booking"
              className={cn(
                "inline-flex items-center justify-center px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-150 active:scale-[0.96]",
                isScrolled
                  ? "bg-ocean-600 hover:bg-ocean-700 text-white shadow-sm"
                  : "bg-white hover:bg-shoreline-100 text-neutral-900 shadow-md backdrop-blur-xs"
              )}
            >
              {t("book_now")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher
              variant={isScrolled ? "light" : "transparent"}
            />
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              className={cn(
                "p-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500",
                isScrolled
                  ? "text-neutral-800 hover:bg-neutral-100"
                  : "text-white hover:bg-white/10"
              )}
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}

