import "../App.css";
import Sidebar from "../components/Sidebar";
import Heading from "../components/Heading";
import TotalIncome from "../components/TotalIncome";
import TotalExpense from "../components/TotalExpense";
import AvgWeeklySpendings from "../components/AvgWeeklySpendings";
import MonthlyLimit from "../components/MonthlyLimit";
import UpcomingGoals from "../components/UpcomingGoals";
import Investments from "../components/Investments";
import FinancialAdvice from "../components/FinancialAdvice";
import Savings from "../components/Savings";
import TotalPop from "../components/TotalPop";
import ExpensePop from "../components/ExpensePop";
import { useSelector } from "react-redux";
import { modalActions } from "../store/modalSlice";
import SetMonthlyLimit from "../components/SetMonthlyLimit";
import Investment from "./Investment";

function App() {
  const income = useSelector((store) => store.modal.income);
  const expense = useSelector((store) => store.modal.expense);
  const limit = useSelector((store) => store.modal.limit);
  return (
    <>
      <Sidebar></Sidebar>
      <div className="main">
        <Heading></Heading>
        <div className="halves">
          <div className="lefthalf">
            <div className="squares">
              <TotalIncome></TotalIncome>
              <TotalExpense></TotalExpense>
              <AvgWeeklySpendings></AvgWeeklySpendings>
              <MonthlyLimit></MonthlyLimit>
            </div>
            <UpcomingGoals></UpcomingGoals>
            <Investments></Investments>
          </div>
          <div className="righthalf">
            <Savings></Savings>
            <FinancialAdvice></FinancialAdvice>
          </div>
        </div>
      </div>
      {income && <TotalPop />}
      {expense && <ExpensePop />}
      {limit && <SetMonthlyLimit />};
    </>
  );
}

export default App;
