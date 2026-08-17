"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { ChipIcon, MegaphoneIcon, NetworkIcon, CapIcon } from "@/components/ui/icons";

const items = [
  { icon: ChipIcon, title: "AI-Powered Candidate Matching", desc: "We use technology-enabled candidate matching to identify relevant talent efficiently and reduce time-to-hire." },
  { icon: MegaphoneIcon, title: "Targeted Advertising", desc: "Strategic job advertising across premium platforms ensures your roles reach the most qualified talent." },
  { icon: NetworkIcon, title: "Referrals & Networks", desc: "Professional networks and trusted referral channels connect you with suitable candidates." },
  { icon: CapIcon, title: "Career Fairs & Executive Search", desc: "Active sourcing through career fairs, campus recruitment, and discreet executive search assignments." },
];

export default function SourcingTalent() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <SectionHeading centered eyebrow="Our Edge" title="How We Source Top Talent" subtitle="We combine technology, targeted sourcing, professional networks, referrals, and market knowledge to identify and engage suitable candidates for our clients. Our approach is designed to reach both active job seekers and qualified professionals who may not be actively looking for a new opportunity." />
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
