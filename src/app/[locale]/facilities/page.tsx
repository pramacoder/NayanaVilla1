import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { facilitiesData } from "@/data/facilities";
import {
  Waves,
  Sparkles,
  Wind,
  Coffee,
  Sun,
  Compass,
  Armchair,
  MessageCircle,
  ShieldCheck,
  Heart,
  ArrowRight,
} from "lucide-react";

type Props = {
  params: { locale: string };
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Waves,
  Sparkles,
  Wind,
  Coffee,
  Sun,
  Compass,
  Armchair,
  MessageCircle,
  ShieldCheck,
  Heart,
};

export default function FacilitiesPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations("facilities_page");
  const loc = useLocale() as "en" | "id";

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

      {/* Facilities Grouped Categories */}
      <section className="py-16 lg:py-24 space-y-20">
        <Container>
          <div className="space-y-16">
            {facilitiesData.map((category) => (
              <div key={category.id} className="space-y-8">
                <div className="max-w-xl space-y-2">
                  <span className="text-xs uppercase tracking-widest text-shoreline-700 font-semibold">
                    Category
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-editorial font-medium text-neutral-900">
                    {category.name[loc]}
                  </h2>
                  <p className="text-sm text-neutral-500 font-sans">
                    {category.description[loc]}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, idx) => {
                    const IconComponent = iconMap[item.iconName] || Sparkles;
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-3xl border border-neutral-200/70 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow duration-200 space-y-3"
                      >
                        <div className="w-10 h-10 rounded-2xl bg-shoreline-100 text-shoreline-800 flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-base font-semibold text-neutral-900">
                          {item.title[loc]}
                        </h3>
                        <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                          {item.description[loc]}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Booking CTA Banner */}
      <section className="py-16 bg-shoreline-800 text-white text-center">
        <Container size="narrow" className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-editorial font-normal">
            Ready to Immerse Yourself in Coastal Serenity?
          </h2>
          <p className="text-sm text-neutral-200 max-w-md mx-auto">
            Contact our dedicated host concierge for questions, availability, or
            tailored stays.
          </p>
          <Link href="/booking">
            <Button variant="shoreline" size="lg">
              Reserve Your Sanctuary
            </Button>
          </Link>
        </Container>
      </section>
    </main>
  );
}

