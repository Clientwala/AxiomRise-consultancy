"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("__ar_cookies_accepted");
    if (!accepted) {
      setVisible(true);
    } else {
      // Already accepted — mark consent as given silently
      localStorage.setItem("__ar_consent", "true");
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("__ar_cookies_accepted", "true");
    localStorage.setItem("__ar_consent", "true");
    setVisible(false);
    // Re-track with consent
    fetch(`${API_URL}/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        path: window.location.pathname,
        referrer: document.referrer || "",
        cookiesAccepted: true,
        consentGiven: true,
        sessionId: sessionStorage.getItem("__ar_session") || "",
      }),
    }).catch(() => {});
  };

  const decline = () => {
    localStorage.setItem("__ar_cookies_accepted", "true");
    localStorage.setItem("__ar_consent", "false");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-border shadow-2xl p-4 md:p-5"
        >
          <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted max-w-2xl">
              <p>
                We use cookies to enhance your browsing experience, analyze site
                traffic, and personalize content. By clicking{" "}
                <strong>&quot;Accept All&quot;</strong>, you consent to our use of
                cookies.{" "}
                <a href="/privacy-policy" className="text-accent underline underline-offset-2 hover:text-accent-dark transition-colors">
                  Learn more
                </a>
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={decline}
                className="text-sm font-medium text-muted hover:text-primary px-4 py-2 rounded-full border border-border transition-colors"
              >
                Decline
              </button>
              <button
                onClick={acceptAll}
                className="text-sm font-semibold text-white bg-primary hover:bg-primary-light px-6 py-2.5 rounded-full transition-colors"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
