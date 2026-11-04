import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { accommodations } from "@/data/accommodation";
import { Users, Bed, Bath, Maximize2, Check, ArrowRight } from "lucide-react";

type Props = {
  params: { locale: string };
};

export default function AccommodationPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations("accommodation_page");
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

      {/* Accommodations Detailed List */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="space-y-16">
            {accommodations.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <article
                  key={item.slug}
                  className="bg-white rounded-3xl border border-neutral-200/80 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8"
                >
                  {/* Photo Column */}
                  <div
                    className={`lg:col-span-6 relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <Image
                      src={item.coverImage}
                      alt={item.name[loc]}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-neutral-900/80 text-white text-xs font-medium backdrop-blur-xs">
                        {item.areaSqm} m²
                      </span>
                    </div>
                  </div>

                  {/* Info Column */}
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div>
                      <span className="text-xs uppercase tracking-widest text-shoreline-700 font-semibold">
                        {item.tagline[loc]}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-editorial font-medium text-neutral-900 mt-1">
                        {item.name[loc]}
                      </h2>
                    </div>

                    <p className="text-sm text-neutral-600 leading-relaxed font-sans">
                      {item.description[loc]}
                    </p>

                    {/* Specs Pill Grid */}
                    <div className="flex flex-wrap gap-4 py-3 border-y border-neutral-100 text-xs text-neutral-700 font-medium">
                      <span className="inline-flex items-center gap-1.5">
                        <Users className="w-4 h-4 text-shoreline-700" />
                        {item.maxGuests} {t("specs_guests")}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Bed className="w-4 h-4 text-shoreline-700" />
                        {item.bedrooms} {t("specs_beds")}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Bath className="w-4 h-4 text-shoreline-700" />
                        {item.bathrooms} {t("specs_baths")}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Maximize2 className="w-4 h-4 text-shoreline-700" />
                        {item.areaSqm} m²
                      </span>
                    </div>

                    {/* Amenities Highlights */}
                    <div className="grid grid-cols-2 gap-2 text-xs text-neutral-600">
                      {item.amenities.slice(0, 4).map((amenity, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-ocean-600 shrink-0" />
                          <span className="truncate">{amenity[loc]}</span>
                        </span>
                      ))}
                    </div>

                    {/* Pricing & Actions */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-neutral-400 block">
                          {t("from")}
                        </span>
                        <span className="text-lg font-semibold text-neutral-900 tabular-nums">
                          {item.indicativePrice.formatted}
                        </span>
                        <span className="text-xs text-neutral-500 block">
                          {item.indicativePrice.label[loc]}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Link href={`/accommodation/${item.slug}`}>
                          <Button variant="outline" size="sm">
                            {t("view_suite")}
                          </Button>
                        </Link>
                        <Link href={`/booking?suite=${item.slug}`}>
                          <Button variant="primary" size="sm">
                            {t("inquire_btn")}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}

