"use client";

import Link from "next/link";
import { Box, Typography, Link as MuiLink, IconButton } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language"; // used for TripAdvisor (no official icon)

import NextLink from "next/link";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "#0C1C2C", color: "#fff", p: 4, mt: 8 }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          mx: "auto",
        }}
      >
        {/* Left: Site Name */}
        <Typography variant="h6" sx={{ mb: { xs: 2, md: 0 }, fontWeight: 700 }}>
          Mirissa Diving Activities Center
        </Typography>

        {/* Center: Quick Links */}
        <Box sx={{ display: "flex", gap: 3 }}>
          <MuiLink
            component={Link}
            href="/about"
            underline="none"
            color="inherit"
          >
            About
          </MuiLink>
          <MuiLink
            component={Link}
            href="/contact"
            underline="none"
            color="inherit"
          >
            Contact
          </MuiLink>
        </Box>

        {/* Right: Contact & Social */}
        <Box sx={{ textAlign: "center", mt: { xs: 2, md: 0 } }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            📞 +94 70 441 8827
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <IconButton
              component="a"
              href="https://wa.me/94704418827"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff" }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff" }}
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://facebook.com"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff" }}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://tripadvisor.com"
              target="_blank"
              rel="noopener"
              sx={{ color: "#fff" }}
            >
              <LanguageIcon /> {/* Used as a generic web icon */}
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* Bottom */}
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Typography variant="body2" sx={{ fontSize: "13px", color: "#aaa" }}>
          © 2025 Mirissa Diving Activities Center. All Rights Reserved. Designed
          by WebMinds Innovations.
        </Typography>
      </Box>
    </Box>
  );
}
