"use client";

import Link from "next/link";
import {
  Box,
  Typography,
  IconButton,
  Avatar,
  Stack,
  Button,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: <WhatsAppIcon fontSize="inherit" />,
      href: "https://wa.me/94775306940",
      label: "WhatsApp",
    },
    {
      icon: <InstagramIcon fontSize="inherit" />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <FacebookIcon fontSize="inherit" />,
      href: "https://facebook.com",
      label: "Facebook",
    },
    {
      icon: <LanguageIcon fontSize="inherit" />,
      href: "https://tripadvisor.com",
      label: "TripAdvisor",
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        color: "#fff",
        pt: 6,
        pb: 3,
        mt: 8,
        overflow: "hidden",
      }}
    >
      {/* Background image with overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/Mirissa-Diving-Activities-Center-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.81)",
          },
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1200px",
          mx: "auto",
          px: 2,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {/* Brand Logo & Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="Logo"
              src="/MainLogo.png"
              sx={{ width: 70, height: 70, border: "2px solid #fff" }}
            />
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                fontFamily: "Cormorant Garamond, serif",
              }}
            >
              Mirissa Diving Activities Center
            </Typography>
          </Stack>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Stack
            direction="row"
            spacing={3}
            sx={{ textAlign: "center", fontWeight: 500 }}
          >
                        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                sx={{
                  fontSize: "18px", // bigger size
                  fontWeight: 600,
                  transition: "color 0.3s",
                  "&:hover": { color: "#00CFFF" },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link href="/about" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                sx={{
                  fontSize: "18px", // bigger size
                  fontWeight: 600,
                  transition: "color 0.3s",
                  "&:hover": { color: "#00CFFF" },
                }}
              >
                About
              </Typography>
            </Link>
            <Link href="/contact" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                sx={{
                  fontSize: "18px", // bigger size
                  fontWeight: 600,
                  transition: "color 0.3s",
                  "&:hover": { color: "#00CFFF" },
                }}
              >
                Contact
              </Typography>
            </Link>
             <Link href="/gallery" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography
                sx={{
                  fontSize: "18px", // bigger size
                  fontWeight: 600,
                  transition: "color 0.3s",
                  "&:hover": { color: "#00CFFF" },
                }}
              >
                Gallery
              </Typography>
            </Link>
          </Stack>
        </motion.div>

        {/* Contact & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Box sx={{ textAlign: "center" }}>
            {/* Clickable phone button */}
            <Button
              component="a"
              href="tel:+94775306940"
              variant="contained"
              sx={{
                mb: 2,
                px: 2,
                py: 0.8,
                fontSize: "14px", // smaller size
                borderRadius: "20px",
                background: "#00CFFF",
                color: "#000",
                fontWeight: 600,
                textTransform: "none",
                transition: "all 0.3s ease",
                "&:hover": {
                  background: "#00A5CC",
                  transform: "scale(1.08)",
                  boxShadow: "0 4px 12px rgba(0, 207, 255, 0.4)",
                },
              }}
            >
              📞  077 530 6940
            </Button>

            {/* Social icons */}
            <Stack direction="row" spacing={2} justifyContent="center">
              {socialLinks.map((social, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={social.href}
                  target="_blank"
                  rel="noopener"
                  aria-label={social.label}
                  sx={{
                    fontSize: "28px", // bigger icons
                    color: "#fff",
                    transition: "transform 0.3s, color 0.3s",
                    "&:hover": {
                      transform: "scale(1.25)",
                      color: "#00CFFF",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Box>
        </motion.div>
      </Box>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Box sx={{ textAlign: "center", mt: 4, position: "relative", zIndex: 1 }}>
          <Typography variant="body2" sx={{ fontSize: "13px", color: "#aaa" }}>
            © 2025 Mirissa Diving Activities Center. All Rights Reserved.  
            <br />
            Designed by <strong>WebMinds Innovations</strong>.
          </Typography>
        </Box>
      </motion.div>
    </Box>
  );
}
