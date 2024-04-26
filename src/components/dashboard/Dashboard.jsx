import React from "react";

import { serveys, patients } from "./data";
import { RiSurveyLine } from "react-icons/ri";
import { LuFilter } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";

import Statistics from "./Statistics";

const Dashboard = () => {
  return (
    <section className="p-2 overflow-y-scroll scroll-smooth">
      <h1 className="text-2xl font-bold text-gray-600">Dashboards</h1>
      <p className="text-gray-500">Welcome to the dashboard</p>

      {/* Survey Information */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {serveys.map((servey) => (
          <div className="p-2 rounded-lg bg-white shadow shadow-sm shadow-gray-300 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-600">
                {servey.title}
              </h2>
              <p className="text-gray-800 font-bold text-lg">{servey.value}</p>
            </div>
            <div className="p-2 rounded-lg bg-purple-600">
              <RiSurveyLine className="text-white text-lg h-6 w-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Patients Information */}
      <div className="grid grid-cols-3 gap-4 mt-4">
        {patients.map((patient) => (
          <div className="p-4 h-32 rounded-lg bg-purple-600 shadow shadow-sm shadow-gray-300 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-medium text-slate-50">
                {patient.title}
              </h2>
              <p className="text-white font-bold text-3xl">{patient.value}</p>
            </div>
          </div>
        ))}
        <div className="col-span-3 my-6 flex items-center justify-center gap-10">
          <button className="px-4 py-2 rounded-md font-semibold bg-white shadow shadow-sm shadow-slate-300">
            Create Patient
          </button>
          <button className="px-4 py-2 rounded-md font-semibold bg-white shadow shadow-sm shadow-slate-300">
            View Patient
          </button>
          <button className="px-4 py-2 rounded-md font-semibold bg-purple-600 text-white shadow shadow-sm shadow-slate-300">
            Bill Patient
          </button>
        </div>
      </div>

      {/* Quick Schedule Section */}
      <div className="">
        <h2 className="text-2xl font-bold text-gray-600">Quick Schedule</h2>
        <div className="mt-4 p-4 rounded-lg border-2 border-gray-700 border-dashed grid grid-cols-2 gap-2">
          <div>
            <p>Schedule Current Patient</p>
            <input
              type="text"
              placeholder="First Name"
              className="mt-4 p-2 h-12 w-full rounded-lg"
            />
          </div>
          <div>
            <p>Schedule New Patient</p>
            <input
              type="text"
              placeholder="First Name"
              className="mt-4 p-2 h-12 w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Total Surveys & Total Billing Section */}

      <div className="mt-8 grid grid-cols-2 gap-4 mt-4">
        <div className="p-4 rounded-lg bg-white shadow shadow-sm shadow-gray-300">
          <div>
            <h2 className="text-lg font-medium text-gray-600">Surveys</h2>
            <ul className="mt-6">
              {serveys.map((servey) => (
                <li
                  key={servey.title}
                  className="w-full flex items-center justify-between"
                >
                  <p className="font-bold text-purple-600">{servey.title}</p>
                  <p>{servey.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-white shadow shadow-sm shadow-gray-300">
          <div>
            <h2 className="text-lg font-medium text-gray-600">Total Billing</h2>
            <p className="text-gray-800 font-bold text-lg">$123,980</p>
          </div>
        </div>
      </div>
      {/* Survey Chart */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-600">Statistics</h2>
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-white gap-1 flex items-center ">
              <LuFilter className="text-gray-600 text-lg h-6 w-6" />
              <p>All Patients</p>
            </span>
            <span className="p-2 rounded-lg bg-white gap-1 flex items-center ">
              <LuCalendar className="text-gray-600 text-lg h-6 w-6" />
              <p>Last Month</p>
            </span>
          </div>
        </div>
        <div className="mt-4 p-4 rounded-lg bg-white shadow shadow-sm shadow-gray-300">
          <Statistics />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
