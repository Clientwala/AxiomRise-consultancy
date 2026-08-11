import { Router, Request, Response } from "express";
import dbConnect from "../lib/mongodb";
import Visitor from "../models/Visitor";
import { UAParser } from "ua-parser-js";

const router = Router();

function getClientIP(req: Request): string {
  const forwarded = req.headers["x-forwarded-for"];
  if (typeof forwarded === "string") return forwarded.split(",")[0].trim();
  if (Array.isArray(forwarded)) return forwarded[0].trim();
  return req.socket.remoteAddress || "0.0.0.0";
}

function parseUA(userAgent: string) {
  try {
    const parser = new UAParser(userAgent);
    const browser = parser.getBrowser();
    const os = parser.getOS();
    const device = parser.getDevice();
    return {
      browser: browser.name || "Unknown",
      os: os.name || "Unknown",
      device: device.type || (device.model ? "Mobile" : "Desktop"),
    };
  } catch {
    return { browser: "Unknown", os: "Unknown", device: "Unknown" };
  }
}

// Track visitor (called from frontend on page load)
router.post("/track", async (req: Request, res: Response) => {
  try {
    const ip = getClientIP(req);
    const userAgent = req.headers["user-agent"] || "";
    const { path, referrer, cookiesAccepted, consentGiven, sessionId, region, city, country, isp } = req.body;

    const ua = parseUA(userAgent);

    // Fetch geo data from ipapi.co if no region provided
    let geo = { region: region || "Unknown", city: city || "Unknown", country: country || "Unknown", isp: isp || "Unknown" };
    if (!region && ip && ip !== "127.0.0.1" && ip !== "::1") {
      try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const geoData = await geoRes.json();
        if (!geoData.error) {
          geo = {
            region: geoData.region || "Unknown",
            city: geoData.city || "Unknown",
            country: geoData.country_name || "Unknown",
            isp: geoData.org || "Unknown",
          };
        }
      } catch { /* keep defaults */ }
    }

    await dbConnect();

    await Visitor.create({
      ip,
      region: geo.region,
      city: geo.city,
      country: geo.country,
      isp: geo.isp,
      userAgent,
      browser: ua.browser,
      os: ua.os,
      device: ua.device,
      path: path || "/",
      referrer: referrer || req.headers.referer || "",
      cookiesAccepted: cookiesAccepted || false,
      consentGiven: consentGiven || false,
      sessionId: sessionId || "",
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Tracking error:", error);
    return res.status(500).json({ success: false, error: "Tracking failed" });
  }
});

export default router;
