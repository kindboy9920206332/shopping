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
    <div className="w-[100%] relative  h-[200px] bg-[#141718] flex justify-end flex-col">
      <div className="border-b-[1px] flex items-center justify-around border-white border-dashed basis-1/3 ">
        <div>
          <Link
            href={"/"}
            className="font-[Biski] border-l-[1px] border-[whitesmoke]  w-[40px] text-[whitesmoke] text-[20px]"
            style={{ textShadow: "0px 0px 7px white" }}
          >
            Homeland
          </Link>
          <span className="text-[#d5d4d4] pl-[10px]">
            {" "}
            فروشگاه هدایا و دکوراسیون
          </span>
        </div>{" "}
        <div className=" flex w-[300px] items-center justify-around">
          {" "}
          {footer_nav.map((item) => (
            <Link href={item.href} key={item.title}>
              <span className="text-white text-[16px]">{item.text}</span>
            </Link>
          ))}
        </div>
      </div>
      ////////////////////////////////////
      <div className=" flex items-center justify-around border-dashed basis-1/3 ">
        {" "}
        <div className=" text-[whitesmoke]">
          <p>
            {" "}
            <span className="font-[Biski] text-[20px]">Homeland</span> سیاست
            حریم خصوصی ، شرایط استفاده ، تمامی حقوق محفوظ است
          </p>
        </div>{" "}
        {/* <span className="text-white flex">mohammadreza</span> */}
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
        </div>
      </div>
    </div>
  );
}
