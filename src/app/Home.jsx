import Articles from "@/Components/articles";
import Baner_Home from "@/Components/baner_home";
import Bnner_footer_home from "@/Components/Banner_footer_home";
import Opsshens from "@/Components/opshens";
import Seugges_small from "@/Components/segess_small";
import Slider from "@/Components/slider_big";
import Sugess_big from "@/Components/sugess_big";

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
      <div className=" w-[100%] lg:h-[600px]  h-[330px] my-3">
        <Slider>
          {slider_store_img.map((item, index) => (
            <img key={index} src={item} className="w-[100%] h-[100%]" />
          ))}
        </Slider>
      </div>
      <Sugess_big></Sugess_big>
      <Seugges_small></Seugges_small>
      <Opsshens></Opsshens>
      <Baner_Home></Baner_Home>
      <Articles></Articles>
      <Bnner_footer_home></Bnner_footer_home>
      
    </>
  );
}
