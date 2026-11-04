import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Navbar } from "@/components/navigation/navbar";
import { MapSection } from "@/components/sections/map-section";
import { Footer } from "@/components/layout/footer";
import "@/styles/globals.css";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    title: {
      default: t("site_title"),
      template: `%s | Nayana Villa`,
    },
    description: t("site_description"),
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
    ),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        id: "/id",
      },
    },
    openGraph: {
      title: t("site_title"),
      description: t("site_description"),
      siteName: "Nayana Villa",
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    icons: {
      icon: [
        { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/icon.png", sizes: "120x120", type: "image/png" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-icon.png",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!routing.locales.includes(locale as "en" | "id")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/icon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="120x120" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="min-h-screen flex flex-col font-sans bg-white text-neutral-800 antialiased selection:bg-shoreline-200 selection:text-neutral-900">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <div className="flex-1 flex flex-col">{children}</div>
          <MapSection />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
