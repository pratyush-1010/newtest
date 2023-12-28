import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Navigation} from 'swiper/modules';
import CarCon from './CarCon';

export default function App() {
  return (
    <>
      <Swiper direction={'vertical'}
      pagination={{clickable:true}}
      modules={[Navigation,Pagination]}className="mySwiper swipe1">
        <SwiperSlide><CarCon/></SwiperSlide>
        <SwiperSlide><CarCon/></SwiperSlide>
        <SwiperSlide><CarCon/></SwiperSlide>
        <SwiperSlide><CarCon/></SwiperSlide>
        {/* <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
