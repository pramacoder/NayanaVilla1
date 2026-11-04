import Image from "next/image";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

export function PhilosophySection() {
  const t = useTranslations("home.philosophy");

  return (
    <section className="relative py-28 lg:py-36 overflow-hidden text-white bg-neutral-900">
      {/* Background Cinematic Image with z-0 */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/balcony-seaview.webp"
          alt="Panoramic azure sea horizon from villa terrace"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark Ocean Overlay */}
        <div className="absolute inset-0 bg-neutral-900/80 backdrop-blur-[1px]" />
      </div>

      <Container size="narrow" className="relative z-10 text-center space-y-6">
        <Badge
          variant="outline"
          className="border-white/30 text-white bg-white/10 backdrop-blur-xs"
        >
          {t("badge")}
        </Badge>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-editorial font-normal text-white leading-heading tracking-tight text-balance">
          {t("heading")}
        </h2>

        <div className="w-12 h-px bg-shoreline-300 mx-auto my-6 opacity-60" />

        <p className="text-base sm:text-lg text-neutral-200/90 leading-relaxed font-sans max-w-xl mx-auto text-pretty">
          {t("description")}
        </p>

        <blockquote className="text-sm font-editorial italic text-shoreline-200/90 pt-4">
          &ldquo;True serenity is not the absence of sound, but finding the melody of nature.&rdquo;
        </blockquote>
      </Container>
    </section>
  );
}
