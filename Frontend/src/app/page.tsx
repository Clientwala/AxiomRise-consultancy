import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesGrid from "@/components/sections/ServicesGrid";
import SourcingTalent from "@/components/sections/SourcingTalent";
import WhyUs from "@/components/sections/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <SourcingTalent />
      <WhyUs />
    </>
  );
}
