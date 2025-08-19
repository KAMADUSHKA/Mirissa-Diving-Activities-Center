"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/parallax";
import { Typography } from "@mui/material";

const review = [
  {
    name: "mazing Experience",
    review:
      "The trip was amazing! Everything was well organized and the views were unforgettable.",
  },
  {
    name: "mazing Experience",
    review:
      "The trip was amazing! Everything was well organized and the views were unforgettable.",
  },
  {
    name: "mazing Experience",
    review:
      "The trip was amazing! Everything was well organized and the views were unforgettable.",
  },
  {
    name: "mazing Experience",
    review:
      "The trip was amazing! Everything was well organized and the views were unforgettable.",
  },
  {
    name: "mazing Experience",
    review:
      "The trip was amazing! Everything was well organized and the views were unforgettable.",
  },
];

export default function ReviewParallax() {
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
          marginBottom: 2,
          // Responsive font sizes
          fontSize: {
            xs: "2rem", // small screens (mobile)
            sm: "2.5rem", // tablets
            md: "3.5rem", // desktop
            lg: "4rem", // large desktop
          },
        }}
      >
       What Our Happy Customers Say
      </Typography>

      <div style={{ padding: "20px" }}>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={800}
          parallax={true}
          pagination={{ clickable: true }}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            stopOnLastSlide: true, // stops autoplay at last slide
          }}
          loop={true} // no looping back to first
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {/* Background image */}
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              backgroundImage: "url('/review.jpg')",
            }}
            data-swiper-parallax="-23%"
          />

          {review.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="content">
                <h2 data-swiper-parallax="-300">{item.name}</h2>
                <p data-swiper-parallax="-100">{item.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <style jsx>{`
          .mySwiper {
            width: 100%;
            max-width: 1100px;
            height: 800px;
            border-radius: 10px;
            overflow: hidden;
          }

          .parallax-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 130%;
            height: 100%;
            background-size: cover;
            background-position: center;
          }

          .content {
            color: #fff;
            text-align: center;
            padding: 20px;
            max-width: 800px;
            margin: auto;
          }

          h2 {
            font-size: clamp(
              1.3rem,
              4vw,
              3rem
            ); /* responsive between 1.5rem and 3rem */
            margin-bottom: 10px;
            font-weight: 500;
          }

          p {
            font-size: clamp(0.8rem, 2vw, 1.2rem);
            line-height: 1.6;
          }

          @media (max-width: 600px) {
            .mySwiper {
              height: 500px; /* smaller on mobile */
            }
          }
        `}</style>
      </div>
    </>
  );
}
