import { LocalizedText } from "./accommodation";

export type GalleryImage = {
  id: string;
  src: string;
  category: "villas" | "pool" | "coastal" | "dining";
  title: LocalizedText;
  caption: LocalizedText;
  aspectRatio: "landscape" | "portrait" | "square";
};

export const galleryImages: GalleryImage[] = [
  {
    id: "g1",
    src: "/images/hero-twilight.webp",
    category: "pool",
    title: {
      en: "Twilight Pool Courtyard",
      id: "Halaman Kolam Renang Saat Senja",
    },
    caption: {
      en: "Warm architectural illumination reflecting across the private swimming pool.",
      id: "Pencahayaan arsitektur hangat yang terpantul di atas kolam renang pribadi.",
    },
    aspectRatio: "landscape",
  },
  {
    id: "g2",
    src: "/images/balcony-seaview.webp",
    category: "coastal",
    title: {
      en: "Azure Horizon Veranda",
      id: "Beranda Cakrawala Azure",
    },
    caption: {
      en: "Direct panoramic views of the coastal sea from the elevated private terrace.",
      id: "Pemandangan langsung laut pesisir yang panoramik dari teras privat bertingkat.",
    },
    aspectRatio: "landscape",
  },
  {
    id: "g3",
    src: "/images/pool-day.webp",
    category: "pool",
    title: {
      en: "Sunlit Pool Lounge",
      id: "Area Santai Kolam Bermandikan Surya",
    },
    caption: {
      en: "Crisp white designer seating set against lush greenery and sparkling water.",
      id: "Kursi desainer putih berpadu dengan tanaman hijau asri dan air kolam jernih.",
    },
    aspectRatio: "portrait",
  },
  {
    id: "g4",
    src: "/images/pool-greenery.webp",
    category: "villas",
    title: {
      en: "Tropical Courtyard Seclusion",
      id: "Keteduhan Halaman Tropis",
    },
    caption: {
      en: "Verdant garden walls surrounding the private poolside loungers.",
      id: "Dinding tanaman rimbun yang mengelilingi kursi santai di tepi kolam renang.",
    },
    aspectRatio: "landscape",
  },
  {
    id: "g5",
    src: "/images/dining-breakfast.jpg",
    category: "dining",
    title: {
      en: "Morning Artisan Breakfast Basket",
      id: "Keranjang Sarapan Artisan Pagi",
    },
    caption: {
      en: "Rustic bread, seasonal berries, fresh juice, and local cheeses delivered daily.",
      id: "Roti artisan hangat, buah beri segar, jus alami, dan keju lokal.",
    },
    aspectRatio: "square",
  },
  {
    id: "g6",
    src: "/images/beach-aerial.webp",
    category: "coastal",
    title: {
      en: "Shoreline Sandy Beach",
      id: "Pantai Berpasir Pesisir",
    },
    caption: {
      en: "Aerial perspective of the pristine shoreline umbrellas located 3 minutes away.",
      id: "Pemandangan udara payung pantai di tepi pantai yang berjarak 3 menit.",
    },
    aspectRatio: "landscape",
  },
  {
    id: "g7",
    src: "/images/coastal-bay.jpg",
    category: "coastal",
    title: {
      en: "Coastal Bay Panorama",
      id: "Panorama Teluk Pesisir",
    },
    caption: {
      en: "Protected coastal cove with calm turquoise waters and village tavernas.",
      id: "Teluk pesisir berair tenang dengan jajaran perahu dan taverna lokal.",
    },
    aspectRatio: "landscape",
  },
  {
    id: "g8",
    src: "/images/coastal-harbor.jpg",
    category: "coastal",
    title: {
      en: "Seaside Harbor Promenade",
      id: "Promenade Pelabuhan Tepi Laut",
    },
    caption: {
      en: "Traditional boats and seaside paths framed by palm fronds.",
      id: "Perahu tradisional dan jalur pantai yang dibingkai oleh daun kelapa.",
    },
    aspectRatio: "landscape",
  },
  {
    id: "g9",
    src: "/images/service-bell.jpg",
    category: "villas",
    title: {
      en: "Hospitality & Concierge Care",
      id: "Pelayanan & Keramahan Concierge",
    },
    caption: {
      en: "Personalized hospitality attentive to your every retreat preference.",
      id: "Keramahan penuh perhatian untuk kenyamanan liburan santai Anda.",
    },
    aspectRatio: "square",
  },
];

