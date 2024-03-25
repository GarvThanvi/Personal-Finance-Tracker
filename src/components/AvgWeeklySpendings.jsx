import styles from "./AvgWeeklySpendings.module.css";
import { useSelector } from "react-redux";
const AvgWeeklySpendings = () => {
  const totalExpense = useSelector((store) => store.totalExpense);
  let sum = 0;
  totalExpense.forEach((item) => {
    let amt = parseInt(item.amount, 10);
    if (!isNaN(amt)) {
      sum += amt;
    }
  });

  const avgWeeklySpendings = sum / 4;
  return (
    <div className={styles.totalincome}>
      <div className="word">
        <p className={styles.total}>Average Weekly</p>
        <p className={styles.income}>Spendings</p>
      </div>
      <p className={styles.amount}>₹{avgWeeklySpendings}</p>
    </div>
  );
};

export default AvgWeeklySpendings;
