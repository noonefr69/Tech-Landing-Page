"use client";

import Image from "next/image";
import { useState } from "react";

export default function Button(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <button onClick={() => setToggle(!toggle)} className={`flex bg-[#FFF5EF] gap-4 items-center border-2 border-[#062630] text-[#062630] p-4 font-semibold mb-7 text-lg rounded-md duration-200 hover:bg-[#ffefe5] outline outline-2 outline-offset-2 ${toggle === true ? "outline-black" : "outline-transparent"}`}>
      REVIEW MEMBERSHIP OPTION <Image src={props.Icon} alt="icon-arrow-down.svg" />
    </button>
  );
}
