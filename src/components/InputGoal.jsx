import styles from "../router/Goals.module.css";
import { useRef } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from "react-redux";
import { goalActions } from "../store/goalSlice";
const InputGoal = () => {
  const goalInput = useRef();
  const dispatch = useDispatch();

  const handleAddGoal = () => {
    const AddGoal = goalInput.current.value;
    dispatch(goalActions.addGoal({value: AddGoal }));
    goalInput.current.value = "";
  };
  
  return (
    <div className={styles.Form}>
      <form action="">
        <input
          className={styles.inputText}
          type="text"
          name=""
          id=""
          placeholder="+ Add Financial Goals you want to achieve"
          ref={goalInput}
        />
      </form>
      <div onClick={handleAddGoal}>
        <IoIosAddCircle size={30} className={styles.addIcon} />
      </div>
    </div>
  );
};

export default InputGoal;
