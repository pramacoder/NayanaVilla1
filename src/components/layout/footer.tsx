import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/navigation/logo";
import { LanguageSwitcher } from "@/components/navigation/language-switcher";
import { MapPin, Phone, Mail, Instagram, Compass } from "lucide-react";

export function Footer() {
  const tNav = useTranslations("common.nav");
  const tCommon = useTranslations("common");

  const navLinks = [
    { href: "/", label: tNav("home") },
    { href: "/about", label: tNav("about") },
    { href: "/accommodation", label: tNav("accommodation") },
    { href: "/facilities", label: tNav("facilities") },
    { href: "/gallery", label: tNav("gallery") },
    { href: "/location", label: tNav("location") },
    { href: "/contact", label: tNav("contact") },
    { href: "/booking", label: tNav("book_now") },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-18 pb-12 border-t border-neutral-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-neutral-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <Logo isDark />
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed font-sans">
              Where Nature Meets Serenity. A fictional luxury tropical sanctuary
              conceptualized for peaceful escapes, natural architecture, and
              slow coastal living in Ubud, Bali.
            </p>
            <div className="flex items-center gap-4 text-xs text-shoreline-300">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Ubud, Bali, Indonesia
              </span>
              <span className="inline-block w-1 h-1 rounded-full bg-neutral-700" />
              <span className="flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                Coastal Concept
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm font-sans">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors duration-150 inline-block py-0.5"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Inquiries */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-medium">
              Inquiries & Concierge
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              For demo inquiries and concept consultations, connect with us
              through our simulated concierge channels.
            </p>
            <div className="space-y-2 text-sm text-neutral-300">
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-shoreline-300" aria-hidden="true" />
                <span>+62 812 3456 7890 (Demo WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-shoreline-300" aria-hidden="true" />
                <span>concierge@nayanavilla.demo</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-neutral-500">
                Language:
              </span>
              <LanguageSwitcher variant="dark" />
            </div>
          </div>
        </div>

        {/* Bottom Bar & Demo Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="text-center md:text-left">
            &copy; {new Date().getFullYear()} Nayana Villa.{" "}
            {tCommon("fictional_demo")}
          </p>
          <p className="text-neutral-500 text-[11px] max-w-md text-center md:text-right">
            All villa names, rates, and availability are simulated for portfolio
            demonstration purposes.
          </p>
        </div>
      </Container>
    </footer>
  );
}

