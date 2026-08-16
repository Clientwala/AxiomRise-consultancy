import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { LinkedinIcon } from "@/components/ui/icons";

const quickLinks = [
  { label: "Home", href: "/" }, { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" }, { label: "Management Consultancy", href: "/services/management-consultancy" },
  { label: "Contact Us", href: "/contact" },
];
const services = [
  { label: "Management Consultancy", href: "/services/management-consultancy" },
  { label: "Payroll Administration", href: "/services/payroll-administration" },
  { label: "Accounting Services", href: "/services/accounting-services" },
  { label: "Permanent Recruitment", href: "/services/permanent-recruitment" },
  { label: "Temporary Staffing", href: "/services/temporary-staffing" },
  { label: "Contract Staffing", href: "/services/contract-staffing" },
  { label: "Executive Search", href: "/services/executive-search" },
  { label: "Call Centre Staffing", href: "/services/call-centre-staffing" },
];

export default function Footer() {
  return (
    <footer className="text-primary">
      {/* CTA band */}
      <div className="bg-primary">
        <div className="container-max px-6 lg:px-20 xl:px-28 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="font-serif text-2xl md:text-3xl text-white text-center md:text-left">Ready to Elevate Your Business?</h2>
          <Button href="/contact" variant="secondary" size="lg">Get In Touch</Button>
        </div>
      </div>

      {/* Main footer */}
      <div className="relative">
        {/* Subtle business background image */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.06]" style={{ backgroundImage: "url('/images/about/colleagues-desks.jpg')" }} />
        {/* Light blue overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300/95 to-blue-400/95" />

        <div className="relative container-max px-6 lg:px-20 xl:px-28 py-16 md:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {/* Brand */}
            <div className="col-span-2 lg:col-span-1">
              <Link href="/" className="inline-block">
                <span className="inline-flex items-center justify-center bg-primary rounded-full p-0.5">
                  <Image src="/logo/axiomrise-logo.png" alt="Axiom Rise Consultancy" width={150} height={150} className="h-12 w-auto" />
                </span>
              </Link>
              <p className="text-sm text-primary/70 leading-relaxed mt-5">A Singapore-incorporated employment agency and management consultancy firm, connecting exceptional professionals with leading organizations to deliver strategic expertise and accelerate sustainable growth.</p>
              <div className="mt-6 space-y-1.5 text-xs">
                <p className="font-semibold text-primary">UEN: 202614733G</p>
                <p className="font-semibold text-primary">EA Licence No.: 26S3550</p>
              </div>
              <a href="https://www.linkedin.com/in/axiom-rise-330054406/" target="_blank" rel="noopener noreferrer" aria-label="Axiom Rise on LinkedIn" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors">
                <LinkedinIcon size={18} /> LinkedIn
              </a>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">
                <span className="border-b-2 border-accent pb-1.5">Quick Links</span>
              </h4>
              <ul className="space-y-3">{quickLinks.map(l=><li key={l.label}><Link href={l.href} className="text-sm text-primary/70 hover:text-accent transition-colors">{l.label}</Link></li>)}</ul>
            </div>

            {/* Services */}
            <div className="col-span-1">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">
                <span className="border-b-2 border-accent pb-1.5">Our Services</span>
              </h4>
              <ul className="space-y-3">{services.map(s=><li key={s.label}><Link href={s.href} className="text-sm text-primary/70 hover:text-accent transition-colors">{s.label}</Link></li>)}</ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 lg:col-span-1">
              <h4 className="text-sm font-semibold uppercase tracking-wider mb-5">
                <span className="border-b-2 border-accent pb-1.5">Contact</span>
              </h4>
              <div className="space-y-4 text-sm text-primary/70">
                <div>
                  <p className="font-semibold text-primary mb-1">Address</p>
                  <p>749 Woodlands Circle, #12-616</p>
                  <p>Singapore 730749</p>
                </div>
                <div>
                  <p className="font-semibold text-primary mb-1">Email</p>
                  <a href="mailto:info@axiomrise.sg" className="block hover:text-accent transition-colors">info@axiomrise.sg</a>
                  <a href="mailto:latha@axiomrise.sg" className="block hover:text-accent transition-colors">latha@axiomrise.sg</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-blue-400/80 border-t border-white/60">
        <div className="container-max px-6 lg:px-20 xl:px-28 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-primary/60">&copy; {new Date().getFullYear()} Axiom Rise Consultancy Pte. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="text-xs text-primary/60 hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="text-xs text-primary/60 hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
