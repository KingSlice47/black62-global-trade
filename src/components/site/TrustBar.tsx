import { ShieldCheck, Award, Globe2, FileBadge } from "lucide-react";

const items = [
  { icon: ShieldCheck, label: "B-BBEE Compliant" },
  { icon: Award, label: "20+ Years Experience" },
  { icon: Globe2, label: "Pan-African Reach" },
  { icon: FileBadge, label: "Reg No: 2015/115352/07" },
];

export default function TrustBar() {
  return (
    <section id="trust" className="bg-surface border-y border-border" aria-label="Trust indicators">
      <div className="container-x py-6">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm sm:text-[15px] text-platinum/85">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                <Icon className="h-4 w-4" />
              </span>
              <span className="font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
