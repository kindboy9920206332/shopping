"use client";
import { context_all } from "@/Components/context";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect, useReducer, useState } from "react";

export default function Input_accont() {
  const serch_params = useSearchParams();
  const usename_user = serch_params.get("usename");
  const password_user = serch_params.get("password");
  const [see_password, set_see_password] = useState(false); // For showing password
  const { data_user, users } = useContext(context_all);

  const object_inpus_up = [
    { id: 2, type: "text", text_title: "نام خانوادگی", title: "lastname" },
    { id: 1, type: "text", text_title: "نام ", title: "name" },
    { id: 4, type: "text", text_title: "رمز عبور", title: "password" },
    { id: 3, type: "text", text_title: "نام کاربردی ", title: "usename" },
    { id: 6, type: "text", text_title: "آدرس", title: "adress" },
    { id: 5, type: "tel", text_title: "شماره تلفن ", title: "phon" },
    { id: 8, type: "email", text_title: "ایمیل", title: "email" },
    { id: 7, type: "text", text_title: "کد ملی", title: "nationality_number" },
  ];

  function reducer(state, action) {
    switch (action.type) {
      case "update_all":
        return { ...state, ...action.payload };
      case "usename":
        return { ...state, usename: action.usename };
      case "name":
        return { ...state, name: action.name };
      case "password":
        return { ...state, password: action.password };
      case "phon":
        return { ...state, phon: action.phon };
      case "lastname":
        return { ...state, lastname: action.lastname };
      case "adress":
        return { ...state, adress: action.adress };
      case "nationality_number":
        return { ...state, nationality_number: action.nationality_number };
      case "email":
        return { ...state, email: action.email };
      default:
        return state;
    }
  }

  function update_data() {
    fetch(`http://localhost:5300/Users/${data_user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datauser),
    });
  }

  const first_data = {
    id: "",
    adress: "",
    name: "",
    lastname: "",
    password: "",
    usename: "",
    phon: "",
    nationality_number: "",
    email: "",
  };

  const [datauser, update_datauser] = useReducer(
    reducer,
    data_user || first_data
  ); // Reducer

  useEffect(() => {
    if (data_user && Object.keys(data_user).length > 0) {
      update_datauser({ type: "update_all", payload: data_user });
    }
  }, [data_user]);

  return (
    <div className="w-[100%] h-[100%] flex items-center justify-center">
      <div className="w-[620px] h-[100%] flex flex-wrap items-center justify-center gap-[10px]">
        {object_inpus_up.map((item) => (
          <div
            key={item.title}
            className="w-[300px] h-[80px] flex flex-col justify-center items-center text-right"
          >
            <label htmlFor={item.id} className="w-[100%] mb-[5px]">
              : {item.text_title}
            </label>

            <input
              id={item.id}
              type={item.type}
              value={datauser[item.title] || ""}
              placeholder={item.text_title}
              className="outline-none border-[1px] pr-2 text-right border-gray-800 w-[300px] h-[48px] rounded-2xl bg-slate-100 focus:scale-[1.1]"
              onChange={(event) => {
                update_datauser({
                  type: item.title,
                  [item.title]: event.target.value,
                });
              }}
            />
          </div>
        ))}
        <button
          onClick={() => {
            update_data();
          }}
          className="text-[18px] mt-[10px] bg-blue-400 w-[200px] h-[40px] text-white rounded-2xl hover:bg-blue-800 transition-colors delay-150 duration-150"
        >
          ذخیره کردن
        </button>
      </div>
    </div>
  );
}
