// Libs
import React from "react";

// Icons
import { IoSearch } from "react-icons/io5";
import { VscBook } from "react-icons/vsc";
import { PiNotificationDuotone } from "react-icons/pi";
import { IoPersonCircle } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className="h-14 flex justify-end items-center bg-white items-center p-2 w-full rounded-md">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 items-center justify-center rounded-lg bg-slate-100 p-2 hover:bg-purple-100">
          <IoSearch className="text-gray-600 text-lg h-6 w-6" />
        </div>
        <div className="w-10 h-10 items-center justify-center rounded-lg bg-slate-100 p-2 hover:bg-purple-100">
          <VscBook className="text-gray-600 text-lg h-6 w-6" />
        </div>
        <div className="w-10 h-10 items-center justify-center rounded-lg bg-slate-100 p-2 hover:bg-purple-100">
          <PiNotificationDuotone className="text-gray-600 text-lg h-6 w-6" />
        </div>

        <div className="h-10 flex items-center gap-2 rounded-lg bg-slate-100 p-2 hover:bg-purple-100">
          <IoPersonCircle className="text-gray-600 text-lg h-8 w-8" />
          <div>
            <h2 className="text-md font-bold">Dr Baloch</h2>
            <p className="text-xs text-purple-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
