import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us — AxiomRise Consultancy",
  description: "Axiom Rise Pte. Ltd. is a Singapore-incorporated executive advisory and management consultancy firm. UEN: 202614733G, EA Licence No.: 24C2078.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-soft overflow-hidden pt-24 md:pt-28">
        <div className="container-max px-6 lg:px-20 xl:px-28 py-16 md:py-20 text-center">
          <p className="eyebrow">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight">Our Story</h1>
          <p className="section-subtitle mx-auto">A Singapore-incorporated executive advisory and management consultancy firm — connecting exceptional professionals with leading organizations across the region.</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image src="/images/about/boardroom-brainstorm.jpg" alt="AxiomRise leadership discussion" width={600} height={450} className="w-full h-full object-cover" />
            </div>
            <div>
              <SectionHeading eyebrow="Who We Are" title="Advisory Excellence for Business Growth" />
              <p className="text-muted leading-relaxed mb-4">
                Axiom Rise Pte. Ltd. is a Singapore-incorporated executive advisory and management consultancy firm. We work at the intersection of people, strategy, and business transformation — helping organizations navigate complex challenges, unlock opportunities, and build lasting competitive advantage.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                We connect exceptional professionals with leading organizations to deliver strategic expertise, strengthen leadership capabilities, and accelerate sustainable business growth. Our portfolio spans management consultancy, corporate services — including incorporation, secretarial, payroll administration, accounting and compliance — alongside executive search and specialist staffing.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted border-t border-border pt-6">
                <div><span className="block text-primary font-semibold">UEN</span>202614733G</div>
                <div><span className="block text-primary font-semibold">EA Licence</span>24C2078</div>
                <div><span className="block text-primary font-semibold">Incorporation</span>2026</div>
                <div><span className="block text-primary font-semibold">Headquarters</span>Singapore</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="section-padding bg-soft-light">
        <div className="container-max">
          <SectionHeading centered eyebrow="Our Team" title="Leadership" subtitle="Coming together is a beginning. Keeping together is progress. Working together is success." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-w-5xl mx-auto">
            {[1, 2, 3].map((n) => (
              <div key={n} className="text-center">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-square mb-5 bg-soft">
                  <div className="w-full h-full flex items-center justify-center text-muted">
                    <Image src={`/images/team/leader-${n === 1 ? 'ceo' : n === 2 ? 'ipad' : 'night'}-meeting.jpg`} alt="Team member" width={400} height={400} className="w-full h-full object-cover" />
                  </div>
                </div>
                <h3 className="font-serif text-lg text-primary font-semibold">[ADD TEAM BIO]</h3>
                <p className="text-sm text-muted">[DESIGNATION]</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted text-center mt-6 italic">Team bios and photos to be provided by client</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="container-max">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">Let&apos;s discuss how AxiomRise can help your business grow.</p>
          <Button href="/contact" variant="secondary" size="lg">Get In Touch</Button>
        </div>
      </section>
    </>
  );
}
