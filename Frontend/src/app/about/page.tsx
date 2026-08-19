import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { CompassIcon, ScaleIcon, PeopleIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About Us — Axiom Rise Consultancy | Singapore Employment Agency & Management Consultancy",
  description:
    "Axiom Rise Consultancy Pte. Ltd. is a Singapore-incorporated employment agency and management consultancy firm. UEN: 202614733G, EA Licence No.: 26S3550. Advisory excellence for business growth.",
  keywords: [
    "about Axiom Rise",
    "Singapore employment agency",
    "management consultancy Singapore",
    "Axiom Rise Consultancy",
    "EA licence Singapore",
  ],
  openGraph: {
    title: "About Us — Axiom Rise Consultancy",
    description:
      "Singapore-incorporated employment agency and management consultancy firm delivering advisory excellence.",
    type: "website",
  },
};

const values = [
  { icon: CompassIcon, title: "Strategic Counsel", desc: "We bring senior-level judgment to complex decisions, helping leaders act with clarity and confidence." },
  { icon: ScaleIcon, title: "Relentless Rigour", desc: "Every recommendation is grounded in analysis, market insight, and measurable outcomes." },
  { icon: PeopleIcon, title: "Lasting Partnerships", desc: "We build enduring relationships founded on trust, discretion, and a shared commitment to success." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-soft overflow-hidden pt-24 md:pt-28">
        <div className="container-max px-6 lg:px-20 xl:px-28 py-16 md:py-20 text-center">
          <p className="eyebrow">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight">Our Story</h1>
          <p className="section-subtitle mx-auto">A Singapore-incorporated employment agency and management consultancy firm — connecting exceptional professionals with leading organizations across the region.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image src="/images/about/boardroom-brainstorm.jpg" alt="Axiom Rise leadership discussion" width={600} height={450} className="w-full h-full object-cover" />
            </div>
            <div>
              <SectionHeading eyebrow="Who We Are" title="Advisory Excellence for Business Growth" />
              <p className="text-muted leading-relaxed mb-4">
                Axiom Rise consultancy Pte. Ltd. is a Singapore-incorporated employment agency and management consultancy firm. We work at the intersection of people, strategy, and business transformation — helping organizations navigate complex challenges, unlock opportunities, and build lasting competitive advantage.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                We connect exceptional professionals with leading organizations to deliver strategic expertise, strengthen leadership capabilities, and accelerate sustainable business growth. Our portfolio spans management consultancy, corporate services — including incorporation, secretarial, payroll administration, accounting and compliance — alongside executive search and specialist staffing.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted border-t border-border pt-6">
                <div><span className="block text-primary font-semibold">UEN</span>202614733G</div>
                <div><span className="block text-primary font-semibold">EA Licence</span>26S3550</div>
                <div><span className="block text-primary font-semibold">Incorporation</span>2026</div>
                <div><span className="block text-primary font-semibold">Headquarters</span>Singapore</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-soft-light">
        <div className="container-max">
          <SectionHeading centered eyebrow="Our Values" title="How We Work" subtitle="Integrity, professionalism, responsiveness, and a strong focus on results guide every engagement." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <div key={v.title} className="group relative overflow-hidden bg-white rounded-2xl border border-border p-8 text-center shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-accent/40 transition-all duration-300">
                <div className="absolute inset-x-0 top-0 h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-soft flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <v.icon size={30} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary mb-3">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="container-max">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">Let&apos;s discuss how Axiom Rise can help your business grow.</p>
          <Button href="/contact" variant="secondary" size="lg">Get In Touch</Button>
        </div>
      </section>
    </>
  );
}
