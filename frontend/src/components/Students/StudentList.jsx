import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ErrorRequest from "../ErrorRequest";
import ListLoader from "../ListLoader";
import { Link } from "react-router-dom";

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
      <div className="flex flex-col w-full rounded-b-md">
        {listStudent.map((student, index) => {
          return (
            <Link
              to={student.uuid + "/show"}
              className="h-[40px] w-full border-t border-l border-r border-slate-200 py-2 px-1 flex items-center"
              key={index}
            >
              <h5 className="text-[18px] leading-3 text-indigo-600 font-normal">
                {student.first_name} {student.last_name}
              </h5>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;
