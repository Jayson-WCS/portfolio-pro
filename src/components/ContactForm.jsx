

export const ContactForm = () => {
  return (
    <div id="contact" className="flex flex-col justify-center h-screen max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">Contact</h1>
      <form action="https://getform.io/f/9b09afdb-0a34-496a-ba36-8e55c20a1b08" method="POST" encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="text-sm py-2 uppercase">Nom</label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="nom" placeholder="Nom"/>
          </div>
          <div  className="flex flex-col">
            <label className="text-sm py-2 uppercase">Prénom</label>
            <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="prenom" placeholder="Prénom"/>
          </div>
        </div>
        <div  className="flex flex-col">
          <label className="text-sm py-2 uppercase">Email</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" name="email" placeholder="Email"/>
        </div>
        <div className="flex flex-col">
          <label className="text-sm py-2 uppercase">Sujet</label>
          <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" name="sujet" placeholder="Email"/>
        </div>
        <div className="flex flex-col">
          <label className="text-sm py-2 uppercase">Message</label>
          <textarea className="w-full h-60 border-2 rounded-lg p-3 flex border-gray-300"/>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">Envoyer</button>
      </form>
    </div>
  )
}
