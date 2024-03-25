import { useSelector } from "react-redux";
import styles from "./TotalSavings.module.css";
const TotalSavings = () => {
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
      sumExpense +=amt;
    }
  });

  const savings = sumIncome - (sum + sumExpense);
  return (
    <div className={styles.totalincome}>
      <p className={styles.total}>Total Amount Saved</p>

      <p className={styles.amount}>₹{savings}</p>
      <div className={styles.investment}>
        <div className={styles.investheading}>
          <p className={styles.amount}>
            ₹{savings}/₹{sumIncome}
          </p>
        </div>

        <div className={styles.progress}>
          <div
            style={{ width: `${(savings / sumIncome) * 100}%` }}
            className={styles.bar}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TotalSavings;
