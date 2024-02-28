import { React } from "react";
const Modal = ({ title, children }) => {
  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <div className="w-1/3 bg-white rounded-md shadow-md min-h-40 ">
        <div className="bg-indigo-600 py-5 px-2 mb-1 rounded-t-md">
          <h3 className="text-white text-[26px] leading-3 font-normal">
            {title}
          </h3>
        </div>
        <div className="px-2 py-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
