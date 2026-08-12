import type { Metadata } from "next";
import ServiceDetail from "@/components/sections/ServiceDetail";

export const metadata: Metadata = {
  title: "Executive Search — AxiomRise Consultancy",
  description: "Confidential C-suite and board-level executive search, powered by deep regional networks and market insight.",
};

export default function ExecutiveSearchPage() {
  return (
    <ServiceDetail
      eyebrow="Executive Search"
      title="Executive Search"
      subtitle="Confidential C-suite and board-level search, powered by deep regional networks and market insight."
      image="/images/services/business-discussion.jpg"
      imageAlt="Executive leadership discussion"
      intro={[
        "Leadership appointments define the trajectory of an organization. AxiomRise conducts confidential, senior-level searches that identify leaders capable of shaping strategy and driving transformation.",
        "We work discreetly with boards and executive teams to map the market, engage exceptional candidates, and secure appointments that create lasting impact.",
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
