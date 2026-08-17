import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Executive Search — Axiom Rise Consultancy",
  description: "Confidential C-suite and board-level executive search, powered by deep regional networks and market insight.",
};

export default function ExecutiveSearchPage() {
  return (
    <ServiceDetail
      eyebrow="Executive Search"
      title="Executive Search"
      subtitle="Confidential executive search solutions for organizations seeking senior and leadership talent."
      image="/images/services/business-discussion.jpg"
      imageAlt="Executive leadership discussion"
      intro={[
        "We identify and engage high-calibre professionals for critical leadership positions through targeted sourcing, industry networks, market intelligence, and a discreet search process.",
      ]}
      features={[
        { title: "Market Mapping", desc: "Comprehensive analysis of leadership talent across the region." },
        { title: "Confidential Search", desc: "Discreet engagement of passive and active candidates." },
        { title: "Leadership Assessment", desc: "Rigorous evaluation of capability, culture, and character." },
        { title: "Succession Planning", desc: "Strategic advice on building your future leadership bench." },
      ]}
    />
  );
}
