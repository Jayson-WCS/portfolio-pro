import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import heroBg1 from "../assets/heroBg1.jpg"

export const Hero = () => {
  return (
    <div id="main">
      <img className="w-full h-screen object-cover object-left" src={heroBg1} alt="hero section background image" />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>DELION Jayson</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
          <TypeAnimation
            sequence={[
              'Développeur Full Stack',
              2000,
              'Recherche une alternance',
              2000,
              ]}
            speed={50}
            style={{ fontSize: '1em' }}
            repeat={Infinity}
          />
        </h2>
        <div className='flex justify-between pt-6 max-w-[150px] w-full'>
          <a href="https://twitter.com/jayson_delion" target='_blank' rel='noreferrer'>
            <FaTwitter size={20} className="cursor-pointer" />
          </a>
          <a href="https://github.com/Jayson-WCS" target='_blank' rel='noreferrer'>
            <FaGithub size={20} className="cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/jayson-delion/" target='_blank' rel='noreferrer'>
            <FaLinkedinIn size={20} className="cursor-pointer" />
          </a>
        </div>
      </div>
      </div>
    </div>
  )
}
