import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart } from "chart.js/auto";
import styles from "./BarChart.module.css";

const BarChart = () => {
  const initialState = useSelector((store) => store.investment);

  useEffect(() => {
    let chartInstances = [];

    // Cleanup function to destroy the chart when component unmounts
    return () => {
      chartInstances.forEach((instance) => {
        instance.destroy();
      });
    };
  }, []);

  const getData = () => {
    const labels = initialState.map((item) => item.name);
    const amounts = initialState.map((item) => parseFloat(item.amount));
    const returnAmounts = initialState.map((item) =>
      parseFloat(item.returnAmount)
    );

    return {
      labels: labels,
      datasets: [
        {
          label: "Amount Invested",
          backgroundColor: "blue",
          data: amounts,
        },
        {
          label: "Return Amount",
          backgroundColor: "green",
          data: returnAmounts,
        },
      ],
    };
  };

  return (
    <div className={styles.barChart}>
      <h2 className={styles.chartHeading} style={{ fontWeight: "bold" }}>
        Investment Comparison
      </h2>
      <div className={styles.chartContainer}></div>
      <Bar
        className={styles.canvas}
        data={getData()}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  fontColor: "white", 
                  fontWeight: "bold", 
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.2)", 
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  fontColor: "white", 
                  fontWeight: "bold", 
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.2)", 
                },
              },
            ],
          },
          plugins: {
            legend: {
              labels: {
                fontColor: "white", 
                fontWeight: "bold", 
              },
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
