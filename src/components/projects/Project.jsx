import PropTypes from "prop-types";

export const Project = ( {img, title, repoLink, activeLink} ) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xs shadow-gray-400 rounded-xl group hover:bg-[#a568d7] transition delay-150 duration-300 ease-in-out">
      <img src={img} alt={title} className="rounded-xl group-hover:opacity-10" />
      <div className="hidden delay-300 group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-4xl font-bold mb-8 text-[#f1f5f9] text-center">{title}</h3>
          <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center px-4 py-1.5 m-auto rounded-lg bg-white/80 text-gray-700 font-bold cursor-pointer text-base"
        >
          Code
        </a>
        {activeLink ? <a
          href={activeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/80 text-gray-800 font-bold ml-3 py-1.5 px-4 rounded-lg"
        >
          Visite
        </a> : <span className="bg-white/80 text-gray-800 font-bold py-1.5 px-4 ml-3 rounded-lg opacity-50 cursor-not-allowed">À venir</span>}
      </div>
    </div>
  )
}

Project.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  repoLink: PropTypes.string.isRequired,
  activeLink: PropTypes.string,
};