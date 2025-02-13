import { Inter } from "next/font/google";
import Image from "next/image";
import glow from "../../public/images/pattern-glow.svg"

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Journy() {
  return (
    <div
      id="back2"
      className="mt-24 mx-4 flex flex-col justify-center items-center rounded-md relative overflow-hidden"
    >
      <div className="pt-16 z-10">
        <h1 className="text-[#062630] text-5xl font-semibold">
          Your tech
          <br /> reading journey
        </h1>
        <ul className="mt-10 px-16 space-y-10">
          <li className="text-[22px] font-semibold text-[#062630] flex flex-col">
            <span className="my-4 border-2 flex justify-center items-center h-10 w-10 border-[#062630] rounded-md text-[#062630] font-semibold text-[22px] ">
              1
            </span>
            Choose your <br /> membership tier
          </li>
          <li className=" text-[22px] font-semibold text-[#062630]">
            <span className="my-4 border-2 flex justify-center items-center h-10 w-10 border-[#062630] rounded-md text-[#062630] font-semibold text-[22px] ">
              2
            </span>
            Get your monthly <br /> book selection
          </li>
          <li className=" text-[22px] font-semibold text-[#062630]">
            <span className="my-4 border-2 flex justify-center items-center h-10 w-10 border-[#062630] rounded-md text-[#062630] font-semibold text-[22px] ">
              3
            </span>
            Join our <br /> discussion forums
          </li>
          <li className="pb-10 text-[22px] font-semibold text-[#062630]">
            <span className="my-4 border-2 flex justify-center items-center h-10 w-10 border-[#062630] rounded-md text-[#062630] font-semibold text-[22px] ">
              4
            </span>
            Attend exclusive <br /> meetups
          </li>
        </ul>
      </div>
      <Image src={glow} alt="pattern" className="absolute bottom-[-15rem] right-[-10rem] scale-150"/>
    </div>
  );
}
