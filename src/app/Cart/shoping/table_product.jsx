"use client";

import { context_all } from "@/Components/context";
import Pluss_Dash_Btn from "@/Components/pluss_dash_btn";
import { useContext } from "react";

export default function Table_product() {
  const { list_product_car, set_list_product_car } = useContext(context_all);

  return (
    <>
      <table className="w-[700px]">
        <tr className="border-b-[2px] border-[#2a1164]">
          <th> محصولات </th>
          <th> تعداد محصولات </th>
          <th> قیمت محصول </th>
          <th> قیمت نهایی محصول </th>
        </tr>
        {list_product_car.map((item) => (
          <tr
            className="border-b-[1px] border-[#d2d2d2] h-[120]"
            key={item.title}
          >
            <td className="p-[5px]">
              <div className=" w-[100%] flex justify-center">
                {" "}
                <img src={item.img} className=" h-[110px] rounded-md" />
              </div>
            </td>
            <td>
              <div className=" w-[100%] flex justify-center">
                <Pluss_Dash_Btn>{item}</Pluss_Dash_Btn>
              </div>
            </td>
            <td>
              <div className=" w-[100%] flex justify-center">
                <span>
                  {Number(item.price_with_discount).toLocaleString("fa-IR")}
                </span>
              </div>
            </td>
            <td>
              <div className=" w-[100%] flex justify-center">
                <span>
                  {(
                    Number(item.price_with_discount) * Number(item.number)
                  ).toLocaleString("fa-IR")}
                </span>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}
