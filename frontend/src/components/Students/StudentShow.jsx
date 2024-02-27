import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ListLoader from "../ListLoader";
import ErrorRequest from "../ErrorRequest";
import { BiPrinter } from "react-icons/bi";

const StudentShow = () => {
  const { pk } = useParams();

  const queryKey = ["showStudent"];
  const { isLoading, data, error } = useQuery({
    queryKey: queryKey,
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/student/".concat(pk))
        .then((res) => res.data),
  });

  const student = data || [];

  //console.log(student);

  if (isLoading) return <ListLoader />;

  if (error) return <ErrorRequest error={error.message} />;

  return (
    <div className="flex flex-col">
      <div className="bg-indigo-600 rounded-t-md w-full h-[50px] px-2 py-3 flex items-center justify-between">
        <h4 className="text-white font-semibold">
          Etudiant{student.sexe == "M" ? "" : "e"} : {student.first_name}{" "}
          {student.last_name}
        </h4>
        <button className="border border-white text-white hover:bg-slate-50 hover:text-indigo-600 h-[32px] px-2 rounded-md shadow-sm flex items-center gap-2">
          <span className="text-[16px]">Imprimer la fiche </span>
          <BiPrinter className="text-[16px]" />
        </button>
      </div>
      <div className="bg-slate-200 rounded-b-md px-2 py-3">
        <h3 className="text-slate-700">
          Né{student.sexe == "M" ? "" : "e"} le : {student.birthday}
        </h3>
      </div>
    </div>
  );
};

export default StudentShow;
