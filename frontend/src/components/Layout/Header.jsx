import React from "react";
import SearchBar from "../SearchBar";
import { BiMessage, BiSolidBell, BiUserCircle } from "react-icons/bi";

const Header = () => {
  return (
    <div className="py-3 px-2 flex items-center justify-between h-[70px] shadow-md">
      <SearchBar />
      <div className="flex items-center gap-[24px]">
        <div className="border-slate-200 border-r-[1px] flex items-center justify-center gap-[30px] px-8">
          <BiMessage className="text-indigo-600 text-[24px] cursor-pointer" />
          <BiSolidBell className="text-indigo-600 text-[24px] cursor-pointer" />
        </div>

        <div className="flex items-center gap-2 relative">
          <p className="text-md text-slate-700 font-bold">Aure Dulvresse</p>
          <div className="flex items-center justify-center cursor-pointer">
            <BiUserCircle className="bx bx-user-circle text-[34px] text-slate-700 font-semibold"></BiUserCircle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
