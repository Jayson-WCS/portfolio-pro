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
    details : "Gestion des stocks, des flux et de leurs distributions supervisées par Directeur.",
  },
  {
    year : 2012,
    title: "PVT",
    company: "Australie & Asie du Sud Est",
    duration: "2 ans",
    details : "Récoltes agricoles dans différentes régions & Wwoofing pour différentes organisations environnementales.",
  }
]
export const WorkTimeline = () => {
  return (
    <div id="work" className="bg-[#18181b] text-[#f1f5f9] h-screen m-auto lg:pl-40 md:pl-28 p-4 py-20">
      <h1 className="text-5xl text-[#facc15] font-bold mb-[56px]">Expériences Professionnelles</h1>
      {data.map((item, index) => (
        <WorkExp key={index} year={item.year} title={item.title} company={item.company} duration={item.duration} details={item.details} />
      ))}
    </div>
  )
}