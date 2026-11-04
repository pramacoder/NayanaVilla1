"use client";

import * as React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { accommodations } from "@/data/accommodation";
import { Calendar, Users, Home, Search, ArrowRight } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("home.hero");
  const tInquiry = useTranslations("home.quick_inquiry");
  const locale = useLocale() as "en" | "id";
  const router = useRouter();

  const [selectedSuite, setSelectedSuite] = React.useState(accommodations[0].slug);
  const [checkIn, setCheckIn] = React.useState("");
  const [checkOut, setCheckOut] = React.useState("");
  const [guests, setGuests] = React.useState("2");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const query = new URLSearchParams({
      suite: selectedSuite,
      checkIn,
      checkOut,
      guests,
    }).toString();
    router.push(`/booking?${query}`);
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-end pb-12 pt-32 overflow-hidden bg-neutral-900">
      {/* Background Hero Image with z-0 (visible above section background, beneath z-10 content) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Nayana Villa - Luxury Pool and Tropical Sanctuary"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Cinematic Mood Gradients for pristine text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-900/45 to-neutral-950/60" />
      </div>

      <Container className="relative z-10 text-white">
        {/* Center Editorial Hero Text */}
        <div className="max-w-3xl mx-auto text-center space-y-5 mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs uppercase tracking-widest text-shoreline-100">
            <span>{t("eyebrow")}</span>
          </div>

          {/* Relaxed Hero Headline (Playfair Display) */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-normal text-white leading-display tracking-tight text-balance drop-shadow-sm">
            {t("title")}
          </h1>

          <p className="text-base sm:text-lg text-neutral-200/90 max-w-xl mx-auto font-sans leading-relaxed text-pretty drop-shadow-xs">
            {t("description")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white hover:bg-shoreline-100 text-neutral-900 font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-150 shadow-lg active:scale-[0.96]"
            >
              <span>{t("cta_primary")}</span>
              <ArrowRight className="w-4 h-4 text-ocean-600" />
            </Link>

            <Link
              href="/accommodation"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-150 active:scale-[0.96]"
            >
              {t("cta_secondary")}
            </Link>
          </div>
        </div>

        {/* Floating Quick Inquiry Bar */}
        <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full p-3 sm:p-2 shadow-2xl border border-white/40 text-neutral-800">
          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-1 text-xs"
          >
            {/* Suite Selection */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl sm:rounded-full hover:bg-shoreline-50/80 transition-colors">
              <Home className="w-4 h-4 text-shoreline-600 shrink-0" aria-hidden="true" />
              <div className="flex flex-col text-left w-full">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                  {tInquiry("room_type")}
                </span>
                <select
                  value={selectedSuite}
                  onChange={(e) => setSelectedSuite(e.target.value)}
                  className="bg-transparent font-medium text-neutral-800 focus:outline-none cursor-pointer truncate"
                  aria-label={tInquiry("room_type")}
                >
                  {accommodations.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.name[locale]}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-neutral-200" />

            {/* Check In */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl sm:rounded-full hover:bg-shoreline-50/80 transition-colors">
              <Calendar className="w-4 h-4 text-shoreline-600 shrink-0" aria-hidden="true" />
              <div className="flex flex-col text-left w-full">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                  {tInquiry("check_in")}
                </span>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="bg-transparent font-medium text-neutral-800 focus:outline-none cursor-pointer"
                  aria-label={tInquiry("check_in")}
                />
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-neutral-200" />

            {/* Check Out */}
            <div className="flex-1 flex items-center gap-3 px-4 py-2.5 rounded-xl sm:rounded-full hover:bg-shoreline-50/80 transition-colors">
              <Calendar className="w-4 h-4 text-shoreline-600 shrink-0" aria-hidden="true" />
              <div className="flex flex-col text-left w-full">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                  {tInquiry("check_out")}
                </span>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="bg-transparent font-medium text-neutral-800 focus:outline-none cursor-pointer"
                  aria-label={tInquiry("check_out")}
                />
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-neutral-200" />

            {/* Guests */}
            <div className="w-full sm:w-28 flex items-center gap-3 px-4 py-2.5 rounded-xl sm:rounded-full hover:bg-shoreline-50/80 transition-colors">
              <Users className="w-4 h-4 text-shoreline-600 shrink-0" aria-hidden="true" />
              <div className="flex flex-col text-left w-full">
                <span className="text-[10px] uppercase tracking-wider text-neutral-400 font-medium">
                  {tInquiry("guests")}
                </span>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="bg-transparent font-medium text-neutral-800 focus:outline-none cursor-pointer"
                  aria-label={tInquiry("guests")}
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl sm:rounded-full bg-ocean-600 hover:bg-ocean-700 text-white font-medium transition-all duration-150 shadow-sm active:scale-[0.96]"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              <span className="sm:hidden lg:inline">{tInquiry("action")}</span>
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
