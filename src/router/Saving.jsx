import Sidebar from "../components/Sidebar";
import Heading from "../components/Heading";
import TotalIncome from "../components/TotalIncome";
import TotalExpense from "../components/TotalExpense";
import TotalInvested from "../components/TotalInvested";
import TotalSavings from "../components/TotalSavings";
import SavingsBarChart from "../components/SavingsBarChart";
const Saving = () => {
  
  return (
    <>
      <Sidebar></Sidebar>
      <div className="main">
        <Heading></Heading>
        <div className="squares">
          <TotalIncome></TotalIncome>
          <TotalExpense></TotalExpense>
          <TotalInvested></TotalInvested>
          <TotalSavings></TotalSavings>
        </div>
        <center>
          <SavingsBarChart></SavingsBarChart>
        </center>
      </div>
    </>
  );
};

export default Saving;
