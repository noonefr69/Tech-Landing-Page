import ButtonUp from "./Elements/ButtonUp";
import Image from "next/image";
import img1 from "../../public/images/image-avatars.webp";
import star from "../../public/images/icon-star.svg";
import buterfly from "../../public/images/logo-bluesky.svg";
import linkdin from "../../public/images/logo-linkedin.svg";

export default function EndSection() {
  return (
    <div
      id="back3"
      className="bg-[#062630] selection:bg-[#2a4b55ab] flex flex-col justify-center items-center pt-3 rounded-t-2xl mt-14"
    >
      <h1 className="anime relative text-[#FAF5F3] text-4xl md:text-6xl md:max-w-[70%] text-center py-8 font-semibold px-2 xl:max-w-[40%]">
        Ready to debug your reading list?
      </h1>
      <div className="animeFt relative">
        <ButtonUp />
      </div>
      <div className="flex items-center my-10 mb-16 gap-4 animeFt relative">
        <Image width={110} src={img1} alt="amyrobson" />
        <div className="">
          <div className="flex items-center ">
            {Array(5)
              .fill()
              .map((_, index) => (
                <Image key={index} src={star} alt="stars" />
              ))}
          </div>
          <span className={`text-[16px] text-[#FAF5F3] font-semibold`}>
            200+ developers joined already
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-4 xl:px-10 py-6 border-t  border-t-[#faf5f354]">
        <div>
          <h3 className="text-[#FAF5F3] text-[18px] font-semibold ">
            @ 2024 - Tech Book Club
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <Image
            src={buterfly}
            alt="logo-bluesky.svg"
            className="cursor-pointer"
          />
          <Image
            src={linkdin}
            alt="llogo-linkedin.svg"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
