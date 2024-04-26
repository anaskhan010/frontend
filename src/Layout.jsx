// Libs
import React from "react";
import { Outlet } from "react-router-dom";

// Components
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";

const Layout = () => {
  return (
    <>
      <div className="h-screen flex gap-4 w-screen p-2">
        <Sidebar />
        <div className="flex flex-col gap-4 h-full w-full">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
