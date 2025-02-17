import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import check from "../../public/images/icon-check.svg";
import ButtonAd from "./Elements/ButtonAd";
import pattern from "../../public/images/pattern-glow.svg";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function MemberShip() {
  return (
    <div className="mt-16">
      <h1 className="text-4xl md:text-6xl md:max-w-[768px] text-[#062630] mx-auto text-center font-semibold mb-6">
        Membership options
      </h1>
      <div className="md:px-10 px-4 flex flex-col gap-4 md:grid md:grid-cols-2 md:max-w-[768px] mx-auto">
        <Card className="">
          <CardHeader>
            <CardTitle>
              <h1 className="text-3xl font-semibold">Starter</h1>
            </CardTitle>
            <CardDescription>
              <div>
                <h1 className="text-3xl text-[#062630] font-semibold">
                  19$
                  <span className="ml-1 text-xl font-medium text-[#385159]">
                    /month
                  </span>
                </h1>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-xl text-[#385159]">
                <Image src={check} alt="icon-check.svg" /> 1 book/month
              </li>
              <li className="flex items-center gap-2 text-xl text-[#385159]">
                <Image src={check} alt="icon-check.svg" /> Online formus
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <ButtonAd Font="SUBSCRIBE NOW" />
          </CardFooter>
        </Card>

        <Card className=" relative overflow-hidden bg-[#FAF5F3]">
          <CardHeader>
            <CardTitle>
              <h1 className="text-3xl font-semibold">Pro</h1>
            </CardTitle>
            <CardDescription>
              <div className="z-10">
                <h1 className="text-3xl text-[#062630] font-semibold">
                  29$
                  <span className="ml-1 text-xl font-medium text-[#385159]">
                    /month
                  </span>
                </h1>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 z-10">
              <li className="flex items-center z-10 gap-2 text-xl text-[#385159]">
                <Image src={check} alt="icon-check.svg" /> 2 book/month
              </li>
              <li className="flex z-10 items-center gap-2 text-xl text-[#385159]">
                <Image src={check} alt="icon-check.svg" /> Virtual meetups
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <ButtonAd Font="SUBSCRIBE NOW" />
            <Image
              src={pattern}
              alt="pattern-glow.svg"
              className="absolute bottom-[-10rem] right-[-5rem] scale-150 opacity-65"
            />
          </CardFooter>
        </Card>

        <Card className="">
          <CardHeader>
            <CardTitle>
              <h1 className="text-3xl font-semibold">Enterprise</h1>
            </CardTitle>
            <CardDescription>
              <div>
                <h1 className="text-3xl text-[#062630] font-semibold">
                  Custom
                </h1>
              </div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-xl text-[#385159]">
                <Image src={check} alt="icon-check.svg" /> Team access
              </li>
              <li className="flex items-center gap-2 text-xl text-[#385159]">
                <Image src={check} alt="icon-check.svg" /> Private sessions
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <ButtonAd Font="TALK TO US" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
