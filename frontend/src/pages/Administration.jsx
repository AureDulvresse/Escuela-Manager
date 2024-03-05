import {
  BiGroup,
  BiMoney,
  BiSolidPencil,
  BiTime,
  BiUser,
} from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";
import SubTitleLayout from "../components/Layout/SubTitleLayout";

const Administration = () => {
  return (
    <div className="py-3 pl-3 bg-[#f6f6f6] rounded-sm">
      <SubTitleLayout
        text={"Administration"}
        className={
          "flex items-center justify-between border-b-[1.3px] border-b-slate-500"
        }
      >
        <div className="flex items-center justify-between gap-4 px-4">
          <NavLink
            to={"student/"}
            className="flex items-center justify-around gap-5 px-4 py-3 hover:border-b-indigo-600 hover:border-b-2 cursor-pointer"
          >
            <BiUser className="text-indigo-600 text-[24px] leading-4" />
            <p className="text-[14px] leading-3 font-bold text-indigo-600">
              Enseignants
            </p>
          </NavLink>
          <NavLink
            to={"notes/"}
            className="flex items-center justify-around gap-5 px-4 py-3 hover:border-b-indigo-600 hover:border-b-2 cursor-pointer"
          >
            <BiGroup className="text-indigo-600 text-[24px] leading-4" />
            <p className="text-[14px] leading-3 font-bold text-indigo-600">
              Autre Personnel
            </p>
          </NavLink>
          <NavLink
            to={"course/"}
            className="flex items-center justify-around gap-5 px-4 py-3 hover:border-b-indigo-600 hover:border-b-2 cursor-pointer"
          >
            <BiMoney className="text-indigo-600 text-[24px] leading-4" />
            <p className="text-[14px] leading-3 font-bold text-indigo-600">
              Paiements
            </p>
          </NavLink>

          <NavLink
            to={"/"}
            className="flex items-center justify-around gap-5 px-4 py-3 hover:border-b-indigo-600 hover:border-b-2 cursor-pointer"
          >
            <BiTime className="text-indigo-600 text-[24px] leading-4" />
            <p className="text-[14px] leading-3 font-bold text-indigo-600">
              Horaires
            </p>
          </NavLink>
        </div>
      </SubTitleLayout>

      <div className="mt-5 pb-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Administration;
