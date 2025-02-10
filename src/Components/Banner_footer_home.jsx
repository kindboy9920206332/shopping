import { Bentham } from "next/font/google";

export default function Bnner_footer_home() {
  return (
    <>
      <div
        style={{
          width: "100vw",
          position: "relative",
          left: "calc(1 / 2*(-101.1vw + 100%))",
        }}
        className="w-[100%] h-[383px]  bg-gray-200 relative text-center   flex items-center justify-center "
      >
        <div className="relative lg:absolute lg:z-10 w-[300px] flex flex-col items-center">
          {" "}
          <p className="text-[24px] font-bold"> عضویت در خبرنامه ما </p>
          <p>برای دریافت پیشنهادات ویژه، محصولات جدید و تخفیف‌ها عضو شوید</p>
          <div className="w-[100%] lg:w-[350px] flex justify-between my-6">
            <span>
              <img
                src="/icon_svgs/email.svg"
                className="inline-block "
                alt=""
              />{" "}
              <span>HomelandShop@gmail.com</span>
            </span>
            <button className="border-[4px] hover:border-[2px] active:border-[2px]  border-gray-800 rounded-[5px]">
              عضویت
            </button>
          </div>
        </div>{" "}
        <img
          src="/img_banner/img_banner_footer_hme.jpg"
          alt=""
          className="w-[100%] hidden lg:block"
        />
      </div>
    </>
  );
}
