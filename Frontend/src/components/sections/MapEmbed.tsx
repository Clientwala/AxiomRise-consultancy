"use client";
import { useEffect } from "react";

// Using Google Maps embed for reliability — pins to registered address
export default function MapEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-border w-full aspect-[16/9] md:aspect-[21/9] max-h-[450px]">
      <iframe
        title="Axiom Rise Consultancy Office"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.6564123456789!2d103.789!3d1.431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da10e6a4a4a4a4%3A0xa4a4a4a4a4a4a4a4!2s749%20Woodlands%20Circle!5e0!3m2!1sen!2ssg!4v1690000000000"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
