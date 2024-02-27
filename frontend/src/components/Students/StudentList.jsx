import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ErrorRequest from "../ErrorRequest";
import ListLoader from "../ListLoader";
import { Link } from "react-router-dom";
import { BiPencil, BiTrashAlt } from "react-icons/bi";

const StudentList = () => {
  const queryKey = ["getStudent"];
  const { isLoading, data, error } = useQuery({
    queryKey: queryKey,
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/student/")
        .then((res) => res.data),
  });

  const listStudent = data || [];

  console.log(listStudent);

  if (isLoading) return <ListLoader />;

  if (error) return <ErrorRequest error={error.message} />;

  return (
    <div className="flex flex-col">
      <h4 className="bg-indigo-600 text-white rounded-t-md w-full h-[50px] px-1 py-3 font-semibold">
        Liste des étudiants inscrits
      </h4>
      <table className="w-full rounded-b-md">
        <thead className="h-[40px] w-full">
          <tr className="border-t border-l border-r border-slate-200 bg-slate-200 py-2 px-1">
            <th className="text-[16px] font-light text-slate-700 text-center">
              N°
            </th>
            <th className="text-[16px] font-light text-slate-7 text-center">
              Nom & Prénom
            </th>
            <th className="text-[16px] font-light text-slate-7 text-center">
              Sexe
            </th>
            <th className="text-[16px] font-light text-slate-7 text-center">
              Promotion
            </th>
            <th className="text-[16px] font-light text-slate-7 text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="w-full max-h-[250px] overflow-x-hidden">
          {listStudent.map((student, index) => {
            return (
              <tr
                className="border-t border-l border-r border-slate-200 py-3 px-1 hover:bg-slate-50"
                key={index}
              >
                <td className="text-[18px] font-semibold text-center">
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
                  Terminal C2
                </td>
                <td className="flex justify-center gap-3 py-2">
                  <Link className="w-[40px] py-2 px-2 rounded-md text-indigo-600 hover:text-white border border-indigo-400 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 flex items-center justify-center">
                    <BiPencil className="text-[18px] " />
                  </Link>
                  <Link
                    to={student.uuid + "/remove"}
                    className="w-[40px] px-2 py-2 rounded-md text-red-600 hover:text-white border border-red-500 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 flex items-center justify-center"
                  >
                    <BiTrashAlt className="text-[18px] " />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
