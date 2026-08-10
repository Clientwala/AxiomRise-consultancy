"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" } }) };

export default function Hero() {
  return (
    <section className="relative bg-soft overflow-hidden pt-20 md:pt-24">
      <div className="container-max px-6 lg:px-20 xl:px-28 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p custom={0} initial="hidden" animate="visible" variants={fadeUp} className="eyebrow">Singapore &bull; EA Licence No. 24C2078</motion.p>
            <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary leading-[1.15] tracking-tight">
              Talent, Strategy, and<br /><span className="text-accent">Governance</span> — Under One Roof.
            </motion.h1>
            <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp} className="text-muted text-base md:text-lg mt-6 max-w-lg leading-relaxed">
              From building high-performing teams to simplifying corporate compliance, AxiomRise delivers end-to-end HR solutions and management consultancy for businesses across Asia Pacific.
            </motion.p>
            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
              <Button href="/services" variant="primary" size="lg">Explore Services</Button>
              <Button href="/contact" variant="outline" size="lg">Talk to Us</Button>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }} className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]"><Image src="/images/hero/boardroom-brainstorm.jpg" alt="Team collaborating in boardroom" width={400} height={300} className="w-full h-full object-cover" /></div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5]"><Image src="/images/hero/ipad-meeting.jpg" alt="Business meeting with iPad" width={400} height={500} className="w-full h-full object-cover" /></div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/5]"><Image src="/images/hero/ceo-office.jpg" alt="Premium corporate office" width={400} height={500} className="w-full h-full object-cover" /></div>
                <div className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]"><Image src="/images/hero/night-meeting.jpg" alt="Team analyzing statistics" width={400} height={300} className="w-full h-full object-cover" /></div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
