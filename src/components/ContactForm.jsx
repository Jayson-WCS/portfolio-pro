

export const ContactForm = () => {
  return (
    <div id="contact" className="bg-[#18181b] flex flex-col justify-center h-screen md:h-screen m-auto lg:pl-40 md:pl-32 md:pr-28 p-4 py-20">
      <h1 className="py-4 text-4xl font-bold text-[#f1f5f9]">Contact</h1>
      <form action="https://getform.io/f/9b09afdb-0a34-496a-ba36-8e55c20a1b08" method="POST" encType="multipart/form-data" 
        className="font-semibold max-w-[750px]">
        <div className="grid md:grid-cols-2 gap-3 w-full">
          <div className="flex flex-col">
            <input className="border-2 rounded-lg p-3 mt-4 flex placeholder-[#18181b]/60" type="text" name="nom" placeholder="Nom"/>
          </div>
          <div className="flex flex-col">
            <input className="border-2 rounded-lg p-3 mt-4 flex placeholder-[#18181b]/60" type="text" name="prenom" placeholder="Prénom"/>
          </div>
        </div>
        <div className="flex flex-col">
          <input className="border-2 rounded-lg p-3 mt-4 flex placeholder-[#18181b]/60" type="email" name="email" placeholder="Email"/>
        </div>
        <div className="flex flex-col">
          <input className="border-2 rounded-lg p-3 mt-4 flex placeholder-[#18181b]/60" type="text" name="sujet" placeholder="Email"/>
        </div>
        <div className="flex flex-col">
          <textarea className="w-full h-40 border-2 rounded-lg mt-4 p-3 flex"/>
        </div>
        <button className="bg-[#16a34a] text-gray-100 font-bold text-2xl mt-9 w-full p-4 rounded-lg">Envoyer</button>
      </form>
    </div>
  )
}
