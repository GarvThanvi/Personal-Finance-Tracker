import { createSlice } from "@reduxjs/toolkit";

const goalSlice = createSlice({
  name: "upcomingGoals",
  initialState: [
    {
      key: 1,
      value: "Buy Iphone",
    },
    { key: 2, value: "Buy Laptop" },
  ],
  reducers: {
    addGoal: (state, action) => {
      const newGoal = {
        key: state.length > 0 ? state[state.length - 1].key + 1 : 1,
        value: action.payload.value,
      };
      state.push(newGoal);
    },
    removeGoal: (state, action) => {
      const indexToRemove = state.findIndex(
        (goal) => goal.key === action.payload.key
      );
      console.log(indexToRemove);
      if (indexToRemove !== -1) {
        state.splice(indexToRemove, 1);
      }
    },
  },
});

export const goalActions = goalSlice.actions;
export default goalSlice;
