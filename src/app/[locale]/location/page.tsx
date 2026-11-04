import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import {
  MapPin,
  Compass,
  Clock,
  Car,
  Plane,
  Waves,
  ShieldAlert,
} from "lucide-react";

type Props = {
  params: { locale: string };
};

export default function LocationPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations("location_page");

  const nearbySpots = [
    {
      title: "Sandy Beach & Crystal Bay",
      distance: "3 min stroll (250m)",
      desc: "Gentle coastal waves, white umbrellas, and seaside tavernas.",
      icon: Waves,
    },
    {
      title: "Ubud Artisan Village & Markets",
      distance: "15 min drive",
      desc: "Traditional woodcarvers, local boutiques, and organic cafes.",
      icon: Compass,
    },
    {
      title: "Scenic Coastal Cliffs & Trails",
      distance: "8 min walk",
      desc: "Walking trails with panoramic sunrise and sunset vistas.",
      icon: MapPin,
    },
  ];

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

      {/* Main Location Content */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Descriptive Story & Transportation */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-shoreline-700 font-semibold">
                  The Neighborhood
                </span>
                <h2 className="text-3xl font-editorial font-medium text-neutral-900">
                  Peaceful Seclusion with Easy Coastal Access
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
                  Nayana Villa is thoughtfully situated along tranquil coastal paths,
                  offering an intimate sanctuary away from heavy tourist corridors.
                  The surroundings are characterized by gentle ocean breezes,
                  verdant flora, and traditional hospitality.
                </p>
              </div>

              {/* Nearby Highlights */}
              <div className="space-y-4 pt-4 border-t border-neutral-100">
                <h3 className="text-base font-semibold text-neutral-900 uppercase tracking-wider">
                  {t("nearby_title")}
                </h3>
                <div className="space-y-3">
                  {nearbySpots.map((spot) => {
                    const Icon = spot.icon;
                    return (
                      <div
                        key={spot.title}
                        className="p-4 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs flex items-start gap-3.5"
                      >
                        <div className="w-8 h-8 rounded-full bg-shoreline-100 text-shoreline-800 flex items-center justify-center shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-sm font-semibold text-neutral-900">
                              {spot.title}
                            </h4>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 font-medium">
                              {spot.distance}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-500 mt-0.5">
                            {spot.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Transfers */}
              <div className="p-6 rounded-3xl bg-shoreline-50 border border-shoreline-200/80 space-y-3">
                <div className="flex items-center gap-2 text-shoreline-800 font-semibold text-sm">
                  <Plane className="w-4 h-4" />
                  <span>{t("transport_title")}</span>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Ngurah Rai International Airport is approximately 45–60 minutes away.
                  Our concierge can coordinate private chauffeured transfers directly to
                  the villa gates on request.
                </p>
              </div>
            </div>

            {/* Right Column: Visual Map Placeholder & Photo */}
            <div className="lg:col-span-6 space-y-6">
              {/* Illustrative Map Placeholder */}
              <div className="relative aspect-[16/11] rounded-3xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-md flex flex-col justify-between p-6">
                <Image
                  src="/images/coastal-harbor.jpg"
                  alt="Coastal Harbor illustrative map setting"
                  fill
                  sizes="50vw"
                  className="object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-neutral-900/40 backdrop-blur-[1px]" />

                {/* Map Pin Overlay */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-white/90 text-neutral-900 text-xs font-semibold backdrop-blur-xs">
                    {t("map_title")}
                  </span>
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto space-y-2">
                  <div className="w-12 h-12 rounded-full bg-ocean-600 text-white flex items-center justify-center shadow-lg animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-neutral-950/80 text-white font-editorial text-sm tracking-wide">
                    Nayana Villa • Ubud Bali
                  </span>
                </div>

                <div className="relative z-10 p-3 rounded-2xl bg-white/90 backdrop-blur-xs text-[11px] text-neutral-700 flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-shoreline-700 shrink-0 mt-0.5" />
                  <span>{t("map_notice")}</span>
                </div>
              </div>

              {/* Inquiry Action */}
              <div className="p-6 rounded-3xl bg-neutral-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-semibold">Need directions or airport pickup?</h4>
                  <p className="text-xs text-neutral-400">Our concierge is accessible on WhatsApp.</p>
                </div>
                <Link href="/booking">
                  <Button variant="shoreline" size="sm">
                    Inquire Transfers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

