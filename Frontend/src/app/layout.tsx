import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VisitorTracker from "@/components/sections/VisitorTracker";
import CookieBanner from "@/components/sections/CookieBanner";
import WhatsAppButton from "@/components/sections/WhatsAppButton";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  metadataBase: new URL("https://axiom-rise-consultancy.vercel.app"),
  title: "Axiom Rise Consultancy — Employment Agency & Management Consultancy in Singapore",
  description:
    "Axiom Rise Pte. Ltd. is a Singapore-incorporated employment agency and management consultancy firm connecting exceptional professionals with leading organizations to deliver strategic expertise and accelerate sustainable growth.",
  keywords: [
    "management consultancy Singapore",
    "employment agency Singapore",
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
    title: "Axiom Rise Consultancy — Employment Agency & Management Consultancy",
    description:
      "Strategy, people, and business transformation — under one roof. Singapore-incorporated employment agency and management consultancy firm.",
    siteName: "Axiom Rise Consultancy",
    type: "website",
    images: [{ url: "/logo/axiomrise-logo.png", width: 512, height: 512 }],
  },
  twitter: {
    card: "summary",
    title: "Axiom Rise Consultancy — Employment Agency & Management Consultancy",
    description: "Singapore-incorporated employment agency and management consultancy firm.",
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
        <WhatsAppButton />
        <CookieBanner />
        <Toaster position="bottom-right" toastOptions={{ style: { borderRadius: "12px", background: "#0B2545", color: "#fff" } }} />
      </body>
    </html>
  );
}
