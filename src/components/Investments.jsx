import styles from "./Investments.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Investments = () => {
  const investment = useSelector((store) => store.investment[0]);

  const totalIncome = useSelector((store) => store.totalIncome);
  let sumIncome = 0;
  totalIncome.forEach((income) => (sumIncome += +income.amount));

  return (
    <div className={styles.investments}>
      <h3 className={styles.heading}>Investments</h3>
      {investment && investment.name !== undefined ? (
        <div className={styles.investment}>
          <div className={styles.investheading}>
            <p className={styles.title}>{investment.name}</p>
            <p className={styles.amount}>
              ₹{investment.amount}/₹{sumIncome}
            </p>
          </div>

          <div className={styles.progress}>
            <div
              style={{ width: `${(investment.amount / sumIncome) * 100}%` }}
              className={styles.bar}
            ></div>
          </div>
        </div>
      ) : (
        <div className={styles.investment}>
          <div className={styles.investheading}>
            <p className={styles.title}>No investments made yet</p>
            <p className={styles.amount}>₹0/₹{sumIncome}</p>
          </div>

          <div className={styles.progress}>
            <div
              style={{ width: `${(0 / sumIncome) * 100}%` }}
              className={styles.bar}
            ></div>
          </div>
        </div>
      )}

      <Link className={styles.show} to="./invest">
        Show All
      </Link>
    </div>
  );
};

export default Investments;
