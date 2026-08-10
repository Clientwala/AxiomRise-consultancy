import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";

export const metadata: Metadata = {
  title: "Our Services — AxiomRise Consultancy",
  description: "Comprehensive HR Solutions and Management Consultancy services, from Permanent Recruitment to Company Incorporation and Secretarial support.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-soft overflow-hidden pt-20 md:pt-24">
        <div className="container-max px-6 lg:px-20 xl:px-28 py-16 md:py-20 text-center">
          <p className="eyebrow">What We Do</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight">Comprehensive HR & Corporate Services</h1>
          <p className="section-subtitle mx-auto">One partner. Every stage of your business lifecycle — from finding the best people to managing your corporate compliance.</p>
        </div>
      </section>
      <ServicesGrid />
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <p className="text-muted max-w-xl mx-auto text-lg">
            Need a custom workforce or compliance solution? <a href="/contact" className="text-accent font-semibold hover:underline">Talk to our team</a> — we design engagements that fit your business.
          </p>
        </div>
      </section>
      <WhyUs />
    </>
  );
}
