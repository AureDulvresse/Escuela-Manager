import React from "react";

const SubTitleLayout = ({ text, className, children }) => {
  return (
    <div className={className}>
      <h1 className="text-slate-500 text-[28px] leading-3 font-normal">
        {text}
      </h1>
      {children}
    </div>
  );
};

export default SubTitleLayout;
