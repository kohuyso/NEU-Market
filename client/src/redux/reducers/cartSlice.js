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
      const item = state.list.find((item, index)=> item.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      }  else {
        state.list.push(action.payload)
      }

    },
    deleteItem: (state, action) => {
      // id
      state.list = state.list.filter(
        (item, index) => item.id !== action.payload.id
      );
    },
    increaseQuantity: (state, action) => {
      // id
      const item = state.list.find((item, index)=> item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } 
    },

    decreaseQuantity: (state, action) => {
      const item = state.list.find((item, index)=> item.id === action.payload.id);
      if (item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--;
      }
    },

    toggleItemActive: (state, action) => {
      // 1 item
      const item = state.list.find((item, index)=> item.id === action.payload.id);
      if (item) {
        item.active = !item.active;
      }
    },

    setAllActive: (state, action) => {
      // All item
      const list = state.list.map((item, index)=> ({
        ...item,
        active: true  
      }))
      state.list = list;
    },

    setAllNotActive: (state, action) => {
      const list = state.list.map((item, index)=> ({
        ...item,
        active: false
      }))
      state.list = list;
    },

    calcTotal: (state, action) => {
      let total = 0;
      const list = state.list.filter((item, index) => item.active)
      list.forEach(element => {
        total += element.quantity * element.price;
      });

      state.total = total;
    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem, toggleItemActive,
  setAllActive, setAllNotActive, calcTotal
} =  cartSlice.actions;

export const selectCart = (state) => state.cart.list;
export const selectTotalCart = (state) => state.cart.total;

export default cartSlice.reducer;
