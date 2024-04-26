import React from "react";
const serveys = [
  {
    title: "Total Surveys",
    value: 123980,
  },
  {
    title: "In Progress",
    value: 50098,
  },
  {
    title: "Completed",
    value: 45678,
  },
];

const SurveyInformation = () => {
  {
    serveys.map((servey) => (
      <div className="p-2 rounded-lg bg-white shadow shadow-sm shadow-gray-300 border border-black">
        <div>
          <h2 className="text-lg font-bold text-gray-600">{servey.title}</h2>
          <p className="text-gray-500">{servey.value}</p>
        </div>
      </div>
    ));
  }
};

export default SurveyInformation;
