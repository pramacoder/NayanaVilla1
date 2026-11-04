import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Clock, Compass } from "lucide-react";

export function LocationPreview() {
  const t = useTranslations("home.location_preview");

  const highlights = [
    {
      icon: Clock,
      label: "Walking Distance",
      detail: "3 minutes to sandy beach & seaside cafes",
    },
    {
      icon: Navigation,
      label: "Artisan Hub",
      detail: "15 minutes to Ubud cultural village & crafts",
    },
    {
      icon: Compass,
      label: "Island Accessibility",
      detail: "45 minutes from international airport",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Side */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
              <Image
                src="/images/coastal-bay.jpg"
                alt="Turquoise coastal bay and tranquil harbor near Nayana Villa"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Description Side */}
          <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
            <Badge variant="shoreline">{t("badge")}</Badge>

            <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-neutral-900 leading-heading tracking-tight text-balance">
              {t("heading")}
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed font-sans text-pretty">
              {t("description")}
            </p>

            <p className="text-sm text-neutral-500 leading-relaxed font-sans">
              Framed by coastal slopes and gentle ocean waters, our location
              gives guests the best of both worlds: complete sanctuary within
              private villa walls, with local tavernas, artisan shops, and natural
              trails just moments away.
            </p>

            <div className="space-y-4 pt-4 border-t border-neutral-100">
              {highlights.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded-full bg-shoreline-100 text-shoreline-700 flex items-center justify-center shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-800">
                        {item.label}
                      </h4>
                      <p className="text-xs text-neutral-500">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <Link
                href="/location"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm active:scale-[0.96]"
              >
                <MapPin className="w-4 h-4 text-shoreline-300" />
                <span>{t("cta")}</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

