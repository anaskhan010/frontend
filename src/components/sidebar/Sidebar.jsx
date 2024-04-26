// Libs
import React from "react";
import { NavLink } from "react-router-dom";

// Icons
import { TbBrandGoogleHome } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GoPersonAdd } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiSettings3Line } from "react-icons/ri";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";

const Sidebar = () => {
  return (
    <div className="w-72 p-4 bg-white rounded-md">
      <h1 className="text-xl font-bold text-gray-600">
        Research <br />
        Hero
      </h1>
      <ul className="flex flex-col gap-8  mt-10">
        <NavLink to="/">
          <li className="flex items-center gap-2">
            <span className="group p-2 rounded-lg hover:bg-purple-500">
              <TbBrandGoogleHome className="text-gray-600 group-hover:text-white text-lg h-6 w-6" />
            </span>
            <p>Dashboard</p>
          </li>
        </NavLink>
        <NavLink to="/scheduling">
          <li className="flex items-center gap-2">
            <span className="group p-2 rounded-lg hover:bg-purple-500">
              <HiOutlineDocumentText className="text-gray-600 group-hover:text-white text-lg h-6 w-6" />
            </span>
            <p>Scheduling</p>
          </li>
        </NavLink>
        <NavLink to="/patients">
          <li className="flex items-center gap-2">
            <span className="group p-2 rounded-lg hover:bg-purple-500">
              <GoPersonAdd className="text-gray-600 group-hover:text-white text-lg h-6 w-6" />
            </span>
            <p>Patients</p>
          </li>
        </NavLink>
        <li className="flex items-center gap-2">
          <span className="group p-2 rounded-lg hover:bg-purple-500">
            <LuLayoutDashboard className="text-gray-600 group-hover:text-white text-lg h-6 w-6" />
          </span>
          <p>Layout</p>
        </li>
        <li className="flex items-center gap-2">
          <span className="group p-2 rounded-lg hover:bg-purple-500">
            <HiOutlineMailOpen className="text-gray-600 group-hover:text-white text-lg h-6 w-6" />
          </span>
          <p>Mail</p>
        </li>
        <li className="flex items-center gap-2">
          <span className="group p-2 rounded-lg hover:bg-purple-500">
            <RiSettings3Line className="text-gray-600 group-hover:text-white text-lg h-6 w-6" />
          </span>
          <p>Settings</p>
        </li>
        <li className="flex items-center gap-2">
          <span className="group p-2 rounded-lg hover:bg-purple-500">
            <MdOutlineLibraryBooks className="text-gray-600 group-hover:text-white text-lg h-6 w-6" />
          </span>
          <p>Library</p>
        </li>
        <li className="flex items-center gap-2">
          <span className="group p-2 rounded-lg hover:bg-purple-500">
            <LuLogOut className="text-gray-600 group-hover:text-white text-lg h-6 w-6" />
          </span>
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
