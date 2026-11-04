import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { Sparkles, Sun, Leaf, ArrowRight } from "lucide-react";

type Props = {
  params: { locale: string };
};

export default function AboutPage({ params: { locale } }: Props) {
  setRequestLocale(locale);
  const t = useTranslations("about");

  const values = [
    {
      icon: Leaf,
      title: t("values.v1_title"),
      desc: t("values.v1_desc"),
    },
    {
      icon: Sun,
      title: t("values.v2_title"),
      desc: t("values.v2_desc"),
    },
    {
      icon: Sparkles,
      title: t("values.v3_title"),
      desc: t("values.v3_desc"),
    },
  ];

  return (
    <main className="flex-1 pt-28 pb-20">
      {/* Editorial Header */}
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

      {/* Story & Image Grid */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-shoreline-700 font-semibold">
                Philosophy & Vision
              </span>
              <h2 className="text-3xl sm:text-4xl font-editorial font-medium text-neutral-900 leading-tight">
                {t("story_heading")}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {t("story_p1")}
              </p>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {t("story_p2")}
              </p>

              {/* Core Values */}
              <div className="space-y-4 pt-6 border-t border-neutral-100">
                {values.map((v) => {
                  const Icon = v.icon;
                  return (
                    <div key={v.title} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-shoreline-100 text-shoreline-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
                          {v.title}
                        </h3>
                        <p className="text-xs text-neutral-500 mt-0.5">
                          {v.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/hero-twilight.webp"
                  alt="Villa at dusk"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md translate-y-6">
                <Image
                  src="/images/balcony-seaview.webp"
                  alt="Balcony sea view"
                  fill
                  sizes="25vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Direct CTA */}
      <section className="py-16 bg-neutral-900 text-white text-center">
        <Container size="narrow" className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-editorial font-normal">
            Experience Our Sanctuary in Person
          </h2>
          <p className="text-sm text-neutral-400 max-w-md mx-auto">
            Browse our suites or connect directly with our hosting team for
            custom dates and questions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/accommodation">
              <Button variant="shoreline" size="md">
                Explore Suites
              </Button>
            </Link>
            <Link href="/booking">
              <Button variant="primary" size="md">
                Book Your Stay
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

