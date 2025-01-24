// createSlice

import { createSlice } from "@reduxjs/toolkit";

// createAsyncThunk

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    changeByValue: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});

export const counterReducer = counterSlice.reducer;

export const { increment, decrement, changeByValue } = counterSlice.actions;
