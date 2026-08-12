import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Permanent Recruitment — AxiomRise Consultancy",
  description: "Executive-level permanent recruitment across industries. We connect exceptional professionals with leading organizations for long-term roles.",
};

export default function PermanentRecruitmentPage() {
  return (
    <ServiceDetail
      eyebrow="Talent Solutions"
      title="Permanent Recruitment"
      subtitle="End-to-end talent acquisition for permanent, mid-to-senior level roles across industries and disciplines."
      image="/images/services/permanent-recruitment.jpg"
      imageAlt="Permanent recruitment interview"
      intro={[
        "Finding the right permanent hire is a strategic decision — not just a vacancy to fill. AxiomRise partners with organizations to source, assess, and secure professionals who will drive long-term value.",
        "We combine deep market intelligence with a rigorous screening process to present a curated shortlist of candidates who align with your culture, competencies, and growth ambitions.",
      ]}
      features={[
        { title: "Role Profiling", desc: "We define success criteria, competencies, and cultural fit before the search begins." },
        { title: "Candidate Sourcing", desc: "Targeted outreach across our networks, databases, and referral channels." },
        { title: "Screening & Assessment", desc: "Structured interviews and competency-based evaluation of every candidate." },
        { title: "Offer Management", desc: "Market-informed salary benchmarking and negotiation support through to onboarding." },
      ]}
    />
  );
}
