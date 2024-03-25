import styles from "./TotalInvested.module.css";
import { useSelector } from "react-redux";
const TotalInvested = () => {
  const investment = useSelector((store) => store.investment);
  let sum = 0;
  investment.forEach((invest) => (sum += +invest.amount));

  return (
    <div className={styles.totalincome}>
      <div className="word">
        <p className={styles.total}>Total Amount</p>
        <p className={styles.income}>Invested</p>
      </div>
      <p className={styles.amount}>₹{sum}</p>
    </div>
  );
};

export default TotalInvested;
