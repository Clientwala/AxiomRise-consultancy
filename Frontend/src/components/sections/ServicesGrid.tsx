"use client";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Link from "next/link";
import Image from "next/image";
import {
  BuildingIcon, WalletIcon, BriefcaseIcon, ClockIcon,
  DocumentIcon, SearchIcon, HeadsetIcon, ScaleIcon,
} from "@/components/ui/icons";

const services = [
  { title: "Management Consultancy", desc: "End-to-end company incorporation, secretarial, and compliance support — from strategy to statutory administration.", icon: BuildingIcon, img: "/images/services/management-consultancy.jpg", href: "/services/management-consultancy" },
  { title: "Payroll Administration", desc: "Accurate monthly payroll processing, CPF submissions, and statutory compliance managed with precision.", icon: WalletIcon, img: "/images/services/data-analytics.jpg", href: "/services/payroll-administration" },
  { title: "Accounting Services", desc: "Bookkeeping, financial statement preparation, and management reporting.", icon: ScaleIcon, img: "/images/services/accounting-services.jpg", href: "/services/accounting-services" },
  { title: "Permanent Recruitment", desc: "Executive-level talent acquisition for mid to senior roles across industries and disciplines.", icon: BriefcaseIcon, img: "/images/services/permanent-recruitment.jpg", href: "/services/permanent-recruitment" },
  { title: "Temporary Staffing", desc: "Agile workforce solutions scaled to your seasonal, project, and peak-period demands.", icon: ClockIcon, img: "/images/services/hr-manager-reviewing-cvs.jpg", href: "/services/temporary-staffing" },
  { title: "Contract Staffing", desc: "Specialist out-staffing for long-term initiatives requiring niche expertise and continuity.", icon: DocumentIcon, img: "/images/services/partners-collaboration.jpg", href: "/services/contract-staffing" },
  { title: "Executive Search", desc: "Confidential C-suite and board-level search, powered by deep regional networks and market insight.", icon: SearchIcon, img: "/images/services/business-discussion.jpg", href: "/services/executive-search" },
  { title: "Call Centre Staffing", desc: "Scalable customer-experience teams deployed to elevate service delivery across the region.", icon: HeadsetIcon, img: "/images/services/women-outdoors.jpg", href: "/services/call-centre-staffing" },
];

export default function ServicesGrid() {
  return (
    <section className="section-padding bg-soft-light">
      <div className="container-max">
        <SectionHeading centered eyebrow="What We Offer" title="Advisory, Talent & Corporate Services" subtitle="From strategic counsel to corporate compliance and executive search — one trusted partner for every stage of your business journey." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: i * 0.08, duration: 0.4 }}>
              <Card className="h-full flex flex-col overflow-hidden p-0 group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={s.img} alt={s.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="text-accent mb-3"><s.icon size={26} /></div>
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
