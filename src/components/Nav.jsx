import Image from "next/image";
import logo from "../../public/images/logo.svg"

export default function Nav() {
  return (
    <div>
        <Image className="animate-fade-in-down" src={logo} alt="logo.svg"/>
    </div>
  )
}
