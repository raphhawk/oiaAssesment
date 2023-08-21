"use client";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState([]);
  const fetchData = async () => {
    const url =
      "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?fields=country_currency_desc,exchange_rate, record_date&filter=record_date:gte:2015-01-01";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const d = data.data.filter((d) => d.record_date === "2015-06-30");
      let da = [];
      d.map((c) => {
        da.push(c.exchange_rate);
      });
      setChartData([da[0], da[1], da[2]]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const data = {
    datasets: [
      {
        data: chartData,
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
