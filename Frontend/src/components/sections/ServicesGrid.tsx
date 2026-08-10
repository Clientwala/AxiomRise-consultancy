"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import Image from "next/image";
import { HiBriefcase, HiClock, HiDocumentText, HiMagnifyingGlass, HiPhone, HiBuildingOffice } from "react-icons/hi2";

const services = [
  { title: "Permanent Recruitment", desc: "End-to-end talent acquisition for mid to senior-level roles across industries.", icon: HiBriefcase, img: "/images/services/boardroom-brainstorm.jpg", badge: "TALENT SOLUTIONS" },
  { title: "Temporary Staffing", desc: "Flexible staffing solutions to meet your seasonal and project-based workforce needs.", icon: HiClock, img: "/images/services/ipad-meeting.jpg", badge: "TALENT SOLUTIONS" },
  { title: "Contract Staffing", desc: "Out-staffing solutions for long-term projects with specialized skill requirements.", icon: HiDocumentText, img: "/images/services/night-meeting.jpg", badge: "TALENT SOLUTIONS" },
  { title: "Executive Search", desc: "Confidential C-suite and leadership-level search powered by deep industry networks.", icon: HiMagnifyingGlass, img: "/images/services/ceo-office.jpg", badge: "CUSTOM SOLUTIONS" },
  { title: "Call Centre Staffing", desc: "Scalable customer service and call centre workforce deployment across the region.", icon: HiPhone, img: "/images/services/colleagues-desks.jpg", badge: "TALENT SOLUTIONS" },
  { title: "Management Consultancy", desc: "End-to-end company incorporation, secretarial, and compliance support for growing businesses.", icon: HiBuildingOffice, img: "/images/services/women-outdoors.jpg", badge: "CORPORATE SERVICES", href: "/services/management-consultancy" },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-soft-light">
      <div className="container-max">
        <SectionHeading centered eyebrow="What We Offer" title="Comprehensive HR & Corporate Services" subtitle="From finding the right talent to managing your corporate compliance, we've got every stage of your business journey covered." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.08, duration: 0.4 }}>
              <Card className="h-full flex flex-col overflow-hidden p-0 group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-3 left-3"><Badge text={s.badge} /></div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-2"><s.icon className="text-accent text-xl" /></div>
                  <h3 className="text-lg font-serif font-semibold text-primary mb-2">{s.title}</h3>
                  <p className="text-sm text-muted leading-relaxed flex-1">{s.desc}</p>
                  <Link href={s.href || "/services"} className="inline-flex items-center gap-1 text-sm font-semibold text-accent mt-4 hover:underline">
                    Learn More <span className="text-xs">&rarr;</span>
                  </Link>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
