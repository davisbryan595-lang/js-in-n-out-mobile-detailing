import Hero from "./components/Hero";
import WhyChoose from "./components/WhyChoose";
import ServicesPreview from "./components/ServicesPreview";
import Testimonials from "./components/Testimonials";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <ServicesPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
