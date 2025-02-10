"use client";
import { useEffect, useState } from "react";
import Love_heart from "./love_heart";
import Slider_small from "./slider_small";
import Star_Point_avg from "./StarePoint-avg";

export default function Seugges_small() {
  const new_titr = "New";
  const toman = "تومان";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:5500/data_product");
        if (!response.ok) {
          throw new Error("مشکلی در دریافت داده‌ها پیش آمد");
        }
        const databd = await response.json();
        console.log(databd);
        setData(() => databd);
      } catch (error) {
        console.error("خطای fetch:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      {/* baner more roduct and sugess product */}
      <div className="w-[100%] h-[80px] relative my-3 ">
        <span className="absolute font-bold text-[22px] md:text-[30px]  top-[10px]">
          {" "}
          کالا های جدید
        </span>
        <span className="absolute cursor-pointer bottom-[5px] right-[8px] underline text-[16px] md:text-[20px] font-light ">
          محصولات بیشتر{" "}
          <img src="/icon_svgs/arrow-right.svg" className="inline" alt="" />
        </span>
      </div>
      <div className="w-[100%] mb-3 relative  ">
        {/* slider */}
        <Slider_small>
          {data.map((item) => (
            <div
              className="2xl:w-[240px] xl:w-[200px] lg:w-[170px] md:w-[320px] w-[150px] "
              key={item.title}
            >
              <div
                key={item.title}
                className="w-[100%] md:h-[320px] lg:h-[260px] relative flex bg-[#F3F5F7] justify-center items-start flex-col shadow-[1px_1px_7px_0px_gray] rounded-lg"
              >
                {/* text icon heart discount */}
                <div className="absolute w-[100%] flex justify-around items-center top-2 lg:gap-[41px] xl:gap-[88px] 2xl:gap-[100px] md:gap-[171px] gap-[52px]">
                  <div className="flex flex-col w-[30px] gap-[10px]">
                    <span className="md:w-[60px]  md:flex md:justify-center md:items-center md:text-[22px] w-[40px] lg:w-[50px] lg:text-[18px] xl:text-[16px] text-center rounded-[5px]  lg:h-[25px]  md:h-[35px] h-[20px] bg-white font-bold">
                      {new_titr}
                    </span>
                    <span className="md:w-[60px]  md:flex md:justify-center md:items-center md:text-[22px]  w-[40px] lg:w-[50px] lg:text-[18px] xl:text-[16px] text-center lg:h-[25px] md:h-[35px] h-[20px] rounded-[5px] bg-[#38CB89] text-white font-bold">
                      {item.discount}
                    </span>
                  </div>
                  <div>
                    <Love_heart>{item.id}</Love_heart>
                  </div>
                </div>
                {/* img product */}
                <img src={item.img} className="w-[100%] h-[200px]" />
                <div className="w-[100%] flex justify-center items-center">
                  {/* btn */}
                  <button className="bg-black  hover:bg-[#1a002e] shadow-lg relative bottom-1 md:bottom-0   2xl:w-[200px] xl:w-[180px] lg:text-[16px] lg:w-[150px] lg:h-[35px] md:text-[22px] md:h-[50px] md:w-[250px] w-[130px] rounded-[5px] h-[35px] text-[14px] text-white">
                    {" "}
                    افزودن به سبد خرید{" "}
                  </button>
                </div>
              </div>
              {/* product information */}
              <div className="text-right mt-[9px]">
                <Star_Point_avg>{item.point}</Star_Point_avg>
              </div>
              <div className="my-3 w-[100%] text-right pr-2">
                <div>
                  <span className="md:text-[24px] lg:text-[16px] text-[14px]">
                    {" "}
                    نام محصول : {item.text_tilte}
                  </span>
                </div>
                <div>
                  <span
                    className="font-bold text-green-600 text-[18px] md:text-[24px] lg:text-[16px]"
                    style={{ textShadow: "0px 0px 5px #16a33a " }}
                  >
                    قیمت : {item.price_with_discount} {toman} ,
                  </span>{" "}
                  <span className="line-through text-gray-600 mr-2 text-[14px] font-light md:text-[24px] lg:text-[16px]">
                    {item.price_main} {toman}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider_small>
      </div>
      <br />
    </>
  );
}
