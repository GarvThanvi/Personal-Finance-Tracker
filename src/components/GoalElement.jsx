import styles from "../router/Goals.module.css";
import { RiEdit2Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { goalActions } from "../store/goalSlice";
const GoalElement = () => {
  const upcomingGoals = useSelector((store) => store.upcomingGoals);
  const dispatch = useDispatch();
  const handleRemoveGoal = (key) => {
    dispatch(goalActions.removeGoal({key}))
  };

  return upcomingGoals.map((goal) => (
    <div key={goal.key} className={styles.goalelements}>
      <div className={styles.goalElement}>
        <input className={styles.inputCheckbox} type="checkbox" onChange={() => handleRemoveGoal(goal.key)}/>
        <p className={styles.value}>{goal.value}</p>
        <div className={styles.edit}>
          <RiEdit2Fill size={25} />
        </div>
        <div className={styles.cancel} onClick={() => handleRemoveGoal(goal.key)}>
          <MdCancel size={25}></MdCancel>
        </div>
      </div>
    </div>
  ));
};

export default GoalElement;
