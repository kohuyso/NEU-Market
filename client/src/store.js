import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/Product/counter/counterSlice";
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;