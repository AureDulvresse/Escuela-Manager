import React from "react";
import { Link, Outlet } from "react-router-dom";
import SubTitleLayout from "../Layout/SubTitleLayout";

const NoteShow = () => {
  return (
    <div>
      <SubTitleLayout
        text={"Gestion des notes"}
        className={"flex items-center justify-between mt-4"}
      >
        <div className="flex gap-4 items-center justify-center mr-2">
          <Link
            to={"print"}
            className="h-[40px] px-2 rounded-md bg-indigo-600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center text-white"
          >
            Imprimer résultat
          </Link>
        </div>
      </SubTitleLayout>
      <div className="mt-6 mr-2 py-4 px-2 rounded-md shadow-sm bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default NoteShow;
