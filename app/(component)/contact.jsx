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

const Contact = () => {
  const contactItems = [
    {
      icon: <PhoneIcon fontSize="large" color="primary" />,
      label: "Call Us",
      value: "+94 74 261 7251",
      link: "tel:+94742617251",
    },
    {
      icon: <EmailIcon fontSize="large" color="primary" />,
      label: "Email",
      value: "info@yourbusiness.com",
      link: "mailto:info@yourbusiness.com",
    },
    {
      icon: <WhatsAppIcon fontSize="large" color="success" />,
      label: "WhatsApp",
      value: "+94 74 261 7251",
      link: "https://wa.me/94742617251",
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
          marginBottom: 6,
        }}
      >
        Contact Us
      </Typography>

      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          color: "#fff",
          py: 8,
          marginBottom:5
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
            zIndex: -2, // so mask is above video but below content
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
            background: "rgba(0, 0, 0, 0.301)", // adjust 0.4 to make darker/lighter
            zIndex: -1,
          }}
        />

        <Container>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            component={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            sx={{ marginBottom: 4 }}
          >
            Contact Us
          </Typography>

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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    transition: "all 0.3s ease", // smooth animation
                    "&:hover": {
                      backgroundColor: "#ffffff",
                      transform: "scale(1.1) rotate(5deg)", // slight zoom & tilt
                      boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.564)",
                    },
                  }}
                >
                  {item.icon}
                </IconButton>
                <Box
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
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
