import PropTypes from "prop-types";

const projectsURLS = ["https://github.com/Jayson-WCS/hidelidays-hackathon-1", "https://github.com/Jayson-WCS/projet-snake","https://github.com/Jayson-WCS/projet-omnifood", ""]

export const Project = ( {img, title} ) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xs shadow-gray-400 rounded-xl group hover:bg-[#683790] transition delay-150 duration-300 ease-in-out">
      <img src={img} alt={title} className="rounded-xl group-hover:opacity-10" />
      <div className="hidden delay-300 group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-bold mb-6 text-[#f1f5f9] tracking-wider text-center">{title}</h3>
        <a href={projectsURLS} className="text-center px-4 py-1.5 m-auto rounded-lg bg-white/80 text-gray-700 font-bold cursor-pointer text-base">Code</a>
      </div>
    </div>
  )
}

Project.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};