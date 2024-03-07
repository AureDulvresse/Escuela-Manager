/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BiUserPlus } from "react-icons/bi";

const StudentUpdateForm = () => {
  const { pk } = useParams();

  const queryClient = useQueryClient();
  const queryKey = [["getCurrentStudent"], ["getPromotion"], ["updateStudent"]];
  const { data: dataPromo } = useQuery({
    queryKey: queryKey[1],
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/promo/")
        .then((res) => res.data),
  });

  const { data: dataStu } = useQuery({
    queryKey: queryKey[0],
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/student/".concat(pk))
        .then((res) => res.data),
  });

  const promotions = dataPromo || [];
  const currentStudent = dataStu;
  console.log(currentStudent);

  const [sexe, setSexe] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [birthday, setBirthday] = useState();
  const [place_birth, setPlace_birth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo_profil, setPhotoProfil] = useState("");
  const [address, setAddress] = useState("");
  const [promo, setPromo] = useState(0);

  useEffect((currentStudent) => {
    setAddress(currentStudent.address);
    setBirthday(currentStudent.birthday);
    setEmail(currentStudent.email);
    setFirst_name(currentStudent.first_name);
    setLast_name(currentStudent.last_name);
    setPhone(currentStudent.phone);
    setPhotoProfil(currentStudent.photo_profil);
    setPlace_birth(currentStudent.place_birth);
    setPromo(currentStudent.promotion);
    setSexe(currentStudent.sexe);
  }, []);

  const updateStudent = useMutation({
    mutationFn: async () => {
      const data = {
        sexe: sexe,
        first_name: first_name,
        last_name: last_name,
        birthday: birthday,
        place_birth: place_birth,
        phone: phone,
        email: email,
        address: address,
        promotion: promo,
        profil_picture: photo_profil,
      };
      await axios.put("http://127.0.0.1:8000/api/student/", data);
    },
    onSuccess: () => {
      toast.success("Information étudiant mise à jour avec succès", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      queryClient.invalidateQueries({ queryKey: queryKey[0] });
    },
    onError: () => {
      toast.error("Une erreur s'est produite", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    },
  });

  return (
    <div>
      <ToastContainer />
      <div className="mt-1">
        <h3 className="text-indigo-600 text-[24px] leading-3 px-2 py-6 border-b border-indigo-600">
          Modifier informations un(e) étudiant(e)
        </h3>
        <form className="px-1 py-2 rounded-md">
          <div className="flex flex-col gap-2 mb-3">
            <label
              htmlFor="sexe"
              className="text-slate-700 font-semibold px-1.5"
            >
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
                required
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
                required
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
                required
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
                required
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
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-2">
            <div className="mb-3">
              <label
                htmlFor="address"
                className="text-slate-700 font-semibold px-1.5"
              >
                Adresse
              </label>
              <input
                type="text"
                name="address"
                className="h-[40px] py-1 w-full bg-white focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
                value={address}
                placeholder="Entrer l'adresse"
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <div className="mb-3">
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
                  return (
                    <option key={index} value={promo.id}>
                      {promo.designation}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
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
          <div className="mt-4 mb-3">
            <button
              type="button"
              className="h-[40px] w-2/5 px-2 rounded-md bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center gap-2"
              onClick={() => updateStudent.mutate()}
            >
              <BiUserPlus className="text-white text-[20px] leading-3" />
              <span className="text-white text-[20px] leading-3">
                Mettre à jour
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentUpdateForm;
