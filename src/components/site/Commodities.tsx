import { ArrowRight, Flame, Mountain, Wheat } from "lucide-react";
import coal from "@/assets/commodity-coal.jpg";
import chrome from "@/assets/commodity-chrome.jpg";
import feed from "@/assets/commodity-feed.jpg";

const items = [
  {
    title: "Coal",
    icon: Flame,
    image: coal,
    desc: "Thermal and metallurgical grade coal sourced from reputable South African producers, supplied to domestic industrial, power generation, and export markets.",
  },
  {
    title: "Chrome",
    icon: Mountain,
    image: chrome,
    desc: "Chrome ore and concentrate supplied to domestic smelters and international export markets, with full quality and compliance assurance.",
  },
  {
    title: "Animal Feed",
    icon: Wheat,
    image: feed,
    desc: "Bulk animal feed products for commercial livestock, poultry, dairy, and feedlot operations, delivered on schedule and at volume.",
  },
];

export default function Commodities() {
  return (
    <section id="commodities" className="py-24 sm:py-32 bg-surface" aria-label="Our commodities">
      <div className="container-x">
        <div className="max-w-2xl mb-16 reveal">
          <p className="eyebrow mb-4">What We Trade</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl heading-silver">
            Three commodities. One reliable partner.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ title, icon: Icon, image, desc }, i) => (
            <article
              key={title}
              className="reveal group relative overflow-hidden rounded-lg bg-surface-2 border border-border hover:border-primary hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={image}
                  alt={`${title} commodity`}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-2 via-surface-2/40 to-transparent" />
                <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-md bg-background/80 backdrop-blur border border-primary/40 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display font-semibold text-2xl text-platinum mb-3">{title}</h3>
                <p className="text-platinum/70 text-[15px] leading-relaxed mb-5">{desc}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
