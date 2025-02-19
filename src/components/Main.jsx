import Image from "next/image";
import tic from "../../public/images/icon-check.svg";
import pic1 from "../../public/images/image-read-together-mobile.webp";
import pic2 from "../../public/images/image-not-average-mobile.webp";
import pic3 from "../../public/images/image-read-together-tablet.webp";
import pic4 from "../../public/images/image-read-together-desktop.webp";
import pic5 from "../../public/images/image-not-average-tablet.webp";
import pic6 from "../../public/images/image-not-average-desktop.webp";
import git from "../../public/images/logos-tech.svg";
import circle from "../../public/images/pattern-circle.png";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Main() {
  return (
    <div className="mt-14 px-4 md:max-w-[768px] xl:max-w-[1340px] md:mx-auto">
      <div className="md:px-8 xl:flex xl:items-center xl:flex-row-reverse xl:gap-24">
        <div className="xl:w-1/2">
          <h1 className="text-[#062630] text-4xl max-w-[78%] md:text-6xl md:max-w-[80%] lg:max-w-fit font-semibold mb-12">
            Read together, grow together
          </h1>
          <ul className="flex flex-col gap-4 mb-7">
            <li
              className={`flex items-center gap-4 text-[20px] text-[#385159] ${inter.className}`}
            >
              <Image src={tic} alt="Checke-mark" /> Monthly curated tech reads
              selected by industry experts
            </li>
            <li
              className={`flex items-center gap-4 text-[20px] text-[#385159] ${inter.className}`}
            >
              <Image src={tic} alt="Checke-mark" /> Virtual and in-person
              meetups for deep-dive discussions
            </li>
            <li
              className={`flex items-center gap-4 text-[20px] text-[#385159] ${inter.className}`}
            >
              <Image src={tic} alt="Checke-mark" /> Early access to new tech
              book releases
            </li>
            <li
              className={`flex items-center gap-4 text-[20px] text-[#385159] ${inter.className}`}
            >
              <Image src={tic} alt="Checke-mark" /> Author Q&A sessions with
              tech thought leaders
            </li>
          </ul>
        </div>
        <div className="xl:w-1/2">
          <Image
            className="rounded-xl w-full md:hidden"
            src={pic1}
            alt="image-read-together-mobile.webp"
          />
          <Image
            className="rounded-xl w-full hidden md:block xl:hidden"
            src={pic3}
            alt="image-read-together-tablet.webp"
          />
          <Image
            className="rounded-xl w-full hidden xl:block"
            src={pic4}
            alt="image-read-together-desktop.webp"
          />
        </div>
      </div>
      <div className="mt-14 md:px-8 xl:flex xl:items-center xl:gap-24">
        <div className="xl:w-1/2">
          <h1 className="text-[#062630] text-4xl md:text-6xl font-semibold mb-7">
            Not your average <br /> book{" "}
            <span className="relative">
              club{" "}
              <Image
                className="absolute top-2 left-0 scale-125"
                src={circle}
                alt="pattern-circle.png"
              />
            </span>
          </h1>
          <p className={`text-[20px] text-[#385159] mb-7 ${inter.className}`}>
            Connect with a community that speaks your language - from{" "}
            <span className="font-semibold">Python</span> to
            <span className="font-semibold">TypeScript</span> and everything in
            between. Our discussions blend technical depth with practical
            applications.
          </p>
        </div>
        <div className="xl:w-1/2">
          <div className="relative">
            <Image
              className="rounded-xl w-full md:hidden"
              src={pic2}
              alt="image-read-together-mobile.webp"
            />
            <Image
              className="rounded-xl w-full hidden md:block xl:hidden"
              src={pic5}
              alt="image-read-together-tablet.webp"
            />
            <Image
              className="rounded-xl w-full hidden xl:block"
              src={pic6}
              alt="image-not-average-desktop.webp"
            />
            <Image
              className="absolute bottom-7 right-10 xl:-right-[-33rem]"
              src={git}
              alt="logos-tech.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
