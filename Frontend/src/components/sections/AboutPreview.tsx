"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }}>
            <SectionHeading
              eyebrow="Who We Are"
              title="Insight. Integrity. Impact."
              subtitle="Axiom Rise is a Singapore-based employment agency and management consultancy dedicated to connecting businesses with the right people and practical business solutions."
            />
            <p className="text-muted leading-relaxed mb-4">We support organizations across different industries with recruitment, staffing, payroll administration, executive search, and business support services. Our approach combines industry knowledge, market insight, technology, and a strong commitment to delivering reliable results.</p>
            <p className="text-muted leading-relaxed">We believe successful businesses are built on the right people, effective processes, and trusted partnerships.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30, scale: 0.97 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.2 }} className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image src="/images/about/colleagues-desks.jpg" alt="Axiom Rise team collaborating" width={600} height={450} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/5 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
