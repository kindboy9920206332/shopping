"use client";
import { useRef } from "react";
export default function Check_value_inputs(inputs, users) {
  const error_input = useRef([]);
  error_input.current = [];
  if (inputs !== null) {
    Object.entries(inputs).forEach(([key, value]) => {
      if (key === "password") {
        const password_repeat = users.some((item) => item.password === value);
        if (value.trim().length < 8) {
          error_input.current.push({
            type: "password",
            reason: " !!نباید تعداد حروف ها کمتر از 8 تا باشه",
          });
        } else if (password_repeat) {
          error_input.current.push({
            type: "password",
            reason: " !این رمز عبور تکراریه",
          });
        }
      } else if (key === "usename") {
        const usename_repeat = users.some((item) => item.usename === value);
        if (usename_repeat) {
          error_input.current.push({
            type: "usename",
            reason: "!!این نام کاربری تکراریه",
          });
        }
      } else if (key === "Accept_Terms" && !value) {
        error_input.current.push("email");
      } else if (
        key === "phone" &&
        (value.trim().length !== 11 || value[0] !== "0" || value[1] !== "9")
      ) {
        error_input.current.push({
          type: "phone",
          reason: "!!شماره تلفن نادرسته",
        });
      } else if (key === "lastname") {
        if (value.trim().length < 3) {
          error_input.current.push({
            type: "lastname",
            reason: "!!لطفا فامیلی خودتونو درست وارد کنید",
          });
        }
      } else if (key === "name") {
        if (value.trim().length < 3) {
          error_input.current.push({
            type: "name",
            reason: "!!لطفا اسمتونو درست وارد کنید",
          });
        }
      } else if (key === "email") {
        if (value.trim() === "") {
          error_input.current.push({
            type: "email",
            reason: "!!ایمیل را وارد کنید",
          });
        } else if (!/^[a-zA-Z0-9._%+-]+@gmail.com$/.test(value)) {
          error_input.current.push({
            type: "email",
            reason: "!!لطفاً  ایمیل را درست وارد کنید",
          });
        }
      }
    });
  }

  return error_input.current;
}
