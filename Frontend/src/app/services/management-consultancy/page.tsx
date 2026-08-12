import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import {
  PeopleIcon, UploadIcon, PenIcon, ChartIcon, BellIcon,
  BuildingIcon, DocumentIcon, CompassIcon, WalletIcon, ScaleIcon,
} from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Management Consultancy — AxiomRise Consultancy",
  description: "Boutique corporate services — company incorporation, secretarial, accounting, payroll administration, taxation, and compliance for businesses in Singapore and beyond.",
};

const features = [
  { icon: PeopleIcon, title: "Collaborate with our team", desc: "Work directly with experienced corporate services professionals." },
  { icon: UploadIcon, title: "Upload documents with a click", desc: "Secure, simple document submission through our platform." },
  { icon: PenIcon, title: "E-sign documents quickly", desc: "Digitally sign and execute documents — no printing required." },
  { icon: ChartIcon, title: "Track progress in real-time", desc: "Monitor active tasks and milestones at every stage." },
  { icon: BellIcon, title: "Automatic compliance alerts", desc: "Never miss a deadline with smart notifications for filings and renewals." },
];

const serviceItems = [
  { icon: BuildingIcon, title: "Company Incorporation", desc: "End-to-end Singapore company registration, including name reservation, structure advice, and bank account opening." },
  { icon: DocumentIcon, title: "Company Secretarial", desc: "Annual filings, AGM preparation, board resolutions, and full compliance with ACRA requirements." },
  { icon: CompassIcon, title: "Representative Office Setup", desc: "Establish a presence in Singapore for foreign companies exploring the Asian market." },
  { icon: CompassIcon, title: "Business Advisory", desc: "Strategic guidance on market entry, regulatory landscape, and business structure optimization." },
  { icon: BuildingIcon, title: "Offshore Company Formation", desc: "Jurisdiction selection and incorporation in key offshore financial centres for global operations." },
  { icon: DocumentIcon, title: "Work Pass / EP Applications", desc: "Employment Pass, S Pass, Work Permit applications and renewals managed end-to-end." },
  { icon: WalletIcon, title: "Payroll Administration", desc: "Monthly payroll processing, CPF submissions, IRAS compliance, and employee payslips managed with precision." },
  { icon: ScaleIcon, title: "Accounting Services", desc: "Bookkeeping, financial statement preparation, management reporting, and audit support." },
  { icon: ScaleIcon, title: "Taxation & Compliance", desc: "Corporate tax filing, GST registration and returns, ECI submissions, and tax planning." },
  { icon: ChartIcon, title: "Digital Bookkeeping Solutions", desc: "Cloud-based accounting and bookkeeping powered by leading platforms — real-time visibility into your financials." },
];

export default function ManagementConsultancyPage() {
  return (
    <>
      {/* Intro Band */}
      <section className="relative bg-soft pt-20 md:pt-24">
        <div className="container-max px-6 lg:px-20 xl:px-28 py-16 md:py-24 text-center">
          <Badge text="Corporate Services" variant="gold" className="mb-4" />
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-tight max-w-3xl mx-auto">
            A Boutique Corporate Services Platform
          </h1>
          <p className="section-subtitle mx-auto mt-5">
            We make company incorporation and ongoing administration simple — so you can focus on growing your business while we handle the paperwork.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">Talk to Our Consultants</Button>
          </div>
        </div>
      </section>

      {/* Feature Strip */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <SectionHeading centered eyebrow="Platform" title="Collaborate With Our Team" subtitle="A streamlined approach to corporate services, built around your convenience." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-8">
            {features.map((f, i) => (
              <div key={f.title} className="text-center px-3">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-soft flex items-center justify-center text-accent">
                  <f.icon size={22} />
                </div>
                <h3 className="font-semibold text-sm text-primary mb-1.5">{f.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-soft-light">
        <div className="container-max">
          <SectionHeading centered eyebrow="Our Services" title="Complete Corporate Solutions" subtitle="Everything you need to incorporate, manage, and grow your company — all under one roof." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
            {serviceItems.map((s, i) => (
              <Card key={s.title} className="group">
                <div className="text-accent mb-3"><s.icon size={24} /></div>
                <h3 className="font-serif text-lg font-semibold text-primary mb-2">{s.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{s.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="container-max">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Let&apos;s Simplify Your Compliance</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">Talk to our consultants and discover how AxiomRise can streamline your corporate administration.</p>
          <Button href="/contact" variant="secondary" size="lg">Talk to Our Consultants</Button>
        </div>
      </section>
    </>
  );
}
