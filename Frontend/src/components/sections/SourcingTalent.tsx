"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { HiCpuChip, HiMegaphone, HiUserGroup, HiAcademicCap } from "react-icons/hi2";

const items = [
  { icon: HiCpuChip, title: "AI Database Platform", desc: "Our proprietary AI-powered platform intelligently matches candidates to roles, reducing time-to-hire by up to 40%." },
  { icon: HiMegaphone, title: "Targeted Advertising", desc: "Strategic job advertising across premium platforms ensures your roles reach the most qualified talent." },
  { icon: HiUserGroup, title: "Referrals & Networks", desc: "Decades-deep industry networks and trusted referral channels connect you with passive candidates." },
  { icon: HiAcademicCap, title: "Career Fairs & Executive Search", desc: "Active sourcing through career fairs, campus recruitment, and bespoke executive headhunting assignments." },
];

export default function SourcingTalent() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading centered eyebrow="Our Edge" title="How We Source Top Talent" subtitle="A multi-channel approach that combines technology, relationships, and deep market intelligence." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {items.map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-soft flex items-center justify-center"><item.icon className="text-2xl text-accent" /></div>
              <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
