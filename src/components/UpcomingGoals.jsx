import { useDispatch, useSelector } from "react-redux";
import styles from "./UpcomingGoals.module.css";
import { IoIosAddCircle } from "react-icons/io";
import { goalActions } from "../store/goalSlice";
import { Link } from "react-router-dom";

const UpcomingGoals = () => {
  const goals = useSelector((store) => store.upcomingGoals);
  const dispatch = useDispatch();

  const handleRemoveGoal = (key) => {
    dispatch(goalActions.removeGoal({ key }));
  };

  return (
    <div className={styles.upg}>
      <div className={styles.header}>
        <h3 className={styles.heading}>Upcoming Goals</h3>
      </div>
      
      {goals && goals.length > 0 ? (
  <div className={styles.allgoals}>
    {goals.slice(0, 2).map((goal) => (
      <div key={goal.key} className={styles.goal}>
        <p className={styles.name}>{goal.value}</p>
        <input
          className={styles.checkbox}
          type="checkbox"
          onChange={() => {
            handleRemoveGoal(goal.key);
          }}
        />
      </div>
    ))}
  </div>
) : (
  <div className={styles.goal}>
    <h1 className={styles.name}>Set your financial Goals</h1>
  </div>
)}

      <Link to="/goals" className={styles.show}>
        ShowAll
      </Link>
    </div>
  );
};

export default UpcomingGoals;
