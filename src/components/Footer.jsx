import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { MdWorkOutline } from "react-icons/md";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='w-full h-[30vh] flex flex-col justify-center items-center bg-[#3a3a3b] text-[#f1f5f9]'>
      <div className="my-6">
        <a className="bg-white/80 text-gray-800 font-bold py-1.5 px-4 rounded-lg" href="https://github.com/Jayson-WCS" target="_blank"
          rel="noopener noreferrer">DELION Jayson</a>
        <a className="bg-white/80 text-gray-800 font-bold ml-10 py-1.5 px-4 rounded-lg" >{year}</a>
      </div>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <a href="#main" className="text-black m-2 p-4 cursor-pointer rounded-full hover:scale-110  bg-[#14b8a6] ease-in-out duration-300">
          <AiOutlineHome size={20} />
        </a>
        <a href="#about" className="text-black m-2 p-4 cursor-pointer rounded-full hover:scale-110 bg-[#0ea5e9] ease-in-out duration-200">
          <BsPerson size={20}/>
        </a>
        <a href="#projet" className="text-black m-2 p-4 cursor-pointer rounded-full hover:scale-110 bg-[#8b49c0] ease-in-out duration-300">
          <GrProjects size={20} />
        </a>
        <a href="#work" className="text-black m-2 p-4 cursor-pointer rounded-full hover:scale-110 bg-[#facc15] ease-in-out duration-300">
          <MdWorkOutline size={20} />
        </a>
        <a href="#contact" className="text-black m-2 p-4 cursor-pointer rounded-full hover:scale-110 bg-[#16a34a] ease-in-out duration-300">
          <AiOutlineMail size={20} />
        </a>
      </ul>
    </footer>
  )
}
