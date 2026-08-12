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

      {/* Features */}
      <section className="section-padding bg-soft-light">
        <div className="container-max">
          <SectionHeading centered eyebrow="What's Included" title="Our Approach" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
            {features.map((f) => (
              <div key={f.title} className="bg-white rounded-xl border border-border p-6">
                <h3 className="font-serif text-lg font-semibold text-primary mb-2">{f.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="container-max">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">Let&apos;s Discuss Your Requirements</h2>
          <p className="text-white/60 max-w-lg mx-auto mb-8">Talk to our consultants and discover how AxiomRise can support your business.</p>
          <Button href="/contact" variant="secondary" size="lg">Get In Touch</Button>
        </div>
      </section>
    </>
  );
}
