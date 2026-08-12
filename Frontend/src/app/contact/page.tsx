import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import MapEmbed from "@/components/sections/MapEmbed";
import { HiMapPin, HiEnvelope, HiClock } from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Contact Us — AxiomRise Consultancy",
  description: "Get in touch with AxiomRise Consultancy. 749 Woodlands Circle, #12-616, Singapore 730749. Email: info@axiomrise.sg.",
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="relative bg-soft overflow-hidden pt-24 md:pt-28">
        <div className="container-max px-6 lg:px-20 xl:px-28 py-16 md:py-20 text-center">
          <p className="eyebrow">Get In Touch</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight">Let&apos;s Start a Conversation</h1>
          <p className="section-subtitle mx-auto">Whether you&apos;re navigating a complex challenge, seeking strategic counsel, or planning your next growth phase — we&apos;re here to help.</p>
        </div>
      </section>

      {/* Form + Contact Details */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <SectionHeading title="Send Us a Message" />
              <ContactForm />
            </div>
            {/* Contact Details */}
            <div className="lg:col-span-1">
              <SectionHeading title="Contact Details" />
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0"><HiMapPin className="text-accent text-lg" /></div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Address</h4>
                    <p className="text-muted text-sm leading-relaxed">749 Woodlands Circle, #12-616<br />Singapore 730749</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0"><HiEnvelope className="text-accent text-lg" /></div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Email</h4>
                    <a href="mailto:info@axiomrise.sg" className="block text-accent text-sm hover:underline">info@axiomrise.sg</a>
                    <a href="mailto:latha@axiomrise.sg" className="block text-accent text-sm hover:underline">latha@axiomrise.sg</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0"><HiClock className="text-accent text-lg" /></div>
                  <div>
                    <h4 className="font-semibold text-primary text-sm mb-1">Business Hours</h4>
                    <p className="text-muted text-sm">Monday – Friday: 9:00 AM – 6:00 PM SGT<br />[NEEDS CLIENT INPUT]</p>
                  </div>
                </div>
                <div className="border-t border-border pt-6 mt-6">
                  <h4 className="font-semibold text-primary text-sm mb-2">Company Info</h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Axiom Rise Consultancy Pte. Ltd.<br />
                    UEN: 202611282W<br />
                    EA Licence No.: 24C2078
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-soft-light">
        <div className="container-max">
          <SectionHeading centered title="Find Us" subtitle="Our office is located in the heart of Woodlands, Singapore." />
          <div className="max-w-4xl mx-auto">
            <MapEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
