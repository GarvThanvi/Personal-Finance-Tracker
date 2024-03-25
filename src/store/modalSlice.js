import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    income: false,
    expense: false,
    limit: false,
    invest: false,
    investPage: false,
  },
  reducers: {
    incomeOpen: (state) => {
        state.income = true;
    },
    incomeClose: (state) => {
        state.income = false;
    },
    expenseOpen: (state) => {
      state.expense = true;
    },
    expenseClose : (state) => {
      state.expense = false;
    },
    limitOpen: (state) => {
      state.limit = true;
    },
    limitClose: (state) => {
      state.limit = false;
    },
    investOpen: (state) => {
      state.invest = true;
    },
    investClose: (state) => {
      state.invest = false;
    },
  }
});
export const modalActions = modalSlice.actions;
export default modalSlice;
