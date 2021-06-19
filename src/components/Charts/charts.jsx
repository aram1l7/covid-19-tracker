import React, { useState, useEffect } from "react";
import { fetchDaily } from "../../api";
import { Line, Bar} from "react-chartjs-2";
import styles from "./charts.module.css";
const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const initialDailyData = await fetchDaily();
      setDailyData(initialDailyData);
    };

    fetchApi();
  }, []);
  
  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            type: "line",
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Total Cases:",

            borderColor: "blue",
            borderWidth: 2,
            fill: true,
          },
          {
            type: "line",
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths:",
            borderColor: "red",
            fill: true,
            backgroundColor: "rgba(255,0,0,0.7)",
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Total Cases", "Recoveries", "Deaths"],

        datasets: [
          {
            type: "bar",
            label: "People",
            backgroundColor: ["rgba(98, 1, 255, 0.7)", "rgba(1, 255, 77, 0.7)", "rgba(255, 1, 1, 0.7)"],
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

  return <div className={styles.container}>{country ? barChart : lineChart}</div>;
};

export default Chart;
