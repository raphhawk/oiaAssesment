"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    //labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: [3, 6, 9],
        backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
      },
    ],
  };

  const options = {};
  return (
    <div className="w-[134px] h-[134px] ml-[60px] mt-[30px] mb-[40px]">
      <Pie
        width={134}
        height={134}
        data={data}
        options={options}
        className=""
      ></Pie>
    </div>
  );
};

export default PieChart;
