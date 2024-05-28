import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import zoo1_img from "../images/zoo1_img.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";

function ZooSwiper() {
  return (
    <div className="zooSwiper__wrapper">
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="swiper2 mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1250: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}
      >
        <SwiperSlide>
          <img src={zoo1_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={zoo1_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={zoo1_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={zoo1_img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={zoo1_img} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="zooSwiper__icons">
        <div className="swipe-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </div>
  );
}

export default ZooSwiper;
