import Image from "next/image";
import logo from "../../public/images/logo.svg"

export default function Nav() {
  return (
    <div>
        <Image src={logo} alt="logo.svg"/>
    </div>
  )
}
