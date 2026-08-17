import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Permanent Recruitment — Axiom Rise Consultancy",
  description: "Executive-level permanent recruitment across industries. We connect exceptional professionals with leading organizations for long-term roles.",
};

export default function PermanentRecruitmentPage() {
  return (
    <ServiceDetail
      eyebrow="Talent Solutions"
      title="Permanent Recruitment"
      subtitle="We help businesses identify and hire the right professionals for permanent positions across a wide range of industries and functions."
      image="/images/services/permanent-recruitment.jpg"
      imageAlt="Permanent recruitment interview"
      intro={[
        "From specialist professionals to mid- and senior-level talent, our recruitment team combines targeted sourcing, industry networks, candidate assessment, and market knowledge to deliver suitable candidates for your business needs.",
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
