import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Sun, Coffee, Waves, Bell } from "lucide-react";

export function ExperiencesSection() {
  const experiences = [
    {
      title: "Poolside Solitude",
      category: "In-Villa Comfort",
      description: "Private swimming waters surrounded by lush greenery, crafted for unhurried laps and morning contemplation.",
      image: "/images/pool-greenery.webp",
      icon: Sun,
    },
    {
      title: "Artisan Breakfast",
      category: "Culinary Morning",
      description: "Freshly baked sourdough, local cheeses, seasonal berries, and freshly squeezed juices delivered to your veranda.",
      image: "/images/dining-breakfast.jpg",
      icon: Coffee,
    },
    {
      title: "Pristine Shoreline",
      category: "Nature & Beach",
      description: "Steps away from gentle seaside waves, private beach umbrellas, and the therapeutic warmth of golden sand.",
      image: "/images/beach-aerial.webp",
      icon: Waves,
    },
    {
      title: "Bespoke Concierge",
      category: "Personal Care",
      description: "Tailored island excursions, private chef reservations, and seamless WhatsApp assistance at your convenience.",
      image: "/images/service-bell.jpg",
      icon: Bell,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="shoreline">Boutique Experiences</Badge>
          <h2 className="text-3xl sm:text-5xl font-editorial font-normal text-neutral-900 leading-heading tracking-tight text-balance">
            Curated Moments Designed to Restore
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-sans text-pretty">
            Every stay at Nayana Villa is shaped around gentle rituals that inspire
            deep relaxation and connection with coastal nature.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="group relative rounded-3xl overflow-hidden bg-neutral-900 text-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-end aspect-[3/4]"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-90"
                />

                {/* Dark Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />

                {/* Card Content */}
                <div className="relative z-10 p-6 space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-xs text-shoreline-200">
                      <IconComponent className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-shoreline-200 font-medium">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-editorial font-medium text-white group-hover:text-shoreline-100 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-300/90 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

