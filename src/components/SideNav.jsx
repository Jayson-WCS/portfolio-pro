import { useState }from "react"
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

export const SideNav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  }
  return (
    <>
      <AiOutlineMenu onClick={handleNav} className="absolute top-4 right-4 z-[99] md:hidden"/>
      { nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a href="#main" className="w-[75%] flex justify-center items-center rounded-full drop-shadow-lg bg-gray-100 drop-shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200">
            <AiOutlineHome size={20}/>
            <span className="pl-4">Accueil</span>
          </a>
          <a href="#work" className="w-[75%] flex justify-center items-center rounded-full drop-shadow-lg bg-gray-100 drop-shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200">
            <BsPerson size={20}/>
            <span className="pl-4">Expériences</span>
          </a>
          <a href="#projet" className="w-[75%] flex justify-center items-center rounded-full drop-shadow-lg bg-gray-100 drop-shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200">
            <GrProjects size={20}/>
            <span className="pl-4">Projets</span>
          </a>
          <a href="#contact" className="w-[75%] flex justify-center items-center rounded-full drop-shadow-lg bg-gray-100 drop-shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-200">
            <AiOutlineMail size={20}/>
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ):(
        ''
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a href="#main" className="rounded-full drop-shadow-lg bg-gray-100 drop-shadow-gray-400 m-2 p-4 cursor-pointer  hover:scale-110 ease-in-out duration-300">
            <AiOutlineHome size={20} />
          </a>
          <a href="#work" className="rounded-full drop-shadow-lg bg-gray-100 drop-shadow-gray-400 m-2 p-4 cursor-pointer  hover:scale-110 ease-in-out duration-300">
            <BsPerson size={20} />
          </a>
          <a href="#projet" className="rounded-full drop-shadow-lg bg-gray-100 drop-shadow-gray-400 m-2 p-4 cursor-pointer  hover:scale-110 ease-in-out duration-300">
            <GrProjects size={20} />
          </a>
          <a href="#contact" className="rounded-full drop-shadow-lg bg-gray-100 drop-shadow-gray-400 m-2 p-4 cursor-pointer  hover:scale-110 ease-in-out duration-300">
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </>
  )
}
