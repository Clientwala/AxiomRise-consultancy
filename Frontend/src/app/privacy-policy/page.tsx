import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — AxiomRise Consultancy",
  description: "Privacy Policy for Axiom Rise Consultancy Pte. Ltd. — how we collect, use, and protect your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-soft pt-24 md:pt-28 pb-16">
      <div className="container-max px-6 lg:px-20 xl:px-28 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-border p-8 md:p-12 shadow-sm">
          <p className="eyebrow">Legal</p>
          <h1 className="section-title mb-6">Privacy Policy</h1>
          <p className="text-sm text-muted mb-8">Last updated: {new Date().toLocaleDateString("en-SG", { month: "long", year: "numeric" })}</p>

          <div className="space-y-8 text-muted leading-relaxed text-sm">
            <section>
              <h2 className="font-serif text-xl text-primary mb-3">1. Introduction</h2>
              <p>Axiom Rise Consultancy Pte. Ltd. (&quot;AxiomRise,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal data in accordance with the Personal Data Protection Act 2012 (PDPA) of Singapore. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">2. Information We Collect</h2>
              <p>We may collect the following categories of information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Personal information</strong> you provide through our contact form, including your name, email address, phone number, company name, and message content.</li>
                <li><strong>Technical data</strong> such as IP address, browser type, operating system, device information, and approximate geographic location, collected automatically when you visit our site.</li>
                <li><strong>Usage data</strong> including pages visited, referral source, and cookie preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">3. How We Use Your Information</h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your enquiries and provide requested services.</li>
                <li>Improve and personalise your website experience.</li>
                <li>Analyse site traffic and usage patterns.</li>
                <li>Comply with legal and regulatory obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">4. Cookies</h2>
              <p>Our website uses cookies and similar technologies to enhance your browsing experience, analyse traffic, and remember your preferences. You may accept or decline cookies through the consent banner. You can also manage cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">5. Data Sharing &amp; Disclosure</h2>
              <p>We do not sell your personal data. We may share information with trusted third-party service providers who assist us in operating our website and delivering services, subject to confidentiality obligations. We may also disclose information where required by law.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">6. Data Security</h2>
              <p>We implement reasonable technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">7. Your Rights</h2>
              <p>Under the PDPA, you may request access to, correction of, or deletion of your personal data held by us. To exercise these rights, please contact us at <a href="mailto:info@axiomrise.sg" className="text-accent hover:underline">info@axiomrise.sg</a>.</p>
            </section>

            <section>
              <h2 className="font-serif text-xl text-primary mb-3">8. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact:</p>
              <p className="mt-2">
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
