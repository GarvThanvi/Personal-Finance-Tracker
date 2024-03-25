import { createSlice } from "@reduxjs/toolkit";

const monthlySlice = createSlice({
  name: "monthlyLimit",
  initialState: 5000,
  reducers: {
    setMonthlyLimit: (state, action) => { 
      console.log(action);
      return state = action.payload;
      console.log(state);
    },
  },
});

export const monthlyActions = monthlySlice.actions;
export default monthlySlice;
