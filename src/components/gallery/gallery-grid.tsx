"use client";

import * as React from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { galleryImages, GalleryImage } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function GalleryGrid() {
  const locale = useLocale() as "en" | "id";
  const t = useTranslations("gallery_page");

  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  const [activeImageIndex, setActiveImageIndex] = React.useState<number | null>(null);

  const categories = [
    { id: "all", label: t("categories.all") },
    { id: "villas", label: t("categories.villas") },
    { id: "pool", label: t("categories.pool") },
    { id: "coastal", label: t("categories.coastal") },
    { id: "dining", label: t("categories.dining") },
  ];

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
    document.body.style.overflow = "unset";
  };

  const prevImage = React.useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev! === 0 ? filteredImages.length - 1 : prev! - 1
    );
  }, [activeImageIndex, filteredImages.length]);

  const nextImage = React.useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) =>
      prev! === filteredImages.length - 1 ? 0 : prev! + 1
    );
  }, [activeImageIndex, filteredImages.length]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIndex, prevImage, nextImage]);

  return (
    <div className="space-y-12">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all duration-150 active:scale-[0.96]",
                isActive
                  ? "bg-ocean-600 text-white shadow-xs"
                  : "bg-neutral-100 hover:bg-neutral-200 text-neutral-700"
              )}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Responsive Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((img, index) => (
          <div
            key={img.id}
            onClick={() => openLightbox(index)}
            className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-100 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.title[locale]}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-neutral-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-6 text-white">
              <span className="p-2 w-8 h-8 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center mb-2">
                <Maximize2 className="w-4 h-4 text-white" />
              </span>
              <h3 className="text-sm font-semibold font-editorial">
                {img.title[locale]}
              </h3>
              <p className="text-[11px] text-neutral-200 line-clamp-1">
                {img.caption[locale]}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview lightbox"
          className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 text-white transition-opacity duration-200"
        >
          {/* Top Bar with Counter and Close Button */}
          <div className="flex items-center justify-between z-10">
            <span className="text-xs uppercase tracking-wider text-neutral-400">
              {activeImageIndex + 1} / {filteredImages.length}
            </span>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 transition-colors"
              aria-label={t("lightbox.close")}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Centered Image with Navigation Controls */}
          <div className="relative flex-1 flex items-center justify-center my-4">
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 sm:left-4 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
              aria-label={t("lightbox.prev")}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-h-[75vh] max-w-5xl">
              <Image
                src={filteredImages[activeImageIndex].src}
                alt={filteredImages[activeImageIndex].title[locale]}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 sm:right-4 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
              aria-label={t("lightbox.next")}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Title & Caption */}
          <div className="text-center z-10 max-w-xl mx-auto space-y-1">
            <h4 className="text-base font-editorial font-medium">
              {filteredImages[activeImageIndex].title[locale]}
            </h4>
            <p className="text-xs text-neutral-400">
              {filteredImages[activeImageIndex].caption[locale]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

