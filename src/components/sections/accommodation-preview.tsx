import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { accommodations } from "@/data/accommodation";
import { Users, Bed, Bath, Maximize2, ArrowRight } from "lucide-react";

export function AccommodationPreview() {
  const t = useTranslations("home.featured");
  const locale = useLocale() as "en" | "id";

  return (
    <section id="explore" className="py-20 lg:py-28 bg-shoreline-50/60">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-14">
          <Badge variant="shoreline">{t("badge")}</Badge>
          <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-neutral-900 leading-heading tracking-tight text-balance">
            {t("heading")}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans text-pretty">
            {t("description")}
          </p>
        </div>

        {/* Accommodation Cards Grid (Inspired by Villa Cards reference) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((item) => (
            <article
              key={item.slug}
              className="group bg-white rounded-3xl overflow-hidden border border-neutral-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Card Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={item.coverImage}
                    alt={item.name[locale]}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-neutral-900/80 text-white text-[11px] font-medium tracking-wide backdrop-blur-xs">
                      {item.areaSqm} m²
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div>
                    <h3 className="text-xl font-editorial font-medium text-neutral-900 group-hover:text-ocean-600 transition-colors">
                      {item.name[locale]}
                    </h3>
                    <p className="text-xs text-shoreline-700 font-medium tracking-wide mt-1">
                      {item.tagline[locale]}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-2">
                    {item.shortDescription[locale]}
                  </p>

                  {/* Spec Row: Guests, Beds, Baths */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-neutral-50 rounded-2xl border border-neutral-100/80 text-center">
                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-xs font-semibold text-neutral-800">
                        <Users className="w-3.5 h-3.5 text-neutral-400" />
                        {item.maxGuests}
                      </span>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                        Guests
                      </span>
                    </div>

                    <div className="flex flex-col items-center border-x border-neutral-200/60">
                      <span className="flex items-center gap-1 text-xs font-semibold text-neutral-800">
                        <Bed className="w-3.5 h-3.5 text-neutral-400" />
                        {item.bedrooms}
                      </span>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                        Beds
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <span className="flex items-center gap-1 text-xs font-semibold text-neutral-800">
                        <Bath className="w-3.5 h-3.5 text-neutral-400" />
                        {item.bathrooms}
                      </span>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider">
                        Baths
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Pricing & Action */}
              <div className="p-6 sm:p-7 pt-0 border-t border-neutral-100 flex items-center justify-between mt-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 block">
                    Starting from
                  </span>
                  <span className="text-sm font-semibold text-neutral-900 tabular-nums">
                    {item.indicativePrice.formatted}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    href={`/accommodation/${item.slug}`}
                    className="p-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 transition-colors"
                    aria-label={`View details of ${item.name[locale]}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/booking?suite=${item.slug}`}
                    className="px-4 py-2 rounded-full bg-ocean-600 hover:bg-ocean-700 text-white text-xs font-medium tracking-wide uppercase transition-all shadow-xs active:scale-[0.96]"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

