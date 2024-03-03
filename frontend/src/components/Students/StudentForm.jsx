/* eslint-disable react/prop-types */
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { BiUserPlus } from "react-icons/bi";

const StudentForm = ({ initialValue }) => {
  const [sexe, setSexe] = useState(() =>
    initialValue == null ? "" : initialValue.sexe
  );
  const [first_name, setFirst_name] = useState(() =>
    initialValue == null ? "" : initialValue.first_name
  );
  const [last_name, setLast_name] = useState(() =>
    initialValue == null ? "" : initialValue.last_name
  );
  const [birthday, setBirthday] = useState(() =>
    initialValue == null ? "" : initialValue.birthday
  );
  const [place_birth, setPlace_birth] = useState(() =>
    initialValue == null ? "" : initialValue.place_birth
  );
  const [email, setEmail] = useState(() =>
    initialValue == null ? "" : initialValue.email
  );
  const [phone, setPhone] = useState(
    initialValue == null ? "" : initialValue.phone
  );
  const [photo_profil, setPhotoProfil] = useState(
    initialValue == null ? "" : initialValue.profil_picture
  );

  const [promo, setPromo] = useState(
    initialValue == null ? "" : initialValue.promotion
  );

  const queryKey = ["getPromotion"];
  const { data: dataPromo } = useQuery({
    queryKey: queryKey,
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/promo/")
        .then((res) => res.data),
  });

  const promotions = dataPromo || [];

  const handleSubmitForm = () => console.log("submit");

  return (
    <div className="mt-3">
      <form className="px-1 py-2 rounded-md" onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="sexe" className="text-slate-700 font-semibold px-1.5">
            Civilité
          </label>
          <select
            name="sexe"
            className="h-[40px] w-40 bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
            value={sexe}
            onChange={(event) => setSexe(event.target.value)}
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
              value={first_name}
              placeholder="Entrer le/les prénom(s)"
              onChange={(event) => setFirst_name(event.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="last_name"
              className="text-slate-700 font-semibold px-1.5"
            >
              Nom(s)
            </label>

            <input
              type="text"
              name="last_name"
              className="h-[40px] w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
              value={last_name}
              placeholder="Entrer le/les prénom(s)"
              onChange={(event) => setLast_name(event.target.value)}
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
              value={birthday}
              placeholder="Entrer date de naissance"
              onChange={(event) => setBirthday(event.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="place_birth"
              className="text-slate-700 font-semibold px-1.5"
            >
              Lieu de naissance
            </label>
            <input
              type="text"
              name="place_birth"
              className="h-[40px] w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
              value={place_birth}
              placeholder="Entrer le lieu de naissance"
              onChange={(event) => setPlace_birth(event.target.value)}
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
              value={email}
              placeholder="Entrer l'adresse mail"
              onChange={(event) => setEmail(event.target.value)}
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
              value={phone}
              placeholder="Entrer le numéro de téléphone"
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-2">
          <div className="mb-3">
            <label
              htmlFor="profile_picture"
              className="text-slate-700 font-semibold px-1.5"
            >
              Photo d&apos;identité
            </label>
            <input
              type="file"
              name="profile_picture"
              className="h-[40px] py-1 w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
              value={photo_profil}
              placeholder="Selectionner une photo"
              onChange={(event) => setPhotoProfil(event.target.value)}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="phone"
              className="text-slate-700 font-semibold px-1.5"
            >
              Classe
            </label>
            <select
              name="promotion"
              className="h-[40px] w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
              value={promo}
              onChange={(event) => setPromo(event.target.value)}
            >
              {promotions.map((promo, index) => {
                <option key={index} value={promo.id}>
                  {promo.designation}
                </option>;
              })}
            </select>
          </div>
        </div>
        <div className="mt-4 mb-3">
          <button
            type="submit"
            className="h-[40px] w-2/5 px-2 rounded-md bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center gap-2"
          >
            <BiUserPlus className="text-white text-[20px] leading-3" />
            <span className="text-white text-[20px] leading-3">
              Enregistrer
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
