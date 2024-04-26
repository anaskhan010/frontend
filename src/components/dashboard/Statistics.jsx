import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const patients = [
  {
    title: "Total Patients",
    value: 123980,
  },
  {
    title: "Referred Patients",
    value: 50098,
  },
  {
    title: "Total Billable",
    value: 45678,
  },
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels: months,
  datasets: [
    {
      label: "Total Patients",
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 10000)),
      backgroundColor: "rgba(147, 112, 219, 0.6)",
      borderColor: "rgba(147, 112, 219, 1)",
      borderWidth: 1,
      borderRadius: 5,
      barPercentage: 0.5,
    },
    {
      label: "New Patients",
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 5000)),
      backgroundColor: "rgba(186, 85, 211, 0.6)",
      borderColor: "rgba(186, 85, 211, 1)",
      borderWidth: 1,
      borderRadius: 5,
      barPercentage: 0.5,
    },
    {
      label: "Returning Patients",
      data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 3000)),
      backgroundColor: "rgba(216, 191, 216, 0.6)",
      borderColor: "rgba(216, 191, 216, 1)",
      borderWidth: 1,
      borderRadius: 5,
      barPercentage: 0.5,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
        color: "purple",
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        color: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
};

const Statistics = () => {
  return <Bar data={data} options={options} />;
};

export default Statistics;
