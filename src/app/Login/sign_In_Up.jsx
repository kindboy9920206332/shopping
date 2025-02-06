import Sign_in from "./sign_In";
export default function SignIn_Up() {
  return (
    <>
      <div className="w-[100%] h-[100vh] flex justify-center items-center ">
        <div className="w-[1200px] h-[700px] flex justify-center items-center rounded-[10px] shadow-[0px_0px_25px_0px_gray] ">
          <div className="w-[100%] h-[100%] basis-1/2 flex items-center justify-center  ">
            <div className="w-[100%] h-[100%] ">
              <span
                className="font-bold font-[Biski] text-[24px]  absolute top-[30px] left-[379px] "
                style={{ textShadow: "1px 1px 7px black" }}
              >
                Homeland
              </span>
              <img
                src="/icon_img_Login/chair.jpg"
                className="w-[100%] h-[100%] rounded-tl-[10px] rounded-bl-[10px]  "
                alt=""
              />
            </div>
          </div>{" "}
          <div className=" basis-1/2 flex items-center justify-center ">
            <Sign_in></Sign_in>
          </div>
        </div>
      </div>
    </>
  );
}
