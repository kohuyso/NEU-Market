import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "moveslide",
  initialState: [],
  reducers: {
    moveLeft(state, action) {
      state.push(action.payload);
    },
    moveRight(state, action) {
      state.splice(action.payload, 1);
    },
  },
});
