"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
export default function Slider_small({ children }) {
  return (
    <>
      <Swiper
        className="w-[100%] h-[100%]"
        slidesPerView={5}
        scrollbar={true}
        modules={[Scrollbar]}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className="w-[100%] h-[100%] cursor-pointer">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
