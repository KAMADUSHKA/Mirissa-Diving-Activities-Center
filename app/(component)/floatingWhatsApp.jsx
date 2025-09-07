"use client";

import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useState } from "react";

export default function FloatingWhatsApp() {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href="https://wa.me/94773416421"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          color: "#25d365", // WhatsApp green
          zIndex: 1000,
          cursor: "pointer",
          transition: "transform 0.3s ease, filter 0.3s ease",
          transform: hover ? "scale(1.2)" : "scale(1)",
          filter: hover ? "drop-shadow(0 4px 8px rgba(37, 211, 101, 0.253))" : "none",
        }}
      >
        <WhatsAppIcon style={{ fontSize: 65 }} />
      </div>
    </Link>
  );
}
