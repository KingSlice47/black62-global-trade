import { Check } from "lucide-react";

const points = [
  "Bulk road freight for coal, chrome, and agricultural commodities",
  "Rail and port logistics coordination for export cargoes",
  "Fleet management and scheduling",
  "Cross-border SADC movements with full documentation",
  "Weighbridge and chain-of-custody management",
];

// Approximate coordinates within a 800x600 viewBox
const cities = [
  { name: "Johannesburg", x: 470, y: 270 },
  { name: "Durban", x: 555, y: 360 },
  { name: "Cape Town", x: 280, y: 510 },
  { name: "Gaborone", x: 410, y: 200 },
  { name: "Maputo", x: 580, y: 250 },
  { name: "Walvis Bay", x: 220, y: 290 },
];

const routes: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [4, 1],
];

export default function Logistics() {
  return (
    <section id="logistics" className="py-24 sm:py-32 bg-background relative overflow-hidden" aria-label="Logistics and transport">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal">
            <p className="eyebrow mb-4">Logistics &amp; Transport</p>
            <h2 className="font-display font-bold text-4xl sm:text-5xl heading-silver mb-8">
              End-to-End Bulk Logistics
            </h2>
            <ul className="space-y-4">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-platinum/80">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-primary shrink-0">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[15px] leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal" style={{ transitionDelay: "120ms" }}>
            <div className="rounded-lg border border-border bg-surface-2/60 p-6">
              <svg viewBox="0 0 800 600" className="w-full h-auto" role="img" aria-label="Map showing routes across Southern Africa">
                {/* Simplified Southern Africa outline */}
                <path
                  d="M180 220 L220 180 L260 170 L300 150 L360 140 L420 145 L480 160 L540 180 L600 200 L640 230 L660 270 L640 320 L630 370 L600 420 L560 460 L500 490 L440 510 L380 520 L320 515 L280 500 L240 470 L210 430 L190 380 L180 330 Z"
                  fill="hsl(var(--surface))"
                  stroke="hsl(var(--primary) / 0.4)"
                  strokeWidth="1.5"
                />
                {/* Routes */}
                {routes.map(([a, b], i) => (
                  <line
                    key={i}
                    x1={cities[a].x} y1={cities[a].y}
                    x2={cities[b].x} y2={cities[b].y}
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    className="animate-dash"
                  />
                ))}
                {/* Cities */}
                {cities.map((c) => (
                  <g key={c.name}>
                    <circle cx={c.x} cy={c.y} r="14" fill="hsl(var(--primary) / 0.18)">
                      <animate attributeName="r" values="10;18;10" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={c.x} cy={c.y} r="5" fill="hsl(var(--primary))" />
                    <text
                      x={c.x + 12}
                      y={c.y - 10}
                      fill="hsl(var(--foreground))"
                      fontSize="13"
                      fontFamily="Inter, sans-serif"
                      fontWeight="500"
                    >
                      {c.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
