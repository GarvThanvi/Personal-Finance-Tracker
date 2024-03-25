import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { Chart } from "chart.js/auto";
import styles from "./SavingsBarChart.module.css";

const SavingsBarChart = () => {
  const investment = useSelector((store) => store.investment);
  let sum = 0;
  investment.forEach((invest) => (sum += +invest.amount));

  const totalIncome = useSelector((store) => store.totalIncome);
  let sumIncome = 0;
  totalIncome.forEach((item) => {
    let amt = parseInt(item.amount, 10);
    if (!isNaN(amt)) {
      sumIncome += amt;
    }
  });

  const totalExpense = useSelector((store) => store.totalExpense);

  let sumExpense = 0;
  totalExpense.forEach((item) => {
    let amt = parseInt(item.amount, 10);
    if (!isNaN(amt)) {
      sumExpense += amt;
    }
  });

  const savings = sumIncome - (sum + sumExpense);
  useEffect(() => {
    let chartInstances = [];

    return () => {
      chartInstances.forEach((instance) => {
        instance.destroy();
      });
    };
  }, []);

  const getData = () => {
    return {
      labels: [
        "TotalIncome",
        "TotalExpense",
        "Amount Invested",
        "Amount Saved",
      ],
      datasets: [
        {
          label: "Amount",
          data: [sumIncome, sumExpense, sum, savings],
          backgroundColor: [
            "rgba(54, 162, 235, 0.5)",
            "rgba(255, 99, 132, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(255, 206, 86, 0.5)",
          ],
        },
      ],
    };
  };

  return (
    <div className={styles.barChart}>
      <h2 className={styles.chartHeading} style={{ fontWeight: "bold" }}>
        Savings
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
                  fontColor: "#f00",
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
                  stepSize: 1,
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.2)",
                },
              },
            ],
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
};

export default SavingsBarChart;
