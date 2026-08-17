import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Payroll Administration — Axiom Rise Consultancy",
  description: "Accurate monthly payroll administration — CPF submissions, IRAS compliance, and employee payslips managed with precision.",
};

export default function PayrollAdministrationPage() {
  return (
    <ServiceDetail
      eyebrow="Corporate Services"
      title="Payroll Administration"
      subtitle="Reliable payroll and HR administration to help businesses manage their workforce efficiently."
      image="/images/services/data-analytics.jpg"
      imageAlt="Payroll data analysis"
      intro={[
        "Our services include monthly payroll processing, CPF contribution administration, statutory requirements, employee records, and related payroll support — helping you maintain accurate and timely payroll operations.",
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
