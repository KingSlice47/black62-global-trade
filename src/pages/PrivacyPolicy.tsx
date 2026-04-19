import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Black62 Commodities</title>
        <meta name="description" content="POPIA-compliant privacy policy for Black62 Commodities (Pty) Ltd." />
        <link rel="canonical" href="https://www.black62.co.za/privacy-policy" />
      </Helmet>
      <Header />

      <main className="pt-32 pb-24 bg-background">
        <article className="container-x max-w-3xl text-platinum/80 leading-relaxed">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl heading-silver mb-4">Privacy Policy</h1>
          <p className="text-sm text-platinum/55 mb-10">Last updated: January 2026</p>

          <div className="space-y-8">
            <Block title="1. Introduction">
              <p>
                Black62 Commodities (Pty) Ltd ("we", "us", "our") is committed to protecting your personal
                information in accordance with the Protection of Personal Information Act, 2013 ("POPIA").
                This policy explains how we collect, use, store and protect personal information.
              </p>
            </Block>

            <Block title="2. Information We Collect">
              <p>We collect personal information that you voluntarily provide to us, including:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Name, company, email address and phone number submitted via our contact form</li>
                <li>Commodity interest, estimated tonnage and message content</li>
                <li>Technical information such as IP address and browser type, collected automatically</li>
              </ul>
            </Block>

            <Block title="3. How We Use Your Information">
              <ul className="list-disc pl-6 space-y-1">
                <li>To respond to enquiries and quote requests</li>
                <li>To provide and improve our trading and logistics services</li>
                <li>To comply with legal, regulatory and tax obligations (SARS, FIC, etc.)</li>
                <li>To send service-related communications</li>
              </ul>
            </Block>

            <Block title="4. Lawful Basis for Processing">
              <p>
                We process personal information on the basis of your consent, the performance of a
                contract, our legitimate business interests, or to comply with a legal obligation,
                in line with sections 11 and 13 of POPIA.
              </p>
            </Block>

            <Block title="5. Sharing of Information">
              <p>
                We do not sell your personal information. We may share it with trusted service providers
                (hosting, email, logistics partners) who process data on our behalf under appropriate
                confidentiality and security obligations.
              </p>
            </Block>

            <Block title="6. Data Security">
              <p>
                We implement reasonable technical and organisational measures to protect personal
                information against loss, unauthorised access, alteration or disclosure.
              </p>
            </Block>

            <Block title="7. Retention">
              <p>
                We retain personal information only for as long as necessary to fulfil the purposes for
                which it was collected, or as required by law.
              </p>
            </Block>

            <Block title="8. Your Rights">
              <p>Under POPIA, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Request access to your personal information</li>
                <li>Request correction or deletion of your information</li>
                <li>Object to or restrict processing</li>
                <li>Lodge a complaint with the Information Regulator (South Africa)</li>
              </ul>
            </Block>

            <Block title="9. Cookies">
              <p>
                Our website may use essential cookies for functionality. We do not use third-party
                advertising cookies. You can disable cookies in your browser settings.
              </p>
            </Block>

            <Block title="10. Contact">
              <p>
                For privacy-related queries or to exercise your rights, contact our Information Officer:
              </p>
              <p className="mt-2">
                Black62 Commodities (Pty) Ltd<br />
                22 Bedien Street, Culembeeck AH, Roodepoort, 1724<br />
                Email: info@black62.co.za
              </p>
            </Block>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display font-semibold text-xl text-platinum mb-2">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
