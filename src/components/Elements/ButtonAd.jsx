"use client";

import Image from "next/image";
import down from "../../../public/images/icon-arrow-down.svg";
import { useState } from "react";

export default function ButtonAd(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <button onClick={() => setToggle(!toggle)} className={`flex bg-[#FFF5EF] z-10 gap-4 justify-center items-center border-2 border-[#062630] text-[#062630] p-4 font-semibold text-lg w-full text-center rounded-md duration-200 hover:bg-[#ffefe5] outline outline-2 outline-offset-2 ${toggle === true ? "outline-black" : "outline-transparent"}`}>
      {props.Font}
    </button>
  );
}
