import { useSelector } from "react-redux";
import designs from "./InvestmentsSummary.module.css";

const InvestmentsSummary = () => {
  const totalIncome = useSelector((store) => store.totalIncome);
  let totalIncomeSum = 0
  totalIncome.forEach((income) => totalIncomeSum += +income.amount)
  const investment = useSelector((store) => store.investment);

  let sumAmount = 0;
  investment.forEach((invest) => sumAmount += +invest.amount);

  const getTotalReturnAmount = (data) => {
    let totalReturn = 0;
    data.forEach((item) => {
      const returnAmount = parseFloat(item.returnAmount.replace(/[^\d.-]/g, ''));
      if (!isNaN(returnAmount)) {
        totalReturn += returnAmount;
      }
    });
    return totalReturn;
  };

  const totalReturnAmount = getTotalReturnAmount(investment);

  const colorClass = totalReturnAmount < 0 ? 'negative' : 'positive';
  return (
    <div className={designs.investbox}>
      <div className={designs.yourIncome}>
        <h3 className={designs.yourincheading}>Your Income</h3>
        <h2 className={designs.yourincamount}>₹{totalIncomeSum}</h2>
      </div>
      <div className="invested-amount">
        <h4 className={designs.tiheading}>Total Investment</h4>
        <p className={designs.tiamount}>₹{sumAmount}</p>
        <h4 className={`${designs.returnheading}`}>Return</h4>
        <p className={`${designs.returnamount} ${colorClass}`}>{totalReturnAmount}</p>
      </div>
    </div>
  );
};

export default InvestmentsSummary;
