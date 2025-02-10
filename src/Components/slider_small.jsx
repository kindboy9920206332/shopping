"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
export default function Slider_small({ children }) {
  return (
    <>
      <div className="lg:block hidden">
        <Swiper
          className="w-[100%] h-[100%] "
          slidesPerView={5}
          scrollbar={true}
          modules={[Scrollbar]}
        >
          {children.map((child, index) => (
            <SwiperSlide
              key={index}
              className="w-[100%] h-[100%] cursor-pointer"
            >
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:hidden block">
        <Swiper
          className="w-[100%] h-[100%] "
          slidesPerView={2}
          scrollbar={true}
          modules={[Scrollbar]}
        >
          {children.map((child, index) => (
            <SwiperSlide
              key={index}
              className="w-[100%] h-[100%] cursor-pointer"
            >
              {child}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
