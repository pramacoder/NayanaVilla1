# Nayana Villa — Luxury Tropical Villa Website (Portfolio Demo)

[![Next.js 14](https://img.shields.io/badge/Next.js-14.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![next-intl](https://img.shields.io/badge/next--intl-Bilingual_EN%2FID-success?style=flat-square)](https://next-intl.dev/)
[![Tests](https://img.shields.io/badge/Tests-11%2F11_Passed-brightgreen?style=flat-square)]()

Situs web demonstrasi portofolio vila mewah tropis (*tropical luxury boutique villa*) dwibahasa (**English & Bahasa Indonesia**) yang dibangun untuk memamerkan kapabilitas rekayasa frontend modern, desain berkelas, performa tinggi, dan alur permintaan reservasi WhatsApp untuk pemilik properti dan industri *hospitality*.

---

> [!IMPORTANT]
> ### PEMBERITAHUAN DEMO / DEMO DISCLAIMER
> 
> **ID:** **Nayana Villa adalah proyek portofolio demonstrasi fiktif.** Properti ini bukan merupakan hotel, resor, atau vila fisik yang beroperasi secara nyata. Seluruh nama suite, foto, fasilitas, ulasan konseptual, tarif ketersediaan, dan nomor kontak disajikan semata-mata sebagai **materi simulasi portofolio profesional** untuk mendemonstrasikan keahlian pengembangan situs web properti.
> 
> **EN:** **Nayana Villa is a fictional demonstration portfolio website.** It is not an active commercial property, operating resort, or physical accommodation business. All suite descriptions, rates, availability dates, coordinates, and contact details are simulated portfolio assets crafted to demonstrate modern web engineering, luxury hospitality aesthetics, and inquiry automation.

---

## 🌴 Gambaran Proyek & Identitas Brand

- **Nama Brand:** Nayana Villa
- **Tagline:** *Where Nature Meets Serenity.*
- **Konsep Lokasi:** Ubud, Bali, Indonesia *(Konseptual Pesisir & Tropis)*
- **Bahasa yang Didukung:** 
  - English (`/en`) — Standar internasional
  - Bahasa Indonesia (`/id`) — Wisatawan domestik
- **Model Bisnis MVP:** Formulir permintaan reservasi berbasis pesan WhatsApp terformat (*Inquiry to WhatsApp message preparation*). Tidak menggunakan mesin pembayaran otomatis atau pemesanan kamar instan per spesifikasi PRD.

---

## 🎯 Mengapa Proyek Ini Dibuat sebagai Demo?

Proyek ini dirancang sebagai contoh acuan (*benchmark demonstration*) bagi calon klien pemilik properti, pengelola vila, atau agensi perhotelan yang membutuhkan website komersial dengan standar industri:

1. **Bukan Mesin Reservasi Otomatis (No Direct Payment/Booking Engine)**  
   Situs ini mendemonstrasikan alur *high-touch concierge inquiry*: pengunjung mengisi formulir dengan validasi ketat, lalu sistem mengompilasi pesan WhatsApp yang rapi untuk dikirimkan secara manual. Tidak ada data kartu kredit atau pembayaran yang diproses.
2. **Kejujuran & Integritas Konten**  
   Tidak ada sertifikasi fiktif, ulasan tamu palsu, atau klaim bintang palsu. Semua data harga disajikan secara transparan dengan label demo.
3. **Pembuktian Standar Rekayasa Web Modern**  
   Menunjukkan kemampuan menyajikan visual kelas atas tanpa mengorbankan kecepatan akses, skor Core Web Vitals, aksesibilitas WCAG, dan optimasi SEO.

---

## ✨ Fitur Unggulan yang Didemonstrasikan

- **Arsitektur Next.js 14 App Router (Static Site Generation / SSG):** 27 halaman statis terkompilasi penuh untuk performa instan dan SEO optimal.
- **Internasionalisasi Dwibahasa Penuh (`next-intl`):** Paritas kunci 100% antara bahasa Inggris dan Indonesia pada setiap halaman, URL routing, metadata SEO, dan formulir.
- **Tipografi & Desain Tropis Santai (*Relaxed Luxury*):** Menggabungkan font editorial santai **Playfair Display**, **Cormorant Garamond**, dan **DM Sans** dengan palet warna pesisir (*shoreline*, *ocean*, dan *neutral sand*).
- **Hero Headline & Floating Quick Search:** Formulir pencarian cepat di bagian atas yang langsung membawa parameter suite, tanggal, dan jumlah tamu ke halaman reservasi.
- **Sistem Formulir Reservasi Interaktif & Validasi Zod:** Validasi tanggal check-in (tidak boleh masa lalu), check-out (harus setelah check-in), jumlah tamu (1–20 orang), serta persetujuan privasi.
- **Peta Lokasi Google Maps & Bilah Jarak Tempuh:** Iframe embed Google Maps resmi yang terintegrasi tepat sebelum footer dengan bilah rute sage (*Distances & Directions*) interaktif.
- **Branding Lengkap & Tab Favicon:** Favicon multi-ukuran terintegrasi penuh pada tab browser (`favicon.ico`, `icon-32.png`, `icon.png`, `apple-icon.png`) beserta logo lambang di navbar.
- **Optimasi Gambar Otomatis (WebP + Sharp):** Foto beresolusi tinggi dikonversi ke format WebP ringan dengan *caching* jangka panjang untuk waktu muat instan.
- **Aksesibilitas (a11y) & SEO:** Tag semantik HTML5, rasio kontras warna tinggi, navigasi keyboard lengkap, `robots.ts`, dan `sitemap.ts` otomatis.

---

## 🛠️ Tumpukan Teknologi (Tech Stack)

| Kategori | Teknologi | Deskripsi |
|---|---|---|
| **Framework** | Next.js 14 (App Router) | Server Components, SSG, Static Rendering |
| **Bahasa** | TypeScript 5 (Strict Mode) | Tipe data ketat, 0 `any` tidak terdokumentasi |
| **Styling** | Tailwind CSS 3.4 | Token desain kustom (`shoreline`, `ocean`, `neutral`) |
| **Lokalisasi** | `next-intl` | Routing dan manajemen terjemahan EN / ID |
| **Validasi Form** | Zod | Skema validasi runtime data pemesanan |
| **Ikonografi** | Lucide React | Ikon modern, ringan, dan ramah aksesibilitas |
| **Optimasi Gambar**| Sharp & `next/image` | Konversi otomatis ke format WebP ultra-cepat |
| **Testing** | Node.js Test Runner + `tsx` | Unit testing otomatis skema Zod, WA formatter, dan i18n |

---

## 🚀 Panduan Memulai Cepat (Local Development)

### 1. Prasyarat
- **Node.js**: v18.17.0 atau lebih baru (disarankan v20+)
- **NPM**: v9 atau lebih baru

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Konfigurasi Lingkungan (`.env.local`)
Buat file `.env.local` di direktori utama:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP_NUMBER=6287743447062
```
> *Catatan: Gunakan format nomor internasional tanpa tanda tambah atau spasi (contoh: `6287743447062`).*

### 4. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser di:
- **Bahasa Indonesia:** [http://localhost:3000/id](http://localhost:3000/id)
- **English:** [http://localhost:3000/en](http://localhost:3000/en)

---

## 🧪 Pengujian & Verifikasi Kualitas

Seluruh kode telah diuji secara otomatis dan bebas dari galat:

```bash
# 1. Jalankan unit test (11/11 tests)
npm test

# 2. Periksa tipe data TypeScript
npm run typecheck

# 3. Jalankan linter ESLint
npm run lint

# 4. Bangun versi produksi (SSG 27 halaman)
npm run build
```

---

## 📁 Struktur Direktori

```text
NayanaVillaPorto/
├── public/                     # Aset publik statis (favicon, ikon, gambar WebP)
│   ├── favicon.ico
│   ├── icon.png
│   ├── icon-32.png
│   └── images/
├── messages/                   # Kamus terjemahan i18n terpusat
│   ├── en.json                 # Kamus bahasa Inggris
│   └── id.json                 # Kamus bahasa Indonesia
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/           # Rute halaman yang dilokalisasi (en/id)
│   │   │   ├── about/          # Halaman filosofi & konsep
│   │   │   ├── accommodation/  # Daftar suite & detail dinamis [slug]
│   │   │   ├── booking/        # Halaman formulir reservasi
│   │   │   ├── contact/        # Halaman kontak & peta
│   │   │   ├── facilities/     # Fasilitas kolam renang & santap
│   │   │   ├── gallery/        # Galeri foto dengan Lightbox interaktif
│   │   │   ├── location/       # Detail lokasi Ubud & akses sekitar
│   │   │   ├── layout.tsx      # Layout utama (Navbar, MapSection, Footer)
│   │   │   └── page.tsx        # Halaman Beranda utama
│   │   ├── robots.ts           # Konfigurasi SEO bot crawlers
│   │   └── sitemap.ts          # Generator peta situs XML dinamis
│   ├── components/
│   │   ├── booking/            # Komponen form reservasi WhatsApp
│   │   ├── gallery/            # Komponen lightbox foto
│   │   ├── layout/             # Footer & tata letak global
│   │   ├── navigation/         # Navbar transparan/scrolled & Logo
│   │   ├── sections/           # Hero, Accommodations, MapSection, dll.
│   │   └── ui/                 # Reusable UI (Button, Badge, Container)
│   ├── data/                   # Data simulasi suite, fasilitas, galeri
│   ├── i18n/                   # Konfigurasi routing next-intl
│   ├── lib/                    # Validasi Zod & generator pesan WhatsApp
│   └── styles/                 # Tailwind CSS & konfigurasi font
├── tests/                      # Unit test suite (tsx + node:test)
├── docs/                       # Dokumentasi arsitektur & desain (PRD, DESIGN, dll.)
└── AGENTS.md                   # Aturan operasional & batasan pengembangan
```

---

## 💼 Cara Mengadaptasi untuk Klien Properti Nyata

Jika ingin mentransformasikan proyek demonstrasi ini untuk properti komersial nyata:
1. Ganti aset gambar simulasi di `public/images/` dengan fotografi profesional properti riil.
2. Perbarui konten dan narasi di `messages/en.json` dan `messages/id.json` sesuai karakteristik properti.
3. Hubungkan nomor WhatsApp operasional dan alamat email resmi di file konfigurasi lingkungan `.env.local`.
4. Sesuaikan titik koordinat Google Maps di `src/components/sections/map-section.tsx` dengan alamat fisik properti.
5. *(Opsional)* Jika klien menginginkan pembayaran online instan, integrasikan payment gateway (seperti Midtrans, Xendit, atau Stripe) dan sistem kalender PMS (*Property Management System*).

---

## 📜 Lisensi & Atribusi Aset
Dibuat sebagai karya portofolio web demonstrasi. Seluruh foto yang digunakan berasal dari sumber berlisensi bebas atau aset yang disediakan untuk demonstrasi portofolio.
