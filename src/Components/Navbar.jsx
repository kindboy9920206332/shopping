"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Cart_Home from "./cart_home";
import { context_all } from "./context";

export default function Navbar() {
  const { list_product_car } = useContext(context_all);
  const [toggling_cart, set_toggling_cart] = useState(false);
  const pathname = usePathname();
  const navLinks = [
    {
      href: "/information us",
      title: "information",
      text: "درباره ما",
    },
    {
      href: "/store",
      title: "Store",
      text: "فروشگاه",
    },
    {
      href: "/",
      title: "Home",
      text: "خانه",
    },
  ];
  const icons = [
    { icon: "/icon_svgs/search.svg", href: "/", title: "search" },
    { icon: "/icon_svgs/user.svg", href: "Login", title: "user" },
    { icon: "/icon_svgs/box_buy.svg", href: "/", title: "box_buy" },
  ];

  // useEffect(() => {
  //   function click_down() {
  //     set_toggling_cart(!toggling_cart);
  //   }

  //   document.addEventListener("click", click_down);
  //   return () => {
  //     document.removeEventListener("click", click_down);
  //   };
  // });
  return (
    <>
      <nav className="shadow flex py-4 z-20 w-[100%] ">
        {/*  logo */}
        <div className="w-[200px] flex justify-center items-center basis-1/3">
          {" "}
          <img src="/icon_svgs/menu.svg" className="inline md:hidden " />
          <Link href={"/"} className="inline text-center items-center  ">
            <span className="font-bold font-[Biski] text-[18px] lg:text-[24px]">
              Homeland
            </span>
          </Link>
        </div>

        {/* titles */}
        <div className="flex justify-center items-center basis-1/3">
          {navLinks.map((item) => (
            <Link className="ml-4" key={item.title} href={item.href}>
              <span
                className={`${
                  pathname === item.href ? "text-blue-500" : ""
                } text-[16px] font-bold  hidden md:block `}
              >
                {item.text}
              </span>
            </Link>
          ))}
        </div>

        {/* icons */}
        <div className="flex  justify-center items-center basis-1/3">
          {icons.map((item) => (
            <div
              className={`${
                item.title === "user" || item.title === "search"
                  ? "hidden md:block "
                  : ""
              }  m-2`}
              key={item.title}
            >
              <div className=" relative ">
                {item.title === "box_buy" ? (
                  <div className=" w-[25px] h-[25px] rounded-[50%] bg-black absolute left-[25px] flex justify-center items-center pt-1 ">
                    <span className="text-white">
                      {list_product_car.length}
                    </span>
                  </div>
                ) : null}
                <img
                  src={item.icon}
                  className="cursor-pointer"
                  onClick={() => {
                    if (item.title === "box_buy") {
                      set_toggling_cart(() => !toggling_cart);
                    }
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </nav>
      {toggling_cart ? (
        <div className="absolute right-0 top-0 z-10  bg-white">
          <button
            className=" w-[100%]  mb-[30px] "
            onClick={() => set_toggling_cart(() => !toggling_cart)}
          >
            <img
              src="/icon_svgs/cross_red.svg"
              className=" absolute right-0 top-1 w-[35px]"
              alt=""
            />
          </button>
          <Cart_Home></Cart_Home>
        </div>
      ) : null}
    </>
  );
}
