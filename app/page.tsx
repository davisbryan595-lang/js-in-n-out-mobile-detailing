import dynamic from "next/dynamic";
import WhyChoose from "./components/WhyChoose";
import ServicesPreview from "./components/ServicesPreview";
import CTASection from "./components/CTASection";
import AboutSection from "./components/AboutSection";
import Gallery from "./components/Gallery";
import ContactSection from "./components/ContactSection";

const Hero = dynamic(() => import("./components/Hero"));
const Testimonials = dynamic(() => import("./components/Testimonials"));

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <WhyChoose />
      <ServicesPreview />
      <Gallery />
      <Testimonials />
      <ContactSection />
      <CTASection />
    </>
  );
}
