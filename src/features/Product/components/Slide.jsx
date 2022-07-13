import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Slide() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='mySwiper mt-19 w-full h-[100vh]'>
        <SwiperSlide>
          <img src='https://chupanh.vn/wp-content/uploads/2017/06/ch%E1%BB%A5p-%E1%BA%A3nh-qu%E1%BA%A7n-%C3%A1o-2-1.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://cdn.nguyenkimmall.com/images/companies/_1/Tin_tuc/tvuhd.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://artia.vn/wp-content/uploads/2020/11/Gian-hang-centimet-1400x788.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='http://giadinh.mediacdn.vn/2021/4/3/photo-1-1617426026773144524904.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://stellamarisacademy.org/wp-content/uploads/2016/02/Black-Diamond-Desktop-Wallpaper.jpg' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
