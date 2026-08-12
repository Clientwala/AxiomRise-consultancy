import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — AxiomRise Consultancy",
  description: "Terms of Service governing the use of the Axiom Rise Consultancy Pte. Ltd. website and services.",
};

export default function TermsPage() {
  return (
    <section className="bg-soft pt-24 md:pt-28 pb-16">
      <div className="container-max px-6 lg:px-20 xl:px-28 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm">
          <p className="eyebrow">Legal</p>
          <h1 className="section-title mb-6">Terms of Service</h1>
          <p className="text-sm text-muted mb-8">Last updated: {new Date().toLocaleDateString("en-SG", { month: "long", year: "numeric" })}</p>

          <div className="space-y-8 text-muted leading-relaxed text-sm">
            <section>
              <h2 className="font-serif text-xl text-primary mb-3">1. Acceptance of Terms</h2>
              <p>By accessing or using the AxiomRise website and services, you agree to be bound by these Terms of Service. If you do not agree, please discontinue use of the website.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">2. Our Services</h2>
              <p>Axiom Rise Consultancy Pte. Ltd. provides executive advisory, management consultancy, corporate services, and talent solutions. Specific engagements are governed by separate written agreements between AxiomRise and the client.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">3. Use of Website</h2>
              <p>You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict the use of, this website by any third party. You shall not misuse the website by introducing viruses or other harmful material.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">4. Intellectual Property</h2>
              <p>All content on this website, including text, graphics, logos, images, and software, is the property of AxiomRise or its licensors and is protected by intellectual property laws. You may not reproduce or distribute any content without prior written consent.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">5. Limitation of Liability</h2>
              <p>This website and its content are provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, AxiomRise shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, this website.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">6. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the content or practices of those sites. Accessing them is at your own risk.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">7. Governing Law</h2>
              <p>These Terms of Service are governed by and construed in accordance with the laws of the Republic of Singapore. Any disputes shall be subject to the exclusive jurisdiction of the Singapore courts.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">8. Contact Us</h2>
              <p>
                Axiom Rise Consultancy Pte. Ltd.<br />
                749 Woodlands Circle, #12-616, Singapore 730749<br />
                <a href="mailto:info@axiomrise.sg" className="text-accent hover:underline">info@axiomrise.sg</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
