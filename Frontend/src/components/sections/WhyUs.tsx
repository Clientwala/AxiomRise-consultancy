"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { BoltIcon, ShieldIcon, HeartIcon } from "@/components/ui/icons";

const reasons = [
  { icon: BoltIcon, title: "Speed & Precision", desc: "We fill critical roles in days, not months. Our targeted approach ensures the right fit — fast." },
  { icon: ShieldIcon, title: "End-to-End Service", desc: "From recruitment to corporate compliance, one trusted partner handles your entire business lifecycle." },
  { icon: HeartIcon, title: "Built on Trust", desc: "Every engagement is guided by transparency, integrity, and a genuine commitment to your success." },
];

export default function WhyUs() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-max text-center">
        <SectionHeading centered eyebrow="Why Partner With Axiom Rise" title="Turning Partnerships into Possibilities" subtitle="" className="[&_.eyebrow]:text-accent [&_.section-title]:text-white [&_.section-subtitle]:text-white/60" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-8">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.4 }} className="text-center">
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-white/10 flex items-center justify-center"><r.icon className="text-2xl text-accent" /></div>
              <h3 className="text-lg font-serif font-semibold text-white mb-2">{r.title}</h3>
              <p className="text-sm text-white/60 leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="mt-12">
          <p className="text-white/70 text-lg font-serif italic max-w-2xl mx-auto mb-6">Let&apos;s build something exceptional — together.</p>
          <Button href="/contact" variant="secondary" size="lg">Start a Conversation</Button>
        </motion.div>
      </div>
    </section>
  );
}
