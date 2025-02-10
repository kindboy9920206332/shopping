"use client";
import { useContext } from "react";
import Input_accont from "./accont";
import Menu_accont from "./menu_accont";
import { context_all } from "@/Components/context";
import Cart from "./cart";
import Wishes from "./wishes";
import Adress from "./adress";

export default function Accont() {
  const { pathname_menu, set_pathname_menu } = useContext(context_all);
  console.log(pathname_menu);
  const pages = [
    {
      component: <Input_accont></Input_accont>,
      title: "accont",
    },
    {
      component: <Cart></Cart>,
      title: "cart",
    },
    {
      component: <Wishes></Wishes>,
      title: "wishing",
    },
    {
      component: <Adress></Adress>,
      title: "addres",
    },
    {
      component: <Input_accont></Input_accont>,
      title: "log out",
    },
  ];
  return (
    <>
      <div className="w-[100%] h-[100vh] flex flex-col mt-[20px]  ">
        <div className="w-[100%] h-[100px] flex justify-center irem-center  ">
          <span className="text-[40px] font-bold font-[Biski]">My Accont</span>
        </div>
        <div className="flex">
          <div className="w-[200px] h-[100%]">
            {" "}
            <Menu_accont></Menu_accont>
          </div>
          <div className="w-[calc(100%-200px)] h-[100%]">
            {pages.map((item) => (
              <div key={item.title}>
                {" "}
                {pathname_menu === item.title ? item.component : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
