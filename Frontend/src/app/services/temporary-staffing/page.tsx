import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Temporary Staffing — Axiom Rise Consultancy",
  description: "Flexible temporary staffing solutions scaled to your seasonal, project, and peak-period workforce demands.",
};

export default function TemporaryStaffingPage() {
  return (
    <ServiceDetail
      eyebrow="Talent Solutions"
      title="Temporary Staffing"
      subtitle="Agile, on-demand workforce solutions scaled to your seasonal, project, and peak-period demands."
      image="/images/services/hr-manager-reviewing-cvs.jpg"
      imageAlt="HR manager reviewing candidate profiles"
      intro={[
        "Business demands fluctuate. Axiom Rise provides flexible temporary staffing that lets you scale your workforce up or down — quickly and cost-effectively — without compromising on quality.",
        "From short-term projects to seasonal surges, we deploy pre-vetted professionals who can contribute from day one.",
      ]}
      features={[
        { title: "Rapid Deployment", desc: "Qualified temporary talent placed quickly to meet urgent demands." },
        { title: "Flexible Scaling", desc: "Adjust headcount in line with project timelines and workload." },
        { title: "Quality Assurance", desc: "Every candidate is screened for skills, reliability, and fit." },
        { title: "Payroll & Admin", desc: "We handle time-sheets, payroll, and statutory obligations for you." },
      ]}
    />
  );
}
