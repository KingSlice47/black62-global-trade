import port from "@/assets/industrial-port.jpg";

const stats = [
  { value: "20+", label: "Years Combined Experience" },
  { value: "3", label: "Core Commodity Verticals" },
  { value: "Nationwide", label: "Logistics Network" },
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-background" aria-label="About Black62 Commodities">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <p className="eyebrow mb-4">About Us</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl heading-silver mb-6">
              From Tsogang Brands to Black62 Commodities
            </h2>
            <div className="space-y-5 text-platinum/70 leading-relaxed">
              <p>
                Black62 Commodities is the new identity of Tsogang Brands (Pty) Ltd — a South African
                trading and bulk logistics business with a decade of operating heritage and over twenty
                years of combined management experience across the mining, energy and agricultural sectors.
              </p>
              <p>
                Our rebrand reflects our sharper focus: physical commodities trading in coal, chrome and
                animal feed, supported by reliable end-to-end logistics. We work with reputable producers,
                hauliers and end-users to move material at scale, on schedule, and with full compliance.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <div className="corner-frame">
              <img
                src={port}
                alt="Aerial view of an industrial bulk commodities port at sunset"
                className="w-full h-[440px] object-cover rounded-sm"
                loading="lazy"
                width={1024}
                height={1024}
              />
            </div>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal rounded-lg border border-border bg-surface-2 p-8 text-center hover:border-primary/50 transition-colors"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="font-display font-bold text-4xl sm:text-5xl text-primary mb-2">{s.value}</div>
              <div className="text-sm uppercase tracking-wider text-platinum/70">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
