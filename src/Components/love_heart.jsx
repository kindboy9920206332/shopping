"use client";

import { useState } from "react";

export default function Love_heart({ children }) {
  const image_heart_off = "/icon_svgs/heart-off.svg";
  const image_heart_on = "/icon_svgs/heart-on.svg";
  const [heart, set_heart] = useState(image_heart_off);

  return (
    <>
      <img
        className=" w-auto md:w-[70px] lg:w-[60px]"
        src={heart}
        alt=""
        onClick={() => {
          set_heart(() =>
            heart === image_heart_off ? image_heart_on : image_heart_off
          );
        }}
      />
    </>
  );
}
