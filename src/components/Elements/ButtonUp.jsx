"use client";

import Image from "next/image";
import up from "../../../public/images/icon-arrow-up.svg";
import { useState } from "react";

export default function ButtonUp() {
  const [toggle, setToggle] = useState(false);
  return (
    <button onClick={() => setToggle(!toggle)} className={`flex bg-transparent z-10 gap-4 justify-center items-center border-2 border-[#FAF5F3] text-[#FAF5F3] p-4 px-8 font-semibold text-lg w-fit text-center rounded-md duration-200 outline outline-2 outline-offset-2 hover:bg-[#083846] ${toggle === true ? "outline-[#FAF5F3]" : "outline-transparent"}`}>
      REVIEW MEMVERSHIP OPTIONS <Image src={up} alt="icon-arrow-up.svg"/>
    </button>
  );
}
