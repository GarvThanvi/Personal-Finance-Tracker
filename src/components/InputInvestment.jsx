import { FaCheckCircle } from "react-icons/fa";
import styles from "./InputInvestment.module.css";
import { MdCancel } from "react-icons/md";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { modalActions } from "../store/modalSlice";
import { investActions } from "../store/investSlice";
const InputInvestment = () => {
  const investType = useRef();
  const investAmount = useRef();
  const investReturn = useRef();
  const dispatch = useDispatch();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = investType.current.value;
    const amount = investAmount.current.value;
    const returnAmount = investReturn.current.value;
    console.log(name, amount, returnAmount);
    dispatch(investActions.addInvest({name, amount, returnAmount}));
    dispatch(modalActions.investClose());
  }

  const handleCloseInput = () => {
    dispatch(modalActions.investClose())
  }
  

  return (
    <div className={styles.box}>
      <div onClick={handleCloseInput}>
      <MdCancel className={styles.cancel}></MdCancel>
      </div>
      <form>
        <div className={styles.investType}>
          <label htmlFor="" className={styles.label1}>
            Investment Type
          </label>
          <input type="text" name="" id="" className={styles.input1} ref={investType} />
        </div>
        <div className={styles.investAmount}>
          <label htmlFor="" className={styles.label2}>
            Investment Amount
          </label>
          <input type="text" name="" id="" className={styles.input2} ref={investAmount}/>
        </div>
        <div className={styles.Return}>
          <label htmlFor="" className={styles.label3}>
            Return
          </label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Use + or - to indicate profit or loss"
            className={styles.input3}
            ref={investReturn}
          />
        </div>
      </form>
      <div className={styles.tick} onClick={handleFormSubmit}>
        <FaCheckCircle size={20} />
      </div>
    </div>
  );
};

export default InputInvestment;
