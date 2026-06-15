import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProductsSection from "@/components/ProductsSection";
import WhyUs from "@/components/WhyUs";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
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
        <ProductsSection />
        <WhyUs />
        <StatsSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <StickyBar />
    </>
  );
}
