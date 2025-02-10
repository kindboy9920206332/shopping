"use client";
import { useEffect, useState } from "react";
export default function Login_message({ seccsses_unseccsses }) {
  const [whitch_message, set_whitch_maesage] = useState(null);

  useEffect(() => {
    set_whitch_maesage(seccsses_unseccsses ? 1 : 2);
  }, [seccsses_unseccsses]);

  return (
    <>
      {seccsses_unseccsses !== null ? (
        <div className="text-center w-[200px] h-[40px] border-[2px] flex justify-center items-center shadow-lg bg-[#dfdfdfa1]">
          <div>
            {whitch_message === 1 ? (
              <span className="text-green-500 font-bold text-[18px]">
                ورود موفقیت آمیز بود
              </span>
            ) : (
              <span className="text-red-500 font-bold text-[18px]">
                ورود موفقیت آمیز نبود
              </span>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
