import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CtaBanner() {
  const t = useTranslations("home.cta_banner");

  return (
    <section className="py-20 lg:py-28 bg-shoreline-100/60">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-shoreline-800 text-white p-8 sm:p-14 lg:p-18 shadow-2xl text-center space-y-6 max-w-5xl mx-auto">
          {/* Subtle Background Pattern / Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-ocean-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-shoreline-400/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
            <span className="inline-block px-3.5 py-1 text-xs uppercase tracking-widest font-medium bg-white/10 text-shoreline-200 rounded-full border border-white/20 backdrop-blur-xs">
              Direct Concierge Inquiry
            </span>

            <h2 className="text-3xl sm:text-5xl font-display font-normal text-white leading-display tracking-tight text-balance">
              {t("heading")}
            </h2>

            <p className="text-sm sm:text-base text-neutral-200/90 leading-relaxed font-sans text-pretty">
              {t("description")}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-shoreline-100 text-neutral-900 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-150 shadow-lg active:scale-[0.96]"
              >
                <MessageCircle className="w-4 h-4 text-ocean-600" />
                <span>{t("button")}</span>
                <ArrowRight className="w-4 h-4 text-ocean-600" />
              </Link>
            </div>

            <p className="text-[11px] text-neutral-300/80 pt-2 font-sans">
              * Inquiries are prepared as formatted WhatsApp messages. Manual send required.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

