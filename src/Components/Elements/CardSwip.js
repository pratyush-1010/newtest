import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import './styles.css';
import { Pagination } from 'swiper/modules';
import Card1 from './Card1';


const CardSwip = () => {
  return (
    <div>
         <Swiper
      
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide><Card1/></SwiperSlide>
        <SwiperSlide><Card1/></SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default CardSwip



// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import './styles.css';

// // import required modules
// import { Pagination } from 'swiper';
// import Card1 from './Card1';


// export default function App() {
//   return (
//     <>
//          <Swiper
      
//       pagination={{
//         clickable: true,
//       }}
//       breakpoints={{
//           320: {
//             slidesPerView: 1,
//             spaceBetween: 30,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 4,
//             spaceBetween: 20,
//           },
//         }}
//       modules={[Pagination]}
//       className="mySwiper"
//     >
//         <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide>
//       </Swiper>
//     </>
//   );
// }


