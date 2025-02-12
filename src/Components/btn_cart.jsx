"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { context_all } from "./context";

export default function Btn_Cart({ children }) {
  const { list_product_car, set_list_product_car } = useContext(context_all);
  const [products, set_products] = useState([]);
  const object_product = useRef({});
  useEffect(() => {
    async function give_products() {
      const response = await fetch("http://localhost:5500/data_product");
      const data = await response.json();
      set_products(data);
    }
    give_products();
  }, []);

  function Add_to_cart(id) {
    const exist_product = list_product_car.some((item) => item.id == children);
    console.log(exist_product);
    if (!exist_product) {
      const product = products.find((item) => item.id == children);

      set_list_product_car(() => [
        ...list_product_car,
        { ...product, number: 1 },
      ]);
    }
  }

  return (
    <>
      <button
        className="bg-black  hover:bg-[#1a002e] shadow-lg relative bottom-1 md:bottom-0   2xl:w-[200px] xl:w-[180px] lg:text-[16px] lg:w-[150px] lg:h-[35px] md:text-[22px] md:h-[50px] md:w-[250px] w-[130px] rounded-[5px] h-[35px] text-[14px] text-white"
        onClick={() => {
          Add_to_cart(children);
          console.log(children);
        }}
      >
        {" "}
        افزودن به سبد خرید{" "}
      </button>
    </>
  );
}
