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
              subtitle="AxiomRise is a Singapore-incorporated employment agency and management consultancy firm. We connect exceptional professionals with leading organizations to deliver strategic expertise, strengthen leadership capabilities, and accelerate sustainable business growth across the region."
            />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30, scale: 0.97 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7, delay: 0.2 }} className="relative group">
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <Image src="/images/about/colleagues-desks.jpg" alt="AxiomRise team collaborating" width={600} height={450} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/5 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
