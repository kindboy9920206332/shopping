export default function Opsshens() {
  const opshens = [
    {
      icon: "/icon_svgs/fast delivery.svg",
      title: "Free Shipping",
      text_title: "حمل نقل رایگان",
      describtion: " !خریدی راحت و بدون نگرانی با حمل و نقل رایگان",
    },
    {
      icon: "/icon_svgs/money.svg",
      title: "Money-back",
      text_title: "بازگشت وجه",
      describtion: "!خریدی بدون ریسک با ضمانت بازگشت وجه",
    },
    {
      icon: "/icon_svgs/lock 01.svg",
      title: "Secure Payments",
      text_title: "پرداخت امن",
      describtion: "پرداخت امن و با ذخیره اطلاعات و با ایمینی کامل",
    },
    {
      icon: "/icon_svgs/call.svg",
      title: "24/7 Support",
      text_title: "پشتیبان 24 ساعته",
      describtion: "حمایت 24 ساعته در 7 روز هفته",
    },
  ];
  return (
    <>
      {" "}
      <div className="w-[100%] h-[200px] flex gap-3 justify-center items-center">
        {opshens.map((item) => (
          <div
            key={item.title}
            className="text-right bg-[#F3F5F7] w-[23%] h-[100%] relative flex  justify-center px-3 flex-col"
          >
            <div>
              <span className="text-[20px] font-bold ">{item.text_title}</span>{" "}
              <img src={item.icon} className="inline" />{" "}
            </div>
            <div className="mt-[10px] text-[#6C7275] text-[14px]">
              <span>{item.describtion}</span>
            </div>
          </div>
        ))}{" "}
      </div>
      <br />
    </>
  );
}
