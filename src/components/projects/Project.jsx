import PropTypes from "prop-types";

export const Project = ( {img, title} ) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-stone-800">
      <img src={img} alt={title} className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-2xl text-bold text-white tracking-wider text-center">{title}</h3>
        <p className="pb-4 pt-2 text-white text-center">STACK TO ADD</p>
        <a href="#" className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg mr-6">Infos</a>
        <a href="#" className="text-center p-2 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">Code</a>
      </div>
    </div>
  )
}

Project.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};