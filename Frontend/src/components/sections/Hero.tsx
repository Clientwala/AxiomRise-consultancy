"use client";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.55, ease: "easeOut" } }) };
const imgFade = { hidden: { opacity: 0, scale: 0.96 }, visible: (i: number) => ({ opacity: 1, scale: 1, transition: { delay: 0.3 + i * 0.12, duration: 0.7, ease: "easeOut" } }) };

export default function Hero() {
  return (
    <section className="relative bg-soft overflow-hidden pt-24 md:pt-28">
      <div className="container-max px-6 lg:px-20 xl:px-28 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content */}
          <div>
            <motion.p custom={0} initial="hidden" animate="visible" variants={fadeUp} className="eyebrow">Employment &amp; Management Consultancy</motion.p>
            <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUp} className="font-serif text-4xl md:text-5xl lg:text-[3.4rem] text-primary leading-[1.12] tracking-tight">
              Strategy, People &amp;<br /><span className="text-accent">Business Transformation</span>
            </motion.h1>
            <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUp} className="text-muted text-base md:text-lg mt-6 max-w-lg leading-relaxed">
              A Singapore-incorporated employment agency and management consultancy — connecting exceptional professionals with leading organizations to accelerate sustainable growth.
            </motion.p>
            <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUp} className="flex flex-wrap gap-4 mt-8">
              <Button href="/services" variant="primary" size="lg">Explore Services</Button>
              <Button href="/contact" variant="outline" size="lg">Talk to Us</Button>
            </motion.div>
          </div>

          {/* Right Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <motion.div custom={0} initial="hidden" animate="visible" variants={imgFade} className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                  <Image src="/images/hero/boardroom-brainstorm.jpg" alt="Strategic advisory meeting" width={400} height={300} className="w-full h-full object-cover" priority />
                </motion.div>
                <motion.div custom={1} initial="hidden" animate="visible" variants={imgFade} className="rounded-2xl overflow-hidden shadow-md aspect-[4/5]">
                  <Image src="/images/hero/ipad-meeting.jpg" alt="Digital collaboration session" width={400} height={500} className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              </div>
              <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                <motion.div custom={2} initial="hidden" animate="visible" variants={imgFade} className="rounded-2xl overflow-hidden shadow-md aspect-[4/5]">
                  <Image src="/images/hero/ceo-office.jpg" alt="Executive office" width={400} height={500} className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
                <motion.div custom={3} initial="hidden" animate="visible" variants={imgFade} className="rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                  <Image src="/images/hero/night-meeting.jpg" alt="Leadership strategy session" width={400} height={300} className="w-full h-full object-cover" loading="lazy" />
                </motion.div>
              </div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }} className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
