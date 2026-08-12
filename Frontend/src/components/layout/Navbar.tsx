"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services", href: "/services",
    dropdown: [
      { label: "Management Consultancy", href: "/services/management-consultancy", highlight: true },
      { label: "Payroll Administration", href: "/services/payroll-administration" },
      { label: "Permanent Recruitment", href: "/services/permanent-recruitment" },
      { label: "Temporary Staffing", href: "/services/temporary-staffing" },
      { label: "Contract Staffing", href: "/services/contract-staffing" },
      { label: "Executive Search", href: "/services/executive-search" },
      { label: "Call Centre Staffing", href: "/services/call-centre-staffing" },
    ],
  },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact", isCta: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setDropdownOpen(false); setMobileDropdownOpen(false); }, [pathname]);
  useEffect(() => { document.body.style.overflow = mobileOpen ? "hidden" : ""; }, [mobileOpen]);

  const isServiceActive = pathname === "/services" || pathname === "/services/management-consultancy";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border transition-all duration-300 ${
        scrolled ? "bg-soft shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="container-max flex items-center justify-between h-20 md:h-24 px-6 lg:px-20 xl:px-28">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <span className="inline-flex items-center justify-center bg-primary rounded-full p-1 shrink-0">
            <Image src="/logo/axiomrise-logo.png" alt="AxiomRise Consultancy" width={220} height={220} className="h-10 md:h-12 w-auto" priority />
          </span>
          <span className="leading-tight">
            <span className="block font-serif font-semibold text-primary text-xl md:text-2xl tracking-tight">AxiomRise</span>
            <span className="block text-[8px] md:text-[9px] font-medium text-muted uppercase tracking-[0.22em]">Executive Advisory &amp; Consultancy</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.dropdown) {
              return (
                <div key={link.label} className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                  <button className={`flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors ${isServiceActive ? "text-accent" : "text-primary"}`}>
                    {link.label}
                    <HiChevronDown className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-lg border border-border py-2 overflow-hidden">
                        {link.dropdown.map((item) => (
                          <Link key={item.label} href={item.href}
                            className={`block px-5 py-2.5 text-sm transition-colors hover:bg-soft ${item.highlight ? "text-accent font-semibold border-t border-border mt-1 pt-3" : "text-primary"}`}>
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }
            if (link.isCta) return <Link key={link.label} href={link.href!} className="bg-primary text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-primary-light transition-colors">{link.label}</Link>;
            return <Link key={link.label} href={link.href!} className={`text-sm font-medium transition-colors hover:text-accent ${pathname === link.href ? "text-accent" : "text-primary"}`}>{link.label}</Link>;
          })}
        </div>

        <button className="lg:hidden p-2 text-primary" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
          {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "100vh" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-border overflow-y-auto">
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.label}>
                      <button onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                        className="flex items-center justify-between w-full py-3 text-base font-medium text-primary">
                        {link.label}
                        <HiChevronDown className={`transition-transform ${mobileDropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileDropdownOpen && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden ml-4 border-l-2 border-soft pl-4">
                            {link.dropdown.map((item) => (
                              <Link key={item.label} href={item.href} className={`block py-2.5 text-sm ${item.highlight ? "text-accent font-semibold" : "text-muted"}`}>{item.label}</Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return <Link key={link.label} href={link.href!} className={`py-3 text-base font-medium ${link.isCta ? "bg-primary text-white text-center rounded-full mt-3 px-6" : "text-primary"}`}>{link.label}</Link>;
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
