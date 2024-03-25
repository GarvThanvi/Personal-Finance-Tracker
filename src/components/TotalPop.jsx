import styles from "./TotalPop.module.css";
import { MdCancel } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { modalActions } from "../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { totalIncomeActions } from "../store/totalIncomeSlice";
const TotalPop = () => {
  const dispatch = useDispatch();

  const totalIncome = useSelector((store) => store.totalIncome);
  const handleCancelClick = () => {
    dispatch(modalActions.incomeClose());
  };

  let sum = 0;
  totalIncome.forEach((item) => {
    let amt = parseInt(item.amount, 10);
    if (!isNaN(amt)) {
      sum += amt;
    }
  });

  const valueElement = useRef();
  const amountElement = useRef();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const value = valueElement.current.value;
    const amount = amountElement.current.value;
    dispatch(totalIncomeActions.addIncome({ value, amount }));
    valueElement.current.value = "";
    amountElement.current.value = "";
  };

  const handleIncomeDelete = (value) => {
    dispatch(totalIncomeActions.removeIncome({value}));
  }

  return (
    <div className={styles.totalpop}>
      <MdCancel className={styles.cancel} onClick={handleCancelClick} />
      <div className={styles.whole}>
        <h1 className={styles.heading}>
          <span>Total Income</span> <span>₹{sum}</span>
        </h1>

        <form>
          <div className={styles.income}>
            <p>
              <input
                className={styles.form1}
                type="text"
                placeholder="Enter Source of Income"
                ref={valueElement}
              />
            </p>
            <p>
              <input
                className={styles.form2}
                type="text"
                placeholder="Enter Amount"
                ref={amountElement}
              />
            </p>
          </div>
        </form>

        {totalIncome.map((item) => (
          <div className={styles.income} key={item.value}>
            <p className={styles.value}>{item.value}</p>
            <div className={styles.amountdelete}>
              <p className={styles.amount}>₹{item.amount}</p>
              <div onClick={() => handleIncomeDelete(item.value)}>
              <MdDelete className={styles.deleteButton}  />
              </div>
            </div>
          </div>
        ))}
        <div onClick={handleFormSubmit}>
          <img className={styles.add} src="addbutton.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TotalPop;
