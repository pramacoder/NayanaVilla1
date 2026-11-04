export type LocalizedText = {
  en: string;
  id: string;
};

export type Accommodation = {
  slug: string;
  name: LocalizedText;
  tagline: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  coverImage: string;
  gallery: string[];
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  areaSqm: number;
  amenities: LocalizedText[];
  indicativePrice: {
    amount: number;
    currency: string;
    formatted: string;
    label: LocalizedText;
  };
  featured: boolean;
};

export const accommodations: Accommodation[] = [
  {
    slug: "shoreline-sanctuary",
    name: {
      en: "Shoreline Sanctuary Villa",
      id: "Vila Suaka Pesisir",
    },
    tagline: {
      en: "Private Pool & Beachfront Veranda",
      id: "Kolam Renang Privat & Beranda Pantai",
    },
    shortDescription: {
      en: "An intimate two-storey villa with Italian furnishings, direct private pool access, and tranquil courtyard seclusion.",
      id: "Vila dua lantai yang intim dengan perabotan khas Italia, akses langsung kolam renang privat, dan keteduhan halaman asri.",
    },
    description: {
      en: "Designed for travelers seeking effortless relaxation. Features two spacious bedrooms, stone-clad archways, designer white loungers, and immediate access to the sun-drenched private pool and nearby sandy shores.",
      id: "Dirancang bagi Anda yang mendambakan relaksasi tanpa batas. Menampilkan dua kamar tidur lapang, lengkungan batu alam, kursi santai desainer, dan akses langsung ke kolam renang pribadi serta pantai berpasir.",
    },
    coverImage: "/images/hero-twilight.webp",
    gallery: [
      "/images/hero-twilight.webp",
      "/images/pool-day.webp",
      "/images/pool-greenery.webp",
    ],
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 2,
    areaSqm: 70,
    amenities: [
      { en: "Private Swimming Pool", id: "Kolam Renang Privat" },
      { en: "Direct Beach Access", id: "Akses Langsung ke Pantai" },
      { en: "Sun Deck & Loungers", id: "Dek Berjemur & Kursi Santai" },
      { en: "High-Speed Wi-Fi", id: "Wi-Fi Berkecepatan Tinggi" },
      { en: "Air Conditioning", id: "Pendingin Ruangan (AC)" },
      { en: "Artisan Kitchenette", id: "Dapur Kecil Artisan" },
    ],
    indicativePrice: {
      amount: 3200000,
      currency: "IDR",
      formatted: "Rp 3.200.000",
      label: {
        en: "per night (illustrative)",
        id: "per malam (ilustratif)",
      },
    },
    featured: true,
  },
  {
    slug: "azure-balcony-suite",
    name: {
      en: "Azure Horizon Suite",
      id: "Suite Cakrawala Azure",
    },
    tagline: {
      en: "Panoramic Sea View & Sun Terrace",
      id: "Pemandangan Laut Panoramik & Teras Surya",
    },
    shortDescription: {
      en: "Perched high with sweeping views across the turquoise bay, white sun terrace, and gentle coastal breezes.",
      id: "Terletak di ketinggian dengan pemandangan teluk biru kehijauan, teras putih bermandikan surya, dan semilir angin pantai.",
    },
    description: {
      en: "Wake up to endless ocean horizons. This elevated retreat offers a private scenic terrace, outdoor dining table, plush king bed, and floor-to-ceiling glass doors opening onto the sea.",
      id: "Bangun dengan pemandangan laut tanpa batas. Suaka bertingkat ini menawarkan teras berpemandangan eksklusif, meja makan terbuka, tempat tidur king nyaman, dan pintu kaca lebar menghadap laut.",
    },
    coverImage: "/images/balcony-seaview.webp",
    gallery: [
      "/images/balcony-seaview.webp",
      "/images/beach-aerial.webp",
      "/images/coastal-bay.jpg",
    ],
    maxGuests: 2,
    bedrooms: 1,
    bathrooms: 1,
    areaSqm: 48,
    amenities: [
      { en: "Panoramic Sea View Balcony", id: "Balkon Pemandangan Laut Panoramik" },
      { en: "Outdoor Breakfast Table", id: "Meja Sarapan Terbuka" },
      { en: "King Size Bed", id: "Tempat Tidur King Size" },
      { en: "En-suite Rainfall Shower", id: "Kamar Mandi Pancuran Hujan" },
      { en: "Smart Entertainment TV", id: "Smart TV Hiburan" },
      { en: "Espresso Maker", id: "Mesin Kopi Espresso" },
    ],
    indicativePrice: {
      amount: 2400000,
      currency: "IDR",
      formatted: "Rp 2.400.000",
      label: {
        en: "per night (illustrative)",
        id: "per malam (ilustratif)",
      },
    },
    featured: true,
  },
  {
    slug: "grand-nayana-residence",
    name: {
      en: "Grand Nayana Residence",
      id: "Kediaman Grand Nayana",
    },
    tagline: {
      en: "Lush Tropical Courtyard & Family Villa",
      id: "Halaman Tropis Asri & Vila Keluarga",
    },
    shortDescription: {
      en: "Our most expansive multi-room sanctuary featuring a tropical garden perimeter, deep lounging patio, and private pool.",
      id: "Suaka terluas kami dengan taman tropis rimbun di sekelilingnya, teras bersantai yang luas, dan kolam renang privat.",
    },
    description: {
      en: "The ultimate gathering space for families or small groups. Three refined bedrooms, full gourmet kitchen, indoor-outdoor living flow, and dedicated sun umbrellas by the pool.",
      id: "Ruang berkumpul istimewa untuk keluarga atau kelompok kecil. Tiga kamar tidur elegan, dapur lengkap, konsep ruang terbuka-tertutup, dan payung peneduh di tepi kolam.",
    },
    coverImage: "/images/pool-greenery.webp",
    gallery: [
      "/images/pool-greenery.webp",
      "/images/hero-twilight.webp",
      "/images/dining-breakfast.jpg",
    ],
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 3,
    areaSqm: 125,
    amenities: [
      { en: "Private Garden & Pool", id: "Taman & Kolam Renang Privat" },
      { en: "Gourmet Chef Kitchen", id: "Dapur Lengkap Gourmet" },
      { en: "Spacious Living Pavilion", id: "Paviliun Ruang Keluarga Luas" },
      { en: "Daily Morning Housekeeping", id: "Layanan Kebersihan Pagi Harian" },
      { en: "Dedicated Dining Area", id: "Area Makan Khusus" },
      { en: "Private Parking", id: "Area Parkir Privat" },
    ],
    indicativePrice: {
      amount: 4800000,
      currency: "IDR",
      formatted: "Rp 4.800.000",
      label: {
        en: "per night (illustrative)",
        id: "per malam (ilustratif)",
      },
    },
    featured: true,
  },
];

