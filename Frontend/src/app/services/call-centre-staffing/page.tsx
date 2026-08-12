import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Call Centre Staffing — AxiomRise Consultancy",
  description: "Scalable call centre and customer-experience staffing — deploy trained teams to elevate service delivery across the region.",
};

export default function CallCentreStaffingPage() {
  return (
    <ServiceDetail
      eyebrow="Talent Solutions"
      title="Call Centre Staffing"
      subtitle="Scalable customer-experience teams deployed to elevate service delivery across the region."
      image="/images/services/women-outdoors.jpg"
      imageAlt="Customer service professionals"
      intro={[
        "Exceptional customer experience starts with the right people. AxiomRise builds and deploys call centre and customer-support teams that represent your brand with professionalism and care.",
        "From individual agents to full teams, we scale your customer-service capability rapidly — with training, supervision, and quality assurance built in.",
      ]}
      features={[
        { title: "Rapid Scaling", desc: "Deploy trained agents quickly to meet demand spikes." },
        { title: "Training & Onboarding", desc: "Customised training aligned to your brand and processes." },
        { title: "Quality Assurance", desc: "Ongoing monitoring to maintain service excellence." },
        { title: "Flexible Models", desc: "On-site, remote, or hybrid staffing to suit your operations." },
      ]}
    />
  );
}
