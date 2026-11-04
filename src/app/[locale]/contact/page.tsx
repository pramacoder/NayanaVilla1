import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

type Props = {
  params: { locale: string };
};

export default function ContactPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations("contact_page");

  return (
    <main className="flex-1 pt-28 pb-20">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-shoreline-50/70 border-b border-neutral-200/60">
        <Container size="narrow" className="text-center space-y-4">
          <Badge variant="shoreline">{t("badge")}</Badge>
          <h1 className="text-4xl sm:text-6xl font-display font-normal text-neutral-900 leading-display tracking-tight text-balance">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans max-w-xl mx-auto text-pretty">
            {t("subtitle")}
          </p>
        </Container>
      </section>

      {/* Contact Cards & Form Preview */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
            {/* Contact Channels Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-8 shadow-sm space-y-6">
                <h2 className="text-xl font-editorial font-medium text-neutral-900">
                  {t("channels_title")}
                </h2>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-shoreline-50/70 border border-shoreline-200/60">
                    <div className="w-9 h-9 rounded-full bg-ocean-600 text-white flex items-center justify-center shrink-0">
                      <MessageCircle className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                        WhatsApp Concierge
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {t("whatsapp_desc")}
                      </p>
                      <span className="text-sm font-semibold text-ocean-700 block mt-1">
                        +62 812 3456 7890 (Demo)
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                    <div className="w-9 h-9 rounded-full bg-neutral-800 text-white flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                        Email Inquiry
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {t("email_desc")}
                      </p>
                      <span className="text-sm font-medium text-neutral-800 block mt-1">
                        concierge@nayanavilla.demo
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                    <div className="w-9 h-9 rounded-full bg-neutral-800 text-white flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                        Concept Location
                      </h3>
                      <p className="text-xs text-neutral-500 mt-0.5">
                        {t("address_desc")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs text-neutral-400 border-t border-neutral-100 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-shoreline-700 shrink-0" />
                  <span>Responses typically within 1–2 hours during daytime hours.</span>
                </div>
              </div>
            </div>

            {/* Direct Booking Inquiry Box */}
            <div className="lg:col-span-7 bg-shoreline-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-shoreline-200 text-xs uppercase tracking-widest font-medium border border-white/20">
                Preferred Fast Track
              </span>

              <h2 className="text-3xl font-editorial font-normal leading-tight">
                Submit an Online Inquiry via WhatsApp
              </h2>

              <p className="text-sm text-neutral-200 leading-relaxed font-sans">
                Our online inquiry form guides you through selecting your preferred
                dates, guest count, and suite preference, automatically composing a
                ready-to-send WhatsApp message.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-shoreline-200">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>No upfront payment or account registration required</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-shoreline-200">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Personal coordination directly with our host team</span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-shoreline-100 text-neutral-900 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all shadow-md active:scale-[0.96]"
                >
                  <MessageCircle className="w-4 h-4 text-ocean-600" />
                  <span>Proceed to Booking Inquiry</span>
                  <ArrowRight className="w-4 h-4 text-ocean-600" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

