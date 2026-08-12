import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Visitor from "@/lib/models/Visitor";
import { UAParser } from "ua-parser-js";

function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "0.0.0.0";
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

interface GeoData {
  error?: boolean;
  region?: string;
  city?: string;
  country_name?: string;
  org?: string;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { path, referrer, cookiesAccepted, consentGiven, sessionId, region, city, country, isp } = body;

    const ip = getClientIP(request);
    const userAgent = request.headers.get("user-agent") || "";
    const ua = parseUA(userAgent);

    let geo = {
      region: region || "Unknown",
      city: city || "Unknown",
      country: country || "Unknown",
      isp: isp || "Unknown",
    };

    if (!region && ip && ip !== "127.0.0.1" && ip !== "::1") {
      try {
        const geoRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const geoData = (await geoRes.json()) as GeoData;
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
      referrer: referrer || request.headers.get("referer") || "",
      cookiesAccepted: cookiesAccepted || false,
      consentGiven: consentGiven || false,
      sessionId: sessionId || "",
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Tracking error:", error);
    return NextResponse.json({ success: false, error: "Tracking failed" }, { status: 500 });
  }
}
