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
        <span className="absolute font-bold text-[30px] top-[10px]">
          {" "}
          کالا های جدید
        </span>
        <span className="absolute cursor-pointer bottom-[5px] right-[8px] underline text-[18px] font-light ">
          محصولات بیشتر{" "}
          <img src="/icon_svgs/arrow-right.svg" className="inline" alt="" />
        </span>
      </div>
      <div className="w-[100%] mb-3 relative  ">
        {/* slider */}
        <Slider_small>
          {data.map((item) => (
            <div className="w-[230px] " key={item.title}>
              <div
                key={item.title}
                className="w-[100%] h-[260px] relative flex bg-[#F3F5F7] justify-center items-start flex-col shadow-[1px_1px_7px_0px_gray] rounded-lg"
              >
                {/* text icon heart discount */}
                <div className="absolute w-[100%] flex justify-around items-center top-2 gap-[106px]">
                  <div className="flex flex-col w-[30px] gap-[10px]">
                    <span className="w-[40px] text-center rounded-[5px] h-[20px] bg-white font-bold">
                      {new_titr}
                    </span>
                    <span className="w-[40px] text-center h-[20px] rounded-[5px] bg-[#38CB89] text-white font-bold">
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
                  <button className="bg-black border-b-4 border text-white w-[200px] h-[40px] rounded-[5px]">
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
                  <span> نام محصول : {item.text_tilte}</span>
                </div>
                <div>
                  <span
                    className="font-bold text-green-600 text-[18px]"
                    style={{ textShadow: "0px 0px 5px #16a33a " }}
                  >
                    قیمت : {item.price_with_discount} {toman} ,
                  </span>{" "}
                  <span className="line-through text-gray-600 mr-2 text-[14px] font-light">
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
