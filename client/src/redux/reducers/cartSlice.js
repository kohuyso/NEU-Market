import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check id
      let flag = false;
      let total = state.total;

      for (let index = 0; index < state.list.length; index++) {
        if (state.list[index].id === action.payload.id) {
          state.list[index].quantity += action.payload.quantity;
          total += action.payload.quantity * state.list[index].price;
          flag = true;
          break;
        }
      }

      if (!flag) {
        total += action.payload.quantity * action.payload.price;
        state.list.push(action.payload);
      }
      state.total = total;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCart = (state) => state.cart.list;
export const selectTotalCart = (state) => state.cart.total;

export default cartSlice.reducer;
