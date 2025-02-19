import Image from "next/image";
import img1 from "../../public/images/image-avatars.webp";
import star from "../../public/images/icon-star.svg";
import pic from "../../public/images/image-hero-mobile.webp";
import pic2 from "../../public/images/image-hero-tablet.webp";
import pic3 from "../../public/images/image-hero-desktop.webp";
import Button from "./Elements/Button";
import Nav from "./Nav";
import down from "../../public/images/icon-arrow-down.svg";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <div id="back" className="px-4 pt-7">
      <div className="sm:px-10 sm:max-w-[768px] xl:max-w-[1340px] sm:mx-auto">
        <nav className="pb-10">
          <Nav />
        </nav>
        <div className=" xl:flex xl:items-center">
          <div className="xl:w-1/2">
            <h1 className="md:text-7xl md:max-w-[80%] xl:max-w-fit pb-8 text-5xl font-bold bg-gradient-to-r from-[#d48050] to-[#062630] bg-clip-text text-transparent">
              Join the ultimate tech book club
            </h1>
            <p
              className={`${inter.className} text-[#385159] text-[20px] pb-8 `}
            >
              Turn your reading time into learning time with fellow tech
              enthusiasts. Get curated recommendations, join vibrant
              discussions, and level up your skills one chapter at a time.
            </p>
            <Button Icon={down} />
            <div className="flex items-center mb-10 gap-4">
              <Image width={110} src={img1} alt="amyrobson" />
              <div className="">
                <div className="flex items-center ">
                  {Array(5)
                    .fill()
                    .map((_, index) => (
                      <Image key={index} src={star} alt="stars" />
                    ))}
                </div>
                <span
                  className={`${inter.className} text-[14px] text-[#385159] font-semibold`}
                >
                  200+ developers joined already
                </span>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2">
            <div className="pb-16">
              <Image
                className="rounded-xl w-full md:hidden"
                src={pic}
                alt="hero"
              />
              <Image
                className="rounded-xl w-full hidden md:block lg:hidden"
                src={pic2}
                alt="image-hero-tablet.webp"
              />
              <Image
                className="rounded-xl w-full hidden lg:block"
                src={pic3}
                alt="image-hero-desktop.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
