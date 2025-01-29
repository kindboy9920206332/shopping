export default function Sugess_big() {
  const text_show = {
    text: "Shop Now",
    img: <img src="/icon_svgs/arrow-right.svg" className=" inline " />,
  };
  return (
    <>
      {/* sugsess */}
      <div className="flex gap-2 w-[85%] h-[635px] mx-auto">
        <div className="basis-1/2 bg-[#F3F5F7] relative">
          <span className="absolute  font-[Biski] top-[41px]  left-[22px] text-[28px] font-bold cursor-pointer">
            Living room
          </span>
          <span className="absolute font-[Dana] top-[80px] underline left-[22px] text-[18px] cursor-pointer">
            {text_show.text}
            {text_show.img}
          </span>

          <img
            className="h-[100%] w-[100%] cursor-pointer"
            src="/img_sugess/living room.png"
            alt=""
          />
        </div>
        <div className="basis-1/2 flex flex-col  justify-start gap-2">
          <div className="basis-1/2 bg-[#F3F5F7] relative">
            <span className="absolute font-[Biski] bottom-[41px] left-[22px] text-[28px] font-bold cursor-pointer">
              Bedroom
            </span>
            <span className="absolute font-[Dana] bottom-[19px] underline left-[22px] text-[18px] cursor-pointer ">
              {text_show.text}
              {text_show.img}
            </span>

            <img
              className="h-[100%] w-[100%] cursor-pointer"
              src="/img_sugess/bedroom.png "
              alt=""
            />
          </div>
          <div className="basis-1/2 bg-[#F3F5F7] relative">
            {" "}
            <span className="absolute font-[Biski] bottom-[41px]  left-[22px] text-[28px] font-bold cursor-pointer">
              Kitchen
            </span>
            <span className="absolute font-[Dana] bottom-[19px] underline left-[22px] text-[18px] cursor-pointer">
              {text_show.text} {text_show.img}
            </span>
            <img
              className="h-[100%] w-[100%] cursor-pointer"
              src="/img_sugess/kitchen.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
