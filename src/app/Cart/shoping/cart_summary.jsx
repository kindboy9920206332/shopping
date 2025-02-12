"use clinet";
import { context_all } from "@/Components/context";
import { useContext, useRef, useState } from "react";
export default function Cart_summary() {
  const price_all = useRef(0);
  const price_discount_all = useRef(0);
  const [price_summary, set_price_summary] = useState(0);
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
    price_all.current = Number(
      price_all.current + price_summary
    ).toLocaleString("fa-IR");
  }

  calucation_price_all();

  const { step_cart, set_step_cart } = useContext(context_all);
  const [type_summary, set_type_summary] = useState();
  const choice_type_summary = useRef();
  const types_summary = [
    { id: 1, type: "free", text_title: "ارسال رایگان", price: 0 },
    { id: 2, type: "express", text_title: "ارسال سریع", price: 150000 },
    { id: 3, type: "pick up", text_title: "دریافت حضوری", price: 0 },
  ];
  return (
    <>
      <div className=" w-[300px] border-[2px] border-blue-950 rounded-md p-[5px]">
        <div className="w-[100%] text-center">
          <span className="text-[18px] font-bold">نوع دریافت سفارشات</span>
        </div>
        <div className=" flex flex-col gap-2 justify-start ">
          {types_summary.map((item) => (
            <div
              key={item.title}
              className={` w-[100%] flex justify-end items-center gap-[5px] h-[40px] border-[1px] border-gray-800 px-[10px] text-right relative rounded-sm ${
                type_summary === item.type ? "bg-gray-200" : null
              }`}
            >
              <div> {item.text_title}</div>
              <div className="pt-[10px]">
                <input
                  type="radio"
                  onClick={() => {
                    set_type_summary(item.type);
                    set_price_summary(item.price);
                  }}
                  //   value={item.type}
                  checked={type_summary === item.type}
                />
              </div>{" "}
              <div className="absolute left-2">
                <p className=" text-[14px] text-gray-500">
                  {" "}
                  هزینه :
                  <span className="text-[16px] text-black">
                    {item.price.toLocaleString("fa-IR")}
                  </span>
                  <span> تومان </span>
                </p>
              </div>{" "}
            </div>
          ))}
        </div>
        <div className="text-right my-3">
          {" "}
          <span>قیمت پرداختی : {price_all.current}</span>
        </div>
        <div className="text-right my-3">
          <span> سود شما از این خرید : {price_discount_all.current}</span>
        </div>
        <div className="text-right my-3">
          <span>
            {" "}
            قیمت ارسال محصولات: {price_summary.toLocaleString("fa-IR")}
          </span>
        </div>
        <div className="w-[100%] flex justify-center items-center">
          <button
            onClick={() => set_step_cart(step_cart + 1)}
            className=" w-[200px] h-[40px] bg-black text-white rounded-lg"
          >
            {" "}
            تکمیل سفارشات{" "}
          </button>
        </div>
      </div>
    </>
  );
}
