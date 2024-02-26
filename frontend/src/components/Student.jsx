import { Link, Outlet } from "react-router-dom";
import SubTitleLayout from "./Layout/SubTitleLayout";

const Student = () => {
  return (
    <div>
      <SubTitleLayout
        text={"Gestion des étudiants"}
        className={"flex items-center justify-between mt-4"}
      >
        <div className="flex gap-4 items-center justify-center mr-2">
          <Link
            to={""}
            className="h-[40px] px-2 rounded-md border-[1.4px] border-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center text-indigo-600 hover:text-white transition-colors"
          >
            Liste des étudiants
          </Link>
          <Link
            to={"new/"}
            className="h-[40px] px-2 rounded-md bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center text-white"
          >
            Enregistrer un étudiant
          </Link>
        </div>
      </SubTitleLayout>
      <div className="mt-6 mr-2 py-4 px-2 rounded-md shadow-sm bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Student;
