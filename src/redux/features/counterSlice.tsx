import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  counter: number | any;
}

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementBy: (state, action) => {
        
        state.counter += action.payload;
  
    },
    reset: (state) => {
      state.counter = 0;
    },
  },
});

export const { increment, decrement, incrementBy, reset } = counterSlice.actions;
export default counterSlice.reducer;
