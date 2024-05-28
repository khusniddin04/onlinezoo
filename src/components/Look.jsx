import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {  Navigation } from 'swiper/modules';
import "../style/look.css"
import img1 from '../images/look_panda.png'
import img2 from '../images/look_gorilla.png'
import img3 from '../images/look_eagle.png'
import img4 from '../images/look_alligator.png'
import img5 from '../images/look_elephant.png'
import img6 from '../images/look_lemurs.png'
function Look() {
  return (
    <section className='look'>
      <div className="container">
        <h2>Look at this beautiful animals</h2>
        <div className="look__wrapper">
        <Swiper
        breakpoints={{
            500: {
              // direction:'vertical',
              slidesPerView: 3,
              spaceBetween: 0,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            870: {
              slidesPerView: 4,
            },
            750: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
            1300: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        navigation={true}
        modules={[ Navigation]}
        className="swiper3 mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /> <p>Pandas</p></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /> <p>Gorillas</p></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /> <p>Eagles</p></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /> <p>Aligators</p></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /> <p>Pandas</p></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" /> <p>Gorillas</p></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" /> <p>Pandas</p></SwiperSlide>
        <SwiperSlide><img src={img5} alt="" /> <p>Pandas</p></SwiperSlide>
        <SwiperSlide><img src={img6} alt="" /> <p>Pandas</p></SwiperSlide>
        </Swiper>
        <div className="look__btns"></div>
        </div>
      </div>
    </section>
  )
}

export default Look
