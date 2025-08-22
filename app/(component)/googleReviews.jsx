"use client";

import { Typography } from "@mui/material";
import { useEffect } from "react";

export default function GoogleReviews() {
  useEffect(() => {
    // Dynamically load Elfsight platform script
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="reviews" className="section container">
      <Typography
        variant="h2"
        align="center"
        gutterBottom
        sx={{
          fontWeight: "bold",
          fontFamily: "Cormorant Garamond, serif",
          color: "rgba(12, 93, 160, 0.8)",
          textShadow: "2px 45px 4px rgba(33, 149, 243, 0.077)",
          marginTop: 6,
          marginBottom: 4,
          fontSize: {
            xs: "2rem",
            sm: "2.5rem",
            md: "3.5rem",
            lg: "4rem",
          },
        }}
      >
        Our Google Reviews
      </Typography>

      <div
        className="elfsight-app-abe1d92c-897b-4aef-9632-f28fecaebf15"
        data-elfsight-app-lazy
      ></div>
    </section>
  );
}
