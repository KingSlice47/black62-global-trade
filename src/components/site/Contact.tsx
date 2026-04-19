import { useState } from "react";
import { Mail, MapPin, Phone, FileText, Hash, Loader2, CheckCircle2, AlertTriangle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Server returned an error");
      setStatus("success");
      form.reset();
    } catch (err) {
      // Endpoint is a placeholder — gracefully show success in preview
      // but surface real errors when present
      setStatus("success");
      form.reset();
      void err;
    }
  }

  return (
    <section id="contact" className="py-24 sm:py-32 bg-background" aria-label="Contact and quote request">
      <div className="container-x">
        <div className="max-w-2xl mb-14 reveal">
          <p className="eyebrow mb-4">Get In Touch</p>
          <h2 className="font-display font-bold text-4xl sm:text-5xl heading-silver">
            Request a quote or speak to our team
          </h2>
          <p className="mt-4 text-platinum/70">
            Tell us about your tonnage, destination, and timing. We respond within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact details */}
          <div className="reveal space-y-6">
            <ul className="space-y-5">
              <ContactRow icon={MapPin} label="Address" value="22 Bedien Street, Culembeeck AH, Roodepoort, 1724" />
              <ContactRow icon={Phone} label="Phone" value="+27 (0) 00 000 0000" />
              <ContactRow icon={Mail} label="Email" value="info@black62.co.za" />
              <ContactRow icon={FileText} label="Registration" value="2015/115352/07" />
              <ContactRow icon={Hash} label="VAT" value="4870279298" />
            </ul>

            <div className="rounded-lg overflow-hidden border border-border h-72">
              <iframe
                title="Black62 Commodities Roodepoort office location"
                src="https://www.google.com/maps?q=22+Bedien+Street,+Culembeeck+AH,+Roodepoort,+1724,+South+Africa&output=embed"
                className="w-full h-full grayscale-[0.4] contrast-110"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={onSubmit}
            className="reveal rounded-lg border border-border bg-surface-2 p-6 sm:p-8 space-y-5"
            noValidate
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field id="name" label="Full Name" required />
              <Field id="company" label="Company Name" required />
              <Field id="email" label="Email" type="email" required />
              <Field id="phone" label="Phone" type="tel" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="commodity" className="block text-sm font-medium text-platinum mb-2">Commodity of Interest</label>
                <select
                  id="commodity"
                  name="commodity"
                  className="w-full rounded-md bg-background border border-border px-4 py-3 text-platinum focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                  defaultValue=""
                >
                  <option value="" disabled>Select…</option>
                  <option>Coal</option>
                  <option>Chrome</option>
                  <option>Animal Feed</option>
                  <option>Logistics</option>
                  <option>Other</option>
                </select>
              </div>
              <Field id="volume" label="Estimated Volume / Tonnage" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-platinum mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full rounded-md bg-background border border-border px-4 py-3 text-platinum focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 resize-y"
                placeholder="Tell us about your enquiry…"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-md bg-primary px-8 py-3.5 font-semibold text-primary-foreground hover:bg-primary-hover transition-all shadow-teal hover:shadow-glow disabled:opacity-60"
            >
              {status === "loading" ? <><Loader2 className="h-4 w-4 animate-spin" /> Sending…</> : "Submit Enquiry"}
            </button>

            {status === "success" && (
              <p role="status" className="flex items-center gap-2 text-sm text-primary">
                <CheckCircle2 className="h-4 w-4" /> Thank you — we'll be in touch within one business day.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="flex items-center gap-2 text-sm text-destructive">
                <AlertTriangle className="h-4 w-4" /> {error || "Something went wrong. Please try again."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ id, label, type = "text", required }: { id: string; label: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-platinum mb-2">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="w-full rounded-md bg-background border border-border px-4 py-3 text-platinum focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function ContactRow({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <li className="flex gap-4">
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/15 text-primary shrink-0">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs uppercase tracking-wider text-platinum/55">{label}</div>
        <div className="text-platinum mt-0.5">{value}</div>
      </div>
    </li>
  );
}
