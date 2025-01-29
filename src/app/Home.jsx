import Opsshens from "@/Components/opshens";
import Seugges_small from "@/Components/segess_small";
import Slider from "@/Components/slider_big";
import Sugess_big from "@/Components/sugess_big";
import Link from "next/link";

export default function Home_Store() {
  const slider_store_img = [
    "/img-slider/sofa.jpg",
    "/img-slider/pot cooking.jpg",
    "/img-slider/refrigerator2.jpg",
    "/img-slider/refrigerator.jpg",
    "/img-slider/vacuumn clearn.jpg",
  ];
  return (
    <>
      {/* slider */}
      <div className=" w-[100%] h-[600px] my-3">
        <Slider>
          {slider_store_img.map((item, index) => (
            <img key={index} src={item} className="w-[100%] h-[100%]" />
          ))}
        </Slider>
      </div>

      {/* <div className="flex flex-col text-right">
        <span className="text-[40px] text-gray-800 font-bold">
          کاملاً منحصربه‌فرد
        </span>
        <span className="text-[40px] text-gray-800 font-bold">کاملاً راحت</span>
      </div> */}
      <Sugess_big></Sugess_big>
      <Seugges_small></Seugges_small>
      <Opsshens></Opsshens>
    </>
  );
}
