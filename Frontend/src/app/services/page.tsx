import type { Metadata } from "next";
import ServicesGrid from "@/components/sections/ServicesGrid";
import WhyUs from "@/components/sections/WhyUs";

export const metadata: Metadata = {
  title: "Our Services — AxiomRise Consultancy",
  description: "Executive advisory, management consultancy, corporate services, and executive search — from company incorporation and payroll administration to permanent recruitment.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-soft overflow-hidden pt-24 md:pt-28">
        <div className="container-max px-6 lg:px-20 xl:px-28 py-16 md:py-20 text-center">
          <p className="eyebrow">What We Do</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight">Advisory, Talent &amp; Corporate Services</h1>
          <p className="section-subtitle mx-auto">One partner. Every stage of your business journey — from strategic counsel and corporate compliance to executive search and specialist staffing.</p>
        </div>
      </section>
      <ServicesGrid />
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <p className="text-muted max-w-xl mx-auto text-lg">
            Need a custom advisory or corporate services solution? <a href="/contact" className="text-accent font-semibold hover:underline">Talk to our consultants</a> — we design engagements that fit your business.
          </p>
        </div>
      </section>
      <WhyUs />
    </>
  );
}
