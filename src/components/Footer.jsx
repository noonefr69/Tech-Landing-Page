import star from "../../public/images/icon-star.svg";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="mt-16 px-4 space-y-5 md:max-w-[768px] mx-auto md:px-10">
      <div className="flex items-center">
        {" "}
        {Array(5)
          .fill()
          .map((_, index) => (
            <Image className="scale-110" key={index} src={star} alt="stars" />
          ))}
      </div>
      <div className="space-y-5">
        <p className="md:text-4xl text-2xl text-[#062630] font-semibold">
          'This book club transformed my technical reading from a solitary
          activity into an enriching community experience. The discussions are
          gold!'
        </p>
        <h1 className={`${inter.className} text-[#385159] text-xl`}>
          Sarah Chen, Software Architect
        </h1>
      </div>
    </div>
  );
}
