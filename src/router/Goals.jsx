import Sidebar from "../components/Sidebar";
import Heading from "../components/Heading";
import styles from "./Goals.module.css";
import GoalElement from "../components/GoalElement";
import InputGoal from "../components/InputGoal";
const Goals = () => {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="main">
        <Heading></Heading>
        <div className={styles.Goals}>
          <InputGoal></InputGoal>
          <GoalElement></GoalElement>
        </div>
      </div>
    </>
  );
};

export default Goals;
