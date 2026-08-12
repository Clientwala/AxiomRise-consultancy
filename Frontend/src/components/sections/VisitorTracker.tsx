"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function generateSessionId(): string {
  if (typeof window !== "undefined") {
    let sid = sessionStorage.getItem("__ar_session");
    if (!sid) {
      sid = `s_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
      sessionStorage.setItem("__ar_session", sid);
    }
    return sid;
  }
  return "";
}

function getCookieConsent(): { accepted: boolean; given: boolean } {
  if (typeof window !== "undefined") {
    const accepted = localStorage.getItem("__ar_cookies_accepted") === "true";
    const given = localStorage.getItem("__ar_consent") === "true";
    return { accepted, given };
  }
  return { accepted: false, given: false };
}

export default function VisitorTracker() {
  const pathname = usePathname();
  const lastTracked = useRef("");

  useEffect(() => {
    const currentPath = pathname;
    if (lastTracked.current === currentPath) return;
    lastTracked.current = currentPath;

    const track = async () => {
      try {
        const { accepted, given } = getCookieConsent();
        await fetch("/api/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            path: currentPath,
            referrer: document.referrer || "",
            cookiesAccepted: accepted,
            consentGiven: given,
            sessionId: generateSessionId(),
          }),
        });
      } catch {
        // silent fail — tracking is non-critical
      }
    };

    track();
  }, [pathname]);

  return null; // invisible component
}
