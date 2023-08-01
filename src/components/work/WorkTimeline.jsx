import { WorkExp } from "./WorkExp"

const data = [
  {
    year : 2017,
    title: "Athlète",
    company: "Club Bordelais",
    duration: "4 ans",
    details : "Gestion et organisation des saisons en collaboration avec le Directeur Technique.",
  },
  {
    year : 2014,
    title: "Agent de distribution & Assistant de vente",
    company: "Carrefour",
    duration: "3 ans",
    details : "Gestion des stocks, des flux et de leurs distributions supervisé par Directeur.",
  },
  {
    year : 2012,
    title: "PVT",
    company: "Australie",
    duration: "2 ans",
    details : "Récolte agricole dans différentes régions & Wwoofing pour particuliers et organisation environnementales.",
  }
]
export const WorkTimeline = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Expériences Professionnelles</h1>
      {data.map((item, index) => (
        <WorkExp key={index} year={item.year} title={item.title} company={item.company} duration={item.duration} details={item.details} />
      ))}
    </div>
  )
}
