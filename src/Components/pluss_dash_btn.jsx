"use client";

import { useContext } from "react";
import { context_all } from "./context";

export default function Pluss_Dash_Btn({ children }) {
  const { list_product_car, set_list_product_car } = useContext(context_all);

  function Add_to_cart(id, number = 1) {
    set_list_product_car((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, number: item.number + 1 } : item
      )
    );
  }
  function remove_to_cart(id, number = 1) {
    set_list_product_car((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, number: item.number - 1 } : item
        )
        .filter((item) => item.number > 0)
    );
  }

  return (
    <>
      <div className=" flex justify-between  w-[75px] h-[30px] border-[1px] border-gray-500 rounded-md">
        <button
          className="flex justify-center items-center h-[30px] w-[20px]"
          onClick={() => Add_to_cart(children.id, children.number)}
        >
          <img src="/icon_svgs/pluss.svg" alt="" />
        </button>
        <div className=" flex justify-center items-center pt-[2px]">
          <span className=" text-[18px]">{children.number}</span>
        </div>
        <button
          className="flex justify-center items-center h-[30px] w-[20px]"
          onClick={() => remove_to_cart(children.id, children.number)}
        >
          <img src="/icon_svgs/dash.svg" alt="" />
        </button>
      </div>
    </>
  );
}
