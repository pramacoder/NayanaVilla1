import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { accommodations } from "@/data/accommodation";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticPages = [
    "",
    "/about",
    "/accommodation",
    "/facilities",
    "/gallery",
    "/location",
    "/contact",
    "/booking",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1.0 : 0.8,
      });
    }

    for (const acc of accommodations) {
      entries.push({
        url: `${baseUrl}/${locale}/accommodation/${acc.slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.9,
      });
    }
  }

  return entries;
}

