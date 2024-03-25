import { MdDelete } from "react-icons/md";
import designs from "./SingleInvestment.module.css";
import { useDispatch, useSelector } from "react-redux";
import { investActions } from "../store/investSlice";
const SingleInvestment = () => {
  const investments = useSelector((store) => store.investment);
  const dispatch = useDispatch();
  const handleDeleteInvestment = (amount) => {
    dispatch(investActions.deleteInvest(amount));
  };
  return (
    <>
      {investments.map((item) => (
        <div className={designs.SingleInvestment}>
          <h2 className={designs.SIName}>{item.name}</h2>
          <p className={designs.siname}>Amount</p>
          <h3 className={designs.siamount}>₹{item.amount}</h3>
          <p className={designs.returnname}>Return</p>
          <h3 className={designs.returnamount}>{item.returnAmount}</h3>
          <div
            className={designs.delete}
            onClick={() => {handleDeleteInvestment(item.amount)}}
          >
            <MdDelete color="red" size={25} />
          </div>
        </div>
      ))}
    </>
  );
};

export default SingleInvestment;
