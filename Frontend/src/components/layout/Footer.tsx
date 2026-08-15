import Link from "next/link";
import Image from "next/image";
import { LinkedinIcon } from "@/components/ui/icons";

const quickLinks = [
  { label: "Home", href: "/" }, { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" }, { label: "Management Consultancy", href: "/services/management-consultancy" },
  { label: "Contact Us", href: "/contact" },
];
const services = [
  { label: "Management Consultancy", href: "/services/management-consultancy" },
  { label: "Payroll Administration", href: "/services/payroll-administration" },
  { label: "Permanent Recruitment", href: "/services/permanent-recruitment" },
  { label: "Temporary Staffing", href: "/services/temporary-staffing" },
  { label: "Contract Staffing", href: "/services/contract-staffing" },
  { label: "Executive Search", href: "/services/executive-search" },
  { label: "Call Centre Staffing", href: "/services/call-centre-staffing" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-200 to-blue-300 text-primary">
      <div className="container-max px-6 lg:px-20 xl:px-28 py-16 md:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/"><Image src="/logo/axiomrise-logo.png" alt="Axiom Rise Consultancy" width={190} height={190} className="h-16 w-auto mb-4 invert" /></Link>
            <p className="text-sm text-primary/70 leading-relaxed mt-3">A Singapore-incorporated employment agency and management consultancy firm, connecting exceptional professionals with leading organizations to deliver strategic expertise and accelerate sustainable growth.</p>
            <div className="mt-5 space-y-1 text-xs text-primary/60"><p>UEN: 202614733G</p><p>EA Licence No.: 26S3550</p></div>
            <a href="https://www.linkedin.com/in/axiom-rise-330054406/" target="_blank" rel="noopener noreferrer" aria-label="Axiom Rise on LinkedIn" className="mt-5 inline-flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 text-primary hover:bg-primary/10 hover:text-accent transition-colors">
              <LinkedinIcon size={18} />
            </a>
          </div>
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">Quick Links</h4>
            <ul className="space-y-3">{quickLinks.map(l=><li key={l.label}><Link href={l.href} className="text-sm text-primary/70 hover:text-accent transition-colors">{l.label}</Link></li>)}</ul>
          </div>
          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">Our Services</h4>
            <ul className="space-y-3">{services.map(s=><li key={s.label}><Link href={s.href} className="text-sm text-primary/70 hover:text-accent transition-colors">{s.label}</Link></li>)}</ul>
          </div>
          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">Contact</h4>
            <div className="space-y-4 text-sm text-primary/70">
              <div><p className="text-primary font-medium mb-1">Address</p><p>749 Woodlands Circle, #12-616</p><p>Singapore 730749</p></div>
              <div><p className="text-primary font-medium mb-1">Email</p>
                <a href="mailto:info@axiomrise.sg" className="block hover:text-accent transition-colors">info@axiomrise.sg</a>
                <a href="mailto:latha@axiomrise.sg" className="block hover:text-accent transition-colors">latha@axiomrise.sg</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-blue-400/40">
        <div className="container-max px-6 lg:px-20 xl:px-28 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary/60">&copy; {new Date().getFullYear()} Axiom Rise Consultancy Pte. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy" className="text-xs text-primary/60 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-primary/60 hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
