import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function GalleryPreview() {
  const t = useTranslations("home.gallery_preview");

  const galleryItems = [
    {
      src: "/images/hero-twilight.webp",
      alt: "Villa poolside twilight glow",
      className: "md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto",
    },
    {
      src: "/images/balcony-seaview.webp",
      alt: "Panoramic sea view from private balcony",
      className: "aspect-[4/3]",
    },
    {
      src: "/images/pool-day.webp",
      alt: "Daylight pool lounge furniture",
      className: "aspect-[4/3]",
    },
    {
      src: "/images/beach-aerial.webp",
      alt: "Aerial beach umbrellas and shoreline",
      className: "aspect-[4/3]",
    },
    {
      src: "/images/coastal-harbor.jpg",
      alt: "Scenic coastal harbor and turquoise water",
      className: "aspect-[4/3]",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-shoreline-50/50">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-xl">
            <Badge variant="shoreline">{t("badge")}</Badge>
            <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-neutral-900 leading-heading tracking-tight">
              {t("heading")}
            </h2>
          </div>

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ocean-600 hover:text-ocean-700 transition-colors group"
          >
            <span>{t("cta")}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bento / Mosaic Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-3xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 bg-neutral-100 ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

