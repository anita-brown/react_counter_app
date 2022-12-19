import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number | any
}

export const counterSlice = createSlice({
  name: "counter",
  initialState:  {
    counter: 60,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
