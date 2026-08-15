"use client";

import { useEffect, useRef, useState } from "react";

const JOTFORM_URL = "https://form.jotform.com/jsform/262264087208054";

export default function JotFormEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Detect when the form actually renders (content appears in container)
    const mutationObserver = new MutationObserver(() => {
      if (container.children.length > 0) {
        setLoaded(true);
        mutationObserver.disconnect();
      }
    });
    mutationObserver.observe(container, { childList: true, subtree: true });

    // Lazy-load the JotForm script when it scrolls near the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.src = JOTFORM_URL;
            script.async = true;
            container.appendChild(script);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "250px" }
    );

    observer.observe(container);

    // Fallback: reveal after 15s even if detection fails
    const fallbackTimer = setTimeout(() => setLoaded(true), 15000);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div ref={containerRef} className="jotform-container w-full min-h-[420px] relative">
        {!loaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-accent" />
            <p className="text-sm">Loading form…</p>
          </div>
        )}
      </div>
    </div>
  );
}
