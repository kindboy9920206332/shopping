"use client";
import { useEffect, useState } from "react";
import Love_heart from "./love_heart";
import Slider_small from "./slider_small";
import Star_Point_avg from "./StarePoint-avg";
import Link from "next/link";

export default function Articles() {
  const new_titr = "New";
  const toman = "تومان";
  const [data_article, setData_article] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("http://localhost:5400/articls");
        if (!response.ok) {
          throw new Error("مشکلی در دریافت داده‌ها پیش آمد");
        }
        const databd = await response.json();
        console.log(databd);
        setData_article(() => databd);
      } catch (error) {
        console.error("خطای fetch:", error);
      }
    };

    getData();
  }, []);

  return (
    <>
      {/* banner more roduct and sugess product */}
      <div className="w-[100%] h-[70px] relative my-3 ">
        <span
          className="relative lg:absolute lg:left-0 font-bold text-[30px] lg:text-[32px] flex justify-center items-center
        "
        >
          {" "}
          مقالات
        </span>
        <span className="absolute hidden lg:block cursor-pointer bottom-[5px] right-[8px] underline text-[18px] font-light ">
          مقالات بیشتر{" "}
          <img src="/icon_svgs/arrow-right.svg" className="inline" alt="" />
        </span>
      </div>
      <div className="w-[100%] mb-3   text-right ">
        {/* suggess */}
        <div className="w-[100%] h-[100%] flex lg:flex-row flex-col  justify-between items-center">
          {data_article.map((item) =>
            item.id <= 3 ? (
              <Link
                href={"/"}
                key={item.id}
                className="w-[90%] lg:w-[30%] h-[100%]"
              >
                <div className="w-[100%] h-[100%] relative flex  justify-center items-center ">
                  <img
                    src={item.img_title}
                    className="w-[100%] h-[100%] rounded-[10px] mb-3"
                    alt={item.title}
                  />
                </div>
                <div className="h-[80px] lg:my-[15px] relative flex-col">
                  <p className="text-[16px] lg:text-[18px] font-bold">
                    {item.title}
                  </p>
                  <div className=" w-[100%]  text-left">
                    <span className="  text-[14px]  text-gray-600 relative">
                      {item.history}
                    </span>
                  </div>
                </div>
              </Link>
            ) : null
          )}
        </div>
      </div>{" "}
      <div className="w-[100%] flex justify-center ">
        <button className="w-[150px] h-[40px] rounded-[20px] border-black border-[4px] text-center hover:border-[2px]">
          اطلاعات بیشتر
        </button>
      </div>
      <br />
    </>
  );
}
