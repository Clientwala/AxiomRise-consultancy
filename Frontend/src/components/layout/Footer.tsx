import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" }, { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" }, { label: "Management Consultancy", href: "/services/management-consultancy" },
  { label: "Contact Us", href: "/contact" },
];
const services = ["Permanent Recruitment","Temporary Staffing","Contract Staffing","Executive Search","Call Centre Staffing","Management Consultancy"];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-max px-6 lg:px-20 xl:px-28 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/"><Image src="/logo/axiomrise-logo.png" alt="AxiomRise Consultancy" width={160} height={40} className="h-9 w-auto brightness-0 invert mb-4" /></Link>
            <p className="text-sm text-white/60 leading-relaxed mt-3">Talent, Strategy, and Governance — Under One Roof. Singapore&apos;s trusted partner for HR Solutions and Management Consultancy.</p>
            <div className="mt-5 space-y-1 text-xs text-white/50"><p>UEN: 202614733G</p><p>EA Licence No.: 24C2078</p></div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-5">Quick Links</h4>
            <ul className="space-y-3">{quickLinks.map(l=><li key={l.label}><Link href={l.href} className="text-sm text-white/60 hover:text-accent transition-colors">{l.label}</Link></li>)}</ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-5">Our Services</h4>
            <ul className="space-y-3">{services.map(s=><li key={s}><Link href={s==="Management Consultancy"?"/services/management-consultancy":"/services"} className="text-sm text-white/60 hover:text-accent transition-colors">{s}</Link></li>)}</ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-accent mb-5">Contact</h4>
            <div className="space-y-4 text-sm text-white/60">
              <div><p className="text-white/80 font-medium mb-1">Address</p><p>749 Woodlands Circle, #12-616</p><p>Singapore 730749</p></div>
              <div><p className="text-white/80 font-medium mb-1">Email</p><a href="mailto:latha@axiomrise.sg" className="hover:text-accent transition-colors">latha@axiomrise.sg</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-max px-6 lg:px-20 xl:px-28 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/40">&copy; {new Date().getFullYear()} Axiom Rise Consultancy Pte. Ltd. All rights reserved.</p>
          <p className="text-xs text-white/40">Incorporated in Singapore</p>
        </div>
      </div>
    </footer>
  );
}
