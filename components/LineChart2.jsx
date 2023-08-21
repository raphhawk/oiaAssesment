"use client";
import { useEffect, useState } from "react";
import { Chart } from "chart.js";

const LineChart2 = () => {
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [ctxs, setCtxs] = useState(null);

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
    var ctx = document.getElementById("myChart").getContext("2d");
    setCtxs(ctx);
  }, []);

  var myChart = new Chart(ctxs, {
    type: "line",
    data: {
      labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
      datasets: [
        {
          data: data1,
          label: "guest",
          borderColor: "#E9A0A0",
          backgroundColor: "#FFFFFF",
          pointRadius: 0,
          fill: false,
          tension: 0.6,
        },
        {
          data: data2,
          label: "user",
          borderColor: "#9BDD7C",
          backgroundColor: "#FFFFFF",
          pointRadius: 0,
          fill: false,
          tension: 0.6,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          display: true,
          border: { display: false },
          ticks: {
            stepSize: 1,
          },
        },
      },
    },
  });
  myChart.destroy();
  var myChart = new Chart(ctxs, {
    type: "line",
    data: {
      labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
      datasets: [
        {
          data: data1,
          label: "guest",
          borderColor: "#E9A0A0",
          backgroundColor: "#FFFFFF",
          pointRadius: 0,
          fill: false,
          tension: 0.6,
        },
        {
          data: data2,
          label: "user",
          borderColor: "#9BDD7C",
          backgroundColor: "#FFFFFF",
          pointRadius: 0,
          fill: false,
          tension: 0.6,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          display: true,
          border: { display: false },
          ticks: {
            stepSize: 1,
          },
        },
      },
    },
  });
  return (
    <div className="w-[921px] h-[227px] mt-[31px] ml-[40px]">
      <canvas id="myChart" width={921} height={227}></canvas>
    </div>
  );
};

export default LineChart2;
