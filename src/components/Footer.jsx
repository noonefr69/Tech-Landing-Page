import star from "../../public/images/icon-star.svg";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="mt-16 px-4 space-y-5 xl:space-y-8 md:max-w-[768px] xl:max-w-[940px] mx-auto md:px-10 xl:mb-28">
      <div className="anime relative flex items-center xl:justify-center">
        {" "}
        {Array(5)
          .fill()
          .map((_, index) => (
            <Image className="scale-110" key={index} src={star} alt="stars" />
          ))}
      </div>
      <div className="space-y-5">
        <p className="anime relative md:text-4xl text-2xl text-[#062630] font-semibold xl:text-center">
          'This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!'
        </p>
        <h1 className={`${inter.className} anime relative text-[#385159] text-xl xl:text-center`}>
          Sarah Chen, Software Architect
        </h1>
      </div>
    </div>
  );
}
