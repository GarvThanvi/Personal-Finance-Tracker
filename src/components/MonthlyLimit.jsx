import { useDispatch } from "react-redux";
import styles from "./MonthlyLimit.module.css";
import { modalActions } from "../store/modalSlice";
import { useSelector } from "react-redux";
const MonthlyLimit = () => {
  const monthlyLimit = useSelector((store) => store.monthlyLimit);
  const dispatch = useDispatch();
  const handleMonthlyLimit = () => {
    dispatch(modalActions.limitOpen());
  };
  return (
    <div className={styles.totalincome} onClick={handleMonthlyLimit}>
      <div className="word">
        <p className={styles.total}>Monthly</p>
        <p className={styles.income}>Limit</p>
      </div>
      <p className={styles.amount}>₹{monthlyLimit}</p>
    </div>
  );
};

export default MonthlyLimit;
