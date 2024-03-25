import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.heading}>Fiidom</h1>
      <Link to="/" className={styles.navelement}>
        <img className={styles.img} src="./vertical-chart.png" alt="" />{" "}
        Dashboard
      </Link>
      <Link to="/goals" className={styles.navelement}>
        <img className={styles.img} src="./target.png" alt="Goals" />
        Goals
      </Link>
      <Link to="/invest" className={styles.navelement}>
        <img className={styles.img} src="./investment.png" alt="Investments" />
        Investments
      </Link>
      <Link to="/savings" className={styles.navelement}>
        <img className={styles.img} src="./Savings.png" alt="Savings" />
        Savings
      </Link>
      <div className={styles.logout}>
        <a href="#" className={styles.navelement}>
          <img className={styles.img} src="./logoutt.png" alt="Logout" />
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
