import { createSlice } from "@reduxjs/toolkit";
const totalExpenseSlice = createSlice({
  name: "totalExpense",
  initialState: [
    {
      value: "Groceries",
      amount: "4000",
    },
    {
      value: "Course Fee",
      amount: "2000",
    },
  ],
  reducers: {
    addExpense: (state, action) => {
      state.push(action.payload);
    },
    removeExpense: (state, action) => {
      const indexToRemove = state.findIndex((expense) => expense.value === action.payload.value);
      
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
  },
});
export const totalExpenseActions = totalExpenseSlice.actions;
export default totalExpenseSlice;
