import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CounterSliceState {
  value: number;
}

const initialState: CounterSliceState = {
  value: 0,
};

export const counterSlice2 = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = state.value - action.payload;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Action creators are generated for each case reducer function.
export const {
  decrement,
  increment,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice2.actions;
