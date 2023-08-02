import { Project } from "./Project"
import makeSense from "../../assets/makeSense.png";
import hackathonAlibi from "../../assets/hackathonAlibi.png";
import omnifood from "../../assets/omnifood.png";
import snakeGame from "../../assets/snakeGame.png";

export const ProjectsDisplay = () => {
  return (
    <div id="projet" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-[#001b5e]">Projets</h1>
      <p className="py-8 text-center">Ces réalisations datent de cette année, certains sont des projets fait lors de ma formation à la Wild code School, d&apos;autres de sont issus de ma propre initiative.</p>
      <div className="grid sm:grid-cols-2 gap-12">
        <Project img={omnifood} title="Omnifood" />
        <Project img={makeSense} title="Make_Sense" />
        <Project img={snakeGame} title="Snake" />
        <Project img={hackathonAlibi} title="Hidelidays" />
      </div>
    </div>
  )
}
