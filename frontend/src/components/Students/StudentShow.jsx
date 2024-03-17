import { Link, useParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import ListLoader from "../ListLoader";
import ErrorRequest from "../ErrorRequest";
import { BiPencil, BiPrinter } from "react-icons/bi";

const StudentShow = () => {
  const { pk } = useParams();

  // eslint-disable-next-line no-unused-vars
  const queryClient = useQueryClient();
  const queryKey = ["showStudent"];
  const { isLoading, data, error } = useQuery({
    queryKey: queryKey,
    queryFn: async () =>
      await axios
        .get("http://127.0.0.1:8000/api/student/".concat(pk))
        .then((res) => res.data),
  });

  const student = data || [];

  const classe = async () => {
    return await fetch(
      "http://127.0.0.1:8000/api/promo/".concat(student.promotion)
    );
  };
  console.log(classe);

  if (isLoading) return <ListLoader />;

  if (error) return <ErrorRequest error={error.message} />;

  return (
    <div className="flex flex-col w-full">
      <div className="bg-indigo-600 rounded-t-md w-full h-[50px] px-2 py-3 flex items-center justify-between">
        <h4 className="text-white font-semibold">
          Carte étudiant{student.sexe == "M" ? "" : "e"} : {student.first_name}{" "}
          {student.last_name}
        </h4>
        <button className="border border-white text-white hover:bg-slate-50 hover:text-indigo-600 h-[32px] px-2 rounded-md shadow-sm flex items-center gap-2">
          <span className="text-[16px]">Imprimer la carte </span>
          <BiPrinter className="text-[16px]" />
        </button>
      </div>
      <div className="bg-slate-200 rounded-b-md px-2 py-3 grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h3 className="text-slate-700 text-[18px] py-1 px-2 rounded-sm border-b-[1px] border-slate-50">
            Nom : <span className="font-semibold">{student.last_name}</span>
          </h3>
          <h3 className="text-slate-700 text-[18px] py-1 px-2 rounded-sm border-b-[1px] border-slate-50">
            Prénoms :{" "}
            <span className="font-semibold">{student.first_name}</span>
          </h3>
          <h3 className="text-slate-700 text-[18px] py-1 px-2 rounded-sm border-b-[1px] border-slate-50">
            Date de naissance :{" "}
            <span className="font-semibold">{student.birthday}</span>
          </h3>

          <h3 className="text-slate-700 text-[18px] py-1 px-2 rounded-sm border-b-[1px] border-slate-50">
            Lieu de naissance :{" "}
            <span className="font-semibold">{student.place_birth}</span>
          </h3>
          <h3 className="text-slate-700 text-[18px] py-1 px-2 rounded-sm border-b-[1px] border-slate-50">
            Classe : <span className="font-semibold">{classe.designation}</span>
          </h3>
          <h3 className="text-slate-700 text-[18px] py-1 px-2 rounded-sm border-b-[1px] border-slate-50">
            Addresse : <span className="font-semibold">{student.address}</span>
          </h3>
          <h3 className="text-slate-700 text-[18px] py-1 px-2 rounded-sm border-b-[1px] border-slate-50">
            Téléphone : <span className="font-semibold">{student.phone}</span>
          </h3>
        </div>
        <div className="flex items-center justify-center flex-col">
          <div className="relative rounded-lg h-36 w-36 border border-slate-100 ring-1 ring-slate-100">
            <img src={student.profil_picture} alt="Photo identité" />
          </div>
          <div className="mt-4 h-[50px] flex items-center justify-center">
            <h1>Code bar here</h1>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <Link
          to={"/academy/student-management/student/".concat(student.uuid + "/update/")}
          className="w-[230px] py-2 px-2 rounded-md bg-indigo-700 text-slate-100 border border-indigo-400 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 flex items-center justify-center"
        >
          <BiPencil className="text-[18px]" />
          <span className="text-[18px]">Modifier inforamtions</span>
        </Link>
      </div>
    </div>
  );
};

export default StudentShow;
