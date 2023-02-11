import { configureStore } from "@reduxjs/toolkit";
import sliceReview from "../components/SellProduct/Body/DetalProduct/Review/ReviewComment/reviewCommentSlice";
import counterSlice from "../components/SellProduct/counter/counterSlice";
import cartSlice from "./reducers/cartSlice";
import productSlice from "./reducers/productSlice";
import userSlice from "./reducers/userSlice";

export default configureStore({
  reducer: {
    product: productSlice,
    user: userSlice,
    cart: cartSlice,
    counter: counterSlice,
    selectReview: sliceReview
  },
});
