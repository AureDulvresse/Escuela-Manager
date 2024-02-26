import React from "react";

const StatBox = ({ libelle, value, children }) => {
  return (
    <div className="h-[100px] rounded-md shadow-sm bg-white hover:translate-y-[-10px] hover:transition-transform transition-transform hover:border-b-4 hover:border-indigo-500 cursor-pointer flex items-center justify-around px-2">
      <div className="flex items-center flex-col">
        <h2 className="text-slate-500 text-[11px] leading-[17px] font-semibold">
          {libelle}
        </h2>
        <h1 className="text-indigo-600 text-[34px] font-bold">{value}</h1>
      </div>
      {children}
    </div>
  );
};

export default StatBox;
