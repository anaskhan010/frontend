import React from "react";

import { LuFilter } from "react-icons/lu";

const Patient = () => {
  return (
    <main className="p-2 overflow-y-scroll scroll-smooth">
      <div className="p-3 rounded-lg border-2 border-gray-600 border-dashed">
        <h2 className="text-2xl font-bold text-gray-600">Patients</h2>
        {/* Scheduling Form  */}
        <form>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="text-gray-600">Patient Id</label>
              <input
                type="text"
                placeholder="Enter Patient Name"
                className="p-2 rounded-lg w-full border border-gray-300"
              />
            </div>
            <div>
              <label className="text-gray-600">Patient Status</label>
              <input
                type="number"
                placeholder="Enter Patient Age"
                className="p-2 rounded-lg w-full border border-gray-300"
              />
            </div>
            <div>
              <label className="text-gray-600">Search By Study</label>
              <select className="p-2 rounded-lg w-full border border-gray-300">
                <option>Select Study</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <div>
              <label className="text-gray-600">From</label>
              <input
                type="date"
                className="p-2 rounded-lg w-full border border-gray-300"
              />
            </div>
            <div>
              <label className="text-gray-600">To</label>
              <input
                type="date"
                className="p-2 rounded-lg w-full border border-gray-300"
              />
            </div>
          </div>
        </form>

        {/* Apply Filters */}
        <button className="my-6 p-2 rounded-lg bg-white flex items-center gap-1">
          <LuFilter className="text-purple-300 text-lg h-6 w-6" />
          <p>Apply Filters</p>
        </button>

        {/* Scheduling Table */}

        <table className="w-full rounded-lg overflow-hidden">
          <thead className="bg-purple-500 text-white text-left text-sm font-bold">
            <tr>
              <th className="p-2">PATIENT ID</th>
              <th className="p-2">STUDY ENROLLED</th>
              <th className="p-2">PATIENT STATUS</th>
              <th className="p-2">STIPEND</th>
              <th className="p-2">NOTES FOR ADMIN</th>
              <th className="p-2">ACTION</th>
            </tr>
          </thead>
          <tbody>
            <tr className="font-semibold text-gray-600">
              <td className="p-2">254531</td>
              <td className="p-2">J3433, T7373, 7654C</td>
              <td className="p-2">New</td>
              <td className="p-2">25,000</td>
              <td className="p-2">Notes</td>
              <td className="p-2 underline text-purple-500">
                Actions Dropdown
              </td>
            </tr>
            <tr className="font-semibold text-gray-600">
              <td className="p-2">254532</td>
              <td className="p-2">JJ3433, T7373, 7654C</td>
              <td className="p-2">In-Transit</td>
              <td className="p-2">15,000</td>
              <td className="p-2">Notes</td>
              <td className="p-2 underline text-purple-500">
                Actions Dropdown
              </td>
            </tr>
            <tr className="font-semibold text-gray-600">
              <td className="p-2">254533</td>
              <td className="p-2">JJ3433, T7373, 7654C</td>
              <td className="p-2">In-Transit</td>
              <td className="p-2">15,000</td>
              <td className="p-2">Notes</td>
              <td className="p-2 underline text-purple-500">
                Actions Dropdown
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Patient;
