import { Helmet } from "react-helmet-async";
import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import TrustBar from "@/components/site/TrustBar";
import About from "@/components/site/About";
import Commodities from "@/components/site/Commodities";
import Logistics from "@/components/site/Logistics";
import WhyUs from "@/components/site/WhyUs";
import Contact from "@/components/site/Contact";
import { useReveal } from "@/hooks/useReveal";

const Index = () => {
  useReveal();

  return (
    <>
      <Helmet>
        <title>Black62 Commodities | Coal, Chrome &amp; Animal Feed Trading South Africa</title>
        <meta
          name="description"
          content="Trusted South African trading and bulk logistics partner in coal, chrome and animal feed. 20+ years of combined industry experience."
        />
        <link rel="canonical" href="https://www.black62.co.za/" />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <About />
        <Commodities />
        <Logistics />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
