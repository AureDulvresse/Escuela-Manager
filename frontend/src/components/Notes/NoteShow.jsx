// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import ListLoader from "../ListLoader";
import ErrorRequest from "../ErrorRequest";
import SubTitleLayout from "../Layout/SubTitleLayout";

const NoteShow = () => {
  const { pk } = useParams();

  // eslint-disable-next-line no-unused-vars
  const queryClient = useQueryClient();
  const queryKey = ["getStudent"];
  const { isLoading, data, error } = useQuery({
    queryKey: queryKey,
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/student/".concat(pk))
        .then((res) => res.data),
  });

  const student = data || [];

  if (isLoading) return <ListLoader />;

  if (error) return <ErrorRequest error={error.message} />;
  return (
    <div>
      <SubTitleLayout
        text={"Gestion des notes"}
        className={"flex items-center justify-between mt-4"}
      >
        <div className="flex gap-4 items-center justify-center mr-2">
          <Link
            to={"print"}
            className="h-[40px] px-2 rounded-md bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center text-white"
          >
            Imprimer résultat
          </Link>
        </div>
      </SubTitleLayout>
      <div className="mt-6 mr-2 py-4 px-2 rounded-md shadow-sm bg-white">
        <div className="bg-indigo-600 rounded-t-md w-full h-[50px] px-2 py-3 flex items-center justify-between">
          <h4 className="text-white font-semibold">
            Notes obtenue par : {student.first_name} {student.last_name}
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
        <div className="mt-2">
          <Outlet OutletProps="Hello" />
        </div>
      </div>
    </div>
  );
};

export default NoteShow;
