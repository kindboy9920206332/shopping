"use client";

import { context_all, useContaxt_user } from "@/Components/context";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Menu_accont() {
  const search_params = useSearchParams();
  const usename_user = search_params.get("usename");
  const password_user = search_params.get("password");
  const { set_data_user, set_users, pathname_menu, set_pathname_menu } =
    useContext(context_all);

  useEffect(() => {
    async function find_user() {
      const response = await fetch("http://localhost:5300/Users");
      const data = await response.json();
      const user = data.find(
        (item) =>
          usename_user === item.usename && password_user === item.password
      );
      set_data_user(() => user);
      set_users(() => data);
    }
    find_user();
  }, [usename_user, password_user]);

  const menu_accont = [
    {
      title: "accont",
      text_title: "پروفایل من",
    },
    {
      title: "cart",
      text_title: "سفارشات من",
    },
    {
      title: "wishing",
      text_title: "علاقه مندی ها ",
    },
    {
      title: "addres",
      text_title: "مدیریت آدرس",
    },
    {
      title: "log out",
      text_title: " خروج",
    },
  ];
  return (
    <>
      <ol className="w-[200px] flex flex-col bg-gray-200 rounded-lg p-[10px]">
        <li className=" w-[100%] h-[130px] flex justify-center items-center">
          <div className="flex  flex-col">
            <div className="w-[80px] h-[80px] rounded-[50%] bg-gray-700"></div>
            <div className="w-[100%] flex justify-center items-center mt-[5px]">
              <span>{usename_user}</span>
            </div>
          </div>
        </li>
        {menu_accont.map((item) => (
          <li
            className={`text-right  border-b-[1px] h-[40px] flex items-center justify-end cursor-pointer ${
              pathname_menu === item.title && pathname_menu !== "log out"
                ? "border-gray-800"
                : ""
            }`}
            key={item.title}
            onClick={() => {
              set_pathname_menu(() => item.title);
            }}
          >
            <span
              className={`text-[18px] text-gray-600 ${
                item.title === "log out" ? "text-red-500" : ""
              }`}
            >
              {item.text_title}
            </span>
          </li>
        ))}
      </ol>
    </>
  );
}
