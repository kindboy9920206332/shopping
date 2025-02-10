export default function Sugess_big() {
  const text_show = {
    text: "Shop Now",
    img: (
      <img
        src="/icon_svgs/arrow-right.svg"
        className=" inline w-[21px] lg:w-auto "
      />
    ),
  };
  return (
    <>
      {/* sugsess */}
      <div className="flex flex-col  lg:flex-row gap-2 lg:w-[85%] w-[100%] lg:h-[635px] h-[840px] mx-auto">
        <div className="basis-1/2 bg-[#F3F5F7] relative ">
          <span className="absolute  font-[Biski] top-[41px]  left-[22px] text-[20px] lg:text-[28px] font-bold cursor-pointer">
            Living room
          </span>
          <span className="absolute font-[Dana] top-[80px] underline left-[22px] text-[15px] lg:text-[18px] cursor-pointer">
            {text_show.text}
            {text_show.img}
          </span>

          {/* <img
            className="h-[100%] w-[100%] cursor-pointer lg:block hidden"
            src="/img_sugess/living room.png"
            alt=""
          />
          <img
            className="h-[100%] w-[100%] cursor-pointer  lg:hidden block  "
            src="/img_home_small/chair.jpg"
            alt=""
          /> */}
        </div>
        <div className="basis-1/2 flex flex-col  justify-start gap-2">
          <div className="basis-1/2 bg-[#F3F5F7] relative ">
            <span className="absolute font-[Biski] bottom-[41px] left-[22px] text-[20px] lg:text-[28px] font-bold cursor-pointer">
              Bedroom
            </span>
            <span className="absolute font-[Dana]  bottom-[19px] underline left lg:left-[22px] text-[15px] lg:text-[18px] cursor-pointer ">
              {text_show.text}
              {text_show.img}
            </span>

            {/* <img
              className="h-[100%] w-[100%] cursor-pointer  lg:block hidden"
              src="/img_sugess/bedroom.png "
              alt=""
            />
            <img
              className="h-[100%] w-[100%] cursor-pointer  lg:hidden block"
              src="/img_home_small/draver.jpg "
              alt=""
            /> */}
          </div>
          <div className="basis-1/2 bg-[#F3F5F7] relative ">
            {" "}
            <span className="absolute font-[Biski] bottom-[41px]  left-[22px] text-[20px] lg:text-[28px] font-bold cursor-pointer">
              Kitchen
            </span>
            <span className="absolute font-[Dana] bottom-[19px] underline left-[22px] text-[15px] lg:text-[18px] cursor-pointer">
              {text_show.text}
              {text_show.img}
            </span>
            {/* <img
              className="h-[100%] w-[100%] cursor-pointer lg:block hidden "
              src="/img_sugess/kitchen.png"
              alt=""
            />
            <img
              className="h-[100%] w-[100%] cursor-pointer lg:hidden block"
              src="/img_home_small/cooking.jpg"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
