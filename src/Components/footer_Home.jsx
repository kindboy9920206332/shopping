import Link from "next/link";

export default function Footer() {
  const footer_nav = [
    {
      id: 1,
      href: "/information us",
      title: "information",
      text: "درباره ما",
    },
    {
      id: 2,
      href: "/store",
      title: "Store",
      text: "فروشگاه",
    },
    {
      id: 3,
      href: "/",
      title: "Home",
      text: "خانه",
    },
    {
      id: 4,
      href: "/",
      title: "call",
      text: "تماس باما",
    },
  ];

  return (
    <div className=" w-[100%] relative  h-[666px] lg:h-[200px] bg-[#141718] flex justify-end flex-col">
      <div className="border-b-[1px] flex gap-[30px] flex-col lg:flex-row items-center  justify-center lg:justify-around border-white border-dashed h-[70%] lg:basis-1/3 ">
        <div className="flex flex-col lg:flex-row gap-2 text-center">
          <Link href={"/"}>
            <span
              className="font-[Biski] border-b-[2px] lg:border-b-[0px]  lg:border-l-[1px] border-[whitesmoke]  w-[40px] text-[whitesmoke] text-[20px]"
              style={{ textShadow: "0px 0px 7px white" }}
            >
              Homeland
            </span>
          </Link>
          <span className="text-[#d5d4d4] pl-[10px]">
            {" "}
            فروشگاه هدایا و دکوراسیون
          </span>
        </div>{" "}
        <div className=" flex flex-col lg:flex-row gap-11 lg:gap-2  w-[300px] items-center justify-around">
          {" "}
          {footer_nav.map((item) => (
            <Link href={item.href} key={item.title}>
              <span className="text-white text-[16px]">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
      {/* //////////////////////////////////// */}
      <div className=" flex lg:flex-row-reverse flex-col  text-center items-center justify-start lg:justify-around gap-[20px] border-dashed h-[30%] lg:basis-1/3 mt-4 ">
        {" "}
        <div>
          <img
            className=" mx-2 inline-block"
            src="/icon_svgs/instagram.svg"
            alt=""
          />
          <img
            className=" mx-2 inline-block"
            src="/icon_svgs/facebook.svg"
            alt=""
          />{" "}
          <img
            className=" mx-2 inline-block"
            src="/icon_svgs/youtube.svg"
            alt=""
          />
        </div>{" "}
        <div className=" text-[whitesmoke] ">
          <div className=" flex flex-col lg:flex-row gap-[24px] lg:gap-3">
            {" "}
            <span
              className="font-[Biski] text-[20px] hidden lg:inline-block"
              style={{ textShadow: "0px 0px 7px white" }}
            >
              Homeland
            </span>{" "}
            <div className=" flex w-[300px] justify-evenly items-center">
              <span> سیاست حریم خصوصی</span>
              <span> شرایط استفاده</span>
            </div>
            <span> تمامی حقوق محفوظ است</span>{" "}
          </div>
        </div>{" "}
        {/* <span className="text-white flex">mohammadreza</span> */}
      </div>
    </div>
  );
}
