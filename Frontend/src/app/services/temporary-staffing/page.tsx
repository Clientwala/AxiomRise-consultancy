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
      subtitle="Flexible staffing solutions for businesses that need additional workforce support."
      image="/images/services/hr-manager-reviewing-cvs.jpg"
      imageAlt="HR manager reviewing candidate profiles"
      intro={[
        "Whether you require staff for seasonal demand, short-term projects, peak periods, or temporary vacancies, we help you access suitable talent quickly and efficiently while giving you the flexibility to scale your workforce as needed.",
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
