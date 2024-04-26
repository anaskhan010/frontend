import React from "react";

import Statistics from "../dashboard/Statistics";
import { LuFilter, LuCalendar, LuDiamond } from "react-icons/lu";

const Surveys = () => {
  return (
    <main className="p-2 overflow-y-scroll scroll-smooth">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-600">Surveys</h2>
        <div className="flex items-center gap-3">
          <span className="p-2 rounded-lg bg-white gap-1 flex items-center ">
            <LuCalendar className="text-gray-600 text-lg h-6 w-6" />
            <p>Last Month</p>
          </span>
        </div>
      </div>
      <div className="mt-4 p-4 rounded-lg bg-white shadow shadow-sm shadow-gray-300">
        <Statistics />
      </div>
      {/* Questions Section */}
      <div className="p-2 my-14">
        <span className="flex items-center gap-2">
          <LuDiamond className="text-gray-600 text-lg h-6 w-6" />
          <p className="text-lg font-semibold">Questions</p>
        </span>
        <p className="mt-3">
          Design with this instance and the provided variant and property
          options or detach it to fully customize.
        </p>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          className="rounded-2xl w-full border border-gray-300 p-2 mt-4"
        ></textarea>
        <div className="flex items-center justify-end">
          <button className="px-4 py-2 rounded-lg bg-purple-600 text-white mt-4">
            Submit
          </button>
        </div>
      </div>
    </main>
  );
};

export default Surveys;
