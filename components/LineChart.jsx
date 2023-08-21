"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useState, useEffect } from "react";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);

  const fetchData = async () => {
    const url =
      "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/od/rates_of_exchange?fields=country_currency_desc,exchange_rate, record_date&filter=record_date:gte:2015-01-01";
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const d1 = data.data.filter(
        (d) => d.country_currency_desc === "AFGHANISTAN-AFGHANI"
      );
      const d2 = data.data.filter(
        (d) => d.country_currency_desc === "ALBANIA-LEK"
      );

      let d1a = [];
      d1.map((d) => {
        d1a.push(parseFloat(d.exchange_rate));
      });

      let d2a = [];
      d2.map((d) => {
        d2a.push(parseFloat(d.exchange_rate));
      });

      setData1(d1a);
      setData2(d2a);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data1, data2);
  const data = {
    labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
    datasets: [
      {
        data: data1,
        backgroundColor: "white",
        borderColor: "#E9A0A0",
        pointBorderColor: "#E9A0A0",
        pointRadius: 0,
        pointBorderWidth: 1,
        tension: 0.5,
      },
      {
        data: data2,
        backgroundColor: "white",
        borderColor: "#9BDD7C",
        pointBorderColor: "#9BDD7C",
        pointRadius: 0,
        pointBorderWidth: 1,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 200,
        grid: { display: true },
        border: { display: false },
        ticks: {
          stepSize: 50,
        },
      },
    },
  };

  return (
    <div className="flex md:w-[921px] md:h-[227px] mt-[31px] ml-[40px]">
      <Line width={921} height={227} data={data} options={options}></Line>
    </div>
  );
};

export default LineChart;
