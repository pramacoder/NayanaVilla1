"use client";

import * as React from "react";
import { useLocale } from "next-intl";
import { Container } from "@/components/ui/container";
import { Navigation, MapPin, Compass, Clock, ExternalLink } from "lucide-react";

export function MapSection() {
  const locale = useLocale() as "en" | "id";

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.230986472526!2d115.29836340000001!3d-8.476906500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd219003cb7478b%3A0x540802f02ff64f82!2sVilla%20Nayana!5e0!3m2!1sen!2sid!4v1793766991156!5m2!1sen!2sid";

  const directMapUrl =
    "https://www.google.com/maps/search/?api=1&query=Villa+Nayana+Bali";

  return (
    <section className="bg-white border-t border-neutral-200/80 overflow-hidden">
      {/* Interactive Google Maps Frame */}
      <div className="relative w-full h-[420px] sm:h-[480px] bg-neutral-100">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Villa Nayana Google Maps Location"
          className="w-full h-full grayscale-[15%] contrast-[1.05]"
        />
      </div>

      {/* Shoreline Distances & Directions Bar (Inspired by reference screenshot) */}
      <div className="bg-shoreline-700 text-white py-6 px-4 border-b border-shoreline-800">
        <Container className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          {/* Left: Direction Branding */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 text-shoreline-200 flex items-center justify-center shrink-0 border border-white/15">
              <Navigation className="w-5 h-5 rotate-45" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {locale === "id" ? "Rute & Jarak Tempuh" : "Distances & Directions"}
              </h3>
              <p className="text-xs text-shoreline-200 mt-0.5">
                {locale === "id"
                  ? "Akses mudah menuju pantai, sentra budaya, dan bandara"
                  : "Effortless connectivity to beaches, cultural hubs, & airport"}
              </p>
            </div>
          </div>

          {/* Center: Key Distance Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/15 font-medium">
              <Clock className="w-3.5 h-3.5 text-shoreline-300" />
              <span>{locale === "id" ? "3 mnt ke Pantai" : "3 min to Beach"}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/15 font-medium">
              <Compass className="w-3.5 h-3.5 text-shoreline-300" />
              <span>{locale === "id" ? "15 mnt ke Pusat Ubud" : "15 min to Ubud Center"}</span>
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 text-white border border-white/15 font-medium">
              <MapPin className="w-3.5 h-3.5 text-shoreline-300" />
              <span>{locale === "id" ? "45 mnt ke Bandara" : "45 min to Airport"}</span>
            </span>
          </div>

          {/* Right: Open in Google Maps Button */}
          <a
            href={directMapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-shoreline-100 text-neutral-900 text-xs font-semibold uppercase tracking-wider transition-all shadow-sm active:scale-[0.96] shrink-0"
          >
            <span>{locale === "id" ? "Buka di Google Maps" : "Open in Google Maps"}</span>
            <ExternalLink className="w-3.5 h-3.5 text-ocean-600" />
          </a>
        </Container>
      </div>
    </section>
  );
}

