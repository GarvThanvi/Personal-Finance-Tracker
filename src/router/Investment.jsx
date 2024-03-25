import Sidebar from "../components/Sidebar";
import Heading from "../components/Heading";
import designs from "./Investment.module.css";
import InvestmentsSummary from "../components/InvestmentsSummary";
import { IoMdAddCircle } from "react-icons/io";
import SingleInvestment from "../components/SingleInvestment";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store/modalSlice";
import InputInvestment from "../components/InputInvestment";
import BarChart from "../components/BarChart";
import SidebarInvestment from "../components/SidebarInvestment";
const Investment = () => {
  const investState = useSelector((store) => store.modal.invest);
  const dispatch = useDispatch();
  const handleAddInvestment = () => {
    dispatch(modalActions.investOpen());
  };
  return (
    <>
      <SidebarInvestment></SidebarInvestment>
      <div className="main">
        <Heading></Heading>
        <div className="main-content">
          <div className={designs.investAndChart}>
            <BarChart className={designs.barchart}></BarChart>
            <InvestmentsSummary></InvestmentsSummary>
          </div>

          <div className={designs.AllInvestments}>
            <SingleInvestment></SingleInvestment>
          </div>
          <div className={designs.AddInv} onClick={handleAddInvestment}>
            <IoMdAddCircle color="black" size={40} />
          </div>
        </div>
        {investState && <InputInvestment></InputInvestment>}
      </div>
    </>
  );
};

export default Investment;
