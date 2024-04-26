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

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define the months
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

// Data simulation function
const generateData = () =>
  months.map(() => ({
    totalPatients: Math.floor(Math.random() * 1000),
    newPatients: Math.floor(Math.random() * 3000),
    returningPatients: Math.floor(Math.random() * 2000),
  }));

const stackedData = generateData();

// Chart data
const data = {
  labels: months,
  datasets: [
    {
      label: "Total Patients",
      data: stackedData.map((d) => d.totalPatients),
      backgroundColor: "rgba(159, 90, 253,1)",
      borderRadius: 10,
      barPercentage: 0.7,
    },
    {
      label: "New Patients",
      data: stackedData.map((d) => d.newPatients),
      backgroundColor: "rgba(165, 55, 253,1)",
      borderRadius: 10,
      barPercentage: 0.7,
    },
    {
      label: "Returning Patients",
      data: stackedData.map((d) => d.returningPatients),
      backgroundColor: "rgba(140, 20, 252, 1)",
      borderRadius: 10,
      barPercentage: 0.7,
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
};

export const Statistics = () => (
  <div>
    <Bar data={data} options={options} />
  </div>
);

export default Statistics;
