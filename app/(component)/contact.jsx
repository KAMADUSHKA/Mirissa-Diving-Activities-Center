'use client'
import React from "react";
import { Box, Typography, Container, Grid, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import RoomIcon from "@mui/icons-material/Room";
import LanguageIcon from "@mui/icons-material/Language";

const MotionTypography = motion(Typography); // shortcut for animated typography

const Contact = () => {
  const contactItems = [
    {
      icon: <PhoneIcon fontSize="large" color="primary" />,
      label: "Call Us",
      value: " 0773416421",
      link: "tel:+94773416421",
    },
    {
      icon: <EmailIcon fontSize="large" color="primary" />,
      label: "Email",
      value: "info@mirissadivingactivitiescenter.com",
      link: "mailto:info@mirissadivingactivitiescenter.com",
    },
    {
      icon: <WhatsAppIcon fontSize="large" color="success" />,
      label: "WhatsApp",
      value: "0773416421",
      link: "https://wa.me/94773416421",
    },
    {
      icon: <FacebookIcon fontSize="large" color="primary" />,
      label: "Facebook",
      value: "Go Dive Mirissa",
      link: "https://facebook.com",
    },
    {
      icon: <LanguageIcon fontSize="large" color="success" />,
      label: "TripAdvisor",
      value: "View Our Reviews",
      link: "https://tripadvisor.com",
    },
  ];

  return (
    <>
      {/* Top Heading */}
      <MotionTypography
        variant="h2"
        align="center"
        gutterBottom
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
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
        Contact Us
      </MotionTypography>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          color: "#fff",
          py: 8,
          marginBottom: 5,
        }}
      >
        {/* Background Video */}
        <video
          src="/Fish.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: -2,
          }}
        />

        {/* Dark Overlay Mask */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.35)",
            zIndex: -1,
          }}
        />

        <Container>
          {/* Section Title */}
          <MotionTypography
            variant="h4"
            align="center"
            gutterBottom
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{ marginBottom: 4 }}
          >
            Get in Touch
          </MotionTypography>

          {/* Contact Icons */}
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 5 }}>
            {contactItems.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                component={motion.div}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                style={{ textAlign: "center" }}
              >
                <IconButton
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "#d7dce8",
                    boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
                    width: 60,
                    height: 60,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      transform: "scale(1.1) rotate(5deg)",
                      boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.56)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  sx={{
                    bgcolor: "#0606064a",
                    paddingLeft: 1,
                    paddingBottom: 1,
                    paddingRight: 1,
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="h6" sx={{ mt: 1 }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body2">{item.value}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          {/* Google Map */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0px 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.9072843471641!2d80.47675252832467!3d5.938455295726038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f002779b685%3A0x59f217cfeca3bf88!2sMirissa%20Diving%20Activities%20Center!5e0!3m2!1sen!2slk!4v1755262243519!5m2!1sen!2slk"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
