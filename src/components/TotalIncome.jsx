import { useDispatch } from "react-redux";
import styles from "./TotalIncome.module.css";
import { modalActions } from "../store/modalSlice";
import { useSelector } from "react-redux";
const TotalIncome = () => {
  const dispatch = useDispatch();
  const totalIncome = useSelector((store) => store.totalIncome);
  let sum = 0;
  totalIncome.forEach((item) => {
    let amt = parseInt(item.amount, 10);
    if (!isNaN(amt)) {
      sum += amt;
    }
  });
  const handleTIClick = () => {
    dispatch(modalActions.incomeOpen());
    
  };
  return (
    <div className={styles.totalincome} onClick={handleTIClick}>
      <div className="word">
        <p className={styles.total}>Total</p>
        <p className={styles.income}>Income</p>
      </div>
      <p className={styles.amount}>₹{sum}</p>
    </div>
  );
};

export default TotalIncome;
