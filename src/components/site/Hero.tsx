import { ArrowDown, Download } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg" aria-hidden="true" />
      {/* Radial teal glow */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-radial-teal)" }}
        aria-hidden="true"
      />
      {/* Particles */}
      <Particles />

      <div className="container-x relative z-10 py-20">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6 animate-fade-in">South African Commodities Trading &amp; Logistics</p>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.02] heading-silver animate-fade-up">
            Moving Africa's<br />Commodities.<br />
            <span className="text-primary" style={{ WebkitTextFillColor: "hsl(var(--primary))" }}>Globally.</span>
          </h1>
          <p className="mt-8 text-lg sm:text-xl text-platinum/70 max-w-2xl animate-fade-up" style={{ animationDelay: "120ms" }}>
            Trusted trading and logistics partner in coal, chrome, and animal feed —
            backed by 20+ years of combined industry experience.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "240ms" }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 font-semibold text-primary-foreground hover:bg-primary-hover transition-all shadow-teal hover:scale-[1.02]"
            >
              Request a Quote
            </a>
            <Link
              to="/company-profile"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-platinum/40 bg-transparent px-8 py-4 font-semibold text-platinum hover:bg-platinum/10 hover:border-platinum transition-all"
            >
              <Download className="h-4 w-4" />
              Download Company Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#trust"
        aria-label="Scroll to next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-platinum/60 hover:text-primary transition-colors"
      >
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="h-5 w-5 animate-scroll-bounce" />
      </a>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 pointer-events-none" style={{ background: "var(--gradient-hero-fade)" }} aria-hidden="true" />
    </section>
  );
}

function Particles() {
  // Static SVG particles; lightweight, no JS animation per particle
  const dots = Array.from({ length: 36 });
  return (
    <svg
      className="absolute inset-0 h-full w-full opacity-60"
      viewBox="0 0 1000 1000"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {dots.map((_, i) => {
        const cx = (i * 137) % 1000;
        const cy = (i * 211) % 1000;
        const r = (i % 3) + 1;
        const dur = 3 + (i % 5);
        return (
          <circle key={i} cx={cx} cy={cy} r={r} fill="hsl(var(--primary))" opacity={0.25}>
            <animate attributeName="opacity" values="0.05;0.55;0.05" dur={`${dur}s`} repeatCount="indefinite" />
          </circle>
        );
      })}
    </svg>
  );
}
