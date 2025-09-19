import dynamic from "next/dynamic";
import WhyChoose from "./components/WhyChoose";
import ServicesPreview from "./components/ServicesPreview";
import CTASection from "./components/CTASection";

const Hero = dynamic(() => import("./components/Hero"));
const Testimonials = dynamic(() => import("./components/Testimonials"));

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
