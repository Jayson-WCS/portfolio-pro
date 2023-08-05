import { TypeAnimation } from 'react-type-animation';
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
    <div id="main">
        <div className='w-full h-screen lg:pl-40 md:pl-32 bg-[#18181b] text-[#f1f5f9] m-autoflex flex flex-col justify-center lg:items-start md:items-start items-center'>
          <h1 className='sm:text-5xl pb-8 text-4xl font-light text-[#14b8a6]'>DELION Jayson</h1>
          <h2 className='sm:text-3xl font-bold text-2xl pt-4 pb-8'>
            <TypeAnimation
              sequence={[
                'Développeur Web Full Stack',
                2000,
                'Recherche une alternance',
                2000,
                ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className='sm:text-5xl text-2xl pb-8 font-light text-[#facc15]'>
            <TypeAnimation
              sequence={[
                'JavaScript ',
                2000,
                'React JS',
                2000,
                'Node JS',
                2000,
                'Tailwind CSS ',
                2000,
                'Figma',
                2000,
                'Git',
                2000,
                'GitHub',
                2000,
                ]}
              speed={10}
              repeat={Infinity}
            />
          </p>
          <div className='flex justify-between pt-6 max-w-[150px] w-full'>
            <a href="https://twitter.com/jayson_delion" target='_blank' rel='noreferrer'>
              <FaTwitter size={25} className="cursor-pointer text-[#0ea5e9]" />
            </a>
            <a href="https://github.com/Jayson-WCS" target='_blank' rel='noreferrer'>
              <FaGithub size={25} className="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/jayson-delion/" target='_blank' rel='noreferrer'>
              <FaLinkedinIn size={25} className="cursor-pointer text-[#0ea5e9]" />
            </a>
          </div>
        </div>
    </div>
  )
}
