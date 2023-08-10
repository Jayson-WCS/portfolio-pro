import { Project } from "./Project"
import makeSense from "../../assets/makeSense.png";
import hackathonAlibi from "../../assets/hackathonAlibi.png";
import omnifood from "../../assets/omnifood.png";
import snakeGame from "../../assets/snakeGame.png";

export const ProjectsDisplay = () => {
  
  return (
    <div id="projet" className="m-auto lg:pl-20 md:pl-28 p-4 py-20 bg-[#18181b] text-[#f1f5f9]">
      <h1 className="lg:pl-20 lg:pr-20 text-5xl mb-[36px] font-bold text-[#8b49c0]">Projets</h1>
      <p className="lg:pl-20 lg:pr-20 py-8 mb-6 text-left leading-10 text-xl font-light">Ces réalisations datent de cette année, certains sont des projets fait lors de ma formation à la Wild code School, d&apos;autres de sont issus de ma propre initiative.</p>
      <div className="grid lg:pl-20 lg:pr-20 sm:grid-cols-2 gap-16">
        <Project activeLink="https://jayson-wcs.github.io/projet-omnifood/" repoLink="https://github.com/Jayson-WCS/projet-omnifood" img={omnifood} title="Omnifood" />
        <Project repoLink="https://github.com/Jayson-WCS/2023-02-JS-Bordeaux-project-3-groupe3/tree/dev" img={makeSense} title="Make_Sense" />
        <Project activeLink="https://jayson-wcs.github.io/projet-snake/" repoLink="https://github.com/Jayson-WCS/projet-snake" img={snakeGame} title="Snake" />
        <Project repoLink="https://github.com/Jayson-WCS/hidelidays-hackathon-1" img={hackathonAlibi} title="Hidelidays" />
      </div>
    </div>
  )
}
