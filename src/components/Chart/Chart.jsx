import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

//Takes daily data and outputs it into a chart
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchAPI();
  }, []);

  //Line charts used on global data
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            hoverBorderColor: "white",
            pointBorderColor: "rgba(255, 159, 101, 1)",
            backgroundColor: "rgba(255, 159, 101, 0.2)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            hoverBorderColor: "white",
            pointBorderColor: "rgba(120, 33, 41, 1)",
            backgroundColor: "rgba(120, 33, 41, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  //bar charts are used when country is specified
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: [
              "rgba(255, 159, 101, 0.5)",
              "rgba(197, 255, 101, 0.5)",
              "rgba(120, 33, 41, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
