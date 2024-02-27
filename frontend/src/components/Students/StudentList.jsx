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
      <div className="flex flex-col w-full max-h-[240px] overflow-x-hidden rounded-b-md">
        <div className="h-[40px] w-full border-t border-l border-r border-slate-200 py-2 px-1 flex items-center justify-between"></div>
        {listStudent.map((student, index) => {
          return (
            <Link
              to={student.uuid + "/show"}
              className="h-[40px] w-full border-t border-l border-r border-slate-200 py-2 px-1 flex items-center justify-between hover:bg-slate-50"
              key={index}
            >
              <h5 className="text-[18px] leading-3 text-indigo-600 font-normal">
                {student.first_name} {student.last_name}
              </h5>
              <div className="flex justify-center gap-3">
                <Link className="w-[40px] py-2 px-2 rounded-md text-indigo-600 hover:text-white border border-indigo-400 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 flex items-center justify-center">
                  <BiPencil className="text-[18px] " />
                </Link>
                <Link
                  to={student.uuid + "/remove"}
                  className="w-[40px] px-2 py-2 rounded-md text-red-600 hover:text-white border border-red-500 shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 flex items-center justify-center"
                >
                  <BiTrashAlt className="text-[18px] " />
                </Link>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;
