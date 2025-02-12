"use client";
import { useContext, useEffect, useRef } from "react";
import { context_all } from "./context";
import { useRouter } from "next/navigation";
import Product_cart from "./product_cart";
export default function Cart_Home() {
  const price_all = useRef(0);
  const price_discount_all = useRef(0);
  const rout = useRouter();
  const { list_product_car, set_list_product_car } = useContext(context_all);


  function calucation_price_all() {
    price_all.current = 0;
    price_discount_all.current = 0;
    list_product_car.forEach((item) => {
      price_all.current +=
        Number(item.price_with_discount) * Number(item.number);
      price_discount_all.current +=
        [Number(item.price_main) - Number(item.price_with_discount)] *
        Number(item.number);
    });
    price_discount_all.current =
      price_discount_all.current.toLocaleString("fa-IR");
    price_all.current = price_all.current.toLocaleString("fa-IR");
  }

  calucation_price_all();
  return (
    <>
      <div className=" w-[400px]  bg-[white]  rounded-[5px]">
        <div className="w-[100%]  flex flex-col text-right justify-start items-center bg-[white]">
          {list_product_car.map((item) => (
            <div
              key={item.title}
              className=" flex justify-start items-center w-[100%] h-[120px] gap-[20px] p-[10px] border-b-[1px] border-gray-300 relative  "
            >
              {" "}
              <Product_cart>{item}</Product_cart>
            </div>
          ))}
          <div className="mt-[20px]">
            <p>
              قیمت پرداختی شما :{" "}
              <span className="text-[18px] font-bold text-black ">
                {price_all.current} تومان
              </span>
            </p>
          </div>
          <div>
            <p>
              سود شما از این خرید :{" "}
              <span className="text-[18px] font-bold text-black ">
                {price_discount_all.current} تومان
              </span>
            </p>
          </div>{" "}
        </div>
        <div className="w-[100%] flex justify-center items-center h-[41px] mt-[30px]">
          <button
            className="text-white w-[150px] rounded-lg h-[35px] bg-black "
            onClick={() => {
              rout.push("/Cart");
            }}
          >
            حساب کتاب کردن
          </button>
        </div>
      </div>
    </>
  );
}
