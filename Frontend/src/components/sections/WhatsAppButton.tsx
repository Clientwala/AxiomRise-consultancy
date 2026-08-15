"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "6584801376";
const WHATSAPP_MESSAGE =
  "Hello Axiom Rise! I would like to enquire about your services.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-[95] group flex items-center"
    >
      {/* Pulse ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />
      <span className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-full pl-3.5 pr-3.5 sm:pl-4 sm:pr-5 py-3 sm:py-3.5 shadow-lg shadow-green-500/30 transition-colors duration-300">
        <FaWhatsapp size={24} />
        <span className="text-sm font-semibold hidden sm:inline">Chat with us</span>
      </span>
    </motion.a>
  );
}
