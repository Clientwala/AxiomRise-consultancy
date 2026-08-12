import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Payroll Administration — AxiomRise Consultancy",
  description: "Accurate monthly payroll administration — CPF submissions, IRAS compliance, and employee payslips managed with precision.",
};

export default function PayrollAdministrationPage() {
  return (
    <ServiceDetail
      eyebrow="Corporate Services"
      title="Payroll Administration"
      subtitle="Accurate, compliant payroll processing — so you can pay your people on time, every time."
      image="/images/services/data-analytics.jpg"
      imageAlt="Payroll data analysis"
      intro={[
        "Payroll errors erode trust and expose your business to penalties. AxiomRise manages your payroll end-to-end — accurately, confidentially, and always on schedule.",
        "We handle calculations, statutory submissions, and reporting, giving you complete peace of mind and full compliance with Singapore regulations.",
      ]}
      features={[
        { title: "Monthly Processing", desc: "Accurate salary calculations and disbursement management." },
        { title: "CPF Submissions", desc: "Timely Central Provident Fund contributions and reporting." },
        { title: "IRAS Compliance", desc: "Tax clearance and statutory filing handled for you." },
        { title: "Employee Payslips", desc: "Clear, compliant payslips delivered to your workforce." },
      ]}
    />
  );
}
