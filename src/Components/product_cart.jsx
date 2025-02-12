"use client";

import { useContext, useRef } from "react";
import { context_all } from "./context";
import Pluss_Dash_Btn from "./pluss_dash_btn";

export default function Product_cart({ children }) {
  const { list_product_car, set_list_product_car } = useContext(context_all);

  function remove_product_cart(id, number = 1) {
    set_list_product_car((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, number: 0 } : item))
        .filter((item) => item.number > 0)
    );
  }

  return (
    <>
      <div className="h-[110px] w-[80px]">
        <img src={children.img} className="h-[100%] rounded-md" />
      </div>
      <div className=" flex flex-col justify-between gap-[10px]">
        <div className="w-[100%] text-center">
          <p className="text-[18px]">{children.text_title}</p>
          <p className="text-gray-400">color:blue</p>
        </div>
        <Pluss_Dash_Btn>{children}</Pluss_Dash_Btn>
      </div>
      <div className="absolute right-2 top-2 w-[150px] h-[90px] flex flex-col justify-between items-center text-right">
        <button onClick={() => remove_product_cart(children.id)}>
          {" "}
          <img src="/icon_svgs/cross_gray.svg" className=" w-[35px] " />
        </button>{" "}
        <p className="text-[14px] text-gray-600 ">
          قیمت :{" "}
          <span className="font-bold text-[16px] text-black">
            {children.price_with_discount}
          </span>
          تومان
        </p>{" "}
      </div>
    </>
  );
}
