import { LocalizedText } from "./accommodation";

export type FacilityCategory = {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  items: {
    title: LocalizedText;
    description: LocalizedText;
    iconName: string;
  }[];
};

export const facilitiesData: FacilityCategory[] = [
  {
    id: "in-villa",
    name: {
      en: "In-Villa Comfort",
      id: "Kenyamanan Dalam Vila",
    },
    description: {
      en: "Thoughtful architectural details crafted for slow, tranquil living.",
      id: "Detail arsitektur yang dirancang untuk kehidupan yang tenang dan bersahaja.",
    },
    items: [
      {
        title: { en: "Private Swimming Pools", id: "Kolam Renang Privat" },
        description: {
          en: "Direct access to private refreshing waters right outside your bedroom door.",
          id: "Akses langsung ke kolam renang pribadi tepat di luar pintu kamar Anda.",
        },
        iconName: "Waves",
      },
      {
        title: { en: "Artisan Bathrooms", id: "Kamar Mandi Artisan" },
        description: {
          en: "Custom stone finishes, deep rainfall showers, and organic botanical bath amenities.",
          id: "Finishing batu alam khusus, pancuran hujan menyegarkan, dan fasilitas mandi botani organik.",
        },
        iconName: "Sparkles",
      },
      {
        title: { en: "Climate Control & Smart Tech", id: "Pengatur Suhu & Teknologi Pintar" },
        description: {
          en: "Whisper-quiet air conditioning, high-speed fiber Wi-Fi, and smart entertainment.",
          id: "Pendingin ruangan bersuara senyap, Wi-Fi fiber cepat, dan hiburan pintar.",
        },
        iconName: "Wind",
      },
      {
        title: { en: "Gourmet Kitchenette", id: "Dapur Kecil Gourmet" },
        description: {
          en: "Fully equipped with Italian espresso machines, refrigerator, and artisan tableware.",
          id: "Dilengkapi mesin espresso Italia, lemari es, dan perangkat makan artisan.",
        },
        iconName: "Coffee",
      },
    ],
  },
  {
    id: "outdoor",
    name: {
      en: "Outdoor & Coastal Living",
      id: "Ruang Terbuka & Pesisir",
    },
    description: {
      en: "Spaces designed to immerse you in sunlight, fresh sea breezes, and tropical fauna.",
      id: "Ruang yang dirancang agar Anda dapat menikmati hangatnya mentari dan semilir angin pantai.",
    },
    items: [
      {
        title: { en: "Panoramic Sun Terraces", id: "Teras Surya Panoramik" },
        description: {
          en: "Sweeping elevated views over the turquoise coastal bay and sunset horizons.",
          id: "Pemandangan luas menghadap teluk pesisir biru kehijauan dan horizon matahari terbenam.",
        },
        iconName: "Sun",
      },
      {
        title: { en: "Direct Shoreline Proximity", id: "Dekat Garis Pantai" },
        description: {
          en: "A short 3-minute stroll through coastal paths directly to the sandy beach.",
          id: "Hanya 3 menit berjalan kaki melalui jalur pesisir langsung menuju pantai berpasir.",
        },
        iconName: "Compass",
      },
      {
        title: { en: "Designer Loungers & Umbrellas", id: "Kursi Santai & Payung Desainer" },
        description: {
          en: "Ergonomic outdoor daybeds positioned for optimal shade and restorative reading.",
          id: "Daybed ergonomis di tepi kolam untuk istirahat membaca yang menenangkan.",
        },
        iconName: "Armchair",
      },
    ],
  },
  {
    id: "services",
    name: {
      en: "Concierge & Hospitality",
      id: "Layanan & Keramahan",
    },
    description: {
      en: "Unobtrusive, heartfelt assistance dedicated to your peace of mind.",
      id: "Pelayanan tulus dan bersahaja yang didedikasikan untuk kenyamanan liburan Anda.",
    },
    items: [
      {
        title: { en: "WhatsApp Concierge Support", id: "Layanan Concierge WhatsApp" },
        description: {
          en: "Direct communication with our hosting team for inquiries, tips, and requests.",
          id: "Komunikasi langsung dengan tim host untuk permintaan khusus dan rekomendasi lokal.",
        },
        iconName: "MessageCircle",
      },
      {
        title: { en: "Daily Discreet Housekeeping", id: "Pembersihan Harian Leluasa" },
        description: {
          en: "Professional care keeping your sanctuary immaculate while honoring your privacy.",
          id: "Perawatan profesional menjaga vila tetap bersih tanpa mengganggu privasi Anda.",
        },
        iconName: "ShieldCheck",
      },
      {
        title: { en: "Curated Breakfast Baskets", id: "Keranjang Sarapan Kurasi" },
        description: {
          en: "Morning deliveries of freshly baked artisan bread, tropical fruits, and dairy.",
          id: "Pengantaran roti artisan hangat, buah-buahan tropis, dan keju segar setiap pagi.",
        },
        iconName: "Heart",
      },
    ],
  },
];

