"use client";
import { useContext, useState } from "react";
import Checkout_details from "./checkout/checkout_details";
import Menu_cart from "./menu_cart";
import Ordre_complete from "./order/Order_complete";
import Shopping_cart from "./shoping/shopping_cart";
import { useRouter } from "next/navigation";
import { context_all } from "@/Components/context";
export default function Cart() {
  const { step_cart, set_step_cart } = useContext(context_all);
  const rout = useRouter();
  const components_menu_cart = [
    {
      id: 1,
      component: <Shopping_cart></Shopping_cart>,
      title: "shopping cart",
    },
    {
      id: 2,
      component: <Checkout_details></Checkout_details>,
      title: "checkout details",
    },
    {
      id: 3,
      component: <Ordre_complete></Ordre_complete>,
      title: "order complete",
    },
  ];

  return (
    <>
      {" "}
      <div className="w-[100%]  flex flex-col items-center">
        <div className="w-[100%] flex justify-center items-center mt-[20px]">
          <span className="text-[36px] font-bold "> تسویه‌ حساب </span>
        </div>
        <div className="w-[70%] h-[100px] mt-[10px]">
          <Menu_cart></Menu_cart>
        </div>
        <div className=" mb-[30px]">
          {components_menu_cart.map((item) =>
            item.id === step_cart ? (
              <div key={item.title} className="">
                {" "}
                {item.component}
              </div>
            ) : null
          )}
        </div>
      </div>
    </>
  );
}
