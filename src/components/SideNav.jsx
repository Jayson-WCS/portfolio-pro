import { useState }from "react"
import { AiOutlineMenu } from "react-icons/ai";

export const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log(nav.valueOf());
  }
  return (
    <div>
      <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
      { nav ? (
        <div></div>
      ):(
        <div></div>
      )}
    </div>
  )
}
