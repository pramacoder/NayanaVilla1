import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

type Props = {
  params: { locale: string };
};

export default function GalleryPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations("gallery_page");

  return (
    <main className="flex-1 pt-28 pb-20">
      {/* Header */}
      <section className="py-12 lg:py-16 bg-shoreline-50/70 border-b border-neutral-200/60">
        <Container size="narrow" className="text-center space-y-4">
          <Badge variant="shoreline">{t("badge")}</Badge>
          <h1 className="text-4xl sm:text-6xl font-display font-normal text-neutral-900 leading-display tracking-tight text-balance">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-sans max-w-xl mx-auto text-pretty">
            {t("subtitle")}
          </p>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </main>
  );
}

