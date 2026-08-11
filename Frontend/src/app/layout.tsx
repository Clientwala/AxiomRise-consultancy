import type { Metadata } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VisitorTracker from "@/components/sections/VisitorTracker";
import CookieBanner from "@/components/sections/CookieBanner";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "AxiomRise Consultancy — Talent, Strategy & Governance Under One Roof",
  description:
    "Singapore-incorporated Talent & HR Solutions and Management Consultancy firm offering Permanent Recruitment, Executive Search, Contract Staffing, Company Incorporation, Secretarial Services, and more.",
  openGraph: {
    title: "AxiomRise Consultancy — Talent, Strategy & Governance",
    description: "Premium Talent & HR Solutions + Management Consultancy firm based in Singapore.",
    siteName: "AxiomRise Consultancy",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <VisitorTracker />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <Toaster position="bottom-right" toastOptions={{ style: { borderRadius: "12px", background: "#0B2545", color: "#fff" } }} />
      </body>
    </html>
  );
}
