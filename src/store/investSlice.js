import { createSlice } from "@reduxjs/toolkit";

const investSlice = createSlice({
  name: "investment",
  initialState: [
    {
      name: "Stock Market",
      amount: "2000",
      returnAmount: "+200",
    },
  ],
  reducers: {
    addInvest: (state, action) => {
      state.push(action.payload);
    },
    deleteInvest: (state, action) => {
      const indexToRemove = state.findIndex(
        (invest) => invest.amount === action.payload
        );
        if (indexToRemove !== -1) {
          state.splice(indexToRemove, 1);
        }
    },
  },
});

export const investActions = investSlice.actions;
export default investSlice;
