import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const StudentRegistration = () => {
  const { pk } = useParams();

  const queryKey = ["getCurrentStudent"];
  const { data } = useQuery({
    queryKey: queryKey,
    queryFn: async () =>
      await axios
        .get(
          "http://127.0.0.1:8000/api/student/".concat(pk == undefined ? "" : pk)
        )
        .then((res) => res.data),
  });

  const studentData = data || [];

  return (
    <div>
      <h1 className="text-[20px] uppercase font-normal text-indigo-600">
        {pk == undefined ? "Enregistrement" : "Modification info"} d&apos;un(e)
        étudiant(e)
      </h1>
      <StudentForm initialValue={studentData.lenght === 1 ? studentData : null} />
    </div>
  );
};

export default StudentRegistration;
