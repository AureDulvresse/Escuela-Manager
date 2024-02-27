import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ListLoader from "../ListLoader";
import ErrorRequest from "../ErrorRequest";

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
      <h4 className="bg-indigo-600 text-white rounded-t-md w-full h-[50px] px-2 py-3 font-semibold">
        Etudiant{student.sexe == "M" ? "" : "e"} : {student.first_name}{" "}
        {student.last_name}
      </h4>
      <div></div>
    </div>
  );
};

export default StudentShow;
