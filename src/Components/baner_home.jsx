import Link from "next/link";

export default function Baner_Home() {
  return (
    <>
      <div className="flex items-center relative  left-[-130px]  w-[119.5%] w-100  justify-end h-[400px] bg-gray-200 ">
        <div className=" basis-1/2 h-[100%] text-right px-[25px] relative top-[80px]">
          <p className=" my-[10px] text-blue-500 font-bold text-[26px]">
            {" "}
            تخفیف تا %35{" "}
          </p>
          <p className=" my-[10px] font-bold text-[24px] text-black">
            {" "}
            !صد ها قیمت جدید و پایین تر{" "}
          </p>
          <p className=" my-[20px] text-gray-700 ">
            ! اکنون باز سازی شیک اتاق خانه شما از هر روز به صرفه تر است
          </p>
          <Link href={"/"} className=" underline text-gray-700">
            {" "}
            دیدن صفحه{" "}
            <img src="/icon_svgs/arrow-right.svg" className="inline " />{" "}
          </Link>
        </div>{" "}
        <div className=" basis-1/2 h-[100%]">
          <img
            src="/img_banner/img_banner.jpg"
            className=" h-[100%] w-[100%] "
          />
        </div>
      </div>
      <br />
    </>
  );
}
