import React from "react";
import Image from "next/image";
import img1 from "../../public/MainLogo.png";
import img2 from "../../public/about.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

export default function swiper() {
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
      <SwiperSlide>
        {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
        <Image
          src={img1}
          alt="swiper"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
                <Image
          src={img2}
          alt="swiper"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
                <Image
          src={img1}
          alt="swiper"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
      <SwiperSlide>
        {/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
                <Image
          src={img2}
          alt="swiper"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
