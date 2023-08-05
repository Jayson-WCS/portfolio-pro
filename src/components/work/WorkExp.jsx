import PropTypes from "prop-types";

export const WorkExp = ({year, title, duration, details}) => {
  return (
    <ol className="flex flex-col md:flex-row pt-9 relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold bg-[#f1f5f9]/50 rounded-md">{year}</span>
          <span className="text-xl font-semibold text-[#f1f5f9]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">{duration}</span>
        </p>
        <p className="my-2 text-base font-semibold text-stone-400">{details}</p>
      </li>
    </ol>
  )
}

WorkExp.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
};