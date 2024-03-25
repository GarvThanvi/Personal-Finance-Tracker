import { configureStore } from "@reduxjs/toolkit";
import totalIncomeSlice from "./totalIncomeSlice";
import modalSlice from "./modalSlice";
import totalExpenseSlice from "./totalExpenseSlice";
import monthlySlice from "./monthlySlice";
import goalSlice from "./goalSlice";
import investSlice from "./investSlice";
const pftStore = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    totalIncome: totalIncomeSlice.reducer,
    totalExpense: totalExpenseSlice.reducer,
    monthlyLimit: monthlySlice.reducer,
    upcomingGoals: goalSlice.reducer,
    investment: investSlice.reducer
  },
});

export default pftStore;
