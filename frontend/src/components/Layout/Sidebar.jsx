import React from "react";
import {
  BiCog,
  BiSolidGraduation,
  BiSolidGroup,
  BiSolidHomeAlt2,
} from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-indigo-600 h-full fixed w-[18%] shadow-sm px-2">
      <div className="h-[70px] px-2 py-5 border-b-[1px] border-[rgba(108,101,249,0.6)] flex items-center justify-center">
        <h1 className="text-white leading-3 text-[20px] font-semibold cursor-pointer">
          <BiSolidGraduation className="text-white text-[30px]" />
          <span className="font-protest">School Manager</span>
        </h1>
      </div>
      <NavLink
        to={"/"}
        className="flex items-center justify-around gap-5 py-6 border-b-[1px] rounded-md hover:bg-[rgba(108,101,249,0.6)] border-[rgba(108,101,249,0.6)] cursor-pointer"
      >
        <p className="text-[14px] leading-3 font-bold text-white w-[60%]">
          Accueil
        </p>
        <BiSolidHomeAlt2 className="text-white text-[24px] leading-4" />
      </NavLink>
      <NavLink
        to={"academy/"}
        className="flex items-center justify-around gap-5 py-6 border-b-[1px] rounded-md hover:bg-[rgba(108,101,249,0.6)] border-[rgba(108,101,249,0.6)] cursor-pointer"
      >
        <p className="text-[14px] leading-3 font-bold text-white w-[60%]">
          Académie
        </p>
        <BiSolidGraduation className="text-white text-[24px] leading-4" />
      </NavLink>
      <NavLink
        to={"administration/"}
        className="flex items-center justify-around gap-5 py-6 border-b-[1px] rounded-md hover:bg-[rgba(108,101,249,0.6)] border-[rgba(108,101,249,0.6)] cursor-pointer"
      >
        <p className="text-[14px] leading-3 font-bold text-white w-[60%]">
          Administration
        </p>
        <BiSolidGroup className="text-white text-[24px] leading-4" />
      </NavLink>
      <NavLink
        to={"config/"}
        className="flex items-center justify-around gap-5 py-6 border-b-[1px] border-[rgba(108,101,249,0.6)] rounded-md hover:bg-[rgba(108,101,249,0.6)] cursor-pointer"
      >
        <p className="text-[14px] leading-3 font-bold text-white w-[60%]">
          Configuration
        </p>

        <BiCog className="text-white text-[24px] leading-4" />
      </NavLink>
    </div>
  );
};

export default Sidebar;
