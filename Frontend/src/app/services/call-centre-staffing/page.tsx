import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Customer Service & Contact Centre Staffing — Axiom Rise Consultancy",
  description: "Flexible staffing solutions for customer service and contact centre operations.",
};

export default function CallCentreStaffingPage() {
  return (
    <ServiceDetail
      eyebrow="Talent Solutions"
      title="Customer Service & Contact Centre Staffing"
      subtitle="Flexible staffing solutions for customer service and contact centre operations."
      image="/images/services/women-outdoors.jpg"
      imageAlt="Customer service professionals"
      intro={[
        "We help businesses build reliable customer-facing teams for customer support, call centre operations, service desks, and other customer experience functions.",
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
