"use client";

import { useEffect, useRef } from "react";

const JOTFORM_URL = "https://form.jotform.com/jsform/262264087208054";

export default function JotFormEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Load JotForm embed script into the container
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = JOTFORM_URL;
    script.async = true;
    container.appendChild(script);

    return () => {
      if (script.parentNode === container) {
        container.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div ref={containerRef} className="jotform-container w-full" />
    </div>
  );
}
