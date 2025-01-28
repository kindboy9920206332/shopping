import Slider from "@/Components/slider_big";

export default function Home_Store() {
  const slider_store_img = [
    "/img-slider/sofa.jpg",
    "/img-slider/pot cooking.jpg",
    "/img-slider/refrigerator2.jpg",
    "/img-slider/refrigerator.jpg",
    "/img-slider/vacuumn clearn.jpg",
  ];

  return (
    <>
      {/* slider */}
      <div className=" w-[100%] h-[600px] my-3">
        <Slider>
          {slider_store_img.map((item, index) => (
            <img key={index} src={item} className="w-[100%] h-[100%]" />
          ))}
        </Slider>
      </div>

      {/* <div className="flex flex-col text-right">
        <span className="text-[40px] text-gray-800 font-bold">
          کاملاً منحصربه‌فرد
        </span>
        <span className="text-[40px] text-gray-800 font-bold">کاملاً راحت</span>
      </div> */}

      {/* sugsess */}
      <div className="flex gap-2 w-[80%] h-[500px] mx-auto">
        <div className="basis-1/2 bg-red-500">{/* <Link></Link> */}</div>
        <div className="basis-1/2 flex flex-col  justify-start gap-2">
          <div className="basis-1/2 bg-blue-500">{/* <Link></Link> */}</div>
          <div className="basis-1/2 bg-blue-500">{/* <Link></Link> */}</div>
        </div>
      </div>
    </>
  );
}
