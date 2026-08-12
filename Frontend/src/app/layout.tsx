import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VisitorTracker from "@/components/sections/VisitorTracker";
import CookieBanner from "@/components/sections/CookieBanner";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL("https://axiomrise-consultancy.onrender.com"),
  title: "AxiomRise Consultancy — Executive Advisory & Management Consultancy in Singapore",
  description:
    "Axiom Rise Pte. Ltd. is a Singapore-incorporated executive advisory and management consultancy firm connecting exceptional professionals with leading organizations to deliver strategic expertise and accelerate sustainable growth.",
  keywords: [
    "management consultancy Singapore",
    "executive advisory",
    "company incorporation Singapore",
    "company secretarial services",
    "payroll administration",
    "executive search",
    "recruitment agency Singapore",
    "business advisory",
  ],
  icons: { icon: "/logo/axiomrise-logo.png", apple: "/logo/axiomrise-logo.png" },
  alternates: { canonical: "/" },
  openGraph: {
    title: "AxiomRise Consultancy — Executive Advisory & Management Consultancy",
    description:
      "Strategy, people, and business transformation — under one roof. Singapore-incorporated executive advisory and management consultancy firm.",
    siteName: "AxiomRise Consultancy",
    type: "website",
    images: [{ url: "/logo/axiomrise-logo.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "AxiomRise Consultancy — Executive Advisory & Management Consultancy",
    description: "Singapore-incorporated executive advisory and management consultancy firm.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B2545",
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
