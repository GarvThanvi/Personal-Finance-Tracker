import { createSlice } from "@reduxjs/toolkit";
const totalIncomeSlice = createSlice({
  name: "totalIncome",
  initialState: [
    {
      value: "Job",
      amount: "8000",
    },
    {
      value: "Freelancing",
      amount: "2000",
    },
  ],
  reducers: {
    addIncome: (state, action) => {
      state.push(action.payload);
    },
    removeIncome: (state, action) => {
      const indexToRemove = state.findIndex((income) => income.value === action.payload.value);
      
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
  },
});
export const totalIncomeActions = totalIncomeSlice.actions;
export default totalIncomeSlice;
