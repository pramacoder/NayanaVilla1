import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroSection } from "@/components/sections/intro-section";
import { PhilosophySection } from "@/components/sections/philosophy-section";
import { AccommodationPreview } from "@/components/sections/accommodation-preview";
import { ExperiencesSection } from "@/components/sections/experiences-section";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { LocationPreview } from "@/components/sections/location-preview";
import { CtaBanner } from "@/components/sections/cta-banner";

type Props = {
  params: { locale: string };
};

export default function HomePage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return (
    <main className="flex-1 flex flex-col">
      {/* 1. Hero Section with Relaxed Playfair Display Headline & Quick Inquiry Bar */}
      <HeroSection />

      {/* 2. Concept & Editorial Introduction */}
      <IntroSection />

      {/* 3. Featured Accommodations (Villa Cards inspired) */}
      <AccommodationPreview />

      {/* 4. Quiet Luxury Philosophy */}
      <PhilosophySection />

      {/* 5. Curated Experiences & Amenities */}
      <ExperiencesSection />

      {/* 6. Visual Bento Gallery Preview */}
      <GalleryPreview />

      {/* 7. Setting & Location Highlights */}
      <LocationPreview />

      {/* 8. Final Concierge Booking Banner */}
      <CtaBanner />
    </main>
  );
}
