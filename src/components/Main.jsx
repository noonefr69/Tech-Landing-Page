import Image from "next/image";
import tic from "../../public/images/icon-check.svg";
import pic1 from "../../public/images/image-read-together-mobile.webp";
import pic2 from "../../public/images/image-not-average-mobile.webp";
import git from "../../public/images/logos-tech.svg";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Main() {
  return (
    <div className="mt-14 px-4">
      <div>
        <h1 className="text-[#062630] text-4xl font-semibold mb-12">
          Read together, <br /> grow together
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
            <Image src={tic} alt="Checke-mark" /> Virtual and in-person meetups
            for deep-dive discussions
          </li>
          <li
            className={`flex items-center gap-4 text-[20px] text-[#385159] ${inter.className}`}
          >
            <Image src={tic} alt="Checke-mark" /> Early access to new tech book
            releases
          </li>
          <li
            className={`flex items-center gap-4 text-[20px] text-[#385159] ${inter.className}`}
          >
            <Image src={tic} alt="Checke-mark" /> Author Q&A sessions with tech
            thought leaders
          </li>
        </ul>
        <Image
          className="rounded-xl w-full"
          src={pic1}
          alt="image-read-together-mobile.webp"
        />
      </div>
      <div className="mt-14">
        {" "}
        <h1 className="text-[#062630] text-4xl font-semibold mb-7">
          Not your average <br /> book club
        </h1>
        <p className={`text-[20px] text-[#385159] mb-7 ${inter.className}`}>
          Connect with a community that speaks your language - from{" "}
          <span className="font-semibold">Python</span> to
          <span className="font-semibold">TypeScript</span> and everything in
          between. Our discussions blend technical depth with practical
          applications.
        </p>
        <div className="relative">
          <Image
            className="rounded-xl"
            src={pic2}
            alt="image-read-together-mobile.webp"
          />
          <Image
            className="absolute bottom-7 right-10"
            src={git}
            alt="logos-tech.svg"
          />
        </div>
      </div>
    </div>
  );
}
