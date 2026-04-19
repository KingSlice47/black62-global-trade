import { Helmet } from "react-helmet-async";
import { Download, Printer } from "lucide-react";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export default function CompanyProfile() {
  return (
    <>
      <Helmet>
        <title>Company Profile | Black62 Commodities</title>
        <meta name="description" content="Black62 Commodities full company profile — heritage, services, commodities, logistics capabilities and registration details." />
        <link rel="canonical" href="https://www.black62.co.za/company-profile" />
      </Helmet>
      <Header />

      <main className="pt-32 pb-24 bg-background">
        <article className="container-x max-w-4xl">
          <p className="eyebrow mb-4">Company Profile</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl heading-silver mb-6">
            Black62 Commodities (Pty) Ltd
          </h1>
          <p className="text-platinum/70 text-lg mb-8 max-w-3xl">
            A South African commodities trading and bulk logistics company specialising in coal, chrome
            and animal feed — backed by 20+ years of combined sector experience.
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary-hover transition-colors shadow-teal"
            >
              <Download className="h-4 w-4" /> Download PDF
            </button>
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-md border border-platinum/40 px-6 py-3 font-semibold text-platinum hover:bg-platinum/10"
            >
              <Printer className="h-4 w-4" /> Print
            </button>
          </div>

          <div className="prose prose-invert max-w-none space-y-10 text-platinum/80 leading-relaxed">
            <Section title="About the Company">
              <p>
                Black62 Commodities is the new identity of Tsogang Brands (Pty) Ltd, registered in 2015
                under registration number 2015/115352/07. The rebrand reflects a sharpened focus on the
                physical trading of coal, chrome and animal feed, supported by end-to-end bulk logistics
                across South Africa and the wider SADC region.
              </p>
              <p>
                Our management team brings together more than two decades of combined experience across
                mining, energy, agriculture and freight. We are headquartered in Roodepoort, Gauteng.
              </p>
            </Section>

            <Section title="Vision">
              <p>
                To become Africa's most dependable trading and logistics partner for industrial and
                agricultural commodities — connecting reputable producers to domestic and global buyers
                with discipline, transparency and scale.
              </p>
            </Section>

            <Section title="Mission">
              <p>
                We move the right material to the right buyer at the right time — with full compliance,
                fair pricing and reliable execution.
              </p>
            </Section>

            <Section title="Core Commodities">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-platinum">Coal</strong> — Thermal and metallurgical grade coal for power, industry and export.</li>
                <li><strong className="text-platinum">Chrome</strong> — Chrome ore and concentrate to local smelters and export markets.</li>
                <li><strong className="text-platinum">Animal Feed</strong> — Bulk feed for livestock, poultry, dairy and feedlot operations.</li>
              </ul>
            </Section>

            <Section title="Logistics Capabilities">
              <ul className="list-disc pl-6 space-y-2">
                <li>Bulk road freight for coal, chrome and agricultural commodities</li>
                <li>Rail and port logistics coordination for export cargoes</li>
                <li>Fleet management and scheduling</li>
                <li>Cross-border SADC movements with full documentation</li>
                <li>Weighbridge and chain-of-custody management</li>
              </ul>
            </Section>

            <Section title="Compliance &amp; Registration">
              <ul className="list-disc pl-6 space-y-2">
                <li>Registered Entity: Tsogang Brands (Pty) Ltd t/a Black62 Commodities</li>
                <li>Registration Number: 2015/115352/07</li>
                <li>VAT Number: 4870279298</li>
                <li>B-BBEE Compliant</li>
                <li>SARS &amp; regulatory aligned</li>
              </ul>
            </Section>

            <Section title="Head Office">
              <p>22 Bedien Street, Culembeeck AH, Roodepoort, 1724, South Africa</p>
              <p>Email: info@black62.co.za</p>
            </Section>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display font-semibold text-2xl text-platinum mb-3 border-l-2 border-primary pl-4">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
