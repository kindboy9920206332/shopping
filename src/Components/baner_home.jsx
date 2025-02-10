import Link from "next/link";
export default function Baner_Home() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          position: "relative",
          left: "calc(1 / 2*(-101.1vw + 100%))",
        }}
        className="flex  flex-col-reverse  lg:flex-row  items-center  justify-cenetr md:h-[850px]  h-[600px] lg:h-[500px] bg-gray-200 "
      >
        <div className=" basis-1/2 h-[100%] text-right px-[25px] relative top-[10px] lg:top-[80px]">
          <p className=" my-[10px] text-blue-500 font-bold text-[26px] lg:text-[32px]">
            {" "}
            تخفیف تا %35{" "}
          </p>
          <p className=" my-[10px] font-bold text-[24px] lg:text-[30px] text-black">
            {" "}
            !صد ها قیمت جدید و پایین تر{" "}
          </p>
          <p className=" my-[20px] text-gray-700 lg:text-[18px] ">
            ! اکنون باز سازی شیک اتاق خانه شما از هر روز به صرفه تر است
          </p>
          <Link href={"/"} className=" underline text-gray-700 lg:text-[18px]">
            {" "}
            دیدن صفحه{" "}
            <img src="/icon_svgs/arrow-right.svg" className="inline " />{" "}
          </Link>
        </div>{" "}
        <div className="basis-1/2 lg:h-[100%] w-[100%]">
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
