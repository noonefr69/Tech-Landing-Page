import { Inter } from "next/font/google";
import Image from "next/image";
import glow from "../../public/images/pattern-glow.svg";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Journy() {
  return (
    <div
      id="back2"
      className="md:max-w-[685px] md:px-10 md:mx-auto mt-24 mx-4 flex flex-col justify-center items-center rounded-md relative overflow-hidden"
    >
      <div className="mt-16 pb-16 z-10">
        <h1 className="md:pb-7 text-[#062630] text-center text-4xl md:text-6xl font-semibold">
          Your tech <br /> reading journey
        </h1>
        <ul className="mt-10 px-16 space-y-10 md:space-y-0 gap-10 md:grid md:grid-cols-2 justify-center items-center">
          <li className="text-[22px] font-semibold text-[#062630] flex flex-col">
            <span className="mb-4 border-2 flex justify-center items-center h-10 w-10 border-[#062630] rounded-md text-[#062630] font-semibold text-[22px] ">
              1
            </span>
            Choose your membership tier
          </li>
          <li className="text-[22px] font-semibold text-[#062630] flex flex-col">
            <span className="mb-4 border-2 flex justify-center items-center h-10 w-10 border-[#062630] rounded-md text-[#062630] font-semibold text-[22px] ">
              2
            </span>
            Get your monthly book selection
          </li>
          <li className="text-[22px] font-semibold text-[#062630] flex flex-col">
            <span className="mb-4 border-2 flex justify-center items-center h-10 w-10 border-[#062630] rounded-md text-[#062630] font-semibold text-[22px] ">
              3
            </span>
            Join our discussion forums
          </li>
          <li className="text-[22px] font-semibold text-[#062630] flex flex-col">
            <span className="mb-4 border-2 flex justify-center items-center h-10 w-10 border-[#062630] rounded-md text-[#062630] font-semibold text-[22px] ">
              4
            </span>
            Attend exclusive meetups
          </li>
        </ul>
      </div>
      <Image
        src={glow}
        alt="pattern"
        className="absolute bottom-[-15rem] right-[-10rem] scale-150"
      />
    </div>
  );
}
