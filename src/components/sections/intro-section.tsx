import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Waves, ShieldCheck, Heart } from "lucide-react";

export function IntroSection() {
  const t = useTranslations("home.intro");

  const pillars = [
    {
      icon: Waves,
      title: "Coastal Architecture",
      desc: "Whitewashed natural stone and open pavilions that embrace sea breezes.",
    },
    {
      icon: Sparkles,
      title: "Private Pool Solitude",
      desc: "Each suite includes dedicated swimming pool spaces for quiet mornings.",
    },
    {
      icon: ShieldCheck,
      title: "Secluded Hospitality",
      desc: "Discreet concierge service attentive to your personal retreat rhythm.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="shoreline">{t("badge")}</Badge>

            <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-neutral-900 leading-heading tracking-tight text-balance">
              {t("heading")}
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans text-pretty">
              {t("description")}
            </p>

            <p className="text-sm text-neutral-500 leading-relaxed font-sans">
              Inspired by the gentle rhythm of the tides, Nayana Villa provides
              a haven where time slows down. Crafted as a serene sanctuary in Ubud
              with seaside warmth, each corner offers a quiet balance between
              natural textures and barefoot luxury.
            </p>

            {/* Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-neutral-100">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.title} className="space-y-2">
                    <div className="w-8 h-8 rounded-full bg-shoreline-100 flex items-center justify-center text-shoreline-700">
                      <IconComponent className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Layered Editorial Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
              <Image
                src="/images/pool-day.webp"
                alt="Nayana Villa pool area with sunlight and white loungers"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Floating Luxury Detail Badge */}
            <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-8 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-neutral-100 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ocean-50 text-ocean-600 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 fill-ocean-500/20 text-ocean-600" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-900">
                    Boutique Experience
                  </h4>
                  <p className="text-xs text-neutral-500">
                    Handcrafted for restorative personal journeys.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

