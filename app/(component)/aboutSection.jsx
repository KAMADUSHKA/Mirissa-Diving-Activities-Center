"use client";
import React from "react";
import { Container, Typography, Grid, Box, Link } from "@mui/material";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import required modules
import {
  FreeMode,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

const features = [
  {
    title: "Food & Drinks",
    text: "Complimentary breakfast or tea with cookies.",
  },
  {
    title: "Many Attractions",
    text: "Turtles, whales, dolphins and more await you.",
  },
  {
    title: "Affordable Price",
    text: "Flexible packages that fit your budget.",
  },
  {
    title: "Safety Lockers",
    text: "All gear and lockers provided for safety.",
  },
];

const stats = [
  { number: "150K+", label: "Happy Visitors" },
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Tour Packages" },
  { number: "100%", label: "Customer Satisfaction" },
];

const aboutImg = [
  {
    img: "/Scuba-Diving.jpg",
  },
  {
    img: "/Fun-Diving.jpg",
  },
  {
    img: "/Turtle-Snorkeling.jpg",
  },
  {
    img: "/Whale-Snorkeling.jpg",
  },
  {
    img: "/Boat-Tours.jpg",
  },
  {
    img: "/Deep-Sea-Fishing-Tour.jpg",
  },
  {
    img: "/Low-Deep-Sea-Fishing-Tour.jpg",
  },
];

export default function AboutSection() {
  const imgStyle = {
    borderRadius: "10px",
    transition: "transform 0.3s ease",
  };
  return (
    <Box sx={{bgcolor:"rgba(33, 149, 243, 0.077)", padding:4, borderRadius:4}}>
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
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
            // Responsive font sizes
            fontSize: {
              xs: "2.2rem", // small screens (mobile)
              sm: "2.5rem", // tablets
              md: "3.5rem", // desktop
              lg: "4rem", // large desktop
            },
          }}
        >
          Welcome to Mirissa Diving Activities Center
        </Typography>
        <Typography variant="subtitle1">
          Welcome to Mirissa Diving Activities Center, your gateway to
          unforgettable ocean adventures on Sri Lanka’s stunning southern coast.
          From snorkeling with graceful turtles and colorful tropical fish to
          spotting majestic whales and playful dolphins, we offer safe,
          exciting, and expertly guided marine experiences for all skill levels.
          With quality equipment, friendly service, and deep local knowledge,
          we’re here to help you create lasting memories beneath the waves.
        </Typography>
      </motion.div>

      {/* Features */}
      <Grid container spacing={3} sx={{ mt: 5, justifyContent: "center" }}>
        {features.map((item, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Box
                sx={{
                  bgcolor: " rgba(33, 150, 243, 0.4)",
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    bgcolor: " rgba(33, 149, 243, 0.77)",
                    color: "rgb(0, 0, 0)",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.819)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      color: " rgb(0, 0, 0)",
                    },
                  }}
                  gutterBottom
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.text}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        effect="coverflow" // ✅ cool 3D animation
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[FreeMode, Pagination, Autoplay, EffectCoverflow]}
        style={{
          maxWidth: "800px",
          margin: "40px auto",
        }}
      >
        <SwiperSlide>
          <Image
            src="/Deep-Diving.jpg"
            alt="Deep Diving"
            width={250}
            height={200}
            style={{
              borderRadius: "10px",
              transition: "transform 0.3s ease",
            }}
            className="hover:scale-105" // ✅ smooth zoom on hover
          />
        </SwiperSlide>

        {aboutImg.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item.img}
              alt="Mirissa-Diving-Activities-Center"
              width={250}
              height={200}
              style={{
                borderRadius: "10px",
                transition: "transform 0.3s ease",
              }}
              className="hover:scale-105"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Stats */}
      <Grid container spacing={3} sx={{ mt: 6, justifyContent: "center" }}>
        {stats.map((stat, i) => (
          <Grid item xs={6} md={3} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Typography variant="h4" fontWeight="bold">
                {stat.number}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                {stat.label}
              </Typography>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
