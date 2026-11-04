import * as React from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { InquiryForm } from "@/components/booking/inquiry-form";
import { ShieldAlert } from "lucide-react";

type Props = {
  params: { locale: string };
};

export default function BookingPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations("booking");

  return (
    <main className="flex-1 pt-28 pb-20 bg-shoreline-50/40">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-shoreline-50/70 border-b border-neutral-200/60">
        <Container size="narrow" className="text-center space-y-4">
          <Badge variant="shoreline">WhatsApp Direct</Badge>
          <h1 className="text-4xl sm:text-6xl font-display font-normal text-neutral-900 leading-display tracking-tight text-balance">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans max-w-xl mx-auto text-pretty">
            {t("subtitle")}
          </p>

          <div className="max-w-xl mx-auto p-3.5 rounded-2xl bg-white/80 border border-shoreline-200 text-xs text-shoreline-900 flex items-start gap-2.5 text-left mt-4 shadow-2xs">
            <ShieldAlert className="w-4 h-4 text-shoreline-700 shrink-0 mt-0.5" />
            <span>{t("disclaimer")}</span>
          </div>
        </Container>
      </section>

      {/* Booking Form Section */}
      <section className="py-14 lg:py-20">
        <Container>
          <React.Suspense
            fallback={
              <div className="text-center py-20 text-sm text-neutral-500">
                Loading inquiry form...
              </div>
            }
          >
            <InquiryForm />
          </React.Suspense>
        </Container>
      </section>
    </main>
  );
}

