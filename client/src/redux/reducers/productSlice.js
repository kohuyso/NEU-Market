import { createSlice } from '@reduxjs/toolkit';
import Storage from '../../tools/Storage';

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: Storage.getData('product') ?? null
  },
  reducers: {
    addProduct: (state, action) => {
      Storage.setData('product', action.payload);
      state = { ...action.payload };
    },
  }
})

export const { addProduct } = productSlice.actions

export default productSlice.reducer