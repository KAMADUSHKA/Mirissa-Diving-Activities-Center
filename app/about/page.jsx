"use client";
import React from "react";
import Header from "../(component)/Header.jsx";
import Footer from "../(component)/footer";
import Swiper from "../(component)/swiper";
import AboutSection from "../(component)/aboutSection";
import { Container, Typography } from "@mui/material";
import ReviewParallax from "../(component)/review";
import MainPackage from "../(component)/mainPackage";
import Marquee from "../(component)/marquee.jsx";
import FloatingWhatsApp from "../(component)/floatingWhatsApp.jsx";

export default function page() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Swiper />
    <Marquee/>
      <Container maxWidth="xl" sx={{ marginBottom: 15 }}>
        <AboutSection />
        <MainPackage />
      </Container>
      <ReviewParallax />

      <div>
        <Footer />
      </div>
          <FloatingWhatsApp />
    </>
  );
}
