import styles from "./TotalPop.module.css";
import { MdCancel } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { modalActions } from "../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { totalExpenseActions } from "../store/totalExpenseSlice";
const ExpensePop = () => {
  const dispatch = useDispatch();

  const totalExpense = useSelector((store) => store.totalExpense);
  const handleCancelClick = () => {
    dispatch(modalActions.expenseClose());
  };

  let sum = 0;
  totalExpense.forEach((item) => {
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
    dispatch(totalExpenseActions.addExpense({ value, amount }));
    valueElement.current.value = "";
    amountElement.current.value = "";
  };

  const handleExpenseDelete = (value) => {
    dispatch(totalExpenseActions.removeExpense({ value }));
  };

  return (
    <div className={styles.expensepop}>
      <MdCancel className={styles.cancel} onClick={handleCancelClick} />
      <div className={styles.whole}>
        <h1 className={styles.heading}>
          <span>Total Expense</span> <span>₹{sum}</span>
        </h1>

        <form>
          <div className={styles.income}>
            <p>
              <input
                className={styles.form1}
                type="text"
                placeholder="Enter name of Expense"
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

        {totalExpense.map((item) => (
          <div className={styles.income} key={item.value}>
            <p className={styles.value}>{item.value}</p>
            <div className={styles.amountdelete}>
              <p className={styles.amount}>₹{item.amount}</p>
              <div onClick={() => handleExpenseDelete(item.value)}>
                <MdDelete className={styles.deleteButton} />
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

export default ExpensePop;
