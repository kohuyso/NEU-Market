import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./redux/reducers/productSlice";
const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;