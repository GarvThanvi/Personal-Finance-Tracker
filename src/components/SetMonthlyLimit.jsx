import { useRef } from "react";
import { useDispatch } from "react-redux";
import { monthlyActions } from "../store/monthlySlice";
import { modalActions } from "../store/modalSlice";
import { MdCancel } from "react-icons/md";
import styles from "./SetMonthlyLimit.module.css";
import { TiTick } from "react-icons/ti";
const setMonthlyLimit = () => {
  const dispatch = useDispatch();
  const monthlyLimit = useRef();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const monthlyLimitSet = monthlyLimit.current.value;
    dispatch(monthlyActions.setMonthlyLimit(monthlyLimitSet));
    monthlyLimit.current.value = "";
    dispatch(modalActions.limitClose());

  };

  const handleCancelClick = () => {
    dispatch(modalActions.limitClose());
  };

  return (
    <div className={styles.monthlypop}>
      <MdCancel className={styles.cancel} onClick={handleCancelClick}/>
      <p className={styles.heading}>Cap Your Monthly Expenses</p>
      <form action="" className={styles.form}>
        <input
          className={styles.form1}
          type="text"
          ref={monthlyLimit}
          placeholder="Set Monthly Limit"
        />
        <TiTick className={styles.tick} onClick={handleFormSubmit}></TiTick>
      </form>
    </div>
  );
};

export default setMonthlyLimit;
