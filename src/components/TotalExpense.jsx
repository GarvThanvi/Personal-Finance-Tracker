import styles from "./TotalExpense.module.css";
import { modalActions } from "../store/modalSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { CgDanger } from "react-icons/cg";
import { useState } from "react";
const TotalExpense = () => {
  const [showtip, setShowtip] = useState(false);
  const dispatch = useDispatch();
  const totalExpense = useSelector((store) => store.totalExpense);

  let sum = 0;
  totalExpense.forEach((item) => {
    let amt = parseInt(item.amount, 10);
    if (!isNaN(amt)) {
      sum += amt;
    }
  });

  let isDanger = true;
  const monthlyLimit = useSelector((store) => store.monthlyLimit);
  if (sum > monthlyLimit) {
    isDanger = true;
  } else {
    isDanger = false;
  }

  const handleEClick = () => {
    dispatch(modalActions.expenseOpen());
  };

  return (
    <div className={styles.totalincome} onClick={handleEClick}>
      <div className="word">
        <p className={styles.total}>Total</p>
        <p className={styles.income}>Expense</p>
      </div>
      <p className={styles.amount}>₹{sum}</p>
      <div
        onMouseEnter={() => setShowtip(true)}
        onMouseLeave={() => setShowtip(false)}
      >
        {isDanger && <CgDanger className={styles.danger} size={30} />}
      </div>

      {showtip && (
        <div className={styles.showexptip}>
          Your Expenses have exceeded the monthly limit that you set.
          <div className={styles.arrow}></div>
        </div>
        
      )}
    </div>
  );
};

export default TotalExpense;
