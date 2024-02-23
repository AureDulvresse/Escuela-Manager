import React from "react";

import { Outlet } from "react-router-dom";

import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";

const Home = () => {
  return (
    <>
      <div className="flex">
        <div className="basis-[18%] min-h-screen border border-indigo-500">
          <Sidebar />
        </div>
        <div className="basis-[82%] min-h-screen border bg-white">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
