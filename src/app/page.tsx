import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import BoxContents from "@/components/BoxContents";
import Specs from "@/components/Specs";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import StickyBar from "@/components/StickyBar";
import OrderPanel from "@/components/OrderPanel";

export default function Home() {
  return (
    <>
      <OrderPanel />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <BoxContents />
        <Specs />
        <Gallery />
        <WhyUs />
        <StatsSection />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
