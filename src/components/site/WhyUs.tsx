import { Briefcase, Link2, Tag, ShieldCheck } from "lucide-react";

const features = [
  { icon: Briefcase, title: "Experienced Management", desc: "Over two decades of combined sector expertise." },
  { icon: Link2, title: "Reliable Supply Chain", desc: "Long-standing producer and transporter relationships." },
  { icon: Tag, title: "Competitive Pricing", desc: "Transparent, efficient, and commercially fair." },
  { icon: ShieldCheck, title: "Full Compliance", desc: "SARS, B-BBEE, and regulatory alignment." },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-24 sm:py-32 bg-surface" aria-label="Why choose Black62">
      <div className="container-x">
        <div className="max-w-2xl mb-16 reveal">
          <p className="eyebrow mb-4">Why Choose Black62</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl heading-silver">
            Built on trust. Engineered for scale.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="reveal rounded-lg border border-border bg-surface-2 p-7 hover:border-primary/60 transition-all"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display font-semibold text-lg text-platinum mb-2">{title}</h3>
              <p className="text-sm text-platinum/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
