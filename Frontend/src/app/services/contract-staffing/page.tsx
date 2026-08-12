import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Contract Staffing — AxiomRise Consultancy",
  description: "Specialist contract staffing (out-staffing) for long-term initiatives requiring niche expertise and continuity.",
};

export default function ContractStaffingPage() {
  return (
    <ServiceDetail
      eyebrow="Talent Solutions"
      title="Contract Staffing"
      subtitle="Specialist out-staffing for long-term initiatives requiring niche expertise, flexibility, and continuity."
      image="/images/services/partners-collaboration.jpg"
      imageAlt="Business partners collaborating on a project"
      intro={[
        "Some projects demand specialised skills for a defined period — without the long-term commitment of a permanent hire. AxiomRise contract staffing delivers exactly that.",
        "We provide experienced contract professionals who integrate seamlessly with your team, delivering specialist capability precisely when and where you need it.",
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
