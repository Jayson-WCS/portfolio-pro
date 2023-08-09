import PropTypes from "prop-types";

export const WorkExp = ({year, title, company, duration, details}) => {
  return (
    <ol className="flex flex-col md:flex-row pt-9 relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-3 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-4 py-1.5 text-lg font-base bg-[#facc15]/70 text-[#18181b] rounded-md">{year}</span>
          <span className="text-2xl font-bold text-[#f1f5f9]/90">{title},</span>
          <span className="text-base font-semibold italic text-[#facc15]/70">{company},</span>
          <span className="my-3 text-lg font-normal leading-none text-[#f1f5f9]">{duration}</span>
        </p>
        <p className="my-2 text-lg font-base text-stone-400">{details}</p>
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