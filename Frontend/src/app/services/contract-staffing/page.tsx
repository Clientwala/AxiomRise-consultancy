import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Contract Staffing — Axiom Rise Consultancy",
  description: "Specialist contract staffing (out-staffing) for long-term initiatives requiring niche expertise and continuity.",
};

export default function ContractStaffingPage() {
  return (
    <ServiceDetail
      eyebrow="Talent Solutions"
      title="Contract Staffing"
      subtitle="Flexible contract staffing solutions for businesses requiring skilled professionals for specific projects or longer-term assignments."
      image="/images/services/partners-collaboration.jpg"
      imageAlt="Business partners collaborating on a project"
      intro={[
        "We help organizations access specialized talent while providing greater flexibility in workforce planning, allowing you to scale your team according to business requirements.",
      ]}
      features={[
        { title: "Specialist Talent", desc: "Access niche skills across technology, finance, and operations." },
        { title: "Continuity", desc: "Extended engagements with stable, committed professionals." },
        { title: "Cost Efficiency", desc: "Engage expertise without adding permanent headcount." },
        { title: "Compliance", desc: "We manage contracts, payroll, and statutory compliance." },
      ]}
    />
  );
}
