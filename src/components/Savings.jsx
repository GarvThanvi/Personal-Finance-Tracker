import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styles from "./Savings.module.css";
import { useSelector } from "react-redux";

ChartJS.register(ArcElement, Tooltip, Legend);

const Savings = () => {
  const totalExpense = useSelector((store) => store.totalExpense);
  let sumExpense = 0;
  totalExpense.forEach((expense) => (sumExpense += +expense.amount));

  const totalIncome = useSelector((store) => store.totalIncome);
  let sumIncome = 0;
  totalIncome.forEach((income) => (sumIncome += +income.amount));

  const investment = useSelector((store) => store.investment);
  let sumInvestment = 0;
  investment.forEach((invest) => (sumInvestment += +invest.amount));

  const savings = sumIncome - (sumExpense + sumInvestment);
  const data = {
    labels: ["Savings", "Investments", "Total Expenses"],
    datasets: [
      {
        data: [savings, sumInvestment, sumExpense],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    legend: {
      text: {
        fontColor: "white",
      },
    },
  };

  return (
    <div className={styles.savings}>
      <Doughnut
        className={styles.doughnut}
        data={data}
        options={options}
      ></Doughnut>
    </div>
  );
};

export default Savings;
