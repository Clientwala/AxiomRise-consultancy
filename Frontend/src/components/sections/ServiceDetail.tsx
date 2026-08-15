import type { ReactNode } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Image from "next/image";

interface ServiceDetailProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  intro: string[];
  features: { title: string; desc: string }[];
}

export default function ServiceDetail({ eyebrow, title, subtitle, image, imageAlt, intro, features }: ServiceDetailProps) {
  return (
    <>
      {/* Header */}
      <section className="relative bg-soft overflow-hidden pt-24 md:pt-28">
        <div className="container-max px-6 lg:px-20 xl:px-28 py-14 md:py-20 text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-primary leading-tight max-w-3xl mx-auto">{title}</h1>
          <p className="section-subtitle mx-auto mt-5">{subtitle}</p>
          <div className="mt-8"><Button href="/contact" variant="primary" size="lg">Talk to Our Consultants</Button></div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image src={image} alt={imageAlt} width={600} height={450} className="w-full h-full object-cover" />
            </div>
            <div>
              <SectionHeading eyebrow="Overview" title="What We Deliver" />
              {intro.map((p, i) => (
                <p key={i} className="text-muted leading-relaxed mb-4">{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features / Our Approach */}
      <section className="section-padding bg-soft-light">
        <div className="container-max">
          <SectionHeading centered eyebrow="What's Included" title="Our Approach" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <div key={f.title} className="relative group">
                <div className="bg-white rounded-xl border border-border p-6 h-full text-center shadow-sm group-hover:shadow-lg group-hover:border-accent/40 group-hover:-translate-y-1 transition-all duration-300">
                  <div className="w-11 h-11 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center font-serif font-bold text-lg group-hover:bg-accent transition-colors duration-300">{i + 1}</div>
                  <h3 className="font-serif text-lg font-semibold text-primary mb-2">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
                </div>
                {i < features.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-7 -translate-y-1/2 text-accent z-10">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="container-max">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Let&apos;s Discuss Your Requirements</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">Talk to our consultants and discover how Axiom Rise can support your business.</p>
          <Button href="/contact" variant="secondary" size="lg">Get In Touch</Button>
        </div>
      </section>
    </>
  );
}
