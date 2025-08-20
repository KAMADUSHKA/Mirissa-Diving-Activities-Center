"use client";

import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function FloatingWhatsApp() {
  return (
    <Link
      href="https://wa.me/94775306940"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#25d365cd",
          color: "white",
          borderRadius: "50%",
          padding: "1px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          zIndex: 1000,
          cursor: "pointer",
        }}
      >
        <WhatsAppIcon style={{ fontSize: 65, }} />
      </div>
    </Link>
  );
}
