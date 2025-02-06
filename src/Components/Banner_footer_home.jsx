import { Bentham } from "next/font/google";

export default function Bnner_footer_home() {
  return (
    <>
      <div className="w-[118.7%] h-[383px] left-[-120px] relative text-center">
        <div className="absolute top-[30px] w-[100%] flex flex-col items-center">
          {" "}
          <p className="text-[28px] font-bold"> عضویت در خبرنامه ما </p>
          <p>برای دریافت پیشنهادات ویژه، محصولات جدید و تخفیف‌ها عضو شوید</p>
          <div className="w-[30%] flex justify-between my-6">
            <span>
              <img src="/icon_svgs/email.svg" className="inline-block" alt="" />{" "}
              <span>HomelandShop@gmail.com</span>
            </span>
            <button className="border-[4px] hover:border-[2px] border-gray-800 rounded-[5px]  ">
              عضویت
            </button>
          </div>
        </div>{" "}
        <img
          src="/img_banner/img_banner_footer_hme.jpg"
          alt=""
          className=" w-[100%]"
        />
      </div>
    </>
  );
}
