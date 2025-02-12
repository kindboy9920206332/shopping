"use client";

import { useContext } from "react";
import { context_all } from "@/Components/context";

export default function Menu_cart() {
  const { step_cart, set_step_cart } = useContext(context_all);
  const menu_cart = [
    { id: 1, text_title: "سبد خرید شما", title: "shopping cart" },
    { id: 2, text_title: " بررسی سفارش ", title: "checkout details" },
    { id: 3, text_title: "تکمیل سفارش ", title: "order complete" },
  ];

  return (
    <>
      <div className=" flex justify-between items-center">
        {menu_cart.map((item) => (
          <div
            key={item.title}
            className={`flex pb-[3px] w-[150px] justify-center ${
              step_cart === item.id ? "border-b-[2px] border-blue-900" : null
            }`}
          >
            <div
              className={`flex justify-center items-center pt-[5px] ${
                item.id < step_cart ? "text-green-500" : null
              }`}
            >
              <p className="text-[18px]">{item.text_title}</p>
            </div>
            <div
              className={` w-[30px] h-[30px] rounded-[50%] bg-black text-white flex justify-center items-center pt-[5px] ml-[5px] ${
                item.id < step_cart ? "bg-green-700" : null
              }`}
            >
              <span className="text-[16px]">{item.id}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
