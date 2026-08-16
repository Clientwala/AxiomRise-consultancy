import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Accounting Services — Axiom Rise Consultancy",
  description: "Professional accounting services in Singapore — bookkeeping, financial statement preparation, management reporting, and audit support.",
};

export default function AccountingServicesPage() {
  return (
    <ServiceDetail
      eyebrow="Corporate Services"
      title="Accounting Services"
      subtitle="Accurate, compliant bookkeeping and financial reporting — so your numbers are always in order."
      image="/images/services/accounting-services.jpg"
      imageAlt="Financial charts and accounting"
      intro={[
        "Sound financial records are the foundation of every successful business. Axiom Rise delivers meticulous accounting services that keep your books accurate, up to date, and fully compliant.",
        "From daily bookkeeping to year-end financial statements, we handle your numbers with precision — giving you clear visibility into your financial health.",
      ]}
      features={[
        { title: "Bookkeeping", desc: "Day-to-day recording of transactions, reconciliations, and ledgers kept current." },
        { title: "Financial Statements", desc: "Accurate preparation of balance sheets, income statements, and reports." },
        { title: "Management Reporting", desc: "Clear, timely insights into your business performance and cash flow." },
      ]}
    />
  );
}
