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
              title="Advisory Excellence, Delivered With Purpose"
              subtitle="AxiomRise is a Singapore-incorporated executive advisory and management consultancy firm. We connect exceptional professionals with leading organizations to deliver strategic expertise, strengthen leadership capabilities, and accelerate sustainable business growth across the region."
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6, delay: 0.2 }} className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image src="/images/about/colleagues-desks.jpg" alt="AxiomRise team collaborating" width={600} height={450} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg px-6 py-4 border border-border">
              <p className="text-2xl font-serif font-bold text-accent">2026</p>
              <p className="text-xs text-muted uppercase tracking-wider">Incorporated</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
