"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Slider({ children }) {
  return (
    <>
      <Swiper
        className="w-[100%] h-[100%]"
        slidesPerView={1}
        navigation={true}
        pagination={{ dynamicBullets: true, clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className="w-[100%] h-[100%]">
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
