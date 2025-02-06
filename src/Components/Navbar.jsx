"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
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
  return (
    <>
      <nav className="shadow flex py-4 z-[10]  ">
        {/*  logo */}
        <Link href={"/"} className="flex justify-center items-center basis-1/3">
          <span className="font-bold font-[Biski]  text-[24px]">Homeland</span>
        </Link>
        {/* titles */}
        <div className="flex justify-center items-center basis-1/3">
          {navLinks.map((item) => (
            <Link className="ml-4" key={item.title} href={item.href}>
              <span
                className={`${
                  pathname === item.href ? "text-blue-500" : ""
                } text-[16px] font-bold`}
              >
                {item.text}
              </span>
            </Link>
          ))}
        </div>

        {/* icons */}
        <div className="flex  justify-center items-center basis-1/3">
          {icons.map((item) => (
            <Link href={item.href} className="ml-2" key={item.title}>
              <img src={item.icon} className="cursor-pointer" />
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}
