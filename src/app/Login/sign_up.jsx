"use client";
import { useContext, useEffect, useState } from "react";
import { provide_login } from "./sign_In";
export default function Sign_up() {
  const [see_password, set_see_password] = useState(false); // For showing password

  const object_inpus_in = [
    { id: 1, type: "text", text_title: "نام کاربردی ", title: "usename" },
    { id: 2, type: "text", text_title: "رمز عبور", title: "password" },
  ];
  const object_inpus_up = [
    { id: 1, type: "text", text_title: "نام ", title: "name" },
    { id: 2, type: "text", text_title: "نام خانوادگی", title: "lastname" },
    { id: 3, type: "text", text_title: "نام کاربردی ", title: "usename" },
    { id: 4, type: "text", text_title: "رمز عبور", title: "password" },
    { id: 8, type: "email", text_title: "ایمیل", title: "email" },
  ];

  const {
    give_data_state,
    set_give_data_state,
    create_accont,
    errors,
    click_save_signIn,
    set_click_save_signIn,
  } = useContext(provide_login);
  useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (
    <>
      {create_accont === "sign_in" ? (
        //!------------------------------------------------------------------------------------------------------------ sign in
        <div className=" flex flex-col gap-3">
          {object_inpus_in.map((item) => (
            <div key={item.title} className="relative">
              {/* //?--------------------------------------------------------- btn , for showing password  */}
              {item.title === "password" ? (
                <button
                  className="absolute z-10 top-[10px] left-[10px]"
                  onClick={() => set_see_password(() => !see_password)} // eye tagel for showing password
                >
                  <div>
                    {see_password ? (
                      <img src="/icon_img_Login/eye.svg" />
                    ) : (
                      <img src="/icon_img_Login/eye_off.svg" alt="" />
                    )}
                  </div>
                </button>
              ) : null}{" "}
              {/* //?---------------------------------------------------------input */}
              <input
                type={
                  item.title === "password"
                    ? see_password
                      ? "text"
                      : "password"
                    : item.type
                }
                className="w-[270px] h-[38px] border-b-[1px] border-gray-500 p-[7px] text-right focus:border-b-[2px]   focus:border-gray-800 transition-transform duration-300 delay-200 focus:scale-[1.1] outline-none"
                placeholder={item.text_title}
                value={give_data_state[item.title]}
                onChange={(event) => {
                  set_give_data_state({
                    type: item.title,
                    [item.title]: event.target.value,
                  });
                }}
              />
            </div>
          ))}{" "}
        </div>
      ) : (
        //!--------------------------------------------------------------------------------------------------------------sign up
        <div className=" flex flex-col gap-3">
          {object_inpus_up.map((item) => (
            <div
              key={item.title}
              className="relative w-[100%] h-[40px] my-2 flex flex-col gap-1"
            >
              {/* //?--------------------------------------------------------- btn , for showing password  */}
              {item.title === "password" ? (
                <button
                  className="absolute z-10 top-[10px] left-[10px]"
                  onClick={() => set_see_password(() => !see_password)} // eye tagel for showing password
                >
                  <div>
                    {see_password ? (
                      <img src="/icon_img_Login/eye.svg" />
                    ) : (
                      <img src="/icon_img_Login/eye_off.svg" alt="" />
                    )}
                  </div>
                </button>
              ) : null}{" "}
              {/* //?---------------------------------------------------------input */}
              <input
                type={
                  item.title === "password"
                    ? see_password
                      ? "text"
                      : "password"
                    : item.type
                }
                className="w-[270px] h-[38px] border-b-[1px] border-gray-500 p-[7px] text-right  focus:border-b-[2px]   focus:border-gray-800 transition-transform duration-300 delay-200 focus:scale-[1.1] outline-none"
                placeholder={item.text_title}
                value={give_data_state[item.title]}
                onChange={(event) => {
                  set_give_data_state({
                    type: item.title,
                    [item.title]: event.target.value,
                  });
                }}
              />
              {/* //!----------------------------------------------------------------- massge_ check value */}
              <div className=" text-[12px] text-right text-red-500  my-[2px]">
                {click_save_signIn
                  ? errors.map((item_err) => {
                      return item_err.type === item.title ? (
                        <span
                          className="bg-[#f7bdbd70] rounded-md px-[2px]"
                          key={item_err.type}
                        >
                          {item_err.reason}
                        </span>
                      ) : null;
                    })
                  : null}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
// const object_inpus_up = [
//   { id: 1, type: "text", text_title: "نام ", title: "name" },
//   { id: 2, type: "text", text_title: "نام خانوادگی", title: "lastname" },
//   { id: 3, type: "text", text_title: "نام کاربردی ", title: "username" },
//   { id: 4, type: "text", text_title: "رمز عبور", title: "password" },
//   { id: 5, type: "tel", text_title: "شماره تلفن ", title: "phone" },
//   { id: 6, type: "text", text_title: "آدرس", title: "adress" },
//   { id: 7, type: "text", text_title: "کد ملی", title: "nationality_number" },
//   { id: 8, type: "email", text_title: "ایمیل", title: "email" },
// ];
