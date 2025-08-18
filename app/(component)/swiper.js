'use client'
import React from "react";
import Image from "next/image";
import img1 from "../../public/about-1.jpg";
import img2 from "../../public/about.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import styles from "./page.module.css";

export default function MySwiper() {
  const slides = [
    {
      img: img1,
      heading: "Dive into Paradise",
      subheading: "Explore vibrant reefs and marine life in Mirissa",
    },
    {
      img: img2,
      heading: "Scuba Diving Adventures",
      subheading: "Go deeper and discover a whole new world underwater",
    },
    {
      img: img1,
      heading: "Underwater Memories",
      subheading: "Make every dive an adventure to remember",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}> 
          <div className={styles.slideContainer}>
            <Image
              src={slide.img}
              alt={slide.heading}
              className={styles.slideImage}
              
            />
            <div className={styles.textOverlay}>
              <h1 className={styles.heading}>{slide.heading}</h1>
              <p className={styles.subheading}>{slide.subheading}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
