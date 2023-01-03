import { configureStore } from '@reduxjs/toolkit';
import productSlice from './reducers/productSlice';
import userSlice from './reducers/userSlice';

export default configureStore({
    reducer: {
        product: productSlice,
        user: userSlice
    }
});