import type { MetadataRoute } from "next";

const BASE_URL = "https://axiom-rise-consultancy.vercel.app";

const routes = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/services/management-consultancy", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/services/payroll-administration", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/accounting-services", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/permanent-recruitment", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/temporary-staffing", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/contract-staffing", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/executive-search", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/services/call-centre-staffing", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms-of-service", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
