import { createSlice } from "@reduxjs/toolkit";

export const sliceReview = createSlice({
  name: "selectReview",
  initialState: {
    value: 0,
  },
  reducers: {
    allReview: (state) => {
      console.log(state);
      state.value = 0;
    },
    point5: (state) => {
      console.log(state);
      state.value = 5;
    },
    point4: (state) => {
      state.value = 4;
    },
    point3: (state) => {
      console.log(state);
      state.value = 3;
    },
    point2: (state) => {
      if (state.value > 1) {
        state.value = 2;
      }
    },
    point1: (state) => {
      console.log(state);
      state.value = 1;
    },
    isImage: (state) => {
      state.value = 6;
    },
  },
});

export const { point1, point2, point3, point4, point5, isImage, allReview } =
  sliceReview.actions;

export const selectReviewa = (state) => state.selectReview.value;

export default sliceReview.reducer;
