import StudentForm from "./StudentForm";

const StudentRegistration = () => {
  return (
    <div>
      <h1 className="text-[20px] uppercase font-normal text-indigo-600">
        Enregistrement d&apos;un(e) étudiant(e)
      </h1>
      <StudentForm />
    </div>
  );
};

export default StudentRegistration;
