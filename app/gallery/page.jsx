"use client";

import React from "react";
import Footer from "../(component)/footer";
import Header from "../(component)/Header.jsx";
import Marquee from "../(component)/marquee";
import MainPackage from "../(component)/mainPackage";
import Swiper from "../(component)/swiper";
import Image from "next/image";
import { motion } from "framer-motion";
import Gallery from "../(component)/gallery";
import { Container } from "@mui/material";
import FloatingWhatsApp from "../(component)/floatingWhatsApp";

const images = [
  { img: "/Scuba-Diving.jpg" },
  { img: "/Fun-Diving.jpg" },
  { img: "/Turtle-Snorkeling.jpg" },
  { img: "/Whale-Snorkeling.jpg" },
  { img: "/Boat-Tours.jpg" },
  { img: "/Deep-Sea-Fishing-Tour.jpg" },
  { img: "/Low-Deep-Sea-Fishing-Tour.jpg" },
];

export default function Page() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Swiper />
      <Marquee />
      <MainPackage />
      <Container>
<Gallery/>
      </Container>



      <div>
        <Footer />
      </div>
          <FloatingWhatsApp />
    </>
  );
}
