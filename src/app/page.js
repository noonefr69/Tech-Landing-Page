import EndSection from "@/components/EndSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journy from "@/components/Journy";
import Main from "@/components/Main";
import MemberShip from "@/components/MemberShip";


export default function Home() {
  return (
    <div>
      <div className="">
        <Hero />
        <Main />
        <Journy />
        <MemberShip />
        <Footer />
        <EndSection />
      </div>
    </div>
  );
}
