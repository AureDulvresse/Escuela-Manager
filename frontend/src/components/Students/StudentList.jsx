import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ErrorRequest from "../ErrorRequest";
import ListLoader from "../ListLoader";
import { Link } from "react-router-dom";
import { BiPencil, BiTrashAlt } from "react-icons/bi";

const StudentList = () => {
  const [search, setSearch] = useState("");

  const queryKey = [["getStudent"], ["getPromotion"]];
  const { isLoading, data, error } = useQuery({
    queryKey: queryKey[0],
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/student/")
        .then((res) => res.data),
  });

  const { data: dataPromo } = useQuery({
    queryKey: queryKey[1],
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/promo/")
        .then((res) => res.data),
  });

  const listStudent = data || [],
    promotions = dataPromo || [];

  //console.log(listStudent);

  if (isLoading) return <ListLoader />;

  if (error) return <ErrorRequest error={error.message} />;

  return (
    <div className="flex flex-col">
      <div className="bg-indigo-600 rounded-t-md w-full h-[50px] px-1 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h4 className="font-semibold text-white">
            Liste des étudiants inscrits
          </h4>
          {/* <div>
            <div className="relative mt-2">
              <button
                type="button"
                className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
              >
                <span className="flex items-center">
                  <span className="ml-3 block truncate">2023 - 2024</span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>

              <ul
                className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                tabIndex="-1"
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
              >
                <li
                  className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                  id="listbox-option-0"
                  role="option"
                >
                  <div className="flex items-center">
                    <span className="font-normal ml-3 block truncate">
                      2023 - 2024
                    </span>
                  </div>

                  <span className="text-indigo-600 absolute inset-y-0 right-0 flex items-center pr-4">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </li>
                <li
                  className="text-gray-900 relative cursor-default select-none py-2 pl-3 pr-9"
                  id="listbox-option-0"
                  role="option"
                >
                  <div className="flex items-center">
                    <span className="font-normal ml-3 block truncate">
                      2022 - 2023
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="flex items-center gap-5">
          <input
            type="text"
            className="h-[38px] w-full bg-white text-slate-700 focus:bg-slate-50 rounded-md border-[2px] outline-none pl-[14px] focus:border-indigo-600 placeholder:text-14px placeholder:text-slate-400 leading-[20px] font-normal"
            value={search}
            placeholder="Taper une recherche..."
            onChange={(event) => setSearch(event.target.value)}
          />
          
        </div>
      </div>
      <table className="w-full rounded-b-md">
        <thead className="h-[40px] w-full">
          <tr className="border-t border-l border-r border-slate-200 bg-slate-200 py-2 px-1">
            <th className="text-[16px] font-light text-slate-700 text-center">
              N°
            </th>
            <th className="text-[16px] font-light text-slate-700 text-center">
              Nom & Prénom
            </th>
            <th className="text-[16px] font-light text-slate-700 text-center">
              Sexe
            </th>
            <th className="text-[16px] font-light text-slate-700 text-center">
              Promotion
            </th>
            <th className="text-[16px] font-light text-slate-700 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="w-full">
          {listStudent
            .filter((student) => {
              return search.toLowerCase() === ""
                ? student
                : (student.first_name
                    .toLowerCase()
                    .includes(search.toLocaleLowerCase()) &&
                    student.last_name
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase()) &&
                    student.sexe
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase())) ||
                    student.first_name
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase()) ||
                    student.last_name
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase()) ||
                    student.sexe
                      .toLowerCase()
                      .includes(search.toLocaleLowerCase());
            })
            .map((student, index) => {
              return student != [] ? (
                <tr
                  className="border-t border-l border-r border-slate-200 py-3 px-1 hover:bg-slate-50"
                  key={index}
                >
                  <td className="text-[18px] font-semibold text-slate-500 text-center">
                    {index + 1}
                  </td>
                  <td className="text-[18px] text-indigo-600 font-normal text-center">
                    <Link to={student.uuid + "/show"}>
                      {student.first_name} {student.last_name}
                    </Link>
                  </td>
                  <td className="text-[18px] text-indigo-600 font-normal text-center">
                    {student.sexe}
                  </td>
                  <td className="text-[18px] text-indigo-600 font-normal text-center">
                    {promotions
                      .filter((promo) => {
                        return promo.id == student.promotion;
                      })
                      .map((promo) => {
                        return promo.designation;
                      })}
                  </td>
                  <td className="flex justify-center gap-3 py-2">
                    <Link className="w-[40px] py-2 px-2 rounded-md text-indigo-600 hover:text-white border border-indigo-400 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 flex items-center justify-center">
                      <BiPencil className="text-[18px]" />
                    </Link>
                    <Link
                      to={student.uuid + "/remove"}
                      className="w-[40px] px-2 py-2 rounded-md text-red-600 hover:text-white border border-red-500 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 flex items-center justify-center"
                    >
                      <BiTrashAlt className="text-[18px] " />
                    </Link>
                  </td>
                </tr>
              ) : (
                <td className="text-slate-500 text-base font-normal text-center">
                  Aucune donnée
                </td>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
