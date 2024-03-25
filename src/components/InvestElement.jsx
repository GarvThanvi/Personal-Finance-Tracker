import styles from "../router/Goals.module.css";
import { RiEdit2Fill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { investActions } from "../store/investSlice";
const InvestElement = () => {
  const Investment = useSelector((store) => store.Investment);
  const dispatch = useDispatch();
  const handleRemoveInvest = (key) => {
    dispatch(investActions.removeInvest({key}))
  };

  return Investment.map((invest) => (
    <div key={invest.key} className={styles.goalelements}>
      <div className={styles.goalElement}>
        <p className={styles.value}>{invest.value}</p>
        <div className={styles.edit}>
          <RiEdit2Fill size={25} />
        </div>
        <div className={styles.cancel} onClick={() => handleRemoveInvest(invest.key)}>
          <MdCancel size={25}></MdCancel>
        </div>
      </div>
    </div>
  ));
};

export default InvestElement;
