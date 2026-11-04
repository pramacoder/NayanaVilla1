import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { useTranslations, useLocale } from "next-intl";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { accommodations } from "@/data/accommodation";
import { routing } from "@/i18n/routing";
import {
  Users,
  Bed,
  Bath,
  Maximize2,
  Check,
  ArrowLeft,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of routing.locales) {
    for (const item of accommodations) {
      params.push({ locale, slug: item.slug });
    }
  }
  return params;
}

export default function AccommodationDetailPage({
  params: { locale, slug },
}: Props) {
  setRequestLocale(locale);
  const loc = useLocale() as "en" | "id";
  const t = useTranslations("accommodation_detail");

  const item = accommodations.find((acc) => acc.slug === slug);
  if (!item) {
    notFound();
  }

  return (
    <main className="flex-1 pt-28 pb-20">
      {/* Top Breadcrumb Bar */}
      <div className="py-4 bg-shoreline-50/60 border-b border-neutral-200/60">
        <Container>
          <Link
            href="/accommodation"
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 hover:text-ocean-600 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t("back")}</span>
          </Link>
        </Container>
      </div>

      <Container className="py-10">
        {/* Title & Tagline Header */}
        <div className="max-w-3xl mb-8 space-y-2">
          <Badge variant="shoreline">{item.tagline[loc]}</Badge>
          <h1 className="text-3xl sm:text-5xl font-editorial font-medium text-neutral-900 leading-tight">
            {item.name[loc]}
          </h1>
          <p className="text-sm text-neutral-600 leading-relaxed font-sans">
            {item.shortDescription[loc]}
          </p>
        </div>

        {/* Hero Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-12">
          <div className="md:col-span-8 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-sm">
            <Image
              src={item.gallery[0] || item.coverImage}
              alt={item.name[loc]}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
          <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4">
            {item.gallery.slice(1, 3).map((img, i) => (
              <div
                key={i}
                className="relative aspect-[16/10] md:aspect-auto rounded-3xl overflow-hidden shadow-xs"
              >
                <Image
                  src={img}
                  alt={`${item.name[loc]} gallery image ${i + 2}`}
                  fill
                  sizes="33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content & Inquiry Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-10">
            {/* Specs Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/70 text-center">
              <div>
                <span className="flex items-center justify-center gap-1.5 text-sm font-semibold text-neutral-900">
                  <Users className="w-4 h-4 text-shoreline-700" />
                  {item.maxGuests} Guests
                </span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                  Max Capacity
                </span>
              </div>
              <div>
                <span className="flex items-center justify-center gap-1.5 text-sm font-semibold text-neutral-900">
                  <Bed className="w-4 h-4 text-shoreline-700" />
                  {item.bedrooms} Bedrooms
                </span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                  Sleeping
                </span>
              </div>
              <div>
                <span className="flex items-center justify-center gap-1.5 text-sm font-semibold text-neutral-900">
                  <Bath className="w-4 h-4 text-shoreline-700" />
                  {item.bathrooms} Bathrooms
                </span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                  En-suite
                </span>
              </div>
              <div>
                <span className="flex items-center justify-center gap-1.5 text-sm font-semibold text-neutral-900">
                  <Maximize2 className="w-4 h-4 text-shoreline-700" />
                  {item.areaSqm} m²
                </span>
                <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                  Living Area
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-2xl font-editorial font-medium text-neutral-900">
                The Experience
              </h2>
              <p className="text-base text-neutral-600 leading-relaxed font-sans">
                {item.description[loc]}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="space-y-4 pt-6 border-t border-neutral-100">
              <h2 className="text-2xl font-editorial font-medium text-neutral-900">
                {t("amenities_title")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-neutral-700">
                {item.amenities.map((amenity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-neutral-100 shadow-2xs"
                  >
                    <div className="w-6 h-6 rounded-full bg-ocean-50 text-ocean-600 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{amenity[loc]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Inquiry Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-white rounded-3xl border border-neutral-200/80 p-6 sm:p-7 shadow-lg space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-neutral-400 block font-medium">
                  Illustrative Rate
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl sm:text-3xl font-semibold text-neutral-900 tabular-nums">
                    {item.indicativePrice.formatted}
                  </span>
                  <span className="text-xs text-neutral-500">
                    {item.indicativePrice.label[loc]}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-shoreline-50/80 border border-shoreline-200/60 text-xs text-shoreline-900 leading-relaxed flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-shoreline-700 shrink-0 mt-0.5" />
                <span>{t("inquiry_card.indicative_notice")}</span>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-900">
                  {t("inquiry_card.title")}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  {t("inquiry_card.subtitle")}
                </p>
                <Link
                  href={`/booking?suite=${item.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-ocean-600 hover:bg-ocean-700 text-white rounded-full font-medium text-sm tracking-wide transition-colors shadow-sm active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t("inquiry_card.cta")}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

