import { useParams } from "react-router-dom";
import axios from "axios";

import StudentForm from "./StudentForm";
import StudentUpdateForm from "./StudentUpdateForm";
import { useEffect, useState } from "react";

const StudentRegistration = () => {
  const { pk } = useParams();
  const [currentStudent, setCurrentStudent] = useState({});

  const getCurrentStudent = async () => {
    const res = await axios.get(
      "http://127.0.0.1:8000/api/student/".concat(pk)
    );
    const data = res.data;
    return data;
  };

  useEffect(() => {
    setCurrentStudent(getCurrentStudent());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(currentStudent);

  return (
    <div>
      <h1 className="text-[20px] uppercase font-normal text-indigo-600">
        {pk == undefined ? "Enregistrement" : "Modification info"} d&apos;un(e)
        étudiant(e)
      </h1>
      {pk == undefined ? (
        <StudentForm />
      ) : (
        <StudentUpdateForm currentStudent={currentStudent} />
      )}
    </div>
  );
};

export default StudentRegistration;
