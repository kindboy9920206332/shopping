"use client";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import Login_message from "./Logint_massage";
import Sign_up from "./sign_up";
import Link from "next/link";
import Check_value_inputs from "./check_value_inputs";
import { useRouter } from "next/navigation";
import { context_all } from "@/Components/context";
export const provide_login = createContext();
export default function Sign_in() {
  const { users, set_users } = useContext(context_all);
  const [see_passwoer_true, set_see_password_true] = useState(null); // To check if the user login is successful
  const [save_data, set_save_data] = useState({}); // Data entered by the user in the login form
  const [create_accont, set_create_accont] = useState("sign_in"); // Data of all users
  const [click_save_signIn, set_click_save_signIn] = useState(false); // click off  or on
  const data_useref = useRef();
  const rout = useRouter();
  //!------------------------------------------------------------------------------------------------------- User data entered in the sign form
  const give_data = {
    id: "",
    adress: "",
    name: "",
    lastname: "",
    password: "",
    usename: "",
    phon: "",
    nationality_number: "",
    email: "",
    Accept_Terms: false,
  };

  function reducer(state, action) {
    switch (action.type) {
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
      case "id":
        return { ...state, id: action.id };
      case "nationality_number":
        return { ...state, nationality_number: action.nationality_number };
      case "email":
        return { ...state, email: action.email };
      case "Accept_Terms":
        return { ...state, Accept_Terms: action.Accept_Terms };
      default:
        return give_data;
    }
  }
  const [give_data_state, set_give_data_state] = useReducer(reducer, give_data); // Reducer

  //!---------------------------------------------------------------------------------------------------------------------------------- Receive user data
  useEffect(() => {
    async function Receive_usersdata() {
      const response = await fetch("http://localhost:5300/Users");
      const data = await response.json();
      set_users(() => data);
      data_useref.current = data.length + 1;
      console.log(data_useref);
      set_give_data_state({ type: "id", id: data_useref.current });
    }
    Receive_usersdata();
  }, []);
  const errors = Check_value_inputs(give_data_state, users);
  //!--------------------------------------------------------------------------------------------------------------------------------------------- give user data

  function Give_usersdata() {
    fetch("http://localhost:5300/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(save_data),
    });
  }

  //!---------------------------------------------------------------------------------------------------------------------------------- Saving user data in save_data
  useEffect(() => {
    async function step_finally_data() {
      const data = await give_data_state;
      set_save_data(() => data);
    }

    step_finally_data();
  }, [give_data_state]);

  //!---------------------------------------------------------------------------------------------------------------------------------- Sending user information for message verification
  const find_user = () => {
    if (save_data.usename != "" && save_data.password != "") {
      const true_false = users.some(
        (item) =>
          item.usename === save_data.usename &&
          item.password === save_data.password
      );
      set_see_password_true(true_false);
      setTimeout(() => {
        set_see_password_true(null);
        if (true_false) {
          rout.push(
            `/accont_user?usename=${save_data.usename}&password=${save_data.password}`
          );
        }
      }, 1000);
    }
  };

  //!---------------------------------------------------------------------------------------------------------------------------------- UI and UX components
  return (
    <>
      <provide_login.Provider
        value={{
          give_data_state,
          set_give_data_state,
          create_accont,
          errors,
          click_save_signIn,
          set_click_save_signIn,
        }}
      >
        <div className="flex flex-col gap-4 justify-end items-end text-right">
          <div
            onClick={() => {
              set_create_accont(
                create_accont === "sign_in" ? "sign_up" : "sign_in"
              );
            }}
          >
            {create_accont === "sign_in" ? ( //!---------------------------------- title text
              <div>
                <p className="text-[24px] font-bold mb-[20px]">
                  ورود به حساب کاربری
                </p>
                <p className="text-[16px]">
                  <button className="text-[18px] text-blue-700 font-bold ">
                    {" "}
                    حساب کاربری بسازیم
                  </button>{" "}
                  اگه حساب کاربری نداری بریم یک{" "}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-[24px] font-bold mb-[20px]">
                  ایجاد حساب کاربری
                </p>
                <p className="text-[16px]">
                  <button className="text-[20px] text-blue-700 font-bold font-[]">
                    {" "}
                    وارد شیم{" "}
                  </button>{" "}
                  اگه حساب کاربری داری بیا{" "}
                </p>
              </div>
            )}
          </div>
          {/* //!------------------------------------------------------------------------------    inputs */}
          <Sign_up></Sign_up>
          {/* //!---------------------------------------------------------------------------------          forgat text and sign in btnn  */}
          {create_accont === "sign_in" ? (
            <div>
              <div className="w-[100%] text-right mb-[10px]">
                <button className="text-[16px] text-blue-600 font-bold my-3">
                  {" "}
                  فراموشی رمز
                </button>
              </div>
              <button
                onClick={() => {
                  set_give_data_state({ type: "reset" });
                  find_user();
                }}
                className="w-[250px] h-[38px] border-b-[4px] border-b-gray-400 shadow rounded-md bg-gray-800 text-[whitesmoke] hover:border-[2px] font-bold"
              >
                وارد شدن
              </button>{" "}
            </div>
          ) : (
            // !------------------------------------------------------------------accept texrms text and btn sign up
            <div>
              <div className="mb-[20px] text-right flex flex-col mt-[10px] ">
                {" "}
                <div>
                  <span>
                    {" "}
                    <Link href={"/"} className="text-blue-500 font-bold">
                      {" "}
                      قوانین{" "}
                    </Link>
                    هوملند را میپذیرم
                  </span>{" "}
                  <input
                    type="checkbox"
                    className="cursor-pointer"
                    checked={give_data_state.Accept_Terms}
                    onChange={(event) => {
                      set_give_data_state({
                        type: "Accept_Terms",
                        Accept_Terms: event.target.checked,
                      });
                    }}
                  />
                </div>
                {click_save_signIn ? (
                  errors.includes("email") ? (
                    <span className="bg-[#f7bdbd70] rounded-md px-[2px] text-red-500 text-[12px] my-1">
                      !!برای ثبت شدن باید قوانین هملند را بپذیری
                    </span>
                  ) : null
                ) : null}
              </div>{" "}
              <button
                onClick={() => {
                  if (errors.length === 0) {
                    set_give_data_state({
                      type: "Accept_Terms",
                      Accept_Terms: false,
                    });
                    set_click_save_signIn(() => false);
                    set_give_data_state({ type: "reset" }); //!------------------------------------reset inputs
                    setTimeout(() => {
                      Give_usersdata();
                      rout.push(`/accont_user`);
                    }, 1000);
                  } else {
                    set_click_save_signIn(() => true);
                  }
                }}
                className="w-[250px] h-[38px] border-b-[4px] border-b-gray-400 shadow rounded-md bg-gray-800 text-[whitesmoke] hover:border-[2px] font-bold"
              >
                ثبت شدن{" "}
              </button>{" "}
            </div>
          )}
        </div>{" "}
        {/* //!-----------------------------------------------------------------------------sending massage for seccess or unseccess sign in */}
        <div className="absolute top-2 right-7">
          <Login_message seccsses_unseccsses={see_passwoer_true} />
        </div>
      </provide_login.Provider>
    </>
  );
}
