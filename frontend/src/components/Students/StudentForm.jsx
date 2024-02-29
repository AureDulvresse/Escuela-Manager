const StudentForm = ({ initialValue }) => {
  return (
    <div className="mt-3">
      <form className="px-1 py-2 rounded-md">
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="sexe" className="text-slate-700 font-semibold px-1.5">
            Civilité
          </label>
          <select
            name="sexe"
            className="h-[40px] w-40 bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
          >
            <option value={"M"}>Monsieur</option>
            <option value={"F"}>Madame</option>
          </select>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-2">
          <div className="mb-3">
            <label
              htmlFor="first_name"
              className="text-slate-700 font-semibold px-1.5"
            >
              Prénom(s)
            </label>
            <input
              type="text"
              name="first_name"
              className="h-[40px] w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
              placeholder="Entrer le/les prénom(s)"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="first_name"
              className="text-slate-700 font-semibold px-1.5"
            >
              Prénom(s)
            </label>

            <input
              type="text"
              name="first_name"
              className="h-[40px] w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
              placeholder="Entrer le/les prénom(s)"
            />
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-2">
          <div className="mb-3">
            <label
              htmlFor="birthday"
              className="text-slate-700 font-semibold px-1.5"
            >
              Date de naissance
            </label>
            <input
              type="date"
              name="birthday"
              className="h-[40px] w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
              placeholder="Entrer date de naissance"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="last_name"
              className="text-slate-700 font-semibold px-1.5"
            >
              Lieu de naissance
            </label>
            <input
              type="text"
              name="place_born"
              className="h-[40px] w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
              placeholder="Entrer le lieu de naissance"
            />
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-2">
          <div className="mb-3">
            <label
              htmlFor="email"
              className="text-slate-700 font-semibold px-1.5"
            >
              Adresse mail
            </label>
            <input
              type="email"
              name="email"
              className="h-[40px] w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
              placeholder="Entrer l'adresse mail"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="phone"
              className="text-slate-700 font-semibold px-1.5"
            >
              Téléphone
            </label>
            <input
              type="tel"
              name="phone"
              className="h-[40px] w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
              placeholder="Entrer le numéro de téléphone"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
